"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n";

export const COOKIE_CONSENT_KEY = "cookie-consent";
export const OPEN_COOKIE_SETTINGS_EVENT = "open-cookie-settings";

type Consent = "granted" | "denied";

function readConsent(): Consent | null {
  try {
    const value = window.localStorage.getItem(COOKIE_CONSENT_KEY);
    return value === "granted" || value === "denied" ? value : null;
  } catch {
    return null;
  }
}

function storeConsent(value: Consent) {
  try {
    window.localStorage.setItem(COOKIE_CONSENT_KEY, value);
  } catch {
    // Storage is blocked, so the banner will show again on the next visit.
  }
}

// Analytics and advertising scripts are rendered only after the visitor accepts them.
export function CookieConsent() {
  const t = useTranslations("Cookies");
  const [consent, setConsent] = useState<Consent | null>(null);
  // The banner is in the server HTML so it can be the first thing painted. It is hidden by CSS for visitors who chose before.
  const [bannerOpen, setBannerOpen] = useState(true);

  useEffect(() => {
    const stored = readConsent();
    setConsent(stored);
    setBannerOpen(stored === null);

    const openSettings = () => {
      document.documentElement.removeAttribute("data-consent");
      setBannerOpen(true);
    };
    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, openSettings);
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, openSettings);
  }, []);

  const choose = (value: Consent) => {
    storeConsent(value);

    // Scripts that are already loaded cannot be unloaded, so withdrawing consent reloads the page.
    if (consent === "granted" && value === "denied") {
      window.location.reload();
      return;
    }

    setConsent(value);
    setBannerOpen(false);
  };

  return (
    <>
      {consent === "granted" && (
        <>
          <GoogleAnalytics gaId="G-F9C2WLQZPG" />
          {/* Ads runs on the gtag.js loaded above. A second GoogleAnalytics here would be skipped by next/script, because it reuses the same script ids. */}
          <Script
            id="google-ads-config"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || []; function gtag(){window.dataLayer.push(arguments);} gtag('config', 'AW-17671979388');`,
            }}
          />
          <SpeedInsights />
        </>
      )}

      {bannerOpen && (
        <div
          role="dialog"
          aria-labelledby="cookie-consent-text"
          className="cookie-banner fixed bottom-0 left-0 right-0 z-[100] bg-secondary/95 backdrop-blur-sm border-t border-border/50 p-4 shadow-lg"
        >
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <p id="cookie-consent-text" className="text-sm text-muted-foreground">
              {t("text")}{" "}
              <Link href="/privacy-policy" className="underline hover:text-primary">
                {t("privacyLink")}
              </Link>
            </p>
            <div className="flex gap-3">
              <Button onClick={() => choose("denied")} className="rounded-full font-semibold">
                {t("reject")}
              </Button>
              <Button onClick={() => choose("granted")} className="rounded-full font-semibold">
                {t("accept")}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
