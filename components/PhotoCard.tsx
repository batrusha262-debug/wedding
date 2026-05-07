import Image from "next/image";

type PhotoCardProps = {
  src: string;
  alt: string;
  /** Наклон в градусах */
  rotate?: number;
  /** Стиль «полароид»: толстая белая рамка */
  polaroid?: boolean;
  /** Ч/б (как на макете для «полароидов») */
  grayscale?: boolean;
  className?: string;
};

export function PhotoCard({
  src,
  alt,
  rotate = 0,
  polaroid,
  grayscale = true,
  className = "",
}: PhotoCardProps) {
  const isSvg = src.endsWith(".svg");
  const frame = polaroid
    ? "border-[10px] border-white bg-white pb-10 shadow-[0_8px_24px_rgba(0,0,0,0.15)]"
    : "border-4 border-white shadow-md";

  return (
    <figure
      className={`relative mx-auto w-[min(100%,280px)] ${frame} ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-white/80">
        <Image
          src={src}
          alt={alt}
          fill
          className={`${isSvg ? "object-contain" : "object-cover"} ${grayscale ? "grayscale" : ""}`}
          sizes="(max-width: 768px) 90vw, 320px"
          priority={false}
          unoptimized={isSvg}
        />
      </div>
    </figure>
  );
}

/** Детские фото в истории — цветные, без grayscale */
export function StoryPhotoCard({
  src,
  alt,
  rotate = 0,
  className = "",
}: Omit<PhotoCardProps, "polaroid">) {
  const isSvg = src.endsWith(".svg");
  return (
    <figure
      className={`relative mx-auto w-[min(42vw,240px)] border-4 border-white shadow-md ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-cream">
        <Image
          src={src}
          alt={alt}
          fill
          className={isSvg ? "object-contain" : "object-cover"}
          sizes="(max-width: 768px) 45vw, 240px"
          unoptimized={isSvg}
        />
      </div>
    </figure>
  );
}
