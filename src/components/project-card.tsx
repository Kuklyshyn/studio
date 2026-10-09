import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n";
import { Badge } from "@/components/ui/badge";
import { SpotlightCard } from "@/components/spotlight-card";

type ProjectCardProps = {
  slug: string;
  index: number;
  industry: string;
  title: string;
  description: string;
  results: string | null;
  tags: string[];
  viewLabel: string;
};

// A project card without pictures: number, sector, title, stack and summary. Used where no approved screenshot exists.
export function ProjectCard({ slug, index, industry, title, description, results, tags, viewLabel }: ProjectCardProps) {
  return (
    <SpotlightCard className="h-full rounded-2xl">
    <Link
      href={{ pathname: "/portfolio/[slug]", params: { slug } }}
      prefetch={false}
      className="group flex h-full flex-col rounded-2xl border border-border/60 bg-secondary/40 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_0_40px_-16px_hsl(var(--primary)/0.6)]"
    >
      <span className="font-headline text-5xl font-bold text-primary/25 transition-colors group-hover:text-primary/60">
        {String(index + 1).padStart(2, "0")}
      </span>
      <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-primary">{industry}</p>
      <h2 className="mt-2 font-headline text-xl font-bold leading-snug transition-colors group-hover:text-primary">{title}</h2>
      {results && <p className="mt-3 text-sm font-semibold">{results}</p>}
      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Badge key={tag} variant="secondary">
            {tag}
          </Badge>
        ))}
      </div>
      <p className="mt-5 line-clamp-3 flex-grow leading-relaxed text-muted-foreground">{description}</p>
      <span className="mt-6 inline-flex items-center font-semibold text-primary">
        {viewLabel} <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
    </SpotlightCard>
  );
}
