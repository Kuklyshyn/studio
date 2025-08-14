import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Code, Database, Layers, Rocket, ShieldCheck, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const features = [
    {
        icon: <Zap className="w-8 h-8 text-primary" />,
        title: "Rýchlosť a Efektivita",
        description: "Optimalizujeme kód pre maximálny výkon a rýchlu odozvu aplikácie.",
    },
    {
        icon: <ShieldCheck className="w-8 h-8 text-primary" />,
        title: "Bezpečnosť na Prvom Mieste",
        description: "Implementujeme najnovšie bezpečnostné štandardy na ochranu vašich dát.",
    },
    {
        icon: <Layers className="w-8 h-8 text-primary" />,
        title: "Škálovateľnosť",
        description: "Naše riešenia sú navrhnuté tak, aby rástli spolu s vaším podnikaním.",
    },
    {
        icon: <Code className="w-8 h-8 text-primary" />,
        title: "Čistý a Udržateľný Kód",
        description: "Píšeme kód, ktorý je ľahko čitateľný, rozšíriteľný a udržiavateľný do budúcna.",
    },
];

const technologies = [
    { name: "Next.js", src: "https://placehold.co/100x100.png", hint: "nextjs logo" },
    { name: "React", src: "https://placehold.co/100x100.png", hint: "react logo" },
    { name: "TypeScript", src: "https://placehold.co/100x100.png", hint: "typescript logo" },
    { name: "Node.js", src: "https://placehold.co/100x100.png", hint: "nodejs logo" },
    { name: "Firebase", src: "https://placehold.co/100x100.png", hint: "firebase logo" },
    { name: "PostgreSQL", src: "https://placehold.co/100x100.png", hint: "postgresql logo" },
    { name: "Docker", src: "https://placehold.co/100x100.png", hint: "docker logo" },
    { name: "GraphQL", src: "https://placehold.co/100x100.png", hint: "graphql logo" },
];

const processSteps = [
    { title: "Analýza požiadaviek", description: "Hĺbkovo analyzujeme vaše potreby a ciele, aby sme navrhli optimálne riešenie." },
    { title: "Architektúra a Dizajn", description: "Navrhneme robustnú architektúru a UX/UI dizajn, ktorý zabezpečí skvelý používateľský zážitok." },
    { title: "Vývoj a Implementácia", description: "Náš tím expertov naprogramuje vaše riešenie s dôrazom na kvalitu a výkon." },
    { title: "Testovanie a QA", description: "Dôkladne testujeme každý aspekt aplikácie, aby sme zaručili jej bezchybný chod." },
    { title: "Nasadenie a Spustenie", description: "Zabezpečíme plynulé nasadenie do produkcie a spustenie vašej aplikácie." },
    { title: "Podpora a Údržba", description: "Poskytujeme dlhodobú podporu, monitoring a údržbu pre bezproblémovú prevádzku." },
];

export default function CustomProgrammingPage() {
    return (
        <>
            <section className="py-20 md:py-32 relative">
                <div className="absolute inset-0 bg-grid-white/[0.05]"></div>
                <div className="container mx-auto px-4 text-center relative">
                    <h1 className="font-headline text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 mb-4">
                        Programovanie na Mieru
                    </h1>
                    <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
                        Premeníme vaše unikátne nápady na funkčné a robustné webové aplikácie, systémy a riešenia presne podľa vašich požiadaviek.
                    </p>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <Image src="https://placehold.co/800x600.png" alt="Programovanie na mieru" width={800} height={600} className="rounded-lg shadow-2xl" data-ai-hint="developer coding on computer" />
                        </div>
                        <div>
                            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">Od vízie k realite</h2>
                            <p className="text-muted-foreground mb-4 text-lg">
                                Máte špecifické požiadavky, ktoré nespĺňajú bežné "krabicové" riešenia? Potrebujete interný systém, portál pre klientov, alebo komplexnú webovú aplikáciu? Naše služby programovania na mieru sú tu presne pre vás.
                            </p>
                            <p className="text-muted-foreground text-lg">
                                Sústredíme sa na detailné pochopenie vašich procesov a cieľov, aby sme vytvorili softvér, ktorý nielen funguje, ale vám aj reálne zjednodušuje prácu a prináša merateľné výsledky.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-secondary/30">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="font-headline text-3xl md:text-5xl font-bold">Prečo si vybrať riešenie na mieru?</h2>
                        <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">Investícia do softvéru na mieru je investíciou do budúcnosti a efektivity vášho podnikania.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-secondary/50 p-6 rounded-lg text-center border border-border/50 hover:border-primary/50 transition-colors">
                                <div className="mx-auto bg-primary/10 rounded-lg w-16 h-16 flex items-center justify-center mb-4">
                                    {feature.icon}
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
                        <h2 className="font-headline text-3xl md:text-5xl font-bold">Náš Proces Vývoja</h2>
                        <p className="text-muted-foreground mt-4 text-lg">Transparentný a osvedčený postup pre úspešné dodanie projektu.</p>
                    </div>
                    <div className="max-w-4xl mx-auto">
                        {processSteps.map((step, index) => (
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
                          Používané Technológie
                        </h2>
                    </div>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                        {technologies.map(tech => (
                            <div key={tech.name} className="text-center" title={tech.name}>
                                 <Image src={tech.src} alt={tech.name} width={64} height={64} data-ai-hint={tech.hint} className="w-16 h-16 grayscale hover:grayscale-0 transition-all duration-300" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

             <section className="bg-primary/90 py-16 md:py-24">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="font-headline text-3xl md:text-5xl font-bold text-primary-foreground mb-4">Pripravení začať váš projekt?</h2>
                    <p className="max-w-2xl mx-auto text-lg text-primary-foreground/80 mb-8">Kontaktujte nás pre nezáväznú konzultáciu a cenovú ponuku pre vaše riešenie na mieru.</p>
                    <Button asChild size="lg" variant="secondary" className="rounded-full font-bold">
                        <Link href="/contact">Kontaktujte nás</Link>
                    </Button>
                </div>
            </section>
        </>
    );
}
