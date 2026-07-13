# Agent Handoff — Current State & Open Work

**Last updated: 2026-07-13** (Opus sprint T1–T5 executed).
Rule: whoever finishes an item strikes it here and re-dates this header. This file is the single answer to "what's the state and what do I do next?" — read `CLAUDE.md` first for the standing orders. **If you did work, the artifact must exist in THIS repo — work claimed in other workspaces doesn't count until it's committed here.**

## Current state

- Everything through Tier 12 is pushed and live (origin/main `47a69fd`).
- **Opus sprint T1–T5 done, committed locally, NOT yet pushed** (`2a7b3f4`→`3b399b1`, 5 commits on top of the Codex-review docs). Covers OPUS-BRIEF T1–T5. `tsc`, `check-meta`, `check-links` all clean at each commit. `next build` NOT run (sandbox can't) → Ivan's localhost gate. See `CHANGELOG-SEO-WORK.md` 2026-07-13 entry and "Verify before push" below.
- `LOCAL-SEO-GROWTH-REPORT-JULY-2026.md` (Codex, 2026-07-13) is **analysis, not a roadmap** — reconciled into the queue; do not execute directly.
- `docs/OPUS-BRIEF.md` (with Codex review override) was the spec for the T1–T5 sprint; historical now.

## Verify before push (Ivan / reviewing agent)

1. `npm install && npm run build` (the one gate the sandbox couldn't run).
2. Localhost click-through: cookie **Decline** → confirm NO GA event on nav-tel click (check `dataLayer`/Network); cookie **Accept** → event fires. `/contact?business=Test&service=website` prefills. Tradie form on `/seo-for-tradies-adelaide` submits (needs TELEGRAM_BOT_TOKEN + SMTP env to actually deliver). `/marion` renders new title. `/seo` title reads "SEO Services Adelaide…".
3. View-source a suburb page → exactly one LocalBusiness (from layout), no `$99` Service offer.
4. Push → GSC request-indexing: `/seo-for-tradies-adelaide`, the six suburbs (marion/reynella/moana/seaford/morphett-vale/henley-beach), `/seo`, `/local-seo-adelaide`.

**FOR CODEX (double-check my work):** review the 5 commits `2a7b3f4..3b399b1`. Focus points: (a) Consent Mode wiring in `app/layout.tsx` + `CookieConsent.tsx` + `lib/track.ts` — does Decline truly send zero analytics? (b) `/api/leads` refactor — audit lead now delivered via Telegram, FS write best-effort, no 500 on read-only FS? (c) suburb schema — one org entity, no `$99`? (d) any event double-firing from the click delegate + direct `track()` on the same element? Nothing here is pushed, so it's safe to amend.
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

**Q1. Lead & conversion measurement.** (a) GA4 events — ~~build-mine submits, personal-closer clicks, sticky-bar clicks, tel: clicks (demo/nav/footer), FAQ opens, form start/submit, audit start/complete~~ DONE (T1, `2a7b3f4`), consent-gated (Consent Mode denied-by-default + accepted-flag double-gate). (b) Attribution — ~~first-touch source on every lead, delivered via Telegram/email~~ DONE (T1); audit form `/api/leads` also fixed to deliver via Telegram (was 500-ing on Vercel's read-only FS, losing every audit lead). **STILL OPEN (do NOT strike):** durable lead STORAGE (Vercel FS is read-only; both routes are notification-only — Ivan picks CRM/DB/Sheet, no new paid service without approval) and the qualified/won/revenue lifecycle + monthly KPI. These need durable storage + an operating workflow.

~~**Q2. Contact form prefill.**~~ DONE (T2, `2a7b3f4`). ContactForm reads `?business`/`?service`; BuildYours closer passes them.

~~**Q3. Tradie SEO conversion pathway.**~~ DONE (T3, `9663608`) — executed on the surviving `/seo-for-tradies-adelaide` (the blog post is already 301'd; redirect preserved). Added inline lead form (free visibility review), above-fold CTA, links to plumber/electrician pages + Marion/Reynella, and a HUMAN INPUT NEEDED proof placeholder. **Open sub-item:** a real tradie case study to replace the placeholder (Q7 proof program).

~~**Q4. Six southern suburb pages.**~~ DONE (T4, `81c45df`) — GSC-tuned `seoTitle`/`seoDescription` for marion/reynella/moana/seaford/morphett-vale/henley-beach (via `title.absolute`), above-fold CTA confirmed, popular-areas hub block on `/website-design-adelaide`. Also fixed the `[suburb]` schema landmine (removed duplicate LocalBusiness + dead `$99` Service offer). **Open:** genuine local proof/imagery per suburb when Ivan supplies it.

~~**Q5. `/local-seo-adelaide` ownership call.**~~ DONE (T5, `3b399b1`) — `/seo` retitled to broad "SEO Services Adelaide" (meta + Service schema + breadcrumb); `/local-seo-adelaide` keeps the local modifier; 8 sitewide anchors verified; no merge/redirect.

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
