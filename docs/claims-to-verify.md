# Claims to Verify

Generated as part of Phase 5.6 of `IMPLEMENTATION-PLAN.md` (SEO/content project). This is a **catalog only** — nothing has been edited or deleted. Every item below reads as a specific, attributable outcome (a named testimonial, an anonymised-but-specific "case study" business, or a hard percentage/dollar figure) rather than confirmed pricing or a generic industry statistic.

**[HUMAN]: for each item, either (a) confirm it's a real, verifiable result and keep it, (b) confirm it's intended as an illustrative example and add a label like "illustrative example" / "based on typical results" so it doesn't read as a specific client claim, or (c) approve removal.** Do not assume anything below is false — this list exists because these claims currently have no visible sourcing, not because they've been found inaccurate.

Excluded from this list: confirmed pricing ($699/$1,299/$2,499 website tiers, $399/mo·$699/mo SEO tiers, $199/mo·$399/mo automation tiers, $20-50/yr domain, $15-30/mo hosting) and pure arithmetic built from those confirmed prices (e.g. "$6,349 with SEO" on `/website-cost-adelaide`).

---

## 1. Named testimonials & case studies (`lib/constants.ts`, `components/home-v2/Proof.tsx`)

These are the most visible and most specific — real names, real-sounding businesses, quoted outcomes, no visible source.

**[RESOLVED 4 Jul 2026 — Ivan confirmed the testimonials are genuine.]** The 10 testimonials in `lib/constants.ts` and `components/home-v2/Proof.tsx` stay exactly as written — nothing here has been or should be edited/removed on truthfulness grounds. Separately (Phase 8 punch list, item P2), the `Review`/`Rating` JSON-LD schema that was being built from this array on `/testimonials` has been **removed** — not because the reviews are doubted, but because Google's structured-data guidelines prohibit self-hosted Review/Rating markup about your own business regardless of accuracy (self-serving schema is ignored at best, a manual-action risk at worst). The visible testimonials on the page are unaffected; only the invisible schema tag changed. Real star-rating schema should come from an embedded Google Business Profile reviews widget once one exists (Phase 7) — Google supplies that schema itself.

The 3 named **case studies** ("Suburban Plumbing"/Dave S. — "47% more booked jobs in 90 days"; "Coastal Cafe"/Tom W. — "weekend foot traffic is up 30%"; "Bright Smile Dental"/James L. — "No-shows dropped 65%, +$8k/month revenue") are a separate, still-open item — the punch list (P6) flags these specifically as the highest ACCC/trust exposure since they combine a name with a specific revenue figure. **Still awaiting Ivan's per-item confirm/label/remove decision** unless he confirms these are also genuine.

| File | Lines | Name / business | Claim |
|---|---|---|---|
| `lib/constants.ts` | 70–140 (`testimonials` array) | Dave S. (trades), Sarah K. (clinic), Mark T. (builder), Chloe M. (salon — "online bookings are up 40%"), Tom W. (cafe), Sarah P. (trades), James L. (clinic), Megan R. (beauty — "4-5 new client enquiries a week"), Josh K. (retail), Aisha N. (salon) | 10 quoted testimonials — **confirmed genuine by Ivan**, kept as-is. |
| `lib/constants.ts` | 145–173 (`caseStudies` array) | "Suburban Plumbing" / Dave S. — "47% more booked jobs in 90 days"; "Coastal Cafe" / Tom W. — "Page 1 ranking... weekend foot traffic is up 30%"; "Bright Smile Dental" / James L. — "No-shows dropped 65%, +$8k/month revenue" | Three named case studies with specific plans, results, and quotes, reused across `/testimonials` and the pricing page. **Not yet confirmed** — awaiting explicit sign-off separate from the testimonials above. |
| `components/home-v2/Proof.tsx` | ~10–45 | Dave S., Chloe M., Tom W., James L., Megan R., Josh K. | Same testimonial set (or a subset) rendered on the homepage — covered by the same confirmation as row 1. |

