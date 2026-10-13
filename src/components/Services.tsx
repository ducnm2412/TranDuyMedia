import SectionHead from "./SectionHead";

const services = [
  { n: "01", t: "Sản xuất video thương mại", img: "svc_video", items: ["TVC, iTVC, video quảng cáo push sale", "Video documentary, phóng sự thương hiệu", "Phim giới thiệu doanh nghiệp", "Video sự kiện doanh nghiệp"] },
  { n: "02", t: "Cho thuê bối cảnh studio", img: "svc_studio", items: ["Nhiều concept: box studio, vintage, simple", "Đèn, phông, phụ kiện sẵn sàng", "Chụp sản phẩm, quay quảng cáo, livestream", "Tính giờ linh hoạt, có kỹ thuật hỗ trợ"] },
  { n: "03", t: "Chụp ảnh thương mại", img: "svc_photo", items: ["Ảnh sản phẩm, lookbook, catalogue", "Chân dung thương hiệu, nhân sự", "Ảnh cho sàn TMĐT và social media", "Hậu kỳ đồng bộ nhận diện"] },
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
              <h3>{s.t}</h3>
              <ul>{s.items.map((i) => <li key={i}>{i}</li>)}</ul>
              <div className="pic"><img src={`/images/${s.img}.jpg`} alt={s.t} /></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
