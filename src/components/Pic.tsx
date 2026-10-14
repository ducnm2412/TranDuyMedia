import Image from "next/image";
import { IMG } from "@/lib/imageSizes";

type Props = { name: string; alt: string; sizes?: string; eager?: boolean; className?: string };

/**
 * Ảnh trong public/images qua next/image: tự sinh srcset nhiều cỡ + WebP, lazy-load mặc định.
 * `sizes` mô tả chiều rộng hiển thị để trình duyệt chọn cỡ nhỏ nhất đủ nét.
 * `data-full` giữ đường dẫn gốc cho Lightbox mở ảnh lớn.
 * Thêm ảnh mới: chạy  python -c "from PIL import Image;import os;print({f[:-4]:Image.open('public/images/'+f).size for f in os.listdir('public/images') if f.endswith('.jpg')})"
 * rồi cập nhật src/lib/imageSizes.ts.
 */
export default function Pic({ name, alt, sizes = "(max-width: 768px) 100vw, 50vw", eager, className }: Props) {
  const [w, h] = IMG[name] ?? [900, 900];
  const src = `/images/${name}.jpg`;
  return (
    <Image src={src} alt={alt} width={w} height={h} sizes={sizes} className={className}
      loading={eager ? "eager" : undefined} fetchPriority={eager ? "high" : undefined} data-full={src} />
  );
}