**Where these get reused:** `app/testimonials/page.tsx` renders both arrays directly (the `Review` schema previously built from them has now been removed, per above), and several suburb/industry pages pull a matched testimonial via `pickTestimonial()` in `app/[suburb]/page.tsx` — those render as plain visible quotes, never as schema, so no change was needed there.

---

## 2. Business-specific outcome claims embedded in app/ pages

| File | Line | Claim |
|---|---|---|
| `app/ai-receptionist-adelaide/page.tsx` | 337 | "A chiropractic clinic in Unley reduced their missed calls by 90% in the first month." |
| `app/ai-automation-adelaide/page.tsx` | 458–459 | "[A] business in the eastern suburbs went from recovering 28% ... of missed calls to 67%, adding $1,560–$1,950/week" |
| `app/ai-automation-adelaide/page.tsx` | 474–475 | "Real result: A Stirling physiotherapy clinic reduced no-shows from 20% to 7%, recovering ~$1,200/week" |
| `app/ai-automation-adelaide/page.tsx` | 490–491 | "Real result: A Mount Barker cafe captured 40% more weekend bookings" |
| `app/ai-automation-vs-hiring-staff-adelaide/page.tsx` | 197 | "A tradie in Mitcham we work with runs a 3-person team ... saving about $22,000/year in wages." |
| `app/websites-for-clinics-adelaide/page.tsx` | 272 | Link/card text: "How Norwood Physio Cut No-Shows by 60%" |
| `app/websites-for-clinics-adelaide/page.tsx` | 34, 102 | "Most clinics cut no-shows by 30-65%", "Most clinics recover $2-8k/month in previously lost revenue" |
| `app/ai-receptionist-cost-adelaide/page.tsx` | 57, 255, 273 | "$5,250/week in lost revenue... the AI receptionist earns $1[,xxx]", "recover the 60% of quotes that go cold", "40% of their phone calls" tied to a "$2,000/day" tradie example |
| `app/best-ai-receptionist-australia/page.tsx` | 129 | "$1,500/week in opportunity. Recovering just 20% of those calls..." |
| `app/lost-leads-calculator/page.tsx` | 17, 91, 102 | "85% of callers who hit voicemail never ring back" used as a hard-coded assumption in the calculator itself, not just marketing copy |
| `app/[suburb]/page.tsx` | 368, 372, 376 | Shared "What we automate" cards (rendered on all 34 suburb pages): "35–50% conversion lift", "No-shows drop 65%", "Admin hours cut... 70%" |
| `app/ai-marketing-automation/page.tsx` | 37, 52 | "35-50% lift in quote-to-job conversion", "No-shows drop 30-65%" |
| `app/tradie-website-bundle/page.tsx` | 32 | "Lifts quote-to-job conversion by 35-50%." |
| `app/missed-call-answering-service-adelaide/page.tsx` | 134, 140 | "80% of callers who reach voicemail don't leave a message"; a worked example assuming "even 20%" of 40 weekly calls missed |
| `app/missed-call-text-back-adelaide/page.tsx` | 40 | "Recover 60%..." |
| `app/websites-for-plumbers-adelaide/page.tsx` | 279 | Link text: "How Adelaide Plumbers Book 30% More Jobs" (links to a blog post — see §3) |
| `app/answering-service-adelaide/page.tsx` | 101 | "most clients see their monthly bill drop by 50-70%" |
| `app/digital-marketing-adelaide/page.tsx` | 47 | "typically 15-30% in the first quarter" |
| `app/page.tsx` | ~81 (FAQPage schema, "What does AI automation actually do") | "Most clients recover $2,000-$5,000/week in week one." — worth prioritising since it's published inside structured FAQ schema, not just visible copy. |
| `lib/audit/recommendations.ts` | 16–19 | Four industry-specific claims baked into the automated audit tool's output copy: clinics "cut no-shows by 30-65% and add 2-3 new patients/week"; cafes "20-40% more direct bookings within 90 days"; retail "25-50% lift in walk-in traffic within 3 months"; salons "30-50% more online bookings within 60 days" — worth prioritising since this tool generates a report a real prospective client receives. |
| `lib/audit/recommendations.ts` | 17 | "vs paying 15-20% commissions to delivery platforms" (industry-general, lower priority) |
| `data/suburbs.json` | 873, 883, 1007 | "Accommodation providers pay 15-20% commission to Booking.com..." (appears in hotel/accommodation-related suburb pain points) |

