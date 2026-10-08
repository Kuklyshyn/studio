export type PricingPlan = {
  name: { en: string; sk: string };
  from: { en: string; sk: string }; // for example "from 3 000 €"
  includes: { en: string[]; sk: string[] };
  excludes: { en: string[]; sk: string[] };
  timeline: { en: string; sk: string } | null;
};

// Prices are published only after the owner confirms the amounts and what each package includes.
// An empty list means the pricing block is not rendered at all.
// [[ПОТРІБНО: 2–3 пакети або діапазони з сумами, складом, термінами і підтвердженням власника]]
export const pricingPlans: PricingPlan[] = [];
