#!/usr/bin/env node
/**
 * scripts/check-links.mjs
 *
 * Internal-link checker (Phase 8 punch list P1.3).
 *
 * What it does:
 *  1. Builds the set of REAL routes: every static app/**\/page.tsx directory,
 *     plus the two dynamic route templates expanded against their data
 *     sources (/[suburb] -> one route per entry in data/suburbs.json,
 *     /blog/[slug] -> one route per post in data/posts.ts).
 *  2. Builds the set of REDIRECT SOURCES by dynamically importing
 *     next.config.mjs and calling its `redirects()` function directly —
 *     this is the same live config Next.js itself uses, not a hand-copied
 *     list that can drift out of date.
 *  3. Extracts every internal href it can find (`href="/..."`,
 *     `href={\`/...\`}`, `href={"/..."}`) from app/**\/*.tsx,
 *     components/**\/*.tsx, and the raw HTML strings inside
 *     data/posts.ts's blog post `content` fields.
 *  4. Cross-checks each href against the route set and the redirect-source
 *     set. Anything matching neither is reported as a likely 404.
 *  5. Separately reports (as warnings, not failures) any internal href that
 *     resolves via a redirect source rather than pointing straight at the
 *     final destination — technically not broken, but an avoidable hop.
 *
 * This is a static-analysis heuristic (like check-meta.mjs), not a live
 * crawl — it can't catch routes gated behind runtime logic, but it catches
 * the exact class of bug this was built for: hardcoded hrefs to paths that
 * were renamed, merged, or never existed.
 *
 * Run: node scripts/check-links.mjs
 */

import { readFileSync, readdirSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const APP_DIR = path.join(ROOT, "app");
const COMPONENTS_DIR = path.join(ROOT, "components");

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

// --- 1. Real routes ----------------------------------------------------
const pageFiles = walk(APP_DIR, (name) => name === "page.tsx");
const staticRoutes = new Set(["/"]);
const dynamicTemplates = [];

for (const pf of pageFiles) {
  let route = "/" + path.relative(APP_DIR, path.dirname(pf)).split(path.sep).join("/");
  if (route === "/.") route = "/";
  if (route.includes("[")) {
    dynamicTemplates.push(route);
  } else {
    staticRoutes.add(route);
  }
}

const suburbs = JSON.parse(readFileSync(path.join(ROOT, "data", "suburbs.json"), "utf8"));
for (const s of suburbs) staticRoutes.add(`/${s.slug}`);

const postsSource = readFileSync(path.join(ROOT, "data", "posts.ts"), "utf8");
const retiredBlock = postsSource.match(/export const retiredPostSlugs = new Set\(\[([\s\S]*?)\]\);/)?.[1] ?? "";
const retiredPostSlugs = new Set([...retiredBlock.matchAll(/"([^"]+)"/g)].map((m) => m[1]));
const postSlugs = [...postsSource.matchAll(/^\s*slug:\s*"([^"]+)"/gm)]
  .map((m) => m[1])
  .filter((slug) => !retiredPostSlugs.has(slug));
for (const slug of postSlugs) staticRoutes.add(`/blog/${slug}`);

// --- 2. Redirect sources (live import of next.config.mjs) --------------
const nextConfig = (await import(pathToFileURL(path.join(ROOT, "next.config.mjs")).href)).default;
const redirects = typeof nextConfig.redirects === "function" ? await nextConfig.redirects() : [];
const redirectSources = new Set(redirects.map((r) => r.source));

// Detect redirect chains while we're here (source that is also a destination).
const destinations = new Map(redirects.map((r) => [r.destination, r.source]));
const chains = redirects.filter((r) => destinations.has(r.source));

// --- 3. Extract internal hrefs ------------------------------------------
const hrefPattern = /href=(?:"(\/[^"]*)"|\{`(\/[^`]*)`\}|\{"(\/[^"]*)"\})/g;
const found = new Map(); // href -> [locations]

function scanSource(src, label) {
  for (const m of src.matchAll(hrefPattern)) {
    const href = m[1] || m[2] || m[3];
    if (!href) continue;
    if (!found.has(href)) found.set(href, []);
    found.get(href).push(label);
  }
}

const tsxFiles = [
  ...walk(APP_DIR, (n) => n.endsWith(".tsx")),
  ...walk(COMPONENTS_DIR, (n) => n.endsWith(".tsx")),
];
for (const f of tsxFiles) {
  scanSource(readFileSync(f, "utf8"), path.relative(ROOT, f));
}
// Blog post bodies are raw HTML strings inside data/posts.ts, not JSX — same
// href="..." shape, so the same regex works directly on the file source.
scanSource(postsSource, "data/posts.ts");
const postOverridePath = path.join(ROOT, "data", "post-quality-overrides.ts");
scanSource(readFileSync(postOverridePath, "utf8"), "data/post-quality-overrides.ts");

// --- 4. Cross-check ------------------------------------------------------
const broken = [];
const viaRedirect = [];

for (const [href, locations] of found) {
  // Template literals with an unresolved ${...} interpolation are dynamic
  // (e.g. `/${suburb.slug}` inside a .map()) — can't statically resolve
  // these without executing the component, so skip rather than false-flag.
  if (href.includes("${")) continue;

  const path_ = href.split("#")[0].split("?")[0].replace(/\/$/, "") || "/";

  if (staticRoutes.has(path_)) continue;
  if (redirectSources.has(path_)) {
    viaRedirect.push({ href, locations: [...new Set(locations)].slice(0, 3) });
    continue;
  }
  broken.push({ href, locations: [...new Set(locations)].slice(0, 3) });
}

// --- Report ----------------------------------------------------------------
console.log(
  `Checked ${found.size} unique internal hrefs against ${staticRoutes.size} real routes (incl. ${suburbs.length} suburbs + ${postSlugs.length} blog posts) and ${redirectSources.size} redirect sources.\n`
);

if (chains.length) {
  console.log(`REDIRECT CHAINS (${chains.length}) — a redirect source is itself another redirect's destination:`);
  for (const r of chains) console.log(`  ${r.source} -> ${r.destination} -> ${destinations.get(r.source)}`);
  console.log("");
}

if (broken.length) {
  console.log(`BROKEN LINKS (${broken.length}) — no matching route or redirect:`);
  for (const b of broken) console.log(`  ${b.href}\n    <- ${b.locations.join(", ")}`);
  console.log("");
}

if (viaRedirect.length) {
  console.log(`LINKS VIA REDIRECT (${viaRedirect.length}) — works, but points at a redirect source instead of the final destination:`);
  for (const v of viaRedirect) console.log(`  ${v.href}\n    <- ${v.locations.join(", ")}`);
  console.log("");
}

if (!broken.length && !chains.length && !viaRedirect.length) {
  console.log("All internal links resolve directly to a real route. No redirect chains.");
}

process.exit(broken.length || chains.length ? 1 : 0);
