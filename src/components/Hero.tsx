"use client";
import { useEffect, useRef, useState } from "react";

/**
 * Hero video: đoạn showreel 36s (public/hero/hero.mp4, 720p, không tiếng) tự chạy lặp,
 * kèm khung REC + timecode. Máy yếu / giảm chuyển động / video lỗi → hiện ảnh reel4.
 */
export default function Hero() {
  const [tc, setTc] = useState("00:00:00:00");
  const [broken, setBroken] = useState(false); // video lỗi → ẩn video, lộ ảnh reel4 bên dưới
  const [fade, setFade] = useState(false); // chu kỳ: hiện 7,5s → ẩn 10s → hiện lại… (chỉ tiêu đề + mô tả, nút giữ nguyên)
  const frame = useRef(0);
  const vid = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = vid.current;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches || document.documentElement.classList.contains("lite")) { v?.pause(); return; } // máy yếu / giảm chuyển động: ảnh tĩnh, chữ hiện luôn, không ẩn/hiện
    if (v) {
      // lỗi có thể xảy ra trước khi React gắn handler (trình duyệt tải video ngay khi parse HTML)
      if (v.error || v.networkState === HTMLMediaElement.NETWORK_NO_SOURCE) setBroken(true);
      v.muted = true; v.play().catch(() => {});
    }
    const SHOW = 7500, HIDE = 10000;
    let timer = 0;
    const loop = (visible: boolean) => {
      setFade(!visible);
      timer = window.setTimeout(() => loop(!visible), visible ? SHOW : HIDE);
    };
    timer = window.setTimeout(() => loop(false), SHOW);
    const clock = setInterval(() => {
      const f = ++frame.current;
      const p = (n: number) => String(n).padStart(2, "0");
      setTc(`00:${p(Math.floor(f / 1500) % 60)}:${p(Math.floor(f / 25) % 60)}:${p(f % 25)}`);
    }, 40);
    return () => { clearInterval(clock); clearTimeout(timer); };
  }, []);
  return (
    <section className={`hero${fade ? " fade" : ""}`}>
      <div className="montage">
        <video ref={vid} src="/hero/hero.mp4" poster="/hero/reel4.jpg" muted loop playsInline autoPlay preload="metadata" aria-hidden="true" onError={() => setBroken(true)} onStalled={() => setBroken(true)} onPlaying={() => setBroken(false)} hidden={broken} />
      </div>
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
