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

export function TechLogos() {
  return (
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
  );
}
