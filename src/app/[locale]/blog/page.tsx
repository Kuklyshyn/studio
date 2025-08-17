
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Link } from '@/i18n';
import { blogPosts } from "./posts";
import { useTranslations } from "next-intl";


export default function BlogPage() {
  const t = useTranslations("BlogPage");

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
            {blogPosts.map((post) => (
              <Card key={post.slug} className="flex flex-col bg-secondary/50 border-border/50 hover:border-primary/50 transition-all duration-300 group">
                <Link href={`/blog/${post.slug}`} className="flex flex-col flex-grow">
                  <CardHeader className="p-0">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={600}
                      height={400}
                      data-ai-hint={post.hint}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                  </CardHeader>
                  <div className="p-6 flex flex-col flex-grow">
                      <CardTitle className="font-headline text-xl font-bold mb-2 group-hover:text-primary transition-colors">{post.title}</CardTitle>
                      <CardDescription className="text-muted-foreground line-clamp-3">{post.description}</CardDescription>
                      <div className="text-sm text-muted-foreground mt-4">
                          <span>{post.date}</span> &bull; <span>{post.author}</span>
                      </div>
                  </div>
                  <CardFooter>
                      <span className="flex items-center text-primary font-semibold">
                          {t('readMore')} <ArrowRight className="ml-2 h-4 w-4" />
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

    