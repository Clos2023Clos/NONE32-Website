import Link from 'next/link';

const nav = [
  ['Treatments', '/en/dental-implants-tijuana'],
  ['For U.S. patients', '/en/dentist-for-us-patients'],
  ['Our clinic', '/en/about-none32'],
  ['Results', '/en/#results'],
  ['Resources', '/en/faq'],
  ['Contact', '/en/contact']
] as const;

const logoUrl = 'https://framerusercontent.com/images/KKpZfPwzmZcT7F6ex8PXATYkw4.png?height=450&width=800';

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/en/" aria-label="NONE32 home">
        <img src={logoUrl} alt="NONE32" width="150" height="52" />
      </Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {nav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
      </nav>
      <div className="header-actions">
        <Link className="button button-outline button-compact" href="/en/contact">Book your visit</Link>
        <div className="language-switch" aria-label="Language selector">
          <Link className="is-active" href="/en/">EN</Link><span>/</span><Link href="/es/">ES</Link>
        </div>
      </div>
    </header>
  );
}
