"use client";
import { usePathname } from "next/navigation";

/** Bọc nội dung trang; đổi key theo đường dẫn để chạy lại hiệu ứng mờ dần khi chuyển trang. */
export default function PageTransition({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  return <div key={path} className="pt">{children}</div>;
}
