# aiadelaide.com.au — SEO, Content & Conversion Audit (v2 — Canonical Repo)
**Date:** 3 July 2026 · **Scope:** `ai-adelaide-CANONICAL` @ `622a09b` — verified as matching the live site
**Strategy:** Website-led. Websites $699/48hr = wedge → SEO retainers $399–699/mo = profit engine → automation/receptionist = add-on + harvest pages.
**Supersedes:** the audit in `ai-adelaide-deploy/aiadelaide` (that repo is stale — archive it; see Implementation Plan Phase 0).

---

# 1. Executive Summary

Repo/live parity is confirmed: homepage metadata, 34 suburb pages, website-led positioning, non-www canonicals, and a redirect layer all match production. This version of the site already fixed most of what was wrong in the old repo: FAQPage schema now on ~50 files, `/ai-receptionist-adelaide` carries 3 JSON-LD blocks, the blog has grown to 30 posts including website-led money content (`how-much-does-website-cost-adelaide`, `cheap-website-design-adelaide`, `adelaide-seo-for-tradies`), and the `/ai-for-{trade}` → `/websites-for-{trade}` consolidation is done.

| Dimension | Score /10 | Movement vs old repo |
|---|---|---|
| SEO (technical + on-page) | **7** | ▲ from 5.5 — canonicals fixed, schema coverage strong, positioning coherent. Held back by sitemap rot, one live cannibal cluster, a wrong redirect, and fake lastmod dates |
| UX / Conversion | **7** | = Hero is still a carousel; pricing contradictions remain on legacy pages |
| Content Quality | **7** | ▲ from 6 — 30 posts, website-led pillars exist. Still near-zero images (2 files sitewide) and unverified claims |
| Competitiveness | **5.5** | ▲ slightly — the on-site product is now competitive; authority (links, reviews, citations) is the gap |

