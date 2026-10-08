import Image from "next/image";
import { Link } from "@/i18n";

type ProjectCardProps = {
  slug: string;
  title: string;
  industry: string;
  image: string;
  hint: string;
  sizes: string;
  // Shown on a badge over the cover. Null hides it.
  badge: string | null;
  // Set only for the first card that is visible without scrolling. It is the largest contentful paint candidate.
  priority?: boolean;
};

// One case study card with a 16:10 frame. The cover is a generated card, not a screenshot of client work.
export function ProjectCard({ slug, title, industry, image, hint, sizes, badge, priority = false }: ProjectCardProps) {
  return (
    <Link
      href={{ pathname: "/portfolio/[slug]", params: { slug } }}
      className="group flex flex-col overflow-hidden rounded-lg border border-border/50 bg-secondary/50 transition-colors hover:border-primary/50"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes={sizes}
          priority={priority}
          data-ai-hint={hint}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {badge && (
          <span className="absolute left-3 top-3 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-primary">
            {badge}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">{industry}</p>
        <h3 className="mt-2 font-headline text-xl font-bold transition-colors group-hover:text-primary">{title}</h3>
      </div>
    </Link>
  );
}
