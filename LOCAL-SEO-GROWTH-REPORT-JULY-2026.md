# AI Adelaide Local SEO & Business Growth Report

> **STATUS: RECONCILED (2026-07-13) — reference analysis, NOT a roadmap.**
> Actionable items live in `docs/AGENT-HANDOFF.md` (Q1, Q3, Q4, Q5, Q7, Q8);
> execute from there, not from this file. Known-stale items in this report:
> §4.4 lists `/seo-services-adelaide` as a live competing page (it has been a
> 301 → `/seo` since early July; its GSC rows are pre-redirect echoes);
> §4.5's answering-service re-consolidation is DECLINED (cluster settled +
> harvest-tier per Ivan 2026-07-11 — frozen until ~Sep 2026); §5.5 GBP
> existence is confirmed (footer share.google + schema sameAs) — the open
> item is review volume. Everything else stands and is queued.

**Website:** [aiadelaide.com.au](https://aiadelaide.com.au)  
**Repository:** `Ribi0811/ai-adelaide`  
**Audit date:** 13 July 2026  
**Primary market:** Adelaide and metropolitan South Australia  
**Primary objective:** Generate more qualified local enquiries and win more Adelaide business through organic search

---

## Executive summary

AI Adelaide has a technically sound website and is beginning to earn meaningful search visibility. Google Search Console shows that the site is being tested for a much broader set of searches: impressions increased by 82% and clicks increased by 53% in the latest complete 28-day period.

However, that growth is not yet translating efficiently into traffic or enquiries. Average ranking position declined from 40.9 to 47.4 and click-through rate fell from 0.31% to 0.26%. In plain language, Google is showing the website more often, but most of those appearances are too low in the results to attract clicks.

The main constraint is not a lack of pages. The site already has approximately 120 indexable URLs across services, industries, suburbs and articles. The bigger problems are:

1. Multiple pages compete for the same commercial searches.
2. The domain does not yet have enough local authority to support such a broad page footprint.
3. The site needs stronger, externally verifiable local proof.
4. Several pages that already rank well are not being used aggressively enough to generate leads.
5. Search and lead measurement are not yet joined into one commercial reporting system.

The recommended strategy is therefore **consolidation, proof and authority before further expansion**.

The highest-return work is likely to be:

- Consolidating competing service pages into one clear page per search intent.
- Turning the high-ranking tradie SEO article into a strong lead-generation pathway.
- Building real, verifiable case studies and Google reviews.
- Strengthening the Google Business Profile and consistent local citations.
- Improving the six suburb pages where Google has already shown positive ranking signals.
- Earning genuine Adelaide links, mentions and partnerships.
- Tracking qualified leads and won revenue back to their landing pages and search sources.

The website should not respond to the current data by publishing dozens more generic service, industry or suburb pages. It should concentrate authority into fewer, stronger commercial assets.

---

## 1. Scope of this review

This review examined:

- The local Git repository and its alignment with GitHub.
- The deployed website at `aiadelaide.com.au`.
- Sitemap and robots directives.
- Redirect and canonical-host behaviour.
- Internal-link integrity.
- Metadata coverage.
- Structured-data usage.
- Existing service, suburb, industry and blog architecture.
- Google Search Console performance through the OpenClaw GSC integration.
- Public search visibility for AI Adelaide and relevant Adelaide competitors.
- Local trust signals, testimonials, business information and conversion pathways.

This was an audit and strategy exercise. No website code, redirects, content or production configuration was changed as part of this report.

---

## 2. Repository and deployment findings

### 2.1 GitHub alignment

The local repository was fetched and compared with `origin/main`.

- Local branch: `main`
- Remote branch: `origin/main`
- Ahead: `0`
- Behind: `0`
- Audited commit: `47a69fd`
- Commit description: `fix(ui): remove testimonials disclaimer from /website-pricing and all pages using Testimonials component`

The repository is therefore aligned with GitHub at the time of the audit.

The only local working-tree difference was the supplied `AGENTS.md` instruction update. It was not part of the application code and was not modified during the audit.

### 2.2 Repository hygiene

There are 144 Git-tracked files associated with an old `node_modules 2/` path. The directory is empty locally, but those files remain part of the repository history/tracking state.

This is not an SEO issue and does not affect the live website. It is a repository-hygiene issue that should be cleaned up separately so that the project remains easier to maintain.

### 2.3 Route and sitemap coverage

The project contains a broad set of commercial and informational pages. Automated checks covered:

- 63 static page files.
- 30–31 blog posts, depending on the audit script's generated route count.
- 34 suburb pages.
- Approximately 120 URLs in the live sitemap.

Every URL tested from the live sitemap returned successfully. No broken sitemap URL was found during the audit.

### 2.4 Internal links

The repository's link checker found:

- 78 unique internal links.
- 123 recognised real routes, including generated suburb and blog routes.
- 68 recognised redirect sources.
- No broken internal links.
- No internal links unnecessarily passing through redirect chains.

This is a strong technical result.

### 2.5 Metadata

Metadata checking covered 120 routes. It found no blocking errors.

Two minor warnings were reported:

- `/audit/quiz` description is 136 characters.
- `/audit/results` description is 137 characters.

The audit script's preferred range is 140–160 characters. These are low-priority refinements and should not distract from the larger authority, content-overlap and proof issues.

### 2.6 Robots and sitemap

The live robots file returns successfully and provides sensible directives:

- Crawlers may access the public website.
- `/api/` is disallowed.
- `/_next/` is disallowed.
- The sitemap is declared correctly.
- The canonical host is declared as `https://aiadelaide.com.au`.

The sitemap is accessible at:

`https://aiadelaide.com.au/sitemap.xml`

### 2.7 Canonical host and redirects

The `www` version redirects permanently to the non-`www` domain:

`https://www.aiadelaide.com.au/` → `https://aiadelaide.com.au/`

This is correct and avoids host duplication.

The previously reported GSC problem at `/services/ai-automation/` is no longer a live 404. It now redirects permanently to:

`/ai-automation-adelaide`

OpenClaw's older warning about this URL should therefore be marked resolved so it does not continue to appear as outstanding work.

### 2.8 Structured data

The website uses extensive structured data, including:

- LocalBusiness
- Organization
- Person
- Service
- Offer
- FAQPage
- BreadcrumbList
- Article
- WebPage
- PostalAddress
- GeoCoordinates
- OpeningHoursSpecification

The homepage renders structured data successfully. There is no current evidence that missing schema is the site's primary constraint.

The larger concern is consistency and truthfulness. Structured data should describe real, visible, verifiable business facts. Adding more schema will not substitute for real reviews, recognised clients, local links or authoritative business profiles.

---

## 3. Google Search Console findings

### 3.1 Reporting period

The analysis used final Google Search Console data with a three-day reporting allowance.

**Latest period:** 13 June 2026 to 10 July 2026  
**Comparison period:** 16 May 2026 to 12 June 2026

### 3.2 Overall performance

| Metric | Previous 28 days | Latest 28 days | Change |
|---|---:|---:|---:|
| Clicks | 17 | 26 | +52.9% |
| Impressions | 5,435 | 9,881 | +81.8% |
| CTR | 0.31% | 0.26% | Down 0.05 percentage points |
| Average position | 40.9 | 47.4 | Worse by 6.5 positions |

### 3.3 Interpretation

The site is not losing all traction. It is expanding.

Google is testing AI Adelaide for substantially more searches, and clicks are growing. The problem is that most of the new impressions are at low positions. This creates the combination of:

- Fast impression growth.
- Moderate click growth.
- Falling overall CTR.
- Worsening average position.

This commonly happens when a relatively young or low-authority domain publishes many pages across several commercial themes. Google discovers and tests them, but the domain does not yet have enough authority, links, proof or focused relevance to move most pages onto page one.

The proper response is not to optimise for average position as a vanity metric. The response is to identify which commercial themes and pages are already closest to producing business, then concentrate authority there.

### 3.4 Geographic relevance

Australia generated:

- 22 of the latest 26 clicks.
- 9,190 of 9,881 impressions.

This is positive. The site's visibility is overwhelmingly concentrated in its intended market rather than being inflated by irrelevant international exposure.

### 3.5 Device performance

Latest 28-day performance:

| Device | Clicks | Impressions | CTR | Average position |
|---|---:|---:|---:|---:|
| Desktop | 16 | 8,107 | 0.20% | 48.6 |
| Mobile | 10 | 1,738 | 0.58% | 41.7 |
| Tablet | 0 | 36 | 0% | 39.3 |

Desktop accounts for most impressions, but mobile produces a materially better CTR. This reinforces the importance of prominent phone, form and booking actions on mobile. It also suggests that the commercial value of mobile visitors may be higher than raw traffic volume indicates.

---

## 4. Keyword and landing-page findings

### 4.1 Brand visibility

For Australian searches in the latest period:

| Query | Ranking page | Clicks | Impressions | CTR | Position |
|---|---|---:|---:|---:|---:|
| ai adelaide | Homepage | 6 | 36 | 16.67% | 1.3 |
| adelaide ai | Homepage | 0 | 5 | 0% | 9.6 |

The business owns its primary brand query well. This is expected but important: people who already know the name can find the business.

The challenge is non-brand discovery—winning people searching for a service before they know AI Adelaide.

### 4.2 AI automation and consulting

Important Australian query/page results include:

| Query | Ranking page | Clicks | Impressions | CTR | Position |
|---|---|---:|---:|---:|---:|
| ai automation adelaide | Homepage | 1 | 16 | 6.25% | 2.9 |
| ai services adelaide | Homepage | 1 | 28 | 3.57% | 10.2 |
| ai automation adelaide | Port Adelaide page | 0 | 13 | 0% | 10.3 |
| ai consultant adelaide | AI consulting page | 0 | 5 | 0% | 18.0 |
| ai consulting adelaide | AI consulting page | 0 | 20 | 0% | 27.5 |

The homepage currently carries much of the domain's strongest AI automation relevance. The dedicated `/ai-automation-adelaide` page has considerably more total impressions across many related searches, but it is not consistently Google's preferred result for the core local phrase.

This means the homepage and service page do not yet have clearly separated search roles.

Recommended ownership:

- Homepage: brand, broad “AI services Adelaide” and overall value proposition.
- `/ai-automation-adelaide`: primary owner of “AI automation Adelaide” and close commercial variants.
- `/ai-consulting-adelaide`: primary owner of “AI consultant Adelaide” and advisory/audit intent.
- Suburb pages: tightly localised variants only, without duplicating the full service-page proposition.

### 4.3 Tradie SEO opportunity

| Query | Ranking page | Clicks | Impressions | CTR | Position |
|---|---|---:|---:|---:|---:|
| seo for tradies adelaide | `/blog/adelaide-seo-for-tradies` | 2 | 49 | 4.08% | 3.2 |
| seo for tradies | `/blog/adelaide-seo-for-tradies` | 0 | 86 | 0% | 24.5 |
| seo for tradies | `/seo-for-tradies-adelaide` | 0 | 40 | 0% | 36.5 |

This is one of the clearest opportunities in the entire audit.

The informational blog post is substantially outperforming the intended commercial page. Google sees the article as the stronger result. It should not be discarded or blindly redirected because it already ranks near the top for a valuable Adelaide query.

Instead, it should become a deliberate entry point into the commercial funnel.

Recommended improvements to the article:

- Add a strong, visible CTA near the top.
- Link prominently to the tradie SEO service.
- Include a short Adelaide tradie case study.
- Show what the customer receives each month.
- Include a genuine example of ranking or lead improvement.
- Offer a “free tradie local visibility review” or similarly specific conversion action.
- Add an inline lead form before the conclusion.
- Strengthen links to relevant trade and suburb pages.

The commercial tradie SEO page should then be differentiated around buying intent, delivery, pricing, proof and onboarding rather than repeating the article.

### 4.4 Local SEO page overlap

Google is distributing local SEO impressions across at least three pages:

- `/seo`
- `/local-seo-adelaide`
- `/seo-services-adelaide`

For “local seo adelaide” in Australia:

| Page | Impressions | Clicks | Position |
|---|---:|---:|---:|
| `/seo` | 454 | 0 | 64.3 |
| `/local-seo-adelaide` | 38 | 0 | 42.8 |
| `/seo-services-adelaide` | 34 | 0 | 82.4 |

For “adelaide local seo”:

| Page | Impressions | Clicks | Position |
|---|---:|---:|---:|
| `/seo` | 201 | 0 | 65.3 |
| `/local-seo-adelaide` | 27 | 0 | 36.9 |
| `/seo-services-adelaide` | 21 | 0 | 81.7 |

This is classic overlap. Three pages are asking Google to decide which one represents effectively the same service.

The recommended approach is to choose one primary Local SEO Adelaide page based on:

- Existing backlinks, if any.
- Search impressions and query relevance.
- Content quality.
- Current internal-link prominence.
- Conversion design.
- Ease of retaining established URLs through redirects.

The likely direction is to make `/seo` the broad SEO hub and either:

1. Make `/local-seo-adelaide` the focused local-service page with a distinctly different role; or
2. Merge the best local material into `/seo` and permanently redirect the overlapping pages.

This decision should be made from a full query-to-page and backlink map before redirects are implemented.

### 4.5 Answering-service overlap

The site has several closely related commercial pages, including:

- `/answering-service-adelaide`
- `/after-hours-answering-adelaide`
- `/24-7-answering-service-adelaide`
- `/virtual-receptionist-adelaide`
- `/missed-call-answering-service-adelaide`
- `/ai-receptionist-adelaide`
- `/ai-receptionist-vs-virtual-receptionist`
- `/ai-receptionist-cost-adelaide`

Some separation is legitimate: cost, comparison and missed-call intent can justify distinct pages. However, the core answering-service pages overlap heavily.

Google currently spreads “answering service Adelaide” impressions across the homepage, the virtual receptionist page, the answering service page and even the blog index.

Recommended ownership:

- Primary commercial page: one page for “answering service Adelaide.”
- AI product page: one page for “AI receptionist Adelaide.”
- Comparison page: “AI receptionist vs virtual receptionist.”
- Pricing/supporting page: “AI receptionist cost.”
- After-hours and missed-call pages only if their offers and search intents are materially distinct.

Pages that cannot be made genuinely distinct should be merged and redirected.

### 4.6 Website-design visibility

The main website-design page receives impressions for commercial phrases but ranks too low:

| Query | Clicks | Impressions | Position |
|---|---:|---:|---:|
| website design adelaide small business | 0 | 143 | 61.7 |
| small business website design adelaide | 0 | 25 | 67.2 |
| adelaide web design tradies | 0 | 10 | 35.6 |
| web design for startups adelaide | 0 | 13 | 88.9 |

This is a competitive market. The page is unlikely to move from positions 60–80 through wording changes alone. It needs substantially stronger authority and proof:

- Real portfolio projects.
- Named client results.
- Google reviews.
- Adelaide-specific backlinks and citations.
- Founder and team credibility.
- Links from relevant suburb and industry pages.
- A clearer niche position, such as high-converting websites for Adelaide service businesses or tradies.

Competing broadly against long-established Adelaide web agencies without comparable proof will be slow. A focused niche is more achievable.

### 4.7 Suburb-page opportunities

Several suburb pages are already within or near page-one range for website-design queries:

| Query | Page | Impressions | Clicks | Position |
|---|---|---:|---:|---:|
| website designer marion | `/marion` | 9 | 0 | 5.7 |
| reynella website designer | `/reynella` | 40 | 0 | 8.2 |
| web design reynella | `/reynella` | 47 | 0 | 11.4 |
| morphett vale website designer | `/morphett-vale` | 14 | 0 | 12.9 |
| moana website designer | `/moana` | 60 | 0 | 14.3 |
| website designer moana | `/moana` | 55 | 0 | 15.3 |
| web design seaford | `/seaford` | 9 | 0 | 16.0 |
| seaford website designer | `/seaford` | 43 | 0 | 17.6 |
| website designer seaford | `/seaford` | 47 | 0 | 17.9 |

These pages deserve focused improvement before additional suburb pages are created.

Recommended priority suburb group:

1. Marion
2. Reynella
3. Moana
4. Seaford
5. Morphett Vale
6. Henley Beach

Each priority page should include genuinely local and differentiating material:

- A real project or customer from the area, when available.
- Original photographs rather than generic imagery.
- Relevant nearby suburbs and service coverage.
- Local business context and industries.
- A suburb-specific testimonial.
- A clear local contact and response promise.
- A useful example audit of search results in that suburb.
- Internal links to the appropriate commercial service page.

The goal is not to add more words. The goal is to make each page demonstrably useful and locally credible.

---

## 5. Local authority and trust findings

### 5.1 Current local signals

The website already communicates several important local signals:

- Adelaide is prominent in titles, headings and copy.
- The business address is listed as `5 Peel St, Adelaide SA 5000`.
- The phone number is displayed as `(08) 7100 9788`.
- The website describes the business as Adelaide-based and Adelaide-focused.
- Service-area and suburb pages reinforce local relevance.
- LocalBusiness structured data is present.

These are useful foundations.

### 5.2 Weakness: verifiability

The larger weakness is that much of the site's proof is internally asserted rather than externally verified.

Current testimonials use initials and generic roles such as:

- “Dave S. — Trades business owner”
- “Sarah K. — Clinic owner”
- “Mark T. — Builder”

Current case studies use generic business names such as:

- “Suburban Plumbing”
- “Coastal Cafe”
- “Bright Smile Dental”

This protects privacy, but it also prevents prospective customers and search engines from verifying the claims. Strong outcomes such as large booking increases, page-one rankings or substantial revenue gains are much more persuasive when linked to a real business and documented evidence.

### 5.3 Recommended proof standard

Future case studies should include as many of the following as permission allows:

- Real business name.
- Owner's full name.
- Website link.
- Adelaide suburb.
- Service delivered.
- Starting problem.
- Baseline measurement.
- Timeframe.
- Result.
- Screenshot or report excerpt.
- Customer photograph or project imagery.
- Link to the customer's Google Business Profile.
- Direct Google review.

Where a client cannot be identified, claims should be carefully qualified and supported with anonymised evidence rather than presented as uncheckable marketing statements.

### 5.4 Founder and team credibility

The About page identifies the founder only as “Ivan” and describes prior experience in general terms.

Recommended additions:

- Full founder name.
- Professional photograph.
- Clear personal story and Adelaide connection.
- Relevant employment or project history.
- Specific technical and commercial expertise.
- LinkedIn profile.
- Talks, certifications, partnerships or published work.
- A direct founder statement or short video.

For a young local service business, the founder is often the strongest trust asset. Hiding the founder behind a first name makes the business appear less established than it may actually be.

### 5.5 Google Business Profile

A strong, clearly discoverable public review footprint was not evident in the public search performed during this audit. That does not prove a profile does not exist, but it means Google Business Profile should be checked directly.

If a verified profile exists, audit:

- Exact business name.
- Primary and secondary categories.
- Address or service-area configuration.
- Phone and website consistency.
- Business description.
- Services and products.
- Appointment or quote links.
- Photographs.
- Posts.
- Questions and answers.
- Review volume, recency and response rate.
- UTM tracking on website links.

If a verified profile does not exist, establishing one is urgent.

### 5.6 Local citations

Business name, address and phone should be consistent across credible sources such as:

- Google Business Profile.
- Apple Business Connect.
- Bing Places.
- Yellow Pages Australia.
- True Local.
- Local chamber or business association directories.
- Relevant Adelaide technology and professional directories.
- Industry-specific directories.
- Social and professional profiles.

Directory work should prioritise quality and consistency. Hundreds of low-quality automated citations are unnecessary.

### 5.7 Local backlinks and mentions

The domain needs local authority more than it needs more schema or generic content.

High-value opportunities include:

- Asking completed Adelaide clients to link to AI Adelaide as their web, SEO or automation partner.
- Partner and supplier pages.
- Adelaide business associations.
- Trade associations connected to target clients.
- Local podcasts and newsletters.
- South Australian business publications.
- Guest workshops for local business groups.
- Sponsorships with genuine community relevance.
- Collaborations with accountants, IT providers, photographers and branding studios.
- Original Adelaide small-business research that local publications can cite.

A small number of relevant local links is more valuable than a large number of unrelated directory or guest-post links.

---

## 6. Competitive observations

Established Adelaide competitors commonly lead with proof rather than service breadth.

Visible competitive patterns include:

- Large numbers of Google reviews.
- Named founders and personal photographs.
- Years in business.
- Number of completed websites or clients.
- Local project portfolios.
- Industry filters and examples.
- Clear phone and quote actions.
- Repeated references to Adelaide service areas.
- Awards and third-party recognition.

AI Adelaide's differentiation—fast, affordable websites plus SEO and automation—is commercially interesting. However, the breadth can also make the business appear unfocused.

The site currently presents itself as all of the following:

- Website designer.
- SEO provider.
- Local SEO specialist.
- AI automation agency.
- AI consultant.
- AI receptionist provider.
- Answering service.
- Marketing consultant.
- App developer.
- Bookkeeping automation provider.

This can confuse both prospective customers and Google unless the offer hierarchy is extremely clear.

Recommended positioning hierarchy:

1. **Primary audience:** Adelaide service businesses, particularly tradies, clinics and owner-operated companies.
2. **Primary outcome:** More captured and converted leads.
3. **Core system:** Website + local visibility + lead-response automation.
4. **Individual services:** Available separately, but presented as components of the same growth system.

This is more coherent than presenting a collection of unrelated digital services.

---

## 7. Conversion and business-development findings

### 7.1 Traffic is not the final KPI

GSC reports impressions, clicks, CTR and rankings. It does not show whether the visitor:

- Called.
- Submitted a form.
- Completed the audit.
- Booked a meeting.
- Became a qualified lead.
- Received a proposal.
- Became a paying customer.

Without this connection, the business cannot know which landing pages or search themes generate revenue.

### 7.2 Events to measure

At minimum, analytics should record:

- Phone-link click.
- Email-link click.
- Contact-form start.
- Contact-form submission.
- Audit start.
- Audit completion.
- Booking-calendar click.
- Booked consultation.
- AI receptionist demo call.
- Pricing-page CTA click.
- WhatsApp or messaging click, if introduced.

### 7.3 Lead records

Each lead should retain:

- Original source.
- Medium.
- Campaign.
- First landing page.
- Referring page.
- Service requested.
- Suburb.
- Lead-quality status.
- Estimated value.
- Proposal status.
- Won or lost outcome.
- Revenue value.

This can be implemented in a lightweight CRM, spreadsheet or the existing lead system. The important point is preserving the attribution data.

### 7.4 Commercial KPIs

The monthly SEO report should prioritise:

1. Qualified organic leads.
2. Organic leads from Adelaide/SA.
3. Consultation booking rate.
4. Proposal rate.
5. Win rate.
6. Organic pipeline value.
7. Organic won revenue.
8. Cost per organic lead.
9. Conversion rate by landing page.
10. Google Business Profile calls and website actions.

Clicks and rankings remain useful diagnostics, but revenue-related metrics should determine whether the strategy is working.

---

## 8. Recommended implementation plan

## Phase 1 — Measurement and search-intent map

**Timing:** Week 1  
**Priority:** Critical

### Actions

1. Export 3–6 months of GSC query/page data.
2. Group queries into commercial themes:
   - AI automation.
   - AI consulting.
   - AI receptionist.
   - Answering service.
   - Website design.
   - Local SEO.
   - Tradie SEO.
   - Suburb website design.
3. Assign one primary URL to every important search intent.
4. Identify pages that should be:
   - Retained.
   - Repositioned.
   - Merged.
   - Redirected.
   - Noindexed.
5. Check backlinks before selecting redirect destinations.
6. Confirm conversion-event tracking.
7. Establish a simple qualified-lead reporting system.

### Output

- Keyword ownership map.
- Consolidation and redirect map.
- Measurement baseline.
- Priority landing-page list.

## Phase 2 — Consolidate overlapping service clusters

**Timing:** Weeks 1–2  
**Priority:** Critical

### Actions

1. Resolve `/seo`, `/local-seo-adelaide` and `/seo-services-adelaide` overlap.
2. Resolve answering-service page overlap.
3. Clarify homepage versus `/ai-automation-adelaide` targeting.
4. Clarify homepage versus `/ai-consulting-adelaide` targeting.
5. Differentiate supporting cost and comparison pages.
6. Update internal links to point directly to the chosen primary pages.
7. Implement permanent redirects only after the final map is approved.
8. Update the sitemap and verify canonical URLs.

### Success criteria

- One clear primary page per commercial intent.
- Reduced query cannibalisation.
- Increased impressions and average position for the retained commercial pages.
- No redirect chains.
- No traffic loss from accidental removal of useful pages.

## Phase 3 — Convert existing rankings into leads

**Timing:** Week 2  
**Priority:** High

### Actions

1. Upgrade `/blog/adelaide-seo-for-tradies` with commercial CTAs.
2. Add a specific tradie visibility review or audit offer.
3. Add a real or permission-backed tradie example.
4. Improve links into the tradie service and relevant suburb pages.
5. Add an inline conversion form.
6. Improve titles and descriptions only where the page already ranks within a range where CTR changes can matter.

### Success criteria

- More visits from the existing page-three-to-page-one query set.
- Measurable CTA clicks and form submissions from the article.
- Qualified tradie enquiries attributed to organic search.

## Phase 4 — Build real local proof

**Timing:** Weeks 2–4  
**Priority:** Critical

### Actions

1. Publish at least three permission-backed case studies.
2. Replace or supplement anonymous testimonials with real Google reviews.
3. Expand the About page with full founder identity and photograph.
4. Add genuine Adelaide project imagery.
5. Add ABN or appropriate business-registration information where suitable.
6. Link to professional profiles.
7. Ensure all performance claims are supported and accurately framed.

### Success criteria

- Prospective customers can independently verify the business and examples.
- Increased conversion rate on service and pricing pages.
- Improved branded search footprint.
- Stronger sales-call trust and fewer credibility objections.

## Phase 5 — Google Business Profile and review engine

**Timing:** Weeks 2–4, then ongoing  
**Priority:** Critical for local visibility

### Actions

1. Verify and fully optimise the profile.
2. Align categories with the primary business position.
3. Add services, pricing context and appointment links.
4. Upload original photographs regularly.
5. Request a review after every successful milestone or delivery.
6. Respond to every review.
7. Publish useful local updates.
8. Track profile links and calls.

### Suggested review workflow

1. Trigger after a positive client milestone.
2. Send a direct review link.
3. Ask for an honest review, not a scripted keyword review.
4. Send one polite reminder if necessary.
5. Thank the client and respond publicly.
6. With permission, reuse the review on the appropriate service page.

### Success criteria

- Steady review acquisition rather than a one-time burst.
- Increased branded and map visibility.
- More calls and website actions from the profile.

## Phase 6 — Improve the six promising suburb pages

**Timing:** Weeks 3–5  
**Priority:** High

### Priority pages

- Marion
- Reynella
- Moana
- Seaford
- Morphett Vale
- Henley Beach

### Actions

1. Add local project proof where available.
2. Add original local imagery.
3. Make the primary service and CTA unmistakable.
4. Improve titles and descriptions based on the exact GSC query set.
5. Add appropriate internal links from commercial, blog and locations pages.
6. Remove generic or repeated copy.
7. Add nearby-area relationships only when useful to the visitor.

### Success criteria

- Priority queries move into or higher within the top ten.
- Suburb pages generate tracked phone or form enquiries.
- Improved CTR for pages already near page one.

## Phase 7 — Adelaide authority campaign

**Timing:** Month 2 onward  
**Priority:** High

### Actions

1. Build a list of current clients, partners and suppliers who could legitimately mention AI Adelaide.
2. Join relevant Adelaide business associations.
3. Offer practical AI or local-search workshops.
4. Develop reciprocal referral relationships without exchanging manipulative SEO links.
5. Pitch locally useful data or case studies to publications.
6. Create one link-worthy research asset.

### Potential original research ideas

- How many Adelaide tradies answer calls after hours?
- The cost of missed calls for Adelaide service businesses.
- Adelaide small-business AI adoption benchmark.
- Website response-time study of Adelaide service providers.
- Local search visibility benchmark across Adelaide trades.

The research must be based on a defensible methodology and clearly disclose sample size and limitations.

---

## 9. What not to do

### 9.1 Do not publish dozens more generic pages

The current issue is not insufficient URL volume. More overlapping pages could further dilute authority and create additional cannibalisation.

### 9.2 Do not optimise every page equally

Prioritise pages already showing commercial impressions or rankings near page one. A page at position 8–18 is normally a better near-term investment than one at position 80, provided the query is commercially relevant.

### 9.3 Do not chase irrelevant impressions

Some pages surface for broad or unrelated national terms. Local Adelaide business remains the priority. Traffic without the possibility of becoming a suitable customer is not the objective.

### 9.4 Do not add schema as a substitute for reputation

The site already uses extensive structured data. Real reviews, case studies, citations and links are more urgent.

### 9.5 Do not buy large packages of low-quality backlinks

They are unlikely to build genuine local trust and may create risk. Local relevance and editorial legitimacy matter more than raw link count.

### 9.6 Do not redirect ranking pages without analysis

The tradie SEO article already ranks well. Any merge or redirect decision must preserve useful rankings and intent. Consolidation should be planned from query/page data and backlink evidence.

### 9.7 Do not judge success only by impressions

Impressions can rise while commercial performance remains unchanged. The final measure is qualified Adelaide leads and won business.

---

## 10. Priority matrix

| Initiative | Expected impact | Effort | Priority |
|---|---|---|---|
| Keyword ownership and consolidation map | Very high | Medium | 1 |
| Resolve Local SEO page overlap | High | Medium | 2 |
| Resolve answering-service overlap | High | Medium | 3 |
| Upgrade ranking tradie article for conversion | High | Low–medium | 4 |
| Real case studies and reviews | Very high | Medium | 5 |
| Google Business Profile audit and review system | Very high | Medium | 6 |
| Improve six priority suburb pages | High | Medium | 7 |
| Lead and revenue attribution | Very high | Medium | 8 |
| Adelaide link and partnership campaign | High | Ongoing | 9 |
| Founder/About-page credibility | Medium–high | Low–medium | 10 |
| Minor meta-description warnings | Low | Low | Later |
| Repository `node_modules 2/` cleanup | No direct SEO impact | Low | Maintenance |

---

## 11. Proposed 30-day action plan

### Week 1

- Export and cluster GSC query/page data.
- Assign a primary URL to every valuable search intent.
- Audit backlinks for pages being considered for merging.
- Confirm analytics and lead-conversion tracking.
- Mark the old `/services/ai-automation/` OpenClaw alert as resolved.

### Week 2

- Consolidate Local SEO pages.
- Consolidate core answering-service pages.
- Clarify homepage and AI automation page targeting.
- Upgrade the high-ranking tradie SEO article.
- Update internal links and redirects.

### Week 3

- Publish the first real case study.
- Expand the founder and About-page credibility.
- Audit and optimise Google Business Profile.
- Launch the review-request workflow.
- Improve Marion, Reynella and Moana pages.

### Week 4

- Improve Seaford, Morphett Vale and Henley Beach pages.
- Begin local partner and client-link outreach.
- Add reporting for qualified leads and won revenue.
- Review early GSC movement on consolidated pages.
- Plan one original Adelaide research or data asset.

---

## 12. 60–90 day targets

Targets should be calibrated once conversion tracking and the current Google Business Profile baseline are confirmed. Reasonable directional goals include:

### Search targets

- Maintain top-three brand visibility.
- Move the primary “AI automation Adelaide” service URL into a stable top-ten position without relying solely on the homepage.
- Improve “AI consultant Adelaide” toward the top ten.
- Retain top-five visibility for “SEO for tradies Adelaide.”
- Move at least three priority suburb website-design terms into the top ten.
- Reduce the number of separate pages appearing for the same Local SEO and answering-service queries.

### Trust targets

- Publish three real case studies.
- Establish a steady Google review cadence.
- Complete founder and team proof.
- Secure at least five relevant Adelaide citations or editorial mentions.

### Commercial targets

- Track every meaningful organic conversion.
- Establish the baseline qualified-organic-lead conversion rate.
- Attribute proposals and won revenue to organic landing pages.
- Improve qualified enquiries rather than pursuing traffic alone.

---

## 13. Reporting dashboard recommendation

A monthly AI Adelaide growth report should show:

### Search visibility

- Total clicks and impressions.
- Australian clicks and impressions.
- Brand versus non-brand clicks.
- Priority commercial query positions.
- Priority landing-page performance.
- Cannibalisation alerts.
- Indexed and excluded pages.

### Local visibility

- Google Business Profile calls.
- Website visits from the profile.
- Direction requests, if applicable.
- Review count and rating.
- New citations and local links.
- Local pack positions for priority services.

### Conversion

- Organic phone clicks.
- Organic form submissions.
- Audit completions.
- Consultations booked.
- Qualified leads.
- Proposals.
- Won customers.
- Pipeline and revenue.

### Content and authority

- Pages updated.
- Case studies published.
- Reviews acquired.
- Referring domains earned.
- Partnerships or local mentions secured.

Every reported activity should connect to an intended commercial result.

---

## 14. Final recommendation

AI Adelaide has passed the point where simply adding pages is the best growth strategy. The website is technically healthy and Google is already testing it broadly. The next stage is to become more focused and more believable.

The recommended strategic order is:

1. **Focus:** Give each valuable search intent one clear primary page.
2. **Convert:** Use the pages already ranking to generate enquiries.
3. **Prove:** Replace anonymous marketing proof with verifiable Adelaide evidence.
4. **Localise:** Strengthen Google Business Profile, reviews, citations and the suburb pages already showing traction.
5. **Build authority:** Earn links and mentions through clients, partnerships and genuinely useful local work.
6. **Measure revenue:** Connect GSC and analytics data to qualified leads, proposals and wins.

The business has an attractive core proposition: an Adelaide-focused partner that combines websites, local visibility and AI-powered lead response. That proposition should become the organising idea of the entire site.

The fastest route to winning more local business is not broader coverage. It is concentrating the site's existing visibility into a smaller number of authoritative, trusted, conversion-focused pages and backing them with real Adelaide proof.

---

## Appendix A — Current strengths

- Repository aligned with GitHub.
- Healthy canonical-host redirects.
- Live robots file and sitemap.
- All sitemap URLs tested successfully.
- No broken internal links found.
- Strong metadata coverage.
- Extensive structured data.
- Correct Australian geographic concentration in GSC.
- Click and impression growth.
- Strong primary brand ranking.
- Top-five tradie SEO query.
- Several suburb queries within striking distance.
- Clear Adelaide address and phone.
- Transparent entry pricing.

## Appendix B — Current constraints

- Low overall non-brand rankings.
- Falling aggregate CTR as impressions expand.
- Average-position dilution.
- Overlapping Local SEO pages.
- Overlapping answering-service pages.
- Homepage and service-page intent ambiguity.
- Informational article outperforming commercial tradie page.
- Limited externally verifiable client proof.
- Founder identity is underdeveloped.
- Public review and local-profile footprint needs confirmation.
- Website-design market is highly competitive.
- Too much page breadth for the domain's current authority.
- Search visibility is not yet fully connected to sales outcomes.

## Appendix C — Evidence sources

- Live website: `https://aiadelaide.com.au`
- Live robots file: `https://aiadelaide.com.au/robots.txt`
- Live sitemap: `https://aiadelaide.com.au/sitemap.xml`
- Google Search Console property: `sc-domain:aiadelaide.com.au`
- Local repository automated metadata checker.
- Local repository automated internal-link checker.
- Git comparison with `origin/main`.
- OpenClaw SEO/GSC service-account integration.

Search Console figures in this document are a point-in-time snapshot and will change as Google processes more data. They should be refreshed before major redirect or consolidation decisions are implemented.
