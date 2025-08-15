import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Check, Code2, Layers, Megaphone, MoveRight, Palette, Rocket, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    icon: <Palette className="w-8 h-8 text-primary" />,
    title: "Tvorba web stránok",
    description: "Vytvoríme vám modernú a responzívnu webovú stránku, ktorá zaujme a predá.",
  },
  {
    icon: <Code2 className="w-8 h-8 text-primary" />,
    title: "Tvorba E-shopov",
    description: "Vyvinieme vám e-shop na mieru, ktorý bude rýchly, bezpečný a pripravený na vaše podnikanie.",
  },
  {
    icon: <Megaphone className="w-8 h-8 text-primary" />,
    title: "Digitálny Marketing",
    description: "Zviditeľníme vašu značku online a privedieme vám nových zákazníkov vďaka efektívnym stratégiám.",
  },
];

const portfolio = [
  { src: "https://placehold.co/600x800.png", alt: "Project 1", hint: "website design abstract" },
  { src: "https://placehold.co/600x800.png", alt: "Project 2", hint: "dashboard analytics dark" },
  { src: "https://placehold.co/600x800.png", alt: "Project 3", hint: "mobile app finance" },
];

const processSteps = [
    { title: "Konzultácia & Analýza", description: "Na začiatku je dôležité pochopiť vaše ciele a potreby. Zanalyzujeme vašu konkurenciu a navrhneme stratégiu." },
    { title: "Návrh & Dizajn", description: "Vytvoríme moderný a pútavý dizajn, ktorý bude reprezentovať vašu značku a osloví vašu cieľovú skupinu." },
    { title: "Vývoj & Testovanie", description: "Náš tím skúsených programátorov premení dizajn na plne funkčný a responzívny web. Všetko dôkladne otestujeme." },
    { title: "Spustenie & Podpora", description: "Po vašom schválení web spustíme. Tým sa ale naša práca nekončí. Poskytujeme aj následnú podporu a údržbu." },
];

const whyUs = [
    "Individuálny prístup",
    "Moderné technológie",
    "Dodržiavame termíny",
    "Férové ceny",
    "Podpora a poradenstvo",
    "Zameranie na výsledky",
];

const technologies = [
    { name: "Next.js", src: "https://placehold.co/100x100.png", hint: "nextjs logo" },
    { name: "React", src: "https://placehold.co/100x100.png", hint: "react logo" },
    { name: "TypeScript", src: "https://placehold.co/100x100.png", hint: "typescript logo" },
    { name: "Tailwind CSS", src: "https://placehold.co/100x100.png", hint: "tailwind css logo" },
    { name: "Firebase", src: "https://placehold.co/100x100.png", hint: "firebase logo" },
    { name: "Node.js", src: "https://placehold.co/100x100.png", hint: "nodejs logo" },
];

