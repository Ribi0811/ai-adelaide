#!/usr/bin/env python3
"""Read-only AI Adelaide operating check. Never prints customer fields or credentials."""
import argparse
from datetime import datetime, timedelta, timezone
from html.parser import HTMLParser
import json
import math
from pathlib import Path
from zoneinfo import ZoneInfo
from urllib.robotparser import RobotFileParser
import requests
from google.oauth2 import service_account
from google.auth.transport.requests import AuthorizedSession

ROOT = Path(__file__).resolve().parents[1]
SHEET_ID = '17u860RvhIwEXvaQPmLVZEscVvrhi4q0MbXAWW2wTyME'
KEY = Path.home() / '.openclaw/workspace/.credentials/aiadelaide-lead-sheet-service-account.json'
ADELAIDE = ZoneInfo('Australia/Adelaide')
HEADERS = json.loads((ROOT / 'lib/lead-sheet-columns.json').read_text())


def date_value(value):
    if value in ('', None):
        return None
    try:
        if isinstance(value, (int, float)):
            return datetime(1899, 12, 30, tzinfo=timezone.utc) + timedelta(days=value)
        parsed = datetime.fromisoformat(str(value).replace('Z', '+00:00'))
        return parsed.replace(tzinfo=timezone.utc) if parsed.tzinfo is None else parsed.astimezone(timezone.utc)
    except (ValueError, TypeError, OverflowError):
        return None


def summarize_rows(values, now):
    if not values or values[0] != HEADERS:
        raise ValueError('header_mismatch')
    stages = {x: 0 for x in ['New', 'Qualified', 'Quoted', 'Won', 'Lost', 'Spam', 'Unclassified']}
    action_rows, records, tests, invalid_flags, amounts = [], [], 0, [], []
    invalid_dates, missing_received, missing_cash = [], [], 0
    for number, supplied in enumerate(values[1:], start=6):
        if not any(x not in ('', None) for x in supplied):
            continue
        row = (supplied + [''] * len(HEADERS))[:len(HEADERS)]
        flag = str(row[22]).strip().lower()
        if flag == 'yes':
            tests += 1
            continue
        if flag != 'no':
            invalid_flags.append(number)
            action_rows.append({'row': number, 'reasons': ['test_classification_missing_or_invalid']})
            continue  # Unknown test classification cannot enter commercial totals.
        records.append(row)
        stage = row[7] if row[7] in stages else 'Unclassified'
        stages[stage] += 1
        received = date_value(row[0])
        if received is None:
            missing_received.append(number)
        followup = date_value(row[9])
        if row[9] not in ('', None) and followup is None:
            invalid_dates.append(number)
        reasons = []
        if stage in ('New', 'Unclassified'):
            reasons.append('needs_triage')
        if stage not in ('Won', 'Lost', 'Spam'):
            followup_day = (followup.date() if isinstance(row[9], (int, float)) or len(str(row[9])) == 10
                            else followup.astimezone(ADELAIDE).date()) if followup else None
            if followup_day and followup_day <= now.astimezone(ADELAIDE).date():
                reasons.append('followup_due')
            if stage in ('Qualified', 'Quoted') and (not row[8] or not followup):
                reasons.append('next_action_or_date_missing')
        if number in missing_received:
            reasons.append('received_date_missing_or_invalid')
        if number in invalid_dates:
            reasons.append('followup_date_invalid')
        if reasons:
            action_rows.append({'row': number, 'reasons': reasons})
        if stage != 'Spam' and row[13] not in ('', None):
            value = row[13]
            amounts.append(float(value) if isinstance(value, (int, float)) and not isinstance(value, bool) and math.isfinite(value) else None)
        elif stage != 'Spam':
            missing_cash += 1
    new7 = sum(1 for r in records if r[7] != 'Spam' and date_value(r[0]) and now - timedelta(days=7) <= date_value(r[0]) <= now)
    valid_amounts = [x for x in amounts if x is not None]
    return {
        'status': 'read_verified', 'scope': 'Contact, Tradie SEO and submitted AI-readiness requests only; not all business revenue',
        'nonTestRecords': None if invalid_flags else len(records), 'knownNonTestRecords': len(records),
        'testRecordsExcluded': tests, 'stagesKnownRecords': stages,
        'nonSpamRecordsCreatedLast7Days': None if invalid_flags or missing_received else new7, 'actionRows': action_rows,
        'unclassifiedTestFlagRowsExcluded': invalid_flags, 'invalidFollowupDateRows': invalid_dates,
        'invalidReceivedDateRows': missing_received,
        'enteredCashSubtotalAUD': round(sum(valid_amounts), 2) if valid_amounts else None,
        'cashAmountEntryCount': len(amounts), 'invalidCashAmountCount': amounts.count(None), 'missingCashAmountCount': missing_cash,
        'cashCompleteForKnownRecords': not (missing_cash or None in amounts or invalid_flags),
        'needsDataReview': bool(invalid_flags or missing_received or invalid_dates or None in amounts),
        'limitations': ['Cash is manually reported, not bank-verified.', 'Blank cash values mean unknown, not zero.',
                        'Won dates and payment dates are not recorded; current stages cannot prove wins or cash this week.'],
    }


