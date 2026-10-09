import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Link } from '@/i18n';
import { Reveal } from "@/components/reveal";
import { PageHero } from "@/components/page-hero";
import { blogPosts } from "./posts";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { pageMetadata, type Locale } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Seo.blog" });

  return pageMetadata({ locale: locale as Locale, path: "/blog", title: t("title"), description: t("description") });
}

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("BlogPage");
  const posts = blogPosts[locale as keyof typeof blogPosts] as any[];
  const [featured, ...rest] = posts;

  return (
    <>
      <PageHero title={t('heroTitle')} subtitle={t('heroSubtitle')} />

      <section className="pb-20 md:pb-28">
        <div className="container mx-auto px-4">
          {featured && (
            <Reveal>
              <Link
                href={{ pathname: "/blog/[slug]", params: { slug: featured.slug } }}
                className="group grid gap-8 overflow-hidden rounded-3xl border border-border/60 bg-secondary/30 transition-colors duration-500 hover:border-primary/40 md:grid-cols-2"
              >
                <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto md:min-h-[360px]">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    priority
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-col justify-center p-8 md:p-12">
                  <p className="text-sm text-muted-foreground">
                    <span>{featured.date}</span> &middot; <span>{featured.author}</span>
                  </p>
                  <h2 className="mt-4 font-headline text-2xl font-bold leading-snug transition-colors group-hover:text-primary md:text-3xl">
                    {featured.title}
                  </h2>
                  <p className="mt-4 line-clamp-3 leading-relaxed text-muted-foreground">{featured.description}</p>
                  <span className="mt-8 inline-flex items-center font-semibold text-primary">
                    {t('readMore')} <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          )}

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post: any, index: number) => (
              <Reveal key={post.slug} delay={(index % 3) * 100} className="h-full">
                <Link
                  href={{ pathname: "/blog/[slug]", params: { slug: post.slug } }}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-secondary/30 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-xs text-muted-foreground">
                      <span>{post.date}</span> &middot; <span>{post.author}</span>
                    </p>
                    <h3 className="mt-3 font-headline text-xl font-bold leading-snug transition-colors group-hover:text-primary">
                      {post.title}
                    </h3>
                    <p className="mt-3 line-clamp-3 flex-1 leading-relaxed text-muted-foreground">{post.description}</p>
                    <span className="mt-6 inline-flex items-center text-sm font-semibold text-primary">
                      {t('readMore')} <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
