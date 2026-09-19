import importlib.util
from pathlib import Path
from datetime import datetime, timezone
import unittest
from unittest.mock import patch

spec = importlib.util.spec_from_file_location('growth_ops', Path(__file__).resolve().parents[1] / 'growth_ops.py')
ops = importlib.util.module_from_spec(spec)
spec.loader.exec_module(ops)


class GrowthOpsTests(unittest.TestCase):
    now = datetime(2026, 9, 6, 5, 0, tzinfo=timezone.utc)

    def row(self, **changes):
        row = [''] * 23
        row[0], row[7], row[15], row[22] = '2026-09-05T12:00:00Z', 'New', 'synthetic-unit-test', 'No'
        for index, value in changes.items():
            row[int(index)] = value
        return row

    def summary(self, *rows):
        return ops.summarize_rows([ops.HEADERS, *rows], self.now)

    def test_tests_excluded_and_unknown_classification_is_not_zero(self):
        d = self.summary(self.row(**{'22': 'Yes'}), self.row(**{'22': ''}))
        self.assertEqual(d['testRecordsExcluded'], 1)
        self.assertIsNone(d['nonTestRecords'])
        self.assertIsNone(d['nonSpamRecordsCreatedLast7Days'])
        self.assertTrue(d['needsDataReview'])
        self.assertEqual(d['actionRows'][0]['row'], 7)

    def test_invalid_received_date_makes_period_unknown(self):
        d = self.summary(self.row(**{'0': 'not a date'}))
        self.assertEqual(d['nonTestRecords'], 1)
        self.assertIsNone(d['nonSpamRecordsCreatedLast7Days'])
        self.assertIn('received_date_missing_or_invalid', d['actionRows'][0]['reasons'])

    def test_cash_is_only_entered_subtotal_and_blanks_are_disclosed(self):
        d = self.summary(self.row(**{'13': 100}), self.row(), self.row(**{'13': 9000, '22': 'Yes'}))
        self.assertEqual(d['enteredCashSubtotalAUD'], 100)
        self.assertEqual(d['missingCashAmountCount'], 1)
        self.assertFalse(d['cashCompleteForKnownRecords'])

    def test_future_adelaide_followup_is_not_due_a_day_early(self):
        for value in ['2026-09-07T00:00:00+09:30', '2026-09-07']:
            d = self.summary(self.row(**{'7': 'Qualified', '8': 'Call', '9': value}))
            self.assertEqual(d['actionRows'], [])

    def test_invalid_cash_is_unknown_but_explicit_zero_is_zero(self):
        d = self.summary(self.row(**{'13': 'unparseable'}))
        self.assertIsNone(d['enteredCashSubtotalAUD'])
        self.assertTrue(d['needsDataReview'])
        self.assertEqual(self.summary(self.row(**{'13': 0}))['enteredCashSubtotalAUD'], 0)

    def test_reordered_headers_fail_closed(self):
        with self.assertRaisesRegex(ValueError, 'header_mismatch'):
            ops.summarize_rows([list(reversed(ops.HEADERS))], self.now)

    def test_googlebot_blocking_is_a_health_failure(self):
        class Response:
            status_code = 200
            headers = {}
            def __init__(self, url):
                self.url = url
                self.text = ('User-Agent: *\nDisallow: /' if url.endswith('robots.txt') else
                             '<urlset></urlset>' if url.endswith('.xml') else
                             f'<h1>Test</h1><link rel="canonical" href="{url}">')
        with patch.object(ops.requests, 'get', side_effect=lambda url, **kw: Response(url)):
            d = ops.health_check()
        self.assertFalse(d['ok'])
        robots = next(x for x in d['checks'] if x['route'] == '/robots.txt')
        self.assertIn('/_next/static/chunks/main.js', robots['googlebotBlockedPaths'])


if __name__ == '__main__':
    unittest.main()
