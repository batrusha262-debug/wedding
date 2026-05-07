/** Декоративные «нарисованные карандашом» сердечки */
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
        d="M12.1 20.3C9.7 18.8 5 15.2 4.7 10.6 4.5 7.7 6.2 5.5 8.6 5.4c1.5-.1 2.8.8 3.5 2 .7-1.4 2-2.3 3.6-2.2 2.4.1 4.1 2.1 3.9 5-.3 4.7-5.1 8.5-7.5 10.1z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.8 19.5c-2.1-1.4-6.2-4.7-6.4-8.8C5.2 8.3 6.5 6.4 8.7 6.1c1.3-.1 2.5.6 3.2 1.8.9-1.2 2-1.9 3.4-1.8 2.1.2 3.5 1.9 3.3 4.4-.3 4-4.5 7.5-6.8 9z"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.55"
      />
    </svg>
  );
}

function PencilLoop({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 140 42" fill="none" aria-hidden>
      <path
        d="M3 26c18-20 38 17 57-1 17-16 29-19 42-4 10 12 23 12 34-5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.35"
      />
      <path
        d="M4 28c19-18 37 14 56-2 18-15 29-16 42-2 10 11 22 10 34-5"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.22"
      />
    </svg>
  );
}

export function HeartField({ className = "", color = "text-burgundy/70" }: { className?: string; color?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      <Heart className={`absolute left-[8%] top-[12%] rotate-[-12deg] ${color}`} size={24} />
      <Heart className={`absolute right-[9%] top-[18%] rotate-[10deg] ${color}`} size={18} />
      <Heart className={`absolute left-[14%] bottom-[20%] rotate-[16deg] ${color}`} size={16} />
      <Heart className={`absolute right-[16%] bottom-[24%] rotate-[-8deg] ${color}`} size={22} />
      <Heart className={`absolute left-[42%] top-[5%] rotate-[18deg] ${color}`} size={13} />
      <Heart className={`absolute right-[37%] bottom-[7%] rotate-[-18deg] ${color}`} size={14} />
      <PencilLoop className={`absolute -left-8 top-[34%] h-12 w-36 rotate-[-8deg] ${color}`} />
      <PencilLoop className={`absolute -right-10 bottom-[36%] h-12 w-40 rotate-[14deg] ${color}`} />
    </div>
  );
}
