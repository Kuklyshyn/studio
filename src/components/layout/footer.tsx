import { Link } from "@/i18n";
import { Mountain, Twitter, Linkedin, Facebook } from "lucide-react";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";

export function Footer() {
  const t = useTranslations("Footer");
  const tHeader = useTranslations("Header");

  return (
    <footer className="bg-secondary/30 border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/img/logo-white.png"
                alt="Omnichannel"
                width={100}
                height={34}
              />
            </Link>
            <p className="text-muted-foreground max-w-md">{t("description")}</p>
          </div>

          <div>
            <h3 className="font-headline font-semibold text-lg mb-4">
              {t("quick-links")}
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  {tHeader("home")}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary transition-colors"
                >
                  {tHeader("about")}
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-primary transition-colors"
                >
                  {tHeader("services")}
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="hover:text-primary transition-colors"
                >
                  {tHeader("portfolio")}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-primary transition-colors"
                >
                  {tHeader("contact")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline font-semibold text-lg mb-4">
              {t("follow-us")}
            </h3>
            <div className="flex space-x-2">
              {/* <Button asChild variant="ghost" size="icon">
                <Link href="https://www.linkedin.com/company/105907699/admin/dashboard/" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </Link>
              </Button> */}
              <Button asChild variant="ghost" size="icon">
                <Link href="https://www.linkedin.com/company/105907699/admin/dashboard/" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="icon">
                <Link href="https://www.facebook.com/profile.php?id=61573524654723" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="border-t border-border/50 pt-6 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Omnichannel.{" "}
            {t("copyright")} |{" "}
            <Link
              href="/privacy-policy"
              className="hover:text-primary transition-colors"
            >
              {t("privacy-policy")}
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
