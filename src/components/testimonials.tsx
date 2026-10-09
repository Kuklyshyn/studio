import { testimonials } from "../../content/testimonials";

// Renders nothing until real, approved testimonials are added to content/testimonials.ts.
export function Testimonials({ locale }: { locale: string }) {
  if (testimonials.length === 0) return null;

  const lang = locale === "sk" ? "sk" : "en";

  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto grid gap-6 px-4 md:grid-cols-2">
        {testimonials.map((item) => (
          <figure key={item.author} className="rounded-3xl border border-border/60 bg-secondary/40 p-8">
            <blockquote className="text-lg leading-relaxed">“{item.quote[lang]}”</blockquote>
            <figcaption className="mt-6 text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">{item.author}</span>, {item.role[lang]}
              {item.companyUrl ? (
                <a href={item.companyUrl} target="_blank" rel="noopener noreferrer" className="ml-1 underline hover:text-primary">{item.company}</a>
              ) : (
                <span className="ml-1">{item.company}</span>
              )}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
