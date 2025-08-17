import type { Metadata } from 'next';
import './globals.css';


export const metadata: Metadata = {
  title: 'Moder Web Solutions | Tvorba web stránok, E-shopy a SEO',
  description: 'Tvoríme moderné webové stránky a e-shopy na mieru. Zabezpečíme pre vás efektívne SEO a online marketing pre rast vášho podnikania na Slovensku.',
  keywords: "tvorba web stránok, tvorba e-shopov, seo, online marketing, webdizajn, slovensko, next.js, react",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk" className="!scroll-smooth" suppressHydrationWarning>
      <body>
          {children}
      </body>
    </html>
  );
}
