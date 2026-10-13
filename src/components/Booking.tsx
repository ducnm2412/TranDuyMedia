"use client";
import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

const needs = [["Sản xuất video", "Video"], ["Thuê studio", "Thuê studio"], ["Chụp ảnh thương mại", "Chụp ảnh"], ["Khác", "Khác"]];

/** Form đặt lịch: soạn tin nhắn, sao chép và mở Zalo. Có thể thay bằng API route / email nếu cần. */
export default function Booking() {
  const [svc, setSvc] = useState(needs[0][0]);
  const [result, setResult] = useState("");
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") || "").trim(), phone = String(f.get("phone") || "").trim();
    if (!name || !phone) { setResult("Nhập tên và số điện thoại để chúng tôi gọi lại."); return; }
    const date = String(f.get("date") || ""); const d = date ? date.split("-").reverse().join("/") : "chưa chọn";
    const msg = String(f.get("msg") || "").trim();
    const text = `Xin chào TRAN DUY Media, tôi là ${name}.\nNhu cầu: ${svc}\nNgày dự kiến: ${d} (${f.get("time")})\nSĐT: ${phone}${msg ? `\nMô tả: ${msg}` : ""}`;
    setResult(`Nội dung đã soạn:\n\n${text}\n\nĐang mở Zalo…`);
    try { navigator.clipboard?.writeText(text); } catch {}
    setTimeout(() => window.open(site.zalo, "_blank"), 600);
  };
  return (
    <section className="sec book" id="datlich">
      <div className="wrap bgrid">
        <div className="rv">
          <h2 className="d">Action!<br />Đặt lịch ngay</h2>
          <p style={{ marginTop: 16, maxWidth: "40ch", color: "#C5C8D6" }}>Điền form hoặc gọi thẳng. Chúng tôi phản hồi trong giờ làm việc.</p>
          <div className="cs" id="lienhe">
            <a href={`tel:${site.phone}`}>☎ {site.phoneDisplay}</a>
            <a href={site.zalo} target="_blank" rel="noopener">Zalo {site.phoneDisplay}</a>
            <a href={site.facebook} target="_blank" rel="noopener">Facebook / TranDuyMedia</a>
          </div>
        </div>
        <form className="rv" noValidate onSubmit={onSubmit}>
          <div className="f full"><label>Bạn cần gì?</label>
            <div className="chips">
              {needs.map(([v, l]) => <button type="button" key={v} className="chip" aria-pressed={svc === v} onClick={() => setSvc(v)}>{l}</button>)}
            </div></div>
          <div className="f"><label htmlFor="name">Tên</label><input id="name" name="name" required autoComplete="name" /></div>
          <div className="f"><label htmlFor="phone">SĐT / Zalo</label><input id="phone" name="phone" required inputMode="tel" autoComplete="tel" /></div>
          <div className="f"><label htmlFor="date">Ngày dự kiến</label><input id="date" name="date" type="date" /></div>
          <div className="f"><label htmlFor="time">Khung giờ</label>
            <select id="time" name="time" defaultValue="Sáng (8h–12h)"><option>Sáng (8h–12h)</option><option>Chiều (13h–17h)</option><option>Tối (18h–21h)</option><option>Cả ngày</option></select></div>
          <div className="f full"><label htmlFor="msg">Mô tả ngắn / ngân sách</label><textarea id="msg" name="msg" /></div>
          <p className="note">Bấm gửi sẽ mở Zalo; nội dung được sao chép sẵn để bạn dán vào tin nhắn.</p>
          <div className="f full" style={{ flexDirection: "row", gap: 14, flexWrap: "wrap" }}>
            <button type="submit" className="btn btn-fill">Gửi qua Zalo</button>
            <a href={`tel:${site.phone}`} className="btn" style={{ color: "#fff" }}>Gọi ngay</a>
          </div>
          <div className={`result${result ? " show" : ""}`}>{result}</div>
        </form>
      </div>
    </section>
  );
}
