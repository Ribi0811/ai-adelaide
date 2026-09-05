# AI Adelaide: business review and recommended direction

**Reviewed 5 September 2026, Adelaide time.** This is a decision document, not approval to change the live business. Website, prices, campaigns and customer communications remain unchanged.

## My recommendation

AI Adelaide has a credible delivery capability and an attractive website. It has not yet demonstrated a repeatable customer-acquisition engine in the evidence available for this review. The next investment should be in a narrower offer, believable proof, direct sales and measured delivery—not another wholesale redesign or another batch of SEO pages.

Lead with **done-for-you websites and local visibility for established Adelaide service businesses**. Use practical automation as a separately scoped improvement after identifying a real workflow problem. Keep the AI Adelaide name: changing the brand would consume effort without resolving the current bottleneck.

For the next 30 days, provisionally choose plumbers and electricians as the outbound test audience. Their existing landing pages have search visibility and their enquiry workflows are concrete. This is a testable focus, not evidence that they are already the most profitable segment. If actual customer records show a better segment, use that instead.

The biggest mistake would be treating another month of website production as a substitute for talking to prospective buyers.

## Evidence and limits

I inspected repository history through `07c5313`, project instructions, prior audits, pricing constants, contact/lead handlers, the live desktop homepage and website/pricing pages, the homepage/contact journey at a verified 390px viewport, the booking calendar, About/SEO/audit content, and the newer automation pages. I crawled all 110 live sitemap URLs plus three newer pages and queried Search Console directly.

Current customer count, cash collected, MRR, gross margin, churn, sales activity and lead-source profitability were not supplied or independently verified. I asked Ivan for these. This review therefore does **not** claim the business has no customers or no revenue. Existing customer comments are recorded as Ivan-confirmed; they are not being relabelled as fabricated.

The last indexed snapshots in URL Inspection are Google's records, not live page tests. No form was submitted, message sent, call made, meeting booked or payment initiated. Actual notification delivery, GA4 event receipt, CRM completeness and telephone-to-booking completion remain unverified. No current paid-account or GBP owner-dashboard inspection was performed. This is not a Core Web Vitals or full accessibility certification.

Evidence files: [Search Console extract](./reviews/2026-09-05/gsc.json), [five-query buying-intent sample](./reviews/2026-09-05/buyer-query-sample.json), [URL Inspection](./reviews/2026-09-05/url-inspection.json), [live crawl](./reviews/2026-09-05/live-crawl.json).

## 1. What we have actually built

There is useful work here worth keeping:

- A distinctive dawn-to-night homepage and a consistent visual system across the service pages, including interactive website previews and pricing.
- Clear website tiers, a monthly website option, SEO retainers and automation packages. `lib/constants.ts PRICING` is the authoritative price source.
- Website, industry and suburb landing pages; a substantial internal-link structure; canonical/redirect/schema work; contact prefilling; a self-assessment; booking and contact pathways.
- Historical measurement work on GA4 events, attribution and honest contact-delivery failure handling. The current handlers still include the failure guard, although this does not prove live delivery.
- An August content-quality correction: 19 published articles remain; nine previously retired URLs were preserved/reworked when search evidence justified it, and nine zero-signal posts were retired with redirects.
- Two live portfolio examples—CarHire.global and 365CarHire—now visibly present on the website-design page. They demonstrate website/content work; they are not, by themselves, proof of Adelaide tradie revenue growth.
- A live Cal.com profile and a 15-minute calendar displaying bookable times. The site links to the profile, adding an unnecessary choice between 15- and 30-minute events.

Our engineering and content effort is much better documented than customer acquisition and profitability. That imbalance matters more than the remaining visual polish.

The handoff is also out of date. It still calls August 24 work local-only, despite the portfolio appearing live and a newer August 30 commit. That commit changes five files, of which three are new pages. Its claim to fix receptionist de-indexing is not verified by the current Google result.

## 2. How the website looks and sells

**Visual judgment: keep the design language, simplify the sales journey.** The typography, warm gradients, teal controls and spacious layout are distinctive and commercially presentable. The dedicated website-design page explains its service more clearly than the homepage.

The homepage's headline—“Your Adelaide business. Open 24 hours.”—is memorable but broad. A visitor must read further to learn whether this is a web studio, SEO provider or answering service. The day narrative devotes prominent sections to quote chasing, missed calls and overnight automation. That emphasis conflicts with the stated website/SEO priority.

