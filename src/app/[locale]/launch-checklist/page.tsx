import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { JsonLd } from "@/components/json-ld";
import { LaunchChecklist } from "@/components/launch-checklist";
import { launchChecklist } from "../../../../content/checklist";
import { absoluteUrl, breadcrumbJsonLd, localizedPath, pageMetadata, type Locale } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const content = launchChecklist[locale === "sk" ? "sk" : "en"];
  return pageMetadata({ locale: locale as Locale, path: "/launch-checklist", title: content.metaTitle, description: content.metaDescription });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const content = launchChecklist[locale === "sk" ? "sk" : "en"];
  const tHeader = await getTranslations({ locale, namespace: "Header" });
  const tFaq = await getTranslations({ locale, namespace: "Landing" });
  const url = absoluteUrl(`/${locale}${localizedPath("/launch-checklist", locale as Locale)}`);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: tHeader("home"), url: absoluteUrl(`/${locale}`) },
          { name: content.h1, url },
        ])}
      />
      <PageHero title={content.h1} subtitle={content.intro} />
      <section className="pb-16 md:pb-24">
        <div className="container mx-auto max-w-3xl px-4 pt-12">
          <LaunchChecklist content={content} locale={locale} />
        </div>
      </section>
      <section className="pb-24 md:pb-32 print:hidden">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="rounded-3xl bg-primary px-6 py-14 text-center md:px-16">
              <h2 className="mb-4 font-headline text-3xl font-extrabold text-primary-foreground md:text-4xl tracking-[-0.03em]">{content.labels.ctaTitle}</h2>
              <p className="mx-auto mb-8 max-w-2xl text-primary-foreground/80">{content.labels.ctaText}</p>
              <Button asChild size="lg" variant="secondary" className="rounded-full font-bold">
                <Link href="/contact">{tFaq("cta")}</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
