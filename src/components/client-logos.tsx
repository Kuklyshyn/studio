import { clients } from "../../content/clients";

// Renders nothing until clients have agreed to show their logos in content/clients.ts.
export function ClientLogos() {
  if (clients.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center justify-center gap-10 opacity-70 grayscale transition-all duration-500 hover:grayscale-0">
      {clients.map((client) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img key={client.name} src={client.logo} alt={client.name} className="h-8 w-auto object-contain" loading="lazy" />
      ))}
    </div>
  );
}
