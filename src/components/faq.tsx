import { Plus } from "lucide-react";
import { JsonLd } from "@/components/json-ld";
import { faqJsonLd } from "@/lib/seo";

// Questions and answers as native <details> elements: they work without JavaScript, can be read by search engines,
// and the FAQPage markup is added from the same data.
export function Faq({ items, title }: { items: { q: string; a: string }[]; title: string }) {
  return (
    <section className="border-t border-border/50 py-20 md:py-28">
      <JsonLd data={faqJsonLd(items)} />
      <div className="container mx-auto max-w-3xl px-4">
        <h2 className="mb-10 text-center font-headline text-3xl font-bold md:text-5xl">{title}</h2>
        <div className="space-y-3">
          {items.map((item) => (
            <details key={item.q} className="group rounded-2xl border border-border/60 bg-gradient-to-b from-white/[0.05] to-secondary/20 transition-colors duration-300 open:border-primary/50 hover:border-primary/40">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-lg font-semibold [&::-webkit-details-marker]:hidden">
                {item.q}
                <Plus className="h-5 w-5 shrink-0 text-primary transition-transform duration-300 group-open:rotate-45" />
              </summary>
              <p className="px-5 pb-5 leading-relaxed text-muted-foreground">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
