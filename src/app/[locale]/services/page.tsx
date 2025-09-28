

import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Code, LayoutTemplate, PenTool, Rocket, Search, ShoppingCart, Smartphone } from "lucide-react";
import Image from "next/image";
import { Link } from "@/i18n";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { portfolioProjects } from "../portfolio/projects";
import { useTranslations } from "next-intl";

const projectCategories = [...new Set(portfolioProjects.map(p => p.category))];

const benefitIcons = [<Code className="w-7 h-7 text-primary flex-shrink-0 mt-1" />, <Smartphone className="w-7 h-7 text-primary flex-shrink-0 mt-1" />, <Search className="w-7 h-7 text-primary flex-shrink-0 mt-1" />];

export default function ServicesPage() {
    const t = useTranslations("ServicesPage");
    const benefits = t.raw('benefits');
    const services = t.raw('services');

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
                    <div className="mt-8">
                        <Button asChild size="lg" className="rounded-full font-bold">
                            <Link href="/contact">{t('heroCta')}</Link>
                        </Button>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">{t('websitesTitle')}</h2>
                            <p className="text-muted-foreground mb-4 text-lg">
                                {t('websitesText1')}
                            </p>
                            <p className="text-muted-foreground text-lg">
                                {t('websitesText2')}
                            </p>
                        </div>
                        <div>
                             <Image src="https://supermykola.sirv.com/omni/9.jpg" alt={t('websitesTitle')} width={800} height={600} className="rounded-lg shadow-2xl" data-ai-hint="website interface design" />
                        </div>
                    </div>
                </div>
            </section>

             <section className="py-16 md:py-24 bg-secondary/30">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                         <div className="order-1 md:order-2">
                            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">{t('eshopsTitle')}</h2>
                            <p className="text-muted-foreground mb-4 text-lg">
                                {t('eshopsText1')}
                            </p>
                            <p className="text-muted-foreground text-lg">
                                {t('eshopsText2')}
                            </p>
                        </div>
                        <div className="order-2 md:order-1">
                             <Image src="https://supermykola.sirv.com/omni/12.jpg" alt={t('eshopsTitle')} width={800} height={600} className="rounded-lg shadow-2xl" data-ai-hint="online shopping checkout" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="font-headline text-3xl md:text-5xl font-bold">{t('projectsTitle')}</h2>
                        <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">{t('projectsSubtitle')}</p>
                    </div>
                    <Tabs defaultValue={projectCategories[0]} className="w-full">
                        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8 h-auto">
                            {projectCategories.map(category => (
                                <TabsTrigger key={category} value={category} className="py-2.5 text-base">{category}</TabsTrigger>
                            ))}
                        </TabsList>
                        {projectCategories.map(category => (
                            <TabsContent key={category} value={category}>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {portfolioProjects.filter(p => p.category === category).map(project => (
                                        <Link key={project.slug} href={`/portfolio/${project.slug}`} className="group">
                                            <Card className="overflow-hidden bg-secondary/50 border-border/50 hover:border-primary/50 transition-all">
                                                <div className="overflow-hidden">
                                                    <Image src={project.image} alt={project.title} width={600} height={400} data-ai-hint={project.hint} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                                                </div>
                                                <div className="p-4">
                                                    <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{project.title}</h3>
                                                </div>
                                            </Card>
                                        </Link>
                                    ))}
                                </div>
                            </TabsContent>
                        ))}
                    </Tabs>
                    <div className="text-center mt-12">
                         <Button asChild size="lg" className="rounded-full font-bold">
                            <Link href="/portfolio">{t('allProjects')}</Link>
                        </Button>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-secondary/30">
                <div className="container mx-auto px-4">
                     <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-6">{t('benefitsTitle')}</h2>
                            <div className="space-y-4">
                                {benefits.map((benefit: any, index: number) => (
                                    <div key={index} className="flex items-start gap-4">
                                        {benefitIcons[index]}
                                        <div>
                                            <h3 className="font-bold text-lg">{benefit.title}</h3>
                                            <p className="text-muted-foreground">{benefit.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-center">
                             <Image src="https://supermykola.sirv.com/omni/11.jpg" alt={t('benefitsTitle')} width={500} height={500} className="rounded-lg shadow-2xl" data-ai-hint="glowing cube technology" />
                        </div>
                    </div>
                </div>
            </section>

             <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 max-w-4xl">
                     <div className="text-center mb-12">
                        <h2 className="font-headline text-3xl md:text-5xl font-bold">{t('servicesListTitle')}</h2>
                         <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">{t('servicesListSubtitle')}</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                        {services.map((service: string, index: number) => (
                           <div key={index} className="flex items-center gap-3 text-lg">
                               <Check className="w-5 h-5 text-primary flex-shrink-0" />
                               <span>{service}</span>
                           </div>
                        ))}
                    </div>
                     <div className="text-center mt-12">
                        <Button asChild size="lg" variant="outline" className="rounded-full font-semibold border-2 border-border/50 hover:bg-primary/10 hover:border-primary/50">
                           <Link href="/custom-programming">
                              {t('customCta')} <ArrowRight className="ml-2 h-5 w-5" />
                           </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
}

    