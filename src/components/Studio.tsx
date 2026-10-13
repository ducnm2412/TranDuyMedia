import SectionHead from "./SectionHead";

const pics: [string, string, string][] = [
  ["x049", "Concept studio vintage simple", "-1.5deg"], ["s039", "Bàn ghế trắng", "1deg"], ["s026", "Set đồ chơi trẻ em", "-1deg"],
  ["x069", "Ưu đãi thuê studio", "1.5deg"], ["g8", "Set ghế trắng", "-1deg"], ["s015", "Cây thông Noel", "1deg"],
  ["x073", "Lookbook portrait setup", "-1.5deg"], ["s005", "Giỏ xe đẩy", "1deg"], ["s064", "Box studio và đèn", "-1deg"],
  ["x011", "Box studio minimalist", "1.5deg"], ["g2", "Khăn trải trắng", "-1deg"], ["s054", "Góc studio đen trắng", "1deg"],
  ["x012", "Bối cảnh Noel cho bé", "-1.5deg"], ["g5", "Góc hoa", "1deg"], ["s027", "Set chụp trẻ em", "-1deg"],
];

export default function Studio() {
  return (
    <section className="sec studio" id="studio">
      <div className="wrap">
        <SectionHead kicker="Cho thuê studio" title={<>Bối cảnh<br />đổi theo mùa</>} text="Box studio, vintage, simple, Giáng sinh, concept trẻ em… dựng sẵn, đổi phông nhanh trong một buổi." />
        <div className="sgrid rv">
          {pics.map(([img, alt, r]) => (
            <figure key={img} style={{ "--r": r } as React.CSSProperties}><img src={`/images/${img}.jpg`} alt={alt} /></figure>
          ))}
        </div>
        <div className="sinfo">
          <dl className="rv">
            <dt>Concept</dt><dd>Box studio, vintage, simple, phòng xanh, Giáng sinh, trẻ em, sản phẩm nền trắng</dd>
            <dt>Thiết bị</dt><dd>Đèn liên tục, flash, softbox, phông vải, backdrop giấy, bàn chụp sản phẩm</dd>
            <dt>Thuê theo</dt><dd>Giờ, nửa ngày, cả ngày; có gói theo tháng cho shop chụp định kỳ</dd>
            <dt>Hỗ trợ</dt><dd>Kỹ thuật set đèn, trợ lý, tư vấn concept, chụp thuê nếu cần</dd>
          </dl>
          <div className="price rv">
            <strong>Giá theo giờ</strong>
            <p>Báo giá tùy concept và thiết bị. Gửi ngày dự kiến, phản hồi lịch trống trong ngày.</p>
            <a href="/lien-he#datlich" className="btn btn-fill">Kiểm tra lịch trống</a>
          </div>
        </div>
      </div>
    </section>
  );
}
