# Approved calculator correction — 9 September 2026

Ivan approved the scoped proposal in channel-map.md, including the disclosed extension to the existing Restricted enquiry register and one labelled live integration check.

## Changes

Calculator result/form/metadata no longer promise an emailed report. Optional follow-up submits contact details, score/tier and existing attribution; raw answers and raw score are excluded. The existing Sheet adapter replaces ephemeral filesystem storage. Telegram and Sheet start independently; both failures return 502, either confirmed channel acknowledges receipt. No automatic retries. Visible tiers use the scoring source. Success receives focus to stay visible on mobile.

Audit human-help links preselect service=audit in Contact. Browser-local audit scoring, optional email prefill and PDF generation are preserved. Privacy wording and sitemap dates updated. No new destination, marketing enrolment, pricing or public proof claim added.

## Local verification

- Production build, TypeScript and targeted lint pass.
- Three calculator tests, ten existing Sheet tests and seven growth-operations tests pass. Malformed API payload checks return 400.
- Actual desktop 1440x1000 and mobile 390x844 calculator journeys: controlled delivery failure, retained fields, retry and successful confirmation. Final confirmation focus/visibility visually verified in both sizes. Sheet API writes intercepted to synthetic local fixtures; no customer rows from these tests.
- Independent review found no runtime/privacy blocker; requested stale documentation updates included here. Test fixture aligned to actual AI Ready tier.
- Existing whole-site lint debt and frozen receptionist metadata-length warning remain outside scope. Existing 50+ trust claim and audit copy observations remain recorded for a later content pass.

## Release

Source commit: `5683fe0e03bd084dc69c34e1e05bcd50f9d0986a`.
Production: `dpl_EgYkznF7WtvZEpcUVtc9dnVwHABD`, Ready and aliased to https://aiadelaide.com.au.
Deployment URL: https://ai-adelaide-7u5as46i0-ivans-projects-9bc72bf6.vercel.app.
Rollback target verified before release: `dpl_7rY73ARvENApxemtXb4MT7ejPRTf`.
Deployed a clean tracked-file archive into the existing project; only `.env.example` included. No git push.

## Canonical verification

The live nine-question calculator reached 20/100, displayed the new disclosure, and accepted one explicitly labelled internal follow-up request. Confirmation acknowledged receipt without any report-email claim. Desktop and mobile presentation checked. Read-back from the actual Sheet found exactly one matching row, correct service/source/score/tier, stage New, financial fields blank; Test record changed to Yes and read back. Sanitised evidence: `calculator-live-test.json`. No raw quiz answers were submitted. This verifies the register delivery, not recipient reading of a Telegram notification; no report email was expected or claimed.

The reporting script now reads the expanded scope and excludes all three internal tests. The one non-test record remains the previously triaged vendor message; no qualified enquiry or revenue gain is claimed.

Local audit completion still reaches its 40/100 report screen and enabled PDF button without contact collection. PDF-generation code is unchanged; the download itself was not revalidated. Audit result/report help links on localhost and the canonical report handoff select Free Digital Health Check (audit) in Contact; mobile and desktop states verified. The live sitemap reports 9 September for calculator/privacy. Audit result/report pages remain excluded from the sitemap as before.
