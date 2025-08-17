
import { Check } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

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


export default function AboutPage() {
    const t = useTranslations("AboutPage");
    const tHeader = useTranslations("Header");
    const locale = useTranslations()('Header.locale');

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

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <Image src="https://placehold.co/800x600.png" alt="Our Story" width={800} height={600} className="rounded-lg shadow-2xl" data-ai-hint="team collaborating office" />
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

            <section className="py-16 md:py-24 bg-secondary/30">
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
                             <Image src="https://placehold.co/800x600.png" alt="Our Values" width={800} height={600} className="rounded-lg shadow-2xl" data-ai-hint="glowing core abstract" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <h2 className="font-headline text-3xl md:text-5xl font-bold text-center mb-12">
                        {t('teamTitle')}
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {teamMembers.map((member: any, index: number) => (
                            <div key={index} className="text-center group">
                                <div className="relative w-48 h-48 mx-auto mb-4 overflow-hidden rounded-lg">
                                    <Image src="https://placehold.co/400x400.png" alt={member.name} width={400} height={400} data-ai-hint={teamMemberHints[index]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                </div>
                                <h3 className="font-bold text-xl">{member.name}</h3>
                                <p className="text-primary">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

    