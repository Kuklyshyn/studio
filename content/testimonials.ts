export type Testimonial = {
  quote: { en: string; sk: string };
  author: string;
  role: { en: string; sk: string };
  company: string;
  companyUrl: string | null;
};

// Client quotes are shown only when the client has agreed to them in writing.
// An empty list means the testimonials block is not rendered at all.
export const testimonials: Testimonial[] = [];
