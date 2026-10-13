/** Băng chữ chạy ngang (marquee). */
export default function Tape({ words, navy, reverse, tilt }: { words: string[]; navy?: boolean; reverse?: boolean; tilt?: boolean }) {
  const cls = ["tape", navy && "navy", reverse && "rev", tilt && "tilt"].filter(Boolean).join(" ");
  const items = Array.from({ length: 4 }, () => words).flat();
  return (
    <div className={cls}>
      <div className="t">{items.map((w, i) => <span key={i}>{w}</span>)}</div>
    </div>
  );
}
