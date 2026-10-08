import { getTranslations } from "next-intl/server";
import { pricingPlans } from "../../content/pricing";

// Indicative prices from content/pricing.ts. Renders nothing until the owner supplies plans.
export async function PricingPlans({ locale }: { locale: string }) {
  if (pricingPlans.length === 0) return null;

  const lang = locale === "sk" ? "sk" : "en";
  const t = await getTranslations({ locale, namespace: "Pricing" });

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-5xl font-bold">{t("title")}</h2>
          <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">{t("subtitle")}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <div key={plan.name.en} className="bg-secondary/50 border border-border/50 rounded-lg p-8 flex flex-col">
              <h3 className="font-headline text-2xl font-bold">{plan.name[lang]}</h3>
              <p className="mt-2 text-lg font-semibold text-primary">
                {t("from")} {plan.from[lang]}
              </p>
              <h4 className="mt-6 font-semibold">{t("includes")}</h4>
              <ul className="mt-2 list-disc pl-5 text-muted-foreground space-y-1">
                {plan.includes[lang].map((item) => <li key={item}>{item}</li>)}
              </ul>
              {plan.excludes[lang].length > 0 && (
                <>
                  <h4 className="mt-6 font-semibold">{t("excludes")}</h4>
                  <ul className="mt-2 list-disc pl-5 text-muted-foreground space-y-1">
                    {plan.excludes[lang].map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </>
              )}
              {plan.timeline && (
                <p className="mt-6 text-sm text-muted-foreground">
                  {t("timeline")}: {plan.timeline[lang]}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
