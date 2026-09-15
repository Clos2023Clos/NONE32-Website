import Link from 'next/link';

const logoUrl = 'https://framerusercontent.com/images/KKpZfPwzmZcT7F6ex8PXATYkw4.png?height=450&width=800';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <img src={logoUrl} alt="NONE32" width="190" height="62" />
        <p>We get it. We got you.</p>
      </div>
      <div className="footer-location">
        <strong>Tijuana, Baja California, Mexico</strong>
        <span>U.S. patients welcome</span>
        <a href="tel:+526648816589">+52 664 881 6589</a>
      </div>
      <div className="footer-links">
        <Link href="/en/dental-implants-tijuana">Treatments</Link>
        <Link href="/en/dentist-for-us-patients">For U.S. patients</Link>
        <Link href="/en/about-none32">Our clinic</Link>
        <Link href="/en/faq">Resources</Link>
        <Link href="/en/contact">Contact</Link>
      </div>
      <div className="footer-meta">
        <span>© 2026 NONE32. All rights reserved.</span>
        <div><Link href="/en/privacy">Privacy</Link><Link href="/en/terms">Terms</Link><Link href="/sitemap.xml">Sitemap</Link></div>
      </div>
    </footer>
  );
}
