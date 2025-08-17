
"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export default function PrivacyPolicyPage() {
    const t = useTranslations("PrivacyPolicyPage");
    const [currentDate, setCurrentDate] = useState('');
    const locale = useTranslations()('Header.locale');

    useEffect(() => {
        const dateLocale = locale === 'en' ? 'en-US' : 'sk-SK';
        setCurrentDate(new Date().toLocaleDateString(dateLocale, { year: 'numeric', month: 'long', day: 'numeric' }));
    }, [locale]);

    const sk_content = `
        <h1 class="font-headline text-4xl md:text-5xl font-bold mb-8">${t('title')}</h1>
        <p class="lead text-xl text-muted-foreground">
            ${t('lead')}
        </p>

        <h2>1. Kto sme</h2>
        <p>
            Prevádzkovateľom tejto webovej stránky je Moder Web Solutions. Naša adresa je Ulica 123, 811 01 Bratislava, Slovensko. Môžete nás kontaktovať emailom na info@moder.sk.
        </p>

        <h2>2. Aké osobné údaje zhromažďujeme a prečo</h2>
        <h3>Kontaktné formuláre</h3>
        <p>
            Ak použijete kontaktný formulár na našej stránke, zhromažďujeme údaje, ktoré nám poskytnete (meno, emailová adresa, predmet a obsah správy), aby sme mohli odpovedať na vaše dopyty. Tieto údaje uchovávame po dobu nevyhnutnú na vybavenie vašej požiadavky.
        </p>
        
        <h3>Cookies</h3>
        <p>
            Naša stránka používa cookies na zlepšenie vášho zážitku. Cookies sú malé textové súbory, ktoré sa ukladajú vo vašom prehliadači. Používame ich na:
        </p>
        <ul>
            <li><strong>Funkčné cookies:</strong> Zabezpečujú základnú funkčnosť stránky.</li>
            <li><strong>Analytické cookies:</strong> Pomáhajú nám pochopiť, ako návštevníci používajú našu stránku, aby sme ju mohli vylepšovať (napr. Google Analytics).</li>
            <li><strong>Marketingové cookies:</strong> Používajú sa na personalizáciu reklamy.</li>
        </ul>
        <p>
            Pri prvej návšteve stránky vás požiadame o súhlas s používaním cookies prostredníctvom GDPR bannera. Svoj súhlas môžete kedykoľvek odvolať alebo zmeniť nastavenia vo vašom prehliadači.
        </p>
        
        <h3>Vložený obsah z iných webových stránok</h3>
        <p>
            Články na tejto webovej stránke môžu obsahovať vložený obsah (napr. videá, obrázky, články a pod.). Vložený obsah z iných stránok sa chová rovnako, akoby návštevník navštívil danú inú stránku.
        </p>
        <p>
            Tieto webové stránky môžu o vás zbierať údaje, používať súbory cookies, vkladať treťo-stranné sledovanie a monitorovať vašu interakciu s vloženým obsahom, vrátane sledovania vašej interakcie s vloženým obsahom, ak na danej webovej stránke máte účet a ste prihlásený.
        </p>

        <h2>3. S kým zdieľame vaše údaje</h2>
        <p>
            Vaše osobné údaje nezdieľame so tretími stranami na komerčné účely. Údaje môžeme zdieľať s poskytovateľmi služieb (napr. webhosting, analytické nástroje), ktorí nám pomáhajú prevádzkovať našu stránku. Títo poskytovatelia sú viazaní zmluvou o mlčanlivosti a môžu údaje použiť len na účely, na ktoré sme ich poverili.
        </p>

        <h2>4. Ako dlho uchovávame vaše údaje</h2>
        <p>
            Údaje z kontaktných formulárov uchovávame po dobu nevyhnutnú na komunikáciu s vami. Analytické údaje sú zvyčajne anonymizované a uchovávané po dlhšiu dobu na štatistické účely.
        </p>

        <h2>5. Aké máte práva nad svojimi údajmi</h2>
        <p>
            Ak máte na tejto webovej stránke účet alebo ste tu pridali komentár, môžete požiadať o export vašich osobných údajov, ktoré o vás uchovávame. Môžete taktiež požiadať o vymazanie osobných údajov. To sa ale netýka údajov, ktoré o vás musíme uchovávať z administratívnych, právnych alebo bezpečnostných dôvodov.
        </p>
        <p>Máte právo na:</p>
        <ul>
            <li>Prístup k vašim údajom.</li>
            <li>Opravu nesprávnych údajov.</li>
            <li>Vymazanie vašich údajov ("právo byť zabudnutý").</li>
            <li>Obmedzenie spracovania.</li>
            <li>Prenosnosť údajov.</li>
            <li>Namietať proti spracovaniu.</li>
        </ul>
        <p>
            Ak si chcete uplatniť niektoré z týchto práv, kontaktujte nás na info@moder.sk.
        </p>

        <h2>6. Kam posielame vaše údaje</h2>
        <p>
            Vaše údaje môžu byť prenesené a spracované na serveroch nachádzajúcich sa mimo vašej krajiny, vrátane krajín mimo Európskeho hospodárskeho priestoru (EHP). Zabezpečujeme, aby boli pri takomto prenose dodržané primerané ochranné opatrenia v súlade s GDPR.
        </p>

        <h2>7. Zmeny v zásadách ochrany osobných údajov</h2>
        <p>
            Vyhradzujeme si právo tieto zásady kedykoľvek aktualizovať. O významných zmenách vás budeme informovať na tejto stránke. Odporúčame vám pravidelne kontrolovať tieto zásady.
        </p>
    `;

    const en_content = `
        <h1 class="font-headline text-4xl md:text-5xl font-bold mb-8">${t('title')}</h1>
        <p class="lead text-xl text-muted-foreground">
            ${t('lead')}
        </p>

        <h2>1. Who We Are</h2>
        <p>
            The operator of this website is Moder Web Solutions. Our address is Ulica 123, 811 01 Bratislava, Slovakia. You can contact us by email at info@moder.sk.
        </p>

        <h2>2. What Personal Data We Collect and Why</h2>
        <h3>Contact Forms</h3>
        <p>
            If you use the contact form on our site, we collect the data you provide (name, email address, subject, and message content) to respond to your inquiries. We retain this data for the time necessary to process your request.
        </p>
        
        <h3>Cookies</h3>
        <p>
            Our site uses cookies to improve your experience. Cookies are small text files stored in your browser. We use them for:
        </p>
        <ul>
            <li><strong>Functional Cookies:</strong> Ensure the basic functionality of the site.</li>
            <li><strong>Analytical Cookies:</strong> Help us understand how visitors use our site so we can improve it (e.g., Google Analytics).</li>
            <li><strong>Marketing Cookies:</strong> Used to personalize advertising.</li>
        </ul>
        <p>
            On your first visit to the site, we will ask for your consent to use cookies via a GDPR banner. You can withdraw your consent or change the settings in your browser at any time.
        </p>
        
        <h3>Embedded Content from Other Websites</h3>
        <p>
            Articles on this website may include embedded content (e.g., videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.
        </p>
        <p>
            These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.
        </p>

        <h2>3. Who We Share Your Data With</h2>
        <p>
            We do not share your personal data with third parties for commercial purposes. We may share data with service providers (e.g., web hosting, analytics tools) who help us operate our site. These providers are bound by a confidentiality agreement and can only use the data for the purposes we have entrusted to them.
        </p>

        <h2>4. How Long We Retain Your Data</h2>
        <p>
            We retain data from contact forms for the time necessary to communicate with you. Analytical data is usually anonymized and stored for a longer period for statistical purposes.
        </p>

        <h2>5. What Rights You Have Over Your Data</h2>
        <p>
            If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.
        </p>
        <p>You have the right to:</p>
        <ul>
            <li>Access your data.</li>
            <li>Correct incorrect data.</li>
            <li>Erase your data ("right to be forgotten").</li>
            <li>Restrict processing.</li>
            <li>Data portability.</li>
            <li>Object to processing.</li>
        </ul>
        <p>
            If you wish to exercise any of these rights, please contact us at info@moder.sk.
        </p>

        <h2>6. Where We Send Your Data</h2>
        <p>
            Your data may be transferred to and processed on servers located outside your country, including countries outside the European Economic Area (EEA). We ensure that appropriate safeguards are in place for such transfers in accordance with GDPR.
        </p>

        <h2>7. Changes to the Privacy Policy</h2>
        <p>
            We reserve the right to update this policy at any time. We will inform you of significant changes on this page. We recommend that you check this policy regularly.
        </p>
    `;

    const content = locale === 'en' ? en_content : sk_content;

    return (
        <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-4xl mx-auto prose prose-invert lg:prose-xl text-foreground/90">
                <div dangerouslySetInnerHTML={{ __html: content }} />
                <p>{t('lastUpdated')} {currentDate}</p>
            </div>
        </div>
    );
}

// Add some basic styling for the prose content
const styles = `
.prose h2 {
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 700;
  margin-top: 2.5em;
  margin-bottom: 1em;
}
.prose h3 {
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 700;
    margin-top: 2em;
    margin-bottom: 1em;
}
.prose p {
  line-height: 1.75;
  margin-bottom: 1.25em;
}
.prose a {
  color: hsl(var(--primary));
  text-decoration: none;
}
.prose a:hover {
    text-decoration: underline;
}
.prose ul {
    list-style-type: disc;
    padding-left: 1.5em;
    margin-bottom: 1.25em;
}
.prose li {
    margin-bottom: 0.5em;
}
`;

export const Head = () => <style>{styles}</style>;

    