import Image from 'next/image';
import Link from 'next/link';

const nav = [
  ['Treatments', '/en/dental-implants-tijuana'],
  ['For U.S. patients', '/en/dentist-for-us-patients'],
  ['Our clinic', '/en/about-none32'],
  ['Results', '/en/#results'],
  ['Resources', '/en/faq'],
  ['Contact', '/en/contact']
] as const;

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/en/" aria-label="NONE32 home">
        <Image
          src="/assets/none32-logo-white.webp"
          alt="NONE32"
          width={196}
          height={64}
          priority
        />
      </Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {nav.map(([label, href]) => (
          <Link key={href} href={href}>{label}</Link>
        ))}
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
