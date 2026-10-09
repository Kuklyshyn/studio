// Logos are served from /public, so the page makes no requests to an icon API.
// The logos are from the CC0 "logos" set on Iconify (github.com/gilbarbara/logos).
const technologies = [
  { name: "Next.js", src: "/tech/nextjs-icon.svg" },
  { name: "React", src: "/tech/react.svg" },
  { name: "TypeScript", src: "/tech/typescript-icon.svg" },
  { name: "Node.js", src: "/tech/nodejs-icon.svg" },
  { name: "Firebase", src: "/tech/firebase-icon.svg" },
  { name: "PostgreSQL", src: "/tech/postgresql.svg" },
  { name: "Docker", src: "/tech/docker-icon.svg" },
  { name: "GraphQL", src: "/tech/graphql.svg" },
];

// Stack the developer works with daily, taken from real projects. Shown as text because it has no logo files.
const dailyStack = [
  "Vue 3",
  "Nuxt",
  "TypeScript",
  "Playwright",
  "WordPress",
  "WooCommerce",
  "Salesforce Commerce Cloud",
  "Laravel",
  "Java",
  "PHP",
  "Node.js",
];

export function TechLogos() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
        {technologies.map((tech) => (
          <div key={tech.name} className="text-center" title={tech.name}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={tech.src}
              alt={tech.name}
              width={64}
              height={64}
              loading="lazy"
              className="w-16 h-16 grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </div>
      <div className="marquee overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <ul className="marquee-track flex w-max gap-2">
          {[...dailyStack, ...dailyStack].map((name, i) => (
            <li key={`${name}-${i}`} aria-hidden={i >= dailyStack.length} className="whitespace-nowrap rounded-full border border-border px-4 py-1.5 text-sm text-muted-foreground">
              {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
