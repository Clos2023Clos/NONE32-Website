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
  { number: '01', title: 'Dental implants', href: '/en/dental-implants-tijuana' },
  { number: '02', title: 'All-on-4 / full arch', href: '/en/all-on-4-tijuana' },
  { number: '03', title: 'Crowns & restorations', href: '/en/crowns-tijuana' },
  { number: '04', title: 'Veneers & smile design', href: '/en/veneers-tijuana' },
  { number: '05', title: 'General dentistry', href: '/en/general-dentistry-tijuana' }
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

      <section className="hero" aria-labelledby="home-title">
        <SiteHeader />
        <div className="hero-copy">
          <p className="eyebrow">Dental care in Tijuana</p>
          <h1 id="home-title">More than a <em>smile.</em></h1>
          <p className="hero-fact">Bilingual dental care in Tijuana for local and U.S. patients.</p>
          <div className="hero-actions">
            <Link className="button button-gold" href="/en/contact">Book your visit <span>→</span></Link>
            <Link className="button button-ghost" href="/en/contact#virtual-consultation">Virtual consultation</Link>
          </div>
          <div className="signature"><span>We get it.</span><span>We got you.</span></div>
        </div>

        <div className="hero-model" aria-hidden="true">
          <Image
            src="/assets/hero-editorial-crop.webp"
            alt=""
            fill
            priority
            sizes="(max-width: 900px) 100vw, 36vw"
            className="cover model-image"
          />
          <div className="model-shade" />
        </div>

        <div className="hero-clinic">
          <Image
            src="/assets/clinic-real.webp"
            alt="NONE32 reception area in Tijuana"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 30vw"
            className="cover clinic-hero-image"
          />
          <div className="clinic-shade" />
          <div className="hero-location">
            <span>Tijuana · Baja California</span>
            <strong>U.S. patients welcome</strong>
          </div>
        </div>
      </section>

      <section className="manifesto" aria-labelledby="manifesto-title">
        <div className="manifesto-copy">
          <p className="eyebrow gold">NONE32 · Zona Río</p>
          <h2 id="manifesto-title">Clinical care.<br />Editorial point of view.</h2>
        </div>
        <div className="manifesto-facts">
          <p>NONE32 is a bilingual dental clinic in Tijuana, Baja California serving local patients and patients traveling from the United States.</p>
          <p>Care includes dental implants, restorative dentistry, cosmetic dentistry and general dental care, with clear treatment planning and a modern digital patient experience.</p>
          <Link className="text-link" href="/en/about-none32">Explore NONE32 <span>→</span></Link>
        </div>
      </section>

      <section className="clinic-feature" aria-label="Inside NONE32">
        <div className="clinic-feature-image">
          <Image
            src="/assets/clinic-real.webp"
            alt="Interior of the real NONE32 dental clinic in Tijuana"
            fill
            sizes="100vw"
            className="cover clinic-wide-image"
          />
          <div className="clinic-feature-overlay" />
          <div className="clinic-feature-title">
            <p>Our clinic</p>
            <h2>A space built around your visit.</h2>
          </div>
          <Link className="round-link" href="/en/about-none32" aria-label="See the NONE32 clinic">View<br />the clinic <span>↗</span></Link>
        </div>
      </section>

      <section className="treatments" aria-labelledby="treatments-title">
        <div className="treatments-heading">
          <p className="eyebrow gold">Treatment focus</p>
          <h2 id="treatments-title">What we do.</h2>
          <p>No generic icon wall. Just clear paths to the care patients actually look for.</p>
        </div>
        <div className="treatment-list">
          {treatments.map((treatment) => (
            <Link href={treatment.href} className="treatment-row" key={treatment.href}>
              <span className="treatment-number">{treatment.number}</span>
              <span className="treatment-name">{treatment.title}</span>
              <span className="treatment-arrow">↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="us-patients" aria-labelledby="us-patients-title">
        <div className="us-panel">
          <p className="eyebrow dark">For U.S. patients</p>
          <h2 id="us-patients-title">Tijuana care,<br />without the guesswork.</h2>
          <p>NONE32 serves patients traveling from Southern California and elsewhere in the United States with bilingual communication and treatment information designed for cross-border care.</p>
          <div className="facts-grid">
            <div><span>01</span><strong>English + Spanish</strong><p>Bilingual communication throughout your visit.</p></div>
            <div><span>02</span><strong>USD pricing</strong><p>Pricing clearly communicated in USD for U.S. patients.</p></div>
            <div><span>03</span><strong>PPO support</strong><p>Reimbursement documentation assistance for eligible patients.</p></div>
            <div><span>04</span><strong>Zona Río</strong><p>A Tijuana location serving local and cross-border patients.</p></div>
          </div>
          <Link className="button button-dark" href="/en/dentist-for-us-patients">Plan your visit <span>→</span></Link>
        </div>
        <div className="us-visual">
          <Image
            src="/assets/clinic-real.webp"
            alt="NONE32 clinic in Tijuana, Baja California"
            fill
            sizes="(max-width: 900px) 100vw, 48vw"
            className="cover us-image"
          />
          <div className="us-visual-shade" />
          <div className="distance-copy"><span>San Diego</span><i>↘</i><strong>Tijuana</strong></div>
        </div>
      </section>

      <section className="answers" aria-labelledby="answers-title">
        <div className="answers-lead">
          <p className="eyebrow gold">Straight answers</p>
          <h2 id="answers-title">Useful before<br />you ever sit in the chair.</h2>
        </div>
        <div className="answer-links">
          <Link href="/en/dental-implants-tijuana"><span>How do dental implants work?</span><b>→</b></Link>
          <Link href="/en/all-on-4-tijuana"><span>What is All-on-4 full-arch treatment?</span><b>→</b></Link>
          <Link href="/en/dentist-near-san-diego"><span>How do I plan dental care from San Diego?</span><b>→</b></Link>
          <Link href="/en/ppo-dental-reimbursement"><span>How does PPO reimbursement work for care in Mexico?</span><b>→</b></Link>
          <Link href="/en/faq"><span>See patient questions and answers</span><b>→</b></Link>
        </div>
      </section>

      <section id="results" className="results-band">
        <div className="results-copy">
          <p className="eyebrow">Real people. Real care.</p>
          <h2>Results belong to the patient—not the template.</h2>
          <p>Clinical cases will be published only with appropriate patient permission and accurate treatment context.</p>
        </div>
        <Link className="button button-ghost" href="/en/contact">Ask about your options <span>→</span></Link>
      </section>

      <section className="closing">
        <p className="eyebrow gold">Your next chapter</p>
        <h2>Starts <em>here.</em></h2>
        <div className="closing-actions">
          <Link className="button button-gold" href="/en/contact">Book your visit <span>→</span></Link>
          <a className="button button-ghost" href="https://wa.me/526648816589">Ask a question</a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
