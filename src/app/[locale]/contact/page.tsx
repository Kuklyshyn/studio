"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n";
import { trackEvent } from "@/lib/analytics";
import { CONTACT_EMAIL } from "@/lib/site";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Accepts an e-mail address, or a phone number with 7 to 15 digits.
function isValidContact(value: string) {
  if (EMAIL_PATTERN.test(value)) return true;
  const digits = value.replace(/\D/g, "");
  return /^\+?[0-9 ()-]+$/.test(value) && digits.length >= 7 && digits.length <= 15;
}

type Status = "sent" | "error" | "invalid" | "too_large" | null;

export default function ContactPage() {
  const t = useTranslations("ContactPage");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<Status>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);
    const contact = String(data.get("contact") ?? "").trim();

    if (!isValidContact(contact)) {
      setStatus("invalid");
      return;
    }

    const attachment = data.get("attachment");
    if (attachment instanceof File && attachment.size > 10 * 1024 * 1024) {
      setStatus("too_large");
      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      // Sent as multipart so an optional brief or file can go with the message.
      const payload = new FormData();
      payload.set("name", String(data.get("name") ?? ""));
      payload.set("contact", contact);
      payload.set("message", String(data.get("message") ?? ""));
      payload.set("consent", data.get("consent") === "on" ? "on" : "");
      payload.set("website", String(data.get("website") ?? ""));
      if (attachment instanceof File && attachment.size > 0) payload.set("attachment", attachment);

      const res = await fetch(`/api/contact`, { method: "POST", body: payload });

      if (res.ok) {
        setStatus("sent");
        trackEvent("form_submit", { form: "contact" });
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

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
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">{t("nameLabel")}</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder={t("namePlaceholder")}
                    required
                    autoComplete="name"
                    className="bg-secondary/50 border-border/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact">{t("contactLabel")}</Label>
                  <Input
                    id="contact"
                    name="contact"
                    placeholder={t("contactPlaceholder")}
                    required
                    autoComplete="email"
                    className="bg-secondary/50 border-border/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">{t("needLabel")}</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder={t("needPlaceholder")}
                    rows={5}
                    required
                    className="bg-secondary/50 border-border/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="attachment">{t("attachLabel")}</Label>
                  <input
                    id="attachment"
                    name="attachment"
                    type="file"
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.zip"
                    className="block w-full text-sm text-muted-foreground file:mr-4 file:rounded-full file:border-0 file:bg-primary/10 file:px-4 file:py-2 file:font-semibold file:text-primary"
                  />
                  <p className="text-xs text-muted-foreground">{t("attachHint")}</p>
                </div>
                <div className="flex items-start gap-3">
                  <input
                    id="consent"
                    name="consent"
                    type="checkbox"
                    required
                    className="mt-1 h-4 w-4 accent-primary"
                  />
                  <Label htmlFor="consent" className="text-sm font-normal text-muted-foreground leading-snug">
                    {t("consentText")}{" "}
                    <Link href="/privacy-policy" className="underline hover:text-primary">{t("privacyLink")}</Link>
                  </Label>
                </div>
                {/* Honeypot: hidden from people. Bots that fill every field reveal themselves. */}
                <input name="website" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
                <Button
                  type="submit"
                  size="lg"
                  className="rounded-full font-semibold"
                  disabled={loading}
                >
                  {loading ? t("sending") : t("submitButton")}
                </Button>
                {status && (
                  <p role="status" className="text-sm mt-2">
                    {status === "sent" && t("sentText")}
                    {status === "error" && t("errorText")}
                    {status === "invalid" && t("invalidContact")}
                    {status === "too_large" && t("fileTooLarge")}
                  </p>
                )}
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
                      href={`mailto:${CONTACT_EMAIL}`}
                      onClick={() => trackEvent("mail_click", { location: "contact_info" })}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {CONTACT_EMAIL}
                    </a>
                  </div>
                </div>
                {/* <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">{t("phone")}</h3>
                    <a
                      href="tel:+421950371355"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +421 950 371 355
                    </a>
                  </div>
                </div> */}
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
              <p className="text-sm text-muted-foreground">
                {t("companyId")}: 55 907 890.{" "}
                <Link href="/imprint" className="underline hover:text-primary">{t("imprintLink")}</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
