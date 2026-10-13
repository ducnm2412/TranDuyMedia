"use client";
import { useEffect, useRef, useState } from "react";

// Ảnh hero nằm riêng trong public/hero/ để tiện chỉnh tỉ lệ
const shots = ["hero", "reel1", "reel4", "reel6", "reel7"];

/** Hero montage: tự cắt cảnh 3,5s/cảnh kèm chớp sáng, REC + timecode. */
export default function Hero() {
  const [idx, setIdx] = useState(0);
  const [flash, setFlash] = useState(0);
  const [tc, setTc] = useState("00:00:00:00");
  const frame = useRef(0);
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const cut = setInterval(() => { setIdx((i) => (i + 1) % shots.length); setFlash((f) => f + 1); }, 3500);
    const clock = setInterval(() => {
      const f = ++frame.current;
      const p = (n: number) => String(n).padStart(2, "0");
      setTc(`00:${p(Math.floor(f / 1500) % 60)}:${p(Math.floor(f / 25) % 60)}:${p(f % 25)}`);
    }, 40);
    return () => { clearInterval(cut); clearInterval(clock); };
  }, []);
  return (
    <section className="hero">
      <div className="montage">
        {shots.map((s, i) => <img key={s} src={`/hero/${s}.jpg`} alt="" className={i === idx ? "on" : ""} />)}
      </div>
      <div key={flash} className={`flash${flash ? " go" : ""}`} />
      <div className="vf"><i /><i /><i /><i /></div>
      <div className="hud a"><i />REC</div>
      <div className="hud b">{tc}</div>
      <div className="hud c">4K · 25FPS · SCENE 01</div>
      <div className="wrap">
        <h1 className="d"><span>Quay.</span><span>Dựng.</span><span>Bán hàng.</span></h1>
        <div className="sub">
          <p>TVC, video quảng cáo push sale, phim doanh nghiệp, video sự kiện, chụp ảnh thương mại và cho thuê studio. Trọn gói tại TP.HCM, hơn 10 năm.</p>
          <div className="acts"><a href="#duan" className="btn">Xem dự án</a><a href="#datlich" className="btn btn-fill">Nhận báo giá</a></div>
        </div>
      </div>
    </section>
  );
}
