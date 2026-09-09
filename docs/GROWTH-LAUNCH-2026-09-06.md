# Growth operation launch — 6 September 2026

## Configured schedule

The **AI Adelaide — growth operator** automation is ACTIVE, attached to the current Codex task. Automation ID: `ai-adelaide-enquiry-desk`. The ID reflects its initial name; the saved name and prompt were updated to include the complete programme. No duplicate AI Adelaide automations were created.

Weekday runs are 09:00, 12:00 and 16:00, using Adelaide local time. The first scheduled run is Monday 7 September at 09:00. Each run checks enquiries; Monday morning plans search work, Tuesday/Wednesday morning executes the queue, Thursday morning prepares customer opportunities and proof, and Friday afternoon reports business outcomes. It ends after the 90-day pilot; the last business-day run is Friday 4 December. The full standing brief is [GROWTH-OPERATING-BRIEF.md](./GROWTH-OPERATING-BRIEF.md).

Native Codex permits one active heartbeat per task, so the originally proposed separate schedules were consolidated into one dispatcher with three daily run times. Existing general follow-up and car-hire schedules were preserved. The app acknowledged creation/update and the saved configuration was read back. This verifies configuration, not future unattended execution. The host and required authenticated access must remain available; the first unattended run needs its own execution check.

## Initial work completed

- Two bounded subagents produced search analysis and five researched customer opportunities. The coordinator reviewed both outputs; an independent review identified and corrected monitoring issues before launch.
- [Final GSC baseline](./reviews/2026-09-06/growth-launch/search-baseline.md): 7 August–3 September versus 10 July–6 August, direct final aggregates. Global clicks 21 versus 28; AU clicks 15 versus 25. All this data predates the 5 September release. It cannot prove a result from that release.
- [Customer opportunities and unsent drafts](./reviews/2026-09-06/growth-launch/customer-opportunities.md): five real businesses with observed public website issues. JJ Electrical and Tailored Plumbing are the first research priorities; none is an interested buyer, qualified enquiry or customer on this evidence.
- `scripts/growth_ops.py --health` read the actual private Sheet and seven live website endpoints successfully. The new register currently contains two marked internal tests and no non-test records. This describes this register since its creation, not AI Adelaide's historical customers or revenue.
- Seven targeted tests pass: test exclusion/unknown flags, invalid dates, partial/invalid cash reporting, Adelaide due dates, heading mismatch and Googlebot blocking. The live initial aggregate/health result is [operations-baseline.json](./reviews/2026-09-06/growth-launch/operations-baseline.json).
- No public website change, customer message, prospect form submission, paid service, profile edit or financial transaction was performed during schedule setup.

## First-run checklist

At the first unattended run, verify it started on the intended local host/time, loaded this repository, read the private register and wrote its private deduplication state. If credential/browser/runtime access fails, report that exact boundary once and continue independent work. Do not label an ACTIVE schedule or successful HTTP request as completed customer acquisition.

**Verified 7 September:** the first unattended run reached this repository and read the register, but fired at 18:31 Adelaide rather than 09:00. The original expected-times simulation was insufficient. The native rule was repaired, and the app now records the next run at 8 September 09:01:10 Adelaide. The expiry option was removed to restore local-time scheduling; a final-review pause and start-of-run date gate retain the 5 December pilot limit. See [first-run evidence and correction](./reviews/2026-09-07/growth-operations/run-summary.md). **Corrected execution verified 8 September:** actual run at 09:01:32 Adelaide; the next scheduled run is 12:00:31 Adelaide. See `reviews/2026-09-08/growth-operations/schedule.json`.

The first complete 28-day post-release GSC window is 6 September–3 October, available no earlier than 6 October with the conservative three-day lag. Compare with 8 August–4 September, excluding release day. Real delivery defects should be corrected immediately; broad SEO rewrites should wait for useful evidence.

## Outreach authority update

Later on 6 September, Ivan delegated proactive email outreach content and frequency to the operator. The active automation and standing brief now include up to five new eligible contacts per week and one follow-up after seven business days, with ten initial/follow-up emails total per week. Per-message approval is superseded within that scope; sender readiness, recipient consent and contact/opt-out evidence still require verification before sending. No emails were sent as part of this configuration update.

## 8 September efficiency update

Ivan authorised reducing routine runs and selective Luna delegation. Existing automation updated and read back: weekdays 09:00 Adelaide only, five scheduled runs per week instead of fifteen. Friday 09:00 includes the progress report, first due 11 September. Monthly reviews are included on 5 October, 5 November and final 4 December. No new automation; immediate Telegram notifications preserved. Saved prompt specifies Luna low/medium for suitable bounded subtasks and coordinator ownership of final judgments. This verifies configuration, not future execution or measured token savings.

## 9 September — approved calculator correction released

Source `5683fe0` is live as `dpl_EgYkznF7WtvZEpcUVtc9dnVwHABD`; rollback `dpl_7rY73ARvENApxemtXb4MT7ejPRTf`. Truthful follow-up copy, existing-register integration without raw answers, privacy disclosure and audit Contact preselection passed local checks, independent review and canonical verification. One labelled integration test produced exactly one Sheet row and was marked Yes; three tests excluded from reporting. See `reviews/2026-09-09/growth-operations/calculator-release.md`. No customer outreach, new destination or git push.
