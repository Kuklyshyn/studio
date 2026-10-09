
import { Button } from "@/components/ui/button";
import { CardTitle } from "@/components/ui/card";
import { Accessibility, ArrowRight, Check, Code2, Layers, MessagesSquare, MoveRight, Palette, PenTool, Rocket, Search, ShoppingCart, Server, Wrench } from "lucide-react";
import Image from "next/image";
import { Link } from "@/i18n";
import { TrackedLink } from "@/components/tracked-link";
import { TechLogos } from "@/components/tech-logos";
import { Reveal } from "@/components/reveal";
import { SpotlightCard } from "@/components/spotlight-card";
import { ProjectCard } from "@/components/project-card";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { pageMetadata, type Locale } from "@/lib/seo";
import { localizeProject, portfolioProjects } from "./portfolio/projects";
import { PricingPlans } from "@/components/pricing-plans";
import { Testimonials } from "@/components/testimonials";
import { ClientLogos } from "@/components/client-logos";

const portfolio = ["fashion-eshop-woocommerce", "interactive-expert-map-platform", "car-service-booking-system"];

const serviceIcons = [<Palette key="p" className="h-7 w-7" />, <Code2 key="c" className="h-7 w-7" />, <Server key="s" className="h-7 w-7" />];

const processIcons = [<MessagesSquare key="a" className="h-5 w-5" />, <PenTool key="b" className="h-5 w-5" />, <Code2 key="c" className="h-5 w-5" />, <Rocket key="d" className="h-5 w-5" />];

const whyUsIcons = [
  <Search key="s" className="h-5 w-5" />,
  <Layers key="l" className="h-5 w-5" />,
  <ShoppingCart key="c" className="h-5 w-5" />,
  <Server key="v" className="h-5 w-5" />,
  <Accessibility key="a" className="h-5 w-5" />,
  <Wrench key="w" className="h-5 w-5" />,
];

