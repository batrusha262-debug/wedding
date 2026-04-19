/** Декоративные «нарисованные» сердечки */
export function Heart({
  className = "",
  size = 20,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      aria-hidden
    >
      <path
        d="M12 21s-7-4.35-7-10a4.5 4.5 0 019-1 4.5 4.5 0 019 1c0 5.65-7 10-7 10z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HeartField({ className = "", color = "text-burgundy/80" }: { className?: string; color?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      <Heart className={`absolute left-[8%] top-[12%] ${color}`} size={18} />
      <Heart className={`absolute right-[10%] top-[20%] ${color}`} size={14} />
      <Heart className={`absolute left-[15%] bottom-[18%] ${color}`} size={12} />
      <Heart className={`absolute right-[18%] bottom-[25%] ${color}`} size={16} />
    </div>
  );
}
