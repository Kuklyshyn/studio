import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ProjectCard } from "@/components/project-card";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
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
      <PageHero title={t('heroTitle')} subtitle={t('heroSubtitle')} />

      <section className="pb-20 md:pb-28">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Reveal key={project.slug} delay={(index % 3) * 100} className="h-full">
              <ProjectCard
                slug={project.slug}
                index={index}
                industry={project.industry}
                title={project.title}
                description={project.description}
                results={project.results}
                tags={project.tags}
                viewLabel={t('viewProject')}
              />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
