import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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
  Search,
  Paintbrush,
  Rocket,
  ShieldCheck,
  Megaphone,
  Users,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    icon: <Paintbrush className="w-8 h-8 text-primary" />,
    title: "Web Design",
    description: "Creating visually stunning and user-friendly designs that captivate your audience and reflect your brand's essence.",
  },
  {
    icon: <Code2 className="w-8 h-8 text-primary" />,
    title: "Web Development",
    description: "Building robust, scalable, and high-performance websites using the latest technologies for a seamless user experience.",
  },
  {
    icon: <Megaphone className="w-8 h-8 text-primary" />,
    title: "Digital Marketing",
    description: "Executing data-driven marketing strategies to increase your online visibility, engagement, and conversions.",
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Social Media",
    description: "Managing your social media presence to build a strong community and connect with your audience effectively.",
  },
  {
    icon: <Search className="w-8 h-8 text-primary" />,
    title: "SEO Optimization",
    description: "Improving your search engine rankings to drive organic traffic and attract qualified leads to your website.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: "Support & Maintenance",
    description: "Providing ongoing support and maintenance to ensure your website remains secure, up-to-date, and performs optimally.",
  },
];

const portfolio = [
  { src: "https://placehold.co/600x400.png", alt: "Project 1", hint: "website screenshot" },
  { src: "https://placehold.co/600x400.png", alt: "Project 2", hint: "dashboard interface" },
  { src: "https://placehold.co/600x400.png", alt: "Project 3", hint: "mobile app" },
];

const stats = [
  { value: "50+", label: "Happy Clients" },
  { value: "120+", label: "Projects Completed" },
  { value: "10+", label: "Team Experts" },
];

const whyUs = [
    { title: "Expertise & Experience", description: "Our team consists of seasoned professionals who have mastered the art of digital marketing and web development." },
    { title: "Results-Driven Approach", description: "We set clear goals and use data-driven strategies to deliver measurable results and achieve your business objectives." },
    { title: "Innovative Solutions", description: "We leverage cutting-edge technologies and creative approaches to provide innovative solutions that set you apart." },
];

const processSteps = [
    {
        icon: <Search className="w-10 h-10 text-primary" />,
        title: "1. Discovery & Strategy",
        description: "We start by understanding your business, goals, and target audience to create a tailored strategy for success.",
    },
    {
        icon: <Paintbrush className="w-10 h-10 text-primary" />,
        title: "2. Design & Prototyping",
        description: "Our creative team designs a stunning, user-friendly interface and creates interactive prototypes for your feedback.",
    },
    {
        icon: <Code2 className="w-10 h-10 text-primary" />,
        title: "3. Development & Testing",
        description: "Our developers bring the design to life with clean, efficient code and rigorously test for quality and performance.",
    },
    {
        icon: <Rocket className="w-10 h-10 text-primary" />,
        title: "4. Launch & Optimization",
        description: "After the final review, we launch your project and continuously monitor its performance for optimization opportunities.",
    },
];

const testimonials = [
    { name: "Igor", role: "CMO, SIRV.", quote: "The collaboration was highly effective and resulted in a significant improvement in our customer acquisition.", avatar: "https://placehold.co/100x100.png", hint: "man portrait" },
    { name: "Meg Johanson", role: "Owner", quote: "They quickly created a beautiful and functional landing page for my business.", avatar: "https://placehold.co/100x100.png", hint: "woman portrait" },
    { name: "Mark", role: "Owner", quote: "They provided excellent support in developing my e-commerce store.", avatar: "https://placehold.co/100x100.png", hint: "person smiling" },
    { name: "Kristina Jones", role: "Marketing Manager", quote: "We collaborated on a large-scale marketing campaign that exceeded all our expectations.", avatar: "https://placehold.co/100x100.png", hint: "woman professional" },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <section id="home" className="py-20 md:py-32">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-headline text-4xl md:text-6xl font-bold mb-4">
              Need a Website That Converts?
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-8">
              We build modern, tailor-made websites and mobile apps. We'll help you with effective SEO and online marketing to grow your business. Trust the experts!
            </p>
            <Button asChild size="lg">
              <Link href="/contact">
                Let's Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

        <section id="services" className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">
              How Can We Help You?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border-transparent hover:border-primary">
                  <CardHeader>
                    <div className="mx-auto bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                      {service.icon}
                    </div>
                    <CardTitle className="font-headline text-xl font-bold">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="portfolio" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">
              Our Work
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {portfolio.map((item, index) => (
                <Card key={index} className="overflow-hidden group rounded-lg">
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
            <div className="text-center mt-12">
              <Button asChild size="lg">
                <Link href="/portfolio">
                  View Full Portfolio <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4">
                <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">The Numbers Speak for Themselves!</h2>
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
                <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Us?</h2>
                <div className="max-w-3xl mx-auto">
                    <Accordion type="single" collapsible defaultValue="item-0">
                        {whyUs.map((item, index) => (
                             <AccordionItem value={`item-${index}`} key={index}>
                                <AccordionTrigger className="font-headline text-xl font-bold">{item.title}</AccordionTrigger>
                                <AccordionContent className="text-muted-foreground text-base">
                                    {item.description}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
        
        <section id="process" className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">Our Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <Card key={index} className="text-center p-6 border-transparent">
                  <div className="mx-auto bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mb-4">
                    {step.icon}
                  </div>
                  <CardTitle className="font-headline text-xl font-bold mb-2">{step.title}</CardTitle>
                  <CardContent className="p-0">
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">
              What Our Clients Say
            </h2>
            <Carousel
              opts={{ align: "start", loop: true }}
              className="w-full max-w-4xl mx-auto"
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2">
                    <div className="p-1 h-full">
                      <Card className="flex flex-col justify-between h-full p-6">
                        <CardContent className="p-0 pb-6">
                          <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                        </CardContent>
                        <div className="flex items-center">
                          <Avatar>
                            <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.hint}/>
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div className="ml-4">
                            <p className="font-bold">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
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

        <section className="bg-secondary py-16 md:py-24">
            <div className="container mx-auto px-4 text-center">
                <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
                <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-8">Contact us today and let's take your business to the next level together.</p>
                <Button asChild size="lg">
                    <Link href="/contact">Request a Quote</Link>
                </Button>
            </div>
        </section>
      </main>
    </div>
  );
}
