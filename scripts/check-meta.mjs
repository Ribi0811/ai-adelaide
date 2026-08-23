#!/usr/bin/env node
/**
 * scripts/check-meta.mjs
 *
 * Meta title/description uniqueness + length sweep (IMPLEMENTATION-PLAN.md 3.5).
 *
 * What it does:
 *  1. Walks every static app/**\/page.tsx and app/**\/layout.tsx and extracts the
 *     TOP-LEVEL `title:` and `description:` string literals from the `metadata`
 *     export (skips nested openGraph/twitter title/description — those are
 *     checked separately from the schema, not against Google's SERP length rules).
 *  2. Adds the two dynamic route generators by hand from their data sources:
 *     - app/blog/[slug]/page.tsx  -> one row per post in data/posts.ts
 *     - app/[suburb]/page.tsx     -> one row per suburb in data/suburbs.json
 *  3. Computes the RENDERED title (root layout applies `"%s | AI Adelaide"` via
 *     title.template to every child segment's plain-string title; the homepage
 *     itself is the same segment as the root layout so its title is NOT templated).
 *  4. Flags: rendered title > 60 chars, description outside 140-160 chars,
 *     duplicate rendered titles, duplicate descriptions, and any raw title that
 *     already contains "AI Adelaide" (which would double up when templated).
 *
 * This is a static-analysis heuristic, not a full Next.js metadata resolver —
 * it does not execute generateMetadata() for arbitrary pages, only the two
 * known data-driven routes. Exits with code 1 if any hard failure is found.
 *
 * Run: node scripts/check-meta.mjs
 */

import { readFileSync, readdirSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const APP_DIR = path.join(ROOT, "app");

const TITLE_TEMPLATE_SUFFIX = " | AI Adelaide";
const TITLE_MAX = 60;
const DESC_MIN = 140;
const DESC_MAX = 160;

const constantsSource = readFileSync(path.join(ROOT, "lib", "constants.ts"), "utf8");
function pricingValue(section, field) {
  const sectionMatch = constantsSource.match(new RegExp(`${section}:\\s*\\{([\\s\\S]*?)\\n  \\},`));
  const valueMatch = sectionMatch?.[1].match(new RegExp(`${field}:\\s*"([^"]+)"`));
  if (!valueMatch) throw new Error(`Could not read PRICING.${section}.${field}`);
  return valueMatch[1];
}

const WEBSITE_FROM = pricingValue("website", "fromLabel");
const SEO_FROM = pricingValue("seo", "fromLabel");

function resolveKnownTemplates(value) {
  if (!value) return value;
  return value
    .replaceAll("${PRICING.website.fromLabel}", WEBSITE_FROM)
    .replaceAll("${PRICING.seo.fromLabel}", SEO_FROM)
    .replaceAll("{websiteFrom}", WEBSITE_FROM)
    .replaceAll("{websiteFromTitle}", WEBSITE_FROM.replace(/^./, (letter) => letter.toUpperCase()));
}

/** Recursively find files matching a predicate, skipping node_modules/.next. */
function walk(dir, predicate, out = []) {
  for (const entry of readdirSync(dir)) {
    if (entry === "node_modules" || entry === ".next" || entry.startsWith(".")) continue;
    const full = path.join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) {
      walk(full, predicate, out);
    } else if (predicate(entry)) {
      out.push(full);
    }
  }
  return out;
}

/**
 * Extract the top-level `title:` and `description:` string literals from a
 * metadata-shaped block of source. Top-level keys in this codebase are
 * consistently indented with exactly 2 spaces; nested keys (openGraph.title,
 * twitter.description, etc.) are indented 4+ spaces, so anchoring on the
 * 2-space indent reliably skips the nested duplicates.
 */
