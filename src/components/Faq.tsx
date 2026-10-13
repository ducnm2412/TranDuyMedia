import SectionHead from "./SectionHead";

const faqs = [
  ["Một video quảng cáo mất bao lâu?", "Thông thường 2–4 tuần từ lúc chốt yêu cầu: 1 tuần kịch bản và tiền kỳ, 1–2 ngày quay, 1–2 tuần hậu kỳ gồm hai vòng chỉnh sửa. Dự án gấp có thể rút ngắn khi trao đổi trước."],
  ["Chi phí tính như thế nào?", "Báo giá theo từng dự án dựa trên thời lượng, số ngày quay, bối cảnh, diễn viên và hậu kỳ. Thuê studio tính theo giờ. Gửi brief qua form, chúng tôi phản hồi báo giá trong 24 giờ làm việc."],
  ["Có nhận quay ngoài TP.HCM không?", "Có. Ê-kíp di chuyển các tỉnh lân cận và toàn quốc, chi phí đi lại tính riêng và được nêu rõ trong báo giá."],
  ["Thuê studio có kèm người chụp không?", "Mặc định là thuê bối cảnh và thiết bị, có kỹ thuật viên set đèn hỗ trợ. Nếu cần, có thể đặt thêm gói chụp hoặc quay trọn gói cùng buổi."],
  ["Bàn giao những gì?", "File video theo chuẩn từng kênh (YouTube, Facebook, TikTok, màn LED…), ảnh đã hậu kỳ, và file gốc theo thỏa thuận. Toàn bộ bản quyền sử dụng thuộc về khách hàng."],
];

export default function Faq() {
  return (
    <section className="sec faq">
      <div className="wrap">
        <SectionHead kicker="Hỏi nhanh" title={<>Câu hỏi<br />thường gặp</>} />
        <div className="rv">{faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div>
      </div>
    </section>
  );
}
