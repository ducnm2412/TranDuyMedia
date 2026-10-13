import { site } from "@/lib/site";

export default function ZaloButton() {
  return (
    <a className="zalo" href={site.zalo} target="_blank" rel="noopener" aria-label="Chat Zalo">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1.1-4.2A8 8 0 1 1 21 12z" /></svg><span>Chat Zalo</span>
    </a>
  );
}
