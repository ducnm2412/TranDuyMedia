import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Tape from "@/components/Tape";

export const metadata: Metadata = { title: "Quy trình sản xuất", description: "6 bước từ yêu cầu tới bàn giao, thời gian từng bước và những gì khách cần chuẩn bị." };

const steps = [
  { n: "01", t: "Tiếp nhận yêu cầu", d: "1–2 ngày", p: "Trao đổi mục tiêu bán hàng, khách hàng mục tiêu, kênh phát hành, ngân sách và thời hạn. Chúng tôi gửi lại bản tóm tắt để hai bên thống nhất.", you: ["Mô tả sản phẩm, điểm bán", "Video tham khảo bạn thích", "Ngân sách dự kiến"], we: ["Bản brief tóm tắt", "Đề xuất hướng tiếp cận", "Báo giá sơ bộ"] },
  { n: "02", t: "Ý tưởng & kịch bản", d: "3–5 ngày", p: "Đề xuất 1–2 concept, viết kịch bản, storyboard và lịch sản xuất chi tiết. Khách duyệt trước khi quay.", you: ["Góp ý concept", "Duyệt kịch bản"], we: ["Kịch bản + storyboard", "Báo giá chi tiết", "Hợp đồng, tạm ứng"] },
  { n: "03", t: "Tiền kỳ", d: "2–5 ngày", p: "Casting diễn viên/MC, khảo sát bối cảnh, chuẩn bị đạo cụ, trang phục, xin phép địa điểm, chốt ê-kíp và thiết bị.", you: ["Cung cấp sản phẩm mẫu", "Xác nhận địa điểm, nhân sự phía khách"], we: ["Call sheet (lịch quay giờ)", "Danh sách cảnh quay", "Ê-kíp, thiết bị sẵn sàng"] },
  { n: "04", t: "Quay & chụp", d: "1–2 ngày", p: "Sản xuất tại hiện trường hoặc studio. Khách xem monitor và duyệt khung hình trực tiếp, hạn chế quay lại.", you: ["Có mặt hoặc cử người duyệt tại set"], we: ["Footage 4K", "Ảnh hậu trường", "Backup dữ liệu 2 bản"] },
  { n: "05", t: "Hậu kỳ", d: "5–10 ngày", p: "Dựng bản nháp, chỉnh màu, âm thanh, đồ họa, lồng tiếng/sub. Hai vòng chỉnh sửa theo góp ý tập trung.", you: ["Góp ý vòng 1 và vòng 2 (gộp ý kiến)"], we: ["Bản nháp v1, v2", "Bản hoàn thiện", "Thumbnail/poster nếu cần"] },
  { n: "06", t: "Bàn giao", d: "1 ngày", p: "Xuất file theo chuẩn từng kênh, bàn giao kèm hướng dẫn sử dụng và lưu trữ. Thanh toán phần còn lại.", you: ["Nghiệm thu, thanh toán"], we: ["File 16:9, 9:16, 1:1", "File gốc theo thỏa thuận", "Lưu trữ 6 tháng"] },
];

const checklist = ["Sản phẩm mẫu đủ số lượng, sạch, còn nhãn", "Logo vector (AI/SVG) và bộ màu thương hiệu", "Thông điệp chính muốn khách nhớ sau video", "Người đại diện duyệt tại buổi quay", "Trang phục, phụ kiện cho nhân vật", "Địa điểm quay đã xin phép (nếu ngoài studio)", "Các kênh sẽ đăng để xuất đúng tỷ lệ", "Deadline phát hành"];

export default function Page() {
  return (
    <main>
      <PageHero crumb="Quy trình" title="Quy trình" em="6 bước" img="reel2" text="Mỗi bước có người chịu trách nhiệm, thời gian ước tính và mốc duyệt. Bạn biết chính xác việc gì đang diễn ra." />
      <Tape words={["Yêu cầu", "Kịch bản", "Tiền kỳ", "Quay", "Hậu kỳ", "Bàn giao"]} />
      <section className="sec"><div className="wrap">
        <div className="tl">
          {steps.map((s) => (
            <div className="tli rv" key={s.n}>
              <div className="row2"><h3>{s.n} · {s.t}</h3><span className="dur">{s.d}</span></div>
              <p>{s.p}</p>
              <div className="cols">
                <div><b>Bạn chuẩn bị</b><ul>{s.you.map((i) => <li key={i}>▶ {i}</li>)}</ul></div>
                <div><b>Chúng tôi bàn giao</b><ul>{s.we.map((i) => <li key={i}>▶ {i}</li>)}</ul></div>
              </div>
            </div>
          ))}
        </div>
      </div></section>
      <section className="sec big"><div className="wrap">
        <div className="sec-head rv"><div><span className="k" style={{ background: "var(--ink)", color: "#fff" }}>Checklist</span><h2 className="d">Chuẩn bị gì<br />trước buổi quay</h2></div><p>Tick để tự kiểm tra. Thiếu mục nào, báo chúng tôi lo giúp.</p></div>
        <div className="check rv">{checklist.map((c) => <label key={c}><input type="checkbox" />{c}</label>)}</div>
        <div style={{ marginTop: 32 }}><Link href="/lien-he#datlich" className="btn" style={{ color: "var(--ink)" }}>Bắt đầu bước 01</Link></div>
      </div></section>
    </main>
  );
}
