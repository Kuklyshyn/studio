import { Reveal } from "@/components/reveal";
import { PointerGlow } from "@/components/pointer-glow";

// The opening block of an inner page: a grid backdrop, a light that follows the pointer, and a headline whose words
// rise in one after another.
export function PageHero({ title, subtitle, children }: { title: string; subtitle?: string; children?: React.ReactNode }) {
  return (
    <section className="relative overflow-hidden border-b border-border/60 py-20 md:py-28">
      <div className="absolute inset-0 grid-bg [mask-image:linear-gradient(to_bottom,white_40%,transparent_100%)]" />
      <PointerGlow />
      <div className="container relative mx-auto px-4">
        <h1 className="mb-6 max-w-4xl font-headline text-4xl font-extrabold leading-[0.98] tracking-[-0.035em] md:text-6xl lg:text-7xl">
          {title.split(" ").map((word, i, all) => (
            <span key={i}>
              <span className="word-in" style={{ animationDelay: `${100 + i * 60}ms` }}>{word}</span>
              {i < all.length - 1 ? " " : null}
            </span>
          ))}
        </h1>
        {subtitle && (
          <Reveal delay={200}>
            <p className="max-w-3xl text-lg text-muted-foreground md:text-xl">{subtitle}</p>
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
