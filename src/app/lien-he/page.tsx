import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Booking from "@/components/Booking";
import Faq from "@/components/Faq";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Liên hệ", description: "Liên hệ TRAN DUY Media Studio: điện thoại, Zalo, Facebook, địa chỉ studio tại Nhà Bè, TP.HCM và form đặt lịch." };

export default function Page() {
  return (
    <main>
      <PageHero crumb="Liên hệ" title="Gọi là" em="có người" img="reel6" text="Phản hồi trong giờ làm việc. Gấp thì gọi, không gấp thì điền form, chúng tôi gọi lại." />
      <section className="sec"><div className="wrap">
        <div className="cgrid">
          <a className="cc rv" href={`tel:${site.phone}`}><span>Điện thoại</span><b>{site.phoneDisplay}</b><small>Bấm để gọi · 8h–21h hằng ngày</small></a>
          <a className="cc rv" href={site.zalo} target="_blank" rel="noopener"><span>Zalo</span><b>Nhắn Zalo</b><small>Gửi ảnh sản phẩm, video tham khảo nhanh nhất</small></a>
          <a className="cc rv" href={site.facebook} target="_blank" rel="noopener"><span>Facebook</span><b>TranDuyMedia</b><small>Xem thêm dự án và hậu trường mới</small></a>
          <a className="cc rv" href={`mailto:${site.email}`}><span>Email</span><b style={{ fontSize: "clamp(16px,1.3vw,22px)", wordBreak: "break-all" }}>{site.email}</b><small>Gửi tài liệu, kịch bản, bộ nhận diện</small></a>
        </div>
        <div className="hgrid rv">
          <dl className="hours"><dt>Giờ làm việc</dt><dd>Thứ 2 – Chủ nhật, 8:00 – 21:00</dd><dt>Studio</dt><dd>{site.address}</dd><dt>Khu vực</dt><dd>{site.areas}</dd><dt>Quay ngoài</dt><dd>Toàn quốc, báo trước 3 ngày</dd><dt>Báo giá</dt><dd>Trong 24 giờ làm việc</dd></dl>
          <div className="hours" style={{ gridTemplateColumns: "1fr" }}><dt>Gửi tài liệu qua email</dt><dd>Nếu bạn có tài liệu dài (yêu cầu chi tiết, kịch bản cũ, bộ nhận diện), gửi về <a href={`mailto:${site.email}`} style={{ color: "var(--orange)", fontWeight: 700 }}>{site.email}</a> hoặc qua Zalo. Chúng tôi xác nhận trong giờ làm việc.</dd></div>
        </div>
      </div></section>
      <Booking />
      <Faq />
    </main>
  );
}