// Section heading with a number, so every block reads as part of one sequence.
function SectionHead({ number, title, subtitle }: { number: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-14 max-w-2xl">
      <p className="mb-4 font-headline text-sm font-semibold tracking-[0.2em] text-primary">{number}</p>
      <h2 className="font-headline text-3xl font-bold leading-tight md:text-5xl">{title}</h2>
      {subtitle && <p className="mt-5 text-lg text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Seo.home" });

  return pageMetadata({ locale: locale as Locale, path: "", title: t("title"), description: t("description") });
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("HomePage");
  const tPortfolio = await getTranslations("PortfolioPage");
  const projects = portfolio.map((slug) => localizeProject(portfolioProjects.find((p) => p.slug === slug)!, locale));
  const services = t.raw("services");
  const processSteps = t.raw("processSteps");
  const whyUs = t.raw("whyUsReasons");

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-grow">
        {/* Hero */}
        <section className="relative overflow-hidden pt-16 pb-24 md:pt-32 md:pb-32">
          <div className="absolute inset-0 bg-grid-white/[0.04] [mask-image:linear-gradient(to_bottom,white_40%,transparent_100%)]" />
          <div className="container relative mx-auto grid items-center gap-12 px-4 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
            <div className="min-w-0">
              <Reveal>
                <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {t('heroBadge')}
                </p>
              </Reveal>
              <h1 className="mb-6 font-headline text-[2.6rem] font-bold leading-[1.04] tracking-tight text-balance md:text-6xl lg:text-[3.6rem] xl:text-[4.25rem]">
                {t('heroTitle').split(' ').map((word: string, i: number, all: string[]) => (
                  <span key={i}>
                    <span className="word-in" style={{ animationDelay: `${120 + i * 70}ms` }}>{word}</span>
                    {i < all.length - 1 ? ' ' : null}
                  </span>
                ))}
              </h1>
              <Reveal delay={200}>
                <p className="mb-10 max-w-xl text-lg text-muted-foreground md:text-xl">{t('heroSubtitle')}</p>
              </Reveal>
              <Reveal delay={280}>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button asChild size="lg" className="rounded-full font-bold">
                    <TrackedLink location="hero" href="/contact">
                      {t('heroCta')}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </TrackedLink>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="rounded-full border-2 font-semibold">
                    <Link href="/portfolio">{t('heroSecondaryCta')}</Link>
                  </Button>
                </div>
              </Reveal>
            </div>

            <Reveal delay={150} className="min-w-0">
              <figure className="relative mx-auto w-full max-w-md lg:max-w-none">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border/60 shadow-2xl shadow-black/60">
                  <Image src="/home/hero.webp" alt="" fill priority sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                </div>
                {["Vue 3", "Nuxt", "TypeScript", "WooCommerce", "Laravel"].map((tag, i) => (
                  <span
                    key={tag}
                    className="hero-chip absolute whitespace-nowrap rounded-full border border-primary/40 bg-background/80 px-4 py-2 text-sm font-semibold text-primary shadow-lg backdrop-blur"
                    style={{
                      top: ["8%", "30%", "58%", "78%", "12%"][i],
                      left: ["-6%", "auto", "-10%", "62%", "auto"][i],
                      right: ["auto", "-6%", "auto", "auto", "-4%"][i],
                      animationDelay: `${i * 0.7}s`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
                <figcaption className="mt-4 text-right text-xs text-muted-foreground">{t('heroPhotoCredit')}</figcaption>
              </figure>
            </Reveal>
          </div>
        </section>

        {/* Start: two entry points */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-4">
            <Reveal>
              <SectionHead number="01" title={t('startTitle')} subtitle={t('startSubtitle')} />
            </Reveal>
            <div className="grid gap-6 md:grid-cols-2">
              <Reveal>
                <TrackedLink location="start_new" href="/contact" className="group block h-full">
                  <SpotlightCard className="h-full rounded-3xl border border-border/60 bg-secondary/40 p-10 transition-all duration-300 hover:border-primary/50">
                    <h3 className="font-headline text-2xl font-bold">{t('startNewTitle')}</h3>
                    <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{t('startNewText')}</p>
                    <span className="mt-8 inline-flex items-center font-semibold text-primary">
                      {t('startCta')} <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </SpotlightCard>
                </TrackedLink>
              </Reveal>
              <Reveal delay={120}>
                <TrackedLink location="start_existing" href="/contact" className="group block h-full">
                  <SpotlightCard className="h-full rounded-3xl border border-border/60 bg-secondary/40 p-10 transition-all duration-300 hover:border-primary/50">
                    <h3 className="font-headline text-2xl font-bold">{t('startExistingTitle')}</h3>
                    <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{t('startExistingText')}</p>
                    <span className="mt-8 inline-flex items-center font-semibold text-primary">
                      {t('startCta')} <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </SpotlightCard>
                </TrackedLink>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="border-t border-border/50 py-24 md:py-32">
          <div className="container mx-auto px-4">
            <Reveal>
              <SectionHead number="02" title={t('servicesTitle')} />
            </Reveal>
            <div className="grid gap-6 md:grid-cols-3">
              {services.map((service: any, index: number) => (
                <Reveal key={index} delay={index * 100} className="h-full">
                  <SpotlightCard className="h-full rounded-3xl border border-border/60 bg-secondary/40 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50">
                    <div className="mb-8 flex items-center justify-between">
                      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">{serviceIcons[index]}</span>
                      <span className="font-headline text-sm font-semibold text-muted-foreground">0{index + 1}</span>
                    </div>
                    <CardTitle className="mb-3 font-headline text-2xl font-bold">{service.title}</CardTitle>
                    <p className="leading-relaxed text-muted-foreground">{service.description}</p>
                    {service.items && (
                      <ul className="mt-6 space-y-3 border-t border-border/60 pt-6">
                        {service.items.map((item: string) => (
                          <li key={item} className="flex items-start gap-3 text-sm">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </SpotlightCard>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <Reveal>
          <ClientLogos />
        </Reveal>

        <PricingPlans locale={locale} />

        <Reveal>
          <Testimonials locale={locale} />
        </Reveal>

        {/* Portfolio */}
        <section id="portfolio" className="py-24 md:py-32">
          <div className="container mx-auto px-4">
            <Reveal>
              <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                <div className="max-w-2xl">
                  <p className="mb-4 font-headline text-sm font-semibold tracking-[0.2em] text-primary">03</p>
                  <h2 className="font-headline text-3xl font-bold leading-tight md:text-5xl">{t('portfolioTitle')}</h2>
                  <p className="mt-5 text-lg text-muted-foreground">{t('portfolioSubtitle')}</p>
                </div>
                <Link href="/portfolio" className="inline-flex items-center font-semibold text-primary">
                  {t('portfolioCta')} <MoveRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </Reveal>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {projects.map((project, index) => (
                <Reveal key={project.slug} delay={index * 120} className="h-full">
                  <ProjectCard
                    slug={project.slug}
                    index={index}
                    industry={project.industry}
                    title={project.title}
                    description={project.description}
                    results={project.results}
                    tags={project.tags}
                    viewLabel={tPortfolio('viewProject')}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="border-t border-border/50 py-24 md:py-32">
          <div className="container mx-auto px-4">
            <Reveal>
              <SectionHead number="04" title={t('processTitle')} subtitle={t('processSubtitle')} />
            </Reveal>
            <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step: { title: string; description: string }, index: number) => (
                <li key={index} className="group rounded-2xl border border-border/60 bg-secondary/30 p-7 transition-colors duration-300 hover:border-primary/50">
                  <div className="mb-6 flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                      {processIcons[index]}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      {t('stepLabel', { number: String(index + 1).padStart(2, '0') })}
                    </span>
                  </div>
                  <h3 className="font-headline text-xl font-bold">{step.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Why us */}
        <section id="why-us" className="py-24 md:py-32">
          <div className="container mx-auto px-4">
            <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
              <Reveal>
                <div className="lg:sticky lg:top-32">
                  <p className="mb-4 font-headline text-sm font-semibold tracking-[0.2em] text-primary">05</p>
                  <h2 className="mb-6 font-headline text-3xl font-bold leading-tight md:text-5xl">{t('whyUsTitle')}</h2>
                  <p className="text-lg text-muted-foreground">{t('whyUsSubtitle')}</p>
                </div>
              </Reveal>
              <div className="grid gap-4 sm:grid-cols-2">
                {whyUs.map((item: { title: string; description: string }, index: number) => (
                  <Reveal key={index} delay={index * 80} className="h-full">
                    <div className="flex h-full gap-4 rounded-2xl border border-border/60 bg-secondary/30 p-6 transition-colors duration-300 hover:border-primary/50">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">{whyUsIcons[index]}</span>
                      <div>
                        <h3 className="font-headline text-lg font-bold leading-snug">{item.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section id="technologies" className="border-t border-border/50 py-24 md:py-28">
          <div className="container mx-auto px-4">
            <Reveal>
              <div className="mb-12 flex items-center gap-4">
                <Layers className="h-8 w-8 text-primary" />
                <h2 className="font-headline text-3xl font-bold md:text-4xl">{t('technologiesTitle')}</h2>
              </div>
              <TechLogos />
            </Reveal>
          </div>
        </section>

        {/* Closing call to action */}
        <section className="pb-24 md:pb-32">
          <div className="container mx-auto px-4">
            <Reveal>
              <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center md:px-16 md:py-20">
                <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
                <h2 className="relative mb-4 font-headline text-3xl font-bold text-primary-foreground md:text-5xl">{t('ctaTitle')}</h2>
                <p className="relative mx-auto mb-8 max-w-2xl text-lg text-primary-foreground/80">{t('ctaSubtitle')}</p>
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
