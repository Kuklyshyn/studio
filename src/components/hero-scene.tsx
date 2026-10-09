"use client";

import { useEffect, useRef } from "react";

// Layers move a little with the pointer. `depth` is how far a layer travels: bigger means closer to the viewer.
const layer = (depth: number): React.CSSProperties => ({
  transform: `translate3d(calc(var(--px, 0) * ${depth * 14}px), calc(var(--py, 0) * ${depth * 10}px), 0)`,
  transition: "transform 0.25s ease-out",
});

const CHIPS = [
  { label: "Vue 3", top: "4%", left: "-4%", depth: 2.2 },
  { label: "Laravel", top: "8%", right: "-2%", depth: 1.8 },
  { label: "Nuxt", top: "32%", right: "-5%", depth: 2.6 },
  { label: "TypeScript", top: "52%", left: "-9%", depth: 2.4 },
  { label: "WooCommerce", top: "90%", left: "50%", depth: 2 },
];

// An interactive vector scene for the hero. Nothing loops on its own: the layers follow the pointer, the orbits turn
// with the scroll position, and the shop, code card and phone replay their motion when the pointer enters them.
export function HeroScene() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const update = (px: number, py: number) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        el.style.setProperty("--px", px.toFixed(3));
        el.style.setProperty("--py", py.toFixed(3));
      });
    };

    const onPointer = (event: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((event.clientX - (rect.left + rect.width / 2)) / window.innerWidth) * 2;
      const y = ((event.clientY - (rect.top + rect.height / 2)) / window.innerHeight) * 2;
      update(Math.max(-1, Math.min(1, x)), Math.max(-1, Math.min(1, y)));
    };

    const onScroll = () => {
      const progress = Math.min(1, window.scrollY / Math.max(1, window.innerHeight));
      el.style.setProperty("--sy", progress.toFixed(3));
    };

    window.addEventListener("pointermove", onPointer, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={ref} className="relative mx-auto aspect-[4/5] w-full max-w-md lg:max-w-none" aria-hidden="true">
      {/* Orbits turn with the scroll */}
      <div className="absolute inset-0 m-auto h-[92%] w-[92%] rounded-full border border-primary/20" style={{ transform: "rotate(calc(var(--sy, 0) * 220deg))" }}>
        <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_18px_hsl(var(--primary))]" />
      </div>
      <div className="absolute inset-0 m-auto h-[68%] w-[68%] rounded-full border border-sky-400/20" style={{ transform: "rotate(calc(var(--sy, 0) * -300deg))" }}>
        <span className="absolute -bottom-1.5 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-sky-400 shadow-[0_0_14px_theme(colors.sky.400)]" />
      </div>

      {/* Browser window with a shop: cards pop and the chart grows when the pointer enters */}
      <div className="scene-browser absolute left-[3%] top-[9%] w-[80%]" style={layer(1)}>
        <div className="overflow-hidden rounded-2xl border border-border bg-background/90 shadow-2xl shadow-black/60 backdrop-blur">
          <div className="flex items-center gap-1.5 border-b border-border/70 bg-secondary/60 px-3 py-2">
            <span className="h-2 w-2 rounded-full bg-red-400/70" />
            <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
            <span className="h-2 w-2 rounded-full bg-primary/70" />
            <span className="ml-2 h-3.5 w-24 rounded-full bg-background/80" />
            <span className="ml-auto h-3.5 w-3.5 rounded-sm bg-primary/60" />
          </div>
          <div className="space-y-3 p-3">
            <div className="skeleton h-14 rounded-xl" />
            <div className="grid grid-cols-3 gap-2">
              {[0, 1, 2].map((i) => (
                <div key={i} className="scene-pop rounded-lg border border-border/70 bg-secondary/50 p-2" style={{ animationDelay: `${0.5 + i * 0.15}s` }}>
                  <div className="h-10 rounded-md bg-gradient-to-br from-primary/40 to-sky-400/30" />
                  <div className="mt-2 h-1.5 w-3/4 rounded bg-foreground/25" />
                  <div className="mt-1.5 h-1.5 w-1/2 rounded bg-primary/60" />
                </div>
              ))}
            </div>
            <div className="flex h-14 items-end gap-1.5 rounded-lg bg-secondary/40 p-2">
              {[0.5, 0.8, 0.4, 1, 0.65, 0.9, 0.55].map((h, i) => (
                <span key={i} className="scene-bar w-full rounded-sm bg-primary/70" style={{ height: "100%", ["--h" as string]: h, animationDelay: `${0.9 + i * 0.08}s` }} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Phone: its content scrolls when the pointer enters */}
      <div className="scene-phone absolute bottom-[3%] right-[1%] h-[46%] w-[31%]" style={layer(1.8)}>
        <div className="h-full overflow-hidden rounded-[1.5rem] border-2 border-border bg-background p-1.5 shadow-2xl shadow-black/60">
          <div className="mx-auto mb-1.5 h-1 w-8 rounded-full bg-foreground/20" />
          <div className="h-full overflow-hidden rounded-[1rem] bg-secondary/40">
            <div className="scene-phone-scroll space-y-2 p-2">
              <div className="skeleton h-10 rounded-lg" />
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="flex gap-2">
                  <span className="h-8 w-8 shrink-0 rounded-md bg-primary/35" />
                  <span className="flex flex-1 flex-col justify-center gap-1.5">
                    <span className="h-1.5 w-full rounded bg-foreground/25" />
                    <span className="h-1.5 w-2/3 rounded bg-foreground/15" />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Code card: the lines retype when the pointer enters */}
      <div className="scene-code absolute bottom-[12%] left-[-3%] w-[50%]" style={layer(1.4)}>
        <div className="rounded-xl border border-primary/30 bg-background/90 p-3 font-mono text-[10px] leading-5 shadow-xl shadow-black/50 backdrop-blur">
          <div className="mb-1 flex gap-1">
            <span className="text-primary">&lt;/&gt;</span>
            <span className="text-muted-foreground">shop.ts</span>
          </div>
          <div className="scene-type text-sky-300" style={{ ["--w" as string]: "100%" }}>const shop = create()</div>
          <div className="scene-type text-primary" style={{ ["--w" as string]: "82%", animationDelay: "0.4s" }}>await shop.checkout()</div>
          <div className="scene-type text-foreground/70" style={{ ["--w" as string]: "64%", animationDelay: "0.8s" }}>deploy() <span className="text-primary">▍</span></div>
        </div>
      </div>

      {/* Technology tags sit closest to the viewer, so they travel the most */}
      {CHIPS.map((chip) => (
        <span
          key={chip.label}
          className="absolute whitespace-nowrap rounded-full border border-primary/40 bg-background/80 px-4 py-2 text-sm font-semibold text-primary shadow-lg backdrop-blur"
          style={{ top: chip.top, left: chip.left, right: chip.right, ...layer(chip.depth) }}
        >
          {chip.label}
        </span>
      ))}
    </div>
  );
}
