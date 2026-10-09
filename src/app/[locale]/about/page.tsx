import { Check } from "lucide-react";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { pageMetadata, type Locale } from "@/lib/seo";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SpotlightCard } from "@/components/spotlight-card";
import { SceneCode, SceneNodes } from "@/components/scenes";

const values_en = [
    "Quality and precision",
    "Innovation and modern technologies",
    "Fair and transparent approach",
    "Client satisfaction first",
    "Long-term partnerships",
    "Passion for the digital world"
];

const values_sk = [
    "Kvalita a precíznosť",
    "Inovácie a moderné technológie",
    "Férový a transparentný prístup",
    "Spokojnosť klienta na prvom mieste",
    "Dlhodobé partnerstvá",
    "Vášeň pre digitálny svet"
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "Seo.about" });

    return pageMetadata({ locale: locale as Locale, path: "/about", title: t("title"), description: t("description") });
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations("AboutPage");

    const teamMembers = t.raw('teamMembers') as { name: string; role: string }[];
    const values = locale === 'en' ? values_en : values_sk;
    const initials = (name: string) => name.split(" ").map((part) => part[0]).slice(0, 2).join("");

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
                            <h2 className="mb-4 font-headline text-3xl font-bold md:text-4xl">{t('storyTitle')}</h2>
                            <p className="mb-4 text-lg text-muted-foreground">{t('storyText1')}</p>
                            <p className="text-lg text-muted-foreground">{t('storyText2')}</p>
                        </Reveal>
                    </div>
                </div>
            </section>

            <section className="border-t border-border/50 py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid items-center gap-12 md:grid-cols-2">
                        <div className="order-2 md:order-1">
                            <Reveal>
                                <h2 className="mb-8 font-headline text-3xl font-bold md:text-4xl">{t('valuesTitle')}</h2>
                            </Reveal>
                            <div className="grid gap-3 sm:grid-cols-2">
                                {values.map((value, index) => (
                                    <Reveal key={index} delay={index * 70} className="h-full">
                                        <SpotlightCard className="h-full rounded-2xl border border-border/60 bg-gradient-to-b from-white/[0.05] to-secondary/20 p-4 transition-colors duration-300 hover:border-primary/50">
                                            <div className="flex items-center gap-3">
                                                <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                                                <span>{value}</span>
                                            </div>
                                        </SpotlightCard>
                                    </Reveal>
                                ))}
                            </div>
                        </div>
                        <Reveal className="order-1 md:order-2" delay={120}>
                            <SceneNodes />
                        </Reveal>
                    </div>
                </div>
            </section>

            <section className="border-t border-border/50 py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <Reveal>
                        <h2 className="mb-12 text-center font-headline text-3xl font-bold md:text-5xl">{t('teamTitle')}</h2>
                    </Reveal>
                    <div className="mx-auto flex max-w-xl flex-col items-center gap-6">
                        {teamMembers.map((member, index) => (
                            <Reveal key={index} className="w-full">
                                <SpotlightCard className="group rounded-3xl border border-border/60 bg-gradient-to-b from-white/[0.06] to-secondary/20 p-8 text-center transition-colors duration-300 hover:border-primary/50">
                                    <div className="relative mx-auto mb-6 flex h-28 w-28 items-center justify-center">
                                        <span className="absolute inset-0 rounded-full border border-dashed border-primary/50 transition-transform duration-700 group-hover:rotate-180" />
                                        <span className="flex h-24 w-24 items-center justify-center rounded-full bg-primary/15 font-headline text-3xl font-bold text-primary transition-transform duration-300 group-hover:scale-105">
                                            {initials(member.name)}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold">{member.name}</h3>
                                    <p className="mt-1 text-primary">{member.role}</p>
                                </SpotlightCard>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
