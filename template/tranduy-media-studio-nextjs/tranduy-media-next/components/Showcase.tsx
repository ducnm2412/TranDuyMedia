"use client";
import { useState } from "react";
import SectionHead from "./SectionHead";
import { site } from "@/lib/site";

const items = [
  ["reel1", "TVC", "Quay TVC trang sức"], ["reel2", "BTS", "Kiểm tra khung hình"], ["reel5", "DOC", "Video documentary"],
  ["reel6", "EVENT", "Video sự kiện"], ["reel3", "BTS", "Monitor hiện trường"], ["b048", "CREW", "Ê-kíp TRAN DUY"], ["reel7", "STUDIO", "Quay tại studio"],
];

export default function Showcase() {
  const [playing, setPlaying] = useState(false);
  const [note, setNote] = useState("Clip tổng hợp các dự án");
  const play = () => { if (site.showreelEmbed) setPlaying(true); else setNote("Showreel đang cập nhật — nhắn Zalo để nhận link demo."); };
  return (
    <section className="sec" id="duan">
      <div className="wrap">
        <SectionHead kicker="Showcase" title={<>Dự án<br />đang chạy</>} text='Hậu trường thật, kết quả thật. Rê chuột để "bật màu" từng cảnh.' />
        <div className="mgrid rv">
          {items.map(([img, tag, cap]) => (
            <figure className="mg" key={img}><img src={`/images/${img}.jpg`} alt={cap} /><span className="tag">{tag}</span><figcaption>{cap}</figcaption></figure>
          ))}
        </div>
        <div className="reel rv">
          {playing ? (
            <iframe src={`${site.showreelEmbed}${site.showreelEmbed.includes("?") ? "&" : "?"}autoplay=1`} allow="autoplay; fullscreen" allowFullScreen title="Showreel" />
          ) : (
            <>
              <img src="/images/reel4.jpg" alt="" />
              <button className="play" aria-label="Phát showreel" onClick={play}>
                <span className="ring"><svg width="40" height="40" viewBox="0 0 24 24" fill="#161A2C"><path d="M8 5v14l11-7z" /></svg></span>
                <strong>Showreel 2026</strong><span>{note}</span>
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
