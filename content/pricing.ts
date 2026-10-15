export type PricingPlan = {
  name: { en: string; sk: string };
  from: { en: string; sk: string }; // for example "from 3 000 €"
  includes: { en: string[]; sk: string[] };
  excludes: { en: string[]; sk: string[] };
  timeline: { en: string; sk: string } | null;
  link?: { href: "/website-maintenance"; label: { en: string; sk: string } };
};

// Starting prices, excluding VAT. Change amounts here, not in components.
// An empty list means the pricing block is not rendered at all.
const notIncluded = {
  en: ["Design, copy, photos and video (provided by the client)", "Ongoing SEO and ad management"],
  sk: ["Dizajn, texty, fotografie a videá (zabezpečuje klient)", "Priebežné SEO a správa reklamy"],
};

export const pricingPlans: PricingPlan[] = [
  {
    name: { en: "Start", sk: "Start" },
    from: { en: "990 € excl. VAT", sk: "990 € bez DPH" },
    includes: {
      en: ["Up to 5 pages", "Content management system", "Slovak (and English)", "Contact form", "Technical SEO", "Analytics"],
      sk: ["Do 5 stránok", "Systém na správu obsahu", "Slovenčina (a angličtina)", "Kontaktný formulár", "Technické SEO", "Analytika"],
    },
    excludes: notIncluded,
    timeline: { en: "from 4 weeks", sk: "od 4 týždňov" },
  },
  {
    name: { en: "Business", sk: "Business" },
    from: { en: "1 990 € excl. VAT", sk: "1 990 € bez DPH" },
    includes: {
      en: ["Up to 12 pages", "Blog", "Several languages", "Forms connected to a CRM or e-mail"],
      sk: ["Do 12 stránok", "Blog", "Viac jazykových verzií", "Formuláre napojené na CRM alebo e-mail"],
    },
    excludes: notIncluded,
    timeline: null,
  },
  {
    name: { en: "E-shop", sk: "E-shop" },
    from: { en: "3 500 € excl. VAT", sk: "3 500 € bez DPH" },
    includes: {
      en: ["Product catalogue", "Payment and delivery in Slovakia", "Admin panel", "Basic accounting integration"],
      sk: ["Katalóg produktov", "Platba a doprava na Slovensku", "Administrácia", "Základné napojenie na účtovníctvo"],
    },
    excludes: notIncluded,
    timeline: { en: "from 8 weeks", sk: "od 8 týždňov" },
  },
  {
    // Monthly plans; details on the website-maintenance landing page in content/landing.ts.
    name: { en: "Maintenance", sk: "Správa webu" },
    from: { en: "25 € per month excl. VAT", sk: "25 € mesačne bez DPH" },
    includes: {
      en: ["Hosting and SSL certificate", "Updates and backups", "Availability monitoring", "30 minutes of small edits per month", "Standard plan: 45 € per month, 2 hours of edits"],
      sk: ["Hosting a SSL certifikát", "Aktualizácie a zálohy", "Sledovanie dostupnosti", "30 minút drobných úprav mesačne", "Plán Štandard: 45 € mesačne, 2 hodiny úprav"],
    },
    excludes: {
      en: ["Ongoing SEO, ads and copywriting", "Larger changes and new features (quoted separately)"],
      sk: ["Priebežné SEO, reklama a texty", "Väčšie zmeny a nové funkcie (nacením samostatne)"],
    },
    timeline: null,
    link: { href: "/website-maintenance", label: { en: "Maintenance plans in detail", sk: "Podrobnosti o správe webu" } },
  },
];
