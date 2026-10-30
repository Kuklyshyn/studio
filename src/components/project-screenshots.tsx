import Image from "next/image";

type Shots = { desktop: string; mobile?: string };

// Real screenshots of a finished site: a browser frame for the desktop view and, when there is one, a phone frame beside it.
export function ProjectScreenshots({ shots, title, label }: { shots: Shots; title: string; label: string }) {
  return (
    <div className="mb-8 grid items-end gap-6 md:grid-cols-[1fr_auto]">
      <figure className="overflow-hidden rounded-xl border border-border bg-card shadow-xl">
        <div className="flex items-center gap-1.5 border-b border-border bg-secondary/60 px-4 py-3" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
        </div>
        <div className="relative aspect-[16/10] w-full">
          <Image
            src={shots.desktop}
            alt={`${title}: ${label}`}
            fill
            sizes="(min-width: 896px) 700px, 100vw"
            className="object-cover object-top"
            priority
          />
        </div>
      </figure>
      {shots.mobile && (
        <figure className="mx-auto w-40 overflow-hidden rounded-[1.6rem] border-4 border-secondary bg-card shadow-xl md:w-44">
          <div className="relative aspect-[9/19] w-full">
            <Image src={shots.mobile} alt={`${title}: ${label} (mobile)`} fill sizes="176px" className="object-cover object-top" />
          </div>
        </figure>
      )}
    </div>
  );
}
