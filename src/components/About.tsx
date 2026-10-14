"use client";
import { useEffect, useRef, useState } from "react";
import Pic from "@/components/Pic";

const stats: [number, string, string][] = [[10, "+", "năm sản xuất"], [300, "+", "dự án video & ảnh"], [100, "%", "trọn gói, một đầu mối"]];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const [v, setV] = useState(0);
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return; io.disconnect();
      const t0 = performance.now();
      const tick = (now: number) => { let p = Math.min(1, (now - t0) / 1400); p = 1 - Math.pow(1 - p, 3); setV(Math.round(to * p)); if (p < 1) requestAnimationFrame(tick); };
      requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    io.observe(el); return () => io.disconnect();
  }, [to]);
  return <strong ref={ref}>{v}{suffix}</strong>;
}

export default function About() {
  return (
    <section className="sec big" id="vechungtoi">
      <div className="wrap">
        <div className="stats rv">
          {stats.map(([n, s, l]) => <div className="stat" key={l}><Counter to={n} suffix={s} /><span>{l}</span></div>)}
        </div>
        <div className="about">
          <div className="pics rv"><Pic name="about" alt="Ê-kíp tại studio" sizes="(max-width: 860px) 62vw, 31vw" eager /><Pic name="reel2" alt="Hậu trường" sizes="(max-width: 860px) 62vw, 31vw" /><Pic name="p6" alt="Chân dung studio" sizes="(max-width: 860px) 62vw, 31vw" /></div>
          <div className="rv">
            <h2 className="d">Hơn 10 năm<br />đồng hành<br />cùng doanh nghiệp</h2>
            <p>TRAN DUY Media Studio bắt đầu từ một ê-kíp quay dựng nhỏ, nay gia công trọn gói video thương mại cho khách hàng, đối tác và doanh nghiệp tại TP.HCM.</p>
            <p>Uy tín trong cam kết. Trách nhiệm với tiến độ. Tâm huyết trong từng khung hình. Mỗi dự án một người phụ trách xuyên suốt.</p>
            <a href="/lien-he#datlich" className="btn" style={{ color: "var(--ink)" }}>Bắt đầu dự án</a>
          </div>
        </div>
      </div>
    </section>
  );
}
