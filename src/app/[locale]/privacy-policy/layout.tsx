import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { pageMetadata } from "@/lib/seo";
import { isLocale } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const t = await getTranslations({ locale, namespace: "Seo.privacyPolicy" });

  return pageMetadata({ locale, path: "/privacy-policy", title: t("title"), description: t("description") });
}

// The privacy policy page is a client component, so its metadata lives in this layout.
export default function PrivacyPolicyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
