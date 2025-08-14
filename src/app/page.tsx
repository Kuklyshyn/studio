import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Code2,
  LifeBuoy,
  Megaphone,
  Palette,
  ShoppingCart,
  Users,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    icon: <Palette className="w-8 h-8 text-primary" />,
    title: "Design",
    description: "Návrh dizajnu, ktorý bude presne vyhovovať vám.",
  },
  {
    icon: <Code2 className="w-8 h-8 text-primary" />,
    title: "Development",
    description: "Vývoj technických riešení s kvalitnými a modernými prístupmi na trhu.",
  },
  {
    icon: <Megaphone className="w-8 h-8 text-primary" />,
    title: "Marketing & PR",
    description: "Nastavenie marketingových stratégií a ich realizácia v praxi.",
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Social Media",
    description: "Pripojenie, nastavenie a integrácia so sociálnymi sieťami.",
  },
  {
    icon: <ShoppingCart className="w-8 h-8 text-primary" />,
    title: "eCommerce",
    description: "Vývoj internetových obchodov rôznej zložitosti.",
  },
  {
    icon: <LifeBuoy className="w-8 h-8 text-primary" />,
    title: "Help & Support",
    description: "Konzultácie, výber správnych riešení a technická podpora.",
  },
];

const portfolio = [
  { src: "https://placehold.co/600x400.png", alt: "Project 1", hint: "website screenshot" },
  { src: "https://placehold.co/600x400.png", alt: "Project 2", hint: "dashboard interface" },
  { src: "https://placehold.co/600x400.png", alt: "Project 3", hint: "mobile app" },
];

const stats = [
  { value: "10+", label: "spokojných zákazníkov" },
  { value: "20+", label: "dokončené projekty" },
  { value: "5+", label: "členov tímu" },
];

const whyUs = [
    { title: "Skúsenosť a odbornosť", description: "Tím spojil odborníkov, ktorí roky dobyli internetový marketing." },
    { title: "Odkaz na výsledok", description: "Stanovíte si ciele a vyjadríte želané výsledky – vynakladáme maximálne úsilie na dosiahnutie." },
    { title: "Skvelé zážitky", description: "Využívame všetky metódy, prístupy a nástroje moderného internetového marketingu." },
];

const testimonials = [
    { name: "Igor", role: "CMO, SIRV.", quote: "Spolupráca bola efektívna a priniesla výrazné zlepšenie výsledkov pri získavaní nových zákazníkov.", avatar: "https://placehold.co/100x100.png", hint: "man portrait" },
    { name: "Meg Johanson", role: "Owner", quote: "Rýchlo mi spravili vstupnú stránku.", avatar: "https://placehold.co/100x100.png", hint: "woman portrait" },
    { name: "Mark", role: "Owner", quote: "Poskytli mi kvalitnú pomoc s rozvojom internetového obchodu.", avatar: "https://placehold.co/100x100.png", hint: "person smiling" },
    { name: "Kristina Jones", role: "Marketolog", quote: "Spolupracovali sme na projekte širokej marketingovej kampane.", avatar: "https://placehold.co/100x100.png", hint: "woman professional" },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <section id="home" className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-headline text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Potrebujete webovú stránku?
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 mb-8">
              Vytvárame moderné webové stránky a mobilné aplikácie na mieru.
              Pomôžeme vám s efektívnym SEO a online marketingom, aby váš biznis
              rástol. Spoľahnite sa na odborníkov!
            </p>
            <Button asChild size="lg">
              <Link href="/contact">
                Začíname <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

        <section id="services" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">
              Ako vám môžeme pomôcť?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="mx-auto bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                      {service.icon}
                    </div>
                    <CardTitle className="font-headline text-xl font-bold">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="portfolio" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">
              Portfolio
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {portfolio.map((item, index) => (
                <Card key={index} className="overflow-hidden group">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={600}
                    height={400}
                    data-ai-hint={item.hint}
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4">
                <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">Čísla hovoria samy za seba!</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <div key={index}>
                            <p className="font-headline text-5xl font-bold">{stat.value}</p>
                            <p className="text-lg opacity-80">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section id="why-us" className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">Prečo práve my?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {whyUs.map((item, index) => (
                        <Card key={index} className="text-center shadow-lg p-6">
                            <CardTitle className="font-headline text-xl font-bold mb-2">{item.title}</CardTitle>
                            <CardContent className="p-0">
                                <p className="text-gray-600">{item.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        <section id="testimonials" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">
              Recenzie
            </h2>
            <Carousel
              opts={{ align: "start", loop: true }}
              className="w-full max-w-4xl mx-auto"
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1 h-full">
                      <Card className="flex flex-col justify-between h-full shadow-lg p-6">
                        <CardContent className="p-0 pb-6">
                          <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                        </CardContent>
                        <div className="flex items-center">
                          <Avatar>
                            <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.hint}/>
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div className="ml-4">
                            <p className="font-bold">{testimonial.name}</p>
                            <p className="text-sm text-gray-500">{testimonial.role}</p>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>

        <section className="bg-accent text-accent-foreground py-16 md:py-24">
            <div className="container mx-auto px-4 text-center">
                <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">Pripravení začať?</h2>
                <p className="max-w-2xl mx-auto text-lg mb-8">Kontaktujte nás a spoločne posunieme váš biznis na novú úroveň.</p>
                <Button asChild size="lg" variant="secondary" className="bg-white text-accent hover:bg-gray-100">
                    <Link href="/contact">Požiadať o cenovú ponuku</Link>
                </Button>
            </div>
        </section>
      </main>
    </div>
  );
}