const testimonials = [
    { name: "Martin Š.", role: "CEO, Firma.sk", quote: "Spolupráca s Moder bola naozaj skvelá. Vytvorili nám presne taký web, aký sme chceli. Rýchlo, profesionálne a za rozumnú cenu. Odporúčam!", avatar: "https://placehold.co/100x100.png", hint: "man portrait professional" },
    { name: "Jana N.", role: "Marketing Manager", quote: "Oceňujem proaktívny prístup a kreatívne nápady. Náš nový e-shop prekonal všetky očakávania a predaje nám stúpli o 40%.", avatar: "https://placehold.co/100x100.png", hint: "woman portrait smiling" },
];


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <section id="home" className="py-20 md:py-40 relative">
          <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:linear-gradient(to_bottom,white_50%,transparent_100%)]"></div>
          <div className="container mx-auto px-4 text-center relative">
            <h1 className="font-headline text-4xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70">
              Tvorba web stránok a e-shopov
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10">
              Vytvoríme vám modernú a ziskovú web stránku alebo e-shop, ktorý vás odlíši od konkurencie.
            </p>
            <Button asChild size="lg" className="rounded-full font-bold">
              <Link href="/contact">
                Nezáväzná cenová ponuka
              </Link>
            </Button>
          </div>
        </section>

        <section id="services" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="font-headline text-3xl md:text-5xl font-bold text-center mb-12">
              Naše Služby
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="bg-secondary/50 border-border/50 text-center p-8 transition-transform hover:-translate-y-2">
                    <div className="mx-auto bg-primary/10 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                      {service.icon}
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

        <section id="portfolio" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="font-headline text-3xl md:text-5xl font-bold">Naše Referencie</h2>
                <p className="text-muted-foreground mt-4 text-lg">Pozrite si ukážky našich prác.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {portfolio.map((item, index) => (
                <div key={index} className="overflow-hidden group rounded-lg">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={600}
                    height={800}
                    data-ai-hint={item.hint}
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button asChild variant="outline" size="lg" className="rounded-full font-semibold border-2">
                <Link href="/portfolio">
                  Zobraziť všetky projekty <MoveRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="process" className="py-16 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="font-headline text-3xl md:text-5xl font-bold">Náš Postup</h2>
                <p className="text-muted-foreground mt-4 text-lg">Kvalitný web je výsledkom dobre naplánovaného procesu.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {processSteps.map((step, index) => (
                    <div key={index} className="relative pl-8">
                        <div className="absolute left-0 top-1 text-primary font-bold text-3xl font-headline">0{index + 1}.</div>
                        <h3 className="font-headline text-xl font-bold mb-2">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                    </div>
                ))}
            </div>
          </div>
        </section>

        <section id="why-us" className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="font-headline text-3xl md:text-5xl font-bold mb-6">Prečo si vybrať nás?</h2>
                        <p className="text-muted-foreground text-lg mb-8">Sme tím nadšencov, ktorí milujú to, čo robia. Každý projekt je pre nás jedinečný a pristupujeme k nemu s maximálnym nasadením.</p>
                        <div className="grid grid-cols-2 gap-4">
                            {whyUs.map((item, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                                    <span className="font-semibold">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <Image src="https://placehold.co/800x800.png" alt="Why us" width={800} height={800} className="rounded-lg shadow-2xl" data-ai-hint="team collaborating modern" />
                    </div>
                </div>
            </div>
        </section>

        <section id="technologies" className="py-16 md:py-24 bg-secondary/30">
            <div className="container mx-auto px-4">
                <div className="flex justify-center items-center gap-4 mb-12">
                    <Layers className="w-10 h-10 text-primary" />
                    <h2 className="font-headline text-3xl md:text-5xl font-bold text-center">
                      Naše Technológie
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

        <section id="testimonials" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="font-headline text-3xl md:text-5xl font-bold text-center mb-12">
              Čo o nás hovoria klienti
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {testimonials.map((testimonial, index) => (
                  <Card key={index} className="bg-secondary/50 border-border/50 p-6">
                    <p className="text-muted-foreground italic mb-6">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                      <Image className="w-12 h-12 rounded-full" src={testimonial.avatar} alt={testimonial.name} width={100} height={100} data-ai-hint={testimonial.hint}/>
                      <div className="ml-4">
                        <p className="font-bold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </Card>
                ))}
            </div>
          </div>
        </section>

        <section className="bg-primary/90 py-16 md:py-24">
            <div className="container mx-auto px-4 text-center">
                <h2 className="font-headline text-3xl md:text-5xl font-bold text-primary-foreground mb-4">Máte záujem o naše služby?</h2>
                <p className="max-w-2xl mx-auto text-lg text-primary-foreground/80 mb-8">Neváhajte nás kontaktovať. Radi vám pripravíme nezáväznú cenovú ponuku na mieru.</p>
                <Button asChild size="lg" variant="secondary" className="rounded-full font-bold">
                    <Link href="/contact">Kontaktujte nás</Link>
                </Button>
            </div>
        </section>
      </main>
    </div>
  );
}
