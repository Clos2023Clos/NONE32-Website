import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import styles from '../partners.module.css';

type PageProps = {
  params: Promise<{ code: string }>;
};

function cleanCode(value: string) {
  const cleaned = value.replace(/[^a-zA-Z0-9_-]/g, '').slice(0, 30);
  return cleaned ? cleaned.toUpperCase() : 'PARTNER';
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { code } = await params;
  const referralCode = cleanCode(code);

  return {
    title: `Guest Access ${referralCode} | NONE32`,
    description: 'Bilingual NONE32 dental guest access in Zona Río, Tijuana.',
    robots: {
      index: false,
      follow: false
    }
  };
}

export default async function PartnerReferralPage({ params }: PageProps) {
  const { code } = await params;
  const referralCode = cleanCode(code);
  const whatsapp = `https://wa.me/526648816589?text=${encodeURIComponent(
    `Hello NONE32, I was referred by partner code ${referralCode}. I'd like help with a dental appointment.`
  )}`;

  return (
    <main className={styles.referralPage}>
      <section className={styles.referralHero}>
        <SiteHeader />
        <div className={styles.referralInner}>
          <p className={styles.kicker}>NONE32 GUEST ACCESS · ZONA RÍO</p>
          <h1>Your dental<br /><em>contact in Tijuana.</em></h1>
          <p>
            You reached NONE32 through a local partner. Contact our bilingual team directly for appointment coordination, treatment questions or help planning a dental visit while you are in Tijuana.
          </p>
          <p className={styles.referralCode}>PARTNER CODE · {referralCode}</p>
          <div className={styles.actions}>
            <a className={styles.primaryButton} href={whatsapp}>Message NONE32 <span>→</span></a>
            <a className={styles.secondaryButton} href="tel:+526648816589">Call +52 664 881 6589</a>
          </div>
        </div>
      </section>

      <section className={styles.referralDetails}>
        <div>
          <span>01</span>
          <h2>Bilingual support</h2>
          <p>English and Spanish communication for patients visiting from the U.S. or staying in Tijuana.</p>
        </div>
        <div>
          <span>02</span>
          <h2>Zona Río</h2>
          <p>NONE32 is located at Leona Vicario 1452, Interior 21B, in Tijuana&apos;s Zona Río area.</p>
        </div>
        <div>
          <span>03</span>
          <h2>Direct handoff</h2>
          <p>Your partner code stays in the WhatsApp message so NONE32 can identify where your referral came from.</p>
        </div>
      </section>

      <div className={styles.backLink}>
        <Link href="/en/">← Visit the NONE32 website</Link>
      </div>
      <SiteFooter />
    </main>
  );
}
