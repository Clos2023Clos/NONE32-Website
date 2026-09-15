import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
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
  ['01', 'Dental implants', 'Single-tooth implant treatment and implant-supported restorations.'],
  ['02', 'All-on-4 / full arch', 'Full-arch rehabilitation for patients who need a fixed implant-supported solution.'],
  ['03', 'Crowns & restorations', 'Restorative care including zirconia and other treatment-planned crown options.'],
  ['04', 'Veneers', 'Cosmetic treatment planned around facial proportions, tooth shape and function.'],
  ['05', 'General dentistry', 'Exams, preventive care, fillings, extractions and comprehensive treatment planning.']
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
          <p className="hero-subline">
            Bilingual dental care in Tijuana for local patients and patients traveling from the United States.
          </p>
          <div className="hero-buttons">
            <a className="lux-button filled" href={whatsapp}>Book your visit <span>→</span></a>
            <Link className="lux-button" href="/en/#us-patients">For U.S. patients</Link>
          </div>
          <div className="hero-signature">WE GET IT.<br />WE GOT YOU.</div>
        </div>
        <div className="hero-corner-note" aria-hidden="true">
          <span>TIJUANA</span>
          <i>32</i>
          <span>BAJA CALIFORNIA</span>
        </div>
      </section>

      <section className="science-art" aria-labelledby="science-title">
        <div className="science-copy">
          <p className="mini-label gold">DENTISTRY WITHOUT THE TEMPLATE</p>
          <h2 id="science-title"><span>Science.</span><span>Art.</span><span className="gold-word">People.</span></h2>
          <p>
            NONE32 is a bilingual dental clinic in Tijuana, Baja California serving local patients and patients traveling from the United States for dental implants, restorative dentistry, cosmetic dentistry and general dental care.
          </p>
          <Link className="editorial-link" href="/en/#clinic">Discover the clinic <span>→</span></Link>
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
          <div className="photo-caption">REAL NONE32<br />ZONA RÍO · TIJUANA</div>
        </div>
      </section>

      <section id="treatments" className="treatments-editorial" aria-labelledby="treatments-title">
        <div className="treatments-lead">
          <p className="mini-label gold">TREATMENT FOCUS</p>
          <h2 id="treatments-title">What we do.</h2>
          <p>Clear treatment paths instead of a wall of generic dental icons.</p>
        </div>
        <div className="treatment-lines">
          {treatments.map(([number, label, description]) => (
            <a
              href={`https://wa.me/526648816589?text=${encodeURIComponent(`Hello NONE32, I'd like information about ${label}.`)}`}
              className="treatment-line"
              key={label}
            >
              <span className="treatment-number">{number}</span>
              <div>
                <strong>{label}</strong>
                <p>{description}</p>
              </div>
              <b aria-hidden="true">↗</b>
            </a>
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
          <a className="lux-button dark" href={whatsapp}>Book your visit <span>→</span></a>
        </div>
        <div className="triptych-panel plum-panel">
          <span>CONFIDENCE<br />LOOKS<br />DIFFERENT<br />ON EVERYONE.</span>
        </div>
      </section>

      <section id="clinic" className="clinic-story">
        <div className="clinic-story-copy">
          <p className="mini-label gold">OUR CLINIC</p>
          <h2>A space for<br />your well-being.</h2>
          <p>
            The physical clinic stays true to what you see here: clean architecture, warm materials and a modern environment in Zona Río. The website uses real NONE32 photography rather than invented clinic spaces.
          </p>
          <a className="editorial-link dark-link" href={whatsapp}>Plan your first visit <span>→</span></a>
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
          <div className="clinic-photo-stamp">NONE32<br /><small>REAL CLINIC · TIJUANA</small></div>
        </div>
      </section>

      <section id="us-patients" className="us-editorial" aria-labelledby="us-title">
        <div className="us-left">
          <p className="mini-label gold">FOR U.S. PATIENTS</p>
          <h2 id="us-title">San Diego<br /><span>↘</span> Tijuana.</h2>
          <p>
            NONE32 serves patients traveling from Southern California with English and Spanish communication, clearly communicated USD pricing for U.S. patients and PPO reimbursement documentation assistance for eligible patients.
          </p>
          <a className="lux-button filled" href={whatsapp}>Plan your visit <span>→</span></a>
        </div>
        <div className="us-facts">
          <div><span>01</span><strong>Bilingual care</strong><p>English and Spanish communication before, during and after treatment.</p></div>
          <div><span>02</span><strong>USD pricing</strong><p>Pricing communicated clearly for U.S. patients before treatment.</p></div>
          <div><span>03</span><strong>PPO support</strong><p>Documentation assistance for eligible out-of-network reimbursement.</p></div>
          <div><span>04</span><strong>Zona Río</strong><p>Leona Vicario 1452, Interior 21B, Tijuana, Baja California.</p></div>
        </div>
      </section>

      <section id="questions" className="answers-editorial" aria-labelledby="answers-title">
        <div className="answers-title-block">
          <p className="mini-label gold">STRAIGHT ANSWERS</p>
          <h2 id="answers-title">Useful before<br />you ever sit<br />in the chair.</h2>
        </div>
        <div className="answers-list">
          <a href={whatsapp}><span>How much are dental implants in Tijuana?</span><b>→</b></a>
          <a href={whatsapp}><span>What is full-arch implant rehabilitation?</span><b>→</b></a>
          <a href={whatsapp}><span>How do I plan dental care from San Diego?</span><b>→</b></a>
          <a href={whatsapp}><span>How does PPO reimbursement assistance work?</span><b>→</b></a>
          <a href={whatsapp}><span>Ask NONE32 a specific question</span><b>→</b></a>
        </div>
      </section>

      <section className="trust-band" aria-label="NONE32 trust information">
        <p className="mini-label gold">REAL INFORMATION. REAL PLACE.</p>
        <div className="trust-grid">
          <div><strong>Tijuana, B.C.</strong><span>Zona Río location</span></div>
          <div><strong>English + Spanish</strong><span>Bilingual patient communication</span></div>
          <div><strong>+52 664 881 6589</strong><span>Clinic phone</span></div>
        </div>
      </section>

      <section id="contact" className="closing-editorial">
        <p className="mini-label gold">WE GET IT. WE GOT YOU.</p>
        <h2>Starts <em>here.</em></h2>
        <p className="closing-copy">Tell us what you need. We’ll help you understand the next step before you travel.</p>
        <div className="closing-buttons">
          <a className="lux-button filled" href={whatsapp}>Book your visit <span>→</span></a>
          <a className="lux-button" href="tel:+526648816589">Call NONE32</a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
