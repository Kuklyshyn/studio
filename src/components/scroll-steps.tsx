"use client";

import { useEffect, useRef } from "react";

// A list whose items light up one after another as the page scrolls through it. Items use the .scroll-step class
// with --i (their index) and --n (the item count); this wrapper updates --p, the scroll progress from 0 to 1.
export function ScrollSteps({ children, className = "", as: Tag = "ol" }: { children: React.ReactNode; className?: string; as?: "ol" | "ul" }) {
  const ref = useRef<HTMLOListElement & HTMLUListElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const start = window.innerHeight * 0.85; // progress starts when the list top reaches this line
        const span = rect.height * 0.9 + window.innerHeight * 0.2;
        const p = Math.max(0, Math.min(1, (start - rect.top) / span));
        el.style.setProperty("--p", p.toFixed(3));
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <Tag ref={ref as never} className={className}>
      {children}
    </Tag>
  );
}
