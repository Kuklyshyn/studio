import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ProseStyles } from "@/components/prose-styles";
import { pageMetadata, type Locale } from "@/lib/seo";
import { isLocale } from "@/lib/site";

// Identification details required for online services in Slovakia, in both languages.
const content = {
  sk: `
<h1 class="font-headline text-4xl md:text-5xl font-bold mb-8">Informácie o prevádzkovateľovi</h1>

<h2>Prevádzkovateľ webovej stránky</h2>
<ul>
<li><strong>Obchodné meno:</strong> Mykola Kuklyshyn</li>
<li><strong>Forma podnikania:</strong> podnik zahraničnej osoby</li>
<li><strong>IČO:</strong> 55 907 890</li>
<li><strong>Miesto podnikania:</strong> Doležalova 3424/15C, 821 04 Bratislava-Ružinov, Slovensko</li>
<li><strong>E-mail:</strong> info@omnicode.sk</li>
<li><strong>Webové štúdio:</strong> Omnicode, omnicode.sk</li>
</ul>

<h2>Autorské práva a ochranné známky</h2>
<p>Texty, grafika a zdrojový kód tejto stránky sú chránené autorským právom. Názvy a logá technológií (napríklad Next.js, React, TypeScript) sú ochranné známky ich vlastníkov a na stránke slúžia len na označenie použitých technológií.</p>

<h2>Externé odkazy</h2>
<p>Za obsah webových stránok, na ktoré odkazujeme, nezodpovedáme. Za ich obsah zodpovedajú ich prevádzkovatelia.</p>

<h2>Informatívny charakter</h2>
<p>Informácie na tejto stránke slúžia na predstavenie našich služieb a nie sú záväznou ponukou. Záväznú ponuku pripravíme na základe vašej žiadosti.</p>

<h2>Ochrana osobných údajov</h2>
<p>Ako spracúvame osobné údaje a aké máte práva, je uvedené v <a href='/sk/privacy-policy'>zásadách ochrany osobných údajov</a>.</p>
`,
  en: `
<h1 class="font-headline text-4xl md:text-5xl font-bold mb-8">Legal Notice</h1>

<h2>Website operator</h2>
<ul>
<li><strong>Trade name:</strong> Mykola Kuklyshyn</li>
<li><strong>Business form:</strong> business of a foreign person registered in Slovakia (podnik zahraničnej osoby)</li>
<li><strong>Company ID (IČO):</strong> 55 907 890</li>
<li><strong>Place of business:</strong> Doležalova 3424/15C, 821 04 Bratislava-Ružinov, Slovakia</li>
<li><strong>Email:</strong> info@omnicode.sk</li>
<li><strong>Web studio:</strong> Omnicode, omnicode.sk</li>
</ul>

<h2>Copyright and trademarks</h2>
<p>The texts, graphics and source code of this website are protected by copyright. Names and logos of technologies (for example Next.js, React, TypeScript) are trademarks of their owners and are used on this website only to indicate the technologies used.</p>

<h2>External links</h2>
<p>We are not responsible for the content of the websites we link to. Their content is the responsibility of their operators.</p>

<h2>Informational character</h2>
<p>The information on this website describes our services and is not a binding offer. We prepare a binding quote on the basis of your request.</p>

<h2>Personal data</h2>
<p>How we process personal data and what rights you have is described in our <a href='/en/privacy-policy'>privacy policy</a>.</p>
`,
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const t = await getTranslations({ locale, namespace: "Seo.imprint" });

  return pageMetadata({ locale: locale as Locale, path: "/imprint", title: t("title"), description: t("description") });
}

export default async function ImprintPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: requested } = await params;
  setRequestLocale(requested);
  const locale = requested === "en" ? "en" : "sk";

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <ProseStyles />
      <div className="max-w-4xl mx-auto prose prose-invert lg:prose-xl text-foreground/90">
        <div dangerouslySetInnerHTML={{ __html: content[locale] }} />
      </div>
    </div>
  );
}
