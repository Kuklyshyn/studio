import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { pageMetadata } from "@/lib/seo";
import { isLocale } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const t = await getTranslations({ locale, namespace: "Seo.contact" });

  return pageMetadata({ locale, path: "/contact", title: t("title"), description: t("description") });
}

// The contact page is a client component, so its metadata lives in this layout.
export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
