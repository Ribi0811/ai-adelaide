# Opus Sprint Brief — Q1–Q5 Implementation (2026-07-13)

**You are implementing the current queue from `docs/AGENT-HANDOFF.md` (Q1–Q5).**
Read `CLAUDE.md` first (standing orders). This brief is self-contained: exact
files, field names, and acceptance checks are below — verified against the
repo at HEAD `fa697e7` on 2026-07-13.

## Rules (non-negotiable)

1. This repo IS production. Commits are safe; **`git push` deploys — Ivan only.**
2. One commit per task (T1…T6), task name in the message. `npx tsc --noEmit`,
   `node scripts/check-meta.mjs`, and `node scripts/check-links.mjs` must be
   clean before each commit.
3. **Never invent facts** — no client names, stats, reviews. Where proof is
   needed: `<!-- HUMAN INPUT NEEDED: ... -->` + log in `docs/claims-to-verify.md`.
4. Prices come ONLY from `PRICING` in `lib/constants.ts`.
5. **Do-not-touch:** the answering/receptionist URLs and titles (frozen to
   ~2026-09-15); the tradie BLOG post's slug/URL (it ranks 3.2 — enrich it,
   never redirect it); one FAQPage per URL matching visible Q&As; LocalBusiness
   lives in `app/layout.tsx` only; the sandbox rule — if you can't run
   `next build`, say so, don't claim build-verified.
6. When you finish a task: strike it in `docs/AGENT-HANDOFF.md`, re-date its
   header, and append a dated entry to `CHANGELOG-SEO-WORK.md`. Work without
   artifacts in THIS repo doesn't count.

---

## T1 — Analytics events + first-touch attribution (handoff Q1)

**Goal:** every meaningful action fires a GA4 event, and every lead arrives
with its first-touch source attached.

**1a. Tracking helper + click delegate.**
- Create `lib/track.ts`:
  ```ts
  export function track(event: string, params: Record<string, string | number> = {}) {
    if (typeof window === "undefined") return;
    (window as any).gtag?.("event", event, params);
  }
  ```
- Create `components/AnalyticsListener.tsx` (`"use client"`, returns null):
  a single document-level click listener that walks `e.target.closest("[data-track]")`
  and calls `track(el.dataset.track!, { href: el.getAttribute("href") ?? "" })`.
  Mount it once in `app/layout.tsx` inside `<body>`. This lets SERVER
  components (Footer, DuskCatch, NewDawn, CTA blocks) emit events by adding a
  `data-track` attribute — no client conversion needed.

**1b. Add `data-track` attributes** (attribute value = event name):
| Where (file) | Element | Event name |
|---|---|---|
| `components/Navbar.tsx` | tel link / quote pill | `tel_nav` / `quote_nav` |
| `components/Footer.tsx` | tel link / quote pill | `tel_footer` / `quote_footer` |
| `components/home-day/DuskCatch.tsx` | tel link in copy | `tel_demo_dusk` |
| `components/home-day/NewDawn.tsx` | tel + "Start your first day" | `tel_newdawn` / `quote_newdawn` |
| `components/DemoLine.tsx` | call button | `tel_demo_line` |
| `components/home-v3/StickyBar.tsx` | quote pill | `quote_sticky` |
| `components/StackCTA.tsx` | primary CTA | `quote_stackcta` |

**1c. Direct `track()` calls (client components):**
- `components/home-day/BuildYours.tsx`: in `buildMine()` →
  `track("preview_website", { trade: kind })`; on the personal-closer link
  onClick → `track("personal_closer_click", { trade: kind })`.
- `components/home-v3/FAQV3.tsx`: convert is server — instead add
  `data-track="faq_open"` on each `<summary>` (delegate handles it).
- `components/ContactForm.tsx`: fire `track("form_start")` once on first
  field change (useRef guard); `track("form_submit", { service: form.service })`
  on success.

**1d. First-touch attribution.**
- Create `lib/attribution.ts` (client-safe):
  ```ts
  const KEY = "aia_attr";
  export function captureAttribution() {           // call once on mount
    if (typeof window === "undefined" || localStorage.getItem(KEY)) return;
    const p = new URLSearchParams(window.location.search);
    localStorage.setItem(KEY, JSON.stringify({
      landing: window.location.pathname,
      referrer: document.referrer || "direct",
      utm_source: p.get("utm_source") ?? "", utm_medium: p.get("utm_medium") ?? "",
      utm_campaign: p.get("utm_campaign") ?? "", ts: new Date().toISOString(),
    }));
  }
  export function getAttribution() {
    try { return JSON.parse(localStorage.getItem(KEY) ?? "null"); } catch { return null; }
  }
  ```
