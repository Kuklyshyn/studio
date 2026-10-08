"use client";

import { useTranslations } from "next-intl";
import { OPEN_COOKIE_SETTINGS_EVENT } from "./cookie-consent";

// Lets visitors change their cookie choice at any time, as easily as they gave it.
export function CookieSettingsButton() {
  const t = useTranslations("Footer");

  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS_EVENT))}
      className="hover:text-primary transition-colors"
    >
      {t("cookie-settings")}
    </button>
  );
}
