# Customer-first homepage — local review, 5 September 2026

Status: implemented on `codex/customer-first-homepage`; local review only. No push, deployment, campaign changes or outreach. The previous homepage remains recoverable in git and its `components/home-day/` files remain available.

## What changed

The new Studio homepage leads with “Websites that mean business”, a real portfolio image, a fixed-quote action and visible starting prices. An interactive service selector separates website, local SEO and practical automation enquiries and carries the chosen service into the existing contact form. Selected work, genuine abbreviated customer comments, process, pricing/ownership FAQs and a local business introduction support the decision. All prices come from `PRICING`; no new customer or performance claims were created.

Navigation makes Websites, Pricing, SEO, Automation, Our work and About easy to find. The mobile menu includes Escape handling and keyboard cycling; the chat launcher is smaller and does not render on contact/audit pages.

Supporting corrections:

- About introduces AI Adelaide as a small Adelaide business. At Ivan's request, his personal name is absent from the public copy, metadata and schema. No invented portrait, staff count or personal LinkedIn URL.
- Website pricing explains one-off versus monthly ownership, cancellation, hosting and the existing buy-out basis. The legal terms and actual prices are unchanged.
- The 48-hour claim is conditional on a ready-to-start Starter build. Website pages use relevant existing website testimonials, separate from portfolio examples.
- The website concept demo clearly labels placeholder content and removes fabricated named reviews, star ratings and review counts.
- Four August consulting/automation pages have unsupported outcome percentages, customer-volume claims and the alleged Morphett Vale case study removed or replaced with process descriptions. Their long metadata titles are corrected.
- Three existing August pages are added to the sitemap; dates are updated for substantively edited pages. No service URLs or redirects change.
- The contact booking link points to the existing 15-minute event. Enquiry failures use plain-language feedback rather than exposing notification-provider errors.

## Verification

- Production Next.js build passes (134 generated pages); standalone TypeScript check passes.
- Targeted lint passes for the new homepage, About, navigation, contact form, chat, footer and testimonials. The production build is configured to skip lint, so lint is checked separately.
- `check-links`: 96 unique internal hrefs resolve directly; no redirect chains.
- `check-meta`: reduced from six existing failures to one existing receptionist-title length failure. `/ai-receptionist-adelaide` remains unchanged under the documented title/URL freeze until approximately 15 September. This is an explicit exception, not a clean full-check result.
- Rendered HTTP checks cover nine changed routes: all 200, one H1, one canonical, at most one FAQPage. The homepage's hydrated DOM contains one layout-owned LocalBusiness, one WebSite and one FAQPage.
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
