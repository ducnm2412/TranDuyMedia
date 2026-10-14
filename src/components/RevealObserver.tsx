"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Hiệu ứng hiện dần hai chiều: vào khung nhìn thì hiện, ra khỏi hẳn thì ẩn
 * để khi cuộn ngược lại hiệu ứng chạy lần nữa. Chạy lại mỗi khi đổi trang.
 * Chỉ bật/tắt class "in"; kiểu hiện lần lượt của lưới đã nằm hoàn toàn trong CSS
 * (nth-child) để không sửa DOM trước khi React hydrate xong.
 */
const STAGGER = ".mgrid,.svcs,.sgrid,.stats,.ggrid,.check,.tl,.values,.years,.team,.pkgs,.cases,.cgrid,.fbgrid,.lanes,.strip2,.gal,.steps";

export default function RevealObserver() {
  const path = usePathname();
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        // rootMargin -80px: "vào" khi có ≥80px trong khung nhìn, "ra" khi đã khuất hẳn → cuộn lại chạy hiệu ứng lần nữa.
        e.target.classList.toggle("in", e.isIntersecting);
      }),
      { threshold: 0, rootMargin: "-80px 0px -80px 0px" }
    );
    document.querySelectorAll(`.rv,${STAGGER}`).forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [path]);
  return null;
}
