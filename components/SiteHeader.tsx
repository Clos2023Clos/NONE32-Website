import Link from 'next/link';

type Language = 'en' | 'es';

const navByLanguage = {
  en: [
    ['Home', '/#home'],
    ['Treatments', '/#treatments'],
    ['Our clinic', '/#clinic'],
    ['U.S. patients', '/#us-patients'],
    ['Partners', '/partners'],
    ['Contact', '/#contact']
  ],
  es: [
    ['Inicio', '/es#home'],
    ['Tratamientos', '/es#treatments'],
    ['Nuestra clínica', '/es#clinic'],
    ['Pacientes de EE.UU.', '/es#us-patients'],
    ['Socios', '/partners'],
    ['Contacto', '/es#contact']
  ]
} as const;

const logoUrl = 'https://framerusercontent.com/images/KKpZfPwzmZcT7F6ex8PXATYkw4.png?height=450&width=800';

export function SiteHeader({ language = 'en' }: { language?: Language }) {
  const nav = navByLanguage[language];
  const whatsapp = language === 'es'
    ? 'https://wa.me/526648816589?text=Hola%20NONE32%2C%20me%20gustar%C3%ADa%20agendar%20una%20consulta.'
    : 'https://wa.me/526648816589?text=Hello%20NONE32%2C%20I%27d%20like%20to%20schedule%20a%20consultation.';

  return (
    <header className="site-header">
      <Link className="brand" href={language === 'es' ? '/es' : '/'} aria-label="NONE32 home">
        <img src={logoUrl} alt="NONE32" width="160" height="56" />
      </Link>
      <nav className="desktop-nav" aria-label={language === 'es' ? 'Navegación principal' : 'Primary navigation'}>
        {nav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
      </nav>
      <div className="header-actions">
        <a className="header-book" href={whatsapp}>
          {language === 'es' ? 'Agenda tu cita' : 'Book your appointment'} <span>→</span>
        </a>
        <div className="language-switch" aria-label={language === 'es' ? 'Selector de idioma' : 'Language selector'}>
          <Link className={language === 'en' ? 'is-active' : 'is-muted'} href="/" aria-current={language === 'en' ? 'page' : undefined}>EN</Link>
          <span>|</span>
          <Link className={language === 'es' ? 'is-active' : 'is-muted'} href="/es" aria-current={language === 'es' ? 'page' : undefined}>ES</Link>
        </div>
      </div>
    </header>
  );
}
