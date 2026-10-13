"use client";
import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";

/** Showreel: tự phát tắt tiếng khi cuộn tới, người dùng bấm để bật tiếng. */
export default function Showreel() {
  const ref = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) v.play().catch(() => {}); else v.pause(); },
      { threshold: 0.4 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
    if (v.paused) v.play().catch(() => {});
  };

  return (
    <div className="reel rv">
      <video ref={ref} src={site.showreelVideo} poster="/images/reel4.jpg" muted loop playsInline preload="metadata" controls={!muted} />
      {muted && (
        <button className="unmute" onClick={toggle} aria-label="Bật tiếng showreel">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M11 5 6 9H2v6h4l5 4z" /><path d="m22 9-6 6M16 9l6 6" /></svg>
          <span>Bật tiếng</span>
        </button>
      )}
      <span className="reel-label">Showreel 2026</span>
    </div>
  );
}
