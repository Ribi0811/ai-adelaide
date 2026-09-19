# Competitor Study: melbourneai.com.au vs AI Adelaide

**Date:** 17 July 2026 · **Analyst:** Claude (session study for Ivan)
**Method:** full-site crawl of their live pages (home, /ai-employees/, /blog/, sitemap), US-index web searches for their money queries, comparison against our GSC-verified position. Search-visibility findings are directional (US index, not AU-localised SERPs) — treat as strong signal, not gospel.

---

## 1. Who they are

- **Positioning:** "Hire AI employees for your business" — from $199/month, live in 2 weeks. One metaphor carried through everything: AI as *staff you hire*, not software you buy.
- **Products:** productised "AI employees": Reception ($199/mo), Data Entry ($199/mo — homepage says $49/mo in one spot, see §4), Inbox Manager ($399/mo), Follow-Up Agent ($199/mo), Scheduling Assistant ($199/mo), Custom (quoted). Plus custom AI apps and IoT monitoring.
- **Scope:** started Melbourne, now pitching nationally ("Now serving Australian businesses"). 12 industries listed, 3 with dedicated pages (trades, construction, real estate).
- **Stack:** WordPress + Google Site Kit, cal.com for bookings, live chatbot ("MAI") embedded on-site.
- **They are NOT a direct competitor** — different city, and they sell automation-first while we sell website-first with automation as the add-on. They're best read as a sister-market analog of our old pre-pivot strategy, executed with better packaging and worse engineering.

## 2. Search visibility: us vs them

| Signal | Melbourne AI | AI Adelaide |
|---|---|---|
| sitemap.xml | **4 URLs**, lastmod stale (Mar 2026) while money pages (ai-receptionist, industries…) aren't listed at all | 120+ routes, per-page lastmod maintained (PAGE_DATES) |
| Appears in searches for own money queries | **No.** Absent from "AI automation Melbourne" and "AI receptionist Melbourne" results; competitors (Amily AI, AI-DOS, UnderCurrent, aiautomationmelbourne.com.au) own those SERPs | GSC-verified rankings (e.g. seo-for-tradies avg pos ~3) |
| Directory/third-party footprint | None found (not in Clutch/GoodFirms/DesignRush Melbourne AI lists) | Thin too — our shared gap (Q8) |
| Blog | ~25-30 posts, weekly-ish, AI-generated with sloppy truncated titles ("Getting Started AI Business: Getting Started with AI for") targeting national builder/tradie AI queries | 31 edited posts, GSC-driven topics |
| Technical hygiene | $-sign rendering bugs on homepage ("From ,000", "Replaces 7,325/year"), favicon GIF as OG image, US locale (en_US) on an AU site | Clean meta across 120 routes, custom OG images, en_AU |
| Proof | One anonymous testimonial ("Melbourne Business Owner"). No reviews, no named case studies. **ABN displayed in footer.** | Same proof gap (Q7) — but they show ABN, we don't yet |

**Verdict:** they are not an SEO threat and not an SEO model. Their organic engine is broken in exactly the ways ours is strong. Where they beat us is *packaging and conversion mechanics*, not distribution.

## 3. What they do better (steal these)

1. **The "AI employee" frame.** "Hire an AI employee for $199/mo" beats "AI automation from $199/mo" — everyone understands hiring, and the $87,325/yr human vs $2,388/yr AI table makes the ROI visceral. → Apply to `/ai-automation-adelaide` and our `ai-automation-vs-hiring-staff-adelaide` guide as a visual comparison. (Respect the answering-cluster copy freeze until ~15 Sep for those specific URLs.)
2. **Live demos on the page** ("Not slides. Not promises. Real AI doing real work."): working chatbot, upload-a-document extractor, paste-an-email reply drafter. We already have the two best versions of this (BuildYours + the phone line that really answers) — but they demo *every* product. → Candidates for us: a "paste your missed-call voicemail, watch the text-back" demo; document-extractor demo if we ever push bookkeeping.
3. **cal.com 15-min booking as primary CTA.** Every CTA books a slot directly — zero form friction, immediate commitment. → We should add a "book a 15-min call" scheduling link (cal.com is free) alongside the contact form. Probably our single cheapest conversion win.
4. **TL;DR blocks** at the top of money pages — written for AI Overviews/LLM answers ("Melbourne AI provides AI employees… $199/month… call…"). Smart AI-era SEO. → Consider additive TL;DR blocks on our money pages (additive only; existing copy untouched).
5. **Cheap productised wedge ($49/mo homepage price for data entry/follow-up).** A tiny-commitment entry product that upsells later — the same logic as our $699 website wedge and new $99/mo plan. Validates our pricing-ladder instinct.
6. **ABN in the footer.** Costs nothing, adds legitimacy. Ours is still a placeholder (Q7d) — Ivan supplies, 2-minute fix.

## 4. What they do badly (avoid / exploit)

- **Pricing inconsistency:** homepage says Data Entry $49/mo; /ai-employees/ says from $199/mo. This is exactly why our `PRICING` single-source-of-truth rule exists.
- **Broken sitemap + invisible money pages** — their industry and product pages likely get minimal crawl priority.
- **AI-generated content without editing** — truncated headlines, en_US locale, template bugs shipping to production. Their "we're the AI experts" pitch is undermined by visibly unedited AI output. Our standing rule (human-checked copy, verbatim-parity checks) is the differentiator to keep.
- **Anonymous proof** — "Melbourne Business Owner, Construction Industry" reads as invented. Reinforces: real names + Google reviews (our Q7) is the moat neither of us has built yet.
- **Fake-feeling urgency widgets** ("A visitor from Melbourne is interested in…") — don't copy.

## 5. Product ideas worth considering for AI Adelaide

Ranked by fit with our website-led strategy:

1. **Cal-style instant booking** (adopt now — conversion mechanics, not product).
2. **"Quote Chaser" as a named product** — they productise follow-up as its own $199 "employee". Our Automation Starter already includes quote follow-up; naming it and demoing it (the 12:30pm homepage scene is already the demo!) could sell it standalone at ~$99-149/mo entry.
3. **AI data-entry / invoice extraction** — genuinely useful for tradies (receipts → Xero), fits our bookkeeping-adelaide page, and is demoable. Medium effort; only if automation demand grows.
4. **Inbox triage** — their $399/mo tier; heavier build, weaker fit for tradies (they live on the phone, not email). Skip for now.
5. **IoT monitoring** — off-strategy noise for them and would be for us. Skip.

## 6. Actions

| # | Action | Owner | Status |
|---|---|---|---|
| 1 | Add cal.com/Calendly 15-min booking option beside contact form CTAs | Claude (Ivan picks tool + availability) | proposed |
| 2 | ABN into footer | Ivan supplies ABN | Q7d, open |
| 3 | Human-vs-AI cost comparison visual on ai-automation-vs-hiring-staff guide | Claude | proposed |
| 4 | "AI employee" framing on automation pages after ~15 Sep freeze lift | Claude | parked |
| 5 | Additive TL;DR blocks on money pages (AI-Overview optimisation) | Claude, Ivan approves copy | proposed |
| 6 | Named "Quote Chaser" mini-product + on-page demo | Ivan decision (pricing/product) | proposed |

*Nothing in this study changes existing rankings work: their playbook validates our strategy (local + tradie + productised pricing) while showing the packaging layer we can still add.*
