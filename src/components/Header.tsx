"use client";
import { useState } from "react";

const links = [
  ["#duan", "Dự án"], ["#dichvu", "Dịch vụ"], ["#quytrinh", "Quy trình"], ["#studio", "Studio"],
  ["#thuvien", "Thư viện"], ["#vechungtoi", "Về chúng tôi"], ["#lienhe", "Liên hệ"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header>
        <div className="wrap nav">
          <a href="#top" aria-label="TRAN DUY Media"><img src="/images/logo_w.png" alt="TRAN DUY Media" /></a>
          <ul>{links.map(([h, l]) => <li key={h}><a href={h}>{l}</a></li>)}</ul>
          <a href="#datlich" className="cta">Đặt lịch ngay</a>
          <button className="burger" aria-label="Mở menu" onClick={() => setOpen(true)}><span /></button>
        </div>
      </header>
      <nav className={`menu${open ? " open" : ""}`} aria-label="Menu di động">
        <button className="close" aria-label="Đóng" onClick={() => setOpen(false)}>×</button>
        {links.map(([h, l]) => <a key={h} href={h} onClick={() => setOpen(false)}>{l}</a>)}
        <a href="#datlich" onClick={() => setOpen(false)}>Đặt lịch</a>
      </nav>
    </>
  );
}
