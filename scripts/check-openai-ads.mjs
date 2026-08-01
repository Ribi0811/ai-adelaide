#!/usr/bin/env node

import { execFileSync } from "node:child_process";

const API_BASE = "https://api.ads.openai.com/v1";
const TIMEZONE = "Australia/Adelaide";
const KEYCHAIN_ACCOUNT = "codex-monitor";
const KEYCHAIN_SERVICE = "com.aiadelaide.openai-ads";
const DEFAULT_LOOKBACK_DAYS = 14;

function getApiKey() {
  if (process.env.OPENAI_ADS_API_KEY) return process.env.OPENAI_ADS_API_KEY;

  if (process.platform !== "darwin") {
    throw new Error(
      "Set OPENAI_ADS_API_KEY. The macOS Keychain fallback is only available on macOS.",
    );
  }

  try {
    return execFileSync(
      "security",
      [
        "find-generic-password",
        "-a",
        KEYCHAIN_ACCOUNT,
        "-s",
        KEYCHAIN_SERVICE,
        "-w",
      ],
      { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] },
    ).trim();
  } catch {
    throw new Error(
      `OpenAI Ads credential not found. Set OPENAI_ADS_API_KEY or add macOS Keychain service ${KEYCHAIN_SERVICE}.`,
    );
  }
}

function adelaideDate(date) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: TIMEZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

function reportWindow(days) {
  const until = new Date();
  const since = new Date(until.getTime() - (days - 1) * 86_400_000);
  return {
    since: adelaideDate(since),
    until: adelaideDate(until),
  };
}

async function apiRequest(path, apiKey, query = []) {
  const url = new URL(`${API_BASE}${path}`);
  for (const [name, value] of query) url.searchParams.append(name, value);

  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    signal: AbortSignal.timeout(20_000),
  });

  const body = await response.text();
  if (!response.ok) {
    const safeBody = body.slice(0, 500).replaceAll(apiKey, "[REDACTED]");
    throw new Error(`Ads API ${response.status} ${response.statusText}: ${safeBody}`);
  }

  return JSON.parse(body);
}

function insightQuery(level, fields, window, { granularity = "none" } = {}) {
  const query = [
    ["time_granularity", granularity],
    ["aggregation_level", level],
    [
      "time_ranges[]",
      JSON.stringify({ type: "date_range", ...window, timezone: TIMEZONE }),
    ],
    ["includes[]", "zero_impression_items"],
    ["limit", "2000"],
  ];

  for (const field of fields) query.push(["fields[]", field]);
  return query;
}

function sum(rows, key) {
  return rows.reduce((total, row) => total + Number(row[key] ?? 0), 0);
}

function money(value) {
  return new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
  }).format(Number(value ?? 0));
}

function percentage(clicks, impressions) {
  if (!impressions) return "0.00%";
  return `${((clicks / impressions) * 100).toFixed(2)}%`;
}

function daysUntil(unixSeconds) {
  if (!unixSeconds) return null;
  return Math.ceil((Number(unixSeconds) * 1000 - Date.now()) / 86_400_000);
}

function buildAlerts(account, campaigns, ads, totals, adTotals) {
  const alerts = [];
  const reviewStatus = account.review?.status;
  const integrityStatus = account.account_integrity_review?.review?.status;

  if (account.status !== "active") alerts.push(`Account status is ${account.status}.`);
  if (reviewStatus !== "approved") alerts.push(`Account review is ${reviewStatus ?? "unknown"}.`);
  if (integrityStatus && integrityStatus !== "approved") {
    alerts.push(`Account integrity review is ${integrityStatus}.`);
  }

  for (const campaign of campaigns) {
    if (campaign.campaign_status === "active" && Number(campaign.impressions ?? 0) === 0) {
      alerts.push(`Active campaign “${campaign.campaign_name}” had zero impressions in the report window.`);
    }

    const remaining = daysUntil(campaign.campaign_end_time);
    if (remaining !== null && remaining >= 0 && remaining <= 2) {
      alerts.push(`Campaign “${campaign.campaign_name}” ends in ${remaining} day${remaining === 1 ? "" : "s"}.`);
    }
  }

  for (const ad of ads) {
    if (ad.ad_review_status !== "approved") {
      alerts.push(`Ad “${ad.ad_name}” review status is ${ad.ad_review_status ?? "unknown"}.`);
    }
    if (ad.ad_status !== "active") alerts.push(`Ad “${ad.ad_name}” status is ${ad.ad_status}.`);
  }

  if (totals.impressions >= 100 && totals.clicks === 0) {
    alerts.push(`No clicks after ${totals.impressions} impressions.`);
  } else if (totals.impressions >= 200 && totals.clicks / totals.impressions < 0.005) {
    alerts.push(`CTR is below 0.50% after ${totals.impressions} impressions.`);
  }

  if (
    totals.impressions !== adTotals.impressions ||
    totals.clicks !== adTotals.clicks ||
    Math.abs(totals.spend - adTotals.spend) >= 0.01
  ) {
    alerts.push(
      `Campaign and ad reporting are temporarily inconsistent (campaign: ${totals.impressions} impressions, ${totals.clicks} clicks, ${money(totals.spend)}; ads: ${adTotals.impressions} impressions, ${adTotals.clicks} clicks, ${money(adTotals.spend)}).`,
    );
  }

  return alerts;
}

