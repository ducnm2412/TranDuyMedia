import Hero from "@/components/Hero";
import Tape from "@/components/Tape";
import Showcase from "@/components/Showcase";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Studio from "@/components/Studio";
import Gear from "@/components/Gear";
import Gallery from "@/components/Gallery";
import Editorial from "@/components/Editorial";
import About from "@/components/About";
import Feedback from "@/components/Feedback";
import Faq from "@/components/Faq";
import Booking from "@/components/Booking";
import { site } from "@/lib/site";

export default function Page() {
  return (
    <>
      <main id="top">
        <Hero />
        <Tape words={["Rolling", "Action", "TVC", "Phim doanh nghiệp", "Video sự kiện", "Chụp ảnh thương mại", "Thuê studio", "Cut"]} />
        <Showcase />
        <Tape words={["10+ năm", "Trọn gói", "Push sale", "Performance", "SME · Startup", "TP.HCM"]} navy reverse tilt />
        <Services />
        <Process />
        <Studio />
        <Gear />
        <Gallery />
        <Editorial />
        <About />
        <Tape words={["Uy tín", "Trách nhiệm", "Tâm huyết", "Một đầu mối", "Đúng tiến độ"]} />
        <Feedback />
        <Tape words={site.partners} navy />
        <Faq />
        <Booking />
      </main>
    </>
  );
}
