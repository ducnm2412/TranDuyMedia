import Link from "next/link";

export default function PageHero({ title, em, text, img, crumb }: { title: string; em?: string; text?: string; img: string; crumb: string }) {
  return (
    <section className="ph">
      <img src={`/images/${img}.jpg`} alt="" />
      <div className="vf"><i /><i /><i /><i /></div>
      <div className="wrap">
        <div className="crumb"><Link href="/">Trang chủ</Link><span>/</span><span>{crumb}</span></div>
        <h1 className="d">{title}{em && <><br /><em>{em}</em></>}</h1>
        {text && <p>{text}</p>}
      </div>
    </section>
  );
}
