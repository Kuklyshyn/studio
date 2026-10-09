import { blogPosts } from '../posts';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Link } from '@/i18n';
import { ArrowLeft } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { absoluteUrl, blogPostingJsonLd, breadcrumbJsonLd, pageMetadata, type Locale } from '@/lib/seo';
import { LOCALES, isLocale } from '@/lib/site';
import { JsonLd } from '@/components/json-ld';
import { ProseStyles } from '@/components/prose-styles';
import { Reveal } from "@/components/reveal";
import { ReadingProgress } from "@/components/reading-progress";

export const dynamicParams = false;

export async function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    blogPosts[locale].map((blogPost) => ({
      locale,
      slug: blogPost.slug,
    }))
  );
}

function findPost(locale: string, slug: string) {
  if (!isLocale(locale)) return undefined;
  return blogPosts[locale].find((post) => post.slug === slug);
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string; locale: string }> }): Promise<Metadata> {
  const { slug, locale } = await params;
  const post = findPost(locale, slug);

  if (!post) {
    return {};
  }

  return pageMetadata({
    locale: locale as Locale,
    path: `/blog/${slug}`,
    title: post.seoTitle,
    description: post.description,
    image: post.image,
    publishedTime: post.isoDate,
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string; locale: string }> }) {
  const { slug, locale } = await params;
  const t = await getTranslations({ locale, namespace: 'BlogPostPage' });
  const tHeader = await getTranslations({ locale, namespace: 'Header' });
  const post = findPost(locale, slug);

  if (!post) {
    notFound();
  }

  const url = absoluteUrl(`/${locale}/blog/${slug}`);

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <ProseStyles />
      <ReadingProgress />
      <JsonLd
        data={[
          blogPostingJsonLd({
            locale: locale as Locale,
            url,
            headline: post.title,
            description: post.description,
            image: post.image,
            publishedAt: post.isoDate,
          }),
          breadcrumbJsonLd([
            { name: tHeader('home'), url: absoluteUrl(`/${locale}`) },
            { name: tHeader('blog'), url: absoluteUrl(`/${locale}/blog`) },
            { name: post.title, url },
          ]),
        ]}
      />
      <div className="max-w-4xl mx-auto">
        <Link href="/blog" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span>{t('back')}</span>
        </Link>
        <Reveal>
          <h1 className="font-headline text-4xl md:text-5xl font-bold mb-4 leading-tight">{post.title}</h1>
          <div className="flex items-center space-x-4 text-muted-foreground mb-8">
            <span>{t('by')} {post.author}</span>
            <span>&bull;</span>
            <span>{post.date}</span>
          </div>
        </Reveal>

        <Reveal delay={120}>
        <div className="relative w-full aspect-[16/9] md:h-96 md:aspect-auto mb-8 rounded-2xl overflow-hidden">
            <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(min-width: 896px) 896px, 100vw"
                className="object-cover"
                data-ai-hint={post.hint}
            />
        </div>
        </Reveal>

        <Reveal>
        <div className="prose prose-invert lg:prose-xl max-w-none mx-auto text-foreground/90">
          <p className="lead text-xl text-muted-foreground mb-8">{post.description}</p>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
        </Reveal>
      </div>
    </div>
  );
}
