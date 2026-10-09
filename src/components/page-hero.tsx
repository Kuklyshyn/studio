import { Reveal } from "@/components/reveal";
import { PointerGlow } from "@/components/pointer-glow";

// The opening block of an inner page: a grid backdrop, a light that follows the pointer, and a headline whose words
// rise in one after another.
export function PageHero({ title, subtitle, children }: { title: string; subtitle?: string; children?: React.ReactNode }) {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 bg-grid-white/[0.04] [mask-image:linear-gradient(to_bottom,white_40%,transparent_100%)]" />
      <PointerGlow />
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[620px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="container relative mx-auto px-4 text-center">
        <h1 className="mx-auto mb-5 max-w-4xl font-headline text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
          {title.split(" ").map((word, i, all) => (
            <span key={i}>
              <span className="word-in" style={{ animationDelay: `${100 + i * 60}ms` }}>{word}</span>
              {i < all.length - 1 ? " " : null}
            </span>
          ))}
        </h1>
        {subtitle && (
          <Reveal delay={200}>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl">{subtitle}</p>
          </Reveal>
        )}
        {children && (
          <Reveal delay={280}>
            <div className="mt-8">{children}</div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
