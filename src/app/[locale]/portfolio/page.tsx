import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { useLocale, useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Link } from '@/i18n';
import { localizeProject, portfolioProjects } from "./projects";
import { pageMetadata, type Locale } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Seo.portfolio" });

  return pageMetadata({ locale: locale as Locale, path: "/portfolio", title: t("title"), description: t("description") });
}

export default function PortfolioPage() {
  const t = useTranslations("PortfolioPage");
  const locale = useLocale();
  const projects = portfolioProjects.map((project) => localizeProject(project, locale));

  return (
    <>
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl md:text-6xl font-bold mb-4">
            {t('heroTitle')}
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
            {t('heroSubtitle')}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.slug} className="flex flex-col bg-secondary/50 border-border/50 hover:border-primary/50 transition-all duration-300 group">
                <Link href={{ pathname: "/portfolio/[slug]", params: { slug: project.slug } }} className="flex flex-col flex-grow">
                  <CardHeader className="p-0">
                     <div className="overflow-hidden rounded-t-lg">
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={600}
                          height={400}
                          data-ai-hint={project.hint}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                     </div>
                  </CardHeader>
                  <div className="p-6 flex flex-col flex-grow">
                      <h2 className="font-headline text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h2>
                      <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                      </div>
                      <CardDescription className="text-muted-foreground flex-grow line-clamp-3">{project.description}</CardDescription>
                  </div>
                  <CardFooter>
                      <span className="flex items-center text-primary font-semibold">
                          {t('viewProject')} <ArrowRight className="ml-2 h-4 w-4" />
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
