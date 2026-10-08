import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { localizeProject, portfolioProjects } from '../projects';
import { absoluteUrl, breadcrumbJsonLd, pageMetadata, type Locale } from '@/lib/seo';
import { LOCALES, isLocale } from '@/lib/site';
import { JsonLd } from '@/components/json-ld';
import { ProseStyles } from '@/components/prose-styles';

export const dynamicParams = false;

export async function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    portfolioProjects.map((project) => ({
      locale,
      slug: project.slug,
    }))
  );
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string; locale: string }> }): Promise<Metadata> {
  const { slug, locale } = await params;
  const project = portfolioProjects.find((p) => p.slug === slug);

  if (!project || !isLocale(locale)) {
    return {};
  }

  const localized = localizeProject(project, locale);

  return pageMetadata({
    locale,
    path: `/portfolio/${slug}`,
    title: localized.title,
    description: localized.description,
    image: project.image,
  });
}

export default async function PortfolioProjectPage({
  params
}: {
  params: Promise<{ slug: string; locale: string }>
}) {
  const { slug, locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'PortfolioDetailsPage' });
  const tHeader = await getTranslations({ locale, namespace: 'Header' });
  const found = portfolioProjects.find((p) => p.slug === slug);

  if (!found) {
    notFound();
  }

  const project = localizeProject(found, locale);
  const url = absoluteUrl(`/${locale}/portfolio/${slug}`);

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <ProseStyles />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: tHeader('home'), url: absoluteUrl(`/${locale}`) },
          { name: tHeader('portfolio'), url: absoluteUrl(`/${locale}/portfolio`) },
          { name: project.title, url },
        ])}
      />
      <div className="max-w-4xl mx-auto">
        <Link href="/portfolio" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span>{t('back')}</span>
        </Link>
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">{t('industry')}: {project.industry}</p>
        <h1 className="font-headline text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>

        <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden shadow-xl">
            <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(min-width: 896px) 896px, 100vw"
                className="object-cover"
                data-ai-hint={project.hint}
            />
        </div>

        <div className="prose prose-invert lg:prose-xl max-w-none mx-auto text-foreground/90">
          <p className="lead text-xl text-muted-foreground mb-8">{project.description}</p>
          {project.problem && (
            <>
              <h2>{t('problem')}</h2>
              <p>{project.problem}</p>
            </>
          )}
          <h2>{t('solution')}</h2>
          <div dangerouslySetInnerHTML={{ __html: project.content }} />
          {project.results && (
            <>
              <h2>{t('results')}</h2>
              <p>{project.results}</p>
            </>
          )}
        </div>

        <div className="mt-10">
          <h2 className="font-headline text-2xl font-bold mb-4">{t('technologies')}</h2>
          <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
          </div>
        </div>

        {project.quote && (
          <figure className="my-10 border-l-4 border-primary pl-6">
            <blockquote className="text-lg italic text-foreground/90">&ldquo;{project.quote.text}&rdquo;</blockquote>
            <figcaption className="mt-3 text-sm text-muted-foreground">
              {project.quote.author}, {project.quote.role}
            </figcaption>
          </figure>
        )}

        {project.liveUrl && (
          <Button asChild variant="outline" size="lg" className="rounded-full font-semibold border-2">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              {t('liveSite')} <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        )}
      </div>
    </div>
  );
}
