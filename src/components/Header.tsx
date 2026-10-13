"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { services } from "@/lib/services";

export const navLinks = [
  ["/du-an", "Dự án"], ["/dich-vu", "Dịch vụ"], ["/quy-trinh", "Quy trình"], ["/studio", "Studio"],
  ["/thu-vien", "Thư viện"], ["/ve-chung-toi", "Về chúng tôi"], ["/lien-he", "Liên hệ"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [sub, setSub] = useState(false);
  const path = usePathname();
  const close = () => { setOpen(false); setSub(false); };

  return (
    <>
      <header>
        <div className="wrap nav">
          <Link href="/" aria-label="TRAN DUY Media"><img src="/images/logo_w.png" alt="TRAN DUY Media" /></Link>
          <ul>
            {navLinks.map(([h, l]) =>
              h === "/dich-vu" ? (
                // Mục Dịch vụ có menu con: rê chuột hoặc Tab vào là mở
                <li key={h} className="has-sub">
                  <Link href={h} className={path.startsWith(h) ? "on" : ""} aria-haspopup="true">{l} <i className="caret" aria-hidden="true" /></Link>
                  <ul className="sub">
                    <li><Link href="/dich-vu" className={path === "/dich-vu" ? "on" : ""}>Tất cả dịch vụ</Link></li>
                    {services.map((s) => <li key={s.slug}><Link href={`/dich-vu/${s.slug}`} className={path === `/dich-vu/${s.slug}` ? "on" : ""}>{s.nav}</Link></li>)}
                  </ul>
                </li>
              ) : (
                <li key={h}><Link href={h} className={path === h ? "on" : ""}>{l}</Link></li>
              ),
            )}
          </ul>
          <Link href="/lien-he#datlich" className="cta">Đặt lịch ngay</Link>
          <button className="burger" aria-label="Mở menu" aria-expanded={open} onClick={() => setOpen(true)}><span /></button>
        </div>
      </header>
      <nav className={`menu${open ? " open" : ""}`} aria-label="Menu di động">
        <button className="close" aria-label="Đóng" onClick={close}>×</button>
        <Link href="/" onClick={close}>Trang chủ</Link>
        {navLinks.map(([h, l]) =>
          h === "/dich-vu" ? (
            <div key={h} className="m-sub">
              <div className="m-row">
                <Link href={h} onClick={close}>{l}</Link>
                <button type="button" aria-label={sub ? "Thu gọn dịch vụ" : "Mở danh sách dịch vụ"} aria-expanded={sub} onClick={() => setSub((v) => !v)}>{sub ? "−" : "+"}</button>
              </div>
              {sub && services.map((s) => <Link key={s.slug} href={`/dich-vu/${s.slug}`} className="m-sublink" onClick={close}>{s.nav}</Link>)}
            </div>
          ) : (
            <Link key={h} href={h} onClick={close}>{l}</Link>
          ),
        )}
        <Link href="/lien-he#datlich" onClick={close} style={{ color: "#fff" }}>Đặt lịch</Link>
      </nav>
    </>
  );
}
