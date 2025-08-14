import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    title: "5 Web Design Trends for 2024",
    description: "Discover the latest trends that will shape web design in the upcoming year.",
    image: "https://placehold.co/600x400.png",
    hint: "abstract design",
    date: "June 15, 2024",
    author: "Jane Doe",
  },
  {
    title: "Why SEO is Crucial for Your Business",
    description: "Learn how Search Engine Optimization (SEO) can dramatically boost your online visibility and attract new customers.",
    image: "https://placehold.co/600x400.png",
    hint: "analytics graph",
    date: "June 10, 2024",
    author: "John Smith",
  },
  {
    title: "Choosing the Right eCommerce Platform",
    description: "A comparison of the most popular eCommerce platforms to help you make an informed decision for your online store.",
    image: "https://placehold.co/600x400.png",
    hint: "online store",
    date: "June 5, 2024",
    author: "Jane Doe",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl md:text-6xl font-bold mb-4">
            Our Blog
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
            Stay updated with the latest trends and tips in web and marketing.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="flex flex-col">
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
                    <CardDescription className="text-muted-foreground">{post.description}</CardDescription>
                    <div className="text-sm text-muted-foreground mt-4">
                        <span>{post.date}</span> &bull; <span>{post.author}</span>
                    </div>
                </div>
                <CardFooter>
                    <Button asChild variant="link" className="p-0">
                        <Link href="#">
                            Read More <ArrowRight className="ml-2 h-4 w-4" />
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
