// Landing pages written for what people search for. Each page has its own text, not a template with swapped words.
// Prices match content/pricing.ts; scope statements match what is offered: no ongoing SEO, no ads, client supplies design and copy.

export type Lang = "sk" | "en";

export type LandingKey = "web-development" | "eshop-development" | "booking-system" | "custom-crm";

export type LandingContent = {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  sections: { title: string; paragraphs?: string[]; bullets?: string[] }[];
  faq: { q: string; a: string }[];
  ctaTitle: string;
  navLabel: string;
};

export const landingKeys: LandingKey[] = ["web-development", "eshop-development", "booking-system", "custom-crm"];

export const landingPages: Record<LandingKey, Record<Lang, LandingContent>> = {
  "web-development": {
    sk: {
      navLabel: "Tvorba webov v Bratislave",
      metaTitle: "Tvorba web stránok Bratislava",
      metaDescription: "Tvorba webových stránok na mieru v Bratislave: rýchly web so systémom na správu obsahu a technickým SEO. Ceny od 990 € bez DPH.",
      h1: "Tvorba webových stránok v Bratislave",
      intro: "Web má firme prinášať dopyty, nie len existovať. Tvorím rýchle a prehľadné webové stránky na mieru pre firmy z Bratislavy a z celého Slovenska: od jednoduchej vizitky po viacjazyčný firemný web.",
      sections: [
        {
          title: "Pre koho je web na mieru",
          paragraphs: [
            "Web na mieru sa hodí firmám a živnostníkom, ktorí potrebujú jasne vysvetliť, čo robia, a dať zákazníkovi jednoduchý spôsob, ako sa ozvať. Typicky ide o služby, remeslá, kancelárie, kliniky alebo malé obchody, ktoré už nechcú riešiť dopyty iba cez sociálne siete.",
          ],
        },
        {
          title: "Čo dostanete",
          bullets: [
            "Stránky podľa dohodnutého rozsahu, od 5 po 12",
            "Systém na správu obsahu, v ktorom texty zmeníte sami",
            "Slovenčinu a podľa potreby aj angličtinu",
            "Kontaktný formulár napojený na váš e-mail",
            "Technické SEO: správne nadpisy, mapa stránok a rýchle načítanie",
            "Zobrazenie na mobile, tablete aj počítači",
          ],
        },
        {
          title: "Ako prebieha spolupráca",
          paragraphs: [
            "Najprv si zavoláme alebo napíšeme a ujasníme cieľ webu a rozsah. Potom dohodneme štruktúru stránok a harmonogram. Vizuálny dizajn a texty dodáte vy, prípadne ich pripravíte s vlastným dizajnérom a textárom. Ja web naprogramujem, otestujem na mobile aj na počítači a po schválení spustím. Po spustení ponúkam podporu a údržbu.",
          ],
        },
        {
          title: "Koľko to stojí a ako dlho trvá",
          paragraphs: [
            "Web typu Start do 5 stránok začína od 990 € bez DPH. Firemný web typu Business do 12 stránok s blogom a viacerými jazykmi začína od 1 990 € bez DPH. Orientačný termín je od 4 týždňov. Presnú cenu potvrdím v ponuke po úvodnom rozhovore, keď poznám rozsah.",
          ],
        },
      ],
      faq: [
        { q: "Môžem si texty na webe meniť sám?", a: "Áno. Web má systém na správu obsahu, v ktorom upravíte texty, obrázky aj ceny bez programátora." },
        { q: "Zabezpečíte aj dizajn a texty?", a: "Dizajn, texty, fotografie a videá dodáva klient. Ja web naprogramujem podľa týchto podkladov." },
        { q: "Bude web fungovať na mobile?", a: "Áno. Každý web je responzívny a testujem ho na mobile aj na počítači." },
        { q: "Staráte sa o web aj po spustení?", a: "Po spustení ponúkam podporu a údržbu: aktualizácie, opravy a úpravy podľa dohody." },
        { q: "Robíte aj SEO a reklamu?", a: "V cene je technické SEO: štruktúra stránok, rýchlosť a mapa stránok. Priebežné SEO a správu reklamy neponúkam." },
      ],
      ctaTitle: "Máte projekt? Napíšte mi.",
    },
    en: {
      navLabel: "Web development in Bratislava",
      metaTitle: "Web Development in Bratislava",
      metaDescription: "Custom website development in Bratislava: a fast site with a content system and technical SEO. Prices from €990 excl. VAT.",
      h1: "Website development in Bratislava",
      intro: "A website should bring enquiries, not just exist. I build fast, clear websites to measure for companies in Bratislava and across Slovakia: from a simple business card to a multilingual company site.",
      sections: [
        {
          title: "Who a custom website is for",
          paragraphs: [
            "A custom website suits companies and freelancers who need to explain clearly what they do and give customers an easy way to get in touch. Typical cases are services, trades, offices, clinics or small shops that no longer want to handle enquiries only through social media.",
          ],
        },
        {
          title: "What you get",
          bullets: [
            "Pages as agreed, from 5 up to 12",
            "A content system where you change the texts yourself",
            "Slovak and, if needed, English",
            "A contact form connected to your e-mail",
            "Technical SEO: proper headings, a sitemap and fast loading",
            "A layout that works on phones, tablets and computers",
          ],
        },
        {
          title: "How we work together",
          paragraphs: [
            "First we talk or write and clarify the goal of the site and its scope. Then we agree the page structure and a schedule. You provide the visual design and the copy, or prepare them with your own designer and copywriter. I build the site, test it on mobile and desktop and launch it after your approval. After launch I offer support and maintenance.",
          ],
        },
        {
          title: "Price and timeline",
          paragraphs: [
            "A Start website of up to 5 pages begins at €990 excl. VAT. A Business company website of up to 12 pages with a blog and several languages begins at €1,990 excl. VAT. The indicative timeline starts at 4 weeks. I confirm the exact price in a quote after the first conversation, once I know the scope.",
          ],
        },
      ],
      faq: [
        { q: "Can I edit the texts on the site myself?", a: "Yes. The site has a content management system where you edit texts, images and prices without a programmer." },
        { q: "Do you also provide design and copy?", a: "Design, copy, photos and video are provided by the client. I build the site from those materials." },
        { q: "Will the site work on mobile?", a: "Yes. Every site is responsive and I test it on mobile and on desktop." },
        { q: "Do you look after the site after launch?", a: "After launch I offer support and maintenance: updates, fixes and changes as agreed." },
        { q: "Do you also do SEO and advertising?", a: "Technical SEO is included: page structure, speed and a sitemap. I do not offer ongoing SEO or ad management." },
      ],
      ctaTitle: "Have a project? Write to me.",
    },
  },

  "eshop-development": {
    sk: {
      navLabel: "Tvorba e-shopu na mieru",
      metaTitle: "Tvorba e-shopu na mieru",
      metaDescription: "Tvorba e-shopu na mieru s WooCommerce: katalóg, platby, doprava a administrácia objednávok. Ceny od 3 500 € bez DPH. Ponuka zadarmo.",
      h1: "Tvorba e-shopu na mieru",
      intro: "E-shop má predávať a zároveň sa dať jednoducho spravovať. Stavám e-shopy na WooCommerce, s dôrazom na rýchlosť, mobilný nákup a prehľadnú administráciu. Skúsenosti mám aj s front-endom na platforme Salesforce Commerce Cloud.",
      sections: [
        {
          title: "Čo e-shop obsahuje",
          bullets: [
            "Katalóg produktov s kategóriami a filtrami",
            "Košík a objednávkový proces optimalizovaný pre mobil",
            "Platbu online podľa dohodnutej platobnej brány",
            "Dopravu na Slovensku podľa vašich prepravcov",
            "Administráciu objednávok a produktov",
            "Základné napojenie na účtovníctvo",
          ],
        },
        {
          title: "Platby, doprava a účtovníctvo",
          paragraphs: [
            "Platobnú bránu a dopravcov vyberieme spolu podľa vášho podnikania. Základné napojenie na účtovníctvo znamená prenos objednávok do účtovného systému podľa dohody. Hlbšie prepojenie s ERP alebo skladom je samostatný rozsah, ktorý popíšem v ponuke.",
          ],
        },
        {
          title: "Import produktov",
          paragraphs: [
            "Ak už máte produkty v tabuľke alebo v starom e-shope, pomôžem s ich importom do nového obchodu, aby ste ich nemuseli zadávať ručne.",
          ],
        },
        {
          title: "Cena a termín",
          paragraphs: [
            "E-shop začína od 3 500 € bez DPH a orientačný termín je od 8 týždňov. Cenu ovplyvňuje počet produktov, platobné a dopravné integrácie a vlastné funkcie. Presnú sumu určím v ponuke po úvodnom rozhovore.",
          ],
        },
      ],
      faq: [
        { q: "Prečo WooCommerce?", a: "WooCommerce sa hodí pre malé a stredné e-shopy, ktoré chcú plnú kontrolu nad obchodom a nízke mesačné náklady. Pri väčších alebo špecifických projektoch navrhnem inú cestu až po rozhovore." },
        { q: "Čo je v cene e-shopu?", a: "Katalóg, objednávky, platba, doprava a administrácia. Dizajn, texty a fotografie produktov dodáva klient." },
        { q: "Viete importovať existujúce produkty?", a: "Áno. Produkty z tabuľky alebo zo starého e-shopu viem naimportovať do nového obchodu." },
        { q: "Ako dlho trvá vývoj e-shopu?", a: "Orientačne od 8 týždňov. Presný termín závisí od rozsahu a od toho, ako rýchlo dodáte podklady." },
        { q: "Zabezpečíte aj marketing e-shopu?", a: "Nie. Starám sa o technickú stránku e-shopu: vývoj, rýchlosť, technické SEO a údržbu." },
      ],
      ctaTitle: "Plánujete e-shop? Napíšte mi.",
    },
    en: {
      navLabel: "Custom e-shop development",
      metaTitle: "Custom E-shop Development",
      metaDescription: "Custom e-shop development with WooCommerce: catalogue, payments, delivery and order administration. Prices from €3,500 excl. VAT.",
      h1: "Custom e-shop development",
      intro: "An e-shop should sell and also be easy to manage. I build e-shops on WooCommerce, with a focus on speed, mobile buying and a clear admin. I also have front-end experience on the Salesforce Commerce Cloud platform.",
      sections: [
        {
          title: "What an e-shop includes",
          bullets: [
            "A product catalogue with categories and filters",
            "A cart and checkout optimized for mobile",
            "Online payment through the agreed payment gateway",
            "Delivery in Slovakia with your carriers",
            "Order and product administration",
            "Basic accounting integration",
          ],
        },
        {
          title: "Payments, delivery and accounting",
          paragraphs: [
            "We choose the payment gateway and carriers together, based on your business. Basic accounting integration means passing orders to the accounting system as agreed. A deeper link with an ERP or a warehouse is a separate scope that I describe in the quote.",
          ],
        },
        {
          title: "Product import",
          paragraphs: [
            "If you already have products in a spreadsheet or in an old shop, I help import them into the new store so you do not have to enter them by hand.",
          ],
        },
        {
          title: "Price and timeline",
          paragraphs: [
            "An e-shop begins at €3,500 excl. VAT and the indicative timeline starts at 8 weeks. The price depends on the number of products, payment and delivery integrations and custom features. I set the exact amount in a quote after the first conversation.",
          ],
        },
      ],
      faq: [
        { q: "Why WooCommerce?", a: "WooCommerce suits small and medium e-shops that want full control of the store and low monthly costs. For larger or specific projects I suggest another route after a conversation." },
        { q: "What does the e-shop price include?", a: "The catalogue, orders, payment, delivery and administration. Design, copy and product photos are provided by the client." },
        { q: "Can you import existing products?", a: "Yes. I can import products from a spreadsheet or from an old shop into the new store." },
        { q: "How long does an e-shop take?", a: "Roughly from 8 weeks. The exact timeline depends on the scope and on how quickly you provide materials." },
        { q: "Do you also handle e-shop marketing?", a: "No. I take care of the technical side of the e-shop: development, speed, technical SEO and maintenance." },
      ],
      ctaTitle: "Planning an e-shop? Write to me.",
    },
  },

  "booking-system": {
    sk: {
      navLabel: "Rezervačný systém na mieru",
      metaTitle: "Rezervačný systém na mieru",
      metaDescription: "Rezervačný systém na mieru: kalendár voľných termínov, rezervácie cez web, potvrdenia e-mailom a správa rezervácií. Napíšte mi o projekte.",
      h1: "Rezervačný systém na mieru",
      intro: "Rezervácie cez telefón a správy v sociálnych sieťach stoja čas a vedú k chybám. Rezervačný systém na mieru zobrazí voľné termíny, zapíše objednávku a pošle potvrdenie, takže zákazník si vyberie čas sám.",
      sections: [
        {
          title: "Čo systém robí",
          bullets: [
            "Kalendár s voľnými termínmi a dĺžkou služby",
            "Rezervácie cez web bez telefonátov",
            "Potvrdenia a pripomienky e-mailom",
            "Správu rezervácií pre vás aj vašich zamestnancov",
            "Voliteľne platbu vopred",
            "Napojenie na váš web alebo e-shop",
          ],
        },
        {
          title: "Skúsenosť s rezerváciami",
          paragraphs: [
            "Pracoval som na vlastnom rezervačnom kalendári pre autoservis a na vyhľadávaní vozidla podľa evidenčného čísla, ktoré pomáha nájsť vhodné služby. Rovnaký prístup sa dá použiť pre servisy, salóny, kliniky, poradenstvo alebo prenájmy.",
          ],
        },
        {
          title: "Hotový nástroj alebo systém na mieru",
          paragraphs: [
            "Hotový rezervačný nástroj stačí, keď máte jednoduchý proces. Systém na mieru sa oplatí, keď máte špecifické pravidlá, napríklad viac pobočiek, rôzne zdroje alebo ceny podľa času, alebo ak ho potrebujete prepojiť s vlastným systémom.",
          ],
        },
        {
          title: "Cena a termín",
          paragraphs: [
            "Cena závisí od rozsahu, preto ju určím po úvodnom rozhovore a pripravím nezáväznú ponuku. Jednoduchý systém môže byť hotový za niekoľko týždňov. Termín potvrdím v ponuke.",
          ],
        },
      ],
      faq: [
        { q: "Môžu si zákazníci rezervovať aj z mobilu?", a: "Áno. Rezervačný formulár je prispôsobený mobilom a funguje na všetkých zariadeniach." },
        { q: "Dá sa systém prepojiť s mojimi ďalšími systémami?", a: "Áno. Integrácie cez API riešim podľa dohody a opíšem ich v ponuke." },
        { q: "Pre koho sa systém hodí?", a: "Pre firmy, ktoré predávajú termíny: servisy, salóny, kliniky, poradenstvo alebo prenájmy." },
        { q: "Ako dlho trvá vývoj?", a: "Podľa rozsahu. Jednoduchý systém môže byť hotový za niekoľko týždňov a termín potvrdím v ponuke." },
        { q: "Môžem si zmeny nastaviť sám?", a: "Áno. Dostupné časy, služby a ceny sa dajú upravovať v administrácii bez zásahu programátora." },
      ],
      ctaTitle: "Chcete rezervácie online? Napíšte mi.",
    },
    en: {
      navLabel: "Custom booking system",
      metaTitle: "Custom Booking System",
      metaDescription: "A custom booking system: a calendar of free slots, bookings through your site, e-mail confirmations and booking management.",
      h1: "Custom booking system",
      intro: "Bookings by phone and by social media messages cost time and lead to mistakes. A custom booking system shows free slots, records the booking and sends a confirmation, so the customer picks a time on their own.",
      sections: [
        {
          title: "What the system does",
          bullets: [
            "A calendar with free slots and service length",
            "Bookings through your website without phone calls",
            "Confirmations and reminders by e-mail",
            "Booking management for you and your staff",
            "Optional payment in advance",
            "A link to your website or e-shop",
          ],
        },
        {
          title: "Experience with bookings",
          paragraphs: [
            "I worked on a custom booking calendar for a car service and on a vehicle lookup by registration number that helps find suitable services. The same approach fits workshops, salons, clinics, consulting or rentals.",
          ],
        },
        {
          title: "Ready-made tool or custom system",
          paragraphs: [
            "A ready-made booking tool is enough when your process is simple. A custom system pays off when you have specific rules, such as several branches, different resources or prices by time, or when it must connect to your own system.",
          ],
        },
        {
          title: "Price and timeline",
          paragraphs: [
            "The price depends on the scope, so I set it after the first conversation and prepare a non-binding quote. A simple system can be ready in a few weeks. I confirm the timeline in the quote.",
          ],
        },
      ],
      faq: [
        { q: "Can customers book from a phone?", a: "Yes. The booking form is built for mobile and works on all devices." },
        { q: "Can the system connect to my other systems?", a: "Yes. I handle API integrations as agreed and describe them in the quote." },
        { q: "Who is the system for?", a: "Companies that sell appointments: workshops, salons, clinics, consulting or rentals." },
        { q: "How long does development take?", a: "It depends on the scope. A simple system can be ready in a few weeks, and I confirm the timeline in the quote." },
        { q: "Can I change the settings myself?", a: "Yes. Available times, services and prices can be edited in the admin without a programmer." },
      ],
      ctaTitle: "Want online bookings? Write to me.",
    },
  },

  "custom-crm": {
    sk: {
      navLabel: "CRM systém na mieru",
      metaTitle: "CRM systém na mieru",
      metaDescription: "CRM systém na mieru pre malé firmy: evidencia klientov, dopyty, história komunikácie a pripomienky. Prispôsobený vášmu procesu.",
      h1: "CRM systém na mieru",
      intro: "Keď sú klienti a dopyty rozhádzané v tabuľkách a e-mailoch, niektoré sa stratia. CRM na mieru ich drží na jednom mieste a prispôsobí sa vášmu procesu, nie naopak.",
      sections: [
        {
          title: "Čo CRM rieši",
          bullets: [
            "Evidenciu klientov a kontaktov",
            "Históriu komunikácie pri každom klientovi",
            "Stav dopytov od nového po uzavretý",
            "Pripomienky na ďalší krok",
            "Jednoduché prehľady",
            "Prepojenie s webom a formulármi",
          ],
        },
        {
          title: "Prečo na mieru",
          paragraphs: [
            "Hotové CRM často obsahuje veľa funkcií, ktoré nepoužijete, a chýbajú tie, ktoré potrebujete. Systém na mieru obsahuje len to, čo váš tím naozaj používa, a dá sa rozširovať postupne.",
          ],
        },
        {
          title: "Skúsenosť",
          paragraphs: [
            "Vyvíjal som interný CRM systém pre firmu, vrátane práce s mapami a lokalitou klientov. Technicky ide o web aplikáciu, ktorá sa dá prepojiť s vašimi formulármi a ďalšími systémami.",
          ],
        },
        {
          title: "Ako začať",
          paragraphs: [
            "Začneme rozhovorom o tom, ako dnes vediete klientov a kde sa strácajú informácie. Potom navrhnem najmenší užitočný rozsah, ktorý môžete začať používať, a ďalšie funkcie pridáme podľa potreby. Cenu určím v ponuke podľa rozsahu.",
          ],
        },
      ],
      faq: [
        { q: "Pre koho je CRM na mieru?", a: "Pre malé firmy a tímy, ktoré majú vlastný proces a hotové nástroje im nestačia alebo sú zbytočne zložité." },
        { q: "Dá sa CRM napojiť na formulár na webe?", a: "Áno. Dopyty z formulára sa môžu ukladať priamo do CRM." },
        { q: "Môžem začať s menším rozsahom?", a: "Áno. Začíname najmenším užitočným rozsahom a pridávame funkcie postupne." },
        { q: "Ako dlho trvá vývoj?", a: "Podľa rozsahu. Termín a cenu potvrdím v ponuke po úvodnom rozhovore." },
        { q: "Môžem dáta z tabuľky preniesť do CRM?", a: "Áno. Existujúce kontakty z tabuľky viem naimportovať do nového systému." },
      ],
      ctaTitle: "Chcete mať klientov na jednom mieste? Napíšte mi.",
    },
    en: {
      navLabel: "Custom CRM system",
      metaTitle: "Custom CRM System",
      metaDescription: "A custom CRM system for small companies: client records, enquiries, communication history and reminders, built around your process.",
      h1: "Custom CRM system",
      intro: "When clients and enquiries are scattered across spreadsheets and e-mails, some get lost. A custom CRM keeps them in one place and fits your process, not the other way round.",
      sections: [
        {
          title: "What a CRM solves",
          bullets: [
            "Records of clients and contacts",
            "Communication history for each client",
            "The status of enquiries from new to closed",
            "Reminders for the next step",
            "Simple overviews",
            "A link to your website and forms",
          ],
        },
        {
          title: "Why custom",
          paragraphs: [
            "A ready-made CRM often has many features you will not use and lacks the ones you need. A custom system contains only what your team actually uses, and it can grow step by step.",
          ],
        },
        {
          title: "Experience",
          paragraphs: [
            "I developed an internal CRM system for a company, including work with maps and client locations. Technically it is a web application that can be connected to your forms and other systems.",
          ],
        },
        {
          title: "How to start",
          paragraphs: [
            "We start with a conversation about how you manage clients today and where information gets lost. Then I propose the smallest useful scope you can start using, and we add further features as needed. I set the price in the quote according to the scope.",
          ],
        },
      ],
      faq: [
        { q: "Who is a custom CRM for?", a: "Small companies and teams that have their own process and for whom ready-made tools are not enough or are needlessly complex." },
        { q: "Can the CRM connect to a form on the website?", a: "Yes. Enquiries from a form can be saved directly into the CRM." },
        { q: "Can I start with a smaller scope?", a: "Yes. We start with the smallest useful scope and add features gradually." },
        { q: "How long does development take?", a: "It depends on the scope. I confirm the timeline and price in a quote after the first conversation." },
        { q: "Can I move data from a spreadsheet into the CRM?", a: "Yes. I can import existing contacts from a spreadsheet into the new system." },
      ],
      ctaTitle: "Want your clients in one place? Write to me.",
    },
  },
};
