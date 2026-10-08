import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/button";
import { TrackedLink } from "@/components/tracked-link";

// The closing call to action that ends every page. Its label is the same on all pages.
export async function CtaBand({ locale, location }: { locale: string; location: string }) {
  const t = await getTranslations({ locale, namespace: "CtaBand" });

  return (
    <section className="bg-primary/90 py-24 md:py-32">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-headline text-3xl md:text-5xl font-bold text-primary-foreground mb-4">{t("title")}</h2>
        <p className="max-w-2xl mx-auto text-lg text-primary-foreground/80 mb-8">{t("subtitle")}</p>
        <Button asChild size="lg" variant="secondary" className="rounded-full font-bold">
          <TrackedLink location={location} href="/contact">
            {t("button")}
          </TrackedLink>
        </Button>
      </div>
    </section>
  );
}
