// Renders a generated cover for each portfolio case study. Client screenshots are not published.
// Run with: node scripts/portfolio/covers.mjs
import { mkdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import React from "react";
import ReactDOMServer from "react-dom/server";
import * as Icons from "lucide-react";
import sharp from "sharp";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
const OUT_DIR = join(ROOT, "public/portfolio");
const BRAND = "#00E6AC"; // --primary in globals.css: hsl(165 100% 45%)

const COVERS = [
  { slug: "real-estate-website-developer", icon: "Building2", label: "WEB" },
  { slug: "fashion-eshop-salesforce", icon: "ShoppingBag", label: "E-SHOP" },
  { slug: "car-service-booking-system", icon: "CalendarClock", label: "BOOKING" },
  { slug: "retail-eshop-large-catalog", icon: "Store", label: "E-SHOP" },
  { slug: "interactive-expert-map-platform", icon: "MapPin", label: "MAP" },
  { slug: "fashion-eshop-woocommerce", icon: "Shirt", label: "E-SHOP" },
  { slug: "online-consultation-platform", icon: "MessagesSquare", label: "PLATFORM" },
  { slug: "internal-crm-system", icon: "Users", label: "CRM" },
];

const escapeXml = (text) => text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function coverSvg({ icon, label }) {
  const size = 240;
  const x = 790;
  const y = 180;
  const iconMarkup = ReactDOMServer.renderToStaticMarkup(
    React.createElement(Icons[icon], { size, color: BRAND, strokeWidth: 1.25 }),
  ).replace("<svg", `<svg x="${x}" y="${y}"`);

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="600" viewBox="0 0 1200 600">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#09090B"/>
      <stop offset="1" stop-color="#052B26"/>
    </linearGradient>
    <radialGradient id="glow" gradientUnits="userSpaceOnUse" cx="910" cy="300" r="460">
      <stop offset="0" stop-color="${BRAND}" stop-opacity="0.3"/>
      <stop offset="1" stop-color="${BRAND}" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#FFFFFF" stroke-opacity="0.05"/>
    </pattern>
  </defs>
  <rect width="1200" height="600" fill="url(#bg)"/>
  <rect width="1200" height="600" fill="url(#grid)"/>
  <rect width="1200" height="600" fill="url(#glow)"/>
  <rect x="${x - 36}" y="${y - 36}" width="${size + 72}" height="${size + 72}" rx="48" fill="#0B1F1C" fill-opacity="0.7" stroke="${BRAND}" stroke-opacity="0.35" stroke-width="2"/>
  ${iconMarkup}
  <rect x="96" y="96" width="56" height="4" fill="${BRAND}"/>
  <text x="96" y="140" font-family="Helvetica, Arial, sans-serif" font-size="24" font-weight="700" letter-spacing="4" fill="${BRAND}">${escapeXml(label)}</text>
  <text x="96" y="504" font-family="Helvetica, Arial, sans-serif" font-size="20" font-weight="700" letter-spacing="3" fill="#FFFFFF">OMNICODE</text>
  <text x="96" y="532" font-family="Helvetica, Arial, sans-serif" font-size="18" fill="#9CA3AF">omnicode.sk</text>
</svg>`;
}

mkdirSync(OUT_DIR, { recursive: true });
for (const cover of COVERS) {
  await sharp(Buffer.from(coverSvg(cover))).webp({ quality: 84 }).toFile(join(OUT_DIR, `${cover.slug}.webp`));
}
console.log(`✓ ${COVERS.length} portfolio covers → public/portfolio/`);
