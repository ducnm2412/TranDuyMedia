import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Tape from "@/components/Tape";
import Gear from "@/components/Gear";
import Faq from "@/components/Faq";

export const metadata: Metadata = { title: "Dịch vụ", description: "Sản xuất video thương mại, cho thuê studio và chụp ảnh thương mại — gói dịch vụ và quy cách bàn giao." };

const services = [
  { id: "video", slug: "san-xuat-video", img: "svc_video", title: "Sản xuất video thương mại", lead: "TVC, iTVC, video push sale, phim doanh nghiệp, documentary, video sự kiện. Trọn gói từ kịch bản tới file phát hành.",
    items: ["Kịch bản, storyboard, casting, bối cảnh", "Ê-kíp đạo diễn, DOP, ánh sáng, âm thanh", "Dựng, color grading, motion graphic, lồng tiếng", "Xuất đa định dạng: 16:9, 9:16, 1:1 cho từng kênh"] },
  { id: "studio", slug: "thue-studio", img: "svc_studio", title: "Cho thuê bối cảnh studio", lead: "Nhiều concept dựng sẵn, thiết bị đèn đầy đủ, kỹ thuật viên hỗ trợ. Phù hợp chụp sản phẩm, lookbook, quay content, livestream.",
    items: ["Box studio, vintage, simple, phòng xanh, Giáng sinh, trẻ em", "Đèn liên tục, flash, softbox, phông vải, backdrop giấy", "Thuê theo giờ, nửa ngày, cả ngày, gói tháng", "Có thể đặt thêm người chụp/quay cùng buổi"] },
  { id: "photo", slug: "chup-anh", img: "svc_photo", title: "Chụp ảnh thương mại", lead: "Ảnh sản phẩm, lookbook, catalogue, chân dung thương hiệu, editorial. Hậu kỳ đồng bộ nhận diện.",
    items: ["Sản phẩm nền trắng cho sàn TMĐT, nền màu cho social", "Macro trang sức, mỹ phẩm, thực phẩm", "Chân dung nhân sự, ban lãnh đạo, không gian", "Bàn giao JPG web + file gốc theo thỏa thuận"] },
];

const pkgs = [
  { name: "Gói Nhanh", price: "Video ngắn 15–30s", items: ["1 buổi quay tại studio hoặc cửa hàng", "Kịch bản ngắn theo hook bán hàng", "Dựng 2 phiên bản ngang/dọc", "1 vòng chỉnh sửa", "Bàn giao 5 ngày"] },
  { name: "Gói Chuẩn", price: "TVC / phim doanh nghiệp", hot: true, items: ["Kịch bản + storyboard duyệt trước", "1–2 ngày quay, 2 máy + flycam", "Color grading, motion graphic, lồng tiếng", "2 vòng chỉnh sửa", "Bàn giao 2–3 tuần"] },
  { name: "Gói Chiến dịch", price: "Bộ video theo tháng", items: ["Lên kế hoạch nội dung theo tháng", "Quay gom 1–2 ngày, ra 8–12 video", "Tối ưu cho ads và TikTok/Reels", "Báo cáo hiệu quả, điều chỉnh hook", "Ưu tiên lịch, giá tốt theo quý"] },
];

export default function Page() {
  return (
    <main>
      <PageHero crumb="Dịch vụ" title="Dịch vụ" em="trọn gói" img="reel7" text="Ba mảng, một đầu mối. Bạn mô tả mục tiêu bán hàng, chúng tôi lo phần còn lại." />
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          {services.map((s) => (
            <div className="svcpage" id={s.id} key={s.id}>
              <div className="spic rv"><img src={`/images/${s.img}.jpg`} alt={s.title} /></div>
              <div className="rv">
                <h2 className="d">{s.title}</h2>
                <p className="lead">{s.lead}</p>
                <ul>{s.items.map((i) => <li key={i}>{i}</li>)}</ul>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 22 }}>
                  <Link href={`/dich-vu/${s.slug}`} className="btn btn-fill">Xem chi tiết</Link>
                  <Link href="/lien-he#datlich" className="btn" style={{ color: "var(--ink)" }}>Nhận báo giá</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Tape words={["Gói Nhanh", "Gói Chuẩn", "Gói Chiến dịch", "Báo giá trong 24h"]} navy />
      <section className="sec">
        <div className="wrap">
          <div className="sec-head rv"><div><span className="k">Gói video</span><h2 className="d">Chọn gói<br />theo mục tiêu</h2></div><p>Giá cụ thể gửi theo brief; ba gói dưới đây để bạn định hình phạm vi công việc.</p></div>
          <div className="pkgs">
            {pkgs.map((p) => (
              <div className={`pkg rv${p.hot ? " hot" : ""}`} key={p.name}>
                <h4>{p.name}</h4><div className="pr">{p.price}</div>
                <ul>{p.items.map((i) => <li key={i}>{i}</li>)}</ul>
                <Link href="/lien-he#datlich" className="btn" style={{ color: "var(--ink)" }}>Hỏi giá gói này</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Gear />
      <Faq />
    </main>
  );
}
