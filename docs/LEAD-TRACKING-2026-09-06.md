# Private enquiry register — 6 September 2026

Ivan authorised retaining immediate Telegram notifications and adding a private Google Sheet, then authorised using signed-in Chrome to create and connect it.

## Register and everyday use

[Open AI Adelaide Enquiries](https://docs.google.com/spreadsheets/d/17u860RvhIwEXvaQPmLVZEscVvrhi4q0MbXAWW2wTyME/edit).

New Contact and Tradie SEO form submissions through `/api/contact-submit` append to the `Enquiries` tab. Telegram, email and the Sheet start independently, so Google authentication or writing does not hold up starting the Telegram notification. The existing Telegram recipient and message format are unchanged.

Update the amber columns after each follow-up: Stage, Next action, Follow-up date, quote/won values, monthly fee, cash received and outcome notes. Stages are New, Qualified, Quoted, Won, Lost and Spam. Dates are UTC; money is AUD. Mark internal tests `Yes` in the final Test record column and exclude them from commercial reporting. New real records default to `No`. Revenue and qualification are manual, evidence-based entries; submitting a form is not a sale.

Keep the tab name and row-5 headings unchanged. Column order is checked against `lib/lead-sheet-columns.json` before every append. The website does not overwrite earlier enquiries or sales outcomes. The blank XLSX in `outputs/2026-09-06-lead-register/` is the reproducible template, not a copy of customer records. Do not commit exports containing customer information.

## Access and operation

General access was verified as **Restricted** in Chrome. Ivan owns the file; the dedicated `aiadelaide-lead-sheet` service account has Editor access to this file and no Google Cloud project roles. The Sheets API is enabled in the existing `car-hire-seo-reporting` project. The dedicated JSON credential is protected outside the repository; production uses sensitive Vercel variables `AIADELAIDE_LEAD_SHEET_ID` and `AIADELAIDE_LEAD_SHEET_SERVICE_ACCOUNT`. Never put credential values in documentation or logs.

Writes use the Sheets API with `RAW` input and inserted rows, preserving phone numbers and treating formula-like customer input as text. A successful API result requires one updated row and a matching returned lead ID. Total Sheet time is limited to seven seconds. Ambiguous writes are not automatically retried, to avoid duplicates. Failed copies log only lead ID and status. Telegram/email may still succeed if Sheets is unavailable; reconcile missing copies from those notifications. There is no automatic retry queue or historical backfill.

The original integration covers Contact and Tradie SEO forms. Separate audit, chat, booking and phone workflows are not connected by this change. No new analytics, public sharing or customer outreach was added.

## Verification

- Ten focused tests pass, including unchanged literal input, header mismatch, Google failure, ambiguous response, late authentication, and notification independence.
- TypeScript, targeted lint and the production build pass.
- Metadata check retains the existing frozen receptionist title-length warning; no page content or metadata changed in this integration.
- Actual localhost Contact form submission displayed success and produced exactly one matching Sheet row with the production filesystem disabled. Local Telegram/email were deliberately disabled for this test. The test record was marked `Yes`.
- Chrome verified restricted sharing and the saved row, date formatting, readable headings and editable follow-up fields.
- Sanitised setup and local evidence: `docs/reviews/2026-09-06/lead-sheet/`.

## Production result

Deployed source `3f60c75bfa5880daf1ad48f08e37168f1932bcb0` through Vercel CLI. Deployment `dpl_F7j3PrPeW2PLqBGqtoNBrHXssXEX` is Ready and aliased to `https://aiadelaide.com.au`. The canonical Contact page was checked in the browser after release. No git push was performed.

The labelled live POST `AIA-SHEET-20260906-PROD-01` returned HTTP 200 in 3.63 seconds with `telegram.ok: true`, `email.ok: true`, `sheet.status: saved` and `persisted: true`. Independent Sheets API read-back confirmed exactly one matching row, including lead ID, marker, business and email. Read-only IMAP verified exactly one matching message in the business inbox. Telegram API acceptance is verified; on-device notification display was not independently observed. Chrome displayed the saved production row. Both local and production synthetic rows are marked Test record `Yes`.

Evidence: `reviews/2026-09-06/lead-sheet/production-runtime.json`. This verifies delivery and persistence, not a qualified enquiry or revenue result. Body rows were expanded to 64 pixels with wrapping for readability; longer enquiries can be expanded further in Sheets.

## Rollback

The preceding verified production deployment is `dpl_9UrXyza4hpxDhiuS6CLau35Pt4ee` (source `fc1c295`). Reverting to it restores the prior notification-only behaviour and leaves the private Sheet intact. Any future deployment or rollback requires current user authorisation. Removing the integration account from the Sheet stops writes; Telegram/email remain independent.

## Approved calculator extension — 9 September

Ivan approved adding submitted AI-readiness follow-up requests through `/api/leads` to this same register. Source is `ai-readiness-calculator`, service is `AI readiness`; the message holds score/tier only. Contact details and existing attribution are disclosed at submission; individual quiz answers are excluded. Rows start New, financial fields blank. Telegram and Sheet run independently; either confirmed channel can acknowledge receipt. No automated report email is sent. Reconcile missing Sheet copies from Telegram if Sheet delivery fails. Anonymous calculator/audit completions are not enquiries; audit PDF and optional email prefill remain browser-local. Human-help links route to Contact with service=audit. Release verification: `reviews/2026-09-09/growth-operations/calculator-release.md`.
