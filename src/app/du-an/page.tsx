import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CaseGrid, { Case } from "@/components/CaseGrid";
import Tape from "@/components/Tape";
import Showcase from "@/components/Showcase";

export const metadata: Metadata = { title: "Dự án", description: "Các dự án TVC, phim doanh nghiệp, video sự kiện và chụp ảnh thương mại của TRAN DUY Media Studio." };

const cases: Case[] = [
  { img: "reel1", tag: "TVC", title: "TVC trang sức Lotus", client: "Lotus Jewelry", year: "2026", desc: "Quay tại showroom, tôn chất liệu kim cương bằng ánh sáng điểm. 1 ngày quay, bàn giao 30s + 15s + cut dọc TikTok.", tags: ["30s", "Dọc 9:16", "Push sale"] },
  { img: "reel5", tag: "Documentary", title: "Chân dung nhà sáng lập", client: "Startup F&B", year: "2025", desc: "Phỏng vấn nhân vật kết hợp hậu trường bếp. Phong cách tài liệu, tiếng thật, ít dựng.", tags: ["5 phút", "Phỏng vấn", "Brand story"] },
  { img: "reel6", tag: "Sự kiện", title: "Lễ kỷ niệm 10 năm", client: "Công ty sản xuất", year: "2025", desc: "Quay 2 máy + flycam, dựng recap 3 phút trong 48 giờ để đăng ngay sau sự kiện.", tags: ["Recap", "Flycam", "48h"] },
  { img: "reel7", tag: "Doanh nghiệp", title: "Phim giới thiệu công ty", client: "Doanh nghiệp SME", year: "2025", desc: "Giới thiệu năng lực, dây chuyền và đội ngũ. Dùng cho website, hội chợ và hồ sơ năng lực.", tags: ["3 phút", "Lồng tiếng", "Sub EN"] },
  { img: "reel2", tag: "TVC", title: "Video quảng cáo cửa hàng", client: "Chuỗi bán lẻ", year: "2026", desc: "Video ngắn chạy ads Facebook/TikTok, 3 phiên bản A/B khác nhau về hook mở đầu.", tags: ["15s", "A/B test", "Ads"] },
  { img: "p2", tag: "Chụp ảnh", title: "Lookbook trang sức", client: "Lotus Jewelry", year: "2026", desc: "Ảnh sản phẩm nền tối, macro chi tiết đá, bộ ảnh dùng cho catalogue và website.", tags: ["Macro", "Catalogue"] },
  { img: "c062", tag: "Chụp ảnh", title: "Bìa tạp chí Zemagazine", client: "Zemagazine", year: "2025", desc: "Chụp editorial tại studio, 3 nhân vật, set đèn tạp chí. Hậu kỳ theo nhận diện tạp chí.", tags: ["Editorial", "Studio"] },
  { img: "p1", tag: "Chụp ảnh", title: "Ảnh mỹ phẩm Latisa", client: "Latisa", year: "2025", desc: "Ảnh sản phẩm nền màu cho sàn TMĐT và social, chụp 40 SKU trong một buổi.", tags: ["TMĐT", "40 SKU"] },
  { img: "reel3", tag: "Doanh nghiệp", title: "Video năng lực nhà máy", client: "Doanh nghiệp sản xuất", year: "2024", desc: "Quay toàn bộ quy trình sản xuất, motion graphic số liệu, phiên bản tiếng Việt và tiếng Anh.", tags: ["Motion", "Song ngữ"] },
];

export default function Page() {
  return (
    <main>
      <PageHero crumb="Dự án" title="Dự án" em="đã lên sóng" img="reel4" text="Chọn theo loại hình để xem. Mỗi dự án ghi rõ định dạng bàn giao để bạn hình dung sản phẩm của mình." />
      <Tape words={["TVC", "Phim doanh nghiệp", "Documentary", "Video sự kiện", "Chụp ảnh thương mại"]} />
      <section className="sec"><div className="wrap"><CaseGrid cases={cases} /></div></section>
      <Showcase />
    </main>
  );
}
