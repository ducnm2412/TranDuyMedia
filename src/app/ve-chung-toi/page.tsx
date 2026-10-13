import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Tape from "@/components/Tape";
import About from "@/components/About";
import Feedback from "@/components/Feedback";

export const metadata: Metadata = { title: "Về chúng tôi", description: "Câu chuyện, giá trị và đội ngũ TRAN DUY Media Studio — hơn 10 năm sản xuất video thương mại tại TP.HCM." };

const values = [["Uy tín", "Nói được, làm được. Báo giá rõ từng hạng mục, không phát sinh giữa chừng."], ["Trách nhiệm", "Đúng tiến độ đã cam kết. Trễ là do chúng tôi, không đổ cho ai."], ["Tâm huyết", "Mỗi khung hình đều có lý do. Chúng tôi làm như làm cho thương hiệu của mình."]];
const years = [["2014", "Bắt đầu với ê-kíp 2 người, quay dựng video cho cửa hàng nhỏ."], ["2017", "Ra mắt studio đầu tiên, nhận chụp sản phẩm cho sàn TMĐT."], ["2020", "Chuyển sang gia công trọn gói TVC, phim doanh nghiệp. Đầu tư máy 4K, flycam."], ["2024", "Mở studio nhiều concept tại Nhà Bè, phục vụ SME, startup toàn TP.HCM."]];
const team = [["Trần Duy", "Founder · Đạo diễn", "Phụ trách concept và chất lượng cuối cùng của mọi dự án.", "-1.5deg"], ["DOP", "Quay phim chính", "Khung hình, ánh sáng, chuyển động máy.", "1deg"], ["Producer", "Điều phối sản xuất", "Lịch quay, nhân sự, ngân sách, liên lạc với khách.", "-1deg"], ["Hậu kỳ", "Dựng & color", "Dựng, chỉnh màu, motion graphic, âm thanh.", "1.5deg"]];

export default function Page() {
  return (
    <main>
      <PageHero crumb="Về chúng tôi" title="Người làm" em="phim bán hàng" img="about" text="Hơn 10 năm chỉ làm một việc: sản xuất hình ảnh giúp doanh nghiệp bán được hàng." />
      <Tape words={["Từ 2014", "TP.HCM", "Ê-kíp cơ hữu", "Thiết bị riêng", "Một đầu mối"]} />
      <section className="sec"><div className="wrap">
        <div className="sec-head rv"><div><span className="k">Giá trị</span><h2 className="d">Ba chữ<br />chúng tôi giữ</h2></div></div>
        <div className="values rv">{values.map(([b, p]) => <div className="val" key={b}><b>{b}</b><p>{p}</p></div>)}</div>
      </div></section>
      <section className="sec proc"><div className="wrap">
        <div className="sec-head rv"><div><span className="k">Hành trình</span><h2 className="d">10 năm<br />tóm tắt</h2></div></div>
        <div className="years rv">{years.map(([y, p]) => <div className="yr" key={y}><b>{y}</b><p>{p}</p></div>)}</div>
      </div></section>
      <section className="sec"><div className="wrap">
        <div className="sec-head rv"><div><span className="k">Đội ngũ</span><h2 className="d">Ai làm<br />việc gì</h2></div><p>Ê-kíp cơ hữu, mở rộng thêm diễn viên, stylist, MC theo từng dự án.</p></div>
        <div className="team rv">{team.map(([b, s, p, r]) => <div className="tm" key={b} style={{ "--r": r } as React.CSSProperties}><b>{b}</b><span>{s}</span><p>{p}</p></div>)}</div>
      </div></section>
      <About />
      <Feedback />
      <section className="sec"><div className="wrap" style={{ textAlign: "center" }}>
        <h2 className="d rv">Làm việc cùng nhau?</h2>
        <div style={{ marginTop: 24 }}><Link href="/lien-he#datlich" className="btn btn-fill">Gửi yêu cầu</Link></div>
      </div></section>
    </main>
  );
}
