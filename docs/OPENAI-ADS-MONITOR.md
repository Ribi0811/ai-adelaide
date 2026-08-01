# OpenAI Ads monitor

Read-only monitoring for the AI Adelaide OpenAI Ads account.

## Run it

```bash
npm run check-openai-ads
npm run check-openai-ads -- --days=30
npm run check-openai-ads -- --json
```

The monitor calls only these Ads API endpoints:

- `GET /v1/ad_account`
- `GET /v1/ad_account/insights`

It does not create or edit campaigns, ads, bids, budgets, billing, or conversion events.

## Credential

The script reads `OPENAI_ADS_API_KEY` when provided. On macOS it otherwise reads the login Keychain item:

- service: `com.aiadelaide.openai-ads`
- account: `codex-monitor`

The key is not stored in this repository or in automation prompts.

To replace the Keychain credential after rotating it in Ads Manager:

```bash
read -s 'OPENAI_ADS_API_KEY?Ads API key: '
security add-generic-password -U -a 'codex-monitor' -s 'com.aiadelaide.openai-ads' -w "$OPENAI_ADS_API_KEY"
unset OPENAI_ADS_API_KEY
```

To remove it:

```bash
security delete-generic-password -a 'codex-monitor' -s 'com.aiadelaide.openai-ads'
```

## Alerts

The monitor reports:

- account or integrity-review problems;
- active campaigns with no delivery in the selected window;
- campaigns ending within two days;
- inactive or unapproved ads;
- no clicks after 100 impressions;
- CTR below 0.50% after 200 impressions.

This performance monitor cannot replace website conversion tracking. OpenAI Pixel or Conversions API setup is still required before Ads Manager can attribute AI Adelaide lead submissions.
