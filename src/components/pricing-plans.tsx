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
            <div className="container relative mx-auto px-4">
        <div className="mb-14 max-w-2xl">
          <p className="eyebrow mb-4">03 /</p>
          <h2 className="font-headline text-4xl font-extrabold leading-[1.02] tracking-[-0.03em] md:text-5xl">{t("title")}</h2>
          <p className="mt-5 text-lg text-muted-foreground">{t("subtitle")}</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {pricingPlans.map((plan, planIndex) => {
            const featured = planIndex === 1;
            const sub = featured ? "text-primary-foreground/70" : "text-muted-foreground";
            // "1 990 € bez DPH" -> amount "1 990", note "bez DPH". Falls back to the whole string.
            const match = plan.from[lang].match(/^([\d\s]+?)\s*€\s*(.*)$/);
            const amount = match ? match[1] : plan.from[lang];
            const note = match ? match[2] : "";
            return (
              <SpotlightCard
                key={plan.name.en}
                className={`flex h-full flex-col rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-1.5 ${featured ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card hover:border-primary/60"}`}
              >
                <h3 className={`font-mono text-[13px] font-medium ${featured ? "text-primary-foreground/70" : "text-primary"}`}>{plan.name[lang]}</h3>
                <p className="mt-6 flex items-baseline gap-2">
                  <span className={`font-mono text-[13px] ${sub}`}>{t("from")}</span>
                  <span className="font-headline text-6xl font-extrabold tracking-[-0.03em]">{amount}</span>
                  {match && <span className="text-2xl font-semibold">€</span>}
                </p>
                {note && <p className={`mt-1 text-sm ${sub}`}>{note}</p>}

                {plan.timeline && (
                  <p className={`mt-5 inline-flex w-fit rounded-full border px-3 py-1 font-mono text-xs ${featured ? "border-primary-foreground/30" : "border-border text-primary"}`}>
                    {t("timeline")}: {plan.timeline[lang]}
                  </p>
                )}

                <ul className="mt-7 space-y-3">
                  {plan.includes[lang].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <Check className={`mt-0.5 h-4 w-4 shrink-0 ${featured ? "" : "text-primary"}`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {plan.excludes[lang].length > 0 && (
                  <ul className={`mt-7 space-y-3 border-t pt-6 ${featured ? "border-primary-foreground/25" : "border-border"}`}>
                    {plan.excludes[lang].map((item) => (
                      <li key={item} className={`flex items-start gap-3 text-sm ${sub}`}>
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
