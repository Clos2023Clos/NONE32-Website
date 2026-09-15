import type { Metadata } from 'next';
import './globals.css';
import './visual-fallbacks.css';
import './polish.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.none32.com'),
  title: {
    default: 'NONE32 | Dental Clinic in Tijuana, Mexico',
    template: '%s | NONE32'
  },
  description:
    'NONE32 is a bilingual dental clinic in Tijuana, Baja California serving local and U.S. patients with dental implants, restorative, cosmetic and general dental care.',
  applicationName: 'NONE32',
  alternates: {
    canonical: 'https://www.none32.com/en/',
    languages: {
      'en-US': 'https://www.none32.com/en/',
      'es-MX': 'https://www.none32.com/es/',
      'x-default': 'https://www.none32.com/en/'
    }
  },
  openGraph: {
    type: 'website',
    siteName: 'NONE32',
    locale: 'en_US',
    alternateLocale: ['es_MX'],
    url: 'https://www.none32.com/en/',
    title: 'NONE32 | Dental Clinic in Tijuana, Mexico',
    description:
      'Bilingual dental care in Tijuana for local and U.S. patients, including implants, crowns, veneers, full-arch rehabilitation and general dentistry.'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NONE32 | Dental Clinic in Tijuana, Mexico',
    description: 'Bilingual dental care in Tijuana for local and U.S. patients.'
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
