"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

declare global {
  interface Window { __lenis?: Lenis }
}

/**
 * Cuộn mượt có quán tính (Lenis) + theo dõi chiều cuộn:
 * - html[data-dir="up"|"down"] để CSS đổi hướng hiệu ứng hiện dần
 * - header tự ẩn khi cuộn xuống, hiện lại khi cuộn lên
 * - ảnh nền tiêu đề trang phụ trôi chậm (parallax)
 */
export default function SmoothScroll() {
  const path = usePathname();

  useEffect(() => {
    const html = document.documentElement;
    // Máy yếu / tiết kiệm dữ liệu / người dùng tắt chuyển động → chế độ nhẹ: cuộn thường, bỏ hiệu ứng nặng
    const nav = navigator as Navigator & { deviceMemory?: number; connection?: { saveData?: boolean } };
    const weak = (nav.deviceMemory !== undefined && nav.deviceMemory <= 2) || (nav.hardwareConcurrency || 8) <= 2 || !!nav.connection?.saveData;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches || weak || !("IntersectionObserver" in window);
    html.classList.toggle("lite", reduce);
    let last = window.scrollY;

    const onScroll = (y: number) => {
      const header = document.querySelector("header");
      const dir = y > last + 2 ? "down" : y < last - 2 ? "up" : html.dataset.dir;
      if (dir) html.dataset.dir = dir;
      header?.classList.toggle("hide", dir === "down" && y > 160);
      last = y;
      const max = html.scrollHeight - innerHeight;
      html.style.setProperty("--prog", String(max > 0 ? Math.min(1, y / max) : 0));
      const bg = document.querySelector<HTMLElement>("section.ph img");
      if (bg && !reduce) bg.style.transform = `translateY(${Math.min(y, 900) * 0.35}px)`;
    };

    if (reduce) {
      const h = () => onScroll(window.scrollY);
      window.addEventListener("scroll", h, { passive: true });
      return () => window.removeEventListener("scroll", h);
    }

    const lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 1, anchors: { offset: -64 } });
    window.__lenis = lenis;
    lenis.on("scroll", ({ scroll }) => onScroll(scroll));
    let raf = 0;
    const loop = (t: number) => { lenis.raf(t); raf = requestAnimationFrame(loop); };
    raf = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(raf); lenis.destroy(); delete window.__lenis; };
  }, []);

  // Đổi trang: về đầu trang ngay, không trượt
  useEffect(() => {
    if (!location.hash) window.__lenis?.scrollTo(0, { immediate: true });
  }, [path]);

  return null;
}