**Top 5 remaining issues (all fixable in days):**
1. **Sitemap serves redirects and hides money pages.** `app/sitemap.ts` still lists ~10 URLs that 301 (`/adelaide`, `/ai-for-tradies`, `/ai-for-plumbers-adelaide`, `/ai-for-electricians-adelaide`, `/ai-for-builders-adelaide`, `/ai-for-allied-health`, `/ai-automation-for-tradies-adelaide`, `/ai-automation-for-clinics-adelaide`, `/missed-call-service`*, `/seo-services-adelaide`*) while OMITTING live money pages: `/virtual-receptionist-adelaide`, `/answering-service-adelaide`, `/24-7-answering-service-adelaide`, `/bookkeeping-adelaide`, `/google-business-profile-optimisation-adelaide`, `/ai-marketing-adelaide`, `/best-ai-receptionist-australia`, `/testimonials`, `/tools/ai-readiness-calculator`. (*not redirected yet but should be — see #3.) Plus `lastModified = new Date()` on every build and the `/audit/quiz|report|results` funnel pages still listed and indexable.
2. **Redirect bug:** `/ai-for-builders-adelaide` → `/websites-for-retail-shops-adelaide` (builders sent to retail). And `/ai-receptionist-for-medical-practices-adelaide` — a URL Google has indexed (it appeared in a live SERP this week) — has **no route and no redirect** in this repo → likely 404ing. Verify and redirect.
3. **The answering/receptionist cluster is now ELEVEN live pages:** `/ai-receptionist-adelaide`, `/virtual-receptionist-adelaide`, `/answering-service-adelaide`, `/24-7-answering-service-adelaide`, `/after-hours-answering`, `/after-hours-answering-adelaide`, `/missed-call-service`, `/missed-call-answering-service-adelaide`, `/missed-call-text-back-adelaide`, `/tools/ai-receptionist-adelaide` (still `'use client'` with **zero metadata/canonical**), `/best-ai-receptionist-australia`. That's ~5 real intents. SEO cluster also still triple: `/seo` + `/seo-services-adelaide` + `/local-seo-adelaide`. Consolidation map in the Implementation Plan.
4. **Pricing contradictions on live pages:** `/missed-call-service` says "From $99/mo" while the homepage says automation from $199/mo; `/ai-consulting-{adelaide,brisbane,melbourne}` still sell a "$247 audit" while the sitewide offer is a free audit.
5. **E-E-A-T deficit unchanged:** 2 files with images in the whole codebase (you sell websites — show some), unverifiable stats ("47% more booked jobs", anonymous testimonials), no portfolio with live client links, orphan `.mp4`s (16.8MB, zero references) still in `/public`.

**Projected impact:** the remaining fixes are cheap and mostly mechanical. 90-day targets stand: page 1 for "website design adelaide cost", "cheap/affordable website design adelaide", the `websites-for-{trade}` cluster, "seo for tradies adelaide"; top 3 for harvest terms ("missed call text back adelaide", "ai receptionist adelaide"). Head terms ("web design adelaide", "seo adelaide") remain 6–12 month authority plays — the bottleneck is now off-site (links, reviews, citations), not the site.

---

# 2. Keyword Strategy (unchanged from v1 — tiers carry over)

**Tier 1 — Wedge (websites):** website design adelaide cost/price → `/website-cost-adelaide` (exists — expand to full pillar); cheap/affordable website design adelaide → `/website-design-adelaide`; tradie websites + websites for plumbers/electricians/clinics/cafes/hairdressers/salons/retail → live cluster (add builders, landscapers, painters); small business website adelaide; head term last.
**Tier 2 — Retainer (SEO):** seo for tradies adelaide → upgrade `/blog/adelaide-seo-for-tradies` to a landing page; local seo adelaide → `/local-seo-adelaide`; google business profile optimisation adelaide → page exists, **not in sitemap**; seo vs google ads adelaide → page + post exist; seo adelaide head term via `/seo`.
**Tier 3 — Harvest (automation, CTA → stack):** ai automation adelaide; missed call text back; ai receptionist adelaide; virtual receptionist adelaide (higher volume than "AI receptionist" — page exists, **not in sitemap**); answering service adelaide; after hours answering adelaide; best ai receptionist australia (listicle page exists — keep updated quarterly).

Competitor landscape unchanged: receptionist SERP = small players (PalmConnect, Yes AI, PRJ Automations, Sophiie) — winnable now; SEO/web-design head SERPs = aggregators + established agencies (Safari Digital, Marketing Sweet, Website Adelaide at $3k+) — win the long-tail first, and get listed on the aggregators (GoodFirms, DesignRush, Sortlist, Semrush) rather than fighting them.

---

# 3. Technical Findings (verified in this repo)

| # | Finding | Evidence | Priority |
|---|---|---|---|
| C1 | Sitemap lists ~10 redirecting URLs, omits ≥9 live money pages, fake `lastModified = new Date()`, includes noindex-worthy `/audit/*` funnel pages | `app/sitemap.ts` vs `next.config.mjs` redirects | **Critical** |
| C2 | Wrong redirect target: builders → retail shops | `next.config.mjs`: `/ai-for-builders-adelaide → /websites-for-retail-shops-adelaide` | **High** |
| C3 | Indexed URL with no route/redirect: `/ai-receptionist-for-medical-practices-adelaide` | Appears in live Google SERPs; absent from `app/` and redirect map | **High** |
| C4 | `/tools/ai-receptionist-adelaide`: `'use client'`, zero `metadata`, no canonical, own hand-rolled nav | `app/tools/ai-receptionist-adelaide/page.tsx` | High |
| C5 | 11-page answering cluster + 3-page SEO cluster (see §1.3) | routes + sitemap | **High** |
| C6 | Redirected page directories still exist as dead code (`/ai-for-plumbers-adelaide` etc. are shadowed by redirects but still ship) | `app/ai-for-*` | Medium |
| C7 | `/audit/quiz`, `/audit/report`, `/audit/results` indexable + sitemapped | no `robots` metadata found under `app/audit/` | High |
| C8 | `/faq` has FAQ content but 0 JSON-LD (while 50 other files have FAQPage) | grep | Medium |
| C9 | Two LocalBusiness blocks render on the homepage (layout + page) — verify `@id`/address consistency, consolidate to one | `app/layout.tsx`, `app/page.tsx` | Medium |
| C10 | Hero still a rotating carousel swapping the H1 | `components/Hero.tsx` (`activeSlide`/interval logic) | Medium |
| C11 | 3 orphan `.mp4`s in `/public` (~16.8MB, zero code references) | grep `.mp4` → 0 | Low |
| C12 | Only 2 files sitewide render any image | `app/website-design-adelaide/page.tsx`, `components/SuburbHero.tsx` | High (E-E-A-T) |
| C13 | Blog boilerplate: `withHomepageLink()` still injects an identical intro paragraph into every post | `app/blog/[slug]/page.tsx` | Low |
| C14 | Pricing contradictions: "$99/mo" on `/missed-call-service`, "$247 audit" on 3 consulting pages vs free audit + $199/mo sitewide | grep `$99`, `$247` | High (trust) |

**What's now GOOD and must not regress:** non-www `siteConfig.url` everywhere; middleware www→non-www 308 + vercel.app noindex; FAQPage schema at scale; Service/LocalBusiness schema present; 34 suburb pages with `SuburbHero` images; blog Article schema; website-led nav (Websites · Pricing · SEO · Services · Audit · Blog · Contact); `/ai-for-{trade}` consolidation redirects (except the builders bug).

---

# 4. Content, Offering & Conversion (delta from v1)

Still applies from v1: expand `/website-cost-adelaide` into the 2,500+ word pricing pillar (this SERP is won by pricing guides and you're the only $699/48hr player); build `/seo-for-tradies-adelaide` as a landing page from the existing blog post; add StackCTA cross-sell blocks to all harvest pages so receptionist/answering traffic converts into the website+SEO+automation stack; named case studies replace anonymous testimonials ("Dave S.", "Chloe M." etc. — verify or remove, ACCC risk); portfolio page with links to real client sites; single-slide hero with the $699/48hr message; unify pricing via one `PRICING` constant.

New since v1 (already done in this repo — credit where due): website-led blog cluster exists (cost guide post, cheap-website post, best-website-builder post, GBP guide, SEO-vs-Ads), `/testimonials` page exists, `/website-pricing` exists. The content gap is now **depth on the pillars + images + proof**, not page count.

---

# 5. Off-Page (unchanged priority — now the main bottleneck)

Citations blitz (Yellow Pages, TrueLocal, Localsearch, StartLocal, hipages + GoodFirms/DesignRush/Sortlist/Semrush/Clutch), GBP optimization with 2–4 reviews/month velocity, tradie-association guest articles (Master Plumbers SA, NECA SA, Master Builders SA), one data-study PR asset ("what Adelaide tradies actually pay for websites"), and GSC/GA4/rank-grid measurement. Full detail in v1 audit §7 and Implementation Plan Phase 7.

---

*Verification basis: full route inventory of `ai-adelaide-CANONICAL` @ 622a09b (72 page routes, 34 suburbs, 30 posts), redirect map extraction from `next.config.mjs`, sitemap.ts cross-check, schema/pricing/image greps, live-site fetches (homepage metadata parity confirmed 3 Jul 2026), and SERP research for Adelaide receptionist/SEO/web-design markets.*