function extractTopLevelField(source, field) {
  const re = new RegExp(`^ {2}${field}:\\s*\`?"?([^\`"\\n]*)\`?"?,?\\s*$`, "m");
  // Primary: single-line `  title: "...",`
  const singleLine = new RegExp(`^ {2}${field}:\\s*"([^"]*)"`, "m");
  const singleLineTemplate = new RegExp(`^ {2}${field}:\\s*\`([^\`]*)\``, "m");
  // Secondary: value on the next line, e.g. `  description:\n    "...",`
  const nextLine = new RegExp(`^ {2}${field}:\\s*\\n\\s*"([^"]*)"`, "m");
  const nextLineTemplate = new RegExp(`^ {2}${field}:\\s*\\n\\s*\`([^\`]*)\``, "m");

  let m =
    source.match(singleLine) ||
    source.match(singleLineTemplate) ||
    source.match(nextLine) ||
    source.match(nextLineTemplate);
  return m ? m[1].trim() : null;
}

function isNoindexed(source) {
  return /index:\s*false/.test(source);
}

const rows = [];
const issues = [];

// --- 1. Static page.tsx / layout.tsx files ---------------------------------
const staticFiles = walk(
  APP_DIR,
  (name) => name === "page.tsx" || name === "layout.tsx"
).filter((f) => {
  const rel = path.relative(APP_DIR, f);
  // Dynamic routes handled separately below (they use generateMetadata + data files,
  // not a static `metadata` export we can regex out).
  return !rel.includes("[slug]") && !rel.startsWith("[suburb]" + path.sep) && rel !== "[suburb]/page.tsx";
});

for (const file of staticFiles) {
  const source = readFileSync(file, "utf8");
  if (!/export const metadata/.test(source)) continue; // e.g. bare layouts with no metadata
  const rawTitle = resolveKnownTemplates(extractTopLevelField(source, "title"));
  const rawDescription = resolveKnownTemplates(extractTopLevelField(source, "description"));
  if (!rawTitle && !rawDescription) continue;

  const rel = path.relative(ROOT, file);
  const isHomepage = rel === path.join("app", "page.tsx");
  const isRootLayout = rel === path.join("app", "layout.tsx");
  const noindex = isNoindexed(source);

  const renderedTitle =
    rawTitle && !isHomepage && !isRootLayout ? `${rawTitle}${TITLE_TEMPLATE_SUFFIX}` : rawTitle;

  rows.push({
    route: rel,
    rawTitle,
    renderedTitle,
    description: rawDescription,
    noindex,
    titleIsAbsolute: false,
  });
}

// --- 2. Blog posts (data/posts.ts) -----------------------------------------
const postsSource = readFileSync(path.join(ROOT, "data", "posts.ts"), "utf8");
const retiredBlock = postsSource.match(/export const retiredPostSlugs = new Set\(\[([\s\S]*?)\]\);/)?.[1] ?? "";
const retiredPostSlugs = new Set([...retiredBlock.matchAll(/"([^"]+)"/g)].map((m) => m[1]));
// Split into per-post blocks on the `slug:` boundary.
const slugIndices = [...postsSource.matchAll(/\n\{\s*\n\s*slug:\s*"([^"]+)"/g)];
for (let i = 0; i < slugIndices.length; i++) {
  const start = slugIndices[i].index;
  const end = i + 1 < slugIndices.length ? slugIndices[i + 1].index : postsSource.length;
  const block = postsSource.slice(start, end);
  const slug = slugIndices[i][1];
  if (retiredPostSlugs.has(slug)) continue;
  const titleMatch = block.match(/title:\s*"([^"]+)"/);
  const seoDescMatch = block.match(/seoDescription:\s*"([^"]+)"/);
  const excerptMatch = block.match(/excerpt:\s*\n?\s*"([^"]+)"/);
  const rawTitle = titleMatch ? titleMatch[1] : null;
  const description = seoDescMatch
    ? seoDescMatch[1]
    : excerptMatch
    ? `${excerptMatch[1].slice(0, 155)}...`
    : null;
  rows.push({
    route: `app/blog/[slug] -> /blog/${slug}`,
    rawTitle,
    renderedTitle: rawTitle ? `${rawTitle}${TITLE_TEMPLATE_SUFFIX}` : null,
    description,
    noindex: false,
    titleIsAbsolute: false,
  });
}

