// An animated vector scene for the hero, built from plain elements: a shop in a browser window,
// a phone, a code card that types, a chart that grows and two slow orbits. Decorative only.
export function HeroScene() {
  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-md lg:max-w-none" aria-hidden="true">
      <div className="scene-orbit absolute inset-0 m-auto h-[92%] w-[92%] rounded-full border border-primary/20">
        <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_18px_hsl(var(--primary))]" />
      </div>
      <div className="scene-orbit-reverse absolute inset-0 m-auto h-[68%] w-[68%] rounded-full border border-sky-400/20">
        <span className="absolute -bottom-1.5 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-sky-400 shadow-[0_0_14px_theme(colors.sky.400)]" />
      </div>

      {/* Browser window with a shop */}
      <div className="absolute left-[3%] top-[9%] w-[80%] overflow-hidden rounded-2xl border border-border bg-background/90 shadow-2xl shadow-black/60 backdrop-blur">
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
              <div key={i} className="scene-pop rounded-lg border border-border/70 bg-secondary/50 p-2" style={{ animationDelay: `${i * 0.9}s` }}>
                <div className="h-10 rounded-md bg-gradient-to-br from-primary/40 to-sky-400/30" />
                <div className="mt-2 h-1.5 w-3/4 rounded bg-foreground/25" />
                <div className="mt-1.5 h-1.5 w-1/2 rounded bg-primary/60" />
              </div>
            ))}
          </div>
          <div className="flex h-14 items-end gap-1.5 rounded-lg bg-secondary/40 p-2">
            {[0.5, 0.8, 0.4, 1, 0.65, 0.9, 0.55].map((h, i) => (
              <span key={i} className="scene-bar w-full rounded-sm bg-primary/70" style={{ height: `${h * 100}%`, animationDelay: `${i * 0.25}s` }} />
            ))}
          </div>
        </div>
      </div>

      {/* Phone */}
      <div className="absolute bottom-[3%] right-[1%] h-[46%] w-[31%] overflow-hidden rounded-[1.5rem] border-2 border-border bg-background p-1.5 shadow-2xl shadow-black/60">
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

      {/* Code card */}
      <div className="absolute bottom-[12%] left-[-3%] w-[50%] rounded-xl border border-primary/30 bg-background/90 p-3 font-mono text-[10px] leading-5 shadow-xl shadow-black/50 backdrop-blur">
        <div className="mb-1 flex gap-1">
          <span className="text-primary">&lt;/&gt;</span>
          <span className="text-muted-foreground">shop.ts</span>
        </div>
        <div className="scene-type text-sky-300" style={{ ["--w" as string]: "100%" }}>const shop = create()</div>
        <div className="scene-type text-primary" style={{ ["--w" as string]: "82%", animationDelay: "0.4s" }}>await shop.checkout()</div>
        <div className="scene-type text-foreground/70" style={{ ["--w" as string]: "64%", animationDelay: "0.8s" }}>deploy() <span className="scene-caret text-primary">▍</span></div>
      </div>
    </div>
  );
}
