import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Link } from '@/i18n';
import { ArrowLeft } from 'lucide-react';
import { portfolioProjects } from '../projects';
import { getTranslations } from 'next-intl/server';

export const dynamicParams = false;

export async function generateStaticParams() {
  const locales = ['en', 'uk']; // додайте ваші локалі
  
  return locales.flatMap((locale) =>
    portfolioProjects.map((project) => ({
      locale,
      slug: project.slug,
    }))
  );
}

export default async function PortfolioProjectPage({ 
  params 
}: { 
  params: Promise<{ slug: string; locale: string }> 
}) {
  const { slug, locale } = await params;
  const t = await getTranslations({ locale, namespace: 'PortfolioDetailsPage' });
  const project = portfolioProjects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <Link href="/portfolio" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span>{t('back')}</span>
        </Link>
        <h1 className="font-headline text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
        
        <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
        </div>
        
        <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden shadow-xl">
            <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                data-ai-hint={project.hint}
            />
        </div>
        
        <div className="prose prose-invert lg:prose-xl max-w-none mx-auto text-foreground/90">
          <p className="lead text-xl text-muted-foreground mb-8">{project.description}</p>
          <div dangerouslySetInnerHTML={{ __html: project.content }} />
        </div>
      </div>
    </div>
  );
}