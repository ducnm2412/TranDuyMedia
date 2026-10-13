import type { Metadata, Viewport } from "next";
import { Anton, Space_Grotesk } from "next/font/google";
import "./globals.css";

const anton = Anton({ variable: "--font-anton", weight: "400", subsets: ["latin", "vietnamese"] });
const grotesk = Space_Grotesk({ variable: "--font-grotesk", weight: ["400", "500", "700"], subsets: ["latin", "vietnamese"] });

export const metadata: Metadata = {
  title: "TRAN DUY Media Studio — Quay. Dựng. Bán.",
  description:
    "TRAN DUY Media Studio: sản xuất video quảng cáo, TVC, phim doanh nghiệp, chụp ảnh thương mại và cho thuê studio tại TP.HCM. 10+ năm, trọn gói.",
  openGraph: { title: "TRAN DUY Media Studio", description: "Sản xuất video thương mại, chụp ảnh thương mại, cho thuê studio tại TP.HCM.", images: ["/images/hero.jpg"] },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="vi" className={`${anton.variable} ${grotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
