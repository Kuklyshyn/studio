// Builds the blog from content/blog/*.json.
//
//   1. Validates every batch file (slugs, dates, both languages, sources, HTML).
//   2. Writes src/app/[locale]/blog/posts.generated.json (EN + SK, newest first).
//   3. Renders a 1200x600 WebP cover per post into public/blog/<slug>.webp.
//
// Run with: npm run blog:build

import { readdirSync, readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import React from "react";
import ReactDOMServer from "react-dom/server";
import * as Icons from "lucide-react";
import sharp from "sharp";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
const CONTENT_DIR = join(ROOT, "content/blog");
const POSTS_JSON = join(ROOT, "src/app/[locale]/blog/posts.generated.json");
const COVER_DIR = join(ROOT, "public/blog");

const BRAND = "#00E6AC"; // --primary in globals.css: hsl(165 100% 45%)
const LOCALES = ["en", "sk"];
const MONTHS = {
  en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  sk: ["januára", "februára", "marca", "apríla", "mája", "júna", "júla", "augusta", "septembra", "októbra", "novembra", "decembra"],
};

const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;
const DAILY_BATCH = /^\d{4}-\d{2}-\d{2}\.json$/;
const UNSAFE_HTML = /<\s*(script|iframe|style|object|embed)\b|\son[a-z]+\s*=|javascript:/i;

const errors = [];
const warnings = [];

const escapeHtml = (text) => text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const escapeAttr = (text) => escapeHtml(text).replace(/"/g, "&quot;");
const htmlOf = (content) => (Array.isArray(content) ? content.join("\n") : String(content ?? ""));
const wordCount = (html) => html.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;

function loadBatches() {
  return readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith(".json"))
    .sort()
    .map((file) => ({ file, ...JSON.parse(readFileSync(join(CONTENT_DIR, file), "utf8")) }));
}

function validate(batches) {
  const posts = [];
  const seenSlugs = new Set();

  for (const batch of batches) {
    if (DAILY_BATCH.test(batch.file) && (batch.posts.length < 10 || batch.posts.length > 20)) {
      warnings.push(`${batch.file} has ${batch.posts.length} posts; the daily target is 10–20`);
    }

    for (const post of batch.posts) {
      const where = `${batch.file} › ${post.slug ?? "(no slug)"}`;
      const date = post.date ?? batch.date;

      if (!SLUG.test(post.slug ?? "")) errors.push(`${where}: slug must be lowercase letters, digits and hyphens`);
      else if (seenSlugs.has(post.slug)) errors.push(`${where}: duplicate slug`);
      seenSlugs.add(post.slug);

      if (!ISO_DATE.test(date ?? "")) errors.push(`${where}: date must be YYYY-MM-DD`);
      if (!post.cover?.icon || !/^[A-Z]/.test(post.cover.icon) || !Icons[post.cover.icon]) {
        errors.push(`${where}: unknown cover icon "${post.cover?.icon}" (use a lucide-react icon name)`);
      }
      if (!post.cover?.label || post.cover.label.length > 40) errors.push(`${where}: cover.label is required (max 40 chars)`);

      for (const source of post.sources ?? []) {
        if (!source.name || !/^https:\/\//.test(source.url ?? "")) errors.push(`${where}: every source needs a name and an https url`);
      }

      for (const locale of LOCALES) {
        const text = post[locale];
        if (!text) {
          errors.push(`${where}: missing "${locale}" version`);
          continue;
        }
        if (!text.title || text.title.length > 120) errors.push(`${where} [${locale}]: title is required (max 120 chars)`);
        if (!text.description || text.description.length > 200) errors.push(`${where} [${locale}]: description is required (max 200 chars)`);

        if (text.seoTitle && text.seoTitle.length > 60) errors.push(`${where} [${locale}]: seoTitle is over 60 chars`);
        const html = htmlOf(text.content);
        if (UNSAFE_HTML.test(html)) errors.push(`${where} [${locale}]: content contains disallowed HTML`);
        if (wordCount(html) < 120) errors.push(`${where} [${locale}]: content is too short (${wordCount(html)} words)`);
      }

      posts.push({ ...post, date, author: post.author ?? batch.author ?? "Omnicode" });
    }
  }

  for (const post of posts) {
    for (const locale of LOCALES) {
      for (const match of htmlOf(post[locale]?.content).matchAll(/href='\/(?:en|sk)\/blog\/([a-z0-9-]+)'/g)) {
        if (!seenSlugs.has(match[1])) errors.push(`${post.slug} [${locale}]: links to unknown post "${match[1]}"`);
      }
    }
  }

  return posts;
}

function formatDate(iso, locale) {
  const [year, month, day] = iso.split("-").map(Number);
  return locale === "en" ? `${MONTHS.en[month - 1]} ${day}, ${year}` : `${day}. ${MONTHS.sk[month - 1]} ${year}`;
}

function sourcesFooter(sources = [], locale) {
  if (sources.length === 0) return "";
  const items = sources
    .map((source) => `<li><a href="${escapeAttr(source.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(source.name)}</a></li>`)
    .join("");
  return `<h3>${locale === "sk" ? "Zdroje" : "Sources"}</h3><ul>${items}</ul>`;
}

function buildPostsJson(posts) {
  const out = { en: [], sk: [] };

  for (const post of posts) {
    for (const locale of LOCALES) {
      out[locale].push({
        slug: post.slug,
        title: post[locale].title,
        seoTitle: post[locale].seoTitle ?? post[locale].title,
        description: post[locale].description,
        image: `/blog/${post.slug}.webp`,
        hint: post.cover.label.toLowerCase(),
        date: formatDate(post.date, locale),
        isoDate: post.date,
        author: post.author,
        content: [htmlOf(post[locale].content), sourcesFooter(post.sources, locale)].filter(Boolean).join("\n"),
      });
    }
  }

  for (const locale of LOCALES) {
    out[locale].sort((a, b) => b.isoDate.localeCompare(a.isoDate) || a.slug.localeCompare(b.slug));
  }

  mkdirSync(dirname(POSTS_JSON), { recursive: true });
  writeFileSync(POSTS_JSON, JSON.stringify(out, null, 2) + "\n");
}

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
  <text x="96" y="140" font-family="Helvetica, Arial, sans-serif" font-size="24" font-weight="700" letter-spacing="4" fill="${BRAND}">${escapeHtml(label.toUpperCase())}</text>
  <text x="96" y="504" font-family="Helvetica, Arial, sans-serif" font-size="20" font-weight="700" letter-spacing="3" fill="#FFFFFF">OMNICODE</text>
  <text x="96" y="532" font-family="Helvetica, Arial, sans-serif" font-size="18" fill="#9CA3AF">omnicode.sk</text>
</svg>`;
}

async function renderCovers(posts) {
  mkdirSync(COVER_DIR, { recursive: true });
  for (const post of posts) {
    // Photo covers come from scripts/blog/fetch-covers.mjs and must not be overwritten here.
    if (post.cover.photo) continue;
    await sharp(Buffer.from(coverSvg(post.cover)))
      .webp({ quality: 84 })
      .toFile(join(COVER_DIR, `${post.slug}.webp`));
  }

  const slugs = new Set(posts.map((post) => post.slug));
  for (const file of readdirSync(COVER_DIR)) {
    if (file.endsWith(".webp") && !slugs.has(file.slice(0, -".webp".length))) {
      warnings.push(`public/blog/${file} is not used by any post; delete it if the post was removed`);
    }
  }
}

const batches = loadBatches();
const posts = validate(batches);

if (errors.length > 0) {
  console.error(errors.map((error) => `✗ ${error}`).join("\n"));
  process.exit(1);
}

buildPostsJson(posts);
await renderCovers(posts);

console.log(`✓ ${posts.length} posts from ${batches.length} batch files → ${relative(ROOT, POSTS_JSON)}`);
console.log(`✓ ${posts.length} covers → public/blog/`);
for (const warning of warnings) console.warn(`! ${warning}`);
