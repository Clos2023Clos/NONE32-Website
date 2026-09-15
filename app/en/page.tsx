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
  ['Dental implants', '/en/dental-implants-tijuana'],
  ['All-on-4 / full arch', '/en/all-on-4-tijuana'],
  ['Crowns', '/en/crowns-tijuana'],
  ['Veneers', '/en/veneers-tijuana'],
  ['General dentistry', '/en/general-dentistry-tijuana']
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

      <section className="editorial-hero" aria-labelledby="home-title">
        <SiteHeader />
        <Image
          src="/assets/hero-editorial-crop.webp"
          alt="Editorial portrait representing the NONE32 patient experience"
          fill
          priority
          sizes="100vw"
          className="hero-photo"
        />
        <div className="hero-wash" />
        <div className="hero-content">
          <p className="mini-label">NONE32 · TIJUANA, MEXICO</p>
          <h1 id="home-title">More than<br />a <em>smile.</em></h1>
          <p className="hero-subline">Bilingual dental care for local and U.S. patients.</p>
          <div className="hero-buttons">
            <Link className="lux-button filled" href="/en/contact">Book your visit <span>→</span></Link>
            <Link className="lux-button" href="/en/dentist-for-us-patients">For U.S. patients</Link>
          </div>
          <div className="hero-signature">WE GET IT.<br />WE GOT YOU.</div>
        </div>
      </section>

      <section className="science-art" aria-labelledby="science-title">
        <div className="science-copy">
          <p className="mini-label gold">DENTISTRY WITHOUT THE TEMPLATE</p>
          <h2 id="science-title"><span>Science.</span><span>Art.</span><span className="gold-word">People.</span></h2>
          <p>
            NONE32 is a bilingual dental clinic in Tijuana, Baja California serving local patients and patients traveling from the United States for implants, restorative dentistry, cosmetic dentistry and general dental care.
          </p>
          <Link className="editorial-link" href="/en/about-none32">Discover NONE32 <span>→</span></Link>
        </div>
        <div className="science-photo">
          <Image
            src="/assets/clinic-real.webp"
            alt="Real NONE32 reception area in Tijuana"
            fill
            sizes="(max-width: 800px) 100vw, 62vw"
            className="clinic-photo-main"
          />
          <div className="photo-vignette" />
          <div className="photo-caption">A REAL SPACE.<br />A DIFFERENT POINT OF VIEW.</div>
        </div>
      </section>

      <section className="treatment-strip" aria-label="NONE32 treatments">
        <div className="treatment-strip-title">WHAT WE DO</div>
        <div className="treatment-strip-links">
          {treatments.map(([label, href], index) => (
            <Link href={href} key={href}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{label}</strong>
            </Link>
          ))}
        </div>
      </section>

      <section className="brand-triptych" aria-label="NONE32 brand statement">
        <div className="triptych-panel mustard-panel">
          <span>DETAILS<br />MAKE THE<br />DIFFERENCE.</span>
        </div>
        <div className="triptych-center">
          <p className="mini-label gold">YOUR VISIT, REFRAMED</p>
          <h2>Your best version<br />can start here.</h2>
          <Link className="lux-button dark" href="/en/contact">Book your visit <span>→</span></Link>
        </div>
        <div className="triptych-panel plum-panel">
          <span>CONFIDENCE<br />LOOKS<br />DIFFERENT<br />ON EVERYONE.</span>
        </div>
      </section>

      <section className="clinic-story">
        <div className="clinic-story-copy">
          <p className="mini-label gold">OUR CLINIC</p>
          <h2>A space for<br />your well-being.</h2>
          <p>
            Modern treatment planning, bilingual communication and a patient experience designed to feel clear from the first conversation through follow-up.
          </p>
          <Link className="editorial-link dark-link" href="/en/about-none32">See our clinic <span>→</span></Link>
        </div>
        <div className="clinic-story-photo">
          <Image
            src="/assets/clinic-real.webp"
            alt="NONE32 clinic interior in Zona Río, Tijuana"
            fill
            sizes="(max-width: 800px) 100vw, 58vw"
            className="clinic-photo-detail"
          />
          <div className="clinic-story-shade" />
        </div>
      </section>

      <section className="us-editorial" aria-labelledby="us-title">
        <div className="us-left">
          <p className="mini-label gold">FOR U.S. PATIENTS</p>
          <h2 id="us-title">San Diego<br /><span>↘</span> Tijuana.</h2>
          <p>
            NONE32 serves patients traveling from Southern California with English and Spanish communication, clearly communicated USD pricing for U.S. patients and PPO reimbursement documentation assistance for eligible patients.
          </p>
          <Link className="lux-button filled" href="/en/dentist-for-us-patients">Plan your visit <span>→</span></Link>
        </div>
        <div className="us-facts">
          <div><span>01</span><strong>Bilingual care</strong><p>English and Spanish communication.</p></div>
          <div><span>02</span><strong>USD pricing</strong><p>Clear pricing before treatment.</p></div>
          <div><span>03</span><strong>PPO support</strong><p>Documentation assistance for eligible reimbursement.</p></div>
          <div><span>04</span><strong>Zona Río</strong><p>Dental care in Tijuana, Baja California.</p></div>
        </div>
      </section>

      <section className="answers-editorial" aria-labelledby="answers-title">
        <div className="answers-title-block">
          <p className="mini-label gold">STRAIGHT ANSWERS</p>
          <h2 id="answers-title">Useful before<br />you ever sit<br />in the chair.</h2>
        </div>
        <div className="answers-list">
          <Link href="/en/dental-implants-tijuana"><span>How much are dental implants in Tijuana?</span><b>→</b></Link>
          <Link href="/en/all-on-4-tijuana"><span>What is All-on-4 full-arch treatment?</span><b>→</b></Link>
          <Link href="/en/dentist-near-san-diego"><span>How do I plan dental care from San Diego?</span><b>→</b></Link>
          <Link href="/en/ppo-dental-reimbursement"><span>Can I use PPO benefits for dental care in Mexico?</span><b>→</b></Link>
          <Link href="/en/faq"><span>See more patient questions</span><b>→</b></Link>
        </div>
      </section>

      <section className="closing-editorial">
        <p className="mini-label gold">WE GET IT. WE GOT YOU.</p>
        <h2>Starts <em>here.</em></h2>
        <div className="closing-buttons">
          <Link className="lux-button filled" href="/en/contact">Book your visit <span>→</span></Link>
          <a className="lux-button" href="https://wa.me/526648816589">WhatsApp</a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
