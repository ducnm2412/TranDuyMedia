"use client";
import { useState } from "react";

export type Pic = { img: string; cat: string; alt: string };
const cats = ["Tất cả", "Hậu trường", "Studio", "Sản phẩm", "Chân dung"];

/** Lưới ảnh có bộ lọc; bấm ảnh mở Lightbox toàn cục (đã gắn trong layout). */
export default function LightboxGallery({ pics }: { pics: Pic[] }) {
  const [cat, setCat] = useState("Tất cả");
  const list = cat === "Tất cả" ? pics : pics.filter((p) => p.cat === cat);
  return (
    <>
      <div className="filters">{cats.map((c) => <button key={c} className="chip" aria-pressed={cat === c} onClick={() => setCat(c)}>{c}</button>)}</div>
      <div className="gal">{list.map((p) => <button key={p.img} type="button" aria-label={`Xem ảnh: ${p.alt}`}><img src={`/images/${p.img}.jpg`} alt={p.alt} loading="lazy" /></button>)}</div>
    </>
  );
}
