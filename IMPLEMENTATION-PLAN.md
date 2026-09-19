# AI Adelaide — SEO Implementation Plan v2 (Agent Instructions)

> **STATUS: COMPLETE (2026-07-07).** Phases 1-6 executed and verified; off-site work continues via docs/AGENT-HANDOFF.md (Q8 as of 2026-07-13). Successor analysis: LOCAL-SEO-GROWTH-REPORT-JULY-2026.md (reconciled 2026-07-13). This file is historical record — for current work, read docs/AGENT-HANDOFF.md.

**For:** Coding agent working in **this** repo (`ai-adelaide-CANONICAL`, github.com/Ribi0811/ai-adelaide, verified = live site @ `622a09b`)
**Read first:** `SEO-AUDIT-JULY-2026.md` in this folder (the *why*; this file is the *what*)
**Strategy:** Website-led. Websites $699/48hr = wedge → SEO retainers = profit engine → automation/receptionist = add-on + harvest pages.

## Rules for the agent

1. **This repo IS production.** Every merge to main deploys the live site. Standing orders: show changes on localhost first; **never deploy without Ivan's approval**.
2. **Never invent facts** — no fabricated client names, testimonials, stats, or review counts. Where proof is needed, insert `<!-- HUMAN INPUT NEEDED: ... -->` and log it in `docs/claims-to-verify.md`.
3. Work phases **in order**; `npm run build` must pass before each commit; one commit per phase, phase name in the message.
4. Canonical host is `https://aiadelaide.com.au` (non-www) — already correct in `lib/constants.ts`; keep it that way.
5. **Do not remove or weaken** the existing redirect map in `next.config.mjs` (except the one bug fixed in 1.2), the middleware www/vercel.app handling, or existing FAQPage/Service schema.
6. Tasks tagged **[HUMAN]** — list in your final report; do not attempt.

---

## Phase 1 — Sitemap & redirect hygiene (~half day) ← highest ROI, do first

**1.1 — Purge redirecting URLs from `app/sitemap.ts`.** Remove these entries (they 301 via `next.config.mjs`): `/adelaide`, `/ai-for-tradies`, `/ai-for-plumbers-adelaide`, `/ai-for-electricians-adelaide`, `/ai-for-builders-adelaide`, `/ai-for-allied-health`, `/ai-automation-for-tradies-adelaide`, `/ai-automation-for-clinics-adelaide`. Also remove `/audit/quiz`, `/audit/report`, `/audit/results` (being noindexed in 1.5) and `/missed-call-service`, `/seo-services-adelaide`, `/after-hours-answering` (being redirected in Phase 2).

**1.2 — Fix the wrong redirect.** In `next.config.mjs` change:
```js
// ❌ { source: "/ai-for-builders-adelaide", destination: "/websites-for-retail-shops-adelaide", permanent: true },
// ✅
{ source: "/ai-for-builders-adelaide", destination: "/tradie-website-bundle", permanent: true },
```
(If `/websites-for-builders-adelaide` is created in Phase 5, update the destination to that and keep 301 chains ≤1 hop by pointing the original source directly at the final page.)

**1.3 — Add redirect for the indexed orphan URL.** First verify status: `curl -sI https://aiadelaide.com.au/ai-receptionist-for-medical-practices-adelaide`. If it 404s, add:
```js
{ source: "/ai-receptionist-for-medical-practices-adelaide", destination: "/ai-receptionist-adelaide", permanent: true },
```

**1.4 — Add MISSING live pages to `app/sitemap.ts`** (all exist as routes today): `/virtual-receptionist-adelaide` (priority 0.85), `/answering-service-adelaide` (0.85), `/24-7-answering-service-adelaide`* (skip — redirected in Phase 2), `/bookkeeping-adelaide` (0.7), `/google-business-profile-optimisation-adelaide` (0.8), `/ai-marketing-adelaide` (0.7), `/best-ai-receptionist-australia` (0.75), `/testimonials` (0.7), `/tools/ai-readiness-calculator` (0.7).

**1.5 — Noindex the audit funnel.** Add `robots: { index: false, follow: true }` metadata to `/audit/quiz`, `/audit/report`, `/audit/results` (via their layout, or create a shared `app/audit/quiz/layout.tsx`-style metadata wrapper; if the pages are client components, add a route-group layout exporting metadata). `/audit` itself stays indexable.

**1.6 — Real lastModified dates.** Replace `const lastModified = new Date()` with a per-route date map seeded from git: `git log -1 --format=%cs -- app/<route>/page.tsx`. Blog posts: add/use a `date` (and optional `updated`) field from `data/posts.ts`. Suburb pages: date of the last `data/suburbs.json` commit. Document in a comment how to bump a date when editing a page.

