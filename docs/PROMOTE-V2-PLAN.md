# Promote the chosen preview → Homepage (Agent Plan)

**DECISION MADE (5 Jul 2026): v4 "One Day" is the chosen design.** Wherever this plan says v2/home-v3 sections, substitute the /v4 section list: ClockHUD · Celestial · DawnHero · MorningSearch · MiddayQuote · BuildYours · DuskCatch · NightSleep · NewDawn · SuburbStrip · FAQV3 · StickyBar (source of truth: `app/v4/page.tsx`, which also carries the production-ready title/description to move to `app/page.tsx`). /v2 and /v3 become 301s to / at promotion; delete `app/v2`, `app/v3`, and any home-v3/home-cinema components no longer imported (MockSite.tsx, FAQV3, StickyBar, Reveal ARE still imported by v4 — keep).

**Trigger:** Ivan says "promote". Until then, do nothing — all previews stay noindexed.
**Rules:** localhost first · Ivan approves before commit/deploy · never invent facts · one commit per phase.

---

## Phase A — Pre-promotion polish (do BEFORE the swap)

**A1. Redesign global Navbar to the v3 language.** The current nav frames every page; promoting v2 content inside the old chrome undoes the wow. New spec: light glass bar (`bg-white/80 backdrop-blur-xl`, hairline bottom border), ink wordmark, links in 15px medium `#1D1D1F`, single teal pill CTA "Get a quote" right-aligned, mobile menu full-screen sheet with staggered link reveal. Keep `navLinks` from `lib/constants.ts` as source of truth.
**A1b. Scroll-aware nav inversion.** Over dark sections (Proof panel, the v3 replay scene) a light nav goes illegible. Add an IntersectionObserver on `[data-nav-dark]` sections that toggles a `nav-inverted` class on the navbar (dark glass `bg-black/40`, white links) with a 300ms transition, flipping back on exit. Tag every dark section with `data-nav-dark`.

**A2. Redesign global Footer.** Apple-quiet: `#F5F5F7` bg, 4 columns from existing footer data, 13px `#6E6E73` links, hairline top border, bottom row: ABN `<!-- HUMAN INPUT: ABN -->` · "Adelaide owned" · legal links. Remove any leftover dark-theme styling.

**A3. Kill double-sticky.** `StickyMobileCTA` (global) + home-v3 `StickyBar` must not both render on the homepage. Render StickyBar on home only; suppress StickyMobileCTA there (or replace it sitewide with StickyBar-style).

**A4. Contact form prefill.** In `ContactForm.tsx`: read `?business=` + `?service=` query params into the form's business-name field and service dropdown. Then update the hero's personal-closer link to `/contact?business={encodeURIComponent(data.biz)}#send-message`.

**A5. Signature details (10 lines total):** `::selection { background:#5EF2D6; color:#05221C }`; visible `:focus-visible` ring (2px teal offset) on all pills/inputs; `scroll-behavior: smooth` respecting reduced-motion.

**A6. Font audit.** home-v3 uses sans + mono only. If Space Grotesk (`--font-display`) is unused after interior-page migration (Phase D), drop it from `app/layout.tsx` — one fewer font download. Do NOT drop while old pages still use `font-display`.

**A7. GA4 events** on: build-mine submissions (`preview_website` + kind), personal-closer clicks, leak-calculator interactions, sticky-bar clicks, demo-line tel clicks. Use existing gtag pattern from `app/layout.tsx`.

**Accept:** tsc + build clean; nav/footer screenshots approved by Ivan; one sticky element max per viewport; `?business=` prefills on localhost.

## Phase B — The swap

**B1. Backup current home:** copy `app/page.tsx` → `docs/archive/page-home-v2.tsx.bak` (reference only, outside `app/`).

**B2. Rebuild `app/page.tsx`** as server component: keep the EXISTING homepage metadata + JSON-LD `@graph` (title, description, WebSite node), then render the v3 sections in this order: HeroV3 · BeforeAfter · LeakCalculator · ServicesV3 · Process48 · ProofV3 · PricingV3 · SuburbMap · FAQV3 · CTAV3 · StickyBar. Do NOT copy the `/v2` preview badge or its noindex metadata.

**B3. Schema merge — critical:** the current homepage `@graph` already emits a FAQPage node, and `FAQV3` emits its own. ONE FAQPage per URL: remove the old `@graph` FAQPage node and keep FAQV3's (its questions match the money keywords), or merge old Q&As into FAQV3's array if Ivan wants them kept. Verify with a JSON-LD parse that the rendered homepage has exactly one FAQPage, one LocalBusiness (from layout), one WebSite.

**B4. SEO guards:** H1 stays exactly "A website that wins you work. Live in 48 hours." (contains "website"; Adelaide lives in eyebrow/sub — acceptable, do not stuff). Confirm suburb link list (SuburbMap `<ul>`) renders server-side in page source. Meta title/description unchanged from current home unless Ivan approves new copy. Run `npm run check-meta`.

**B5. Retire the preview route:** delete `app/v2/`, add `{ source: "/v2", destination: "/", permanent: true }` to `next.config.mjs`.

**B6. Housekeeping:** if no other route imports `components/home-v2/*`, delete the directory. Bump homepage date in sitemap `PAGE_DATES`.

**Accept:** build clean; `/` renders v3 sections with correct metadata; exactly one FAQPage/LocalBusiness/WebSite in source; `/v2` 308s to `/`; Lighthouse mobile on `/`: LCP < 2.5s, CLS < 0.1 (hero photo is `loading="eager"` — verify it isn't the LCP blocker; if it is, add `fetchpriority="high"` or preload). **Ivan clicks through on localhost and approves → deploy.**

## Phase C — Within 24h of deploy [HUMAN unless noted]

1. GSC: URL-inspect `/`, request indexing; watch CWV + Coverage for a week.
2. Verify GA4 events fire in production (agent can add a debug checklist).
3. Baseline rank snapshot (website design adelaide cost, seo for tradies adelaide, ai receptionist adelaide) to measure the redesign's effect.
4. Watch bounce rate + quote-form submissions vs old home for 2 weeks. Rollback = `git revert` of the swap commit (that's why it's one commit).

## Phase D — Design-system rollout to interior pages (post-promotion, ~2 weeks)

The homepage will now be world-class inside a site of 70 old-style pages — that contrast is the next trust-killer. Migration order (traffic × money): 1) `/website-pricing` + `/website-design-adelaide`, 2) `/seo` + `/seo-for-tradies-adelaide`, 3) `/ai-receptionist-adelaide` + `/ai-automation-adelaide`, 4) `websites-for-*` cluster, 5) suburb template, 6) blog template, 7) the rest.
Method: extract the v3 primitives into `components/v3/` (SectionHeading with numbered eyebrow, Pill button, Card, Reveal, StackCTA, DemoLine) and re-skin pages using them — do NOT rewrite page copy while re-skinning (SEO content stays byte-identical where possible; this is a CSS/JSX-structure pass). Tokens live in `docs/DESIGN-SYSTEM-V3.md`.

---

*Written 4 Jul 2026. Companion: `docs/DESIGN-SYSTEM-V3.md` (tokens + rules).*