---

## 3. Business-specific outcome claims in `data/posts.ts` (blog content)

`data/posts.ts` is ~6,100 lines across ~29 blog posts, and is the single largest source of unsourced claims — nearly every post contains a dedicated "case study" or "real example" section attributing a specific dollar or percentage outcome to an anonymised business. Rather than list every individual percentage (there are hundreds), the sections below are the identifiable case-study blocks, by post, that most need a verification pass. Each line number is the section heading; the surrounding paragraph(s) contain the actual figures.

| Post slug | Section | Line | Representative claim |
|---|---|---|---|
| `why-tradies-lose-money-missed-calls` | (intro stats, no heading) | 28–33 | "$62,400+ yearly", "25% missed... 50% of missed callers never answer", "$100,000 in potential work leaking out" |
| `why-tradies-lose-money-missed-calls` | (ROI section) | 58, 60 | "Missed-call recovery increased from ~28% to ~67%", "$1,560-$1,950" extra weekly revenue |
| `ai-automation-adelaide-electrical` | "Real Examples from Adelaide Electrical Businesses" | 327 | "Northern suburbs electrician Joe captured 30% more after-hours emergency jobs... increasing his annual revenue by approximately $18,000" |
| `adelaide-hills-ai-automation` | "Real Success Stories from Adelaide Hills Businesses" | 580 | (Hills-based businesses, specific %/$ outcomes) |
| `norwood-physio-cut-no-shows-automation` | Title itself + "Mini Case Study: Three-Physio Practice in Adelaide's East" | 995, 1090 | Post title is literally "Norwood Physio: 60% Fewer No-Shows" — the entire post is framed as one case study |
| `ai-tools-adelaide-hospitality-2026` | "Case Study: Small Cafe in Adelaide's West" | 1375 | Specific cafe outcome figures |
| `admin-tasks-killing-adelaide-tradies` | "Real Adelaide Tradie Results" | 2057, 2059 | Reuses the "two-person electrical business in the eastern suburbs" example: "recover 9-10 of those 14 missed calls... $2,340-3,900 in additional weekly revenue... ROI is 12-20x" |
| `glenelg-hospitality-ai-automation` | "Real Glenelg Example: The Cafe That Stopped Dreading Winter" | 2391 | Specific Glenelg cafe outcome figures |
| `adelaide-business-ai-readiness-assessment` | "Real Adelaide Businesses That Started Small and Won" | 2724 | Multiple small anonymised success stories |
| `ai-for-builders-adelaide` | "Real Costs and Real Returns" | 3498 | Builder-specific cost/return figures |
| `ai-for-retail-shops-adelaide` | "A Real Adelaide Example" | 4013 | Retail-specific outcome figures |
| `ai-for-hvac-adelaide` | "One commercial refrigeration business in the eastern suburbs..." | 4234 | Anecdotal example, no hard numbers attached but same "unnamed real client" pattern |
| `how-much-does-website-cost-adelaide` | "Real Example: A Plumber in Norwood" | 4436 | Plumber cost breakdown example (mostly arithmetic on confirmed prices — lower priority, but named as "real") |
| `how-much-does-website-cost-adelaide` | "Real Cost Comparisons: Adelaide Examples" | 4476 | Additional named examples |
| `how-much-does-website-cost-adelaide` | "Real Website Pricing Breakdown: What Each Tier Includes" | 4549 | Appears to be tier-feature breakdown rather than an outcome claim — spot-check only |
| `website-design-for-hairdressers-adelaide` | "Real Example" | 5325 | Hairdresser-specific outcome figures |
| `ai-automation-for-adelaide-retail-shops` | "Real Example" | 5625 | Retail-specific outcome figures |

