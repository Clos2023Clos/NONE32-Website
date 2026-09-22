import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import styles from './partners.module.css';

export const metadata: Metadata = {
  title: 'Hotel & Local Partner Program | NONE32 Tijuana',
  description:
    'NONE32 partners with hotels and local businesses in Tijuana to give guests and teams access to a nearby bilingual dental resource in Zona Río, at no cost to the partner business.',
  alternates: {
    canonical: 'https://www.none32.com/en/partners'
  },
  openGraph: {
    title: 'NONE32 Partner Network | Tijuana',
    description:
      'A bilingual dental resource for hotel guests, visitors and local teams in Zona Río, Tijuana.',
    url: 'https://www.none32.com/en/partners',
    type: 'website'
  }
};

const partnerEmail = 'mailto:partnersofnone32@gmail.com?subject=NONE32%20Partner%20Program';
const partnerWhatsapp =
  'https://wa.me/526648816589?text=Hello%20NONE32%2C%20I%27d%20like%20to%20learn%20about%20the%20partner%20program.';

const partnerSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'NONE32 Hotel and Local Partner Program',
  provider: {
    '@type': 'Dentist',
    name: 'NONE32',
    url: 'https://www.none32.com/'
  },
  areaServed: {
    '@type': 'City',
    name: 'Tijuana'
  },
  description:
    'A no-cost local partnership program that gives guests and teams access to a bilingual dental resource in Zona Río, Tijuana.'
};

export default function PartnersPage() {
  return (
    <main className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(partnerSchema) }}
      />

      <section className={styles.hero}>
        <SiteHeader />
        <Image
          src="/assets/clinic-evening-hq.webp"
          alt="NONE32 dental clinic in Zona Río, Tijuana"
          fill
          priority
          sizes="100vw"
          className={styles.heroImage}
        />
        <div className={styles.heroShade} />
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>NONE32 PARTNER NETWORK · TIJUANA</p>
          <h1>A dental resource<br />your guests can <em>actually use.</em></h1>
          <p className={styles.lead}>
            Give guests, visitors and your team a nearby bilingual dental resource in Zona Río — with no fee to your business.
          </p>
          <div className={styles.actions}>
            <a className={styles.primaryButton} href={partnerEmail}>Start a conversation <span>→</span></a>
            <a className={styles.secondaryButton} href={partnerWhatsapp}>WhatsApp NONE32</a>
          </div>
        </div>
        <div className={styles.heroNote}>HOTELS · HOSPITALITY · LOCAL BUSINESSES</div>
      </section>

      <section className={styles.intro}>
        <div>
          <p className={styles.darkKicker}>A SIMPLE LOCAL RESOURCE</p>
          <h2>Your front desk should not have to search for a dentist when a guest asks.</h2>
        </div>
        <div className={styles.introText}>
          <p>
            NONE32 is a bilingual dental clinic in Zona Río, Tijuana. The partner program gives participating businesses a direct, professional resource they can share when a guest needs dental guidance, wants to plan treatment, or asks for a trusted nearby clinic.
          </p>
          <p>
            NONE32 handles the dental conversation directly. Your team simply shares the partner QR, card or link.
          </p>
        </div>
      </section>

      <section className={styles.benefitGrid} aria-label="Partner benefits">
        <article>
          <span>01</span>
          <h3>No cost to the partner</h3>
          <p>The program is designed as an added guest-service resource, not another vendor expense.</p>
        </article>
        <article>
          <span>02</span>
          <h3>Bilingual guest support</h3>
          <p>English and Spanish communication with direct contact to NONE32 for appointment coordination.</p>
        </article>
        <article>
          <span>03</span>
          <h3>Partner-specific access</h3>
          <p>Each participating business can receive its own referral link, QR code and partner identifier.</p>
        </article>
        <article>
          <span>04</span>
          <h3>Optional team benefit</h3>
          <p>We can structure a separate dental benefit for employees without complicating the guest program.</p>
        </article>
      </section>

      <section className={styles.howItWorks}>
        <div className={styles.processCopy}>
          <p className={styles.kicker}>HOW IT WORKS</p>
          <h2>One link.<br /><em>Clear handoff.</em></h2>
          <p>
            We give your property or business a simple partner link and QR code. The guest opens a dedicated NONE32 page, contacts us directly, and the partner identifier stays attached to the inquiry.
          </p>
          <a className={styles.primaryButton} href={partnerEmail}>Discuss your property <span>→</span></a>
        </div>
        <div className={styles.steps}>
          <div><span>01</span><strong>Share</strong><p>Front desk, concierge or staff shares the NONE32 partner QR or link.</p></div>
          <div><span>02</span><strong>Connect</strong><p>The guest reaches a bilingual NONE32 contact path without your staff coordinating dentistry.</p></div>
          <div><span>03</span><strong>Tag</strong><p>The referral carries the unique partner code into the conversation for attribution.</p></div>
          <div><span>04</span><strong>Support</strong><p>NONE32 takes over the dental inquiry, appointment planning and clinical communication.</p></div>
        </div>
      </section>

      <section className={styles.useCases}>
        <div className={styles.photoPanel}>
          <Image
            src="/assets/clinic-real.webp"
            alt="Real NONE32 reception area in Tijuana"
            fill
            sizes="(max-width: 800px) 100vw, 50vw"
            className={styles.photo}
          />
        </div>
        <div className={styles.useCaseCopy}>
          <p className={styles.darkKicker}>BUILT FOR REAL GUEST QUESTIONS</p>
          <h2>Useful before there is an emergency.</h2>
          <div className={styles.questions}>
            <p>“Is there an English-speaking dentist nearby?”</p>
            <p>“I broke a tooth while traveling — who can I call?”</p>
            <p>“Can I plan dental work while I am in Tijuana?”</p>
            <p>“Do you know a clinic I can trust close to the hotel?”</p>
          </div>
        </div>
      </section>

      <section className={styles.outreach}>
        <p className={styles.kicker}>PARTNER WITH NONE32</p>
        <h2>Ten minutes is enough<br />to see if it fits.</h2>
        <p>We can explain the guest handoff, referral link and optional employee benefit in a short call or meeting.</p>
        <div className={styles.actions}>
          <a className={styles.primaryButton} href={partnerEmail}>Email partnerships <span>→</span></a>
          <a className={styles.secondaryButton} href="tel:+526648816589">Call +52 664 881 6589</a>
        </div>
        <p className={styles.partnerEmail}>partnersofnone32@gmail.com</p>
      </section>

      <div className={styles.backLink}><Link href="/en/">← Back to NONE32</Link></div>
      <SiteFooter />
    </main>
  );
}
