# Customer-first homepage — local review, 5 September 2026

Status: current candidate is the Business World concept described below; earlier Studio hero iterations are superseded. Implemented on `codex/customer-first-homepage`; local review only. No push, deployment, campaign changes or outreach. The previous homepage remains recoverable in git and its `components/home-day/` files remain available.

## Original Studio pass (superseded hero)

The new Studio homepage leads with “Websites that mean business”, a real portfolio image, a fixed-quote action and visible starting prices. An interactive service selector separates website, local SEO and practical automation enquiries and carries the chosen service into the existing contact form. Selected work, genuine abbreviated customer comments, process, pricing/ownership FAQs and a local business introduction support the decision. All prices come from `PRICING`; no new customer or performance claims were created.

Navigation makes Websites, Pricing, SEO, Automation, Our work and About easy to find. The mobile menu includes Escape handling and keyboard cycling; the chat launcher is smaller and does not render on contact/audit pages.

Supporting corrections:

- About introduces AI Adelaide as a small Adelaide business. At Ivan's request, his personal name is absent from the public copy, metadata and schema. No invented portrait, staff count or personal LinkedIn URL.
- Website pricing explains one-off versus monthly ownership, cancellation, hosting and the existing buy-out basis. The legal terms and actual prices are unchanged.
- The homepage and main website-page 48-hour claim is conditional on a ready-to-start Starter build; the later SEO audit flags remaining older industry/suburb wording for a focused follow-up. Website pages use relevant existing website testimonials, separate from portfolio examples.
- The website concept demo clearly labels placeholder content and removes fabricated named reviews, star ratings and review counts.
- Four August consulting/automation pages have unsupported outcome percentages, customer-volume claims and the alleged Morphett Vale case study removed or replaced with process descriptions. Their long metadata titles are corrected.
- Three existing August pages are added to the sitemap; dates are updated for substantively edited pages. No service URLs or redirects change.
- The contact booking link points to the existing 15-minute event. Enquiry failures use plain-language feedback rather than exposing notification-provider errors.

## Verification

- Production Next.js build passes (134 generated pages); standalone TypeScript check passes.
- Targeted lint passes for the new homepage, About, navigation, contact form, chat, footer and testimonials. The production build is configured to skip lint, so lint is checked separately.
- `check-links`: 96 unique internal hrefs resolve directly; no redirect chains.
- `check-meta`: reduced from six existing failures to one existing receptionist-title length failure. `/ai-receptionist-adelaide` remains unchanged under the documented title/URL freeze until approximately 15 September. This is an explicit exception, not a clean full-check result.
- Rendered HTTP checks cover nine changed routes: all 200, one H1, one canonical, at most one FAQPage. The homepage's initial server HTML now contains one layout-owned LocalBusiness, one WebSite and one FAQPage following the SEO audit.
- Browser checks cover desktop, 768px tablet, 390px and 320px phones, service selection, SEO contact preselection, hidden chat on contact, mobile menu open/Escape/focus return and no horizontal document overflow at sampled widths.
- Real email/Telegram delivery and production durable lead storage are not verified by this design work. No customer message or synthetic notification was sent.

## Review locally

Build with `npm run build`, then launch the same production bundle used in the browser review:

```sh
AIADELAIDE_SMTP_HOST=127.0.0.1 AIADELAIDE_SMTP_PASS=local-preview-disabled AIADELAIDE_SMTP_PORT=9 AIADELAIDE_SMTP_SECURE=false TELEGRAM_BOT_TOKEN='' npm run start -- --hostname 127.0.0.1 --port 3000
```

Open <http://127.0.0.1:3000>. These temporary process settings suppress contact email/Telegram delivery during review; the existing local JSON persistence can still record a submitted form. They do not change production credentials or provider settings. Other existing API flows are outside this contact-only preview isolation.

Review the homepage, switch all three service options, follow a quote action, and inspect the pricing and About pages. Deployment still requires Ivan's approval and push.

## Commercial next step

The page is a clearer sales surface; it is not proof of demand or conversion uplift. Use the existing business review's acquisition plan: reconcile current leads and paying customers, choose an existing durable enquiry record, then run a small founder-led website/SEO sales effort with an agreed next action for every opportunity. Sell one useful automation only where the workflow and economics justify it. The receptionist remains a secondary legacy service.

