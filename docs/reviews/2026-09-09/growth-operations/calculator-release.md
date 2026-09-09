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

Pending. Rollback target verified before release: dpl_7rY73ARvENApxemtXb4MT7ejPRTf. No git push.
