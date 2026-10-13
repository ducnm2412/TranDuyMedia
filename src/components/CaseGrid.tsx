"use client";
import { useState } from "react";

export type Case = { img: string; tag: string; title: string; client: string; year: string; desc: string; tags: string[] };
const cats = ["Tất cả", "TVC", "Doanh nghiệp", "Documentary", "Sự kiện", "Chụp ảnh"];

export default function CaseGrid({ cases }: { cases: Case[] }) {
  const [cat, setCat] = useState("Tất cả");
  const list = cat === "Tất cả" ? cases : cases.filter((c) => c.tag === cat);
  return (
    <>
      <div className="filters">{cats.map((c) => <button key={c} className="chip" aria-pressed={cat === c} onClick={() => setCat(c)}>{c}</button>)}</div>
      <div className="cases">
        {list.map((c) => (
          <article className="case rv in" key={c.title}>
            <div className="pic"><img src={`/images/${c.img}.jpg`} alt={c.title} /><span className="tag">{c.tag}</span></div>
            <div className="body">
              <div className="meta">{c.client} · {c.year}</div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
              <ul>{c.tags.map((t) => <li key={t}>{t}</li>)}</ul>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
