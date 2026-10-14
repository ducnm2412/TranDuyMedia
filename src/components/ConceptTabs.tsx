"use client";
import { useState } from "react";
import Pic from "@/components/Pic";

const concepts = [
  { name: "Vintage", imgs: ["g6", "s051", "x049", "g7"], desc: "Phòng xanh rêu, sofa gỗ, rèm sáng, đàn guitar. Hợp lookbook, chân dung, video nội dung ấm.", size: "Góc 5×4m", light: "Ánh sáng cửa sổ + LED", fit: "Lookbook, chân dung, content" },
  { name: "Simple / Box", imgs: ["x011", "s064", "g9", "g1"], desc: "Phông trắng, kệ, ghế gỗ, tối giản. Nền sạch cho sản phẩm và chân dung doanh nghiệp.", size: "Box 4×4m", light: "Flash + softbox", fit: "Sản phẩm, chân dung công ty" },
  { name: "Sản phẩm", imgs: ["g2", "s072", "g3", "s039"], desc: "Bàn chụp, khăn trải, backdrop giấy nhiều màu, đèn tròn. Chụp SKU nhanh cho sàn TMĐT.", size: "Bàn 1,2m + backdrop", light: "Flash 2–3 đèn", fit: "TMĐT, catalogue, macro" },
  { name: "Theo mùa", imgs: ["g4", "s014", "s015", "x012"], desc: "Giáng sinh, Tết, sinh nhật: dựng theo lịch, thay đổi mỗi tháng. Đặt sớm vì kín lịch cuối năm.", size: "Góc 4×3m", light: "LED ấm + đèn dây", fit: "Gia đình, trẻ em, content mùa" },
  { name: "Trẻ em", imgs: ["s026", "s027", "s005", "s008"], desc: "Đồ chơi, xe, nhà bóng, phông màu. An toàn, có trợ lý hỗ trợ bé.", size: "Góc 4×3m", light: "LED liên tục, không flash", fit: "Ảnh bé, sản phẩm mẹ & bé" },
];

export default function ConceptTabs() {
  const [i, setI] = useState(0);
  const c = concepts[i];
  return (
    <>
      <div className="tabs" role="tablist">{concepts.map((x, k) => <button key={x.name} role="tab" aria-selected={i === k} onClick={() => setI(k)}>{x.name}</button>)}</div>
      <div className="concept">
        <div className="cg">{c.imgs.map((im) => <figure key={im}><Pic name={im} alt={c.name} sizes="(max-width: 860px) 50vw, 25vw" /></figure>)}</div>
        <div className="info">
          <h3>{c.name}</h3><p>{c.desc}</p>
          <dl><dt>Diện tích</dt><dd>{c.size}</dd><dt>Ánh sáng</dt><dd>{c.light}</dd><dt>Phù hợp</dt><dd>{c.fit}</dd></dl>
          <a href="/lien-he#datlich" className="btn btn-fill" style={{ marginTop: 20 }}>Đặt concept này</a>
        </div>
      </div>
    </>
  );
}
