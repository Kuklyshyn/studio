// The Omnicode mark: code brackets in a rounded square, drawn in the primary colour.
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 font-headline text-2xl font-extrabold tracking-tight ${className}`}>
      <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true" className="shrink-0">
        <rect x="1" y="1" width="28" height="28" rx="8" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" />
        <path d="M11 10 L6.5 15 L11 20 M19 10 L23.5 15 L19 20" fill="none" stroke="hsl(var(--primary))" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      omnicode
    </span>
  );
}
