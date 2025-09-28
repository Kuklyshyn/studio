"use client";

import { usePathname, Link } from "@/i18n";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Mountain } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeSwitcher } from "../theme-switcher";
import { LanguageSwitcher } from './language-switcher';
import { useTranslations } from 'next-intl';
import Image from "next/image";

export function Header() {
  const pathname = usePathname();
  const t = useTranslations('Header');

  const navLinks = [
    { href: "/", label: t('home') },
    { href: "/about", label: t('about') },
    { href: "/services", label: t('services') },
    { href: "/custom-programming", label: t('custom-programming') },
    { href: "/portfolio", label: t('portfolio') },
    // { href: "/blog", label: t('blog') },
    { href: "/contact", label: t('contact') },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center px-4">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Image src="/img/logo-white.png" alt="Omnichannel" width={100} height={34} />
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "transition-colors hover:text-primary",
                pathname === href || (href.startsWith('/blog') && pathname.startsWith('/blog')) ? "text-primary font-semibold" : "text-muted-foreground"
              )}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <LanguageSwitcher />
          {/* <ThemeSwitcher /> */}
          <Button asChild className="hidden md:inline-flex rounded-full">
            <Link href="/contact">{t('contact-us')}</Link>
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
                <Link
                  href="/"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <Image src="/img/logo-white.png" alt="Omnichannel" width={100} height={34} />
                  <span className="font-headline">Omnichannel</span>
                </Link>
                {navLinks.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className={cn(
                        "transition-colors hover:text-primary",
                        pathname === href ? "text-primary font-semibold" : "text-muted-foreground"
                      )}
                  >
                    {label}
                  </Link>
                ))}
                <Button asChild className="mt-4 rounded-full">
                  <Link href="/contact">{t('contact-us')}</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
