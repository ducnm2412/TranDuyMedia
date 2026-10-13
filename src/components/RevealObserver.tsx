"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Hiệu ứng hiện dần hai chiều: vào khung nhìn thì hiện, ra khỏi hẳn thì ẩn
 * để khi cuộn ngược lại hiệu ứng chạy lần nữa. Chạy lại mỗi khi đổi trang.
 */
const STAGGER = ".mgrid,.svcs,.sgrid,.stats,.ggrid,.check,.tl,.values,.years,.team,.pkgs,.cases,.cgrid,.fbgrid,.lanes,.strip2,.gal,.steps";

export default function RevealObserver() {
  const path = usePathname();
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        // rootMargin -80px: "vào" khi có ≥80px trong khung nhìn, "ra" khi đã khuất hẳn → cuộn lại chạy hiệu ứng lần nữa.
        // Dùng px thay vì tỉ lệ để lưới rất cao (thư viện 65 ảnh) vẫn hiện được.
        e.target.classList.toggle("in", e.isIntersecting);
      }),
      { threshold: 0, rootMargin: "-80px 0px -80px 0px" }
    );
    // Lưới/thẻ: gắn .stg và chỉ số --i cho từng con để hiện lần lượt
    document.querySelectorAll<HTMLElement>(STAGGER).forEach((box) => {
      box.classList.add("stg", "rv");
      Array.from(box.children).forEach((c, i) => (c as HTMLElement).style.setProperty("--i", String(i)));
    });
    document.querySelectorAll(".rv").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [path]);
  return null;
}
