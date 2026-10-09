"use client";

import { useEffect, useRef } from "react";

// A row that slides sideways only while the page is being scrolled. Pass the items twice so the loop has no seam.
export function ScrollMarquee({ children, className = "", speed = 0.5 }: { children: React.ReactNode; className?: string; speed?: number }) {
  const track = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const el = track.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const half = el.scrollWidth / 2;
        if (half <= 0) return;
        const x = -((window.scrollY * speed) % half);
        el.style.transform = `translate3d(${x}px, 0, 0)`;
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
  }, [speed]);

  return (
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <ul ref={track} className={`flex w-max will-change-transform ${className}`}>
        {children}
      </ul>
    </div>
  );
}
