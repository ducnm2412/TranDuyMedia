"use client";
import { useCallback, useEffect, useState } from "react";

/** Các vùng có ảnh bấm để xem lớn; ảnh cùng vùng duyệt được bằng nút trước/sau. */
const GROUPS = [".mgrid", ".svcs", ".sgrid", ".rows", ".strip2", ".about .pics", ".gal", ".cases", ".concept .cg", ".svcpage .spic"];

type View = { list: { src: string; alt: string }[]; i: number };

export default function Lightbox() {
  const [view, setView] = useState<View | null>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const img = (e.target as HTMLElement).closest?.("img");
      if (!img) return;
      const group = GROUPS.map((g) => img.closest(g)).find(Boolean);
      if (!group) return;
      // Băng ảnh thư viện được nhân đôi để chạy vòng, bỏ ảnh trùng
      // next/image trả về bản thu nhỏ trong src; data-full là ảnh gốc để xem lớn
      const full = (im: HTMLImageElement) => im.dataset.full || im.src;
      const seen = new Set<string>();
      const list = Array.from(group.querySelectorAll("img"))
        .filter((im) => !seen.has(full(im)) && seen.add(full(im)))
        .map((im) => ({ src: full(im), alt: im.alt }));
      setView({ list, i: Math.max(0, list.findIndex((x) => x.src === full(img))) });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const step = useCallback(
    (d: number) => setView((v) => (v ? { ...v, i: (v.i + d + v.list.length) % v.list.length } : v)),
    [],
  );

  useEffect(() => {
    if (!view) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setView(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    window.__lenis?.stop();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      window.__lenis?.start();
    };
  }, [view, step]);

  if (!view) return null;
  const cur = view.list[view.i];
  const many = view.list.length > 1;
  return (
    <div className="lb" role="dialog" aria-modal="true" aria-label="Xem ảnh" onClick={() => setView(null)}>
      {/* eslint-disable-next-line @next/next/no-img-element -- ảnh gốc theo yêu cầu, không qua tối ưu */}
      <img src={cur.src} alt={cur.alt} onClick={(e) => e.stopPropagation()} />
      {cur.alt && <p className="lb-cap">{cur.alt}</p>}
      <span className="lb-count">{view.i + 1} / {view.list.length}</span>
      <button className="lb-close" aria-label="Đóng" autoFocus onClick={() => setView(null)}>×</button>
      {many && <button className="lb-nav prev" aria-label="Ảnh trước" onClick={(e) => { e.stopPropagation(); step(-1); }}>‹</button>}
      {many && <button className="lb-nav next" aria-label="Ảnh sau" onClick={(e) => { e.stopPropagation(); step(1); }}>›</button>}
    </div>
  );
}
