export type PricingPlan = {
  name: { en: string; sk: string };
  from: { en: string; sk: string }; // for example "from 3 000 €"
  includes: { en: string[]; sk: string[] };
  excludes: { en: string[]; sk: string[] };
  timeline: { en: string; sk: string } | null;
};

// Starting prices from the 2026 pricing plan, excluding VAT. Change amounts here, not in components.
// An empty list means the pricing block is not rendered at all.
const notIncluded = {
  en: ["Design, copy, photos and video (provided by the client)", "Ongoing SEO and ad management"],
  sk: ["Dizajn, texty, fotografie a videá (zabezpečuje klient)", "Priebežné SEO a správa reklamy"],
};

export const pricingPlans: PricingPlan[] = [
  {
    name: { en: "Start", sk: "Start" },
    from: { en: "1 500 € excl. VAT", sk: "1 500 € bez DPH" },
    includes: {
      en: ["Up to 5 pages", "Content management system", "Slovak (and English)", "Contact form", "Technical SEO", "Analytics"],
      sk: ["Do 5 stránok", "Systém na správu obsahu", "Slovenčina (a angličtina)", "Kontaktný formulár", "Technické SEO", "Analytika"],
    },
    excludes: notIncluded,
    timeline: { en: "from 4 weeks", sk: "od 4 týždňov" },
  },
  {
    name: { en: "Business", sk: "Business" },
    from: { en: "2 800 € excl. VAT", sk: "2 800 € bez DPH" },
    includes: {
      en: ["Up to 12 pages", "Blog", "Several languages", "Forms connected to a CRM or e-mail"],
      sk: ["Do 12 stránok", "Blog", "Viac jazykových verzií", "Formuláre napojené na CRM alebo e-mail"],
    },
    excludes: notIncluded,
    timeline: null,
  },
  {
    name: { en: "E-shop", sk: "E-shop" },
    from: { en: "5 500 € excl. VAT", sk: "5 500 € bez DPH" },
    includes: {
      en: ["Product catalogue", "Payment and delivery in Slovakia", "Admin panel", "Basic accounting integration"],
      sk: ["Katalóg produktov", "Platba a doprava na Slovensku", "Administrácia", "Základné napojenie na účtovníctvo"],
    },
    excludes: notIncluded,
    timeline: { en: "from 8 weeks", sk: "od 8 týždňov" },
  },
];
