import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Tape from "@/components/Tape";
import ConceptTabs from "@/components/ConceptTabs";
import Booking from "@/components/Booking";

export const metadata: Metadata = { title: "Cho thuê studio", description: "Bối cảnh studio chụp ảnh, quay video tại Nhà Bè, TP.HCM: concept, thiết bị, bảng giá theo giờ, quy định." };

const price = [
  ["Thuê bối cảnh (1 concept)", "Theo giờ, tối thiểu 2 giờ, đã gồm đèn cơ bản", "Liên hệ"],
  ["Nửa ngày (4 giờ)", "Đổi tối đa 2 concept, kỹ thuật viên hỗ trợ", "Liên hệ"],
  ["Cả ngày (8 giờ)", "Toàn bộ concept, trợ lý set đèn, phòng thay đồ", "Liên hệ"],
  ["Gói tháng cho shop", "4 buổi/tháng, ưu tiên lịch, chụp thêm 40 SKU", "Liên hệ"],
  ["Thuê kèm người chụp", "Studio + nhiếp ảnh gia + hậu kỳ cơ bản", "Liên hệ"],
];
const rules = ["Đặt cọc 30% để giữ lịch, hủy trước 48 giờ hoàn cọc", "Đến sớm 15 phút để set đèn; quá giờ tính thêm theo 30 phút", "Không hút thuốc, không mang đồ ăn vào set", "Thiết bị hỏng do người thuê sẽ tính theo giá sửa chữa", "Hỗ trợ gửi xe máy miễn phí, ô tô báo trước", "Mang theo file logo nếu muốn in backdrop riêng"];

export default function Page() {
  return (
    <main>
      <PageHero crumb="Studio" title="Thuê" em="studio" img="x049" text="456/26 Huỳnh Tấn Phát, Nhà Bè. Năm concept dựng sẵn, thiết bị đầy đủ, kỹ thuật viên hỗ trợ. Đặt theo giờ." />
      <Tape words={["Vintage", "Simple", "Box studio", "Sản phẩm", "Theo mùa", "Trẻ em"]} />
      <section className="sec studio"><div className="wrap">
        <div className="sec-head rv"><div><span className="k">Concept</span><h2 className="d">Chọn bối cảnh</h2></div><p>Bấm từng concept để xem ảnh, diện tích, ánh sáng và việc phù hợp.</p></div>
        <div className="rv"><ConceptTabs /></div>
      </div></section>
      <section className="sec"><div className="wrap">
        <div className="sec-head rv"><div><span className="k">Bảng giá</span><h2 className="d">Giá theo giờ</h2></div><p>Giá tùy concept và thiết bị; gửi ngày dự kiến, chúng tôi báo giá kèm lịch trống trong ngày.</p></div>
        <div className="twrap rv"><table className="ptable">
          <thead><tr><th>Gói</th><th>Bao gồm</th><th>Giá</th></tr></thead>
          <tbody>{price.map(([a, b, c]) => <tr key={a}><td><b>{a}</b></td><td>{b}</td><td className="pr">{c}</td></tr>)}</tbody>
        </table></div>
      </div></section>
      <section className="sec" style={{ paddingTop: 0 }}><div className="wrap">
        <div className="sec-head rv"><div><span className="k">Quy định</span><h2 className="d">Để buổi chụp<br />trơn tru</h2></div></div>
        <ul className="rules rv">{rules.map((r) => <li key={r}>{r}</li>)}</ul>
      </div></section>
      <Booking />
    </main>
  );
}
