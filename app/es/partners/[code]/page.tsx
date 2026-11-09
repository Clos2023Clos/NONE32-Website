import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import styles from '../../../en/partners/partners.module.css';

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
    title: `Acceso para huéspedes ${referralCode} | NONE32`,
    description: 'Acceso a atención dental bilingüe para huéspedes de NONE32 en Zona Río, Tijuana.',
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
    `Hola NONE32, recibí una recomendación con el código de socio ${referralCode}. Me gustaría recibir ayuda para agendar una cita dental.`
  )}`;

  return (
    <main className={styles.referralPage} lang="es-MX">
      <section className={styles.referralHero}>
        <SiteHeader language="es" />
        <div className={styles.referralInner}>
          <p className={styles.kicker}>ACCESO PARA HUÉSPEDES NONE32 · ZONA RÍO</p>
          <h1>Tu contacto dental<br /><em>en Tijuana.</em></h1>
          <p>
            Llegaste a NONE32 por recomendación de un socio local. Comunícate directamente con nuestro equipo bilingüe para coordinar una cita, resolver dudas sobre tratamientos o planear una visita dental durante tu estancia en Tijuana.
          </p>
          <p className={styles.referralCode}>CÓDIGO DE SOCIO · {referralCode}</p>
          <div className={styles.actions}>
            <a className={styles.primaryButton} href={whatsapp}>Escribir a NONE32 <span>→</span></a>
            <a className={styles.secondaryButton} href="tel:+526648816589">Llamar al +52 664 881 6589</a>
          </div>
        </div>
      </section>

      <section className={styles.referralDetails}>
        <div>
          <span>01</span>
          <h2>Atención bilingüe</h2>
          <p>Comunicación en español e inglés para pacientes que visitan Tijuana o llegan desde Estados Unidos.</p>
        </div>
        <div>
          <span>02</span>
          <h2>Zona Río</h2>
          <p>NONE32 está ubicada en Leona Vicario 1452, interior 21B, en Zona Río, Tijuana.</p>
        </div>
        <div>
          <span>03</span>
          <h2>Contacto directo</h2>
          <p>Tu código de socio permanece en el mensaje de WhatsApp para que NONE32 identifique de dónde proviene tu recomendación.</p>
        </div>
      </section>

      <div className={styles.backLink}>
        <Link href="/es">← Visitar el sitio de NONE32</Link>
      </div>
      <SiteFooter language="es" />
    </main>
  );
}
