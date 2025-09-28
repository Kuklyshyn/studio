
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Code, Database, Layers, Rocket, ShieldCheck, Zap } from "lucide-react";
import Image from "next/image";
import { Link } from "@/i18n";
import { useTranslations } from "next-intl";
import { Icon } from "@iconify/react";

const technologies = [
    { name: "Next.js", icon: "logos:nextjs-icon", hint: "nextjs logo" },
    { name: "React", icon: "logos:react", hint: "react logo" },
    { name: "TypeScript", icon: "logos:typescript-icon", hint: "typescript logo" },
    { name: "Node.js", icon: "logos:nodejs-icon", hint: "nodejs logo" },
    { name: "Firebase", icon: "logos:firebase-icon", hint: "firebase logo" },
    { name: "PostgreSQL", icon: "logos:postgresql-icon", hint: "postgresql logo" },
    { name: "Docker", icon: "logos:docker-icon", hint: "docker logo" },
    { name: "GraphQL", icon: "logos:graphql-icon", hint: "graphql logo" },
];

const featureIcons = [
    <Zap className="w-8 h-8 text-primary" />,
    <ShieldCheck className="w-8 h-8 text-primary" />,
    <Layers className="w-8 h-8 text-primary" />,
    <Code className="w-8 h-8 text-primary" />
];

export default function CustomProgrammingPage() {
    const t = useTranslations("CustomProgrammingPage");
    const features = t.raw('features');
    const processSteps = t.raw('processSteps');

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
                            <Image src="https://supermykola.sirv.com/omni/13.jpg" alt={t('heroTitle')} width={800} height={600} className="rounded-lg shadow-2xl" data-ai-hint="code on screen" />
                        </div>
                        <div>
                            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">{t('visionTitle')}</h2>
                            <p className="text-muted-foreground mb-4 text-lg">
                                {t('visionText1')}
                            </p>
                            <p className="text-muted-foreground text-lg">
                                {t('visionText2')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-secondary/30">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="font-headline text-3xl md:text-5xl font-bold">{t('whyCustomTitle')}</h2>
                        <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">{t('whyCustomSubtitle')}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature: any, index: number) => (
                            <div key={index} className="bg-secondary/50 p-6 rounded-lg text-center border border-border/50 hover:border-primary/50 transition-colors">
                                <div className="mx-auto bg-primary/10 rounded-lg w-16 h-16 flex items-center justify-center mb-4">
                                    {featureIcons[index]}
                                </div>
                                <h3 className="font-headline text-xl font-bold mb-2">{feature.title}</h3>
                                <p className="text-muted-foreground text-sm">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            <section id="process" className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="font-headline text-3xl md:text-5xl font-bold">{t('processTitle')}</h2>
                        <p className="text-muted-foreground mt-4 text-lg">{t('processSubtitle')}</p>
                    </div>
                    <div className="max-w-4xl mx-auto">
                        {processSteps.map((step: any, index: number) => (
                            <div key={index} className="flex gap-6 mb-8 relative">
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-xl z-10">
                                        {index + 1}
                                    </div>
                                    {index < processSteps.length - 1 && <div className="w-px h-full bg-border/50"></div>}
                                </div>
                                <div className="pt-2">
                                    <h3 className="font-headline text-xl font-bold mb-1">{step.title}</h3>
                                    <p className="text-muted-foreground">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="technologies" className="py-16 md:py-24 bg-secondary/30">
                <div className="container mx-auto px-4">
                     <div className="flex justify-center items-center gap-4 mb-12">
                        <Database className="w-10 h-10 text-primary" />
                        <h2 className="font-headline text-3xl md:text-5xl font-bold text-center">
                          {t('techTitle')}
                        </h2>
                    </div>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                        {technologies.map(tech => (
                            <div key={tech.name} className="text-center" title={tech.name}>
                                 <Icon icon={tech.icon} className="w-16 h-16 grayscale hover:grayscale-0 transition-all duration-300" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

             <section className="bg-primary/90 py-16 md:py-24">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="font-headline text-3xl md:text-5xl font-bold text-primary-foreground mb-4">{t('ctaTitle')}</h2>
                    <p className="max-w-2xl mx-auto text-lg text-primary-foreground/80 mb-8">{t('ctaSubtitle')}</p>
                    <Button asChild size="lg" variant="secondary" className="rounded-full font-bold">
                        <Link href="/contact">{t('ctaButton')}</Link>
                    </Button>
                </div>
            </section>
        </>
    );
}

    