# Phase 8 — Post-Implementation Punch List (Agent Instructions)

> **STATUS: COMPLETE (2026-07-07).** P1-P4 fixed and verified; P5-P10 are Ivan-gated and tracked in docs/AGENT-HANDOFF.md. Historical record only.

**Context:** Phases 1–6 of `IMPLEMENTATION-PLAN.md` were executed (uncommitted working tree on top of `622a09b`) and have been independently verified — the work is solid: sitemap/redirects clean with zero 2-hop chains, schema consolidated, PRICING unified, static hero, StackCTA on 13 pages, new landing pages with correct metadata, `tsc --noEmit` exit 0. This file is the remaining gap list found during expert review. Same rules apply: localhost first, no deploy without Ivan's approval, never invent facts, one commit per numbered item or logical group.

---

## P1 — 29 broken internal links to `/services/automation` 🔴 HIGH

`data/posts.ts` contains **29** `href="/services/automation"` links (grew with the blog expansions). No such route exists and there is no redirect — every one is an internal 404.

1. Rewrite all 29 hrefs in `data/posts.ts` → `/ai-automation-adelaide`.
2. ALSO add a safety redirect (the URL may be crawled/bookmarked):
```js
{ source: "/services/automation", destination: "/ai-automation-adelaide", permanent: true },
```
3. Then sweep for any other internal 404s: extract every `href="/..."` from `app/`, `components/`, `data/posts.ts`, `data/suburbs.json`; assert each resolves to a route dir, a redirect source, or a known dynamic path (`/[suburb]`, `/blog/[slug]`). Save the checker as `scripts/check-links.mjs` and wire it next to `check-meta` in `package.json`.

**Accept:** checker reports 0 unresolved internal links; runs in CI alongside check-meta.

## P2 — Self-serving Review schema on `/testimonials` 🔴 HIGH

`app/testimonials/page.tsx` builds `Review` + `Rating` JSON-LD from the in-repo `testimonials`/`caseStudies` arrays. Two problems: (a) the underlying quotes are unverified (see `docs/claims-to-verify.md`), and (b) **Google's structured-data guidelines prohibit self-serving review markup** — reviews about your own business, hosted on your own site, are ignored at best and can draw a manual action at worst.

1. Remove the `Review`/`Rating`/any `aggregateRating` JSON-LD from `/testimonials` (and grep sitewide for other `"Review"` markup built from these arrays — suburb/industry pages use `pickTestimonial()`).
2. Keep the *visible* testimonials as-is pending Ivan's claims review.
3. The right way to get stars: real Google Business Profile reviews (Phase 7, [HUMAN]). If/when a third-party widget (Google reviews embed) is added, no schema is needed — Google reads its own reviews.

**Accept:** `grep -rn '"Review"' app components` returns nothing built from internal testimonial data.

## P3 — "$247 audit" blog post contradicts the free-audit offer 🟡 MEDIUM

`data/posts.ts` still contains 19 `$247` mentions inside the audit-worth-it post's body — an indexed page selling a paid audit while the whole site offers it free.

Rewrite the post around the current offer. Suggested frame: "We used to charge $247 for this audit — here's why it's now free, and what's in it." Keep the post's useful content (what a good audit covers, specificity argument), update title/meta/slug references accordingly (keep the slug to preserve equity; no redirect needed if slug unchanged). Update its `date`/lastmod.

**Accept:** `grep -c '\$247' data/posts.ts` returns only mentions consistent with the "used to cost / now free" frame (or 0); post reads coherently.

## P4 — Meta title/description residuals 🟡 MEDIUM

`scripts/check-meta.mjs` (good tool — keep) reports: 2 double-brand titles and 50 length-only findings (documented in `docs/meta-issues.md`).

1. Fix the two double-brands now: `app/contact/page.tsx` → `title: { absolute: "Contact AI Adelaide — Free Website, SEO & Automation Quote" }`; `app/faq/page.tsx` → `title: "FAQ — Websites, SEO & AI Automation Questions Answered"` (template adds the brand).
2. Of the 50 length findings, fix ONLY the money pages this pass (any `/website*`, `/seo*`, `/ai-receptionist*`, `/virtual-receptionist*`, `/answering*`, `/missed-call*`, `/websites-for-*`, `/ai-automation-adelaide` routes on the list) — tighten to ≤60-char rendered titles and 140–160-char descriptions without losing the keyword or the price hook. Leave legal/consulting/long-tail pages for a later copy pass; they're noted in `docs/meta-issues.md`.

