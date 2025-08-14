import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "E-commerce Platform for Fashion Brand",
    description: "A complete e-commerce solution for a growing fashion brand, featuring a custom design, product management, and secure checkout. Built with Shopify and custom React components.",
    image: "https://placehold.co/600x400.png",
    hint: "fashion website",
    tags: ["E-commerce", "Shopify", "React", "UI/UX Design"],
    liveUrl: "#",
  },
  {
    title: "Corporate Website for Tech Startup",
    description: "A modern and professional website to showcase the services and portfolio of a B2B technology startup. Focused on lead generation and clear communication.",
    image: "https://placehold.co/600x400.png",
    hint: "corporate website",
    tags: ["Web Development", "Next.js", "Lead Generation"],
    liveUrl: "#",
  },
  {
    title: "Mobile App for Online Learning",
    description: "A cross-platform mobile application for an online learning platform, enabling students to access courses, track progress, and interact with instructors on the go.",
    image: "https://placehold.co/600x400.png",
    hint: "mobile application",
    tags: ["Mobile App", "React Native", "UI/UX Design", "API Integration"],
    liveUrl: "#",
  },
    {
    title: "SaaS Dashboard for Data Analytics",
    description: "A complex data visualization dashboard for a SaaS product, providing users with actionable insights through interactive charts and reports. Built with React and D3.js.",
    image: "https://placehold.co/600x400.png",
    hint: "dashboard analytics",
    tags: ["SaaS", "React", "Data Visualization", "D3.js"],
    liveUrl: "#",
  },
  {
    title: "Marketing Website for a Local Restaurant",
    description: "A visually appealing website to attract new customers, showcasing the menu, gallery, and online reservation system. Optimized for local SEO.",
    image: "https://placehold.co/600x400.png",
    hint: "restaurant website",
    tags: ["Web Design", "Local SEO", "Wordpress"],
    liveUrl: "#",
  },
  {
    title: "Blog & Content Hub for a Marketing Agency",
    description: "A content-focused platform designed to establish thought leadership and drive organic traffic through high-quality articles, guides, and case studies.",
    image: "https://placehold.co/600x400.png",
    hint: "blog website",
    tags: ["Content Marketing", "SEO", "Next.js"],
    liveUrl: "#",
  },
];

export default function PortfolioPage() {
  return (
    <>
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl md:text-6xl font-bold mb-4">
            Our Portfolio
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
            Take a look at some of the projects we're proud of.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader className="p-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    data-ai-hint={project.hint}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <div className="p-6 flex flex-col flex-grow">
                    <CardTitle className="font-headline text-xl font-bold mb-2">{project.title}</CardTitle>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                    </div>
                    <CardDescription className="text-muted-foreground flex-grow">{project.description}</CardDescription>
                </div>
                <CardFooter>
                    <Button asChild variant="link" className="p-0">
                        <Link href={project.liveUrl}>
                            View Project <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
