import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import LightboxGallery, { Pic } from "@/components/LightboxGallery";
import Tape from "@/components/Tape";

export const metadata: Metadata = { title: "Thư viện hình ảnh", description: "Toàn bộ hình ảnh hậu trường, bối cảnh studio, sản phẩm và chân dung của TRAN DUY Media Studio." };

const b = (img: string, alt: string): Pic => ({ img, cat: "Hậu trường", alt });
const s = (img: string, alt: string): Pic => ({ img, cat: "Studio", alt });
const p = (img: string, alt: string): Pic => ({ img, cat: "Sản phẩm", alt });
const c = (img: string, alt: string): Pic => ({ img, cat: "Chân dung", alt });

const pics: Pic[] = [
  b("hero", "Ê-kíp tại hiện trường"), b("reel1", "Quay TVC trang sức"), b("reel2", "Kiểm tra khung hình"), b("reel3", "Monitor hiện trường"), b("reel4", "Quay tại showroom"), b("reel5", "Phỏng vấn"), b("reel6", "Quay sự kiện"), b("reel7", "Quay nội dung studio"), b("b025", "Set đèn"), b("b028", "Quay cùng diễn viên nhí"), b("b048", "Collage hậu trường"), b("about", "Ê-kíp tại studio"), b("svc_video", "Chụp lookbook"),
  s("g1", "Góc kệ trắng"), s("g2", "Khăn trải trắng"), s("g3", "Đèn tròn"), s("g4", "Giáng sinh"), s("g5", "Góc hoa"), s("g6", "Vintage"), s("g7", "Sofa"), s("g8", "Ghế trắng"), s("g9", "Đàn guitar"), s("s005", "Giỏ xe đẩy"), s("s008", "Phông sinh nhật"), s("s010", "Hệ thống đèn"), s("s014", "Cây thông"), s("s015", "Quà Noel"), s("s026", "Đồ chơi"), s("s027", "Set trẻ em"), s("s039", "Bàn ghế trắng"), s("s051", "Rèm sáng"), s("s054", "Đen trắng"), s("s064", "Box studio"), s("s070", "Phòng xanh"), s("s071", "Vintage"), s("s072", "Set đèn"), s("x011", "Box studio"), s("x012", "Noel cho bé"), s("x049", "Concept vintage"), s("x069", "Ưu đãi studio"), s("x073", "Lookbook setup"), s("svc_studio", "Sofa vintage"),
  p("p1", "Mỹ phẩm"), p("p2", "Trang sức"), p("p4", "Thực phẩm"), p("p5", "Thời trang"), p("p7", "Kim cương"), p("p8", "Mỹ phẩm màu"), p("p020", "Xe đồ chơi"), p("p021", "Đồ chơi"), p("p022", "Ngoài trời"), p("p023", "Nhà bóng"), p("p035", "Skincare"), p("p036", "Nền màu"), p("p038", "Vitamin"), p("p056", "Nhẫn"), p("p066", "Nội y"), p("p067", "Thời trang xanh"), p("p068", "Nude"), p("svc_photo", "Macro trang sức"),
  c("p3", "Chân dung doanh nhân"), c("p6", "Chân dung studio"), c("c017", "Đen trắng"), c("c062", "Bìa tạp chí"), c("c063", "MC"),
];

export default function Page() {
  return (
    <main>
      <PageHero crumb="Thư viện" title="Thư viện" em={`${pics.length} ảnh`} img="b048" text="Lọc theo nhóm, bấm vào ảnh để xem lớn. Dùng phím mũi tên để chuyển ảnh." />
      <Tape words={["Hậu trường", "Studio", "Sản phẩm", "Chân dung"]} navy />
      <section className="sec"><div className="wrap"><LightboxGallery pics={pics} /></div></section>
    </main>
  );
}
