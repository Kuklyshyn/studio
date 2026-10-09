import type { Lang } from "./landing";

// Questions people ask before ordering a website or e-shop. Prices and scope match content/pricing.ts.
export const homeFaq: Record<Lang, { q: string; a: string }[]> = {
  sk: [
    { q: "Koľko stojí web alebo e-shop?", a: "Web typu Start do 5 stránok začína od 990 € bez DPH, firemný web typu Business od 1 990 € bez DPH a e-shop od 3 500 € bez DPH. Presnú cenu potvrdím v ponuke podľa rozsahu." },
    { q: "Ako dlho trvá tvorba webu?", a: "Orientačne od 4 týždňov pre web a od 8 týždňov pre e-shop. Termín závisí od rozsahu a od toho, ako rýchlo dodáte podklady." },
    { q: "Čo musím pripraviť?", a: "Dizajn alebo podklady, texty a fotografie. Pri úvodnom rozhovore spolu určíme, čo je potrebné a v akom poradí." },
    { q: "Aké technológie používate?", a: "Vue 3, Nuxt, React, TypeScript, WordPress a WooCommerce, Node.js, PHP, Laravel a Java. Konkrétnu voľbu odporučím podľa vášho projektu." },
    { q: "Staráte sa o web aj po spustení?", a: "Po spustení ponúkam podporu a údržbu: aktualizácie, opravy a úpravy podľa dohody." },
    { q: "Pracujete aj mimo Bratislavy?", a: "Áno. Pracujem s klientmi na celom Slovensku. Komunikujeme online alebo osobne v Bratislave." },
  ],
  en: [
    { q: "How much does a website or e-shop cost?", a: "A Start website of up to 5 pages begins at €990 excl. VAT, a Business company website at €1,990 excl. VAT and an e-shop at €3,500 excl. VAT. I confirm the exact price in a quote based on the scope." },
    { q: "How long does it take to build a website?", a: "Roughly from 4 weeks for a website and from 8 weeks for an e-shop. The timeline depends on the scope and on how quickly you provide materials." },
    { q: "What do I need to prepare?", a: "A design or materials, copy and photos. In the first conversation we decide together what is needed and in what order." },
    { q: "Which technologies do you use?", a: "Vue 3, Nuxt, React, TypeScript, WordPress and WooCommerce, Node.js, PHP, Laravel and Java. I recommend the exact choice for your project." },
    { q: "Do you look after the site after launch?", a: "After launch I offer support and maintenance: updates, fixes and changes as agreed." },
    { q: "Do you work outside Bratislava?", a: "Yes. I work with clients across Slovakia. We communicate online or in person in Bratislava." },
  ],
};
