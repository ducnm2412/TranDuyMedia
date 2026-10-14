import Link from "next/link";
import SectionHead from "./SectionHead";
import Pic from "@/components/Pic";

const services = [
  { n: "01", slug: "san-xuat-video", t: "Sản xuất video thương mại", img: "svc_video", items: ["TVC, iTVC, video quảng cáo push sale", "Video documentary, phóng sự thương hiệu", "Phim giới thiệu doanh nghiệp", "Video sự kiện doanh nghiệp"] },
  { n: "02", slug: "thue-studio", t: "Cho thuê bối cảnh studio", img: "svc_studio", items: ["Nhiều concept: box studio, vintage, simple", "Đèn, phông, phụ kiện sẵn sàng", "Chụp sản phẩm, quay quảng cáo, livestream", "Tính giờ linh hoạt, có kỹ thuật hỗ trợ"] },
  { n: "03", slug: "chup-anh", t: "Chụp ảnh thương mại", img: "svc_photo", items: ["Ảnh sản phẩm, lookbook, catalogue", "Chân dung thương hiệu, nhân sự", "Ảnh cho sàn TMĐT và social media", "Hậu kỳ đồng bộ nhận diện"] },
];

export default function Services() {
  return (
    <section className="sec" id="dichvu">
      <div className="wrap">
        <SectionHead kicker="Dịch vụ" title={<>3 việc<br />làm tới bến</>} text="Gia công trọn gói cho SME, startup và các chiến dịch cần video chạy performance." />
        <div className="svcs">
          {services.map((s) => (
            <article className="svc rv" key={s.n}>
              <div className="num">{s.n}</div>
              <h3><Link href={`/dich-vu/${s.slug}`}>{s.t}</Link></h3>
              <ul>{s.items.map((i) => <li key={i}>{i}</li>)}</ul>
              <div className="pic"><Pic name={s.img} alt={s.t} sizes="(max-width: 900px) 100vw, 33vw" /></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
