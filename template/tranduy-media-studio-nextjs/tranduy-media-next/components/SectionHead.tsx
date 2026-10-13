export default function SectionHead({ kicker, title, text, light }: { kicker: string; title: React.ReactNode; text?: string; light?: boolean }) {
  return (
    <div className="sec-head rv">
      <div><span className="k">{kicker}</span><h2 className="d">{title}</h2></div>
      {text && <p style={light ? { color: "#C5C8D6" } : undefined}>{text}</p>}
    </div>
  );
}
