"use client";

import { useEffect, useState } from "react";

export default function PrivacyPolicyPage() {
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        setCurrentDate(new Date().toLocaleDateString('sk-SK', { year: 'numeric', month: 'long', day: 'numeric' }));
    }, []);

    return (
        <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-4xl mx-auto prose prose-invert lg:prose-xl text-foreground/90">
                <h1 className="font-headline text-4xl md:text-5xl font-bold mb-8">Zásady ochrany osobných údajov</h1>

                <p className="lead text-xl text-muted-foreground">
                    Vaše súkromie je pre nás dôležité. V týchto zásadách ochrany osobných údajov vám vysvetlíme, ako zhromažďujeme, používame a chránime vaše osobné údaje.
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
                <p>Posledná aktualizácia: {currentDate}</p>
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
