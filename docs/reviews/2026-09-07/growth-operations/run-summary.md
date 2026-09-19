# First unattended operating run — 7 September 2026

The automation executed, but its original timing was wrong: 09:01 UTC was 18:31 Adelaide. The actual scheduler had also queued the next run for 21:31 Adelaide. The initial local-rule simulation from 6 September did not verify the app's actual scheduling behaviour and is superseded by this result.

## Schedule corrected and verified

Read-only inspection of the installed app's scheduler showed the original expiry option bypassed its local wall-clock calculation. Adding an explicit timezone start also produced an evening timestamp. Updating the existing heartbeat through the native automation tool to a plain weekly local-time rule produced a native next-run timestamp of **8 September, 09:01:10 Adelaide**. This includes the app's bounded scheduling jitter. The old evening occurrence is no longer queued.

The pilot still ends on 5 December. The prompt now pauses the automation after the final Friday review on 4 December, with a date gate to pause before any programme work if a missed run wakes after 5 December. No separate cron or duplicate automation was created. No app binary or scheduling database was modified directly. Evidence: [schedule-repair.json](./schedule-repair.json). The first actual run is verified; execution at the corrected future time still needs confirmation tomorrow.

## Operating result

- Private register read-back: no non-test entries, two excluded synthetic tests, no actionable rows. This is the new Contact/Tradie register only, not historical business revenue or all enquiry channels.
- Seven website HTTP checks pass, including H1/canonical/indexability and Googlebot access to key pages and static resources. These do not constitute a new end-to-end notification test.
- Recent mailbox checks found no genuine customer enquiry, programme reply, opt-out or bounce in the available batch. Historical retention is incomplete.
- Sender SPF, DKIM key and DMARC DNS are configured. Retained mail does not establish actual recipient-side authentication passes. The first two prospects remain held because consent and complete prior-contact/suppression history are unverified. No email was sent, and no DNS change is justified.

Evidence: [operations.json](./operations.json), [email-readiness.md](./email-readiness.md). Private contact history and operating state remain under ignored `data/growth-ops/` with restrictive permissions.

## Monday plan

Fresh final GSC through 4 September is still entirely before the 5 September release: global 18 clicks / 9,875 impressions versus 30 / 22,013 in equal 28-day windows. It cannot measure the release's impact. The [search plan](./search-plan.md) selects two bounded jobs:

1. Preserve the chosen service in closing quote links on Local SEO and website-design pages, with desktop/mobile click-through checks and an independently reviewed release.
2. Verify and document the distinct self-serve audit and AI-readiness-calculator enquiry journeys, then prepare a scoped contact/persistence proposal. Do not silently change data collection or count PDF generation as an enquiry.

The newly changed electrician/tradie/southern-suburb cohort remains stable. MDEX's offered free redesign is a separate scope/discovery opportunity, not completed customer proof or authority for an unscoped build.