**Recommendation:** given the volume, it's likely most efficient for a human to skim each "Real"/"Case Study" heading above directly in `data/posts.ts` (search for the exact heading text) and decide per-post whether to (a) leave as clearly-labelled illustrative examples, (b) add a disclaimer sentence, or (c) replace with a real, permissioned case study once one exists.

---

## 4. Unattributed industry-stat claims (lower priority)

These are presented as general facts rather than AI Adelaide client results, but still have no citation. A representative sample (not exhaustive — this pattern recurs across most service pages):

- `app/local-seo-adelaide/page.tsx:13,22` — "most Adelaide businesses have it 60% wrong", "46% of all Google searches have local intent"
- `app/seo/page.tsx:196` — "70% of people searching for a tradie click one of the first three results"
- `app/audit/page.tsx:50-51` — "70% of customers click the first 3 Google results", "Quote follow-ups improve conversion by 25%"
- `app/lost-leads-calculator/page.tsx:17,91,102` — "85% of callers who hit voicemail never ring back" (also listed in §2 since it's used as a hard input to a calculator, not just a claim)
- `app/hotel-seo-services/page.tsx` — "15-22% commissions" (still live). The "most hotels we work with shift 25-40% of bookings to direct" client-result claim was REMOVED 2026-07-11 (rewritten as a hypothetical "even shifting a quarter of your bookings…"); same pass aligned the page's $497/$897/$1,497 pricing to the PRICING constant ($399/$699).
- `app/ai-app-development-adelaide/page.tsx:25` — "For 70-80% of inbound calls, yes... For the 20-30% of complex calls..."
- `app/website-design-adelaide/page.tsx:98` — "faster than 90% of Adelaide small business websites"
- `app/ai-office-worker-adelaide/page.tsx:193` — "take the boring 70% of admin off their plate"
- `app/seo-for-tradies-adelaide/page.tsx:113,227,301` — "80% of the opportunity", "under 1% of clicks", "60-70% of tradie searches happen on mobile" (standard, widely-cited SEO stats; still uncited on-page)

These are lower priority than §1–3 because they don't claim a specific AI Adelaide client result, but a human should still confirm the figures are defensible if challenged, or add a source link.

---

## 5. Illustrative ROI calculations (lowest priority — likely fine, just needs labelling)

Several pages build a worked "if you recover X calls at $Y each..." calculation entirely from confirmed pricing plus a stated assumption. These read less like claimed results and more like a labelled example, but a human should confirm the framing is clear enough that a reader can't mistake the math for a guaranteed outcome:

- `app/[suburb]/page.tsx` (pricing section, rendered on all 34 suburb pages) — "ROI: Recovering 3 extra jobs at $350 each = $1,050/week against a $199/mo system."
- `data/posts.ts` — multiple "if you recover even three extra jobs per week at $350 each, that is $1,050 weekly" style illustrations (e.g. line 144).
- `app/ai-receptionist-cost-adelaide/page.tsx:57` — "$5,250/week in lost revenue... At a 20% close rate..." (borderline — recommend moving to §2 treatment since it reads as a specific scenario rather than a generic formula).

---

## Summary

- **~13 named testimonials/case studies** across `lib/constants.ts` and `components/home-v2/Proof.tsx`, reused sitewide via `/testimonials` and suburb-page testimonial matching.
- **~20 business-specific outcome claims** identified by file/line across `app/` pages and `lib/audit/recommendations.ts`.
- **~17 dedicated "case study" sections** identified across `data/posts.ts` blog posts (out of 29 posts total) — the largest concentration of unsourced claims on the site, recommended for a per-post skim rather than line-by-line audit given volume.
- **~9 representative unattributed industry stats** logged as a lower-priority sample (pattern recurs across most service pages, not exhaustively listed).
- **3 illustrative ROI formulas** flagged for a labelling check rather than removal.

Nothing has been changed. Awaiting human review before any of the above is edited or removed.
