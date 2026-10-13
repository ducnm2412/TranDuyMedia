import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="top">
          <div><img src="/images/logo_w.png" alt="TRAN DUY Media" /><p style={{ marginTop: 14, maxWidth: "34ch" }}>Sản xuất video thương mại, chụp ảnh thương mại, cho thuê studio tại TP.HCM.</p></div>
          <div className="cols">
            <ul><li><a href="#dichvu">Sản xuất video</a></li><li><a href="#studio">Thuê studio</a></li><li><a href="#dichvu">Chụp ảnh</a></li><li><a href="#quytrinh">Quy trình</a></li></ul>
            <ul><li><a href={`tel:${site.phone}`}>{site.phoneDisplay}</a></li><li><a href={site.zalo} target="_blank" rel="noopener">Zalo</a></li><li><a href={site.facebook} target="_blank" rel="noopener">Facebook</a></li><li><a href="#datlich">Đặt lịch</a></li></ul>
          </div>
        </div>
        <div className="bottom"><span>© 2026 {site.name}</span><span>Uy tín · Trách nhiệm · Tâm huyết</span></div>
      </div>
    </footer>
  );
}
