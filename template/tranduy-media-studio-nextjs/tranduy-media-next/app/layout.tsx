import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TRAN DUY Media Studio — Quay. Dựng. Bán.",
  description:
    "TRAN DUY Media Studio: sản xuất video quảng cáo, TVC, phim doanh nghiệp, chụp ảnh thương mại và cho thuê studio tại TP.HCM. 10+ năm, trọn gói.",
  icons: { icon: "/images/logo.png" },
  openGraph: { title: "TRAN DUY Media Studio", description: "Sản xuất video thương mại, chụp ảnh thương mại, cho thuê studio tại TP.HCM.", images: ["/images/hero.jpg"] },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Anton&family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
