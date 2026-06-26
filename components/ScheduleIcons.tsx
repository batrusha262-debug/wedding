export function ScheduleIcon({ kind }: { kind: "drink" | "rings" | "plate" | "champagne" | "disco" | "moon" }) {
  const common = "h-8 w-8 text-burgundy";
  switch (kind) {
    case "drink":
      return (
        <svg className={common} viewBox="0 0 32 32" fill="none" aria-hidden>
          <path d="M10 5h12l-1.4 10.5a4.6 4.6 0 01-9.2 0L10 5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M16 20v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M12 26h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M11 10h10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.55" />
        </svg>
      );
    case "rings":
      return (
        <svg className={common} viewBox="0 0 32 32" fill="none" aria-hidden>
          <circle cx="12.5" cy="18.5" r="6.5" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="19.5" cy="18.5" r="6.5" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "plate":
      return (
        <svg className={common} viewBox="0 0 32 32" fill="none" aria-hidden>
          <ellipse cx="16" cy="17" rx="10" ry="6.5" stroke="currentColor" strokeWidth="1.6" />
          <ellipse cx="16" cy="17" rx="5.5" ry="3" stroke="currentColor" strokeWidth="1.3" opacity="0.75" />
        </svg>
      );
    case "champagne":
      return (
        <svg className={common} viewBox="0 0 32 32" fill="none" aria-hidden>
          <rect x="10" y="14" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M14 14V10l4-2v6" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "disco":
      return (
        <svg className={common} viewBox="0 0 32 32" fill="none" aria-hidden>
          <path d="M16 4v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="16" cy="17" r="8" stroke="currentColor" strokeWidth="1.5" />
          <path d="M10 12h12M8.5 17h15M10 22h12M16 9v16M12 10.5c-1.2 4.1-1.2 8.9 0 13M20 10.5c1.2 4.1 1.2 8.9 0 13" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
          <path d="M6 8l1.5 1.5M26 8l-1.5 1.5M4.5 17H2.5M29.5 17h-2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
      );
    case "moon":
      return (
        <svg className={common} viewBox="0 0 32 32" fill="none" aria-hidden>
          <path d="M22 20.5A9 9 0 1111.5 10a7 7 0 0010.5 10.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M24 6l.9 2.1L27 9l-2.1.9L24 12l-.9-2.1L21 9l2.1-.9L24 6z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
          <path d="M26.5 13.5l.6 1.4 1.4.6-1.4.6-.6 1.4-.6-1.4-1.4-.6 1.4-.6.6-1.4z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" opacity="0.7" />
        </svg>
      );
    default:
      return null;
  }
}
