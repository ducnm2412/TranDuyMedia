import Link from "next/link";
import Pic from "@/components/Pic";

export default function PageHero({ title, em, text, img, crumb }: { title: string; em?: string; text?: string; img: string; crumb: string }) {
  return (
    <section className="ph">
      <Pic name={img} alt="" sizes="100vw" eager />
      <div className="vf"><i /><i /><i /><i /></div>
      <div className="wrap">
        <div className="crumb"><Link href="/">Trang chủ</Link><span>/</span><span>{crumb}</span></div>
        <h1 className="d">{title}{em && <><br /><em>{em}</em></>}</h1>
        {text && <p>{text}</p>}
      </div>
    </section>
  );
}
