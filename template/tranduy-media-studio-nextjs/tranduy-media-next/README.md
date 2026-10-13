# TRAN DUY Media Studio — website (Next.js, bản năng động)

## Chạy thử
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Cấu trúc
- `app/layout.tsx` – font (Anton, Space Grotesk qua next/font), metadata
- `app/page.tsx` – ghép các section theo thứ tự
- `app/globals.css` – toàn bộ style (màu logo: navy #242A42, cam #F17721)
- `components/` – mỗi section một file; component có animation/state dùng `"use client"`
- `lib/site.ts` – SĐT, Zalo, Facebook, địa chỉ, link showreel, danh sách đối tác (sửa ở đây)
- `public/images/` – ảnh (đã nén)

## Cần cập nhật
- `lib/site.ts` → `showreelEmbed`: dán link embed YouTube/Vimeo để nút Play chạy clip.
- `components/Feedback.tsx`: 2/3 feedback là mẫu, thay bằng feedback thật.
- `components/About.tsx`: số liệu 300+ dự án cần khách xác nhận.
- Form đặt lịch (`components/Booking.tsx`) hiện soạn tin và mở Zalo; muốn lưu vào email/Google Sheet thì thêm `app/api/booking/route.ts`.

## Deploy
Vercel: import repo là chạy, không cần cấu hình. Hoặc `next build` rồi chạy trên server Node bất kỳ.
