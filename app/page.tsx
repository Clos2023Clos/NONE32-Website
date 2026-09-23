import type { Metadata } from 'next';
import EnglishHomePage from './en/page';

export const metadata: Metadata = {
  title: 'Dentist in Tijuana for U.S. Patients',
  description:
    'NONE32 is a bilingual dental clinic in Tijuana, Baja California serving local and U.S. patients with dental implants, full-arch rehabilitation, crowns, veneers and general dentistry.',
  alternates: {
    canonical: 'https://www.none32.com/'
  },
  openGraph: {
    title: 'NONE32 | Dental Clinic in Tijuana, Mexico',
    description:
      'Bilingual dental care in Tijuana for local and U.S. patients, including implants, crowns, veneers, full-arch rehabilitation and general dentistry.',
    url: 'https://www.none32.com/',
    type: 'website'
  }
};

export default EnglishHomePage;
