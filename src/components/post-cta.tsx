import { Button } from "@/components/ui/button";
import { Link } from "@/i18n";
import { Reveal } from "@/components/reveal";
import { Magnetic } from "@/components/magnetic";
import { getTranslations } from "next-intl/server";

// A closing block under every blog post: it connects the article to the contact page and the service pages.
export async function PostCta({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "Landing" });

  return (
    <Reveal>
      <aside className="mt-16 rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/15 to-transparent p-8 md:p-10">
        <h2 className="font-headline text-2xl font-bold md:text-3xl">{t("postCtaTitle")}</h2>
        <p className="mt-3 text-lg text-muted-foreground">{t("postCtaText")}</p>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <Magnetic>
            <Button asChild size="lg" className="btn-shine rounded-full font-bold">
              <Link href="/contact">{t("cta")}</Link>
            </Button>
          </Magnetic>
          <Link href="/web-development" className="font-semibold text-primary hover:underline">{t("postCtaWeb")}</Link>
          <Link href="/eshop-development" className="font-semibold text-primary hover:underline">{t("postCtaEshop")}</Link>
        </div>
      </aside>
    </Reveal>
  );
}
