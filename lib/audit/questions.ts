export type AuditCategory = 'communication' | 'lead-management' | 'booking-admin' | 'business-profile';

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
    category: 'communication',
    categoryLabel: 'Communication',
    text: 'When you\'re on a job or with a client, how often do you miss incoming calls?',
    scored: true,
    options: [
      { label: 'Always', value: 'always', points: 5 },
      { label: 'Often', value: 'often', points: 10 },
      { label: 'Sometimes', value: 'sometimes', points: 15 },
      { label: 'Rarely', value: 'rarely', points: 20 },
      { label: 'Never', value: 'never', points: 25 },
    ],
  },
  {
    id: 'q2',
    category: 'communication',
    categoryLabel: 'Communication',
    text: 'What percentage of missed calls result in a booked job?',
    scored: true,
    options: [
      { label: '0-20%', value: '0-20', points: 5 },
      { label: '20-40%', value: '20-40', points: 10 },
      { label: '40-60%', value: '40-60', points: 15 },
      { label: '60-80%', value: '60-80', points: 20 },
      { label: '80-100%', value: '80-100', points: 25 },
    ],
  },
  {
    id: 'q3',
    category: 'communication',
    categoryLabel: 'Communication',
    text: 'How do you currently handle after-hours enquiries?',
    scored: true,
    options: [
      { label: "Don't answer", value: 'dont-answer', points: 5 },
      { label: 'Voicemail', value: 'voicemail', points: 10 },
      { label: 'Personal mobile', value: 'personal-mobile', points: 15 },
      { label: 'Someone else answers', value: 'someone-else', points: 20 },
      { label: 'AI or tracked system', value: 'ai-system', points: 25 },
    ],
  },
  {
    id: 'q4',
    category: 'lead-management',
    categoryLabel: 'Lead Management',
    text: "When you quote a job, how often do you follow up if the customer doesn't respond?",
    scored: true,
    options: [
      { label: 'Never', value: 'never', points: 5 },
      { label: 'Rarely', value: 'rarely', points: 10 },
      { label: 'Sometimes', value: 'sometimes', points: 15 },
      { label: 'Usually', value: 'usually', points: 20 },
      { label: 'Always, systematically', value: 'always-system', points: 25 },
    ],
  },
  {
    id: 'q5',
    category: 'lead-management',
    categoryLabel: 'Lead Management',
    text: 'Do you have a system to track which leads converted and which went cold?',
    scored: true,
    options: [
      { label: 'No idea', value: 'no-idea', points: 5 },
      { label: 'Mental notes', value: 'mental-notes', points: 10 },
      { label: 'Spreadsheet', value: 'spreadsheet', points: 15 },
      { label: 'Basic CRM', value: 'basic-crm', points: 20 },
      { label: 'Full CRM with automation', value: 'full-crm', points: 25 },
    ],
  },
  {
    id: 'q6',
    category: 'lead-management',
    categoryLabel: 'Lead Management',
    text: 'How long does it typically take you to respond to a new enquiry?',
    scored: true,
    options: [
      { label: 'Week+', value: 'week-plus', points: 5 },
      { label: '2-3 days', value: '2-3-days', points: 10 },
      { label: 'Next day', value: 'next-day', points: 15 },
      { label: 'Same day', value: 'same-day', points: 20 },
      { label: 'Within 1 hour', value: 'within-hour', points: 25 },
    ],
  },
  {
    id: 'q7',
    category: 'booking-admin',
    categoryLabel: 'Booking & Admin',
    text: 'How do customers currently book with you?',
    scored: true,
    options: [
      { label: 'Phone only', value: 'phone-only', points: 5 },
      { label: 'Phone + text', value: 'phone-text', points: 10 },
      { label: 'Online form', value: 'online-form', points: 15 },
      { label: 'Online calendar', value: 'online-calendar', points: 20 },
      { label: 'Automated booking system', value: 'automated-booking', points: 25 },
    ],
  },
  {
    id: 'q8',
    category: 'booking-admin',
    categoryLabel: 'Booking & Admin',
    text: 'How much time per week do you spend on admin that could be automated?',
    scored: true,
    options: [
      { label: '10+ hours', value: '10-plus', points: 5 },
      { label: '5-10 hours', value: '5-10', points: 10 },
      { label: '2-5 hours', value: '2-5', points: 15 },
      { label: '1-2 hours', value: '1-2', points: 20 },
      { label: 'Under 1 hour', value: 'under-1', points: 25 },
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
      { label: 'Hospitality', value: 'hospitality', points: 12 },
      { label: 'Professional Services', value: 'professional-services', points: 12 },
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

export const AUDIT_STORAGE_KEY = 'aiadelaide_audit_answers_v1';
export const AUDIT_EMAIL_KEY = 'aiadelaide_audit_email_v1';
