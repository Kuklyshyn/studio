import { ArrowRight, Check } from "lucide-react";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { Magnetic } from "@/components/magnetic";
import { SpotlightCard } from "@/components/spotlight-card";
import { Faq } from "@/components/faq";
import { JsonLd } from "@/components/json-ld";
import { SceneBlueprint, SceneCart, SceneCalendar, SceneNodes } from "@/components/scenes";
import { landingKeys, landingPages, type Lang, type LandingKey } from "../../content/landing";
import { absoluteUrl, breadcrumbJsonLd, localizedPath, pageMetadata, serviceJsonLd, type Locale } from "@/lib/seo";

const scenes: Record<LandingKey, React.ReactNode> = {
  "web-development": <SceneBlueprint className="aspect-[16/9]" />,
  "eshop-development": <SceneCart className="aspect-[16/9]" />,
  "booking-system": <SceneCalendar className="aspect-[16/9]" />,
  "custom-crm": <SceneNodes className="aspect-[16/9]" />,
};

const internalPath: Record<LandingKey, "/web-development" | "/eshop-development" | "/booking-system" | "/custom-crm"> = {
  "web-development": "/web-development",
  "eshop-development": "/eshop-development",
  "booking-system": "/booking-system",
  "custom-crm": "/custom-crm",
};

export function landingMetadata(key: LandingKey, locale: string): Metadata {
  const content = landingPages[key][locale === "sk" ? "sk" : "en"];
  return pageMetadata({ locale: locale as Locale, path: internalPath[key], title: content.metaTitle, description: content.metaDescription });
}

export async function LandingView({ pageKey, locale }: { pageKey: LandingKey; locale: string }) {
  const lang: Lang = locale === "sk" ? "sk" : "en";
  const content = landingPages[pageKey][lang];
  const tHeader = await getTranslations({ locale, namespace: "Header" });
  const tFaq = await getTranslations({ locale, namespace: "Landing" });
  const url = absoluteUrl(`/${locale}${localizedPath(internalPath[pageKey], locale as Locale)}`);
  const related = landingKeys.filter((key) => key !== pageKey);

  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd({ name: content.h1, description: content.metaDescription, url }),
          breadcrumbJsonLd([
            { name: tHeader("home"), url: absoluteUrl(`/${locale}`) },
            { name: tHeader("services"), url: absoluteUrl(`/${locale}/services`) },
            { name: content.h1, url },
          ]),
        ]}
      />

      <PageHero title={content.h1} subtitle={content.intro}>
        <Magnetic>
          <Button asChild size="lg" className="btn-shine rounded-full font-bold">
            <Link href="/contact">{tFaq("cta")}</Link>
          </Button>
        </Magnetic>
      </PageHero>

      <section className="pb-16 md:pb-24">
        <div className="container mx-auto grid items-start gap-12 px-4 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="space-y-6">
            {content.sections.map((section, index) => (
              <Reveal key={section.title} delay={index * 60}>
                <SpotlightCard className="rounded-3xl border border-border/60 bg-gradient-to-b from-white/[0.06] to-secondary/20 p-8 transition-colors duration-300 hover:border-primary/50">
                  <h2 className="mb-4 font-headline text-2xl font-bold md:text-3xl">{section.title}</h2>
                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph} className="mb-3 text-lg leading-relaxed text-muted-foreground last:mb-0">{paragraph}</p>
                  ))}
                  {section.bullets && (
                    <ul className="grid gap-3 sm:grid-cols-2">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3">
                          <Check className="mt-1 h-4 w-4 shrink-0 text-primary" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
          <Reveal delay={150} className="lg:sticky lg:top-28">
            {scenes[pageKey]}
          </Reveal>
        </div>
      </section>

      <Faq items={content.faq} title={tFaq("faqTitle")} />

      <section className="border-t border-border/50 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <Reveal>
            <h2 className="mb-10 text-center font-headline text-3xl font-bold md:text-4xl">{tFaq("related")}</h2>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            {related.map((key, index) => (
              <Reveal key={key} delay={index * 80} className="h-full">
                <Link
                  href={internalPath[key]}
                  className="group flex h-full items-center justify-between gap-4 rounded-2xl border border-border/60 bg-gradient-to-b from-white/[0.05] to-secondary/20 p-6 transition-colors duration-300 hover:border-primary/50"
                >
                  <span className="font-headline text-lg font-bold">{landingPages[key][lang].navLabel}</span>
                  <ArrowRight className="h-5 w-5 shrink-0 text-primary transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center md:px-16 md:py-20">
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
              <h2 className="relative mb-8 font-headline text-3xl font-bold text-primary-foreground md:text-5xl">{content.ctaTitle}</h2>
              <Magnetic>
                <Button asChild size="lg" variant="secondary" className="btn-shine relative rounded-full font-bold">
                  <Link href="/contact">{tFaq("cta")}</Link>
                </Button>
              </Magnetic>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
