import SectionHead from "./SectionHead";
import Pic from "@/components/Pic";

const pics: [string, string, string][] = [
  ["c062", "Editorial", "-1.5deg"], ["p3", "Chân dung thương hiệu", "1deg"], ["p6", "Chân dung studio", "-1deg"], ["p066", "Lookbook", "1.5deg"],
  ["p7", "Trang sức", "-1deg"], ["p8", "Social content", "1deg"], ["p035", "Skincare", "-1.5deg"], ["p068", "Thời trang", "1deg"],
  ["p022", "Sản phẩm TMĐT", "-1deg"], ["p023", "Sản phẩm TMĐT", "1.5deg"], ["p020", "Catalogue", "-1deg"],
];

export default function Editorial() {
  return (
    <section className="sec edit">
      <div className="wrap">
        <SectionHead kicker="Chân dung & sản phẩm" title={<>Ảnh lên<br />là bán</>} text="Chân dung thương hiệu, bìa tạp chí, lookbook, sản phẩm cho sàn TMĐT. Kéo ngang để xem." />
        <div className="strip2">
          {pics.map(([img, cap, r]) => (
            <figure key={img} style={{ "--r": r } as React.CSSProperties}><Pic name={img} alt={cap} sizes="(max-width: 430px) 70vw, 300px" /><figcaption>{cap}</figcaption></figure>
          ))}
        </div>
      </div>
    </section>
  );
}
