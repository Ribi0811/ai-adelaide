# Agent Handoff — Current State & Open Work

**Last updated: 2026-07-13** (Opus sprint + Codex verification and on-page SEO copy pass complete locally).
Rule: whoever finishes an item strikes it here and re-dates this header. This file is the single answer to "what's the state and what do I do next?" — read `CLAUDE.md` first for the standing orders. **If you did work, the artifact must exist in THIS repo — work claimed in other workspaces doesn't count until it's committed here.**

## Current state

- Everything through Tier 12 is pushed and live (origin/main `47a69fd`).
- **Opus sprint T1–T5 + Codex verification repairs done locally, NOT pushed.** The repair pass replaced Advanced Consent Mode with Basic Consent Mode (no Google script or attribution persistence before Accept), made contact submissions fail honestly if every delivery path fails, completed the tradie form fields, fixed `/seo`'s duplicate LocalBusiness, moved new metadata prices back to `PRICING`, corrected sitemap dates/FAQ-open counting, and taught `check-meta` to inspect suburb overrides. Full `next build`, `tsc`, `check-meta`, and `check-links` pass; localhost browser verification also passed. See `CHANGELOG-SEO-WORK.md` 2026-07-13 entries.
- **On-page SEO copy pass complete locally, NOT pushed.** `/seo` now visibly owns broad SEO services and has an above-fold audit CTA; `/local-seo-adelaide`, AI SEO, GBP, tradie and vertical/comparison pages no longer promise rankings or unsupported timelines. GBP is correctly priced as part of the `$399/mo` Local SEO plan. The six GSC-priority suburb pages now visibly lead with website design, use website pricing/audit/link paths, and no longer assign location-less testimonials to a suburb. Generic automation percentages remain only as explicitly illustrative targets, not guaranteed or measured averages. Genuine local proof/imagery remains Q7.
- `LOCAL-SEO-GROWTH-REPORT-JULY-2026.md` (Codex, 2026-07-13) is **analysis, not a roadmap** — reconciled into the queue; do not execute directly.
- `docs/OPUS-BRIEF.md` (with Codex review override) was the spec for the T1–T5 sprint; historical now.

## Verify before push (Ivan / reviewing agent)

1. **Completed locally:** `npm run build`, `tsc`, `check-meta`, `check-links`.
2. **Completed with fake GA ID + blocked Google endpoint:** Decline leaves `gtag` undefined, injects no Google script/request, and stores no attribution; Accept injects only the fake tag and persists first-touch UTM. FAQ close emits no `faq_open`; opening a closed item emits one.
3. **Completed locally:** `/marion` title renders correctly with exactly one LocalBusiness; `/seo` Service references `/#organization`; tradie form renders business and trade/service-area fields.
4. **Completed locally:** all 10 edited SEO/service pages plus the six priority suburbs return 200; rendered checks confirm one H1, one FAQPage and one layout-owned LocalBusiness on sampled money pages; desktop and 390px mobile hero/CTA checks pass.
5. **Still human/prod-dependent:** real Telegram/email delivery with Vercel secrets. After Ivan approves and pushes, request GSC indexing for `/seo-for-tradies-adelaide`, the six priority suburbs, `/seo`, and `/local-seo-adelaide`.
- GSC snapshot (28d to 10 Jul): clicks 17→26, impressions 5,435→9,881, avg position 40.9→47.4. Interpretation: young domain being tested broadly; strategy = consolidation, proof, authority — not more pages.

**Strategy notes (Ivan):** receptionist/answering = harvest-tier only (2026-07-11). Money and effort go to web design, SEO services, automation.

## Do-not-touch (settled — re-litigating these is a bug)

- **Answering/receptionist cluster:** consolidated 11→6 (Jul), retitled (Tier 12). FREEZE until ~2026-09-15, then re-evaluate with fresh GSC. The Codex report's suggestion to re-merge it is explicitly declined (and Codex concurred, 2026-07-13). During the freeze, MONITOR only: which URL Google selects per query, canonical/indexing status, per-page impressions, cross-ranking between intents, conversions. Content/CTA improvements on the surviving pages are allowed; URL and title churn is not.
- `/seo-services-adelaide` is a 301 → `/seo` (its GSC impressions are pre-redirect echoes; it is NOT a live competing page).
- The tradie blog post `/blog/adelaide-seo-for-tradies` is ALREADY consolidated into `/seo-for-tradies-adelaide` via a single-hop 301 (done pre-sprint; confirmed by Codex review 2026-07-13). Do NOT recreate the post or reverse the redirect. The pos-3.2 GSC figure was migration-window data. Conversion work goes on the surviving landing page (done in T3).
- GBP exists (footer `share.google` link + schema `sameAs`) — the open question is review volume, not existence.

## Ivan's gate

Standing: `npm run build` + localhost click-through before any push; `git push` = deploy = Ivan only. Post-deploy: GSC request-indexing on changed money pages.

## Open work — priority order

**Q1. Lead & conversion measurement.** (a) GA4 events — ~~build-mine submits, personal-closer clicks, sticky-bar clicks, tel: clicks (demo/nav/footer), FAQ opens, form start/submit, audit start/complete~~ DONE. Basic Consent Mode now means no Google script/request before Accept; FAQ closes are excluded. (b) Attribution — ~~first-touch source on consented leads, delivered via Telegram/email~~ DONE; it is held only in memory before consent and is neither persisted nor submitted after Decline. Audit `/api/leads` delivers via Telegram and fails honestly if neither notification nor local persistence works; `/api/contact-submit` now has the same all-paths-failed guard. **STILL OPEN (do NOT strike):** durable lead STORAGE (Vercel FS is read-only; both routes are notification-only — Ivan picks CRM/DB/Sheet, no new paid service without approval) and the qualified/won/revenue lifecycle + monthly KPI.