async function main() {
  const jsonMode = process.argv.includes("--json");
  const daysArg = process.argv.find((arg) => arg.startsWith("--days="));
  const days = daysArg ? Number(daysArg.split("=")[1]) : DEFAULT_LOOKBACK_DAYS;
  if (!Number.isInteger(days) || days < 1 || days > 365) {
    throw new Error("--days must be an integer from 1 to 365.");
  }

  const apiKey = getApiKey();
  const window = reportWindow(days);
  const [account, campaignResponse, adResponse] = await Promise.all([
    apiRequest("/ad_account", apiKey),
    apiRequest(
      "/ad_account/insights",
      apiKey,
      insightQuery(
        "campaign",
        [
          "campaign.id",
          "campaign.name",
          "campaign.status",
          "campaign.start_time",
          "campaign.end_time",
          "campaign.budget.daily",
          "campaign.impressions",
          "campaign.clicks",
          "campaign.spend",
          "campaign.cpc",
          "campaign.cpm",
        ],
        window,
      ),
    ),
    apiRequest(
      "/ad_account/insights",
      apiKey,
      insightQuery(
        "ad",
        [
          "campaign.id",
          "ad.id",
          "ad.name",
          "ad.title",
          "ad.copy",
          "ad.link",
          "ad.status",
          "ad.review_status",
          "ad.impressions",
          "ad.clicks",
          "ad.spend",
          "ad.cpc",
          "ad.cpm",
        ],
        window,
      ),
    ),
  ]);

  const campaigns = campaignResponse.data ?? [];
  const ads = adResponse.data ?? [];
  const totals = {
    impressions: sum(campaigns, "impressions"),
    clicks: sum(campaigns, "clicks"),
    spend: sum(campaigns, "spend"),
  };
  totals.ctr = totals.impressions ? totals.clicks / totals.impressions : 0;
  totals.cpc = totals.clicks ? totals.spend / totals.clicks : 0;
  totals.cpm = totals.impressions ? (totals.spend / totals.impressions) * 1000 : 0;

  const adTotals = {
    impressions: sum(ads, "impressions"),
    clicks: sum(ads, "clicks"),
    spend: sum(ads, "spend"),
  };

  const alerts = buildAlerts(account, campaigns, ads, totals, adTotals);
  const report = {
    generated_at: new Date().toISOString(),
    window,
    account: {
      id: account.id,
      name: account.name,
      status: account.status,
      review_status: account.review?.status ?? null,
      integrity_review_status: account.account_integrity_review?.review?.status ?? null,
      currency_code: account.currency_code,
      timezone: account.timezone,
    },
    totals,
    ad_totals: adTotals,
    campaigns,
    ads,
    alerts,
  };

  if (jsonMode) {
    console.log(JSON.stringify(report, null, 2));
    return;
  }

  console.log(`OpenAI Ads — ${account.name}`);
  console.log(`Window: ${window.since} to ${window.until} (${TIMEZONE})`);
  console.log(
    `Account: ${account.status}; review ${account.review?.status ?? "unknown"}; integrity ${account.account_integrity_review?.review?.status ?? "unknown"}`,
  );
  console.log(
    `Performance: ${totals.impressions} impressions | ${totals.clicks} clicks | ${percentage(totals.clicks, totals.impressions)} CTR | ${money(totals.spend)} spend | ${money(totals.cpc)} CPC | ${money(totals.cpm)} CPM`,
  );

  console.log("\nCampaigns:");
  for (const campaign of campaigns) {
    console.log(
      `- ${campaign.campaign_name}: ${campaign.campaign_status}; ${campaign.impressions ?? 0} impressions; ${campaign.clicks ?? 0} clicks; ${money(campaign.spend)} spend; ${money(campaign.campaign_budget_daily)}/day`,
    );
  }

  console.log("\nAds:");
  for (const ad of ads) {
    console.log(
      `- ${ad.ad_name}: ${ad.ad_status}; review ${ad.ad_review_status}; ${ad.impressions ?? 0} impressions; ${ad.clicks ?? 0} clicks; ${ad.ad_link}`,
    );
  }

  console.log("\nAlerts:");
  if (alerts.length === 0) console.log("- None.");
  for (const alert of alerts) console.log(`- ${alert}`);
}

main().catch((error) => {
  console.error(`OpenAI Ads monitor failed: ${error.message}`);
  process.exitCode = 1;
});
