import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import styles from '../../en/partners/partners.module.css';

export const metadata: Metadata = {
  title: 'Programa de socios para hoteles y negocios | NONE32 Tijuana',
  description:
    'NONE32 colabora con hoteles y negocios de Tijuana para ofrecer a huéspedes y empleados acceso a atención dental bilingüe en Zona Río, sin costo para el negocio asociado.',
  alternates: {
    canonical: 'https://none32.com/es/partners'
  },
  openGraph: {
    title: 'Red de socios NONE32 | Tijuana',
    description:
      'Un recurso dental bilingüe para huéspedes, visitantes y equipos locales en Zona Río, Tijuana.',
    url: 'https://none32.com/es/partners',
    type: 'website'
  }
};

const partnerEmail = 'mailto:partnersofnone32@gmail.com?subject=Programa%20de%20socios%20NONE32';
const partnerWhatsapp =
  'https://wa.me/526648816589?text=Hola%20NONE32%2C%20me%20gustar%C3%ADa%20conocer%20su%20programa%20de%20socios.';

const partnerSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Programa de socios NONE32 para hoteles y negocios locales',
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
    'Un programa gratuito de colaboración local que ofrece a huéspedes y empleados acceso a servicios dentales bilingües en Zona Río, Tijuana.'
};

export default function PartnersPage() {
  return (
    <main className={styles.page} lang="es-MX">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(partnerSchema) }}
      />

      <section className={styles.hero}>
        <SiteHeader language="es" />
        <Image
          src="/assets/clinic-evening-hq.webp"
          alt="Clínica dental NONE32 en Zona Río, Tijuana"
          fill
          priority
          sizes="100vw"
          className={styles.heroImage}
        />
        <div className={styles.heroShade} />
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>RED DE SOCIOS NONE32 · TIJUANA</p>
          <h1>Un recurso dental<br />que tus huéspedes <em>sí pueden utilizar.</em></h1>
          <p className={styles.lead}>
            Ofrece a tus huéspedes, visitantes y colaboradores acceso a una clínica dental bilingüe cercana, en Zona Río, sin costo para tu negocio.
          </p>
          <div className={styles.actions}>
            <a className={styles.primaryButton} href={partnerEmail}>Iniciar una conversación <span>→</span></a>
            <a className={styles.secondaryButton} href={partnerWhatsapp}>Escribir a NONE32 por WhatsApp</a>
          </div>
        </div>
        <div className={styles.heroNote}>HOTELES · HOSPITALIDAD · NEGOCIOS LOCALES</div>
      </section>

      <section className={styles.intro}>
        <div>
          <p className={styles.darkKicker}>UN RECURSO LOCAL Y SENCILLO</p>
          <h2>Tu recepción no debería tener que buscar un dentista cuando un huésped lo necesita.</h2>
        </div>
        <div className={styles.introText}>
          <p>
            NONE32 es una clínica dental bilingüe en Zona Río, Tijuana. Nuestro programa de socios brinda a los negocios participantes un contacto profesional y directo que pueden compartir cuando un huésped necesita orientación dental, desea planear un tratamiento o busca una clínica cercana y confiable.
          </p>
          <p>
            NONE32 atiende directamente las consultas dentales. Tu equipo solamente comparte el código QR, la tarjeta o el enlace del programa.
          </p>
        </div>
      </section>

      <section className={styles.benefitGrid} aria-label="Beneficios para socios">
        <article>
          <span>01</span>
          <h3>Sin costo para el socio</h3>
          <p>El programa está diseñado como un servicio adicional para huéspedes, no como otro gasto para tu negocio.</p>
        </article>
        <article>
          <span>02</span>
          <h3>Atención bilingüe para huéspedes</h3>
          <p>Comunicación en español e inglés y contacto directo con NONE32 para coordinar citas.</p>
        </article>
        <article>
          <span>03</span>
          <h3>Acceso exclusivo para cada socio</h3>
          <p>Cada negocio participante puede recibir su propio enlace de referencia, código QR e identificador de socio.</p>
        </article>
        <article>
          <span>04</span>
          <h3>Beneficio opcional para empleados</h3>
          <p>Podemos establecer un beneficio dental independiente para empleados sin complicar el programa para huéspedes.</p>
        </article>
      </section>

      <section className={styles.howItWorks}>
        <div className={styles.processCopy}>
          <p className={styles.kicker}>CÓMO FUNCIONA</p>
          <h2>Un solo enlace.<br /><em>Contacto directo.</em></h2>
          <p>
            Proporcionamos a tu hotel o negocio un enlace y un código QR exclusivos. El huésped abre una página de NONE32, se comunica directamente con nosotros y su consulta queda asociada al identificador del socio.
          </p>
          <a className={styles.primaryButton} href={partnerEmail}>Conversemos sobre tu negocio <span>→</span></a>
        </div>
        <div className={styles.steps}>
          <div><span>01</span><strong>Compartir</strong><p>Recepción, conserjería o el personal comparte el código QR o enlace de NONE32.</p></div>
          <div><span>02</span><strong>Contactar</strong><p>El huésped contacta directamente al equipo bilingüe de NONE32, sin que tu personal deba coordinar su atención dental.</p></div>
          <div><span>03</span><strong>Identificar</strong><p>El código exclusivo de socio acompaña la consulta para identificar su procedencia.</p></div>
          <div><span>04</span><strong>Atender</strong><p>NONE32 se encarga de responder la consulta, coordinar la posible cita y gestionar la comunicación clínica.</p></div>
        </div>
      </section>

      <section className={styles.useCases}>
        <div className={styles.photoPanel}>
          <Image
            src="/assets/clinic-real.webp"
            alt="Área de recepción real de NONE32 en Tijuana"
            fill
            sizes="(max-width: 800px) 100vw, 50vw"
            className={styles.photo}
          />
        </div>
        <div className={styles.useCaseCopy}>
          <p className={styles.darkKicker}>PENSADO PARA LAS PREGUNTAS REALES DE LOS HUÉSPEDES</p>
          <h2>Útil incluso antes de una emergencia.</h2>
          <div className={styles.questions}>
            <p>“¿Hay un dentista cerca que hable inglés?”</p>
            <p>“Se me rompió un diente durante el viaje, ¿a quién puedo llamar?”</p>
            <p>“¿Puedo planear un tratamiento dental mientras estoy en Tijuana?”</p>
            <p>“¿Conocen alguna clínica confiable cerca del hotel?”</p>
          </div>
        </div>
      </section>

      <section className={styles.outreach}>
        <p className={styles.kicker}>COLABORA CON NONE32</p>
        <h2>Diez minutos bastan<br />para conocer la propuesta.</h2>
        <p>Podemos explicar el proceso de contacto para huéspedes, el enlace de referencia y el beneficio opcional para empleados en una breve llamada o reunión.</p>
        <div className={styles.actions}>
          <a className={styles.primaryButton} href={partnerEmail}>Escribir a alianzas <span>→</span></a>
          <a className={styles.secondaryButton} href="tel:+526648816589">Llamar al +52 664 881 6589</a>
        </div>
        <p className={styles.partnerEmail}>partnersofnone32@gmail.com</p>
      </section>

      <div className={styles.backLink}><Link href="/es">← Volver a NONE32</Link></div>
      <SiteFooter language="es" />
    </main>
  );
}
