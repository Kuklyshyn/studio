// A browser-window mockup built from code, not an illustration. It stands in for a project screenshot until real, approved screenshots are supplied.
export function ProjectMockup({ label }: { label: string }) {
  return (
    <div className="relative flex aspect-[2/1] items-stretch overflow-hidden bg-gradient-to-br from-secondary via-background to-secondary/60 p-5 md:p-7">
      <div className="flex w-full flex-col overflow-hidden rounded-xl border border-border/70 bg-background shadow-2xl shadow-black/40">
        <div className="flex items-center gap-2 border-b border-border/60 bg-secondary/60 px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
          <span className="ml-3 truncate rounded-md bg-background/80 px-3 py-0.5 text-[11px] text-muted-foreground">{label}</span>
        </div>
        <div className="grid flex-1 grid-cols-3 gap-3 p-4">
          <div className="col-span-2 flex flex-col justify-end gap-2 rounded-lg bg-primary/15 p-4">
            <span className="h-2.5 w-3/4 rounded bg-primary/60" />
            <span className="h-2 w-1/2 rounded bg-foreground/25" />
          </div>
          <div className="flex flex-col gap-2 rounded-lg bg-secondary p-3">
            <span className="h-6 rounded bg-foreground/15" />
            <span className="h-6 rounded bg-foreground/10" />
            <span className="h-6 rounded bg-primary/30" />
          </div>
          <div className="col-span-3 grid grid-cols-3 gap-3">
            <span className="h-8 rounded-md bg-foreground/10" />
            <span className="h-8 rounded-md bg-foreground/10" />
            <span className="h-8 rounded-md bg-primary/40" />
          </div>
        </div>
      </div>
    </div>
  );
}