Before declaring lead capture production-ready, connect and verify durable storage plus real notification delivery. A local success message or writable JSON file does not prove persistence on Vercel. Further attributable proof and current financial/customer figures still require supplied evidence. Keep the public site brand-led; Ivan has chosen not to display his personal name yet.

## SEO audit follow-up

[`SEO-PREVIEW-AUDIT-2026-09-05.md`](./SEO-PREVIEW-AUDIT-2026-09-05.md) records the full 113-page local crawl and current Search Console opportunities. Local fixes allow Next.js assets in robots.txt, server-render business schema and all service-selector descriptions, and add relevant commercial internal links. The visual design and personal-name privacy preference are preserved. For phone review on the same Wi-Fi, the current server binds `0.0.0.0` and is available at <http://192.168.68.106:3000>; the address can change with the network.

## Earlier expressive homepage pass, 5 September (superseded hero)

At Ivan's request for more visual impact, the hero now uses larger Manrope typography with same-family italic emphasis, a charcoal/teal dimensional project frame, and explicit buttons to choose between CarHire.global and 365CarHire. Both screenshots and their outbound links are genuine portfolio records. The showcase has no autoplay; selection is available through normal keyboard-accessible buttons. Short entrance, selection and hover transitions respect reduced motion. Selected-work image spacing and the closing section's composition have also been strengthened.

This is a focused evolution of the established light/teal design, using its permitted single dark moment. Real portfolio assets are retained. Pricing, public-name privacy, route structure, metadata, FAQ answers, schema and all enquiry/service paths are preserved. The previous version is recoverable at commit `3d57b0b`. No new animation dependencies or remote visual assets were added.

Validation: production build, TypeScript, targeted lint, internal links, responsive browser inspection and project-selection checks. Final browser evidence is under `reviews/2026-09-05/homepage-wow/`. The existing frozen receptionist-title metadata exception still applies. These are local functional and visual checks, not measured Core Web Vitals or evidence of improved conversion.

## Current candidate: Small business. Big presence.

Ivan rejected the restrained Studio design and its first visual-impact pass as weaker than the live One Day homepage. A direct browser comparison confirmed that the live page has a coherent day-long narrative, scene changes and a personalised website demo; the Studio iteration had reduced those qualities to conventional sales sections and portfolio screenshots.

The current candidate uses `BusinessWorld.tsx` and `world.module.css`: an original miniature business-street illustration, clickable industry entry points and an interactive customer journey. Visitors can enter a business name, select trades, hospitality or local services, and explore local search, website design and enquiry follow-up. The miniature website buttons advance the example; the real quote link carries the business name and chosen service into the existing contact form. A user-started sequence has pause/reset controls and timer cleanup. Reduced-motion users get manual scene selection. No searches, messages, enquiries or bookings are sent by the illustrative interaction.

The illustration is explicitly imagined in its alternative text. The illustrative scenes have no fabricated reviews, customers, rankings or commercial outcomes. The actual CarHire.global and 365CarHire portfolio remains below, together with genuine abbreviated testimonials, prices from PRICING, commercial internal links and existing FAQ answers/schema. The homepage H1 deliberately changes to the concept line; metadata and canonical remain the audited values. The business name is held in component state and only enters the contact URL when the visitor follows the quote link; analytics events do not include it.

Artwork: `public/images/small-business-world.jpg`, 1300px, approximately 116KB. Generated with the built-in image tool; full prompt and provenance are in `reviews/2026-09-05/business-world/ARTWORK.md`. No new runtime dependencies. The earlier hero and service-selector files remain available for comparison; `0232c9c` is the pre-concept rollback point.

Validation covers production build, TypeScript, targeted lint, 97 internal-link destinations, initial HTML metadata/schema, real browser desktop/mobile checks, manual scene progression, timed play/pause/completion, business-type selection and personalised website/automation quote preselection. Screenshots and check records are in `reviews/2026-09-05/business-world/`. No form was submitted. The frozen receptionist title is still the single known check-meta failure; no production performance or conversion improvement is claimed. Local review only; no push, deployment or index submission.
