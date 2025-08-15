import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Code, LayoutTemplate, PenTool, Rocket, Search, ShoppingCart, Smartphone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


const idealFor = [
    { icon: <Rocket className="w-8 h-8 text-primary" />, title: "Startupy a malé firmy", description: "Potrebujete rýchlo spustiť kvalitný web alebo e-shop s obmedzeným rozpočtom." },
    { icon: <PenTool className="w-8 h-8 text-primary" />, title: "Blogeri a kreatívci", description: "Hľadáte flexibilnú platformu pre publikovanie obsahu s možnosťou jednoduchej správy." },
    { icon: <ShoppingCart className="w-8 h-8 text-primary" />, title: "E-shopy a online obchody", description: "Chcete predávať produkty online s robustným a škálovateľným riešením." },
    { icon: <LayoutTemplate className="w-8 h-8 text-primary" />, title: "Firemné weby a portfóliá", description: "Potrebujete profesionálnu prezentáciu vašej spoločnosti a služieb." },
]

const servicesList = [
    "Tvorba webových stránok na mieru",
    "Tvorba e-shopov s WooCommerce",
    "Kódovanie dizajnov na WordPress šablóny",
    "Programovanie pluginov na mieru",
    "Optimalizácia rýchlosti a výkonu",
    "Zabezpečenie a ochrana webu",
    "Pravidelná údržba a aktualizácie",
    "SEO optimalizácia pre vyhľadávače",
    "Integrácie s externými systémami (API)",
]


export default function ServicesPage() {
    return (
        <>
            <section className="py-20 md:py-32 relative">
                <div className="absolute inset-0 bg-grid-white/[0.05]"></div>
                <div className="container mx-auto px-4 text-center relative">
                    <h1 className="font-headline text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 mb-4">
                        Tvorba webov a e-shopov
                    </h1>
                    <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
                        Špecializujeme sa na tvorbu moderných, rýchlych a bezpečných webových riešení postavených na najpopulárnejších technológiách.
                    </p>
                    <div className="mt-8">
                        <Button asChild size="lg" className="rounded-full font-bold">
                            <Link href="/contact">Získať cenovú ponuku</Link>
                        </Button>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">Moderné webové stránky</h2>
                            <p className="text-muted-foreground mb-4 text-lg">
                                Tvoríme webové stránky, ktoré nielen skvele vyzerajú, ale sú aj vysoko funkčné a používateľsky prívetivé. Používame moderné technológie ako Next.js a React, ktoré zaručujú rýchlosť, bezpečnosť a škálovateľnosť. Každý web je od základu navrhnutý s ohľadom na vaše ciele a potreby vašich zákazníkov.
                            </p>
                            <p className="text-muted-foreground text-lg">
                                Našim cieľom je vytvoriť digitálnu vizitku, ktorá vás bude dôstojne reprezentovať a pomôže vám rásť.
                            </p>
                        </div>
                        <div>
                             <Image src="https://placehold.co/800x600.png" alt="Moderné webové stránky" width={800} height={600} className="rounded-lg shadow-2xl" data-ai-hint="modern website interface" />
                        </div>
                    </div>
                </div>
            </section>

             <section className="py-16 md:py-24 bg-secondary/30">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                         <div className="order-1 md:order-2">
                            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">E-shopy, ktoré predávajú</h2>
                            <p className="text-muted-foreground mb-4 text-lg">
                                Pre vaše online podnikanie vytvoríme e-shop na mieru, ktorý je pripravený na úspech. S platformami ako WooCommerce a Shopify vytvárame robustné a ľahko spravovateľné online obchody. Zameriavame sa na skvelý používateľský zážitok, bezproblémový nákupný proces a optimalizáciu pre mobilné zariadenia.
                            </p>
                            <p className="text-muted-foreground text-lg">
                                Od importu produktov až po integráciu platobných brán – postaráme sa o všetko, aby ste sa vy mohli sústrediť na predaj.
                            </p>
                        </div>
                        <div className="order-2 md:order-1">
                             <Image src="https://placehold.co/800x600.png" alt="E-shopy ktoré predávajú" width={800} height={600} className="rounded-lg shadow-2xl" data-ai-hint="e-commerce product page" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="font-headline text-3xl md:text-5xl font-bold">Pre koho sú naše služby ideálne?</h2>
                        <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">Naše riešenia sú flexibilné a prispôsobené pre širokú škálu klientov a projektov.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {idealFor.map((item, index) => (
                            <div key={index} className="bg-secondary/50 p-6 rounded-lg text-center border border-border/50 hover:border-primary/50 transition-colors">
                                <div className="mx-auto bg-primary/10 rounded-lg w-16 h-16 flex items-center justify-center mb-4">
                                    {item.icon}
                                </div>
                                <h3 className="font-headline text-xl font-bold mb-2">{item.title}</h3>
                                <p className="text-muted-foreground text-sm">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-secondary/30">
                <div className="container mx-auto px-4">
                     <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-6">Výhody našich riešení</h2>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <Code className="w-7 h-7 text-primary flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-bold text-lg">Flexibilita a rozšíriteľnosť</h3>
                                        <p className="text-muted-foreground">Otvorený ekosystém umožňuje takmer neobmedzené možnosti prispôsobenia a pridávania nových funkcií.</p>
                                    </div>
                                </div>
                                 <div className="flex items-start gap-4">
                                    <Smartphone className="w-7 h-7 text-primary flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-bold text-lg">Responzívny dizajn</h3>
                                        <p className="text-muted-foreground">Všetky naše weby sú plne responzívne a vyzerajú skvele na všetkých zariadeniach – od mobilov po veľké monitory.</p>
                                    </div>
                                </div>
                                 <div className="flex items-start gap-4">
                                    <Search className="w-7 h-7 text-primary flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-bold text-lg">SEO-Friendly</h3>
                                        <p className="text-muted-foreground">Kladieme dôraz na technickú SEO optimalizáciu, aby vás zákazníci ľahko našli vo vyhľadávačoch.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                             <Image src="https://placehold.co/600x600.png" alt="Výhody" width={500} height={500} className="rounded-lg shadow-2xl" data-ai-hint="glowing cube abstract" />
                        </div>
                    </div>
                </div>
            </section>

             <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 max-w-4xl">
                     <div className="text-center mb-12">
                        <h2 className="font-headline text-3xl md:text-5xl font-bold">Naše služby v tejto oblasti</h2>
                         <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">Poskytujeme komplexné služby od návrhu až po dlhodobú podporu a rozvoj vášho webu.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                        {servicesList.map((service, index) => (
                           <div key={index} className="flex items-center gap-3 text-lg">
                               <Check className="w-5 h-5 text-primary flex-shrink-0" />
                               <span>{service}</span>
                           </div>
                        ))}
                    </div>
                     <div className="text-center mt-12">
                        <Button asChild size="lg" variant="outline" className="rounded-full font-semibold border-2">
                           <Link href="/custom-programming">
                              Viac o programovaní na mieru <ArrowRight className="ml-2 h-5 w-5" />
                           </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );

    