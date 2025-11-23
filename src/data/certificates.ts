export interface Certificate {
  id: number;
  title: string;
  organization: string;
  date: string;
  badge: string;
  url: string;
}

export const certificates: Certificate[] = [
  {
    id: 1,
    title: 'Cloud Technical Series - AI Agents',
    organization: 'Google Cloud Asia Pacific',
    date: '2025/08',
    badge: '/images/certifications/google-cloud-ai-agents-edition-badge.png',
    url: 'https://www.credential.net/85e68b53-d7a4-4b49-9fe3-c13de21c692e'
  },
  {
    id: 2,
    title: 'Google Cloud 數位人才探索計畫',
    organization: 'Google Cloud Skills Boost',
    date: '2025/08',
    badge: '/images/certifications/google-cloud-digital-education-badge.png',
    url: 'https://www.skills.google/public_profiles/a19a470f-44e0-4401-a170-7bc837cbd157'
  },
  {
    id: 3,
    title: 'Enterprise Big Data Analyst',
    organization: 'APMG International',
    date: '2024/03',
    badge: '/images/certifications/apmg-ebda-badge.png',
    url: 'https://www.credly.com/badges/bcdd6e79-a45e-4a55-8d1f-1c5fe46606d3'
  },
  {
    id: 4,
    title: 'Enterprise Big Data Professional',
    organization: 'APMG International',
    date: '2024/01',
    badge: '/images/certifications/apmg-ebdp-badge.png',
    url: 'https://www.credly.com/badges/52a05922-95de-412f-b692-770c0c23f9d7'
  }
];
