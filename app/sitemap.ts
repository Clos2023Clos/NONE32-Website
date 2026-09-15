import type { MetadataRoute } from 'next';

const base = 'https://www.none32.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const en = [
    '',
    '/dental-implants-tijuana',
    '/all-on-4-tijuana',
    '/crowns-tijuana',
    '/veneers-tijuana',
    '/general-dentistry-tijuana',
    '/dentist-for-us-patients',
    '/dentist-near-san-diego',
    '/ppo-dental-reimbursement',
    '/about-none32',
    '/faq',
    '/contact',
  ];

  const now = new Date();

  return [
    ...en.map((path) => ({
      url: `${base}/en${path || '/'}`,
      lastModified: now,
      changeFrequency: path === '' ? ('weekly' as const) : ('monthly' as const),
      priority: path === '' ? 1 : 0.8,
    })),
    {
      url: `${base}/es/`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ];
}
