import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations("ContactPage");

  return (
    <>
      <section className="py-20 md:py-32 relative">
        <div className="absolute inset-0 bg-grid-white/[0.05]"></div>
        <div className="container mx-auto px-4 text-center relative">
          <h1 className="font-headline text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 mb-4">
            {t("heroTitle")}
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
            {t("heroSubtitle")}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="font-headline text-3xl font-bold mb-6">
                {t("formTitle")}
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t("nameLabel")}</Label>
                    <Input
                      id="name"
                      placeholder={t("namePlaceholder")}
                      className="bg-secondary/50 border-border/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{t("emailLabel")}</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={t("emailPlaceholder")}
                      className="bg-secondary/50 border-border/50"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">{t("subjectLabel")}</Label>
                  <Input
                    id="subject"
                    placeholder={t("subjectPlaceholder")}
                    className="bg-secondary/50 border-border/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">{t("messageLabel")}</Label>
                  <Textarea
                    id="message"
                    placeholder={t("messagePlaceholder")}
                    rows={5}
                    className="bg-secondary/50 border-border/50"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="rounded-full font-semibold"
                >
                  {t("submitButton")}
                </Button>
              </form>
            </div>
            <div className="space-y-8 bg-secondary/30 p-8 rounded-lg">
              <h2 className="font-headline text-3xl font-bold">
                {t("contactInfoTitle")}
              </h2>
              <div className="space-y-4 text-lg">
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">{t("email")}</h3>
                    <a
                      href="mailto:kuklyshynpro@gmail.com
"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      kuklyshynpro@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">{t("phone")}</h3>
                    <a
                      href="tel:+421123456789"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +421 950 371 355
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">{t("address")}</h3>
                    <p className="text-muted-foreground">
                    Doležalova 3424/15C, 821 04 Bratislava-Ružinov, Slovensko
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
