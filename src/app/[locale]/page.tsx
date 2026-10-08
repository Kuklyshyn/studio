
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Check, Code2, Layers, Megaphone, MessagesSquare, MoveRight, Palette, PenTool, Rocket, Users } from "lucide-react";
import Image from "next/image";
import { Link } from "@/i18n";
import { TrackedLink } from "@/components/tracked-link";
import { TechLogos } from "@/components/tech-logos";
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


const serviceIcons = [<Palette className="w-8 h-8 text-primary" />, <Code2 className="w-8 h-8 text-primary" />, <Megaphone className="w-8 h-8 text-primary" />];

const processIcons = [<MessagesSquare className="w-6 h-6" />, <PenTool className="w-6 h-6" />, <Code2 className="w-6 h-6" />, <Rocket className="w-6 h-6" />];

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
    return { src: project.image, alt: project.title, hint: item.hint };
  });
  const services = t.raw("services");
  const processSteps = t.raw("processSteps");
  const whyUs = t.raw("whyUsReasons");

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <section id="home" className="pt-12 pb-16 md:py-40 relative">
          <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:linear-gradient(to_bottom,white_50%,transparent_100%)]"></div>
          <div className="container mx-auto px-4 text-center relative">
            <h1 className="font-headline text-4xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70">
              {t('heroTitle')}
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10">
              {t('heroSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="rounded-full font-bold">
                <TrackedLink location="hero" href="/contact">
                  {t('heroCta')}
                </TrackedLink>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full font-semibold border-2">
                <Link href="/portfolio">
                  {t('heroSecondaryCta')}
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="services" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="font-headline text-3xl md:text-5xl font-bold text-center mb-12">
              {t('servicesTitle')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service: any, index: number) => (
                <Card key={index} className="bg-secondary/50 border-border/50 text-center p-8 transition-transform hover:-translate-y-2">
                    <div className="mx-auto bg-primary/10 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                      {serviceIcons[index]}
                    </div>
                    <CardTitle className="font-headline text-2xl font-bold mb-3">
                      {service.title}
                    </CardTitle>
                    <p className="text-muted-foreground">{service.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <PricingPlans locale={locale} />

        <section id="portfolio" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="font-headline text-3xl md:text-5xl font-bold">{t('portfolioTitle')}</h2>
                <p className="text-muted-foreground mt-4 text-lg">{t('portfolioSubtitle')}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {portfolioItems.map((item, index) => (
                <div key={index} className="overflow-hidden group rounded-lg">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={600}
                    height={800}
                    sizes="(min-width: 768px) 33vw, 100vw"
                    data-ai-hint={item.hint}
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button asChild variant="outline" size="lg" className="rounded-full font-semibold border-2">
                <Link href="/portfolio">
                  {t('portfolioCta')} <MoveRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="process" className="py-16 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-headline text-3xl md:text-5xl font-bold">{t('processTitle')}</h2>
              <p className="text-muted-foreground mt-4 text-lg">{t('processSubtitle')}</p>
            </div>
            <ol className="relative mx-auto grid max-w-3xl lg:max-w-none lg:grid-cols-4 lg:gap-8 before:absolute before:left-[12.5%] before:right-[12.5%] before:top-7 before:hidden before:h-px before:bg-gradient-to-r before:from-primary/20 before:via-primary/60 before:to-primary/20 before:content-[''] lg:before:block">
              {processSteps.map((step: { title: string; description: string }, index: number) => (
                <li
                  key={index}
                  className="group relative flex gap-6 pb-12 last:pb-0 before:absolute before:bottom-0 before:left-7 before:top-14 before:w-px before:bg-primary/30 before:content-[''] last:before:hidden lg:flex-col lg:items-center lg:gap-0 lg:pb-0 lg:text-center lg:before:hidden"
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

        <section id="why-us" className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl">
                    <div>
                        <h2 className="font-headline text-3xl md:text-5xl font-bold mb-6">{t('whyUsTitle')}</h2>
                        <p className="text-muted-foreground text-lg mb-8">{t('whyUsSubtitle')}</p>
                        <div className="grid grid-cols-2 gap-4">
                            {whyUs.map((item: string, index: number) => (
                                <div key={index} className="flex items-center gap-3">
                                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                                    <span className="font-semibold">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="technologies" className="py-16 md:py-24 bg-secondary/30">
            <div className="container mx-auto px-4">
                <div className="flex justify-center items-center gap-4 mb-12">
                    <Layers className="w-10 h-10 text-primary" />
                    <h2 className="font-headline text-3xl md:text-5xl font-bold text-center">
                      {t('technologiesTitle')}
                    </h2>
                </div>
                <TechLogos />
            </div>
        </section>


        <section className="bg-primary/90 py-16 md:py-24">
            <div className="container mx-auto px-4 text-center">
                <h2 className="font-headline text-3xl md:text-5xl font-bold text-primary-foreground mb-4">{t('ctaTitle')}</h2>
                <p className="max-w-2xl mx-auto text-lg text-primary-foreground/80 mb-8">{t('ctaSubtitle')}</p>
                <Button asChild size="lg" variant="secondary" className="rounded-full font-bold">
                    <TrackedLink location="bottom_cta" href="/contact">{t('ctaButton')}</TrackedLink>
                </Button>
            </div>
        </section>
      </main>
    </div>
  );
}

    