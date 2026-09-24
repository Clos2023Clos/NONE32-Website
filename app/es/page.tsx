import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { ClinicPhoto } from '@/components/ClinicPhoto';
import heroSrc from '@/lib/hero-live';

export const metadata: Metadata = {
  title: 'Dentista en Tijuana',
  description:
    'NONE32 es una clínica dental bilingüe en Tijuana, Baja California para pacientes locales y de Estados Unidos, con implantes, rehabilitación de arco completo, coronas, carillas y odontología general.',
  alternates: {
    canonical: 'https://none32.com/es',
    languages: {
      en: 'https://none32.com/',
      es: 'https://none32.com/es'
    }
  },
  openGraph: {
    title: 'NONE32 | Clínica dental en Tijuana, México',
    description: 'Atención dental bilingüe en Tijuana para pacientes locales y de Estados Unidos.',
    url: 'https://none32.com/es',
    locale: 'es_MX',
    type: 'website'
  }
};

const whatsapp =
  'https://wa.me/526648816589?text=Hola%20NONE32%2C%20me%20gustar%C3%ADa%20agendar%20una%20consulta.';

const treatments = [
  ['01', 'Implantes dentales', '/treatments/dental-implants-tijuana'],
  ['02', 'All-on-4 / arco completo', '/treatments/all-on-4-tijuana'],
  ['03', 'Coronas y restauraciones', '/treatments/dental-crowns-tijuana'],
  ['04', 'Carillas y diseño de sonrisa', '/treatments/veneers-tijuana'],
  ['05', 'Odontología general', '/treatments/general-dentistry-tijuana']
] as const;

const clinicSchema = {
  '@context': 'https://schema.org',
  '@type': ['Dentist', 'LocalBusiness'],
  name: 'NONE32',
  url: 'https://none32.com/es',
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
  availableLanguage: ['Spanish', 'English'],
  medicalSpecialty: 'Dentistry'
};

export default function SpanishHomePage() {
  return (
    <main className="editorial-site" lang="es">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }}
      />

      <section id="home" className="hero" aria-labelledby="home-title">
        <SiteHeader language="es" />
        <img
          src={heroSrc}
          alt="Retrato editorial de la marca NONE32"
          className="hero-image hero-image-selected"
          fetchPriority="high"
          decoding="async"
        />
        <div className="hero-overlay" />
        <div className="hero-copy">
          <p className="kicker">ATENCIÓN DENTAL PREMIUM · TIJUANA</p>
          <h1 id="home-title">Más que<br />una <em>sonrisa.</em></h1>
          <p className="hero-points">SALUD · ESTÉTICA · CONFIANZA.</p>
          <p className="hero-description">Atención dental bilingüe en Zona Río para pacientes de Tijuana y pacientes que viajan desde Estados Unidos.</p>
          <div className="button-row">
            <a className="button button-gold" href={whatsapp}>Agenda tu cita <span>→</span></a>
            <a className="button button-clear" href="#clinic">Conoce la clínica</a>
          </div>
          <div className="signature">WE GET IT.<br />WE GOT YOU.</div>
        </div>
        <div className="hero-location">
          <span>TIJUANA, MX</span>
          <span>PACIENTES DE EE.UU. BIENVENIDOS</span>
        </div>
      </section>

      <section id="treatments" className="treatment-band" aria-labelledby="treatment-title">
        <div className="treatment-band-label" id="treatment-title">TRATAMIENTOS</div>
        <div className="treatment-items">
          {treatments.map(([number, label, href]) => (
            <Link key={label} href={href} className="treatment-item">
              <span>{number}</span>
              <strong>{label}</strong>
              <b>↗</b>
            </Link>
          ))}
        </div>
      </section>

      <section id="clinic" className="clinic-grid">
        <div className="clinic-copy">
          <p className="kicker gold">NUESTRA CLÍNICA · ZONA RÍO</p>
          <h2>Un espacio para<br />tu bienestar.</h2>
          <p>Atención personalizada, planeación moderna de tratamientos y un ambiente contemporáneo en Tijuana. Las fotografías que ves aquí son de nuestra clínica real.</p>
          <a className="text-link dark-link" href={whatsapp}>Planea tu primera visita <span>→</span></a>
        </div>
        <div className="clinic-photo">
          <ClinicPhoto />
          <div className="clinic-photo-overlay" />
        </div>
        <div className="clinic-statement">
          <span>ESPACIO REAL.<br />ATENCIÓN BILINGÜE.<br />TIJUANA.</span>
          <i />
        </div>
      </section>

      <section id="us-patients" className="us-section" aria-labelledby="us-title">
        <div className="us-copy">
          <p className="kicker gold">PARA PACIENTES DE EE.UU.</p>
          <h2 id="us-title">San Diego<br /><em>a Tijuana.</em></h2>
          <p>Comunicación en inglés y español, precios en USD claramente explicados para pacientes de Estados Unidos y apoyo con documentación para reembolso PPO fuera de red cuando corresponda.</p>
          <a className="button button-gold" href={whatsapp}>Planea tu visita <span>→</span></a>
        </div>
        <div className="fact-grid">
          <div><span>01</span><strong>Atención bilingüe</strong><p>Comunicación en inglés y español durante toda tu visita.</p></div>
          <div><span>02</span><strong>Precios en USD</strong><p>Precios de tratamiento claros para pacientes de Estados Unidos.</p></div>
          <div><span>03</span><strong>Apoyo PPO</strong><p>Ayuda con documentación para reembolso fuera de red en pacientes elegibles.</p></div>
          <div><span>04</span><strong>Zona Río</strong><p>Leona Vicario 1452, Interior 21B, Tijuana.</p></div>
        </div>
      </section>

      <section className="answers-section partner-home" aria-labelledby="partner-home-title">
        <div className="answers-heading">
          <p className="kicker gold">RED DE SOCIOS NONE32</p>
          <h2 id="partner-home-title">Un recurso<br />para hoteles<br />y huéspedes.</h2>
        </div>
        <div className="answers-list">
          <p className="partner-home-copy">Hoteles y negocios locales pueden dar a sus huéspedes acceso directo a un recurso dental bilingüe cercano sin encargarse ellos mismos de la coordinación dental.</p>
          <Link href="/partners"><span>Conoce la red de socios NONE32</span><b>→</b></Link>
          <a href="mailto:partnersofnone32@gmail.com"><span>Habla con nuestro equipo de alianzas</span><b>→</b></a>
        </div>
      </section>

      <section id="contact" className="closing-section">
        <div>
          <p className="kicker gold">NONE32 · TIJUANA</p>
          <h2>Empieza <em>aquí.</em></h2>
          <p className="closing-address">Leona Vicario 1452, Interior 21B · Zona Río · Tijuana, Baja California</p>
        </div>
        <div className="button-row closing-buttons">
          <a className="button button-gold" href={whatsapp}>Agenda tu cita <span>→</span></a>
          <a className="button button-clear" href="tel:+526648816589">Llama al +52 664 881 6589</a>
        </div>
      </section>

      <SiteFooter language="es" />
    </main>
  );
}
