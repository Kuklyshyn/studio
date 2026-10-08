type Locale = "en" | "sk";
type Localized = Record<Locale, string>;

export type PortfolioCategory = "websites" | "eshops" | "saas" | "apps";

export type PortfolioProject = {
  slug: string;
  category: PortfolioCategory;
  title: Localized;
  description: Localized;
  content: Localized;
  image: string;
  hint: string;
  tags: string[];
};

// Case studies are anonymized: no client, employer or brand names, and no screenshots of client work.
export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "real-estate-website-developer",
    category: "websites",
    title: {
      en: "Real-estate website for a property developer",
      sk: "Realitný web pre developera",
    },
    description: {
      en: "Renewal of an existing real-estate website, including fixing issues left by a previous developer.",
      sk: "Obnova existujúceho realitného webu vrátane opravy chýb po predchádzajúcom vývojárovi.",
    },
    content: {
      en: `
      <h3>Platform development</h3>
      <p>Full-cycle work on a WordPress-based real-estate website. My responsibilities included:</p>
      <ul>
        <li>Developing a custom WordPress theme based on the client's designs.</li>
        <li>Integrating and customizing a plugin for property management and online sales.</li>
        <li>Using Advanced Custom Fields (ACF) for flexible, easy-to-manage content sections.</li>
        <li>Writing custom PHP and JavaScript for specific features and a smooth property search.</li>
      </ul>
    `,
      sk: `
      <h3>Vývoj platformy</h3>
      <p>Kompletný vývoj webu na báze WordPressu pre realitnú spoločnosť. Mojou úlohou bolo:</p>
      <ul>
        <li>Vytvoriť vlastnú šablónu WordPressu podľa návrhov klienta.</li>
        <li>Integrovať a upraviť plugin na správu nehnuteľností a online predaj.</li>
        <li>Použiť Advanced Custom Fields (ACF) na flexibilné a ľahko spravovateľné obsahové sekcie.</li>
        <li>Napísať vlastný PHP a JavaScript kód pre špecifické funkcie a plynulé vyhľadávanie nehnuteľností.</li>
      </ul>
    `,
    },
    image: "/portfolio/real-estate-website-developer.webp",
    hint: "real-estate website",
    tags: ["WordPress", "WooCommerce", "PHP", "JavaScript", "E-commerce"],
  },
  {
    slug: "fashion-eshop-salesforce",
    category: "eshops",
    title: {
      en: "Fashion e-commerce platform on Salesforce Commerce Cloud",
      sk: "Módny e-shop na platforme Salesforce Commerce Cloud",
    },
    description: {
      en: "Front-end development for a premium fashion online store, focused on interface quality, performance and responsive design.",
      sk: "Front-end vývoj prémiového módneho e-shopu so zameraním na kvalitu rozhrania, výkon a responzívny dizajn.",
    },
    content: {
      en: `
      <h3>Project overview</h3>
      <p>The goal was a high-quality shopping experience for an international fashion customer base, built on the Salesforce Commerce Cloud platform, with attention to detail and fast performance on every device.</p>
      <h3>My contribution</h3>
      <p>I turned complex UI/UX designs into functional, pixel-accurate front-end components, working with HTML5 (PUG), SCSS and vanilla JavaScript to deliver a responsive interface.</p>
    `,
      sk: `
      <h3>Prehľad projektu</h3>
      <p>Cieľom bolo ponúknuť kvalitný nákupný zážitok pre medzinárodnú klientelu v móde, postavený na platforme Salesforce Commerce Cloud, s dôrazom na detail a rýchly výkon na každom zariadení.</p>
      <h3>Môj podiel</h3>
      <p>Premieňal som zložité UI/UX návrhy na funkčné a presné front-end komponenty s použitím HTML5 (PUG), SCSS a vanilla JavaScriptu.</p>
    `,
    },
    image: "/portfolio/fashion-eshop-salesforce.webp",
    hint: "fashion online store",
    tags: ["SFCC", "JavaScript", "HTML5/PUG", "CSS/SCSS", "E-commerce"],
  },
  {
    slug: "car-service-booking-system",
    category: "websites",
    title: {
      en: "Online booking system for car services",
      sk: "Online rezervačný systém pre autoservis",
    },
    description: {
      en: "Front-end development of a vehicle lookup module and a custom appointment calendar that simplify booking car services.",
      sk: "Front-end vývoj modulu na vyhľadanie vozidla a vlastného kalendára termínov, ktorý zjednodušuje objednávanie autoservisu.",
    },
    content: {
      en: `
      <h3>Key achievements</h3>
      <p>The project simplified the customer journey for booking car services:</p>
      <ul>
        <li><strong>Vehicle lookup module:</strong> front-end for a registration-based vehicle lookup that helps users find compatible parts and services.</li>
        <li><strong>Custom booking calendar:</strong> a bespoke reservation calendar with a smooth, intuitive experience for scheduling appointments.</li>
      </ul>
      <p>Technologies: HTML5 (PUG), SCSS and JavaScript within an enterprise e-commerce platform.</p>
    `,
      sk: `
      <h3>Kľúčové výsledky</h3>
      <p>Projekt zjednodušil cestu zákazníka pri objednávaní autoservisu:</p>
      <ul>
        <li><strong>Modul vyhľadania vozidla:</strong> front-end pre vyhľadanie podľa evidenčného čísla, ktorý pomáha nájsť kompatibilné diely a služby.</li>
        <li><strong>Vlastný rezervačný kalendár:</strong> kalendár na mieru s plynulým a intuitívnym plánovaním termínov.</li>
      </ul>
      <p>Technológie: HTML5 (PUG), SCSS a JavaScript v prostredí firemnej e-commerce platformy.</p>
    `,
    },
    image: "/portfolio/car-service-booking-system.webp",
    hint: "car service booking",
    tags: ["SFCC", "JavaScript", "Custom Calendar", "UI/UX"],
  },
  {
    slug: "retail-eshop-large-catalog",
    category: "eshops",
    title: {
      en: "Retail online store with a large product catalogue",
      sk: "Maloobchodný e-shop s veľkým katalógom produktov",
    },
    description: {
      en: "Front-end development and maintenance of a high-traffic retail online store with a large product catalogue.",
      sk: "Front-end vývoj a údržba maloobchodného online obchodu s vysokou návštevnosťou a veľkým katalógom produktov.",
    },
    content: {
      en: `
      <h3>Project scope</h3>
      <p>I contributed to the front-end architecture and maintenance of a large retail e-commerce site. The focus was a stable, high-performance platform that handles a large catalogue and high traffic while staying easy to navigate.</p>
      <p>The work included HTML5 (PUG), SCSS and JavaScript for new features and the optimization of existing ones, keeping the user experience consistent across the site.</p>
    `,
      sk: `
      <h3>Rozsah projektu</h3>
      <p>Podieľal som sa na front-end architektúre a údržbe veľkého maloobchodného e-shopu. Zameranie bolo na stabilnú a výkonnú platformu, ktorá zvláda veľký katalóg a vysokú návštevnosť a zostáva ľahko prehľadná.</p>
      <p>Práca zahŕňala HTML5 (PUG), SCSS a JavaScript na nové funkcie a optimalizáciu existujúcich, s konzistentným používateľským zážitkom na celom webe.</p>
    `,
    },
    image: "/portfolio/retail-eshop-large-catalog.webp",
    hint: "retail online store",
    tags: ["SFCC", "JavaScript", "HTML5/PUG", "CSS/SCSS", "Retail"],
  },
  {
    slug: "interactive-expert-map-platform",
    category: "saas",
    title: {
      en: "Interactive expert search platform with a map",
      sk: "Interaktívna platforma na vyhľadávanie odborníkov s mapou",
    },
    description: {
      en: "Key developer of a platform for finding and contacting professionals, with an interactive map and location-based filtering built with Vue.js and Nuxt.",
      sk: "Kľúčový vývojár platformy na vyhľadávanie a kontakt s odborníkmi, s interaktívnou mapou a filtrovaním podľa polohy postavenou na Vue.js a Nuxte.",
    },
    content: {
      en: `
      <h3>Technical implementation</h3>
      <p>The core of the project was a dynamic, responsive interface built around a map.</p>
      <ul>
        <li><strong>Interactive map:</strong> an integration that shows professionals by location, with custom markers and interactive elements.</li>
        <li><strong>Location-based filtering:</strong> logic that adapts the filters to the user's location and updates the map dynamically.</li>
      </ul>
      <p>The project used Vue.js, Nuxt and third-party map APIs.</p>
    `,
      sk: `
      <h3>Technická implementácia</h3>
      <p>Jadrom projektu bolo dynamické a responzívne rozhranie postavené okolo mapy.</p>
      <ul>
        <li><strong>Interaktívna mapa:</strong> integrácia, ktorá zobrazuje odborníkov podľa polohy, s vlastnými markermi a interaktívnymi prvkami.</li>
        <li><strong>Filtrovanie podľa polohy:</strong> logika, ktorá prispôsobuje filtre polohe používateľa a dynamicky aktualizuje mapu.</li>
      </ul>
      <p>Projekt používal Vue.js, Nuxt a API máp tretích strán.</p>
    `,
    },
    image: "/portfolio/interactive-expert-map-platform.webp",
    hint: "interactive map platform",
    tags: ["Vue.js", "Nuxt", "Google Maps API", "JavaScript"],
  },
  {
    slug: "fashion-eshop-woocommerce",
    category: "eshops",
    title: {
      en: "Fashion online store on WordPress and WooCommerce",
      sk: "Módny online obchod na WordPresse a WooCommerce",
    },
    description: {
      en: "Full-cycle development of a fashion e-commerce store with a custom theme and advanced shop functionality.",
      sk: "Kompletný vývoj módneho e-shopu s vlastnou šablónou a pokročilými funkciami obchodu.",
    },
    content: {
      en: `
      <h3>Platform development</h3>
      <p>Full-cycle development of a WordPress-based e-commerce store. My responsibilities included:</p>
      <ul>
        <li>Developing a custom WordPress theme based on the client's designs.</li>
        <li>Integrating and customizing WooCommerce for product management and online sales.</li>
        <li>Using Advanced Custom Fields (ACF) for flexible, easy-to-manage content sections.</li>
        <li>Writing custom PHP and JavaScript for unique features and a smooth shopping experience.</li>
      </ul>
    `,
      sk: `
      <h3>Vývoj platformy</h3>
      <p>Kompletný vývoj e-shopu na báze WordPressu. Mojou úlohou bolo:</p>
      <ul>
        <li>Vytvoriť vlastnú šablónu WordPressu podľa návrhov klienta.</li>
        <li>Integrovať a upraviť WooCommerce na správu produktov a online predaj.</li>
        <li>Použiť Advanced Custom Fields (ACF) na flexibilné a ľahko spravovateľné obsahové sekcie.</li>
        <li>Napísať vlastný PHP a JavaScript kód pre špecifické funkcie a plynulý nákupný zážitok.</li>
      </ul>
    `,
    },
    image: "/portfolio/fashion-eshop-woocommerce.webp",
    hint: "fashion boutique website",
    tags: ["Wordpress", "WooCommerce", "PHP", "JavaScript", "E-commerce"],
  },
  {
    slug: "online-consultation-platform",
    category: "saas",
    title: {
      en: "Bilingual platform for online consultations",
      sk: "Dvojjazyčná platforma pre online konzultácie",
    },
    description: {
      en: "Front-end development of a bilingual platform that connects experts with clients for secure, real-time online consultations.",
      sk: "Front-end vývoj dvojjazyčnej platformy, ktorá spája odborníkov s klientmi pre bezpečné online konzultácie v reálnom čase.",
    },
    content: {
      en: `
      <h3>Platform features</h3>
      <p>The platform was designed as a trusted space for online consultations. My work focused on the front-end of its core features:</p>
      <ul>
        <li>A secure, intuitive interface for both experts and clients, built with React.</li>
        <li>Real-time communication for live consultations using Socket.IO and Express.js.</li>
        <li>Full bilingual support and accessibility for an international audience.</li>
      </ul>
    `,
      sk: `
      <h3>Funkcie platformy</h3>
      <p>Platforma bola navrhnutá ako dôveryhodný priestor pre online konzultácie. Moja práca sa sústredila na front-end jej hlavných funkcií:</p>
      <ul>
        <li>Bezpečné a intuitívne rozhranie pre odborníkov aj klientov postavené na Reacte.</li>
        <li>Komunikácia v reálnom čase pre živé konzultácie pomocou Socket.IO a Express.js.</li>
        <li>Plná dvojjazyčnosť a prístupnosť pre medzinárodné publikum.</li>
      </ul>
    `,
    },
    image: "/portfolio/online-consultation-platform.webp",
    hint: "online consultation platform",
    tags: ["React", "Socket.io", "ExpressJS", "JavaScript", "Real-time"],
  },
  {
    slug: "internal-crm-system",
    category: "apps",
    title: {
      en: "Internal CRM system for a company",
      sk: "Interný CRM systém pre firmu",
    },
    description: {
      en: "Lead development of an internal CRM built from scratch with Vue 3 and Vuetify to streamline company operations.",
      sk: "Vedenie vývoja interného CRM systému postaveného od základov na Vue 3 a Vuetify, ktorý zefektívňuje chod firmy.",
    },
    content: {
      en: `
      <h3>System functionality</h3>
      <p>A tool tailored to the company's needs. Key functionality included:</p>
      <ul>
        <li>A modular, scalable front-end architecture with Vue 3.</li>
        <li>A clean, efficient interface built with the Vuetify component library.</li>
        <li>Google Maps API integration for location-based features and client visualization.</li>
      </ul>
      <p>This project demonstrates my ability to build complex, data-driven applications with modern front-end technologies.</p>
    `,
      sk: `
      <h3>Funkcionalita systému</h3>
      <p>Nástroj šitý na mieru potrebám firmy. Kľúčové funkcie zahŕňali:</p>
      <ul>
        <li>Modulárnu a škálovateľnú front-end architektúru vo Vue 3.</li>
        <li>Čisté a efektívne rozhranie s knižnicou komponentov Vuetify.</li>
        <li>Integráciu Google Maps API pre funkcie podľa polohy a vizualizáciu klientov.</li>
      </ul>
      <p>Projekt ukazuje moju schopnosť budovať zložité, dátovo orientované aplikácie s modernými front-end technológiami.</p>
    `,
    },
    image: "/portfolio/internal-crm-system.webp",
    hint: "crm dashboard interface",
    tags: ["Vue 3", "Vuetify", "JavaScript", "Google Maps API"],
  },
];

// Returns a project with its title, description and content in one language.
export function localizeProject(project: PortfolioProject, locale: string) {
  const lang: Locale = locale === "sk" ? "sk" : "en";

  return {
    slug: project.slug,
    category: project.category,
    image: project.image,
    hint: project.hint,
    tags: project.tags,
    title: project.title[lang],
    description: project.description[lang],
    content: project.content[lang],
  };
}
