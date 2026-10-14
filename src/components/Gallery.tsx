import SectionHead from "./SectionHead";
import Pic from "@/components/Pic";

const row1: [string, string][] = [["g6", "Concept vintage"], ["g4", "Bối cảnh Giáng sinh"], ["s070", "Concept studio xanh"], ["g1", "Góc kệ trắng"], ["g7", "Sofa và tranh"], ["s071", "Concept vintage"], ["g9", "Góc đàn guitar"], ["s008", "Set chụp sinh nhật"], ["s014", "Cây thông"], ["g3", "Đèn tròn"], ["s051", "Rèm sáng"], ["s072", "Set đèn"]];
const row2: [string, string][] = [["p2", "Trang sức"], ["p1", "Mỹ phẩm"], ["p3", "Chân dung tạp chí"], ["p4", "Thực phẩm"], ["p5", "Thời trang"], ["c063", "Chân dung MC"], ["p036", "Mỹ phẩm nền màu"], ["p056", "Nhẫn"], ["p021", "Đồ chơi"], ["c017", "Chân dung đen trắng"], ["p067", "Thời trang xanh"], ["c062", "Bìa tạp chí"], ["p038", "Kẹo vitamin"]];
const tilt = ["-2deg", "1.5deg", "-1deg", "2deg", "-1.5deg", "1deg"];

function Row({ items, rev }: { items: [string, string][]; rev?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className={`row${rev ? " rev" : ""}`}>
      <div className="tr">
        {doubled.map(([img, alt], i) => (
          <figure key={i} style={{ "--r": tilt[i % tilt.length] } as React.CSSProperties}><Pic name={img} alt={alt} sizes="320px" /></figure>
        ))}
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <section className="sec" id="thuvien">
      <div className="wrap">
        <SectionHead kicker="Thư viện" title={<>Studio<br />&amp; sản phẩm</>} text="Bối cảnh studio, ảnh sản phẩm, chân dung. Hai băng chạy ngược chiều, rê chuột để dừng." />
      </div>
      <div className="rows"><Row items={row1} /><Row items={row2} rev /></div>
    </section>
  );
}
