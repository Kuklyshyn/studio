
import { blogPosts } from '../posts';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Link } from '@/i18n';
import { ArrowLeft } from 'lucide-react';
import { useTranslations } from 'next-intl';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const t = useTranslations("BlogPostPage");
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <Link href="/blog" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span>{t('back')}</span>
        </Link>
        <h1 className="font-headline text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center space-x-4 text-muted-foreground mb-8">
          <span>{t('by')} {post.author}</span>
          <span>&bull;</span>
          <span>{post.date}</span>
        </div>
        
        <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden">
            <Image
                src={post.image}
                alt={post.title}
                layout="fill"
                objectFit="cover"
                data-ai-hint={post.hint}
            />
        </div>

        <div className="prose prose-invert lg:prose-xl max-w-none mx-auto text-foreground/90">
          <p className="lead text-xl text-muted-foreground mb-8">{post.description}</p>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </div>
    </div>
  );
}

// Add some basic styling for the prose content
const styles = `
.prose h2 {
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 700;
  margin-top: 2.5em;
  margin-bottom: 1em;
}
.prose h3 {
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 700;
    margin-top: 2em;
    margin-bottom: 1em;
}
.prose p {
  line-height: 1.75;
  margin-bottom: 1.25em;
}
.prose a {
  color: hsl(var(--primary));
  text-decoration: none;
}
.prose a:hover {
    text-decoration: underline;
}
.prose ul {
    list-style-type: disc;
    padding-left: 1.5em;
    margin-bottom: 1.25em;
}
.prose li {
    margin-bottom: 0.5em;
}
`;

export const Head = () => <style>{styles}</style>;

    