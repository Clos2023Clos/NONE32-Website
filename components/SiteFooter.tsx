import Link from 'next/link';

type Language = 'en' | 'es';

const logoUrl = 'https://framerusercontent.com/images/KKpZfPwzmZcT7F6ex8PXATYkw4.png?height=450&width=800';

export function SiteFooter({ language = 'en' }: { language?: Language }) {
  const whatsapp = language === 'es'
    ? 'https://wa.me/526648816589?text=Hola%20NONE32%2C%20me%20gustar%C3%ADa%20agendar%20una%20consulta.'
    : 'https://wa.me/526648816589?text=Hello%20NONE32%2C%20I%27d%20like%20to%20schedule%20a%20consultation.';

  const nav = language === 'es'
    ? [
        ['Inicio', '/es#home'],
        ['Tratamientos', '/es#treatments'],
        ['Nuestra clínica', '/es#clinic'],
        ['Pacientes de EE.UU.', '/es#us-patients'],
        ['Socios', '/partners'],
        ['Contacto', '/es#contact'],
        ['Privacidad', '/privacy'],
        ['Mapa del sitio', '/sitemap.xml']
      ] as const
    : [
        ['Home', '/#home'],
        ['Treatments', '/#treatments'],
        ['Our clinic', '/#clinic'],
        ['U.S. patients', '/#us-patients'],
        ['Partners', '/partners'],
        ['Contact', '/#contact'],
        ['Privacy', '/privacy'],
        ['Sitemap', '/sitemap.xml']
      ] as const;

  return (
    <footer className="site-footer">
      <div className="footer-art" aria-hidden="true"><span /></div>
      <div className="footer-center">
        <img src={logoUrl} alt="NONE32" width="205" height="68" />
        <p>WE GET IT. WE GOT YOU.</p>
        <div className="footer-address">
          <strong>TIJUANA, MX</strong>
          <span>Leona Vicario 1452, Interior 21B · Zona Río</span>
          <a href="tel:+526648816589">+52 664 881 6589</a>
        </div>
      </div>
      <div className="footer-action">
        <a href={whatsapp} aria-label={language === 'es' ? 'Agenda tu cita' : 'Book your appointment'}>
          {language === 'es' ? <>AGENDA TU<br />CITA</> : <>BOOK YOUR<br />APPOINTMENT</>} <span>→</span>
        </a>
      </div>
      <nav className="footer-nav" aria-label={language === 'es' ? 'Navegación de pie de página' : 'Footer navigation'}>
        {nav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
      </nav>
      <div className="footer-bottom">
        <span>© 2026 NONE32. {language === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}</span>
        <span>{language === 'es' ? 'Pacientes de EE.UU. bienvenidos.' : 'U.S. patients welcome.'}</span>
      </div>
    </footer>
  );
}
