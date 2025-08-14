import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const services = [
  {
    title: "Web Design & Development",
    description: "Vytvárame vizuálne príťažlivé a plne responzívne webové stránky, ktoré zaujmú vašich návštevníkov a premenia ich na zákazníkov.",
    features: ["UI/UX Design", "Vlastný WordPress vývoj", "Webové aplikácie", "Responzívny dizajn"]
  },
  {
    title: "eCommerce riešenia",
    description: "Budujeme výkonné internetové obchody, ktoré uľahčujú predaj vašich produktov a poskytujú skvelý nákupný zážitok.",
    features: ["Shopify & WooCommerce", "Platobné brány", "Správa produktov", "Optimalizácia konverzií"]
  },
  {
    title: "SEO a online marketing",
    description: "Zvýšime vašu viditeľnosť vo vyhľadávačoch a prilákame relevantnú návštevnosť prostredníctvom cielených marketingových kampaní.",
    features: ["On-page & Off-page SEO", "PPC kampane (Google Ads)", "Content Marketing", "Email Marketing"]
  },
    {
    title: "Správa sociálnych sietí",
    description: "Budujeme a spravujeme vašu prítomnosť na sociálnych sieťach, aby sme posilnili vašu značku a angažovali vašu komunitu.",
    features: ["Stratégia obsahu", "Správa komunity", "Reklamné kampane", "Analýza a reporting"]
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Naše služby
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600">
            Poskytujeme komplexné riešenia, ktoré pomôžu vášmu biznisu rásť.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="shadow-lg">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-accent mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
