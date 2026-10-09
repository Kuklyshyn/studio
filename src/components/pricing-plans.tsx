import { Check, Minus } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { SpotlightCard } from "@/components/spotlight-card";
import { pricingPlans } from "../../content/pricing";

// Indicative prices from content/pricing.ts. Renders nothing while the list is empty.
export async function PricingPlans({ locale }: { locale: string }) {
  if (pricingPlans.length === 0) return null;

  const lang = locale === "sk" ? "sk" : "en";
  const t = await getTranslations({ locale, namespace: "Pricing" });

  return (
    <section id="pricing" className="relative overflow-hidden border-t border-border/50 py-20 md:py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="container relative mx-auto px-4">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold md:text-5xl">{t("title")}</h2>
          <p className="mt-5 text-lg text-muted-foreground">{t("subtitle")}</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {pricingPlans.map((plan) => {
            // "1 990 € bez DPH" -> amount "1 990", note "bez DPH". Falls back to the whole string.
            const match = plan.from[lang].match(/^([\d\s]+?)\s*€\s*(.*)$/);
            const amount = match ? match[1] : plan.from[lang];
            const note = match ? match[2] : "";
            return (
              <SpotlightCard
                key={plan.name.en}
                className="flex h-full flex-col rounded-3xl border border-border/60 bg-gradient-to-b from-white/[0.06] to-secondary/30 p-8 transition-colors duration-300 hover:border-primary/50"
              >
                <h3 className="font-headline text-2xl font-bold">{plan.name[lang]}</h3>
                <p className="mt-6 flex items-baseline gap-2">
                  <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">{t("from")}</span>
                  <span className="font-headline text-5xl font-bold text-primary">{amount}</span>
                  {match && <span className="text-2xl font-semibold text-primary">€</span>}
                </p>
                {note && <p className="mt-1 text-sm text-muted-foreground">{note}</p>}

                {plan.timeline && (
                  <p className="mt-5 inline-flex w-fit rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {t("timeline")}: {plan.timeline[lang]}
                  </p>
                )}

                <ul className="mt-7 space-y-3">
                  {plan.includes[lang].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {plan.excludes[lang].length > 0 && (
                  <ul className="mt-7 space-y-3 border-t border-border/60 pt-6">
                    {plan.excludes[lang].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <Minus className="mt-0.5 h-4 w-4 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
