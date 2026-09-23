import Link from 'next/link';

const nav = [
  ['Home', '/#home'],
  ['Treatments', '/#treatments'],
  ['Our clinic', '/#clinic'],
  ['Experience', '/#experience'],
  ['Partners', '/partners'],
  ['Contact', '/#contact']
] as const;

const logoUrl = 'https://framerusercontent.com/images/KKpZfPwzmZcT7F6ex8PXATYkw4.png?height=450&width=800';
const whatsapp = 'https://wa.me/526648816589?text=Hello%20NONE32%2C%20I%27d%20like%20to%20schedule%20a%20consultation.';

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="NONE32 home">
        <img src={logoUrl} alt="NONE32" width="160" height="56" />
      </Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {nav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
      </nav>
      <div className="header-actions">
        <a className="header-book" href={whatsapp}>Book your appointment <span>→</span></a>
        <div className="language-switch" aria-label="Language selector">
          <span className="is-active">EN</span><span>|</span><span className="is-muted" title="Spanish version coming next">ES</span>
        </div>
      </div>
    </header>
  );
}
