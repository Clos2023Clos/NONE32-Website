import type { Metadata } from 'next';
import Image from 'next/image';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';

export const metadata: Metadata = {
  title: 'Dentist in Tijuana for U.S. Patients',
  description:
    'NONE32 is a bilingual dental clinic in Tijuana, Baja California serving local and U.S. patients with dental implants, full-arch rehabilitation, crowns, veneers and general dentistry.',
  alternates: {
    canonical: 'https://www.none32.com/en/',
    languages: {
      'en-US': 'https://www.none32.com/en/',
      'es-MX': 'https://www.none32.com/es/'
    }
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
  url: 'https://www.none32.com/',
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
        <Image
          src="/assets/hero-editorial-crop.webp"
          alt="NONE32 editorial brand portrait"
          fill
          priority
          sizes="100vw"
          className="hero-image"
        />
        <div className="hero-overlay" />
        <div className="hero-copy">
          <p className="kicker">PREMIUM DENTAL CARE · TIJUANA</p>
          <h1 id="home-title">More than<br />a <em>smile.</em></h1>
          <p className="hero-points">HEALTH · AESTHETICS · CONFIDENCE.</p>
          <p className="hero-description">Bilingual dental care for local patients and patients traveling from the United States.</p>
          <div className="button-row">
            <a className="button button-gold" href={whatsapp}>Book your appointment <span>→</span></a>
            <a className="button button-clear" href="#us-patients">For U.S. patients</a>
          </div>
          <div className="signature">WE GET IT.<br />WE GOT YOU.</div>
        </div>
        <div className="hero-location">
          <span>TIJUANA, MX</span>
          <span>U.S. PATIENTS WELCOME</span>
        </div>
      </section>

      <section id="experience" className="science-section">
        <div className="science-copy">
          <p className="kicker gold">DENTISTRY WITHOUT LIMITS</p>
          <h2><span>Science.</span><span>Art.</span><span className="gold-text">People.</span></h2>
          <p>NONE32 is a bilingual dental clinic in Tijuana, Baja California serving local and U.S. patients for implant, restorative, cosmetic and general dental care.</p>
          <a className="text-link" href="#clinic">Discover more <span>→</span></a>
        </div>
        <div className="science-photo">
          <Image
            src="/assets/clinic-real.webp"
            alt="Real NONE32 reception area in Tijuana"
            fill
            sizes="(max-width: 800px) 100vw, 64vw"
            className="photo-cover reception-photo"
          />
          <div className="photo-shade" />
        </div>
        <div className="science-side-note">
          <span>A SPACE<br />DESIGNED<br />FOR YOUR<br />WELL-BEING.</span>
          <i />
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

      <section className="mood-grid" aria-label="NONE32 brand experience">
        <div className="mood-panel mustard-texture">
          <span>DETAILS<br />THAT MAKE<br />A DIFFERENCE.</span>
        </div>
        <div className="mood-center">
          <h2>Your best version<br /><em>starts here.</em></h2>
          <a className="button button-outline-dark" href={whatsapp}>Book your appointment <span>→</span></a>
        </div>
        <div className="mood-panel plum-texture">
          <span>CONFIDENCE<br />LOOKS<br />DIFFERENT<br />ON EVERYONE.</span>
        </div>
      </section>

      <section id="clinic" className="clinic-grid">
        <div className="clinic-copy">
          <p className="kicker gold">OUR CLINIC</p>
          <h2>A space for<br />your well-being.</h2>
          <p>Personalized care, modern treatment planning and a contemporary environment in Zona Río, Tijuana.</p>
          <a className="text-link dark-link" href={whatsapp}>Plan your first visit <span>→</span></a>
        </div>
        <div className="clinic-photo">
          <Image
            src="/assets/clinic-evening-hq.webp"
            alt="Real NONE32 clinic interior in Tijuana"
            fill
            sizes="(max-width: 800px) 100vw, 45vw"
            className="photo-cover evening-photo"
          />
          <div className="clinic-photo-overlay" />
        </div>
        <div className="clinic-statement">
          <span>MORE<br />THAN DENTISTRY.<br />A BETTER<br />YOU.</span>
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

      <section id="questions" className="answers-section" aria-labelledby="answers-title">
        <div className="answers-heading">
          <p className="kicker gold">STRAIGHT ANSWERS</p>
          <h2 id="answers-title">Useful before<br />you sit in<br />the chair.</h2>
        </div>
        <div className="answers-list">
          <a href={whatsapp}><span>How much are dental implants in Tijuana?</span><b>→</b></a>
          <a href={whatsapp}><span>What is All-on-4 full-arch treatment?</span><b>→</b></a>
          <a href={whatsapp}><span>How do I plan dental care from San Diego?</span><b>→</b></a>
          <a href={whatsapp}><span>How does PPO reimbursement assistance work?</span><b>→</b></a>
        </div>
      </section>

      <section id="contact" className="closing-section">
        <div>
          <p className="kicker gold">YOUR NEXT CHAPTER</p>
          <h2>Starts <em>here.</em></h2>
        </div>
        <div className="button-row closing-buttons">
          <a className="button button-gold" href={whatsapp}>Book your appointment <span>→</span></a>
          <a className="button button-clear" href="tel:+526648816589">Call NONE32</a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