// --- 3. Suburb pages (data/suburbs.json) ------------------------------------
const suburbs = JSON.parse(readFileSync(path.join(ROOT, "data", "suburbs.json"), "utf8"));
for (const suburb of suburbs) {
  const rawTitle = resolveKnownTemplates(suburb.seoTitle) ?? `${suburb.name} Websites, SEO & AI Automation`;
  const description = resolveKnownTemplates(suburb.seoDescription) ?? `Website design ${WEBSITE_FROM}, local SEO, and AI automation for ${suburb.name} small businesses. Adelaide-based, no lock-in contracts. Call (08) 7100 9788.`;
  const usesAbsoluteTitle = Boolean(suburb.seoTitle);
  rows.push({
    route: `app/[suburb] -> /${suburb.slug}`,
    rawTitle,
    renderedTitle: usesAbsoluteTitle ? rawTitle : `${rawTitle}${TITLE_TEMPLATE_SUFFIX}`,
    description,
    noindex: false,
    titleIsAbsolute: usesAbsoluteTitle,
  });
}

// --- Checks ------------------------------------------------------------------
const titleCounts = new Map();
const descCounts = new Map();

for (const row of rows) {
  if (row.renderedTitle) {
    titleCounts.set(row.renderedTitle, [...(titleCounts.get(row.renderedTitle) || []), row.route]);
  }
  if (row.description) {
    descCounts.set(row.description, [...(descCounts.get(row.description) || []), row.route]);
  }

  if (row.renderedTitle && row.renderedTitle.length > TITLE_MAX) {
    issues.push({
      level: row.noindex ? "warn" : "fail",
      type: "title-length",
      route: row.route,
      detail: `rendered title is ${row.renderedTitle.length} chars (max ${TITLE_MAX}): "${row.renderedTitle}"`,
    });
  }

  if (row.rawTitle && row.rawTitle.includes("AI Adelaide") && !row.titleIsAbsolute && !row.route.endsWith("app/page.tsx") && !row.route.endsWith("app/layout.tsx")) {
    issues.push({
      level: "warn",
      type: "title-double-brand",
      route: row.route,
      detail: `raw title already contains "AI Adelaide" and will get "${TITLE_TEMPLATE_SUFFIX}" appended by the root template -> "${row.renderedTitle}"`,
    });
  }

  if (row.description) {
    const len = row.description.length;
    if (len < DESC_MIN || len > DESC_MAX) {
      issues.push({
        level: row.noindex ? "warn" : "fail",
        type: "description-length",
        route: row.route,
        detail: `description is ${len} chars (want ${DESC_MIN}-${DESC_MAX}): "${row.description}"`,
      });
    }
  } else {
    issues.push({ level: "warn", type: "description-missing", route: row.route, detail: "no description found" });
  }
}

for (const [title, routes] of titleCounts) {
  if (routes.length > 1) {
    issues.push({
      level: "fail",
      type: "duplicate-title",
      route: routes.join(", "),
      detail: `duplicate rendered title across ${routes.length} routes: "${title}"`,
    });
  }
}

for (const [desc, routes] of descCounts) {
  if (routes.length > 1) {
    issues.push({
      level: "fail",
      type: "duplicate-description",
      route: routes.join(", "),
      detail: `duplicate description across ${routes.length} routes: "${desc.slice(0, 80)}..."`,
    });
  }
}

// --- Report --------------------------------------------------------------
const fails = issues.filter((i) => i.level === "fail");
const warns = issues.filter((i) => i.level === "warn");

console.log(`Checked ${rows.length} routes (${staticFiles.length} static files + ${slugIndices.length - retiredPostSlugs.size} published posts + ${suburbs.length} suburbs).\n`);

if (fails.length) {
  console.log(`FAILURES (${fails.length}):`);
  for (const f of fails) console.log(`  [${f.type}] ${f.route}\n    ${f.detail}`);
  console.log("");
}

if (warns.length) {
  console.log(`WARNINGS (${warns.length}) — noindexed routes or double-brand risk, not blocking:`);
  for (const w of warns) console.log(`  [${w.type}] ${w.route}\n    ${w.detail}`);
  console.log("");
}

if (!fails.length && !warns.length) {
  console.log("All titles and descriptions are unique and within length bounds.");
}

process.exit(fails.length ? 1 : 0);
