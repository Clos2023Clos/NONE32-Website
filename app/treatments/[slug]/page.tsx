import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { TreatmentPage } from '@/components/TreatmentPage';
import { treatmentPages, treatmentSlugs } from '@/lib/treatments';

export function generateStaticParams() {
  return treatmentSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const data = treatmentPages[slug];
  if (!data) return {};
  const url = `https://none32.com/treatments/${data.slug}`;
  return {
    title: data.title,
    description: data.seoDescription,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title: `${data.title} | NONE32`,
      description: data.seoDescription,
      siteName: 'NONE32',
      locale: 'en_US'
    },
    twitter: {
      card: 'summary_large_image',
      title: `${data.title} | NONE32`,
      description: data.seoDescription
    }
  };
}

export default async function TreatmentRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = treatmentPages[slug];
  if (!data) notFound();
  return <TreatmentPage data={data} />;
}
