/** Dữ liệu 3 trang dịch vụ con: /dich-vu/[slug]. Sửa nội dung ở đây. */
export type Service = {
  slug: string;
  nav: string;            // tên ngắn trên menu
  title: string; em: string; // tiêu đề đầu trang (2 dòng)
  hero: string;           // ảnh nền đầu trang (public/images/*.jpg)
  img: string;            // ảnh giới thiệu
  lead: string;
  items: string[];        // bạn nhận được gì
  types: { t: string; d: string; ic: string }[]; // hạng mục
  steps: { t: string; d: string }[];
  gallery: { img: string; alt: string }[];
  pkgs?: { name: string; price: string; hot?: boolean; items: string[] }[];
  faqs: [string, string][];
  tape: string[];
};

export const services: Service[] = [
  {
    slug: "san-xuat-video", nav: "Sản xuất video thương mại",
    title: "Sản xuất video", em: "thương mại quảng cáo", hero: "reel1", img: "svc_video",
    lead: "Hình ảnh & video commercial, iTVC, documentary, phim giới thiệu doanh nghiệp, video sự kiện. Làm để chạy quảng cáo và kéo đơn, trọn gói từ kịch bản tới file phát hành.",
    items: ["Kịch bản, storyboard, casting, bối cảnh", "Ê-kíp đạo diễn, DOP, ánh sáng, âm thanh, flycam", "Dựng, color grading, motion graphic, lồng tiếng, phụ đề", "Xuất đa định dạng 16:9, 9:16, 1:1 cho từng kênh", "Hai vòng chỉnh sửa, bàn giao đúng hạn"],
    types: [
      { ic: "🎬", t: "TVC & video commercial", d: "Phim quảng cáo 15–60s cho TV, màn LED, YouTube. Có kịch bản, diễn viên, bối cảnh dựng." },
      { ic: "📱", t: "iTVC & video push sale", d: "Video ngắn dọc cho TikTok, Reels, ads. Hook trong 3 giây đầu, tối ưu chuyển đổi." },
      { ic: "🎥", t: "Video documentary", d: "Phóng sự thương hiệu, câu chuyện người sáng lập, hậu trường sản xuất. Quay thật, ít dựng." },
      { ic: "🏢", t: "Phim giới thiệu doanh nghiệp", d: "Profile công ty 2–5 phút: năng lực, nhà máy, đội ngũ, khách hàng. Dùng cho đấu thầu, đối tác." },
      { ic: "🎤", t: "Video sự kiện doanh nghiệp", d: "Lễ kỷ niệm, ra mắt sản phẩm, hội thảo. Quay nhiều máy, recap trong 48 giờ." },
      { ic: "🛍️", t: "Video sản phẩm & livestream", d: "Video review, unboxing, demo tính năng. Hỗ trợ kỹ thuật livestream bán hàng tại studio." },
    ],
    steps: [
      { t: "Nhận yêu cầu & báo giá", d: "Mục tiêu, kênh phát, ngân sách. Báo giá trong 24 giờ làm việc." },
      { t: "Kịch bản & storyboard", d: "Duyệt ý tưởng, lời thoại, khung hình trước khi quay." },
      { t: "Quay", d: "1–2 ngày tại hiện trường hoặc studio, khách duyệt khung hình tại chỗ." },
      { t: "Hậu kỳ & bàn giao", d: "Dựng, màu, âm thanh, đồ họa. Hai vòng sửa, xuất file theo từng kênh." },
    ],
    gallery: [
      { img: "reel1", alt: "Quay TVC tại showroom trang sức" }, { img: "reel2", alt: "Đạo diễn kiểm tra khung hình" }, { img: "reel5", alt: "Quay phỏng vấn documentary" },
      { img: "reel6", alt: "Quay sự kiện doanh nghiệp" }, { img: "reel3", alt: "Monitor hiện trường" }, { img: "reel7", alt: "Quay nội dung tại studio" },
      { img: "b025", alt: "Ê-kíp chuẩn bị máy quay" }, { img: "reel4", alt: "Quay tại cửa hàng" },
    ],
    pkgs: [
      { name: "Gói Nhanh", price: "Video ngắn 15–30s", items: ["1 buổi quay tại studio hoặc cửa hàng", "Kịch bản ngắn theo hook bán hàng", "Dựng 2 phiên bản ngang/dọc", "1 vòng chỉnh sửa", "Bàn giao 5 ngày"] },
      { name: "Gói Chuẩn", price: "TVC / phim doanh nghiệp", hot: true, items: ["Kịch bản + storyboard duyệt trước", "1–2 ngày quay, 2 máy + flycam", "Color grading, motion graphic, lồng tiếng", "2 vòng chỉnh sửa", "Bàn giao 2–3 tuần"] },
      { name: "Gói Chiến dịch", price: "Bộ video theo tháng", items: ["Lên kế hoạch nội dung theo tháng", "Quay gom 1–2 ngày, ra 8–12 video", "Tối ưu cho ads và TikTok/Reels", "Báo cáo hiệu quả, điều chỉnh hook", "Ưu tiên lịch, giá tốt theo quý"] },
    ],
    faqs: [
      ["Một video quảng cáo mất bao lâu?", "Video ngắn 5–7 ngày. TVC hoặc phim doanh nghiệp 2–4 tuần: một tuần kịch bản và tiền kỳ, 1–2 ngày quay, 1–2 tuần hậu kỳ."],
      ["Có cần thuê diễn viên không?", "Tùy kịch bản. Chúng tôi có mạng lưới diễn viên, KOL, MC và báo giá riêng từng người để bạn chọn."],
      ["Bản quyền video thuộc về ai?", "Thuộc về khách hàng sau khi bàn giao. Nhạc dùng trong video là nhạc có bản quyền thương mại."],
      ["Có quay ngoài TP.HCM không?", "Có. Ê-kíp đi các tỉnh, chi phí di chuyển và lưu trú ghi rõ trong báo giá."],
    ],
    tape: ["TVC", "iTVC", "Documentary", "Phim doanh nghiệp", "Video sự kiện", "Push sale"],
  },
  {
    slug: "thue-studio", nav: "Cho thuê bối cảnh studio",
    title: "Cho thuê", em: "bối cảnh studio", hero: "x049", img: "svc_studio",
    lead: "Bối cảnh dựng sẵn để chụp ảnh và quay video quảng cáo: box studio, vintage, phòng xanh, set theo mùa. Đèn, phông, phụ kiện có sẵn, kỹ thuật viên hỗ trợ, tính theo giờ.",
    items: ["Nhiều concept, đổi phông nhanh trong một buổi", "Đèn liên tục, flash, softbox, backdrop giấy nhiều màu", "Kỹ thuật viên set đèn, trợ lý hỗ trợ", "Thuê theo giờ, nửa ngày, cả ngày, gói tháng cho shop", "Có thể đặt thêm người chụp hoặc quay cùng buổi"],
    types: [
      { ic: "⬜", t: "Box studio minimalist", d: "Phông trắng, kệ, ghế gỗ, tối giản. Nền sạch cho sản phẩm và chân dung doanh nghiệp. Box 4×4m." },
      { ic: "🛋️", t: "Vintage", d: "Phòng xanh rêu, sofa gỗ, rèm sáng, đàn guitar. Hợp lookbook, chân dung, video nội dung ấm." },
      { ic: "🪴", t: "Phòng xanh", d: "Tường xanh, tranh, cây, ánh sáng cửa sổ buổi sáng. Hợp chụp thời trang và nội dung đời sống." },
      { ic: "📦", t: "Bàn chụp sản phẩm", d: "Bàn 1,2m, khăn trải, backdrop giấy, đèn tròn. Chụp SKU nhanh cho sàn TMĐT, flatlay mỹ phẩm." },
      { ic: "🎄", t: "Set theo mùa", d: "Giáng sinh, Tết, sinh nhật, dựng theo lịch và đổi mỗi tháng. Đặt sớm vì kín lịch cuối năm." },
      { ic: "🧸", t: "Trẻ em", d: "Đồ chơi, xe, nhà bóng, phông màu. Đèn LED liên tục không flash, có trợ lý hỗ trợ bé." },
    ],
    steps: [
      { t: "Chọn concept & ngày", d: "Gửi ngày dự kiến, chúng tôi báo lịch trống trong ngày." },
      { t: "Chốt thiết bị", d: "Đèn, phông, phụ kiện, có cần kỹ thuật viên hay người chụp." },
      { t: "Đến studio", d: "Set đèn sẵn trước giờ, bạn chỉ việc bắt đầu." },
      { t: "Thanh toán theo giờ", d: "Tính đúng số giờ dùng, phát sinh báo trước." },
    ],
    gallery: [
      { img: "x049", alt: "Concept studio vintage simple" }, { img: "s039", alt: "Bàn ghế trắng" }, { img: "x011", alt: "Box studio minimalist" },
      { img: "g6", alt: "Góc vintage" }, { img: "s064", alt: "Box studio và đèn" }, { img: "s015", alt: "Cây thông Noel" },
      { img: "s026", alt: "Set đồ chơi trẻ em" }, { img: "g2", alt: "Khăn trải trắng chụp sản phẩm" },
    ],
    faqs: [
      ["Giá thuê tính thế nào?", "Tính theo giờ, tối thiểu 2 giờ. Giá tùy concept và thiết bị kèm theo, gửi ngày dự kiến để nhận báo giá kèm lịch trống."],
      ["Có kèm người chụp không?", "Mặc định là thuê bối cảnh và thiết bị, có kỹ thuật viên set đèn. Có thể đặt thêm gói chụp hoặc quay cùng buổi."],
      ["Được mang đạo cụ riêng không?", "Được. Báo trước nếu đạo cụ cồng kềnh hoặc cần nguồn điện lớn để chúng tôi bố trí."],
      ["Hủy lịch thế nào?", "Báo trước 24 giờ không mất phí. Hủy trong ngày tính 50% giờ đã đặt."],
    ],
    tape: ["Box studio", "Vintage", "Phòng xanh", "Sản phẩm", "Theo mùa", "Trẻ em", "Tính theo giờ"],
  },
  {
    slug: "chup-anh", nav: "Chụp ảnh thương mại",
    title: "Chụp ảnh", em: "thương mại", hero: "c062", img: "svc_photo",
    lead: "Ảnh sản phẩm, lookbook, catalogue, key visual, chân dung thương hiệu và bìa tạp chí. Hậu kỳ đồng bộ theo bộ nhận diện, sẵn để đăng bán.",
    items: ["Sản phẩm nền trắng cho sàn TMĐT, nền màu cho social", "Macro trang sức, mỹ phẩm, thực phẩm", "Lookbook, catalogue, key visual chiến dịch", "Chân dung nhân sự, ban lãnh đạo, không gian", "Bàn giao JPG web + file gốc theo thỏa thuận"],
    types: [
      { ic: "💍", t: "Sản phẩm & macro", d: "Trang sức, mỹ phẩm, thực phẩm, đồ chơi. Nền trắng chuẩn sàn, nền màu cho social, chi tiết macro." },
      { ic: "👗", t: "Lookbook & thời trang", d: "Bộ sưu tập theo mùa, chụp người mẫu tại studio hoặc ngoại cảnh, retouch tự nhiên." },
      { ic: "📖", t: "Catalogue", d: "Bộ ảnh đồng bộ cho nhiều SKU, đúng góc, đúng màu, đặt tên file theo mã sản phẩm." },
      { ic: "🎯", t: "Key visual", d: "Ảnh chủ đạo cho chiến dịch, dựng bối cảnh và đạo cụ theo concept, ghép hậu kỳ." },
      { ic: "👔", t: "Chân dung thương hiệu", d: "Ban lãnh đạo, nhân sự, đội ngũ. Dùng cho website, profile, LinkedIn, báo chí." },
      { ic: "📰", t: "Editorial & bìa tạp chí", d: "Chụp theo phong cách tạp chí cho nhân vật, doanh nhân, MC, KOL." },
    ],
    steps: [
      { t: "Nhận yêu cầu", d: "Số lượng sản phẩm hoặc nhân sự, kênh dùng ảnh, mẫu tham khảo." },
      { t: "Lên concept", d: "Bối cảnh, đạo cụ, bảng màu, góc chụp; duyệt trước buổi chụp." },
      { t: "Chụp", d: "Tại studio hoặc địa điểm của bạn, xem ảnh ngay trên màn hình." },
      { t: "Hậu kỳ & bàn giao", d: "Chọn ảnh, retouch, đồng bộ màu; giao file trong 3–7 ngày." },
    ],
    gallery: [
      { img: "p2", alt: "Trang sức" }, { img: "p1", alt: "Mỹ phẩm" }, { img: "c062", alt: "Bìa tạp chí" },
      { img: "p4", alt: "Thực phẩm" }, { img: "p5", alt: "Thời trang" }, { img: "c063", alt: "Chân dung MC" },
      { img: "p036", alt: "Mỹ phẩm nền màu" }, { img: "p056", alt: "Nhẫn kim cương" },
    ],
    pkgs: [
      { name: "Gói Sàn TMĐT", price: "Từ 20 SKU", items: ["Nền trắng chuẩn Shopee, Lazada, TikTok Shop", "3–5 góc mỗi sản phẩm", "Retouch cơ bản, đặt tên theo mã", "Bàn giao 3 ngày"] },
      { name: "Gói Thương hiệu", price: "Lookbook / key visual", hot: true, items: ["Concept, bối cảnh, đạo cụ theo nhận diện", "Người mẫu, stylist, makeup nếu cần", "Retouch kỹ từng ảnh", "Bàn giao 5–7 ngày"] },
      { name: "Gói Doanh nghiệp", price: "Chân dung & không gian", items: ["Chụp tại văn phòng hoặc studio", "Ban lãnh đạo, nhân sự, nhóm", "Đồng bộ nền và ánh sáng", "Bàn giao 3–5 ngày"] },
    ],
    faqs: [
      ["Chụp bao nhiêu sản phẩm một buổi?", "Nền trắng đơn giản 40–60 SKU mỗi buổi. Sản phẩm cần dựng bối cảnh hoặc macro thì 10–20 SKU."],
      ["Có cần mang sản phẩm đến studio không?", "Có thể mang đến hoặc chúng tôi chụp tại cửa hàng, nhà máy của bạn nếu số lượng lớn."],
      ["Ảnh bàn giao định dạng gì?", "JPG tối ưu cho web và sàn, kèm file gốc độ phân giải cao theo thỏa thuận. Có thể xuất PNG tách nền."],
      ["Có người mẫu không?", "Có mạng lưới người mẫu, stylist, makeup. Báo giá riêng từng người để bạn chọn."],
    ],
    tape: ["Sản phẩm", "Lookbook", "Catalogue", "Key visual", "Chân dung", "Editorial"],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
