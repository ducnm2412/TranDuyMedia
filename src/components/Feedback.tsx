import SectionHead from "./SectionHead";

const cards = [
  ["Anh chụp ảnh và quay rất có tâm, chỉnh sửa kỹ, đúng thời gian. Giá hợp lý nên bên em sẽ tiếp tục hợp tác lâu dài.", "Shop mỹ phẩm · chụp sản phẩm", "-1.5deg"],
  ["Video giới thiệu công ty lên đúng ý ban giám đốc ngay vòng duyệt đầu. Ê-kíp làm việc gọn, không phát sinh chi phí.", "Doanh nghiệp sản xuất · phim doanh nghiệp", "1deg"],
  ["Thuê studio chụp lookbook, đèn và phông sẵn hết, có kỹ thuật hỗ trợ nên buổi chụp xong sớm hơn dự kiến.", "Thương hiệu thời trang · thuê studio", "-1deg"],
];

export default function Feedback() {
  return (
    <section className="sec fb">
      <div className="wrap">
        <SectionHead kicker="Feedback" title={<>Khách hàng<br />nói gì</>} text="Phản hồi sau mỗi buổi quay, chụp là thứ chúng tôi đọc kỹ nhất." />
        <div className="fbgrid">
          {cards.map(([p, c, r]) => (
            <div className="card rv" key={c} style={{ "--r": r } as React.CSSProperties}><div className="stars">★★★★★</div><p>{p}</p><cite>{c}</cite></div>
          ))}
        </div>
      </div>
    </section>
  );
}
