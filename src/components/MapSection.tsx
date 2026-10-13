import { site } from "@/lib/site";

const embed = `https://www.google.com/maps?q=${encodeURIComponent(site.address)}&z=15&output=embed`;

/** Thẻ bản đồ gọn trong footer: Google Maps nhúng theo địa chỉ + địa chỉ, khu vực, link mở bản đồ. */
export default function MapSection() {
  return (
    <div className="fmap">
      <iframe src={embed} title="Bản đồ studio TRAN DUY Media" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
      <div className="fmap-txt">
        <b>Studio tại TP.HCM</b>
        <p>{site.address}</p>
        <p className="area">Phục vụ: {site.areas}</p>
        <a href={site.mapsUrl} target="_blank" rel="noopener">Mở Google Maps →</a>
      </div>
    </div>
  );
}
