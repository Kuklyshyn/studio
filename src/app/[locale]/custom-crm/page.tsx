import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { LandingView, landingMetadata } from "@/components/landing-view";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return landingMetadata("custom-crm", locale);
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <LandingView pageKey="custom-crm" locale={locale} />;
}