def sheet_check(now):
    credentials = service_account.Credentials.from_service_account_file(
        KEY, scopes=['https://www.googleapis.com/auth/spreadsheets.readonly'])
    session = AuthorizedSession(credentials)
    response = session.get(f'https://sheets.googleapis.com/v4/spreadsheets/{SHEET_ID}/values/Enquiries!A5:W',
                           params={'valueRenderOption': 'UNFORMATTED_VALUE'}, timeout=25)
    if not response.ok:
        return {'status': 'unavailable', 'httpStatus': response.status_code}
    return summarize_rows(response.json().get('values', []), now)


class PageFacts(HTMLParser):
    def __init__(self):
        super().__init__()
        self.h1 = 0
        self.canonical = []
        self.noindex = False

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == 'h1':
            self.h1 += 1
        if tag == 'link' and a.get('rel') == 'canonical':
            self.canonical.append(a.get('href'))
        if tag == 'meta' and a.get('name', '').lower() in ('robots', 'googlebot'):
            self.noindex |= 'noindex' in a.get('content', '').lower()


def health_check():
    results = []
    for route in ['/', '/contact', '/website-design-adelaide', '/seo-for-tradies-adelaide',
                  '/websites-for-electricians-adelaide', '/robots.txt', '/sitemap.xml']:
        url = 'https://aiadelaide.com.au' + route
        try:
            r = requests.get(url, headers={'User-Agent': 'AIAdelaide-ReadOnlyHealth/1.0', 'Cache-Control': 'no-cache'}, timeout=15)
            item = {'route': route, 'httpStatus': r.status_code, 'finalUrl': r.url, 'ok': r.status_code == 200}
            if route.endswith(('.txt', '.xml')):
                if route.endswith('.txt'):
                    robot = RobotFileParser(); robot.parse(r.text.splitlines())
                    targets = ['/', '/contact', '/website-design-adelaide', '/seo-for-tradies-adelaide',
                               '/websites-for-electricians-adelaide', '/_next/static/chunks/main.js']
                    blocked = [target for target in targets if not robot.can_fetch('Googlebot', 'https://aiadelaide.com.au' + target)]
                    item['googlebotBlockedPaths'] = blocked
                    item['ok'] &= 'user-agent:' in r.text.lower() and not blocked
                else:
                    item['ok'] &= '<urlset' in r.text
            else:
                page = PageFacts(); page.feed(r.text)
                expected = url.rstrip('/')
                canonical_ok = len(page.canonical) == 1 and (page.canonical[0] or '').rstrip('/') == expected
                item.update(h1Count=page.h1, canonicalMatches=canonical_ok, noindex=page.noindex)
                item['ok'] &= page.h1 == 1 and canonical_ok and not page.noindex and 'noindex' not in r.headers.get('X-Robots-Tag', '').lower()
            results.append(item)
        except requests.RequestException:
            results.append({'route': route, 'ok': False, 'status': 'request_failed'})
    return {'checks': results, 'ok': all(x['ok'] for x in results),
            'limits': 'Read-only HTTP checks do not prove browser rendering, indexing or notification delivery.'}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--health', action='store_true', help='Also perform website HTTP checks')
    args = parser.parse_args()
    now = datetime.now(timezone.utc)
    result = {'checkedAt': now.isoformat(), 'timezone': 'Australia/Adelaide'}
    try:
        result['register'] = sheet_check(now)
    except ValueError as error:
        result['register'] = {'status': 'header_mismatch' if str(error) == 'header_mismatch' else 'unavailable'}
    except Exception:
        result['register'] = {'status': 'unavailable'}  # Never expose provider responses or secrets.
    if args.health:
        result['website'] = health_check()
    print(json.dumps(result, indent=2))
    return 0 if result['register']['status'] == 'read_verified' and not result['register'].get('needsDataReview') and result.get('website', {}).get('ok', True) else 1


if __name__ == '__main__':
    raise SystemExit(main())