**1.7 — Delete dead code + orphan assets.** Remove page directories now permanently shadowed by redirects: `app/adelaide`, `app/ai-for-tradies`, `app/ai-for-plumbers-adelaide`, `app/ai-for-electricians-adelaide`, `app/ai-for-builders-adelaide`, `app/ai-for-allied-health`, `app/ai-automation-for-tradies-adelaide`, `app/ai-automation-for-clinics-adelaide`. Delete `public/*.mp4` (3 files, ~16.8MB — verify zero references first: `grep -rn "\.mp4" app components`). Update any internal links pointing at deleted routes to their redirect targets (`grep -rE 'href="/(ai-for-|ai-automation-for-|adelaide")' app components lib data`).

**Acceptance:** build passes; sitemap contains zero URLs that return 3xx/4xx in a local prod build (`npm run build && npm start`, then curl every sitemap URL); audit funnel pages emit `noindex`; no internal links to redirected paths.

---

## Phase 2 — Consolidate the remaining cannibal clusters (~1 day)

Process per merge: (a) port unique valuable copy from source → target page, (b) delete source page dir, (c) add 301, (d) update internal links, (e) confirm source removed from sitemap.

**2.1 — Answering/receptionist cluster (11 pages → 6).** Add to `next.config.mjs`:
```js
{ source: "/tools/ai-receptionist-adelaide", destination: "/ai-receptionist-adelaide", permanent: true },
{ source: "/missed-call-service", destination: "/missed-call-answering-service-adelaide", permanent: true },
{ source: "/after-hours-answering", destination: "/after-hours-answering-adelaide", permanent: true },
{ source: "/24-7-answering-service-adelaide", destination: "/answering-service-adelaide", permanent: true },
```
**SURVIVORS (one per intent — do not merge these):** `/ai-receptionist-adelaide` (ai receptionist), `/virtual-receptionist-adelaide` (virtual receptionist — highest volume), `/answering-service-adelaide` (answering service / 24-7), `/after-hours-answering-adelaide` (after hours), `/missed-call-answering-service-adelaide` + `/missed-call-text-back-adelaide` (missed-call intents — keep both but differentiate: text-back = the product page, answering-service = the service page; cross-link them), `/best-ai-receptionist-australia` (listicle), `/ai-receptionist-cost-adelaide`, `/ai-receptionist-vs-virtual-receptionist` (comparison intents).
Content-port notes: `/missed-call-service` has a pricing table ("Standalone text-back from $99/mo…") — port to target ONLY after Phase 6 pricing confirmation. `/24-7-answering-service-adelaide` copy merges into `/answering-service-adelaide` as a "24/7 coverage" H2 section.

**2.2 — SEO cluster (3 → 2).**
```js
{ source: "/seo-services-adelaide", destination: "/seo", permanent: true },
```
Port its FAQ/pricing sections into `/seo` first. `/local-seo-adelaide` survives (distinct "local seo" modifier). `/automotive-seo-services` + `/hotel-seo-services` + the 5 new SEO vertical pages from commit `622a09b` survive as verticals — verify each has a unique H1/title and is in the sitemap.

**Acceptance:** build passes; `curl -I` each new redirect → 308/301 correct target; every survivor page title targets a distinct primary keyword (list them in the commit message); zero internal links to merged paths.

---

## Phase 3 — Metadata, schema & on-page gaps (~1 day)

**3.1 — `/faq` JSON-LD.** The page has FAQ content but 0 `ld+json`. Extract Q&As into an array, render FAQPage schema from it (copy the existing pattern used elsewhere in the repo — grep `"FAQPage"` for examples).
**3.2 — Homepage LocalBusiness dedupe.** Two LocalBusiness blocks render on `/` (one from `app/layout.tsx`, one from `app/page.tsx`). Keep the layout one (verify: non-www URLs, `streetAddress: "5 Peel St"`, phone `+61871009788`, GBP link in `sameAs`); in `app/page.tsx` remove the LocalBusiness node, keep WebSite/Organization nodes only if their `@id`s don't collide with layout's — otherwise reference layout's `@id`.
**3.3 — Breadcrumbs.** Add a `Breadcrumbs` component (visible UI + BreadcrumbList JSON-LD): Home → Section → Page, on service, suburb, and blog pages. Currently zero BreadcrumbList in repo.
**3.4 — Blog boilerplate.** In `app/blog/[slug]/page.tsx` remove/replace `withHomepageLink()` (injects the same intro paragraph into all 30 posts): swap for an end-of-post author box linking to `/website-design-adelaide` with 3 rotating anchors keyed on slug hash.
**3.5 — Meta sweep.** For every page: title ≤60 chars rendered (account for the `| AI Adelaide` template — use `title.absolute` where already brand-prefixed), description 140–160 chars ending with a CTA, no duplicates across pages (`node`-script check: extract all titles/descriptions, assert uniqueness, save as `scripts/check-meta.mjs` and add to CI).

