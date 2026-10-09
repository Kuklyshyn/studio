// Vector scenes built from elements. They are decorative, replace stock images, and replay their motion on hover
// (the "group" class makes them react when the pointer is over the scene or over the card that contains it).

const frame = "group relative w-full overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-white/[0.06] via-secondary/30 to-secondary/10 p-5";

// A page wireframe that assembles itself.
export function SceneBlueprint({ className = "aspect-[4/3]" }: { className?: string }) {
  return (
    <div className={`${frame} ${className}`} aria-hidden="true">
      <div className="flex h-full flex-col gap-3 rounded-xl border border-border/70 bg-background/80 p-3 shadow-xl shadow-black/40">
        <div className="scene-pop flex items-center gap-2" style={{ animationDelay: "0.1s" }}>
          <span className="h-3 w-3 rounded-sm bg-primary/70" />
          <span className="h-2 w-16 rounded bg-foreground/25" />
          <span className="ml-auto h-2 w-8 rounded bg-foreground/15" />
          <span className="h-2 w-8 rounded bg-foreground/15" />
        </div>
        <div className="skeleton scene-pop h-[34%] rounded-lg" style={{ animationDelay: "0.25s" }} />
        <div className="grid flex-1 grid-cols-3 gap-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="scene-pop rounded-md border border-border/60 bg-secondary/50 p-2" style={{ animationDelay: `${0.4 + i * 0.12}s` }}>
              <div className="h-1/2 rounded bg-primary/30" />
              <div className="mt-2 h-1.5 w-3/4 rounded bg-foreground/25" />
              <div className="mt-1.5 h-1.5 w-1/2 rounded bg-foreground/15" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// A product grid with prices and a cart badge.
export function SceneCart({ className = "aspect-[4/3]" }: { className?: string }) {
  return (
    <div className={`${frame} ${className}`} aria-hidden="true">
      <div className="flex h-full flex-col gap-3 rounded-xl border border-border/70 bg-background/80 p-3 shadow-xl shadow-black/40">
        <div className="flex items-center gap-2">
          <span className="h-2 w-16 rounded bg-foreground/25" />
          <span className="scene-pop ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground" style={{ animationDelay: "1.1s" }}>3</span>
        </div>
        <div className="grid flex-1 grid-cols-3 gap-2">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="scene-pop flex flex-col rounded-md border border-border/60 bg-secondary/50 p-1.5" style={{ animationDelay: `${0.15 + i * 0.1}s` }}>
              <div className={`flex-1 rounded ${i % 2 ? "bg-sky-400/30" : "bg-primary/30"}`} />
              <div className="mt-1.5 h-1.5 w-2/3 rounded bg-foreground/25" />
              <div className="mt-1 h-1.5 w-1/3 rounded bg-primary/70" />
            </div>
          ))}
        </div>
        <div className="scene-pop h-6 rounded-md bg-primary/80" style={{ animationDelay: "0.9s" }} />
      </div>
    </div>
  );
}

// A booking calendar where days get ticked.
export function SceneCalendar({ className = "aspect-[4/3]" }: { className?: string }) {
  const ticked = new Set([2, 5, 9, 12, 16, 19]);
  return (
    <div className={`${frame} ${className}`} aria-hidden="true">
      <div className="flex h-full flex-col gap-3 rounded-xl border border-border/70 bg-background/80 p-3 shadow-xl shadow-black/40">
        <div className="flex items-center gap-2">
          <span className="h-2 w-20 rounded bg-foreground/25" />
          <span className="ml-auto h-2 w-6 rounded bg-foreground/15" />
          <span className="h-2 w-6 rounded bg-foreground/15" />
        </div>
        <div className="grid flex-1 grid-cols-7 gap-1.5">
          {Array.from({ length: 21 }).map((_, i) => (
            <div key={i} className="relative flex items-center justify-center rounded-md border border-border/50 bg-secondary/40">
              {ticked.has(i) && (
                <span className="sc-tick absolute inset-1 flex items-center justify-center rounded bg-primary/80 text-[10px] font-bold text-primary-foreground" style={{ animationDelay: `${0.3 + i * 0.05}s` }}>✓</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Connected systems: lines draw between nodes.
export function SceneNodes({ className = "aspect-[4/3]" }: { className?: string }) {
  const nodes = [
    { x: 50, y: 50, r: 9, primary: true },
    { x: 18, y: 24, r: 5 }, { x: 82, y: 22, r: 5 }, { x: 20, y: 76, r: 5 }, { x: 84, y: 74, r: 5 }, { x: 50, y: 12, r: 4 }, { x: 50, y: 90, r: 4 },
  ];
  return (
    <div className={`${frame} ${className}`} aria-hidden="true">
      <svg viewBox="0 0 100 100" className="h-full w-full">
        {nodes.slice(1).map((n, i) => (
          <line key={i} x1={50} y1={50} x2={n.x} y2={n.y} className="sc-draw stroke-primary/50" strokeWidth="0.6" style={{ ["--len" as string]: 60, animationDelay: `${0.2 + i * 0.12}s` }} />
        ))}
        {nodes.map((n, i) => (
          <circle key={i} cx={n.x} cy={n.y} r={n.r} className={n.primary ? "fill-primary" : "fill-background stroke-primary/70"} strokeWidth="0.8" />
        ))}
      </svg>
    </div>
  );
}

// A speed gauge whose needle swings up.
export function SceneGauge({ className = "aspect-[4/3]" }: { className?: string }) {
  return (
    <div className={`${frame} flex items-center justify-center ${className}`} aria-hidden="true">
      <svg viewBox="0 0 120 80" className="h-full w-full">
        <path d="M15 70 A45 45 0 0 1 105 70" fill="none" className="stroke-foreground/15" strokeWidth="8" strokeLinecap="round" />
        <path d="M15 70 A45 45 0 0 1 105 70" fill="none" className="sc-draw stroke-primary" strokeWidth="8" strokeLinecap="round" style={{ ["--len" as string]: 142 }} />
        <g className="sc-needle" style={{ ["--deg" as string]: "42deg", transformBox: "fill-box" }}>
          <line x1="60" y1="70" x2="60" y2="32" className="stroke-foreground" strokeWidth="3" strokeLinecap="round" />
        </g>
        <circle cx="60" cy="70" r="5" className="fill-primary" />
      </svg>
    </div>
  );
}

// A code card whose lines type out.
export function SceneCode({ className = "aspect-[4/3]" }: { className?: string }) {
  const lines = [
    { t: "const order = await shop.create()", w: "100%", c: "text-sky-300" },
    { t: "await order.pay(card)", w: "70%", c: "text-primary" },
    { t: "await calendar.book(slot)", w: "78%", c: "text-primary" },
    { t: "notify(client, order)", w: "62%", c: "text-foreground/70" },
    { t: "// deploy and monitor", w: "58%", c: "text-muted-foreground" },
  ];
  return (
    <div className={`${frame} flex items-center ${className}`} aria-hidden="true">
      <div className="w-full rounded-xl border border-primary/30 bg-background/90 p-4 font-mono text-xs leading-6 shadow-xl shadow-black/50 sm:text-sm">
        <div className="mb-2 flex items-center gap-2 text-[11px]">
          <span className="text-primary">&lt;/&gt;</span>
          <span className="text-muted-foreground">project.ts</span>
        </div>
        {lines.map((line, i) => (
          <div key={i} className={`scene-type ${line.c}`} style={{ ["--w" as string]: line.w, animationDelay: `${i * 0.35}s` }}>
            {line.t}
          </div>
        ))}
      </div>
    </div>
  );
}
