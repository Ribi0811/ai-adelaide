# Opus Sprint Brief — Q1–Q5 Implementation (2026-07-13)

> ## CODEX REVIEW OVERRIDE — READ BEFORE IMPLEMENTING
>
> **Added 2026-07-13 after a repo, live-site, API-route, and deployment review.**
> This override is part of the brief, not optional commentary. Where an older
> instruction below conflicts with this block or a `CODEX REVIEW` note, follow
> the review instruction.
>
> 1. **T3 is stale and must not be executed as originally written.** The
>    `adelaide-seo-for-tradies` post is absent from `data/posts.ts`, was
>    deliberately consolidated into `/seo-for-tradies-adelaide`, and the live
>    blog URL returns a 308 to that landing page. The GSC result for the old URL
>    overlaps the migration window and is not proof that a separate post still
>    exists. Do not recreate the post, remove the redirect, or reverse the
>    consolidation. Execute the revised T3 instructions below against the
>    surviving landing page only.
> 2. **Local JSON files are not durable production storage on Vercel.** Vercel
>    Functions have a read-only deployment filesystem apart from temporary
>    `/tmp` storage. You may include attribution in Telegram/email notifications
>    and in request payloads, but do not claim `data/leads.json` or
>    `data/contact-leads.json` is durable production persistence. Durable CRM,
>    database, or Google Sheets storage remains open until Ivan selects the
>    destination. Do not silently introduce a new paid external service.
> 3. **Analytics consent is part of T1.** The current cookie banner's Decline
>    action only hides the banner; GA still loads unconditionally. Do not add a
>    larger event layer that continues tracking after decline. Implement
>    consent-aware GA loading or Google Consent Mode with analytics denied by
>    default. Verify both Accept and Decline behaviour.
> 4. **Q1 may not be struck as fully complete.** This sprint can complete event
>    tracking and attribution delivery, but qualified/won/revenue lifecycle
>    tracking needs durable storage and an operating workflow. Leave that
>    sub-item open unless it is genuinely implemented and verified.
> 5. **T4 touches an existing landmine.** `app/[suburb]/page.tsx` currently has
>    page-level LocalBusiness markup and a hardcoded `$99` Service offer. Both
>    conflict with this brief's rules. The revised T4 instructions below make
>    that cleanup mandatory while the template is already being edited.
> 6. **T5 is mostly verification, not a fresh rebuild.** Several requested links
>    already exist. Make only the remaining surgical changes listed in the
>    revised T5 note; do not churn working content to manufacture a diff.
>
> **Current reviewed base:** local `main` at `7dde44b`, three commits ahead of
> `origin/main`. Record the actual base again before starting because Ivan-only
> push/deploy rules still apply.

**You are implementing the current queue from `docs/AGENT-HANDOFF.md` (Q1–Q5).**
Read `CLAUDE.md` first (standing orders). This brief contains exact files,
field names, and acceptance checks, plus the Codex review corrections above.
The original draft was verified against `fa697e7`; the reviewed brief itself is
at `7dde44b`. Run `git status --short --branch` and record the actual base before
making changes.

## Rules (non-negotiable)

1. This repo IS production. Commits are safe; **`git push` deploys — Ivan only.**
2. One commit per task (T1…T6), task name in the message. `npx tsc --noEmit`,
   `node scripts/check-meta.mjs`, and `node scripts/check-links.mjs` must be
   clean before each commit.
3. **Never invent facts** — no client names, stats, reviews. Where proof is
   needed: `<!-- HUMAN INPUT NEEDED: ... -->` + log in `docs/claims-to-verify.md`.
4. Prices come ONLY from `PRICING` in `lib/constants.ts`.
5. **Do-not-touch:** the answering/receptionist URLs and titles (frozen to
   ~2026-09-15); the existing `/blog/adelaide-seo-for-tradies` →
   `/seo-for-tradies-adelaide` redirect and the surviving landing page's URL,
   canonical, title, and H1 intent; one FAQPage per URL matching visible Q&As;
   LocalBusiness lives in `app/layout.tsx` only; the sandbox rule — if you
   can't run `next build`, say so, don't claim build-verified.
6. When you finish a task: strike it in `docs/AGENT-HANDOFF.md`, re-date its
   header, and append a dated entry to `CHANGELOG-SEO-WORK.md`. Work without
   artifacts in THIS repo doesn't count.

---

## T1 — Analytics events + first-touch attribution (handoff Q1)

**Goal:** every meaningful action fires a GA4 event, and every lead arrives
with its first-touch source attached.

