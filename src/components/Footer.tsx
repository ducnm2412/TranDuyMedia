import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import MapSection from "./MapSection";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="top">
          <div><Image src="/images/logo_w.png" alt="TRAN DUY Media" width={120} height={60} /><p style={{ marginTop: 14, maxWidth: "34ch" }}>Sản xuất video thương mại, chụp ảnh thương mại, cho thuê studio tại TP.HCM.</p></div>
          <div className="cols">
            <ul><li><Link href="/dich-vu/san-xuat-video">Sản xuất video</Link></li><li><Link href="/dich-vu/thue-studio">Thuê studio</Link></li><li><Link href="/dich-vu/chup-anh">Chụp ảnh</Link></li><li><Link href="/quy-trinh">Quy trình</Link></li></ul>
            <ul><li><a href={`tel:${site.phone}`}>{site.phoneDisplay}</a></li><li><a href={site.zalo} target="_blank" rel="noopener">Zalo</a></li><li><a href={site.facebook} target="_blank" rel="noopener">Facebook</a></li><li><a href={`mailto:${site.email}`} style={{ textTransform: "none" }}>{site.email}</a></li><li><Link href="/lien-he#datlich">Đặt lịch</Link></li></ul>
          </div>
          <MapSection />
        </div>
        <div className="bottom"><span>© 2026 {site.name}</span><span>Uy tín · Trách nhiệm · Tâm huyết</span></div>
      </div>
    </footer>
  );
}
