import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const services = [
  {
    title: "Web Design & Development",
    description: "We create visually appealing and fully responsive websites that engage your visitors and convert them into customers.",
    features: ["UI/UX Design", "Custom WordPress Development", "Web Applications", "Responsive Design"]
  },
  {
    title: "eCommerce Solutions",
    description: "We build powerful online stores that make it easy to sell your products and provide a great shopping experience.",
    features: ["Shopify & WooCommerce", "Payment Gateway Integration", "Product Management", "Conversion Rate Optimization"]
  },
  {
    title: "SEO and Online Marketing",
    description: "We increase your visibility in search engines and attract relevant traffic through targeted marketing campaigns.",
    features: ["On-page & Off-page SEO", "PPC Campaigns (Google Ads)", "Content Marketing", "Email Marketing"]
  },
  {
    title: "Social Media Management",
    description: "We build and manage your social media presence to strengthen your brand and engage your community.",
    features: ["Content Strategy", "Community Management", "Ad Campaigns", "Analytics and Reporting"]
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl md:text-6xl font-bold mb-4">
            Our Services
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
            We provide comprehensive solutions to help your business grow.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="font-headline text-2xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary mr-2" />
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