> **CODEX REVIEW — REQUIRED SCOPE CORRECTION:** Complete the event and
> attribution-delivery work in this task, but do not represent local JSON writes
> as durable production lead storage. Add analytics consent handling before the
> event delegate. The qualified/won/revenue CRM lifecycle remains open unless a
> durable destination is explicitly selected and implemented.

**1-pre. Make analytics consent real before adding events.**
- `app/layout.tsx` currently loads GA whenever
  `NEXT_PUBLIC_GA_MEASUREMENT_ID` exists, before and regardless of the visitor's
  cookie choice.
- `components/CookieConsent.tsx` currently stores Accept/Decline but does not
  enable or disable GA.
- Implement one coherent approach:
  1. Google Consent Mode with analytics storage denied by default and updated
     only after Accept; or
  2. Load/configure GA only after Accept and keep it unloaded after Decline.
- Preserve a prior choice on subsequent visits.
- The tracking helper must safely no-op whenever analytics is unavailable or
  declined.
- Do not make a legal-compliance claim in the changelog; report only the
  behaviour that was implemented and tested.

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
  sees source with every enquiry. Extend `ContactPayload` and the typed lead
  objects rather than accepting an unvalidated arbitrary object.
- Also extend `app/api/leads/route.ts` `LeadPayload` with optional attribution
  and send it from the actual submitter at
  `app/tools/ai-readiness-calculator/page.tsx`.
- **Production-storage warning:** `app/api/contact-submit/route.ts` writes
  `data/contact-leads.json`, and `app/api/leads/route.ts` writes
  `data/leads.json`. These writes are local-development conveniences only and
  are not durable on Vercel. Do not claim otherwise. For this sprint:
  - Ensure contact-form attribution reaches Telegram and email even when the
    local file write fails.
  - Do not make the audit form depend on a filesystem write to report success
    in production. Route its notification through an existing durable delivery
    channel, or document it as blocked pending Ivan's storage decision.
  - Leave qualified/won/revenue lifecycle tracking open in the handoff unless a
    durable store and update workflow are genuinely implemented.
- Add the handoff's missing `audit_start` and `audit_complete` events to the AI
  readiness calculator. Fire `audit_start` once when the first answer is
  recorded and `audit_complete` only after a successful submission.

**Accept:** after Accept, clicking nav tel on localhost logs a `tel_nav` gtag
call (verify via `window.dataLayer` in console); after Decline, the same click
does not send an analytics event; a submitted test form shows attribution in
the Telegram/email payload code path; audit start/complete are instrumented;
tsc + both checkers clean. Document that durable qualified/won/revenue tracking
remains open unless it was actually completed.

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

> **CODEX REVIEW — ORIGINAL T3 BELOW IS SUPERSEDED.** The old blog post does
> not exist. It was retired during Phase 5, and the live URL redirects to the
> surviving landing page. Do not recreate it, change that redirect, or add a
> second page targeting the same intent. The 3.2 GSC position is migration-
> window evidence, not a current instruction to reverse the consolidation.

**Revised goal:** improve conversion on the surviving
`/seo-for-tradies-adelaide` page without changing its URL, canonical, title,
H1 intent, or the retired-blog redirect.

**3a. Verify the migration before editing.**
- Confirm `data/posts.ts` has no `adelaide-seo-for-tradies` entry.
- Confirm `next.config.mjs` maps `/blog/adelaide-seo-for-tradies` directly to
  `/seo-for-tradies-adelaide` with one hop.
- Confirm no internal link points at the retired blog URL.
- Log those checks; do not undo them.

**3b. Landing-page conversion path.**
- Audit `app/seo-for-tradies-adelaide/page.tsx` for an unmistakable CTA in the
  first viewport on mobile, pricing sourced from `PRICING.seo`, monthly
  deliverables, onboarding steps, FAQ, and a clear next action.
- Add only what is missing; do not rewrite ranking copy to create work.
- Add a focused inline lead component on this landing page, not the blog
  template. Suggested heading: "Get a free tradie visibility review".
- Collect name plus at least one contact method, POST to
  `/api/contact-submit` with `service: "seo"`, a clear source/message, and
  `getAttribution()`.
- Fire `track("tradie_lead_submit", { page: "seo-for-tradies-adelaide" })`
  only after a successful response.
- The endpoint must enforce its existing email-or-phone requirement and must
  include attribution in Telegram/email per T1.

**3c. Proof placeholder.**
- Add one clearly marked source comment near the appropriate proof/case-study
  area:
  `<!-- HUMAN INPUT NEEDED: one real tradie result (name, suburb, baseline, outcome, timeframe, permission) -->`
