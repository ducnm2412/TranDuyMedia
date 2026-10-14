"use client";
import { useState } from "react";
import Pic from "@/components/Pic";

export type Pic = { img: string; cat: string; alt: string };
const cats = ["Tất cả", "Hậu trường", "Studio", "Sản phẩm", "Chân dung"];

/** Lưới ảnh có bộ lọc; bấm ảnh mở Lightbox toàn cục (đã gắn trong layout). */
export default function LightboxGallery({ pics }: { pics: Pic[] }) {
  const [cat, setCat] = useState("Tất cả");
  const list = cat === "Tất cả" ? pics : pics.filter((p) => p.cat === cat);
  return (
    <>
      <div className="filters">{cats.map((c) => <button key={c} className="chip" aria-pressed={cat === c} onClick={() => setCat(c)}>{c}</button>)}</div>
      <div className="gal">{list.map((p) => <button key={p.img} type="button" aria-label={`Xem ảnh: ${p.alt}`}><Pic name={p.img} alt={p.alt} sizes="(max-width: 560px) 50vw, (max-width: 900px) 33vw, 25vw" /></button>)}</div>
    </>
  );
}
