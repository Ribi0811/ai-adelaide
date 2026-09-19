# OpenClaw GSC reporting fix

**Applied locally:** 22 August 2026  
**Purpose:** stop the daily and weekly SEO alerts from treating query/page/date diagnostic rows as site totals.

## What changed

The local OpenClaw scripts were updated at:

- `/Users/ivanribicic/.openclaw/workspace/projects/analytics/compare_gsc_weeks.py`
- `/Users/ivanribicic/.openclaw/workspace/scripts/gsc_weekly_report.py`
- `/Users/ivanribicic/.openclaw/workspace/scripts/pull_gsc_snapshot.py`

Backups were made beside each script with the suffix `.bak-20260822` before editing.

The headline metric rules are now:

- clicks, impressions, CTR and average position come from one Search Console aggregate query with **no dimensions**;
- the aggregate query uses `dataState: final`;
- the endpoint uses a conservative three-day lag;
- query/page/date rows remain diagnostics and are never summed back into totals;
- snapshot metadata records the data state, lag and aggregate source.

The daily command job already consumes the per-site `current_metrics`/`previous_metrics` fields, so no change was needed to its cross-site total calculation after the source rows were corrected.

## Verification requirement

The repaired compare script was run successfully on 22 August. The AI Adelaide row now reports **10 clicks, 3,610 impressions, position 27.0** for 13–19 August versus **8 clicks, 7,133 impressions, position 29.4** for 6–12 August, matching the direct aggregate GSC check. A successful process exit alone is not enough; the snapshot must contain:

```json
{
  "data_state": "final",
  "gsc_lag_days": 3,
  "source": "searchanalytics aggregate row (no dimensions)"
}
```

The Next.js site change set is tracked separately in this repository. OpenClaw remains a local runtime workspace and is not part of the Vercel deployment.
