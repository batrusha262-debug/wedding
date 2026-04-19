export function ScheduleIcon({ kind }: { kind: "drink" | "rings" | "plate" | "champagne" }) {
  const common = "h-8 w-8 text-burgundy";
  switch (kind) {
    case "drink":
      return (
        <svg className={common} viewBox="0 0 32 32" fill="none" aria-hidden>
          <path
            d="M8 6h10l2 14a4 4 0 01-4 4h-2a4 4 0 01-4-4L8 6z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path d="M10 6V4h6v2" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "rings":
      return (
        <svg className={common} viewBox="0 0 32 32" fill="none" aria-hidden>
          <ellipse cx="12" cy="18" rx="6" ry="8" stroke="currentColor" strokeWidth="1.5" />
          <ellipse cx="20" cy="18" rx="6" ry="8" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "plate":
      return (
        <svg className={common} viewBox="0 0 32 32" fill="none" aria-hidden>
          <ellipse cx="16" cy="17" rx="10" ry="6" stroke="currentColor" strokeWidth="1.5" />
          <path d="M10 12h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "champagne":
      return (
        <svg className={common} viewBox="0 0 32 32" fill="none" aria-hidden>
          <rect x="10" y="14" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M14 14V10l4-2v6" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    default:
      return null;
  }
}
