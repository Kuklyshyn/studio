// Fetches one Unsplash photo per blog post, crops it to the 1200x600 cover size and records the photographer as a source.
//
// Needs UNSPLASH_ACCESS_KEY in .env.local (git-ignored). Run with: node scripts/blog/fetch-covers.mjs
// Only posts listed in QUERIES are touched. Covers are written to public/blog/<slug>.webp.

import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
const CONTENT_DIR = join(ROOT, "content/blog");
const COVER_DIR = join(ROOT, "public/blog");

const QUERIES = {
  "ai-agents-everyday-business-software": "business software dashboard",
  "ai-guardrails-testing-before-launch": "software testing code laptop",
  "bilingual-website-slovak-english-seo": "website languages translation",
  "blog-images-speed-seo": "website performance laptop",
  "capital-beyond-silicon-valley-founders-slovakia": "startup founders meeting",
  "chat-interfaces-become-visual-ux-rules": "user interface design sketch",
  "eu-ai-act-article-50-slovak-web-studios": "law documents office",
  "slovak-eshops-accessibility-eaa": "accessibility inclusive design",
  "software-fault-f1-testing-lessons": "racing pit crew",
  "vertical-ai-niche-software": "industry factory technology",
  "own-website-benefits-for-small-business": "small business owner laptop",
  "own-eshop-or-marketplace": "online shop parcels",
  "crm-for-small-business": "sales team meeting office",
  "how-much-does-a-website-cost": "calculator budget planning desk",
  "what-to-prepare-before-a-website": "checklist planning notebook",
  "booking-system-ready-made-or-custom": "calendar appointment planner",
  "website-speed-what-slows-it-down": "speed fast motion light trails",
  "how-to-choose-a-web-developer": "interview handshake business meeting",
};

// ONLY=slug1,slug2 limits the run to those posts, so existing covers are left alone.
const only = process.env.ONLY ? process.env.ONLY.split(",") : null;

const env = Object.fromEntries(
  readFileSync(join(ROOT, ".env.local"), "utf8")
    .split("\n")
    .filter((line) => line.includes("="))
    .map((line) => line.split("=", 2))
);
const key = env.UNSPLASH_ACCESS_KEY;
if (!key) throw new Error("UNSPLASH_ACCESS_KEY is missing in .env.local");
const auth = { Authorization: `Client-ID ${key}` };

const used = new Set();
const credits = {};

for (const [slug, query] of Object.entries(QUERIES)) {
  if (only && !only.includes(slug)) continue;
  const search = await fetch(
    `https://api.unsplash.com/search/photos?${new URLSearchParams({ query, per_page: "10", orientation: "landscape" })}`,
    { headers: auth }
  ).then((r) => r.json());

  const photo = search.results?.find((p) => !used.has(p.id));
  if (!photo) {
    console.log(`no result for ${slug}`);
    continue;
  }
  used.add(photo.id);

  // Unsplash API guidelines: report the download to the trigger endpoint.
  await fetch(photo.links.download_location, { headers: auth });

  const url = `${photo.urls.raw}&w=1200&h=600&fit=crop&crop=entropy&fm=webp&q=80`;
  const bytes = Buffer.from(await (await fetch(url)).arrayBuffer());
  writeFileSync(join(COVER_DIR, `${slug}.webp`), bytes);

  credits[slug] = {
    name: `Foto: ${photo.user.name} / Unsplash`,
    url: `${photo.user.links.html}?utm_source=omnicode&utm_medium=referral`,
  };
  console.log(`${slug}: ${photo.user.name} (${bytes.length} bytes)`);
}

// Add the photo credit to each post's sources so it appears in the post footer.
for (const file of readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".json"))) {
  const path = join(CONTENT_DIR, file);
  const batch = JSON.parse(readFileSync(path, "utf8"));
  let changed = false;
  for (const post of batch.posts) {
    const credit = credits[post.slug];
    if (!credit) continue;
    post.sources = (post.sources ?? []).filter((s) => s.url !== credit.url);
    post.sources.push(credit);
    post.cover = { ...post.cover, photo: true };
    changed = true;
  }
  if (changed) writeFileSync(path, JSON.stringify(batch, null, 2) + "\n");
}
console.log(`done: ${Object.keys(credits).length} covers`);
