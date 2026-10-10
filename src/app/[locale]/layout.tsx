import "../globals.css";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/toaster";
import { CookieConsent } from "@/components/layout/cookie-consent";
import { MobileCta } from "@/components/layout/mobile-cta";
import { Bricolage_Grotesque, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import { JsonLd } from "@/components/json-ld";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import { LOCALES, SITE_NAME, SITE_URL, isLocale } from "@/lib/site";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "700", "800"],
  variable: "--font-bricolage",
});

const instrument = Instrument_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-instrument",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

// Pages are rendered once per locale at build time. Metadata then lands in <head> for every client.
export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

// Site-wide defaults. Each page overrides the title and description with its own metadata.
export async function generateMetadata({ params }: Pick<Props, "params">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const t = await getTranslations({ locale, namespace: "Seo.home" });

  return {
    metadataBase: new URL(SITE_URL),
    title: { default: SITE_NAME, template: `%s | ${SITE_NAME}` },
    description: t("description"),
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  // Unknown language prefixes such as /robots.txt or /xyz must return 404, not a page.
  if (!isLocale(locale)) notFound();
  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${bricolage.variable} ${instrument.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <body className="font-body antialiased">
        {/* Runs before first paint: if the visitor already chose, the cookie banner stays hidden. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var c=localStorage.getItem('cookie-consent');if(c==='granted'||c==='denied'){document.documentElement.setAttribute('data-consent',c)}}catch(e){}`,
          }}
        />
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            disableTransitionOnChange
          >
            <Header />
            <main>{children}</main>
            <Footer />
            <MobileCta />
            <Toaster />
            <CookieConsent />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
