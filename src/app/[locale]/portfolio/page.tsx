import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ProjectCard } from "@/components/project-card";
import { localizeProject, portfolioProjects } from "./projects";
import { pageMetadata, type Locale } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Seo.portfolio" });

  return pageMetadata({ locale: locale as Locale, path: "/portfolio", title: t("title"), description: t("description") });
}

export default async function PortfolioPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("PortfolioPage");
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

      <section className="pb-20 md:pb-28">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                slug={project.slug}
                index={index}
                industry={project.industry}
                title={project.title}
                description={project.description}
                results={project.results}
                tags={project.tags}
                viewLabel={t('viewProject')}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
