"use client";

import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { TrackedLink } from "@/components/tracked-link";

// A call to action that stays at the bottom of the screen on phones. It is hidden on the contact page.
export function MobileCta() {
  const pathname = usePathname();
  const t = useTranslations("HomePage");

  if (pathname.endsWith("/contact")) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 border-t border-border/50 bg-background/95 p-3 backdrop-blur lg:hidden">
      <Button asChild size="lg" className="w-full rounded-full font-bold">
        <TrackedLink location="mobile_sticky" href="/contact">
          {t("heroCta")}
        </TrackedLink>
      </Button>
    </div>
  );
}
