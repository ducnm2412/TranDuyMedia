import SectionHead from "./SectionHead";
import Showreel from "./Showreel";
import Pic from "@/components/Pic";

const items = [
  ["reel1", "TVC", "Quay TVC trang sức"], ["reel2", "BTS", "Kiểm tra khung hình"], ["reel5", "DOC", "Video documentary"],
  ["reel6", "EVENT", "Video sự kiện"], ["reel3", "BTS", "Monitor hiện trường"], ["b048", "CREW", "Ê-kíp TRAN DUY"], ["reel7", "STUDIO", "Quay tại studio"],
];

export default function Showcase() {
  return (
    <section className="sec" id="duan">
      <div className="wrap">
        <SectionHead kicker="Showcase" title={<>Dự án<br />đang chạy</>} text='Hậu trường thật, kết quả thật. Rê chuột để "bật màu" từng cảnh.' />
        <div className="mgrid rv">
          {items.map(([img, tag, cap]) => (
            <figure className="mg" key={img}><Pic name={img} alt={cap} sizes="(max-width: 900px) 50vw, 30vw" /><span className="tag">{tag}</span><figcaption>{cap}</figcaption></figure>
          ))}
        </div>
        <Showreel />
      </div>
    </section>
  );
}