~~**Q2. Contact form prefill.**~~ DONE. ContactForm reads `?business`/`?service`; BuildYours closer passes them; unknown service values are rejected instead of leaving an invalid controlled select value.

~~**Q3. Tradie SEO conversion pathway.**~~ DONE — executed on the surviving `/seo-for-tradies-adelaide` (the blog post is already 301'd; redirect preserved). Inline visibility-review form now actually collects business/website plus trade/service area, alongside contact details; above-fold CTA, relevant links, and HUMAN INPUT NEEDED proof placeholder remain. **Open sub-item:** a real tradie case study to replace the placeholder (Q7 proof program).

~~**Q4. Six southern suburb pages.**~~ DONE (T4, `81c45df`, plus Codex on-page pass) — GSC-tuned `seoTitle`/`seoDescription` for marion/reynella/moana/seaford/morphett-vale/henley-beach (via `title.absolute`), above-fold CTA confirmed, popular-areas hub block on `/website-design-adelaide`. Their visible H1, capability detail, pricing, audit copy and internal links now match website-design intent; speculative local counts/outcomes were removed. Also fixed the `[suburb]` schema landmine (removed duplicate LocalBusiness + dead `$99` Service offer). **Open:** genuine local proof/imagery per suburb when Ivan supplies it.

~~**Q5. `/local-seo-adelaide` ownership call.**~~ DONE (T5, `3b399b1`) — `/seo` retitled to broad "SEO Services Adelaide" (meta + Service schema + breadcrumb); `/local-seo-adelaide` keeps the local modifier; 8 sitewide anchors verified; no merge/redirect.

**Q6. Phase D — interior pages to v4 language.** ~~`/website-pricing` + `/website-design-adelaide` → `/seo` + `/seo-for-tradies-adelaide`~~ DONE (2026-07-16) — Ivan approved all four previews; JSX ported into the real pages with metadata/Service schema/FAQPage/H1 verified byte-identical to the prior versions (whitespace-normalized diff, 16/16 MATCH); preview dirs deleted; client interactivity lives in per-page `parts.tsx` (PricingLab, RankLadder). Note: `/website-design-adelaide` now embeds the homepage's `<BuildYours />` module (additive, its own pre-existing copy). 2026-07-16 (later): `/contact`, `/audit`, `/services` re-skinned bespoke (verbatim copy, schemas MATCH), then ALL remaining legacy pages (SEO cluster, websites-for-*, suburbs, blog, receptionist cluster, faq, tools) moved to v4 in one pass by re-pointing the shared tokens/classes (tailwind.config + globals.css) — CSS-only, zero markup-text changes, frozen pages untouched at the copy level. Site is now visually uniform. Remaining Phase D work is OPTIONAL bespoke polish (wow moments) per page, not a re-skin. Spec: PROMOTE-V2-PLAN Phase D + DESIGN-SYSTEM-V3.

**Q7. Proof & founder program [HUMAN-gated, agent-assisted] (report §5 = our claims-to-verify, escalated).** (a) Ivan decides `docs/claims-to-verify.md` items; (b) 3 permission-backed case studies to the report's proof standard (real name, suburb, baseline, timeframe, evidence); (c) About page: full founder name, photo, story, LinkedIn; (d) ABN in footer placeholder; (e) portfolio screenshots; (f) review-request workflow live (target: steady cadence, 25+ in 90 days); (g) confirm demo-line text-back fires → hang-up challenge section.

**Q8. Phase 7 off-site [HUMAN — Ivan].** GBP optimization + categories audit + UTM on links; citations (quality over volume: GBP/Apple/Bing/Yellow/TrueLocal + SA associations); Adelaide links via clients/partners/workshops; one research asset (report's list: after-hours call answering study, missed-call cost, SA AI-adoption benchmark). Spec: IMPLEMENTATION-PLAN Phase 7 + report §5.6–5.7, §8 Phase 7.

**Q9. Content-calendar seeds.** ~~SEO-cost post~~ ~~website-vs-socials post~~ DONE (commit `3cc0f55`). Remaining: "web designer Adelaide" dedicated angle; "small business websites adelaide" (75 impr @ 44); "seo for tradies" national expansion (116 impr @ 27); "plumbing websites" national (47 impr @ 68); "ecommerce adelaide" (86 impr — NO offering yet, Ivan decides first). Natural anchors; semantic > stuffing.

**Q10. Nice-to-haves parked.** ~~OG image restyle~~ DONE 2026-07-16 (site-wide + per-suburb OG generators re-themed to v4 ink/teal; same wording). Remaining: 404 delight; `check-links.mjs` in CI; drop Space Grotesk after Q6; repo hygiene: untrack the 144 `node_modules 2/` ghost entries (no SEO impact).

## Landmines (learn from our scars)

- `lib/constants.ts PRICING` is the only place prices live. Grep before trusting any doc's numbers — including old audits and reports.
- Adding a suburb: `data/suburbs.json` only — never write the count in copy.
- One FAQPage per URL, matching visible Q&As. Layout owns LocalBusiness.
- `git push` deploys production. Commits are safe; pushes are Ivan's.
- Do not assume an old sandbox limitation still applies: this workspace successfully ran the full Next production build on 2026-07-13.
- 26 clicks/month is a tiny sample — don't declare victory or defeat off one GSC window; judge trends over 8+ weeks.
- Never redirect a page that ranks (see tradie post) without query/page evidence it helps.
