# Monday search and commercial plan — 7 September 2026

Keep the 5 September priority pages stable. This week's worthwhile work is to preserve service intent when a visitor asks for a quote and clarify the actual audit/calculator enquiry paths. The new search figures are wholly pre-release; they do not justify another SEO rewrite, a ranking-success claim or a claim that the release failed.

## Live final Search Console baseline

Read-only Google Search Console API refresh on 7 September 2026 using existing credentials and the read-only scope. Property: `sc-domain:aiadelaide.com.au`; web search; `dataState=final`. The latest complete end date used is **4 September**, three days before the Adelaide reporting date. Date-dimension coverage was checked for all 56 days; those date rows were not used as headline totals. Each headline comes from a single no-dimension aggregate row. Australia uses country `aus`; this is not an Adelaide-only or qualified-buyer segment.

| Measure | 8 Aug–4 Sep, 28 days | 11 Jul–7 Aug, 28 days | Change |
|---|---:|---:|---:|
| Global clicks | 18 | 30 | -40.0% |
| Global impressions | 9,875 | 22,013 | -55.1% |
| Global CTR | 0.182% | 0.136% | +0.046 percentage points |
| Global average position | 28.38 | 31.26 | 2.88 positions lower numerically |
| Australia clicks | 13 | 27 | -51.9% |
| Australia impressions | 9,424 | 20,940 | -55.0% |
| Australia CTR | 0.138% | 0.129% | +0.009 percentage points |
| Australia average position | 28.28 | 31.31 | 3.03 positions lower numerically |

The site has very few organic clicks. Declining impressions with an improved aggregate average position can reflect a changing query mix; it does not establish the cause. Rankings, clicks and enquiries remain different measures. No customer records were read in this subtask and no qualified leads, quotes, wins or cash outcomes are inferred.

Evidence: [sanitized API responses](./gsc.json), including exact retrieval timestamp, windows, direct aggregates, page diagnostics and a curated commercial-query subset. Unrelated query strings and credentials are omitted.

## Comparison with the 6 September snapshot

The previous report's current window was 7 August–3 September (global 21 clicks / 10,963 impressions; Australia 15 / 10,471). Today's current window moves forward by one day. The snapshot differences are **not** separate equal-period comparisons and must not be described as one day's SEO loss. Both snapshots finish before the 5 September deployment.

Australia page diagnostics below compare those overlapping current windows. No rows are summed into site totals. All seven listed pages returned zero Australia clicks in both snapshots.

| Existing page | Impressions, 7 Sep snapshot | Impressions, 6 Sep snapshot | Position, 7 Sep snapshot | Position, 6 Sep snapshot |
|---|---:|---:|---:|---:|
| `/websites-for-electricians-adelaide` | 293 | 314 | 23.99 | 24.13 |
| `/seo-for-tradies-adelaide` | 108 | 107 | 14.65 | 13.97 |
| `/marion` | 69 | 76 | 9.88 | 10.17 |
| `/reynella` | 178 | 200 | 29.09 | 26.45 |
| `/morphett-vale` | 110 | 121 | 9.41 | 9.70 |
| `/local-seo-adelaide` | 570 | 636 | 27.92 | 28.44 |
| `/blog/cheap-website-design-adelaide` | 80 | 82 | 12.62 | 12.57 |

These small movements add no compelling reason to disturb the protected electrician/tradie/Marion/Reynella/Morphett Vale cohort. The search-visible cheap-website article also remains preserved. Continue weekly observation; the first complete 28-day post-release window is 6 September–3 October, available no earlier than 6 October after final-data coverage is confirmed. Compare then with 8 August–4 September, omitting the 5 September release day. That comparison still cannot isolate causality.

## Selected work — at most two tasks

### 1. Preserve the chosen service through closing quote links

**Observed source defect:** the Local SEO hero links to `/contact?service=seo#send-message`, but its closing “Book Free Local SEO Chat” link uses `/contact`. The website-design page uses `/contact?service=website#send-message` for its other enquiry CTAs, but its final CTA uses `/contact#send-message`. Visitors following the closing links lose the service preselection that the site already supports.

