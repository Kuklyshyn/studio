export type SiteEvent = "cta_click" | "tel_click" | "mail_click" | "form_submit";

// gtag exists only after the visitor accepts cookies, because GoogleAnalytics is rendered only then.
// Without consent this is a no-op, so no event is sent.
export function trackEvent(name: SiteEvent, params?: Record<string, string>) {
  if (typeof window === "undefined") return;
  const gtag = (window as { gtag?: (...args: unknown[]) => void }).gtag;
  gtag?.("event", name, params);
}
