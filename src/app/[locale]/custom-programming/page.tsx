import { Button } from "@/components/ui/button";
import { Code, Database, FlaskConical, Layers, LifeBuoy, PenTool, Rocket, Search, ShieldCheck, Zap } from "lucide-react";
import { Link } from "@/i18n";
import { TechLogos } from "@/components/tech-logos";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { pageMetadata, type Locale } from "@/lib/seo";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { Magnetic } from "@/components/magnetic";
import { ScrollSteps } from "@/components/scroll-steps";
import { SpotlightCard } from "@/components/spotlight-card";
import { SceneCode } from "@/components/scenes";

const featureIcons = [
    <Zap key="z" className="h-7 w-7" />,
    <ShieldCheck key="s" className="h-7 w-7" />,
    <Layers key="l" className="h-7 w-7" />,
    <Code key="c" className="h-7 w-7" />
];

const processIcons = [
    <Search key="a" className="h-5 w-5" />,
    <PenTool key="b" className="h-5 w-5" />,
    <Code key="c" className="h-5 w-5" />,
    <FlaskConical key="d" className="h-5 w-5" />,
    <Rocket key="e" className="h-5 w-5" />,
    <LifeBuoy key="f" className="h-5 w-5" />
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "Seo.customProgramming" });

    return pageMetadata({ locale: locale as Locale, path: "/custom-programming", title: t("title"), description: t("description") });
}

export default async function CustomProgrammingPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations("CustomProgrammingPage");
    const features = t.raw('features');
    const processSteps = t.raw('processSteps');

    return (
        <>
            <PageHero title={t('heroTitle')} subtitle={t('heroSubtitle')} />

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid items-center gap-12 md:grid-cols-2">
                        <Reveal>
                            <SceneCode />
                        </Reveal>
                        <Reveal delay={120}>
                            <h2 className="mb-4 font-headline text-3xl font-bold md:text-4xl">{t('visionTitle')}</h2>
                            <p className="mb-4 text-lg text-muted-foreground">{t('visionText1')}</p>
                            <p className="text-lg text-muted-foreground">{t('visionText2')}</p>
                        </Reveal>
                    </div>
                </div>
            </section>

            <section className="border-t border-border/50 py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <Reveal>
                        <div className="mx-auto mb-12 max-w-2xl text-center">
                            <h2 className="font-headline text-3xl font-bold md:text-5xl">{t('whyCustomTitle')}</h2>
                            <p className="mt-4 text-lg text-muted-foreground">{t('whyCustomSubtitle')}</p>
                        </div>
                    </Reveal>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {features.map((feature: any, index: number) => (
                            <Reveal key={index} delay={index * 90} className="h-full">
                                <SpotlightCard className="h-full rounded-3xl border border-border/60 bg-gradient-to-b from-white/[0.06] to-secondary/20 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50">
                                    <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                                        {featureIcons[index]}
                                    </span>
                                    <h3 className="mb-2 font-headline text-xl font-bold">{feature.title}</h3>
                                    <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
                                </SpotlightCard>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <section id="process" className="border-t border-border/50 py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <Reveal>
                        <div className="mx-auto mb-12 max-w-2xl text-center">
                            <h2 className="font-headline text-3xl font-bold md:text-5xl">{t('processTitle')}</h2>
                            <p className="mt-4 text-lg text-muted-foreground">{t('processSubtitle')}</p>
                        </div>
                    </Reveal>
                    <ScrollSteps className="mx-auto grid max-w-3xl gap-4">
                        {processSteps.map((step: { title: string; description: string }, index: number) => (
                            <li
                                key={index}
                                className="scroll-step group flex gap-5 rounded-2xl border bg-gradient-to-b from-white/[0.05] to-secondary/20 p-6"
                                style={{ ["--i" as string]: index, ["--n" as string]: processSteps.length }}
                            >
                                <span className="pulse-ring flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                                    {processIcons[index]}
                                </span>
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                                        {t('stepLabel', { number: String(index + 1).padStart(2, '0') })}
                                    </p>
                                    <h3 className="mt-1 font-headline text-xl font-bold">{step.title}</h3>
                                    <p className="mt-2 leading-relaxed text-muted-foreground">{step.description}</p>
                                </div>
                            </li>
                        ))}
                    </ScrollSteps>
                </div>
            </section>

            <section id="technologies" className="border-t border-border/50 py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <Reveal>
                        <div className="mb-12 flex items-center justify-center gap-4">
                            <Database className="h-8 w-8 text-primary" />
                            <h2 className="text-center font-headline text-3xl font-bold md:text-5xl">{t('techTitle')}</h2>
                        </div>
                        <TechLogos />
                    </Reveal>
                </div>
            </section>

            <section className="pb-24 md:pb-32">
                <div className="container mx-auto px-4">
                    <Reveal>
                        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center md:px-16 md:py-20">
                            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
                            <h2 className="relative mb-4 font-headline text-3xl font-bold text-primary-foreground md:text-5xl">{t('ctaTitle')}</h2>
                            <p className="relative mx-auto mb-8 max-w-2xl text-lg text-primary-foreground/80">{t('ctaSubtitle')}</p>
                            <Magnetic>
                                <Button asChild size="lg" variant="secondary" className="btn-shine relative rounded-full font-bold">
                                    <Link href="/contact">{t('ctaButton')}</Link>
                                </Button>
                            </Magnetic>
                        </div>
                    </Reveal>
                </div>
            </section>
        </>
    );
}