**Acceptance:** build passes; `/faq` emits valid FAQPage; exactly one LocalBusiness in homepage HTML; breadcrumbs on ≥3 template types; meta-uniqueness script passes.

---

## Phase 4 — Conversion & pricing truth (~1–2 days)

**4.1 — [HUMAN GATE] Confirm the price list** before touching copy. Proposed canon (matches live homepage): Websites $699 / $1,299 / $2,499 one-off · Local SEO $399/mo, Growth SEO $699/mo · Automation Starter $199/mo, Automation Business $399/mo · Audit = FREE. Open question for Ivan: is "standalone missed-call text-back $99/mo" a real tier or legacy? (It appears on `/missed-call-service`, contradicting the $199/mo floor elsewhere.)
**4.2 — Single source of truth.** Add a `PRICING` object to `lib/constants.ts`; replace every hardcoded price sitewide (`grep -rn '\$[0-9]' app components lib data --include=*.tsx --include=*.ts` and work the list). Remove "$247 audit" claims from `/ai-consulting-adelaide`, `/ai-consulting-brisbane`, `/ai-consulting-melbourne` — audit is free everywhere.
**4.3 — Hero: kill the carousel.** `components/Hero.tsx` still rotates the H1 (`activeSlide` + interval). Render one static slide: H1 `AI-Powered Websites, SEO & Automation for Adelaide Small Business`, sub "Websites from $699 — live in 48 hours. SEO from $399/mo. Automation from $199/mo. No lock-in.", stat chips ($699 / 48hrs / No lock-in), primary CTA `/contact#send-message` "Get a fixed quote →", secondary `/website-pricing`.
**4.4 — StackCTA component.** Build `components/StackCTA.tsx` (server component, `variant: "website" | "seo" | "automation"`) with this copy:
> **H2:** "This works best as part of the full stack"
> **Body:** "A missed-call system bolted onto a website nobody finds is half a fix. Most clients start with a $699 website that's live in 48 hours, add local SEO from $399/mo so Adelaide customers actually find it, and switch on automation from $199/mo so no lead slips through. Pick one, or stack all three — no lock-in."
> CTAs: `/contact` "Get a fixed quote →" · `/website-pricing` "See plans".
Place above the final CTA on every harvest page: `/ai-receptionist-adelaide`, `/virtual-receptionist-adelaide`, `/answering-service-adelaide`, `/after-hours-answering-adelaide`, `/missed-call-answering-service-adelaide`, `/missed-call-text-back-adelaide`, `/ai-automation-adelaide`, `/ai-office-worker-adelaide`, `/bookkeeping-adelaide`, `/best-ai-receptionist-australia`.
**4.5 — Demo-line block.** Extract the homepage "Call (08) 7100 9788 — live 24/7" demo section into a reusable component; add to all receptionist/answering survivor pages (strongest proof asset; no Adelaide competitor has it).
**4.6 — Internal-link minimums.** Every service page: ≥1 cost/comparison link, ≥2 industry (`websites-for-*`) links, ≥2 suburb links, in body copy not just nav. `/ai-receptionist-adelaide` specifically must link to `/ai-receptionist-cost-adelaide`, `/ai-receptionist-vs-virtual-receptionist`, `/virtual-receptionist-adelaide`.

**Acceptance:** build passes; one H1 rendered statically on `/`; `grep -rn '\$247\|\$99/mo' app` → 0 (or only the human-approved tier); StackCTA on all 10 listed pages; link minimums verified.

---

## Phase 5 — Content build-out (~2 weeks, ship in order)

