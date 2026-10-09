
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { ArrowRight, Code2, Gauge, Layers, Megaphone, MessagesSquare, MoveRight, Palette, PenTool, Rocket, Search, ShieldCheck } from "lucide-react";
import { Link } from "@/i18n";
import { TrackedLink } from "@/components/tracked-link";
import { TechLogos } from "@/components/tech-logos";
import { Reveal } from "@/components/reveal";
import { ProjectMockup } from "@/components/project-mockup";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { pageMetadata, type Locale } from "@/lib/seo";
import { localizeProject, portfolioProjects } from "./portfolio/projects";
import { PricingPlans } from "@/components/pricing-plans";

const portfolio = [
  { slug: "fashion-eshop-woocommerce", hint: "fashion boutique website" },
  { slug: "interactive-expert-map-platform", hint: "interactive map platform" },
  { slug: "car-service-booking-system", hint: "car service website" },
];

const serviceIcons = [<Palette key="p" className="w-8 h-8 text-primary" />, <Code2 key="c" className="w-8 h-8 text-primary" />, <Megaphone key="m" className="w-8 h-8 text-primary" />];

const processIcons = [<MessagesSquare key="a" className="w-6 h-6" />, <PenTool key="b" className="w-6 h-6" />, <Code2 key="c" className="w-6 h-6" />, <Rocket key="d" className="w-6 h-6" />];

