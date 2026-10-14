import type { Metadata, Viewport } from "next";
import { Anton, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ZaloButton from "@/components/ZaloButton";
import BackToTop from "@/components/BackToTop";
import Lightbox from "@/components/Lightbox";
import RevealObserver from "@/components/RevealObserver";
import SmoothScroll from "@/components/SmoothScroll";
import PageTransition from "@/components/PageTransition";
import Leader from "@/components/Leader";

const anton = Anton({ variable: "--font-anton", weight: "400", subsets: ["latin", "vietnamese"] });
const grotesk = Space_Grotesk({ variable: "--font-grotesk", weight: ["400", "500", "700"], subsets: ["latin", "vietnamese"] });

export const metadata: Metadata = {
  title: { default: "TRAN DUY Media Studio — Quay. Dựng. Bán.", template: "%s — TRAN DUY Media Studio" },
  description:
    "TRAN DUY Media Studio: sản xuất video quảng cáo, TVC, phim doanh nghiệp, chụp ảnh thương mại và cho thuê studio tại TP.HCM. 10+ năm, trọn gói.",
  openGraph: { title: "TRAN DUY Media Studio", description: "Sản xuất video thương mại, chụp ảnh thương mại, cho thuê studio tại TP.HCM.", images: ["/images/hero.jpg"] },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="vi" className={`${anton.variable} ${grotesk.variable} no-js`} suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.remove('no-js')" }} />
        <div className="progress" aria-hidden="true" />
        <Leader />
        <Header />
        <PageTransition>{children}</PageTransition>
        <Footer />
        <Lightbox />
        <BackToTop />
        <ZaloButton />
        <RevealObserver />
        <SmoothScroll />
      </body>
    </html>
  );
}