- Call `captureAttribution()` from `AnalyticsListener`'s mount effect.
- `components/ContactForm.tsx`: include `attribution: getAttribution()` in the
  `/api/contact-submit` POST body (fields there today: name, email, phone,
  business, service, message, source).
- `app/api/contact-submit/route.ts` (locate it; contact form posts there):
  append the attribution fields to the Telegram message + email body so Ivan
  sees source with every enquiry. Also extend `app/api/leads/route.ts`
  `LeadPayload` with optional `attribution` and persist it (same
  `data/leads.json` write path) and send it from the audit-quiz submitter
  (find the fetch to `/api/leads` under `app/audit/` or `lib/audit/`).

**Accept:** clicking nav tel on localhost logs a `tel_nav` gtag call (verify
via `window.dataLayer` in console — note in changelog you verified manually);
a submitted test form shows attribution in the Telegram/email payload code
path; tsc + both checkers clean.

---

## T2 — Contact form prefill (handoff Q2)

- In `components/ContactForm.tsx` add ONE `useEffect` on mount (do NOT use
  `useSearchParams` — it forces a Suspense boundary; this component renders on
  a server page):
  ```ts
  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    const business = p.get("business"); const service = p.get("service");
    if (business || service) setForm(f => ({ ...f,
      business: business ?? f.business, service: service ?? f.service }));
  }, []);
  ```
  Valid `service` values: match the existing `<select>` option values in this
  file — inspect and map (`seo`, `website`, etc.) rather than guessing.
- `components/home-day/BuildYours.tsx`: personal-closer `href` becomes
  `` `/contact?business=${encodeURIComponent(data.biz)}&service=website#send-message` ``.

**Accept:** `/contact?business=Joes%20Plumbing&service=website` prefills both
fields on localhost.

---

## T3 — Tradie SEO conversion pathway (handoff Q3 — highest SEO value)

The blog post `adelaide-seo-for-tradies` in `data/posts.ts` ranks 3.2 for
"seo for tradies adelaide". Make it convert; differentiate the landing page.
**Do not change its slug. Do not redirect anything.**

**3a. Post enrichment (edit its `content` HTML string in `data/posts.ts`):**
- After the first `</p>`, insert an early CTA block (pure HTML, styled like
  existing in-post CTAs — grep `class="not-prose` or similar in posts for the
  house pattern; if none exists, a simple bordered `<div>` with a link is fine):
  link text "Want this done for you? SEO for tradies from $399/mo ›" →
  `/seo-for-tradies-adelaide`.
- In-body links (natural anchors, one each): `/seo-for-tradies-adelaide`,
  `/websites-for-plumbers-adelaide`, `/websites-for-electricians-adelaide`,
  `/marion`, `/reynella`.
- Before the final heading, insert:
  `<!-- HUMAN INPUT NEEDED: one real tradie result (name, suburb, baseline → outcome, timeframe) -->`
- Bump the post's `date` to today.

**3b. Inline lead capture on posts.** Extend `interface Post` in
`data/posts.ts` with optional `cta?: "tradie-seo"`. In
`app/blog/[slug]/page.tsx`, when `post.cta === "tradie-seo"`, render (between
the content div and the author box) a new `components/BlogLeadCTA.tsx`
(`"use client"`): heading "Get a free tradie visibility review", one
name + phone/email field pair, POSTs to `/api/contact-submit` with
`service: "seo"`, `message: "Free tradie visibility review request (blog)"`,
plus `getAttribution()`. Fire `track("blog_lead_submit", { slug })` on
success. Set `cta: "tradie-seo"` on the tradie post only.

**3c. Landing page differentiation** (`app/seo-for-tradies-adelaide/page.tsx`):
verify it leads with buying intent — pricing tiers from `PRICING.seo`, "what
you get each month" deliverables list, onboarding steps, FAQ. Add any of those
that are missing; do NOT copy paragraphs from the blog post. Cross-link: post ↔
landing page both directions (post links done in 3a; landing page gets one
"prefer the free guide?" link to the post).