**Bounded change for the implementation run:** align only the closing links in `app/local-seo-adelaide/page.tsx` and `app/website-design-adelaide/page.tsx` with their existing service-specific enquiry links. Keep existing copy, pricing, titles, canonicals, URL structure and protected cohort content stable. Update affected sitemap dates only as required by the repository's release rules; do not perform generic SEO edits alongside this change.

**Purpose:** remove a needless repeat choice and preserve useful service context for qualification. This is a practical conversion improvement, not a measured conversion lift or ranking experiment.

**Acceptance:** click both closing CTAs in a real localhost browser at desktop and mobile sizes; verify the intended service is selected and the form target is reached. Verify relevant metadata invariants and repository-required checks, independent review and exact-source commit before any authorised release. If released, verify the same canonical live click-through. Do not submit synthetic leads merely to test a link-only change unless a separate delivery concern appears.

**Priority/effort:** first, a small focused change. It does not justify a broader service-page rewrite.

### 2. Map the actual audit/calculator handoff and prepare a scoped follow-up

**Observed source distinction:** `app/audit/results/page.tsx` saves the email locally to prefill the PDF; `/audit/quiz` → `/audit/results` → `/audit/report` is a self-serve flow. Its visible wording currently describes PDF prefill. A repository search found `/api/leads` called by `app/tools/ai-readiness-calculator/page.tsx`, not by those `/audit` pages. `app/api/leads/route.ts` attempts Telegram delivery plus best-effort local JSON persistence; it does not connect to the approved Contact/Tradie Sheet integration. Existing handoff language describing a single “audit route” is too broad for reliable lead accounting.

**Bounded work for the next run:** inspect the two customer journeys separately in a browser without entering real customer data. Record the exact point where a visitor explicitly requests contact, what is stored locally, what is sent to the business, and the existing privacy wording. Prepare one concrete handoff proposal using the existing Contact destination where practical, with a clear customer choice; specify separately whether calculator persistence should be added to the existing register. Correct operational documentation so the self-serve PDF is not counted as an enquiry and the calculator is not assumed covered by the Sheet.

**Purpose:** establish which apparent “audit activity” can actually become a customer conversation and avoid silently missing or overstating leads.

**Acceptance:** a short verified channel map and a reviewable proposal, with any changed data collection, consent or persistence scope clearly identified. Source presence alone is not proof of live Telegram delivery or persistence. Do not implement new data collection, alter privacy/consent or add a lead destination under this analysis task. The main operator can carry out work already within the standing authority and obtain a scoped decision only for any excluded change.

**Priority/effort:** second, one bounded investigation and proposal. Do not expand this into a broad CRM rebuild or another audit tool.

## Customer-proof and other boundaries

MDEX is a live opportunity with an already-offered free redesign and a completed discovery PDF, according to the current handoff. That is neither permission to start an unscoped build nor proof of a delivered client result. Wait for actual discovery/scope decisions before allocating implementation; seek specific publication permission before treating it as a named case study. Hosting, ongoing SEO and continuing services remain separately scoped. This plan makes no MDEX offer, commitment or public claim and reads no customer discovery answers.

The existing permission-backed CarHire.global and 365CarHire portfolio is already present on the website-design page through `lib/portfolio.ts`; adding another generic portfolio block is not selected. Quantified results, new customer testimonials and specific local proof still need evidence and permission. Leave the frozen answering/receptionist URL/title cluster alone. Outreach, website health, private-register triage and the scheduling discrepancy are handled by the main operator; no external write or message was performed here.

## Verification scope

Current `CLAUDE.md`, `docs/AGENT-HANDOFF.md` and `docs/GROWTH-OPERATING-BRIEF.md` were read for authority and current priorities. The source findings above were inspected on 7 September. Only GSC was refreshed live in this subtask; browser reproduction of the selected changes/investigation is acceptance work for the next implementation run. Only this report and its sanitized GSC evidence were written.
