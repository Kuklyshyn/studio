"use client";

import { usePathname, Link } from "@/i18n";
import { TrackedLink } from "@/components/tracked-link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeSwitcher } from "../theme-switcher";
import { LanguageSwitcher } from "./language-switcher";
import { useTranslations } from "next-intl";
import { Logo } from "@/components/logo";
import { useState, useEffect } from "react";

export function Header() {
  const pathname = usePathname();
  const t = useTranslations("Header");
  const [mounted, setMounted] = useState(false);

  // Чекаємо поки компонент змонтується на клієнті
  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/about", label: t("about") },
    { href: "/services", label: t("services") },
    { href: "/custom-programming", label: t("custom-programming") },
    { href: "/portfolio", label: t("portfolio") },
    { href: "/blog", label: t("blog") },
    { href: "/contact", label: t("contact") },
  ] as const;

  const isBlogDetail = /^\/blog\/[^/]+$/.test(pathname as string);
  const isPortfolioDetail = /^\/portfolio\/[^/]+$/.test(pathname as string);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/70">
      <div className="container mx-auto flex h-[72px] items-center px-4">
        <Link href="/" aria-label="Omnicode" className="mr-8 flex items-center">
          <Logo />
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-[15px] font-medium">
          {navLinks.map(({ href, label }) => {
            const isActive =
              mounted &&
              (pathname === href ||
                (href.startsWith("/blog") && (pathname as string).startsWith("/blog")));

            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "transition-colors hover:text-primary",
                  isActive
                    ? "text-primary font-semibold"
                    : "text-muted-foreground"
                )}
              >
                {label}
              </Link>
            );
          })}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2">
          {!isBlogDetail && !isPortfolioDetail && <LanguageSwitcher />} {/* <-- тут ховаємо */}
          {/* <ThemeSwitcher /> */}
          <Button asChild className="hidden md:inline-flex rounded-full">
            <TrackedLink location="header" href="/contact">{t("contact-us")}</TrackedLink>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium mt-8">
                <Link href="/" aria-label="Omnicode" className="flex items-center">
                  <Logo />
                </Link>
                {navLinks.map(({ href, label }) => {
                  const isActive = mounted && pathname === href;

                  return (
                    <Link
                      key={href}
                      href={href}
                      className={cn(
                        "transition-colors hover:text-primary",
                        isActive
                          ? "text-primary font-semibold"
                          : "text-muted-foreground"
                      )}
                    >
                      {label}
                    </Link>
                  );
                })}
                <Button asChild className="mt-4 rounded-full">
                  <TrackedLink location="mobile_menu" href="/contact">{t("contact-us")}</TrackedLink>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