const whyUsIcons = [<Search key="s" className="w-6 h-6" />, <Gauge key="g" className="w-6 h-6" />, <ShieldCheck key="v" className="w-6 h-6" />];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Seo.home" });

  return pageMetadata({ locale: locale as Locale, path: "", title: t("title"), description: t("description") });
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("HomePage");
  const portfolioItems = portfolio.map((item) => {
    const project = localizeProject(portfolioProjects.find((p) => p.slug === item.slug)!, locale);
    return { alt: project.title, industry: project.industry };
  });
  const services = t.raw("services");
  const processSteps = t.raw("processSteps");
  const whyUs = t.raw("whyUsReasons");

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <section id="home" className="relative overflow-hidden pt-16 pb-20 md:pt-36 md:pb-32">
          <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:linear-gradient(to_bottom,white_40%,transparent_100%)]"></div>
          <div className="hero-glow pointer-events-none absolute -top-24 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-primary/25 blur-3xl"></div>
          <div className="container mx-auto px-4 text-center relative">
            <Reveal>
              <p className="mx-auto mb-6 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
                {t('heroBadge')}
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mx-auto max-w-4xl font-headline text-4xl font-bold leading-[1.05] tracking-tight md:text-7xl mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70">
                {t('heroTitle')}
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10">
                {t('heroSubtitle')}
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg" className="rounded-full font-bold">
                  <TrackedLink location="hero" href="/contact">
                    {t('heroCta')}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </TrackedLink>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full font-semibold border-2">
                  <Link href="/portfolio">
                    {t('heroSecondaryCta')}
                  </Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="services" className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <Reveal>
              <div className="mx-auto mb-14 max-w-2xl text-center">
                <h2 className="font-headline text-3xl md:text-5xl font-bold">{t('servicesTitle')}</h2>
              </div>
            </Reveal>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {services.map((service: any, index: number) => (
                <Reveal key={index} delay={index * 100}>
                  <Card className="group h-full rounded-2xl border-border/60 bg-secondary/40 p-8 text-left transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_0_40px_-12px_hsl(var(--primary)/0.5)]">
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                      {serviceIcons[index]}
                    </div>
                    <CardTitle className="font-headline text-2xl font-bold mb-3">
                      {service.title}
                    </CardTitle>
                    <p className="leading-relaxed text-muted-foreground">{service.description}</p>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <Reveal>
          <PricingPlans locale={locale} />
        </Reveal>

        <section id="portfolio" className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <Reveal>
              <div className="mx-auto mb-14 max-w-2xl text-center">
                <h2 className="font-headline text-3xl md:text-5xl font-bold">{t('portfolioTitle')}</h2>
                <p className="text-muted-foreground mt-4 text-lg">{t('portfolioSubtitle')}</p>
              </div>
            </Reveal>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {portfolioItems.map((item, index) => (
                <Reveal key={index} delay={index * 120} className="h-full">
                  <Link href="/portfolio" className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-secondary/40 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50">
                    <ProjectMockup label={item.alt} />
                    <div className="flex flex-1 flex-col p-6">
                      <p className="text-xs font-semibold uppercase tracking-widest text-primary">{item.industry}</p>
                      <h3 className="mt-2 font-headline text-xl font-bold">{item.alt}</h3>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <div className="text-center mt-14">
                <Button asChild variant="outline" size="lg" className="rounded-full font-semibold border-2">
                  <Link href="/portfolio">
                    {t('portfolioCta')} <MoveRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="process" className="py-20 md:py-28 bg-secondary/30">
          <div className="container mx-auto px-4">
            <Reveal>
              <div className="text-center mb-14 md:mb-20">
                <h2 className="font-headline text-3xl md:text-5xl font-bold">{t('processTitle')}</h2>
                <p className="text-muted-foreground mt-4 text-lg">{t('processSubtitle')}</p>
              </div>
            </Reveal>
            <ol className="relative mx-auto grid max-w-3xl lg:max-w-none lg:grid-cols-4 lg:gap-8 before:absolute before:left-[12.5%] before:right-[12.5%] before:top-7 before:hidden before:h-px before:bg-gradient-to-r before:from-primary/20 before:via-primary/60 before:to-primary/20 before:content-[''] lg:before:block">
              {processSteps.map((step: { title: string; description: string }, index: number) => (
                  <li
                    key={index}
                    className="group relative flex h-full gap-6 pb-12 last:pb-0 before:absolute before:bottom-0 before:left-7 before:top-14 before:w-px before:bg-primary/30 before:content-[''] last:before:hidden lg:flex-col lg:items-center lg:gap-0 lg:pb-0 lg:text-center lg:before:hidden"
                  >
                    <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-background transition-transform duration-300 group-hover:scale-110">
                      <div className="flex h-full w-full items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-primary">
                        {processIcons[index]}
                      </div>
                    </div>
                    <div className="pt-1 lg:mt-6 lg:w-full lg:pt-0">
                      <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                        {t('stepLabel', { number: String(index + 1).padStart(2, '0') })}
                      </p>
                      <h3 className="mt-1 font-headline text-xl font-bold">{step.title}</h3>
                      <p className="mt-3 leading-relaxed text-muted-foreground">{step.description}</p>
                    </div>
                  </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="why-us" className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
              <Reveal>
                <h2 className="font-headline text-3xl md:text-5xl font-bold mb-6">{t('whyUsTitle')}</h2>
                <p className="text-muted-foreground text-lg">{t('whyUsSubtitle')}</p>
              </Reveal>
              <div className="grid gap-4">
                {whyUs.map((item: string, index: number) => (
                  <Reveal key={index} delay={index * 100}>
                    <div className="flex items-start gap-4 rounded-2xl border border-border/60 bg-secondary/40 p-6 transition-colors duration-300 hover:border-primary/50">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        {whyUsIcons[index]}
                      </div>
                      <span className="pt-2 font-semibold leading-snug">{item}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="technologies" className="py-20 md:py-28 bg-secondary/30">
          <div className="container mx-auto px-4">
            <Reveal>
              <div className="flex justify-center items-center gap-4 mb-14">
                <Layers className="w-10 h-10 text-primary" />
                <h2 className="font-headline text-3xl md:text-5xl font-bold text-center">
                  {t('technologiesTitle')}
                </h2>
              </div>
              <TechLogos />
            </Reveal>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <Reveal>
              <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center md:px-16">
                <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>
                <h2 className="relative font-headline text-3xl md:text-5xl font-bold text-primary-foreground mb-4">{t('ctaTitle')}</h2>
                <p className="relative max-w-2xl mx-auto text-lg text-primary-foreground/80 mb-8">{t('ctaSubtitle')}</p>
                <Button asChild size="lg" variant="secondary" className="relative rounded-full font-bold">
                  <TrackedLink location="bottom_cta" href="/contact">{t('ctaButton')}</TrackedLink>
                </Button>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </div>
  );
}
