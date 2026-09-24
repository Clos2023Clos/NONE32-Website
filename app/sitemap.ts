import type { MetadataRoute } from 'next';
import { treatmentSlugs } from '@/lib/treatments';

const base = 'https://none32.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: `${base}/`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    ...treatmentSlugs.map((slug) => ({
      url: `${base}/treatments/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
    {
      url: `${base}/partners`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${base}/privacy`,
      lastModified: now,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ];
}
