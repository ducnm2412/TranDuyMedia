import SectionHead from "./SectionHead";

const gear = [
  ["🎥", "Máy quay 4K", "Bộ máy quay cinema & mirrorless, quay 4K 25/50fps, slow-motion."],
  ["💡", "Ánh sáng", "Đèn LED liên tục, flash studio, softbox, grid, đèn RGB tạo hiệu ứng."],
  ["🎙", "Âm thanh", "Micro cài áo, boom, recorder; thu tiếng sạch cho phỏng vấn, TVC."],
  ["🚁", "Flycam & gimbal", "Flycam cho toàn cảnh doanh nghiệp, gimbal cho chuyển động mượt."],
  ["🧑‍🤝‍🧑", "Ê-kíp", "Đạo diễn, DOP, quay phim, ánh sáng, trợ lý, stylist, MC khi cần."],
  ["🖥", "Hậu kỳ", "Dựng, color grading, motion graphic, sub, xuất chuẩn từng kênh."],
];

export default function Gear() {
  return (
    <section className="sec gear">
      <div className="wrap">
        <SectionHead kicker="Thiết bị & ê-kíp" title={<>Sẵn sàng<br />trong 24h</>} text="Ê-kíp cơ hữu và thiết bị riêng, không phụ thuộc thuê ngoài nên chốt lịch nhanh, giá ổn định." light />
        <div className="ggrid rv">
          {gear.map(([ic, h, p]) => <div className="g" key={h}><span className="ic">{ic}</span><h3>{h}</h3><p>{p}</p></div>)}
        </div>
      </div>
    </section>
  );
}
