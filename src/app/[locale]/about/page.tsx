
import { Check } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { pageMetadata, type Locale } from "@/lib/seo";
import { CtaBand } from "@/components/cta-band";

// A brand visual in place of stock illustrations. Replace it with the owner's photo when one is supplied.
function BrandVisual() {
    return (
        <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-lg border border-border/50 bg-secondary/50 bg-grid-white/[0.05]">
            <Image src="/img/logo-white.png" alt="Omnicode" width={240} height={82} />
        </div>
    );
}

const teamMemberHints = ["man portrait professional", "woman smiling", "man glasses"];

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
    const tHeader = await getTranslations("Header");


    const teamMembers = t.raw('teamMembers');
    const values = locale === 'en' ? values_en : values_sk;

    return (
        <>
            <section className="py-20 md:py-32 relative">
                <div className="absolute inset-0 bg-grid-white/[0.05]"></div>
                <div className="container mx-auto px-4 text-center relative">
                    <h1 className="font-headline text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 mb-4">
                        {t('heroTitle')}
                    </h1>
                    <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
                        {t('heroSubtitle')}
                    </p>
                </div>
            </section>

            <section className="py-24 md:py-32">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <BrandVisual />
                        </div>
                        <div>
                            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">{t('storyTitle')}</h2>
                            <p className="text-muted-foreground mb-4 text-lg">
                                {t('storyText1')}
                            </p>
                            <p className="text-muted-foreground text-lg">
                               {t('storyText2')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 md:py-32 bg-secondary/30">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-6">{t('valuesTitle')}</h2>
                            <div className="grid grid-cols-2 gap-4">
                                {values.map((value, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                                        <span>{value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            <BrandVisual />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 md:py-32">
                <div className="container mx-auto px-4">
                    <h2 className="font-headline text-3xl md:text-5xl font-bold text-center mb-12">
                        {t('teamTitle')}
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {teamMembers.map((member: any, index: number) => (
                            <div key={index} className="text-center">
                                <div aria-hidden="true" className="mx-auto mb-4 flex h-28 w-28 items-center justify-center rounded-full border border-primary/40 bg-primary/10 font-headline text-3xl font-bold text-primary">
                                    {member.name.split(" ").map((part: string) => part[0]).join("").slice(0, 2)}
                                </div>
                                <h3 className="font-bold text-xl">{member.name}</h3>
                                <p className="text-primary">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CtaBand locale={locale} location="about_cta" />
        </>
    );
}

    