Recommended first-screen direction, as draft copy:

> **Websites and local SEO for Adelaide service businesses.**
>
> Get a professional website built for enquiries, with clear pricing and a direct Adelaide contact. Websites from $699. Local SEO from $399/month.
>
> **Get a fixed website quote** · **See our work**

Reserve the 48-hour claim for a ready-to-start Starter build; state its content, approval and scope conditions. Larger packages currently promise 5–7 and 10–14 days. Broad “done in two days” copy contradicts that distinction.

Recommended homepage order: clear offer → real work → relevant customer proof → package and ownership summary → process → optional automation demonstration → questions/contact. Retain the day narrative in a shorter supporting role. Put Selected Work and About within easy reach; the current footer's Company list omits About despite the page existing.

Specific live findings:

| Finding | Why it matters | Recommended correction |
|---|---|---|
| Decorative sun overlaps the mobile headline | Decoration competes with the most important text | Reposition or hide the orb at small widths; check animation positions |
| Chat launcher overlaps part of the mobile form label/field area | Adds friction where a visitor is trying to enquire | Minimise or suppress it while the contact form is in view |
| Website page has real travel-platform work but automation testimonials | The evidence does not answer the website buyer's question | Match feedback to the service; add a genuine local-service website example |
| SEO testimonial heading refers to rankings, but quotes discuss calls, admin and bookkeeping | Implies SEO evidence the quotes do not provide | Use relevant SEO feedback or an accurate generic heading |
| About page speaks as an unnamed “team” | A small local provider's human identity is a useful trust advantage | Add Ivan's full name, real photo, role, relevant experience and contact expectations |
| Generic Cal.com profile link | Adds a selection step and uses generic meeting names | Link directly to the intended 15-minute event; rename it around the customer's purpose |
| Many competing CTA names: audit, brief, draft, quote, first day | Unclear what happens next | One primary commercial action per page, with a plainly described deliverable |

The mobile hero and quote link were usable and showed no horizontal overflow at the tested width. These are targeted corrections, not grounds to rebuild the entire site.

## 3. Proposition and commercial scope

The strongest positioning is **a capable local operator who builds, maintains and improves the customer's enquiry journey at a clear price**. AI is part of the delivery method. “AI-powered,” low price and speed are easy for competitors to repeat.

Three practical offers are sufficient:

1. **Website launch or replacement.** Defined pages, copy, contact journey, search foundations, revisions, ownership and handover. Make Business the normal recommendation for an established operator when its scope fits; keep Starter as a genuinely limited entry offer.
2. **Local visibility improvement.** An agreed monthly priority list covering the customer's real search and conversion constraints. Sell accountable work and measured outcomes, not a guaranteed ranking or a quota of pages.
3. **One workflow improvement.** Quote follow-up, enquiry routing or another specific task, with an agreed baseline, integration prerequisites, failure handling and support limits. Avoid selling a vague complete AI transformation at a generic monthly price.

Do not sell a replacement website to a business whose actual problem is slow follow-up. Do not sell automation to a business with almost no enquiry volume. Do not recommend SEO until there is a viable offer, adequate service capacity and a way to respond to enquiries.

The current pricing page commits to four blog posts, two suburb pages and ten citations each month on Growth SEO. That can reward production even when another article is the wrong intervention. Propose a prioritised monthly scope with transparent work logs instead, while honouring existing customer agreements. Useful content and relevant local references should have a purpose, not merely fulfil a count. Google's [people-first content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) supports original, focused, demonstrably useful work rather than broad automated expansion.

## 4. Pricing and economics

Current authorised prices are:

| Offer | Current price |
|---|---:|
| Starter website | $699 one-off |
| Business website | $1,299 one-off |
| Growth website | $2,499 one-off |
| Monthly Business-level website | $199 setup + $99/month |
| Local / Growth SEO | $399 / $699 per month |
| Starter / Business automation | $199 / $399 per month |
| Public audit/self-assessment | Free |

