import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { portfolioProjects } from "./projects";


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
            {portfolioProjects.map((project, index) => (
              <Card key={index} className="flex flex-col">
                <Link href={`/portfolio/${project.slug}`} className="flex flex-col flex-grow group">
                  <CardHeader className="p-0">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={400}
                      data-ai-hint={project.hint}
                      className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                    />
                  </CardHeader>
                  <div className="p-6 flex flex-col flex-grow">
                      <CardTitle className="font-headline text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</CardTitle>
                      <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                      </div>
                      <CardDescription className="text-muted-foreground flex-grow">{project.description}</CardDescription>
                  </div>
                  <CardFooter>
                      <span className="flex items-center text-primary font-semibold">
                          View Project <ArrowRight className="ml-2 h-4 w-4" />
                      </span>
                  </CardFooter>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
