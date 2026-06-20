import type { AuditAnswers, AuditScoreResult } from './scoring';

export type AuditRecommendation = {
  title: string;
  summary: string;
  problem: string;
  solution: string;
  roiEstimate: string;
  complexity: 'Easy' | 'Medium' | 'Advanced';
  monthlyCost: string;
  categoryKey: string;
};

const ROI_TEXT_BY_BUSINESS: Record<string, string> = {
  trade: 'Plumbers and electricians typically recover 3-5 extra jobs a week with proper website, local SEO, and missed-call capture \u2014 that\u2019s $1,000-2,000/week in new revenue against a $399-699/month stack.',
  'allied-health': 'Allied health clinics typically cut no-shows by 30-65% and add 2-3 new patients/week with better online booking and SEO \u2014 worth $2,000-5,000/month in recovered revenue.',
  hospitality: 'Cafes and restaurants typically see 20-40% more direct bookings within 90 days of a proper website plus local SEO \u2014 vs paying 15-20% commissions to delivery platforms.',
  retail: 'Retail shops typically see a 25-50% lift in walk-in traffic from local search within 3 months of getting a proper website and Google Business Profile optimised.',
  beauty: 'Beauty salons and hairdressers typically see 30-50% more online bookings within 60 days of a website with online booking plus local SEO.',
  default: 'Most Adelaide small businesses see measurable improvements in enquiries and bookings within 30-90 days of a focused website + SEO + lead capture stack.',
};

function roiTextFromAnswers(answers: AuditAnswers): string {
  if (answers.q9 === 'trade') return ROI_TEXT_BY_BUSINESS.trade;
  if (answers.q9 === 'allied-health') return ROI_TEXT_BY_BUSINESS['allied-health'];
  if (answers.q9 === 'hospitality') return ROI_TEXT_BY_BUSINESS.hospitality;
  if (answers.q9 === 'retail') return ROI_TEXT_BY_BUSINESS.retail;
  if (answers.q9 === 'beauty') return ROI_TEXT_BY_BUSINESS.beauty;
  return ROI_TEXT_BY_BUSINESS.default;
}

const recommendationMap: Record<string, Omit<AuditRecommendation, 'roiEstimate'>> = {
  website: {
    categoryKey: 'website',
    title: 'Build a website that actually converts',
    summary: 'Get a fast, mobile-first, Google-ready website \u2014 built for your industry and your service area. Live in 48 hours from $699.',
    problem: 'Your website (or lack of one) is costing you customers before they even contact you. Slow load times, no mobile optimisation, no clear call-to-action.',
    solution: 'We build you a custom website: mobile-first, loads in under 2 seconds, click-to-call, contact forms, Google-ready SEO, suburb pages. Live in 48 hours. You own it.',
    complexity: 'Easy',
    monthlyCost: '$699 setup + $29-99/mo hosting',
  },
  'seo-visibility': {
    categoryKey: 'seo-visibility',
    title: 'Rank on Google for your main services and suburbs',
    summary: 'Get found by Adelaide customers actively searching for what you do. Suburb pages, Google Business Profile, content, citations.',
    problem: 'You\u2019re invisible on Google. Customers searching for your service in your service area are calling your competitors instead.',
    solution: 'Local SEO retainer: keyword research, suburb targeting pages, Google Business Profile optimisation, citations, monthly blog content, rank tracking. From $399/month.',
    complexity: 'Medium',
    monthlyCost: '$399-699/mo',
  },
  'lead-capture': {
    categoryKey: 'lead-capture',
    title: 'Capture every enquiry, 24/7',
    summary: 'Online booking, contact forms, instant SMS replies, and a system that follows up automatically so leads don\u2019t go cold.',
    problem: 'You\u2019re losing leads to slow response times, missed calls, and no systematic follow-up. Customers move on quickly.',
    solution: 'Online booking integration, contact forms with auto-replies, lead-capture forms, quote follow-up sequences, instant SMS confirmations. All built into your website.',
    complexity: 'Easy',
    monthlyCost: 'Included in website + $99-199/mo for follow-up',
  },
  'automation-admin': {
    categoryKey: 'automation-admin',
    title: 'Automate the admin that\u2019s eating your evenings',
    summary: 'After-hours call handling, missed call text-back, appointment reminders, review requests, quote follow-ups \u2014 all running in the background.',
    problem: 'You\u2019re spending 5-10 hours a week on admin that could be automated. Missed calls, slow follow-ups, no reminders, no reviews.',
    solution: 'AI receptionist for 24/7 call handling, missed call text-back, appointment reminders via SMS/email, review request automation, quote follow-up sequences. From $199/month.',
    complexity: 'Medium',
    monthlyCost: '$199-499/mo',
  },
  'business-profile': {
    categoryKey: 'business-profile',
    title: 'Build a system that scales with your team',
    summary: 'As your team grows, your digital systems should keep pace \u2014 not break. Role-based routing, shared inboxes, automated handovers.',
    problem: 'Manual processes break as you hire. Response time drops, leads fall through cracks, team members duplicate work.',
    solution: 'Role-based lead routing, shared inbox, automated handovers, response templates, performance dashboards. We configure it for your current team size and growth path.',
    complexity: 'Advanced',
    monthlyCost: '$399-799/mo',
  },
};

export function getRecommendations(scoreResult: AuditScoreResult, answers: AuditAnswers): AuditRecommendation[] {
  const roiEstimate = roiTextFromAnswers(answers);
  const sortedLowest = [...scoreResult.categoryScores].sort((a, b) => a.score - b.score).slice(0, 3);

  return sortedLowest.map((category) => {
    const template = recommendationMap[category.key] ?? recommendationMap['business-profile'];
    return {
      ...template,
      roiEstimate,
    };
  });
}
