import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Tape from "@/components/Tape";
import SectionHead from "@/components/SectionHead";
import { services, getService } from "@/lib/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/dich-vu/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  return s ? { title: s.nav, description: s.lead } : {};
}

export default async function Page({ params }: PageProps<"/dich-vu/[slug]">) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();
  const others = services.filter((x) => x.slug !== s.slug);

  return (
    <main>
      <PageHero crumb={s.nav} title={s.title} em={s.em} img={s.hero} text={s.lead} />

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="svcpage">
            <div className="spic rv"><img src={`/images/${s.img}.jpg`} alt={s.nav} /></div>
            <div className="rv">
              <span className="k sec-k">Bạn nhận được</span>
              <h2 className="d" style={{ fontSize: "clamp(32px,4.5vw,64px)" }}>Trọn gói, một đầu mối</h2>
              <ul style={{ marginTop: 16 }}>{s.items.map((i) => <li key={i}>{i}</li>)}</ul>
              <Link href="/lien-he#datlich" className="btn btn-fill" style={{ marginTop: 22 }}>Nhận báo giá</Link>
            </div>
          </div>
        </div>
      </section>

      <Tape words={s.tape} navy reverse tilt />

      <section className="sec gear">
        <div className="wrap">
          <SectionHead kicker="Hạng mục" title={<>Chúng tôi<br />làm những gì</>} text="Chọn đúng hạng mục để báo giá sát và đúng mục tiêu bán hàng của bạn." light />
          <div className="ggrid rv">
            {s.types.map((t) => <div className="g" key={t.t}><span className="ic">{t.ic}</span><h3>{t.t}</h3><p>{t.d}</p></div>)}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <SectionHead kicker="Cách làm việc" title={<>4 bước<br />gọn nhẹ</>} text="Mỗi bước có mốc duyệt với bạn. Xem quy trình đầy đủ ở trang Quy trình." />
          <div className="tl rv">
            {s.steps.map((st, i) => (
              <div className="tli" key={st.t}>
                <div className="row2"><h3>{String(i + 1).padStart(2, "0")} · {st.t}</h3></div>
                <p>{st.d}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 24 }}><Link href="/quy-trinh" className="btn" style={{ color: "var(--ink)" }}>Xem quy trình 6 bước</Link></div>
        </div>
      </section>

      <section className="sec studio">
        <div className="wrap">
          <SectionHead kicker="Hình ảnh" title={<>Đã làm<br />gần đây</>} text="Bấm vào ảnh để xem lớn." />
          <div className="gal rv">
            {s.gallery.map((g) => <button key={g.img} type="button" aria-label={`Xem ảnh: ${g.alt}`}><img src={`/images/${g.img}.jpg`} alt={g.alt} loading="lazy" /></button>)}
          </div>
          <div style={{ marginTop: 24 }}><Link href="/thu-vien" className="btn" style={{ color: "var(--ink)" }}>Xem thư viện</Link></div>
        </div>
      </section>

      {s.pkgs && (
        <section className="sec">
          <div className="wrap">
            <SectionHead kicker="Gói dịch vụ" title={<>Chọn gói<br />theo mục tiêu</>} text="Giá cụ thể gửi theo yêu cầu; các gói dưới đây để bạn định hình phạm vi công việc." />
            <div className="pkgs">
              {s.pkgs.map((p) => (
                <div className={`pkg rv${p.hot ? " hot" : ""}`} key={p.name}>
                  <h4>{p.name}</h4><div className="pr">{p.price}</div>
                  <ul>{p.items.map((i) => <li key={i}>{i}</li>)}</ul>
                  <Link href="/lien-he#datlich" className="btn" style={{ color: "var(--ink)" }}>Hỏi giá gói này</Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="sec faq">
        <div className="wrap">
          <SectionHead kicker="Hỏi nhanh" title={<>Câu hỏi<br />thường gặp</>} />
          <div className="rv">{s.faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div>
        </div>
      </section>

      <section className="sec big">
        <div className="wrap">
          <SectionHead kicker="Dịch vụ khác" title={<>Có thể bạn<br />cũng cần</>} />
          <div className="cgrid" style={{ gridTemplateColumns: "repeat(2,1fr)" }}>
            {others.map((o) => (
              <Link className="cc rv" href={`/dich-vu/${o.slug}`} key={o.slug}><span>Dịch vụ</span><b>{o.nav}</b><small>{o.lead.slice(0, 90)}…</small></Link>
            ))}
          </div>
          <div style={{ marginTop: 32, display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Link href="/lien-he#datlich" className="btn btn-fill">Đặt lịch ngay</Link>
            <a href="tel:0971542026" className="btn" style={{ color: "var(--ink)" }}>Gọi 0971 542 026</a>
          </div>
        </div>
      </section>
    </main>
  );
}
