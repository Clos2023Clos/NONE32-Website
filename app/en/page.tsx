import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';

export const metadata: Metadata = {
  title: 'Dentist in Tijuana for U.S. Patients',
  description:
    'NONE32 is a bilingual dental clinic in Tijuana, Baja California serving local and U.S. patients with dental implants, All-on-4 full-arch rehabilitation, crowns, veneers and general dentistry.',
  alternates: {
    canonical: 'https://www.none32.com/en/',
    languages: {
      'en-US': 'https://www.none32.com/en/',
      'es-MX': 'https://www.none32.com/es/'
    }
  }
};

const treatments = [
  {
    title: 'Dental implants',
    href: '/en/dental-implants-tijuana',
    image: '/assets/treatment-implant.webp',
    alt: 'Dental implant component on a dark background'
  },
  {
    title: 'All-on-4 full arch',
    href: '/en/all-on-4-tijuana',
    image: null,
    alt: ''
  },
  {
    title: 'Crowns & restorations',
    href: '/en/crowns-tijuana',
    image: '/assets/treatment-crown.webp',
    alt: 'Macro view of a ceramic dental crown'
  },
  {
    title: 'Veneers & smile design',
    href: '/en/veneers-tijuana',
    image: '/assets/treatment-veneer.webp',
    alt: 'Natural-looking anterior ceramic restorations'
  },
  {
    title: 'General dentistry',
    href: '/en/general-dentistry-tijuana',
    image: '/assets/treatment-general.webp',
    alt: 'Dental mirror and clinical instrument on a dark background'
  }
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
    <main className="site-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }}
      />

      <section className="hero-section" aria-labelledby="home-title">
        <SiteHeader />
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Dental care in Tijuana</p>
            <h1 id="home-title">More than a <em>smile.</em></h1>
            <p className="hero-deck">Advanced dentistry for a brighter you.</p>
            <div className="hero-cta-row">
              <Link className="button button-gold" href="/en/contact">Book your visit <span>→</span></Link>
              <Link className="button button-outline" href="/en/contact#virtual-consultation">Virtual consultation</Link>
            </div>
            <div className="brand-signature">
              <span>We get it.</span>
              <span>We got you.</span>
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <Image
              src="/assets/hero-editorial.webp"
              alt=""
              fill
              priority
              sizes="(max-width: 900px) 100vw, 62vw"
              className="cover-image"
            />
            <div className="hero-note">Confidence<br />travels well.</div>
          </div>
        </div>
      </section>

      <section className="clinic-intro section-dark">
        <div className="clinic-copy">
          <p className="eyebrow gold">NONE32 · Tijuana, Mexico</p>
          <h2>Dentistry designed around people.</h2>
          <p>
            NONE32 is a bilingual dental clinic in Tijuana, Baja California serving local patients and patients traveling from the United States for dental implants, restorative dentistry, cosmetic dentistry and general dental care.
          </p>
          <p>
            Our clinic is in Zona Río and combines an in-person dental experience with a modern digital patient experience before, during and after treatment.
          </p>
          <Link className="text-link" href="/en/about-none32">Explore our clinic <span>→</span></Link>
        </div>
        <div className="clinic-photo primary">
          <Image src="/assets/clinic-reception.webp" alt="NONE32 reception area in Tijuana" fill sizes="(max-width: 900px) 100vw, 58vw" className="cover-image" />
        </div>
      </section>

      <section className="treatments-section" aria-labelledby="treatments-title">
        <div className="section-kicker-row">
          <h2 id="treatments-title">Signature treatments</h2>
          <p>Clear information. Thoughtful treatment planning. Natural-looking results.</p>
        </div>
        <div className="treatment-grid">
          {treatments.map((treatment, index) => (
            <Link className={`treatment-card treatment-card-${index + 1}`} href={treatment.href} key={treatment.href}>
              <div className="treatment-label">
                <span>{treatment.title}</span>
                <span className="gold-rule" />
              </div>
              {treatment.image ? (
                <Image src={treatment.image} alt={treatment.alt} fill sizes="(max-width: 760px) 100vw, 20vw" className="cover-image treatment-image" />
              ) : (
                <div className="all-on-four-graphic" aria-hidden="true">
                  <span className="all-on-four-number">04</span>
                  <span className="all-on-four-caption">full arch</span>
                </div>
              )}
              <span className="card-link">Learn more →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="us-patient-section">
        <div className="us-patient-copy">
          <p className="eyebrow dark">For U.S. patients</p>
          <h2>Close to home.<br />Far beyond expectations.</h2>
          <p>
            NONE32 welcomes patients traveling from Southern California and elsewhere in the United States. Our team provides bilingual communication, pricing communicated in USD for U.S. patients, and PPO reimbursement assistance for eligible patients.
          </p>
          <ul className="fact-list">
            <li><strong>Tijuana location:</strong> Zona Río, Baja California</li>
            <li><strong>Languages:</strong> English and Spanish</li>
            <li><strong>Pricing:</strong> Clearly communicated before treatment</li>
            <li><strong>PPO:</strong> Reimbursement documentation assistance for eligible patients</li>
          </ul>
          <Link className="button button-dark" href="/en/dentist-for-us-patients">Plan your visit →</Link>
        </div>
        <div className="us-patient-visual">
          <Image src="/assets/clinic-evening.webp" alt="Interior view of NONE32 in Tijuana" fill sizes="(max-width: 900px) 100vw, 60vw" className="cover-image" />
          <div className="us-patient-overlay">
            <span>Convenient Tijuana location</span>
            <span>Bilingual care</span>
            <span>USD pricing for U.S. patients</span>
            <span>PPO reimbursement assistance</span>
          </div>
        </div>
      </section>

      <section className="answers-section" aria-labelledby="answers-title">
        <div className="answers-image">
          <Image src="/assets/waiting-room.webp" alt="NONE32 waiting area with gold and plum seating" fill sizes="(max-width: 900px) 100vw, 50vw" className="cover-image" />
        </div>
        <div className="answers-copy">
          <p className="eyebrow gold">Straight answers</p>
          <h2 id="answers-title">Planning dental care in Tijuana?</h2>
          <p>
            Start with the questions patients actually ask: treatment timelines, travel from San Diego, costs, materials, PPO reimbursement and what to expect between visits.
          </p>
          <div className="answer-links">
            <Link href="/en/dental-implants-tijuana">How do dental implants work? <span>→</span></Link>
            <Link href="/en/all-on-4-tijuana">What is All-on-4 full-arch treatment? <span>→</span></Link>
            <Link href="/en/dentist-near-san-diego">How do I travel from San Diego? <span>→</span></Link>
            <Link href="/en/ppo-dental-reimbursement">Can I use PPO benefits for care in Mexico? <span>→</span></Link>
          </div>
        </div>
      </section>

      <section id="results" className="results-section">
        <div className="results-copy">
          <p className="eyebrow gold">Real people. Real care.</p>
          <h2>Clinical results should look like you.</h2>
          <p>
            Treatment cases will be shown here only with appropriate patient permission and accurate treatment context.
          </p>
          <Link className="text-link" href="/en/contact">Ask about your treatment options <span>→</span></Link>
        </div>
      </section>

      <section className="closing-cta">
        <div>
          <p className="eyebrow gold">Your next chapter</p>
          <h2>Starts <em>here.</em></h2>
        </div>
        <div className="closing-actions">
          <Link className="button button-gold" href="/en/contact">Book your visit →</Link>
          <a className="button button-outline" href="https://wa.me/526648816589">Ask a question</a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