**Accept:** check-meta shows 0 double-brand, 0 length failures on money pages.

## P5 — Build & visual gate 🔴 BLOCKING [HUMAN — Ivan]

`npm run build` could not run in the sandbox (missing arm64 SWC + blocked registry — verified pre-existing, not caused by the changes). Before ANY commit:
1. Ivan runs locally: `npm install && npm run build` — must pass.
2. `npm start` (or `npm run dev`) and click through: `/`, `/website-pricing`, `/website-cost-adelaide`, `/seo-for-tradies-adelaide`, the 3 new industry pages, `/testimonials`, one suburb page, `/faq`, one blog post — checking layout, StackCTA/DemoLine render, breadcrumbs, no visual regressions from the deleted legacy components (`Hero`, `PricingSection`, `FAQSection`, etc. were removed — build success proves no dangling imports, eyes prove no layout gaps).
3. `curl -I localhost:3000/<each redirect source>` spot-check 5 redirects.

## P6 — Claims review [HUMAN — Ivan]

Work through `docs/claims-to-verify.md` (10 testimonials, 3 named case studies, in-page stats). Per item: confirm real → keep; illustrative → agent labels it ("illustrative example based on typical results"); neither → agent removes. **Priority: the 3 case studies ("Suburban Plumbing", "Coastal Cafe", "Bright Smile Dental")** — they carry names + revenue figures and are the highest ACCC/trust exposure. Agent executes Ivan's decisions as a single commit.

## P7 — Pricing confirmation [HUMAN — Ivan]

The implementation normalized to **no standalone $99/mo text-back tier** (everything from $199/mo). Confirm this matches what you actually sell. If a $99 tier IS real, agent restores it in `PRICING` + `/missed-call-answering-service-adelaide` + `/missed-call-text-back-adelaide` pricing sections. (The remaining `~$99/mo` strings on `/best-ai-receptionist-australia` are competitor prices in a comparison table — those are fine.)

## P8 — Assets [HUMAN → agent]

Portfolio component and image slots are built and waiting: supply client-site screenshots + permissions, team photo, ABN. Agent wires them with `next/image` + descriptive alt text. This is the single biggest remaining E-E-A-T lever on-site.

## P9 — Post-deploy checklist [HUMAN — Ivan, within 24h of deploy]

1. GSC: submit sitemap; URL-inspect + request indexing for: `/seo-for-tradies-adelaide`, 3 new industry pages, `/website-cost-adelaide`, `/virtual-receptionist-adelaide`, `/answering-service-adelaide`.
2. PSI (mobile) on `/`, `/website-design-adelaide`, `/website-cost-adelaide` — LCP <2.5s, CLS <0.1 (the Lighthouse check the sandbox couldn't run).
3. Watch GSC Coverage for the ~14 newly-redirected URLs over 2–4 weeks (they should move to "Page with redirect", not "Not found").
4. Then start Phase 7 (citations, GBP reviews, rank grid) from `IMPLEMENTATION-PLAN.md`.

## P10 — Commit hygiene (agent, with Ivan)

89 files are uncommitted in one working tree. After P5 passes, commit in reviewable batches in this order (each buildable): (1) redirects+sitemap+noindex+deletions, (2) schema+breadcrumbs+meta, (3) pricing+hero+StackCTA/DemoLine, (4) new pages+content, (5) P1–P4 fixes, (6) docs/scripts. Push only after Ivan approves the full diff. Delete any stray `*.bak*` files before committing.

---

### Verified-done reference (don't redo)
Sitemap purge/additions + real dates · funnel noindex · builders & medical-practices redirects · 4 cluster consolidations + seo-services→seo, all single-hop · dead dirs + 16.8MB mp4s removed · `/faq` FAQPage · homepage LocalBusiness consolidation · breadcrumbs (58 files) · blog author-box replacing boilerplate · PRICING constant · static hero · StackCTA ×13 · DemoLine ×9 · `/seo-for-tradies-adelaide` (~2.1k words) · builders/landscapers/painters pages (~1k words each, schema+canonical) · `/website-cost-adelaide` ~2.9k words · 10 suburbs 640–690 words with FAQs+schema · claims/meta docs · check-meta script · tsc clean.