- Do not add invented client copy or show the placeholder to visitors.
- Add natural internal links to the plumber and electrician website pages and
  to Marion and Reynella only where they help the reader. Do not force exact-
  match anchors.
- Preserve the original landing-page publication facts. If the page gains
  modified-date handling, use a distinct updated value; never rewrite an old
  `datePublished` merely to make content look new.

**Accept:** the retired blog URL still resolves in one redirect to the landing
page; the landing page renders the focused lead form and existing commercial
content on localhost; a successful form response fires the event; no URL,
canonical, title, or H1-intent changes; check-meta and check-links clean.

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
- **Mandatory cleanup while this template is open:**
  - Remove the page-level `LocalBusiness` JSON-LD block. The root layout owns
    the one business entity for the site.
  - In the `Service` JSON-LD, reference the root organisation/business by its
    existing `@id` rather than embedding a second `LocalBusiness` object.
  - Remove the hardcoded `price: "99.00"`. Either omit the offer price or add a
    suitable numeric field to the central `PRICING` model and source it there;
    do not parse a display string and do not introduce another price literal.
  - Grep the shared suburb template for outcome claims such as “3–5 extra jobs
    per week” or “recover investment within 30 days.” Do not expand those
    claims; log them in `docs/claims-to-verify.md` if not already present.
- Add a "Popular areas" links block (6 links to these suburbs) on
  `app/website-design-adelaide/page.tsx` — these pages currently get their
  strongest hub links from the footer/locations. Verify actual inbound links
  before describing them as their only links.
- Do NOT create new suburbs. Do NOT touch the other 28 entries' titles.

**Accept:** check-meta clean (no dupes — six unique titles/descriptions);
`/marion` renders the new title on localhost; links present on
`/website-design-adelaide`; rendered suburb HTML has no page-level duplicate
LocalBusiness and no `$99` Service offer; tsc and check-links clean.

---

## T5 — `/local-seo-adelaide` intent ownership (handoff Q5)

Small and surgical — no merges, no redirects:
1. `app/seo/page.tsx`: it is already partially differentiated, but its metadata
   still contains “Local SEO Services.” Retitle toward the broad term, e.g.
   `SEO Services Adelaide — Plans From $399/mo` (verify ≤60 rendered; keep
   description keyworded to "SEO services Adelaide" not "local seo").
2. The `/seo` "SEO services by focus" block already uses exact anchor text
   “Local SEO Adelaide.” Preserve it. Add one natural in-prose contextual link
   higher on the page only if an appropriate sentence exists.
3. `app/local-seo-adelaide/page.tsx` already leads with “Local SEO Adelaide”
   and already links back to `/seo`. Verify and preserve; do not rewrite it to
   manufacture a diff.
4. The `how-much-does-seo-cost-adelaide` post already links multiple “local
   SEO” mentions to `/local-seo-adelaide`. Verify and preserve; no edit is
   required unless a contradictory link is found.
5. Review `/seo`'s Service schema name and breadcrumb labels, which may still
   say “Local SEO Adelaide.” Align those with the broad SEO-services role if
   doing so remains accurate and matches visible page intent.

**Accept:** grep shows ≥3 sitewide anchors containing "Local SEO Adelaide" →
`/local-seo-adelaide`; `/seo` metadata/schema/breadcrumb language owns broad
SEO-services intent; check-meta clean; both pages' H1s unchanged in intent; no
merge or redirect.

---

## T6 — Bookkeeping (close the loop)

- Strike only Q1/Q2/Q3/Q4/Q5 items or sub-items you actually completed in
  `docs/AGENT-HANDOFF.md`. In particular, do not strike the qualified/won/
  revenue lifecycle or durable lead-storage requirement merely because GA4
  events and notification attribution are working.
- Re-date the handoff header and append a dated `CHANGELOG-SEO-WORK.md` entry
  describing what changed, what was deliberately preserved, and what remains
  open.
- Record that T3 was executed against the surviving landing page and that the
  retired-blog redirect was preserved.
- Record the production storage limitation and Ivan decision needed if no
  durable CRM/database/Sheet was selected.
- List anything you could not verify (for example real GA beacons or external
  notification delivery) for Ivan's localhost or production pass.

## Ivan's gate after your commits
`npm run build` + localhost click-through (`/contact?business=Test`, tradie
landing-page form, `/marion`, `/seo`) → push → GSC request-indexing on:
`/seo-for-tradies-adelaide`, the six suburbs, `/seo`,
`/local-seo-adelaide`.

## Explicitly out of scope for this sprint
Phase D re-skins (handoff Q6), anything in the frozen answering cluster,
new suburbs/pages beyond the above, the OG image, ecommerce content
(no offering yet — Ivan decides).
