export type AuditCategory = 'website' | 'seo-visibility' | 'lead-capture' | 'automation-admin' | 'business-profile';

export type AuditOption = {
  label: string;
  value: string;
  points: number;
};

export type AuditQuestion = {
  id: string;
  category: AuditCategory;
  categoryLabel: string;
  text: string;
  options: AuditOption[];
  scored: boolean;
};

export const AUDIT_QUESTIONS: AuditQuestion[] = [
  {
    id: 'q1',
    category: 'website',
    categoryLabel: 'Website',
    text: 'Do you have a professional website for your business?',
    scored: true,
    options: [
      { label: 'No website at all', value: 'none', points: 5 },
      { label: 'Facebook page only', value: 'fb-only', points: 10 },
      { label: 'Outdated / embarrassing site', value: 'outdated', points: 15 },
      { label: 'Decent but not mobile-first', value: 'decent', points: 20 },
      { label: 'Modern, fast, mobile-first, converting well', value: 'modern', points: 25 },
    ],
  },
  {
    id: 'q2',
    category: 'website',
    categoryLabel: 'Website',
    text: 'How fast does your website load on a mobile phone?',
    scored: true,
    options: [
      { label: 'Haven\u2019t checked / no idea', value: 'no-idea', points: 5 },
      { label: '5+ seconds (most people leave)', value: 'slow', points: 10 },
      { label: '3-5 seconds', value: 'medium', points: 15 },
      { label: '1-2 seconds', value: 'fast', points: 20 },
      { label: 'Under 1 second', value: 'instant', points: 25 },
    ],
  },
  {
    id: 'q3',
    category: 'seo-visibility',
    categoryLabel: 'SEO & Google Visibility',
    text: 'When customers in your service area search Google for your main service, do you show up?',
    scored: true,
    options: [
      { label: 'No, I\u2019m invisible', value: 'invisible', points: 5 },
      { label: 'Sometimes, deep on page 2-3', value: 'deep', points: 10 },
      { label: 'Page 2 for my main keywords', value: 'page2', points: 15 },
      { label: 'Page 1 for some keywords', value: 'page1-partial', points: 20 },
      { label: 'Page 1 across my main services and suburbs', value: 'page1-strong', points: 25 },
    ],
  },
  {
    id: 'q4',
    category: 'seo-visibility',
    categoryLabel: 'SEO & Google Visibility',
    text: 'How is your Google Business Profile set up?',
    scored: true,
    options: [
      { label: 'I don\u2019t have one', value: 'none', points: 5 },
      { label: 'Claimed but mostly empty', value: 'empty', points: 10 },
      { label: 'Basic info only', value: 'basic', points: 15 },
      { label: 'Photos, hours, services filled in', value: 'good', points: 20 },
      { label: 'Fully optimised with regular posts and reviews', value: 'optimised', points: 25 },
    ],
  },
  {
    id: 'q5',
    category: 'lead-capture',
    categoryLabel: 'Lead Capture',
    text: 'How do most new customers find and contact you?',
    scored: true,
    options: [
      { label: 'Word-of-mouth / referrals only', value: 'wom', points: 5 },
      { label: 'They call but I miss a lot of calls', value: 'missed-calls', points: 10 },
      { label: 'They call or email and wait for a callback', value: 'manual', points: 15 },
      { label: 'They book online or fill a form', value: 'online', points: 20 },
      { label: 'Multiple channels: form, booking, phone, AI, all tracked', value: 'multi', points: 25 },
    ],
  },
  {
    id: 'q6',
    category: 'lead-capture',
    categoryLabel: 'Lead Capture',
    text: 'How quickly do you respond to a new enquiry?',
    scored: true,
    options: [
      { label: 'Days later (or never)', value: 'days', points: 5 },
      { label: 'Same day, a few hours', value: 'hours', points: 10 },
      { label: 'Within an hour', value: 'within-hour', points: 15 },
      { label: 'Within 15 minutes', value: 'within-15', points: 20 },
      { label: 'Instant (auto-reply, AI, or always-on)', value: 'instant', points: 25 },
    ],
  },
  {
    id: 'q7',
    category: 'automation-admin',
    categoryLabel: 'Automation & Admin',
    text: 'How much time per week do you (or your team) spend on admin that could be automated?',
    scored: true,
    options: [
      { label: '10+ hours', value: '10-plus', points: 5 },
      { label: '5-10 hours', value: '5-10', points: 10 },
      { label: '2-5 hours', value: '2-5', points: 15 },
      { label: '1-2 hours', value: '1-2', points: 20 },
      { label: 'Under 1 hour (already automated)', value: 'under-1', points: 25 },
    ],
  },
  {
    id: 'q8',
    category: 'automation-admin',
    categoryLabel: 'Automation & Admin',
    text: 'How do you currently handle after-hours enquiries?',
    scored: true,
    options: [
      { label: 'They go to voicemail / nothing', value: 'nothing', points: 5 },
      { label: 'I check messages in the morning', value: 'morning', points: 10 },
      { label: 'Personal mobile forwards to me', value: 'mobile', points: 15 },
      { label: 'Someone on the team covers', value: 'team', points: 20 },
      { label: 'Automated system replies + books + texts me a summary', value: 'auto', points: 25 },
    ],
  },
  {
    id: 'q9',
    category: 'business-profile',
    categoryLabel: 'Business Profile',
    text: 'What type of business do you run?',
    scored: false,
    options: [
      { label: 'Trade (plumber, electrician, builder, etc.)', value: 'trade', points: 12 },
      { label: 'Allied Health (physio, chiro, dentist, etc.)', value: 'allied-health', points: 12 },
      { label: 'Retail', value: 'retail', points: 12 },
      { label: 'Hospitality / Cafe / Restaurant', value: 'hospitality', points: 12 },
      { label: 'Professional Services', value: 'professional-services', points: 12 },
      { label: 'Beauty / Hair / Wellness', value: 'beauty', points: 12 },
      { label: 'Other', value: 'other', points: 12 },
    ],
  },
  {
    id: 'q10',
    category: 'business-profile',
    categoryLabel: 'Business Profile',
    text: 'How many staff including yourself?',
    scored: true,
    options: [
      { label: 'Just me', value: 'just-me', points: 8 },
      { label: '2-5', value: '2-5', points: 12 },
      { label: '6-20', value: '6-20', points: 18 },
      { label: '20+', value: '20-plus', points: 25 },
    ],
  },
];

export const AUDIT_STORAGE_KEY = 'aiadel\u2026s_v2';
export const AUDIT_EMAIL_KEY = 'aiadel\u2026l_v2';
