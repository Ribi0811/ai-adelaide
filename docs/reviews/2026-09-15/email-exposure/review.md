# Public email exposure removal — 15 September 2026

Ivan reported heavy unsolicited email and requested protection against website email scraping. Removed the mailbox address from the shared footer/CTA, Contact, policy contact links, LocalBusiness JSON-LD, llms text routes, suburb preview images, public form failure messages and shared client constants. Contact links use the existing form; delivery failures offer the telephone. Mail recipients, existing mailbox, consent, data destinations and delivery logic are unchanged.

Local production build and TypeScript pass. All 354 generated public HTML/RSC/body/static files scanned without the mailbox address. Contact and privacy-page links clicked to the form; mobile form layout inspected. No live enquiry or email submitted. The targeted lint errors are pre-existing unescaped punctuation on unchanged terms/cookie-policy lines; metadata retains the previously recorded receptionist title-length warning. These are unrelated to this patch and were not silently treated as passing checks.

This reduces new harvesting from the current website. It cannot erase copied addresses, historical deployments, third-party listings or purchased lists, prevent guessed addresses, or guarantee less spam. Mailbox filtering is a separate next step; no mailbox rules, DNS, regional blocks or account settings changed. Contact-form bot abuse also remains a separate issue.

Independent review found one stale catch-message email instruction; it was corrected to match the phone fallback. No other public exposure or delivery/consent changes were found.
