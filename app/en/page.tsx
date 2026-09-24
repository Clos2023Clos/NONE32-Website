import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { ClinicPhoto } from '@/components/ClinicPhoto';
import heroSrc from '@/lib/hero-live';

export const metadata: Metadata = {
  title: 'Dentist in Tijuana for U.S. Patients',
  description:
    'NONE32 is a bilingual dental clinic in Tijuana, Baja California serving local and U.S. patients with dental implants, full-arch rehabilitation, crowns, veneers and general dentistry.',
  alternates: {
    canonical: 'https://none32.com/'
  }
};

const whatsapp =
  'https://wa.me/526648816589?text=Hello%20NONE32%2C%20I%27d%20like%20to%20schedule%20a%20consultation.';

const treatments = [
  ['01', 'Dental implants'],
  ['02', 'All-on-4 / full arch'],
  ['03', 'Crowns & restorations'],
  ['04', 'Veneers & smile design'],
  ['05', 'General dentistry']
] as const;

const clinicSchema = {
  '@context': 'https://schema.org',
  '@type': ['Dentist', 'LocalBusiness'],
  name: 'NONE32',
  url: 'https://none32.com/',
  telephone: '+52-664-881-6589',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Leona Vicario 1452, Interior 21B',
    addressLocality: 'Tijuana',
    addressRegion: 'Baja California',
    postalCode: '22010',
    addressCountry: 'MX'
  },
  areaServed: ['Tijuana', 'San Diego County', 'Southern California'],
  availableLanguage: ['English', 'Spanish'],
  medicalSpecialty: 'Dentistry'
};

export default function EnglishHomePage() {
  return (
    <main className="editorial-site">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }}
      />

      <section id="home" className="hero" aria-labelledby="home-title">
        <SiteHeader />
        <img
          src={heroSrc}
          alt="NONE32 editorial brand portrait"
          className="hero-image hero-image-selected"
          fetchPriority="high"
          decoding="async"
        />
        <div className="hero-overlay" />
        <div className="hero-copy">
          <p className="kicker">PREMIUM DENTAL CARE · TIJUANA</p>
          <h1 id="home-title">More than<br />a <em>smile.</em></h1>
          <p className="hero-points">HEALTH · AESTHETICS · CONFIDENCE.</p>
          <p className="hero-description">Bilingual dental care in Zona Río for local patients and patients traveling from the United States.</p>
          <div className="button-row">
            <a className="button button-gold" href={whatsapp}>Book your appointment <span>→</span></a>
            <a className="button button-clear" href="#clinic">See the clinic</a>
          </div>
          <div className="signature">WE GET IT.<br />WE GOT YOU.</div>
        </div>
        <div className="hero-location">
          <span>TIJUANA, MX</span>
          <span>U.S. PATIENTS WELCOME</span>
        </div>
      </section>

      <section id="treatments" className="treatment-band" aria-labelledby="treatment-title">
        <div className="treatment-band-label" id="treatment-title">TREATMENTS</div>
        <div className="treatment-items">
          {treatments.map(([number, label]) => (
            <a
              key={label}
              href={`https://wa.me/526648816589?text=${encodeURIComponent(`Hello NONE32, I'd like information about ${label}.`)}`}
              className="treatment-item"
            >
              <span>{number}</span>
              <strong>{label}</strong>
              <b>↗</b>
            </a>
          ))}
        </div>
      </section>

      <section id="clinic" className="clinic-grid">
        <div className="clinic-copy">
          <p className="kicker gold">OUR CLINIC · ZONA RÍO</p>
          <h2>A space for<br />your well-being.</h2>
          <p>Personalized care, modern treatment planning and a contemporary environment in Tijuana. The clinic photography shown here is our actual space.</p>
          <a className="text-link dark-link" href={whatsapp}>Plan your first visit <span>→</span></a>
        </div>
        <div className="clinic-photo">
          <ClinicPhoto />
          <div className="clinic-photo-overlay" />
        </div>
        <div className="clinic-statement">
          <span>REAL SPACE.<br />BILINGUAL CARE.<br />TIJUANA.</span>
          <i />
        </div>
      </section>

      <section id="us-patients" className="us-section" aria-labelledby="us-title">
        <div className="us-copy">
          <p className="kicker gold">FOR U.S. PATIENTS</p>
          <h2 id="us-title">San Diego<br /><em>to Tijuana.</em></h2>
          <p>English and Spanish communication, clearly communicated USD pricing for U.S. patients, and PPO reimbursement documentation assistance for eligible patients.</p>
          <a className="button button-gold" href={whatsapp}>Plan your visit <span>→</span></a>
        </div>
        <div className="fact-grid">
          <div><span>01</span><strong>Bilingual care</strong><p>English and Spanish communication throughout your visit.</p></div>
          <div><span>02</span><strong>USD pricing</strong><p>Clear treatment pricing for U.S. patients.</p></div>
          <div><span>03</span><strong>PPO support</strong><p>Documentation assistance for eligible out-of-network reimbursement.</p></div>
          <div><span>04</span><strong>Zona Río</strong><p>Leona Vicario 1452, Interior 21B, Tijuana.</p></div>
        </div>
      </section>

      <section className="answers-section partner-home" aria-labelledby="partner-home-title">
        <div className="answers-heading">
          <p className="kicker gold">NONE32 PARTNER NETWORK</p>
          <h2 id="partner-home-title">A resource<br />for hotels<br />and guests.</h2>
        </div>
        <div className="answers-list">
          <p className="partner-home-copy">Hotels and local businesses can give guests direct access to a nearby bilingual dental resource without taking on the dental coordination themselves.</p>
          <Link href="/partners"><span>Explore the NONE32 Partner Network</span><b>→</b></Link>
          <a href="mailto:partnersofnone32@gmail.com"><span>Talk to our partnerships team</span><b>→</b></a>
        </div>
      </section>

      <section id="contact" className="closing-section">
        <div>
          <p className="kicker gold">NONE32 · TIJUANA</p>
          <h2>Starts <em>here.</em></h2>
          <p className="closing-address">Leona Vicario 1452, Interior 21B · Zona Río · Tijuana, Baja California</p>
        </div>
        <div className="button-row closing-buttons">
          <a className="button button-gold" href={whatsapp}>Book your appointment <span>→</span></a>
          <a className="button button-clear" href="tel:+526648816589">Call +52 664 881 6589</a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
