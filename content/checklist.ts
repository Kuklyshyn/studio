export type ChecklistGroup = { title: string; items: string[] };

export type ChecklistContent = {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  groups: ChecklistGroup[];
  labels: { progress: string; reset: string; print: string; note: string; ctaTitle: string; ctaText: string };
};

// A free, printable list for anyone about to launch a website. Plain practice only: no prices, figures or legal claims.
export const launchChecklist: { en: ChecklistContent; sk: ChecklistContent } = {
  en: {
    metaTitle: "Website launch checklist: what to check before going live",
    metaDescription: "A free checklist for launching a website: content, forms, speed, mobile, search and backups. Tick items off, save your progress and print it.",
    h1: "Website launch checklist",
    intro: "Go through this list before you publish a new site or a redesign. Tick items off as you check them. Your progress is saved in this browser, and you can print the list.",
    groups: [
      {
        title: "Content",
        items: [
          "Every page has final text, with no placeholder or “lorem ipsum” left.",
          "Contact details (phone, e-mail, address, opening hours) are correct everywhere.",
          "Company details and the privacy policy page are published, and whoever is responsible for them has approved the wording.",
          "Images are the right size and not oversized, and meaningful images have a short text description.",
          "Links and buttons lead where they should, and none of them is broken.",
        ],
      },
      {
        title: "Forms and functions",
        items: [
          "You sent a real test message through every form and it arrived.",
          "Visitors see a clear confirmation after sending, and a clear message if something goes wrong.",
          "For an e-shop: a test order works with each payment and delivery method, and the confirmation e-mail arrives.",
          "Booking, login and other custom features were tried from start to finish.",
        ],
      },
      {
        title: "Mobile and speed",
        items: [
          "The site was opened on at least one phone, on mobile data, and reads well without zooming.",
          "The menu opens and closes, and buttons are big enough to tap.",
          "The main pages load in a few seconds on a phone.",
          "You ran a free speed test and dealt with the biggest warnings.",
        ],
      },
      {
        title: "Search and addresses",
        items: [
          "Each page has its own title and short description.",
          "Each page has one main heading.",
          "The site works only on one address: with or without “www” redirects to the other.",
          "The site opens over a secure connection (https) with no warnings.",
          "If the old site had other page addresses, each old address redirects permanently to its new one.",
          "Nothing is still hidden from search engines by a setting left over from the build stage.",
          "The sitemap exists, and the site is added to Google Search Console.",
        ],
      },
      {
        title: "Safety and ownership",
        items: [
          "The domain and hosting accounts belong to you, and you know who can log in.",
          "Backups run automatically, and you know where they are stored and how to restore one.",
          "Someone is responsible for updates after launch.",
          "You know whom to contact if the site stops working.",
        ],
      },
      {
        title: "After launch",
        items: [
          "On day one, send another test message through the main form.",
          "After a week, open Search Console and look for errors.",
          "After a month, look at which pages people open and whether the forms bring enquiries.",
        ],
      },
    ],
    labels: {
      progress: "done",
      reset: "Clear ticks",
      print: "Print or save as PDF",
      note: "This is a general practical list, not legal advice. Check legal requirements for your business with a lawyer.",
      ctaTitle: "Need help with a launch?",
      ctaText: "I can go through the list with you or build the site so these points are covered from the start.",
    },
  },
  sk: {
    metaTitle: "Kontrolný zoznam pred spustením webu: čo overiť",
    metaDescription: "Bezplatný kontrolný zoznam pred spustením webu: obsah, formuláre, rýchlosť, mobil, vyhľadávanie a zálohy. Odškrtávajte, uložte postup a vytlačte si ho.",
    h1: "Kontrolný zoznam pred spustením webu",
    intro: "Prejdite si tento zoznam skôr, než zverejníte nový web alebo redizajn. Hotové body odškrtnite. Postup sa ukladá v tomto prehliadači a zoznam si môžete vytlačiť.",
    groups: [
      {
        title: "Obsah",
        items: [
          "Každá stránka má finálny text, nezostal žiadny zástupný text ani „lorem ipsum“.",
          "Kontaktné údaje (telefón, e-mail, adresa, otváracie hodiny) sú všade správne.",
          "Údaje o firme a stránka so zásadami ochrany osobných údajov sú zverejnené a ten, kto za ne zodpovedá, schválil ich znenie.",
          "Obrázky majú vhodnú veľkosť, nie sú zbytočne veľké a obrázky s významom majú krátky textový popis.",
          "Odkazy a tlačidlá vedú, kam majú, a žiadny nie je pokazený.",
        ],
      },
      {
        title: "Formuláre a funkcie",
        items: [
          "Cez každý formulár ste odoslali skutočnú skúšobnú správu a prišla.",
          "Návštevník po odoslaní vidí jasné potvrdenie a pri chybe zrozumiteľnú správu.",
          "Pri e-shope: skúšobná objednávka funguje s každým spôsobom platby a dopravy a potvrdzujúci e-mail príde.",
          "Rezervácie, prihlásenie a ďalšie funkcie na mieru ste vyskúšali od začiatku do konca.",
        ],
      },
      {
        title: "Mobil a rýchlosť",
        items: [
          "Web ste otvorili aspoň na jednom telefóne cez mobilné dáta a dá sa čítať bez približovania.",
          "Menu sa otvára aj zatvára a tlačidlá sú dosť veľké na ťuknutie.",
          "Hlavné stránky sa na telefóne načítajú za pár sekúnd.",
          "Spustili ste bezplatný test rýchlosti a vyriešili najväčšie upozornenia.",
        ],
      },
      {
        title: "Vyhľadávanie a adresy",
        items: [
          "Každá stránka má vlastný titulok a krátky popis.",
          "Každá stránka má jeden hlavný nadpis.",
          "Web funguje len na jednej adrese: verzia s „www“ aj bez neho presmeruje na tú hlavnú.",
          "Web sa otvára cez zabezpečené pripojenie (https) bez upozornení.",
          "Ak mal starý web iné adresy stránok, každá stará adresa trvalo presmeruje na novú.",
          "Nič nie je pred vyhľadávačmi skryté nastavením, ktoré zostalo z fázy tvorby.",
          "Existuje sitemap a web je pridaný do Google Search Console.",
        ],
      },
      {
        title: "Bezpečnosť a vlastníctvo",
        items: [
          "Doména aj hosting patria vám a viete, kto sa môže prihlásiť.",
          "Zálohy sa robia automaticky a viete, kde sú uložené a ako sa obnovujú.",
          "Za aktualizácie po spustení niekto zodpovedá.",
          "Viete, koho kontaktovať, ak web prestane fungovať.",
        ],
      },
      {
        title: "Po spustení",
        items: [
          "Hneď prvý deň pošlite ešte raz skúšobnú správu cez hlavný formulár.",
          "Po týždni otvorte Search Console a pozrite sa, či tam nie sú chyby.",
          "Po mesiaci sa pozrite, ktoré stránky ľudia otvárajú a či formuláre prinášajú dopyty.",
        ],
      },
    ],
    labels: {
      progress: "hotovo",
      reset: "Zrušiť odškrtnutia",
      print: "Vytlačiť alebo uložiť ako PDF",
      note: "Ide o všeobecný praktický zoznam, nie o právnu radu. Zákonné požiadavky pre svoje podnikanie si overte u právnika.",
      ctaTitle: "Potrebujete pomôcť so spustením?",
      ctaText: "Zoznam môžem prejsť spolu s vami alebo postaviť web tak, aby tieto body boli pokryté od začiatku.",
    },
  },
};
