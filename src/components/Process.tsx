import SectionHead from "./SectionHead";

const steps = [
  ["01", "Tiếp nhận yêu cầu", "Mục tiêu, ngân sách, kênh phát hành, thời hạn.", "-1.5deg"],
  ["02", "Ý tưởng & kịch bản", "Concept, kịch bản, storyboard và báo giá chi tiết.", "1deg"],
  ["03", "Tiền kỳ", "Casting, bối cảnh, đạo cụ, lịch quay, nhân sự.", "-1deg"],
  ["04", "Quay & chụp", "Sản xuất tại hiện trường hoặc studio, duyệt khung hình tại chỗ.", "1.5deg"],
  ["05", "Hậu kỳ", "Dựng, chỉnh màu, âm thanh, đồ họa. Hai vòng chỉnh sửa.", "-1deg"],
  ["06", "Bàn giao", "Xuất file theo chuẩn từng kênh, kèm hướng dẫn sử dụng.", "1deg"],
];

export default function Process() {
  return (
    <section className="sec proc" id="quytrinh">
      <div className="wrap">
        <SectionHead kicker="Quy trình" title={<>6 bước<br />từ yêu cầu tới bàn giao</>} text="Mỗi bước có người chịu trách nhiệm và mốc duyệt với khách. Kéo ngang để xem." light />
        <div className="lanes">
          {steps.map(([n, h, p, r]) => (
            <div className="lane" key={n} style={{ "--r": r } as React.CSSProperties}>
              <i className="clap" /><div className="n">{n}</div><h3>{h}</h3><p>{p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
