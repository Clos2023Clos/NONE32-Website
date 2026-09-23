import Link from 'next/link';

const logoUrl = 'https://framerusercontent.com/images/KKpZfPwzmZcT7F6ex8PXATYkw4.png?height=450&width=800';
const whatsapp = 'https://wa.me/526648816589?text=Hello%20NONE32%2C%20I%27d%20like%20to%20schedule%20a%20consultation.';

export function SiteFooter() {
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
        <a href={whatsapp} aria-label="Book your appointment">BOOK YOUR<br />APPOINTMENT <span>→</span></a>
      </div>
      <nav className="footer-nav" aria-label="Footer navigation">
        <Link href="/#home">Home</Link>
        <Link href="/#treatments">Treatments</Link>
        <Link href="/#clinic">Our clinic</Link>
        <Link href="/#us-patients">U.S. patients</Link>
        <Link href="/partners">Partners</Link>
        <Link href="/#contact">Contact</Link>
        <Link href="/privacy">Privacy</Link>
        <Link href="/sitemap.xml">Sitemap</Link>
      </nav>
      <div className="footer-bottom"><span>© 2026 NONE32. All rights reserved.</span><span>U.S. patients welcome.</span></div>
    </footer>
  );
}
