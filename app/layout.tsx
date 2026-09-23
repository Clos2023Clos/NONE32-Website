import type { Metadata } from 'next';
import { Bodoni_Moda, Montserrat } from 'next/font/google';
import './globals.css';
import './hero-selected.css';

const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600']
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700']
});

export const metadata: Metadata = {
  metadataBase: new URL('https://none32.com'),
  title: {
    default: 'NONE32 | Dental Clinic in Tijuana, Mexico',
    template: '%s | NONE32'
  },
  description:
    'NONE32 is a bilingual dental clinic in Tijuana, Baja California serving local and U.S. patients with dental implants, restorative, cosmetic and general dental care.',
  applicationName: 'NONE32',
  alternates: {
    canonical: 'https://none32.com/'
  },
  openGraph: {
    type: 'website',
    siteName: 'NONE32',
    locale: 'en_US',
    url: 'https://none32.com/',
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
  return (
    <html lang="en" className={`${bodoni.variable} ${montserrat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