Do not cut prices to solve a proof or distribution problem. A current competitor, [Page Web Studio](https://pagewebstudio.com.au/), advertises a five-page site from $2,200 and foregrounds the named operator and real projects. This is one self-published comparison, not a market median or independently verified performance benchmark. AI Adelaide already has a credible affordability position.

The monthly offer needs attention before it is aggressively sold:

- Revenue is $496 after three monthly payments and $1,387 after twelve, including setup, before any costs.
- “Unlimited small content edits” and month-to-month cancellation create real labour and early-churn exposure.
- Illustrative economics only: if production costs $600 in labour and expenses, setup contributes $199 and each month contributes $79 after $20 of recurring cost, build-cost recovery requires six monthly payments. Sales effort and overhead make recovery slower. Actual costs must replace these assumptions.
- State a service boundary, fair-use process, response window, third-party charges and exclusions. Define the actual CMS/editing handover promised in Business.

**Ownership inconsistency:** the pricing page's “What's Always Included” says the customer owns the site. The monthly-plan terms say AI Adelaide owns it until buy-out and takes it offline after cancellation without buy-out. The terms contain a buy-out formula, but the pricing card says “just ask.” Put the ownership, cancellation effect and buy-out basis next to the monthly offer. This is a clarity recommendation, not a legal assessment.

Likewise, make one-off hosting/domain costs and GST treatment explicit and consistent. Do not infer GST registration or invent a new tax treatment.

Keep the public free audit. Define it as a bounded qualification/review service. A free one-week workflow strategy with an action plan, as a newer consulting page currently offers, is materially more work. For complex consulting, propose a separately agreed paid diagnostic after the free fit call; this would be a new scoped engagement, not reinstating the abandoned paid public audit.

A useful planning illustration: four Business builds per month produce $5,196 and eight Local SEO retainers produce $3,192, totalling $8,388 gross monthly sales. This is arithmetic, not a forecast or profit claim. Establish hours per build and per retainer before adopting it as a target.

## 5. Mistakes and recurring failure patterns

**We have spent too much effort expanding and polishing before closing the measurement loop.** The git history contains numerous design, page and SEO changes; the evidence here does not establish an equivalent cadence of qualified conversations, proposals, sales and retained profit. More site work is easier to generate than proof of demand.

**Claims cleanup has not become a reliable publishing standard.** New live content now includes:

- `/ai-automation-setup-tradies`: 80%+ missed-call capture, 30–40% more accepted quotes, 25–40% faster payment, 3–5x reviews and 50–70% fewer no-shows.
- The same page presents a “Real Example” of a Morphett Vale electrician, including a $12,000 job and $3,500+ monthly recovery at $350/month.
- `/ai-consulting-small-business-adelaide`: “We've done this 50+ times.”

No substantiation for these new claims was found in the reviewed project evidence. They need specific supporting records and permission, or replacement with qualitative explanations. This is separate from the older Ivan-confirmed customer comments, which should be preserved.

**Demonstrations blur into proof.** The homepage shows a first-position search result and the preview contains 127 reviews and a named sample review. Label these clearly as illustrative interface content. “One booked job pays for the whole system” also confuses a job's revenue with contribution after delivery costs; replace it with an assumption-based calculation or remove it.

**SEO changes have outpaced governance.** Three new pages are absent from the sitemap, edited routes retain old modification dates, and the current metadata checker fails six length checks across the five recently changed pages. Length checks are local editorial rules, not evidence of a Google penalty. The answering freeze was not reflected in the newer changes; establish the actual approval context before attributing fault, then maintain one current decision log.

**Past over-pruning needed correction.** The August retirement was narrowed after URL-level evidence showed some pages had search value. Retain that lesson: no blanket deletions or redirects based on aesthetic judgments, small samples or a desire to reduce page count.

The corrective operating rule is simple: every commercial change needs a purpose, evidence for claims, an owner, proportional verification and an updated handoff. Agents should not expand the offer just because a keyword or impressive demo is available.

## 6. SEO: current performance and realistic priorities

Direct Search Console, Web search, `dataState=final`, three-day lag, no-dimension property totals:

| Metric | 9 Jul–5 Aug | 6 Aug–2 Sep | Change |
|---|---:|---:|---:|
| Clicks | 33 | 21 | -36.4% |
| Impressions | 20,979 | 12,013 | -42.7% |
| CTR | 0.157% | 0.175% | +0.018 percentage points |
| Average position | 32.0 | 28.6 | Numerically better; changing query mix |

The latest seven days had 2 clicks/663 impressions versus 1/607 previously. These tiny weekly counts cannot establish recovery. Unlike the earlier August report, current aggregate CTR is slightly higher; the large visibility decline still matters. Neither an improving aggregate position nor a falling impression count diagnoses a penalty.

A fixed sample of five buying-intent queries—local seo adelaide, adelaide local seo, websites for electricians, website for electricians, cheap website design adelaide—produced **0 clicks/758 impressions**, versus **1/1,299** previously. This explicitly excludes brand and informational terms but is only a small sample of commercial demand. Query filtering omits anonymised searches; its totals should not be substituted for site totals. The broader keyword filter in the raw evidence is exploratory and includes mixed intent.

Selected page diagnostics, not additive property totals:

| Page | Prior clicks / impressions | Current clicks / impressions | Current average position |
|---|---:|---:|---:|
| Homepage | 15 / 3,918 | 7 / 2,628 | 21.3 |
| Website design | 1 / 422 | 0 / 202 | 47.9 |
| SEO services | 0 / 1,629 | 0 / 794 | 60.9 |
| Local SEO | 0 / 1,605 | 0 / 827 | 31.2 |
| Websites for plumbers | 0 / 616 | 0 / 590 | 17.2 |
| Websites for electricians | 3 / 435 | 0 / 402 | 29.9 |
| Answering service | 0 / 2,537 | 3 / 1,807 | 40.8 |

The largest visible query by impressions is AI application development Adelaide (1,076 impressions, zero clicks). It is not evidence of demand for the primary small-business website offer. The high-ranking competitor-specific query about “thealites” is also not a priority keyword for AI Adelaide.

Technical verification:

- All 110 sitemap URLs and three newer pages returned 200 with one H1 and one canonical element. This alone does not prove all content, schema or conversion workflows are correct.
- Homepage, website-design, Local SEO and SEO URLs show Submitted and indexed, with aligned canonicals.
- `/seo` has a reported last crawl of **4 July**, so current copy may not yet be represented in Google's indexed snapshot. Request inspection/indexing of approved updated priority content as a follow-up; no guarantee of recrawl or ranking improvement.
- `/ai-receptionist-adelaide` is **Discovered – currently not indexed**. The August 30 “fix” has not established indexing success.
- `/ai-automation-setup-tradies` is **unknown to Google**. It and the two other new pages are missing from the live sitemap. Correct their quality and intended role before promoting discovery.
- Internal-link checker passes. Metadata checker has the six editorial failures described above. No build was needed for this documentation-only review.

Priority order: fix current claim/offer inconsistencies; strengthen the existing website, Local SEO, electrician/plumber and cost-guide paths; add relevant real examples; improve the GBP and legitimate Adelaide references; repair sitemap/date/checker regressions. Preserve the answering-cluster freeze through roughly 15 September rather than reacting with another rewrite.

Verify GBP categories, service coverage, photos, website link, genuine reviews and actual enquiries in its owner dashboard. Do not assume the profile is absent—it is linked from the live footer. Google describes local ranking in terms of relevance, distance and prominence, including reviews and links: [Google Business Profile guidance](https://support.google.com/business/answer/7091?hl=en-en).

Do not forecast leads from ranking position alone. Keep weekly monitoring for breakages; evaluate commercial progress over longer equal windows. SEO should build future demand while direct relationships provide nearer-term opportunities.

## 7. How to get customers

**First priority: existing relationships and genuine past work.** Reconcile the customer list behind the confirmed feedback and portfolio. Identify who is active, who might need a relevant upgrade, who can introduce another owner, and who is willing to approve a case study. Historical references to a large BDM lead pool do not prove those contacts were qualified or that the market is saturated.

**Second: a narrow founder-led sales test.** Start with 20 carefully selected Adelaide plumbers/electricians. Prefer established firms with real reviews and operating capacity, plus one observable weakness such as poor mobile enquiry flow, unclear service pages or weak follow-up. Exclude firms with no capacity or no meaningful problem. An existing adequate website is not automatically a replacement opportunity.

For each, document one specific observation, a short proposed fix and the likely buying reason. Use a relationship introduction, requested review or appropriate business contact channel; avoid generic bulk outreach. Do not build 20 free websites. A short annotated screen recording or screenshot is enough to start a conversation.

Example opening for an appropriate, authorised conversation:

> I had a look at your website on my phone and noticed [verified issue]. I can show you a simpler way for customers to [call/request a quote]. If improving that is on your list, I can give you a fixed scope and price.

Discovery should establish: source and volume of enquiries; their response process; what a useful job is worth after costs; current site ownership/access; their capacity and urgency; who decides. Send a short proposal defining the problem, work, exclusions, price, approvals, timeline and acceptance checks. Agree the next follow-up date on the call. Record losses by reason instead of repeatedly discounting.

**Third: referral partners.** Approach five relevant bookkeepers, business IT providers, photographers or complementary agencies through appropriate introductions. Explain the narrow problem AI Adelaide solves and what a suitable referral looks like. Avoid expensive networking memberships before evidence of fit.

**Fourth: search and content.** Publish permission-backed work that can support sales, GBP and relevant existing landing pages. One useful before/after walkthrough can serve several channels. Do not produce generic AI news simply to keep the blog busy.

**Paid acquisition comes later.** First verify lead storage, attribution and actual sales handling. Then test one audience, one offer and one landing page with a pre-agreed budget and stop rule. Judge cost per qualified conversation and acquired customer against contribution margin, not CTR. Historical ad experiments are not current account evidence and do not prove all paid channels fail.

## 8. Delivery, retention and measurement

A contact notification is not a sales pipeline. The current main form routes try local JSON writes and accept successful notifications as sufficient; durable application lead storage remains an open issue in the handoff. Inspect existing CRM capabilities before buying anything. Use a simple agreed system, not another custom dashboard.

Minimum lead record: enquiry date, source, landing page where permitted, requested service, problem, qualification, owner, next action/date, quoted value, stage, won/lost reason, cash received and recurring fee. Link every notification to one durable lead ID. Preserve consent choices; missing analytics consent must not prevent operational handling of an enquiry.

Verify each actual entry path end-to-end in a separately authorised test: website form, self-assessment, chat, booked call and telephone. Confirmation should mean the record was stored, the intended person was notified and the next action is owned. No test message was sent during this review.

Track weekly: qualified enquiries, held calls, proposals, deposits, lead response time, follow-ups due and loss reasons. Track monthly: collected revenue, active recurring revenue, churn, acquisition cost, direct tool costs, hours per customer and contribution after delivery labour.

A build handover should verify the mobile call/form path, customer receipt, access/ownership, editing method, scope acceptance and support responsibility. For automation, verify the actual integration, exclusions, escalation and failure handling. Prefer deterministic rules when AI adds no value. Track delivery exceptions and vendor costs rather than promising every integration works automatically.

Retention should come from visible useful work: a brief monthly note showing the baseline, what changed, enquiry quality, work completed and next decision. Do not substitute screenshots of impressions for business value. Start with existing client improvement needs before cross-selling the full service stack.

## 9. The next 30 days

| Timing | Work | Completion evidence |
|---|---|---|
| Days 1–3 | Reconcile customers, revenue and lead sources; choose one existing CRM/record; identify current claim and ownership corrections | Baseline with unknowns explicit; every active enquiry has a next action; exact copy changes ready for review |
| Days 4–7 | Implement approved targeted site corrections; make founder and relevant proof easier to find; verify lead journey | Desktop/mobile review, actual stored test lead and delivery evidence, clear monthly terms |
| Week 2 | Review 20 suitable prospects; seek 10 warm introductions or appropriate conversations; approach five potential partners | Real replies, held calls and loss reasons—not a sent-message count alone |
| Week 3 | Scope and close suitable work; deliver the first accepted project; seek case-study permission | Accepted scope, paid deposit, verified handover and permission record |
| Week 4 | Review sales and delivery economics; improve the winning path | Channel/segment decision based on qualification, conversion, margin and feedback |

Provisional 30-day learning targets: five qualified conversations, three proposals and one or two paid starts, adjusted to existing pipeline and available capacity. These are targets, not predicted conversions. If 20 well-selected contacts produce no substantive conversations, revisit the audience, relevance and approach. If calls happen without proposals, improve qualification; if proposals happen without wins, investigate trust, urgency, scope and price separately.

Allocate approximately half the available business-development time to relationships, prospect conversations and proposals; a quarter to proof and delivery improvement; the remainder to measurement and tightly scoped SEO/site corrections. Actual paid delivery comes first. Put a firm time box around site polishing.

**Pause:** broad new service/suburb expansion, speculative new products, wholesale redesign, automatic content quotas, generic bulk outreach, unmeasured paid traffic and more receptionist URL/title churn.

The business deserves a focused selling-and-delivery cycle using the assets already built. The next convincing proof of progress is a qualified customer paying for a clearly scoped result, followed by evidence that delivery worked and was profitable.