**5.1 — Pillar: expand `/website-cost-adelaide`** to ≥2,500 words: Adelaide market price table (agencies $3–5k+, freelancers, DIY), what each tier includes, our $699/$1,299/$2,499 breakdown, "why AI makes $699 possible", 8-Q FAQ + schema, StackCTA(website), links to all `websites-for-*` pages. Align with (and internally link) the existing blog posts `how-much-does-website-cost-adelaide` and `cheap-website-design-adelaide` — the PAGE targets the head term; edit the posts' titles if they cannibalize (post = "guide/2026 prices" angle, page = "cost" head term).
**5.2 — Landing page `/seo-for-tradies-adelaide`** (≥1,500 words) built from `/blog/adelaide-seo-for-tradies`; 301 the blog slug to it and update the 8 existing `blog/seo-*-tradies*` redirect variants in `next.config.mjs` to point at the new page directly (avoid 2-hop chains). Service schema, FAQ schema, StackCTA(seo), tier pricing $399/$699.
**5.3 — New industry pages:** `/websites-for-builders-adelaide`, `/websites-for-landscapers-adelaide`, `/websites-for-painters-adelaide` (~800–1,000 words each, clone the existing `websites-for-plumbers-adelaide` structure: trade pain intro, 5 must-have features with trade examples, pricing tiers, portfolio slot `<!-- HUMAN INPUT NEEDED -->`, 4-Q FAQ + schema, links to 3 suburbs + cost guide). Then update the `/ai-for-builders-adelaide` redirect destination to the new builders page.
**5.4 — Suburb depth pass.** For the 10 highest-value suburbs (Norwood, Glenelg, Unley, Prospect, Burnside, Mitcham, North Adelaide, Henley Beach, Mount Barker, Salisbury): extend `data/suburbs.json` entries to ≥600 words unique copy framed website+SEO-first, 3 suburb FAQs + schema, real local references (main strips, business mix). No invented client stories.
**5.5 — Portfolio.** Extend `/testimonials` (or new `/portfolio`): grid of real built sites, screenshot + live link each. `<!-- HUMAN INPUT NEEDED: client list, permissions, screenshots -->` — build the component and layout now, populate behind the flag.
**5.6 — Claims sweep.** Grep for stats/claims ("47%", "90%", "+30%", "$12,000", "Dave S.", "Chloe M.", "Tom W.", etc.); produce `docs/claims-to-verify.md` (file, line, claim). [HUMAN]: verify each or approve removal. Do not delete unilaterally.
**5.7 — Images.** Add real images with `next/image` to: homepage (1 hero/proof image), each pillar page, each industry page (portfolio screenshots). [HUMAN]: supply assets; agent wires them in with descriptive alt text (e.g. "Website design for an Adelaide plumbing business — mobile view").

**Acceptance:** build passes; cost pillar ≥2,500 words; `/seo-for-tradies-adelaide` live with no redirect chains >1 hop; 3 new industry pages in sitemap; 10 suburbs ≥600 words; `docs/claims-to-verify.md` delivered.

---

## Phase 6 — Performance & QA (~half day)

- Lighthouse (mobile) on `/`, `/website-design-adelaide`, `/website-cost-adelaide`, `/ai-receptionist-adelaide`: LCP <2.5s, CLS <0.1, perf ≥85. Fix biggest offenders (font count, unused JS, image sizes).
- Full-site link check in local prod build (crawl all sitemap URLs + internal hrefs → zero 404s, zero 301-chains >1 hop).
- Schema validation: every `ld+json` parses; no duplicate `@id`s per page.
- `npm run build` with ESLint ON for this check (`eslint.ignoreDuringBuilds` may stay for deploys, but report the error list).

---

## Phase 7 — Off-site & measurement [ALL HUMAN]

1. GSC: confirm non-www property, submit updated sitemap, request indexing for every changed/created money page; monitor Coverage for the redirected URLs.
2. GA4 events: call clicks, form submits, quiz completions; unique tracked number for the demo line.
3. GBP: services mirroring money pages, weekly posts, Q&A seeding, 25+ reviews in 90 days (use your own review-automation product and say so).
4. Citations blitz: Yellow Pages, TrueLocal, Localsearch, StartLocal, AussieWeb, hipages + GoodFirms, DesignRush, Sortlist, Semrush Agency Partners, Clutch. NAP exactly: "AI Adelaide, 5 Peel St, Adelaide SA 5000, (08) 7100 9788".
5. Rank grid (Adelaide): website design adelaide (+cost/cheap/tradie), seo for tradies adelaide, local seo adelaide, ai receptionist adelaide, virtual receptionist adelaide, missed call text back, answering service adelaide, + 10 suburb spot-checks.
6. PR/links: tradie website pricing data study; Master Plumbers SA / NECA SA / Master Builders SA guest articles; Adelaide business media pitches.
7. Archive `~/Projects/ai-adelaide-deploy/aiadelaide` (stale pre-pivot repo) so no one deploys from it again.

---

## Final pre-deploy checklist (every phase, before Ivan's approval)

- [ ] `npm run build` clean · shown on localhost · **Ivan approved**
- [ ] Sitemap: zero 3xx/4xx/noindexed URLs
- [ ] All redirects: single hop, correct targets (`curl -I` each)
- [ ] Zero internal links to redirected paths · zero `www.` references
- [ ] One LocalBusiness on `/` · FAQPage on `/faq` · unique titles/descriptions sitewide
- [ ] All prices match `PRICING` · zero unapproved claims shipped