**Accept:** post renders with early CTA + inline form on localhost; check-meta
clean; no changes to any URL.

---

## T4 — Six southern suburb pages (handoff Q4)

GSC shows near-page-one positions with zero clicks. Tune exactly these six in
`data/suburbs.json` (fields already exist: `seoTitle`/`seoDescription` do NOT
exist yet — add them as optional fields and consume them in
`app/[suburb]/page.tsx` `generateMetadata`, falling back to the current
template):

| Suburb | Target query (GSC) | New `seoTitle` (≤60 rendered) |
|---|---|---|
| marion | website designer marion (pos 5.7) | `Website Designer Marion — From $699 \| AI Adelaide` |
| reynella | reynella website designer / web design reynella (8.2/11.4) | `Web Design Reynella — Websites From $699 \| AI Adelaide` |
| moana | moana website designer (14.3) | `Website Designer Moana — From $699 \| AI Adelaide` |
| seaford | seaford website designer (16–18) | `Website Designer Seaford — From $699 \| AI Adelaide` |
| morphett-vale | morphett vale website designer (12.9) | `Website Designer Morphett Vale — $699 \| AI Adelaide` |
| henley-beach | website designer henley beach | `Website Designer Henley Beach — $699 \| AI Adelaide` |

- Verify rendered length ≤60 incl. any layout template (use `title.absolute`
  pattern only if the template double-appends — check how `[suburb]`
  generateMetadata composes today).
- `seoDescription` per suburb: 140–160 chars, mention the suburb + "website
  design/designer" + $699 + 48 hours + a nearby suburb.
- Template (`app/[suburb]/page.tsx`): confirm a quote CTA is visible above the
  fold on mobile; if not, add one under the hero line.
- Add a "Popular areas" links block (6 links to these suburbs) on
  `app/website-design-adelaide/page.tsx` — these pages currently get their
  only inbound links from the footer/locations.
- Do NOT create new suburbs. Do NOT touch the other 28 entries' titles.

**Accept:** check-meta clean (no dupes — six unique titles/descriptions);
`/marion` renders new title on localhost; links present on
/website-design-adelaide.

---

## T5 — `/local-seo-adelaide` intent ownership (handoff Q5)

Small and surgical — no merges, no redirects:
1. `app/seo/page.tsx`: retitle toward the broad term, e.g.
   `SEO Services Adelaide — Plans From $399/mo` (verify ≤60 rendered; keep
   description keyworded to "SEO services Adelaide" not "local seo").
2. In `/seo`'s "SEO services by focus" spoke block, make the
   `/local-seo-adelaide` anchor text exactly "Local SEO Adelaide" and add one
   in-prose contextual link higher on the page ("for suburb-level Google
   rankings, see our local SEO Adelaide service").
3. `app/local-seo-adelaide/page.tsx`: confirm title leads with
   "Local SEO Adelaide"; confirm it links back to `/seo` as the hub.
4. Blog: in the `how-much-does-seo-cost-adelaide` post, point one existing
   "local SEO" mention at `/local-seo-adelaide` (currently likely `/seo`).

**Accept:** grep shows ≥3 sitewide anchors containing "Local SEO Adelaide" →
`/local-seo-adelaide`; check-meta clean; both pages' H1s unchanged in intent.

---

## T6 — Bookkeeping (close the loop)

- Strike Q1/Q2/Q3/Q4/Q5 items you completed in `docs/AGENT-HANDOFF.md`,
  re-date its header, append a dated `CHANGELOG-SEO-WORK.md` entry
  (what/where/verification), and list anything you could NOT verify
  (e.g. real gtag beacons) for Ivan's localhost pass.

## Ivan's gate after your commits
`npm run build` + localhost click-through (`/contact?business=Test`, tradie
post form, `/marion`, `/seo`) → push → GSC request-indexing on: the tradie
post, `/seo-for-tradies-adelaide`, the six suburbs, `/seo`,
`/local-seo-adelaide`.

## Explicitly out of scope for this sprint
Phase D re-skins (handoff Q6), anything in the frozen answering cluster,
new suburbs/pages beyond the above, the OG image, ecommerce content
(no offering yet — Ivan decides).
