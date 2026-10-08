// Fails the build when a placeholder reached a prerendered page.
// A placeholder such as [[ПОТРІБНО: …]] marks data the owner has not supplied yet.
// It may live in drafts, but it must never be rendered.
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const MARKER = "[[ПОТРІБНО";
const OUTPUT_DIR = ".next/server/app";

function listFiles(dir) {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? listFiles(path) : [path];
  });
}

const offenders = listFiles(OUTPUT_DIR)
  .filter((file) => /\.(html|rsc)$/.test(file))
  .filter((file) => readFileSync(file, "utf8").includes(MARKER));

if (offenders.length > 0) {
  console.error(`Placeholder "${MARKER}" found in rendered output:`);
  for (const file of offenders) console.error(`  ${file}`);
  process.exit(1);
}

console.log("No placeholders in rendered output.");
