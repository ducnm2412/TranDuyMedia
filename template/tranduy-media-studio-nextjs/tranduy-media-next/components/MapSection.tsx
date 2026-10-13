import { site } from "@/lib/site";

export default function MapSection() {
  return (
    <section className="wrap" style={{ marginTop: "clamp(64px,8vw,110px)" }}>
      <div className="map rv">
        <div className="ph" aria-hidden="true"><div className="pin" /></div>
        <div className="txt">
          <h3>Studio tại TP.HCM</h3>
          <p>{site.address}. Liên hệ trước để được hướng dẫn gửi xe.</p>
          <a href={site.mapsUrl} target="_blank" rel="noopener" className="btn" style={{ color: "var(--ink)" }}>Mở Google Maps</a>
        </div>
      </div>
    </section>
  );
}
