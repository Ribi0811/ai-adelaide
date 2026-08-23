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
  trade: 'Measure missed calls, qualified website enquiries and quote follow-up from your current baseline. Value depends on lead volume, average job, close rate and response process.',
  'allied-health': 'Measure completed bookings, no-shows, waitlist fills and qualified patient enquiries from the clinic\u2019s current baseline.',
  hospitality: 'Measure direct bookings, menu views, calls and direction requests. Compare the owned journey with platform fees using real transaction data.',
  retail: 'Measure calls, direction requests, product enquiries and tracked in-store actions rather than applying an invented walk-in uplift.',
  beauty: 'Measure completed online bookings, booking abandonment and relevant local-search enquiries before and after the work.',
  default: 'Establish the current enquiry, booking and search baseline first, then judge the work against measurable business outcomes.',
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
    solution: 'We build a focused website with a clear mobile enquiry path, click-to-call, forms, crawlable content and appropriate search foundations. The finished pages are tested before launch and you own the site.',
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
    monthlyCost: 'Included in website + from $199/mo for follow-up',
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
