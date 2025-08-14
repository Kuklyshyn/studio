import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    title: "5 trendov vo web dizajne na rok 2024",
    description: "Pozrite sa na najnovšie trendy, ktoré budú formovať webový dizajn v nasledujúcom roku.",
    image: "https://placehold.co/600x400.png",
    hint: "abstract design",
    date: "15. jún 2024",
    author: "Jana Nováková",
  },
  {
    title: "Prečo je SEO kľúčové pre váš biznis?",
    description: "Zistite, ako môže optimalizácia pre vyhľadávače (SEO) dramaticky zvýšiť vašu online viditeľnosť a prilákať nových zákazníkov.",
    image: "https://placehold.co/600x400.png",
    hint: "analytics graph",
    date: "10. jún 2024",
    author: "Peter Malý",
  },
  {
    title: "Ako si vybrať správnu eCommerce platformu",
    description: "Porovnanie najpopulárnejších platforiem pre internetové obchody, ktoré vám pomôže urobiť správne rozhodnutie.",
    image: "https://placehold.co/600x400.png",
    hint: "online store",
    date: "5. jún 2024",
    author: "Jana Nováková",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Náš Blog
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600">
            Zostaňte v obraze s najnovšími trendmi a tipmi z oblasti webu a marketingu.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="flex flex-col shadow-lg">
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
                    <CardTitle className="font-headline text-xl font-bold mb-2">{post.title}</CardTitle>
                    <CardDescription>{post.description}</CardDescription>
                    <div className="text-sm text-gray-500 mt-4">
                        <span>{post.date}</span> &bull; <span>{post.author}</span>
                    </div>
                </div>
                <CardFooter>
                    <Button asChild variant="link" className="p-0">
                        <Link href="#">
                            Čítať viac <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
