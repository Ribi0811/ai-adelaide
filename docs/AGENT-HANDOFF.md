# Agent Handoff — Current State & Open Work

**Last updated: 2026-07-13** (Codex growth-report reconciliation).
Rule: whoever finishes an item strikes it here and re-dates this header. This file is the single answer to "what's the state and what do I do next?" — read `CLAUDE.md` first for the standing orders. **If you did work, the artifact must exist in THIS repo — work claimed in other workspaces doesn't count until it's committed here.**

## Current state

- Everything through Tier 12 is pushed and live (HEAD `47a69fd`): SEO phases 1–6, One Day homepage, day-aware nav, editorial footer, 31 dead-URL redirects, intent retitles, meta checker fully clean, 2 new blog posts (SEO cost, website-vs-socials).
- `LOCAL-SEO-GROWTH-REPORT-JULY-2026.md` (Codex, 2026-07-13) is **analysis, not a roadmap** — its actionable items are reconciled into the queue below; its status banner lists what was stale. Do not execute the report directly.
- GSC snapshot (28d to 10 Jul): clicks 17→26, impressions 5,435→9,881, avg position 40.9→47.4. Interpretation: young domain being tested broadly; strategy = consolidation, proof, authority — not more pages.

**Strategy notes (Ivan):** receptionist/answering = harvest-tier only (2026-07-11). Money and effort go to web design, SEO services, automation.

## Do-not-touch (settled — re-litigating these is a bug)

- **Answering/receptionist cluster:** consolidated 11→6 (Jul), retitled (Tier 12). FREEZE until ~2026-09-15, then re-evaluate with fresh GSC. The Codex report's suggestion to re-merge it is explicitly declined.
- `/seo-services-adelaide` is a 301 → `/seo` (its GSC impressions are pre-redirect echoes; it is NOT a live competing page).
- The tradie **blog post** (`/blog/adelaide-seo-for-tradies`, pos 3.2) must NEVER be redirected into the landing page — it's the ranking asset. Differentiate roles instead (see Q3).
- GBP exists (footer `share.google` link + schema `sameAs`) — the open question is review volume, not existence.

## Ivan's gate

Standing: `npm run build` + localhost click-through before any push; `git push` = deploy = Ivan only. Post-deploy: GSC request-indexing on changed money pages.

## Open work — priority order

**Q1. Lead & conversion measurement (was GA4 events — expanded per report §7; now top priority because nothing below can be evaluated without it).** (a) GA4 events: build-mine submits (+trade), personal-closer clicks, sticky-bar clicks, tel: clicks (demo vs nav vs footer), FAQ opens, form start/submit, audit start/complete. Pattern in `app/layout.tsx`. (b) Lead records keep source/medium/landing page/suburb/service + qualified/won status — extend the existing lead system (`app/api/leads`), spreadsheet is fine. (c) Monthly KPI = qualified Adelaide leads and won revenue, not clicks.

**Q2. Contact form prefill (small, high value).** `components/ContactForm.tsx`: read `?business=` + `?service=` params; point BuildYours personal CTA at `/contact?business={biz}#send-message`. Spec: PROMOTE-V2-PLAN A4.

**Q3. Tradie SEO conversion pathway (report §4.3 — best data-backed find).** The blog post ranks 3.2 for "seo for tradies adelaide" (49 impr) and 24.5 national (86 impr); the landing page sits at 36.5. Upgrade the POST: prominent early CTA, inline lead capture before the conclusion, links into `/seo-for-tradies-adelaide` + 2 trade pages + 2 southern suburbs, and a real tradie example `<!-- HUMAN INPUT NEEDED -->`. Differentiate the LANDING PAGE around buying intent (pricing, deliverables, onboarding). Do not merge them.

**Q4. Six southern suburb pages (report §4.7 — near-page-one, zero clicks).** Marion (pos 5.7), Reynella (8.2/11.4), Moana (14.3), Seaford (16-18), Morphett Vale (12.9), Henley Beach. Per page: title/desc tuned to the exact GSC queries ("website designer {suburb}"), unmistakable CTA above the fold, links from `/website-design-adelaide` + locations, kill templated repetition, local proof when Ivan supplies it. These six BEFORE any new suburb pages — expansion is frozen per the consolidation strategy.

**Q5. `/local-seo-adelaide` ownership call (small).** `/seo` (pos ~64) soaks the "local seo adelaide" impressions; `/local-seo-adelaide` (pos ~42) is the better-positioned page. Make it the exact-intent owner: retitle `/seo` toward broad "SEO services Adelaide", strengthen anchors to `/local-seo-adelaide` for local-intent phrases (footer already does), and cross-link. No merge, no redirect — backlink profile is ~nil so no map needed.

**Q6. Phase D — interior pages to v4 language.** Order unchanged: `/website-pricing` + `/website-design-adelaide` → `/seo` + `/seo-for-tradies-adelaide` → receptionist/automation pair → `websites-for-*` → suburb template → blog template. Re-skin WITHOUT rewriting ranking copy. Spec: PROMOTE-V2-PLAN Phase D + DESIGN-SYSTEM-V3.

**Q7. Proof & founder program [HUMAN-gated, agent-assisted] (report §5 = our claims-to-verify, escalated).** (a) Ivan decides `docs/claims-to-verify.md` items; (b) 3 permission-backed case studies to the report's proof standard (real name, suburb, baseline, timeframe, evidence); (c) About page: full founder name, photo, story, LinkedIn; (d) ABN in footer placeholder; (e) portfolio screenshots; (f) review-request workflow live (target: steady cadence, 25+ in 90 days); (g) confirm demo-line text-back fires → hang-up challenge section.

**Q8. Phase 7 off-site [HUMAN — Ivan].** GBP optimization + categories audit + UTM on links; citations (quality over volume: GBP/Apple/Bing/Yellow/TrueLocal + SA associations); Adelaide links via clients/partners/workshops; one research asset (report's list: after-hours call answering study, missed-call cost, SA AI-adoption benchmark). Spec: IMPLEMENTATION-PLAN Phase 7 + report §5.6–5.7, §8 Phase 7.

**Q9. Content-calendar seeds.** ~~SEO-cost post~~ ~~website-vs-socials post~~ DONE (commit `3cc0f55`). Remaining: "web designer Adelaide" dedicated angle; "small business websites adelaide" (75 impr @ 44); "seo for tradies" national expansion (116 impr @ 27); "plumbing websites" national (47 impr @ 68); "ecommerce adelaide" (86 impr — NO offering yet, Ivan decides first). Natural anchors; semantic > stuffing.

**Q10. Nice-to-haves parked.** OG image restyle; 404 delight; `check-links.mjs` in CI; drop Space Grotesk after Q6; repo hygiene: untrack the 144 `node_modules 2/` ghost entries (no SEO impact).

## Landmines (learn from our scars)

- `lib/constants.ts PRICING` is the only place prices live. Grep before trusting any doc's numbers — including old audits and reports.
- Adding a suburb: `data/suburbs.json` only — never write the count in copy.
- One FAQPage per URL, matching visible Q&As. Layout owns LocalBusiness.
- `git push` deploys production. Commits are safe; pushes are Ivan's.
- Sandbox can't run `next build` — `tsc --noEmit` + scripts are the ceiling; say so.
- 26 clicks/month is a tiny sample — don't declare victory or defeat off one GSC window; judge trends over 8+ weeks.
- Never redirect a page that ranks (see tradie post) without query/page evidence it helps.
