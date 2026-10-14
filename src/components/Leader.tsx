"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

/**
 * Màn đếm ngược 3-2-1 kiểu đầu băng phim. Đặt ở layout (ngoài .pt có animation translate,
 * nếu không position:fixed sẽ bị tính theo .pt). Chỉ chạy khi tải lần đầu vào trang chủ.
 */
export default function Leader() {
  const path = usePathname();
  const [show] = useState(() => path === "/");
  const [done, setDone] = useState(false);
  const [num, setNum] = useState(3);
  const ring = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!show) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return; // CSS đã ẩn .leader
    const t0 = performance.now(); let raf = 0;
    const tick = (now: number) => {
      const el = (now - t0) / 1000; const cur = 3 - Math.floor(el);
      if (cur < 1) { setDone(true); return; }
      setNum(cur); ring.current?.style.setProperty("--p", `${(el % 1) * 100}%`);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [show]);
  if (!show) return null;
  return (
    <div className={`leader${done ? " done" : ""}`} aria-hidden="true" onClick={() => setDone(true)}>
      <div className="ring" ref={ring}><div className="n">{num}</div></div>
      <small>TRAN DUY MEDIA · ROLLING</small>
    </div>
  );
}
