import { getLocale } from "next-intl/server";
import { ProseStyles } from "@/components/prose-styles";

// Legal text in both languages. Change the effective date whenever the content changes.
const content = {
  sk: `
<h1 class="font-headline text-4xl md:text-5xl font-bold mb-8">Zásady ochrany osobných údajov</h1>
<p class="lead text-xl text-muted-foreground">Vaše súkromie berieme vážne. Tu vysvetľujeme, aké osobné údaje spracúvame, na aký účel, na akom právnom základe, komu ich môžeme poskytnúť a aké máte práva.</p>
<p><strong>Dátum účinnosti: 8. októbra 2026</strong></p>

<h2>1. Prevádzkovateľ</h2>
<p>Prevádzkovateľom osobných údajov na tejto webovej stránke je Mykola Kuklyshyn, podnik zahraničnej osoby, IČO: 55 907 890, miesto podnikania: Doležalova 3424/15C, 821 04 Bratislava-Ružinov, Slovensko. Webové štúdio pôsobí pod značkou Omnicode. Všetky otázky k ochrane údajov posielajte na e-mail kuklyshynpro@gmail.com.</p>

<h2>2. Aké údaje spracúvame, na aký účel a na akom základe</h2>

<h3>a) Kontaktný formulár</h3>
<p>Meno, e-mailová adresa, predmet a obsah správy. <strong>Účel:</strong> odpoveď na váš dopyt a príprava cenovej ponuky. <strong>Právny základ:</strong> opatrenia na vašu žiadosť pred uzavretím zmluvy (čl. 6 ods. 1 písm. b) GDPR) a náš oprávnený záujem na vybavovaní dopytov (čl. 6 ods. 1 písm. f) GDPR). <strong>Doba uchovávania:</strong> najviac 12 mesiacov od poslednej komunikácie, ak nevznikne zmluva. Ak zmluva vznikne, údaje uchovávame podľa jej plnenia a zákonných lehôt.</p>

<h3>b) Analytické a reklamné cookies (Google Analytics, Google Ads)</h3>
<p><strong>Účel:</strong> meranie návštevnosti stránky a výkonnosti reklamy. <strong>Právny základ:</strong> váš súhlas (čl. 6 ods. 1 písm. a) GDPR a súhlas podľa zákona o elektronických komunikáciách). Tieto cookies sa načítajú len po vašom súhlase. Súhlas môžete kedykoľvek odvolať cez odkaz <em>Nastavenia cookies</em> v pätičke stránky.</p>

<h3>c) Meranie rýchlosti stránky (Vercel Speed Insights)</h3>
<p><strong>Účel:</strong> sledovanie rýchlosti načítania stránky. <strong>Právny základ:</strong> váš súhlas, rovnako ako v bode b).</p>

<h3>d) Technické údaje pri návšteve</h3>
<p>Pri každej návšteve server automaticky spracúva IP adresu, typ prehliadača, čas a požadovanú adresu. <strong>Účel:</strong> prevádzka a zabezpečenie stránky. <strong>Právny základ:</strong> náš oprávnený záujem (čl. 6 ods. 1 písm. f) GDPR). <strong>Doba uchovávania:</strong> podľa nastavení hostingového poskytovateľa, zvyčajne niekoľko týždňov.</p>

<h3>e) Uloženie vašej voľby cookies</h3>
<p>Vašu voľbu (prijatie alebo odmietnutie) ukladáme do úložiska vášho prehliadača pod názvom „cookie-consent“. Ide o nevyhnutnú technickú funkciu, ktorá sa nikam neprenáša. Zostane uložená, kým ju nevymažete.</p>

<h2>3. Cookies, ktoré môžu byť nastavené</h2>
<ul>
<li><strong>Google Analytics:</strong> _ga, _ga_* (len po súhlase)</li>
<li><strong>Google Ads:</strong> _gcl_au, _gcl_aw, IDE, test_cookie (len po súhlase)</li>
<li><strong>Technické úložisko:</strong> cookie-consent (bod 2e)</li>
</ul>

<h2>4. Komu údaje poskytujeme</h2>
<ul>
<li><strong>Google</strong> (Google Analytics a Google Ads po súhlase; odosielanie správ z kontaktného formulára cez e-mailovú službu Gmail)</li>
<li><strong>Vercel Inc.</strong> (meranie rýchlosti stránky, po súhlase)</li>
<li><strong>Sirv</strong> (sirv.com), z ktorého sa načítavajú obrázky na stránke; pri načítaní sa prenáša IP adresa</li>
<li><strong>Iconify</strong> (api.iconify.design), z ktorého sa načítavajú ikony technológií; pri načítaní sa prenáša IP adresa</li>
<li><strong>Hostingový poskytovateľ</strong> stránky, ktorý zabezpečuje prevádzku servera</li>
</ul>
<p>Vaše údaje nepredávame a neposkytujeme ich tretím stranám na ich vlastné komerčné účely.</p>

<h2>5. Prenos údajov mimo EÚ</h2>
<p>Niektorí poskytovatelia (najmä Google a Vercel) môžu spracúvať údaje aj v USA. Prenos sa uskutočňuje na základe rozhodnutia Európskej komisie o primeranej ochrane pre Rámec EÚ–USA na ochranu údajov alebo na základe štandardných zmluvných doložiek.</p>

<h2>6. Vaše práva</h2>
<p>Podľa GDPR máte právo:</p>
<ul>
<li>na prístup k údajom, ich opravu, vymazanie a obmedzenie spracúvania,</li>
<li>na prenosnosť údajov,</li>
<li>namietať proti spracúvaniu na základe nášho oprávneného záujmu,</li>
<li>kedykoľvek odvolať súhlas. Odvolanie nemá vplyv na spracúvanie pred jeho odvolaním.</li>
</ul>
<p>Svoje práva uplatníte e-mailom na kuklyshynpro@gmail.com. Máte tiež právo podať sťažnosť na Úrad na ochranu osobných údajov Slovenskej republiky, Hraničná 12, 820 07 Bratislava 27, www.dataprotection.gov.sk.</p>

<h2>7. Bezpečnosť</h2>
<p>Údaje chránime primeranými technickými a organizačnými opatreniami. Prístup k nim majú len osoby, ktoré ich potrebujú na vybavenie vašej žiadosti.</p>

<h2>8. Poskytnutie údajov a automatizované rozhodovanie</h2>
<p>Poskytnutie údajov cez kontaktný formulár je dobrovoľné, ale bez nich vám nemôžeme odpovedať. Neuskutočňujeme automatizované rozhodovanie ani profilovanie.</p>

<h2>9. Zmeny zásad</h2>
<p>Tieto zásady môžeme aktualizovať. Platná verzia je vždy na tejto stránke s dátumom účinnosti.</p>
`,
  en: `
<h1 class="font-headline text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
<p class="lead text-xl text-muted-foreground">We take your privacy seriously. This page explains which personal data we process on this website, for what purpose, on what legal basis, to whom we may disclose it, and what rights you have.</p>
<p><strong>Effective date: October 8, 2026</strong></p>

<h2>1. Controller</h2>
<p>The controller of personal data on this website is Mykola Kuklyshyn, a business of a foreign person registered in Slovakia (podnik zahraničnej osoby), company ID (IČO): 55 907 890, place of business: Doležalova 3424/15C, 821 04 Bratislava-Ružinov, Slovakia. The web studio operates under the Omnicode brand. Send all data protection questions to kuklyshynpro@gmail.com.</p>

<h2>2. What data we process, why and on what legal basis</h2>

<h3>a) Contact form</h3>
<p>Name, email address, subject and message content. <strong>Purpose:</strong> replying to your inquiry and preparing a quote. <strong>Legal basis:</strong> steps taken at your request before entering into a contract (Art. 6(1)(b) GDPR) and our legitimate interest in handling inquiries (Art. 6(1)(f) GDPR). <strong>Retention:</strong> up to 12 months after the last communication if no contract is concluded. If a contract is concluded, we keep the data in line with the contract and statutory deadlines.</p>

<h3>b) Analytics and advertising cookies (Google Analytics, Google Ads)</h3>
<p><strong>Purpose:</strong> measuring site traffic and advertising performance. <strong>Legal basis:</strong> your consent (Art. 6(1)(a) GDPR and the consent required under Slovak electronic communications law). These cookies are loaded only after you consent. You can withdraw consent at any time via <em>Cookie settings</em> in the footer.</p>

<h3>c) Page speed measurement (Vercel Speed Insights)</h3>
<p><strong>Purpose:</strong> measuring how fast the page loads. <strong>Legal basis:</strong> your consent, as in point b).</p>

<h3>d) Technical data on each visit</h3>
<p>Each visit automatically processes the IP address, browser type, time and requested address in server logs. <strong>Purpose:</strong> operating and securing the site. <strong>Legal basis:</strong> our legitimate interest (Art. 6(1)(f) GDPR). <strong>Retention:</strong> according to the settings of the hosting provider, usually a few weeks.</p>

<h3>e) Storing your cookie choice</h3>
<p>We store your choice (accept or reject) in your browser's local storage under the name “cookie-consent”. This is a necessary technical function and is not transferred to anyone. It stays stored until you delete it.</p>

<h2>3. Cookies that may be set</h2>
<ul>
<li><strong>Google Analytics:</strong> _ga, _ga_* (only after consent)</li>
<li><strong>Google Ads:</strong> _gcl_au, _gcl_aw, IDE, test_cookie (only after consent)</li>
<li><strong>Technical storage:</strong> cookie-consent (point 2e)</li>
</ul>

<h2>4. Who receives the data</h2>
<ul>
<li><strong>Google</strong> (Google Analytics and Google Ads after consent; sending messages from the contact form through the Gmail email service)</li>
<li><strong>Vercel Inc.</strong> (page speed measurement, after consent)</li>
<li><strong>Sirv</strong> (sirv.com), which serves images on this site; the IP address is transmitted when images load</li>
<li><strong>Iconify</strong> (api.iconify.design), which serves technology icons; the IP address is transmitted when icons load</li>
<li><strong>The hosting provider</strong> of this website, which operates the server</li>
</ul>
<p>We do not sell your data or provide it to third parties for their own commercial purposes.</p>

<h2>5. Transfers outside the EU</h2>
<p>Some providers (in particular Google and Vercel) may process data in the United States. Transfers rely on the European Commission's adequacy decision for the EU–US Data Privacy Framework or on standard contractual clauses.</p>

<h2>6. Your rights</h2>
<p>Under the GDPR you have the right to:</p>
<ul>
<li>access your data, have it corrected or erased, and have processing restricted,</li>
<li>data portability,</li>
<li>object to processing based on our legitimate interest,</li>
<li>withdraw your consent at any time. Withdrawal does not affect processing carried out before the withdrawal.</li>
</ul>
<p>Exercise your rights by emailing kuklyshynpro@gmail.com. You also have the right to lodge a complaint with the Office for Personal Data Protection of the Slovak Republic (Úrad na ochranu osobných údajov SR), Hraničná 12, 820 07 Bratislava 27, Slovakia, www.dataprotection.gov.sk.</p>

<h2>7. Security</h2>
<p>We protect data with appropriate technical and organisational measures. Only people who need the data to handle your request have access to it.</p>

<h2>8. Provision of data and automated decisions</h2>
<p>Providing data through the contact form is voluntary, but without it we cannot reply to you. We do not make automated decisions or carry out profiling.</p>

<h2>9. Changes to this policy</h2>
<p>We may update this policy. The current version is always published on this page with its effective date.</p>
`,
};

export default async function PrivacyPolicyPage() {
  const locale = (await getLocale()) === "en" ? "en" : "sk";

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <ProseStyles />
      <div className="max-w-4xl mx-auto prose prose-invert lg:prose-xl text-foreground/90">
        <div dangerouslySetInnerHTML={{ __html: content[locale] }} />
      </div>
    </div>
  );
}
