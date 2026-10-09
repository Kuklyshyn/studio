import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Code, Smartphone, Search } from "lucide-react";
import { Link } from "@/i18n";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { localizeProject, portfolioProjects, type PortfolioCategory } from "../portfolio/projects";
import { pageMetadata, type Locale } from "@/lib/seo";
import { PricingPlans } from "@/components/pricing-plans";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { Magnetic } from "@/components/magnetic";
import { SpotlightCard } from "@/components/spotlight-card";
import { ProjectCard } from "@/components/project-card";
import { SceneBlueprint, SceneCart, SceneGauge } from "@/components/scenes";

const categoryOrder: PortfolioCategory[] = ["websites", "eshops", "saas", "apps"];

const benefitIcons = [<Code key="c" className="h-6 w-6" />, <Smartphone key="s" className="h-6 w-6" />, <Search key="r" className="h-6 w-6" />];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "Seo.services" });

    return pageMetadata({ locale: locale as Locale, path: "/services", title: t("title"), description: t("description") });
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations("ServicesPage");
    const tPortfolio = await getTranslations("PortfolioPage");
    const benefits = t.raw('benefits');
    const services = t.raw('services');
    const projects = portfolioProjects.map((project) => localizeProject(project, locale));
    const projectCategories = categoryOrder.filter((category) => projects.some((project) => project.category === category));

    return (
        <>
            <PageHero title={t('heroTitle')} subtitle={t('heroSubtitle')}>
                <Magnetic>
                    <Button asChild size="lg" className="btn-shine rounded-full font-bold">
                        <Link href="/contact">{t('heroCta')}</Link>
                    </Button>
                </Magnetic>
            </PageHero>

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid items-center gap-12 md:grid-cols-2">
                        <Reveal>
                            <h2 className="mb-4 font-headline text-3xl font-bold md:text-4xl">{t('websitesTitle')}</h2>
                            <p className="mb-4 text-lg text-muted-foreground">{t('websitesText1')}</p>
                            <p className="text-lg text-muted-foreground">{t('websitesText2')}</p>
                        </Reveal>
                        <Reveal delay={120}>
                            <SceneBlueprint />
                        </Reveal>
                    </div>
                </div>
            </section>

            <section className="border-t border-border/50 py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid items-center gap-12 md:grid-cols-2">
                        <Reveal className="order-2 md:order-1">
                            <SceneCart />
                        </Reveal>
                        <Reveal delay={120} className="order-1 md:order-2">
                            <h2 className="mb-4 font-headline text-3xl font-bold md:text-4xl">{t('eshopsTitle')}</h2>
                            <p className="mb-4 text-lg text-muted-foreground">{t('eshopsText1')}</p>
                            <p className="text-lg text-muted-foreground">{t('eshopsText2')}</p>
                        </Reveal>
                    </div>
                </div>
            </section>

            <section className="border-t border-border/50 py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <Reveal>
                        <div className="mx-auto mb-12 max-w-2xl text-center">
                            <h2 className="font-headline text-3xl font-bold md:text-5xl">{t('projectsTitle')}</h2>
                            <p className="mt-4 text-lg text-muted-foreground">{t('projectsSubtitle')}</p>
                        </div>
                    </Reveal>
                    <Tabs defaultValue={projectCategories[0]} className="w-full">
                        <TabsList className="mb-8 grid h-auto w-full grid-cols-2 md:grid-cols-4">
                            {projectCategories.map((category) => (
                                <TabsTrigger key={category} value={category} className="py-2.5 text-base">{t(`categories.${category}`)}</TabsTrigger>
                            ))}
                        </TabsList>
                        {projectCategories.map((category) => (
                            <TabsContent key={category} value={category}>
                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                    {projects.filter((project) => project.category === category).map((project, index) => (
                                        <ProjectCard
                                            key={project.slug}
                                            slug={project.slug}
                                            index={index}
                                            industry={project.industry}
                                            title={project.title}
                                            description={project.description}
                                            results={project.results}
                                            tags={project.tags}
                                            viewLabel={tPortfolio('viewProject')}
                                        />
                                    ))}
                                </div>
                            </TabsContent>
                        ))}
                    </Tabs>
                    <div className="mt-12 text-center">
                        <Magnetic>
                            <Button asChild size="lg" className="btn-shine rounded-full font-bold">
                                <Link href="/portfolio">{t('allProjects')}</Link>
                            </Button>
                        </Magnetic>
                    </div>
                </div>
            </section>

            <section className="border-t border-border/50 py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid items-center gap-12 md:grid-cols-2">
                        <div>
                            <Reveal>
                                <h2 className="mb-8 font-headline text-3xl font-bold md:text-4xl">{t('benefitsTitle')}</h2>
                            </Reveal>
                            <div className="space-y-4">
                                {benefits.map((benefit: any, index: number) => (
                                    <Reveal key={index} delay={index * 100}>
                                        <SpotlightCard className="rounded-2xl border border-border/60 bg-gradient-to-b from-white/[0.05] to-secondary/20 p-5 transition-colors duration-300 hover:border-primary/50">
                                            <div className="flex items-start gap-4">
                                                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">{benefitIcons[index]}</span>
                                                <div>
                                                    <h3 className="text-lg font-bold">{benefit.title}</h3>
                                                    <p className="mt-1 text-muted-foreground">{benefit.description}</p>
                                                </div>
                                            </div>
                                        </SpotlightCard>
                                    </Reveal>
                                ))}
                            </div>
                        </div>
                        <Reveal delay={120}>
                            <SceneGauge />
                        </Reveal>
                    </div>
                </div>
            </section>

            <PricingPlans locale={locale} />

            <section className="border-t border-border/50 py-16 md:py-24">
                <div className="container mx-auto max-w-4xl px-4">
                    <Reveal>
                        <div className="mx-auto mb-12 max-w-2xl text-center">
                            <h2 className="font-headline text-3xl font-bold md:text-5xl">{t('servicesListTitle')}</h2>
                            <p className="mt-4 text-lg text-muted-foreground">{t('servicesListSubtitle')}</p>
                        </div>
                    </Reveal>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {services.map((service: string, index: number) => (
                            <Reveal key={index} delay={(index % 2) * 80} className="h-full">
                                <SpotlightCard className="h-full rounded-2xl border border-border/60 bg-gradient-to-b from-white/[0.05] to-secondary/20 p-4 transition-colors duration-300 hover:border-primary/50">
                                    <div className="flex items-center gap-3 text-lg">
                                        <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                                        <span>{service}</span>
                                    </div>
                                </SpotlightCard>
                            </Reveal>
                        ))}
                    </div>
                    <div className="mt-12 text-center">
                        <Magnetic>
                            <Button asChild size="lg" variant="outline" className="rounded-full border-2 border-border/50 font-semibold hover:border-primary/50 hover:bg-primary/10">
                                <Link href="/custom-programming">
                                    {t('customCta')} <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                        </Magnetic>
                    </div>
                </div>
            </section>
        </>
    );
}
