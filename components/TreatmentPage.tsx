import Link from 'next/link';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { ProcedureVisual } from '@/components/ProcedureVisual';
import { treatmentPages, type TreatmentPageData } from '@/lib/treatments';

const whatsappBase = 'https://wa.me/526648816589?text=';

export function TreatmentPage({ data }: { data: TreatmentPageData }) {
  const whatsapp = `${whatsappBase}${encodeURIComponent(`Hello NONE32, I'd like to know if ${data.navLabel} is right for me.`)}`;
  const related = Object.values(treatmentPages).filter((item) => item.slug !== data.slug).slice(0, 4);

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      name: data.title,
      description: data.seoDescription,
      url: `https://none32.com/treatments/${data.slug}`,
      lastReviewed: '2026-09-24',
      medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
      about: {
        '@type': 'MedicalProcedure',
        name: data.navLabel
      },
      publisher: {
        '@type': 'Dentist',
        name: 'NONE32',
        url: 'https://none32.com/',
        telephone: '+52-664-881-6589',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Leona Vicario 1452, Interior 21B',
          addressLocality: 'Tijuana',
          addressRegion: 'Baja California',
          postalCode: '22010',
          addressCountry: 'MX'
        }
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: data.title,
      provider: { '@type': 'Dentist', name: 'NONE32' },
      areaServed: ['Tijuana', 'San Diego County', 'Southern California'],
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceUrl: `https://none32.com/treatments/${data.slug}`
      }
    }
  ];

  return (
    <main className="treatment-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="treatment-hero">
        <SiteHeader />
        <div className="treatment-hero-grid">
          <div className="treatment-hero-copy">
            <p className="kicker gold">{data.number} · NONE32 TREATMENT GUIDE</p>
            <h1>{data.displayTitle.split('\n').map((line, index) => <span key={line}>{line}{index === 0 && <br />}</span>)}</h1>
            <p className="treatment-dek">{data.dek}</p>
            <div className="button-row">
              <a className="button button-gold" href={whatsapp}>Talk to NONE32 <span>→</span></a>
              <Link className="button button-clear" href="/#treatments">All treatments</Link>
            </div>
          </div>
          <ProcedureVisual type={data.visual} />
        </div>
        <div className="treatment-facts">
          {data.heroFacts.map((fact) => <div key={fact.label}><span>{fact.label}</span><strong>{fact.value}</strong></div>)}
        </div>
      </section>

      <section className="treatment-intro-band">
        <p>Clear information. Real limitations. Individual planning.</p>
        <strong>NO TWO PATIENTS ARE THE SAME.</strong>
      </section>

      <section className="treatment-sections">
        {data.sections.map((section, index) => (
          <article className={`treatment-section ${index % 2 ? 'is-offset' : ''}`} key={section.title}>
            <div className="treatment-section-index">{String(index + 1).padStart(2, '0')}</div>
            <div className="treatment-section-copy">
              <p className="kicker gold">{section.eyebrow}</p>
              <h2>{section.title}</h2>
              {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.bullets && (
                <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
              )}
              {section.note && <div className="treatment-note">{section.note}</div>}
            </div>
          </article>
        ))}
      </section>

      <section className="treatment-reality">
        <div>
          <p className="kicker gold">THE NONE32 STANDARD</p>
          <h2>We get why you are asking.</h2>
        </div>
        <div>
          <p>Patients should not have to search a Facebook group to discover the question they wish they had asked before treatment. Our goal is to explain the plan, alternatives, limitations and expected sequence before you commit.</p>
          <p>That does not mean every outcome can be guaranteed. It means uncertainty should be discussed honestly and the treatment should be built around the person in front of us.</p>
          <strong>WE GET IT. WE GOT YOU.</strong>
        </div>
      </section>

      <section className="treatment-sources" aria-labelledby="evidence-title">
        <div>
          <p className="kicker gold">EVIDENCE-INFORMED PATIENT EDUCATION</p>
          <h2 id="evidence-title">Read beyond the marketing.</h2>
          <p>These pages are written for patient education and are not a diagnosis. Clinical decisions are made after an examination and appropriate records. We reference independent professional and scientific sources so you can continue reading.</p>
        </div>
        <div className="source-links">
          {data.sources.map((source) => <a href={source.href} key={source.href} target="_blank" rel="noreferrer"><span>{source.label}</span><b>↗</b></a>)}
        </div>
      </section>

      <section className="related-treatments">
        <p className="kicker gold">RELATED TREATMENTS</p>
        <div className="related-treatment-grid">
          {related.map((item) => (
            <Link href={`/treatments/${item.slug}`} key={item.slug}>
              <span>{item.number}</span>
              <strong>{item.navLabel}</strong>
              <b>→</b>
            </Link>
          ))}
        </div>
      </section>

      <section className="treatment-cta">
        <div>
          <p className="kicker gold">YOUR CASE IS THE NEXT STEP</p>
          <h2>Information first.<br /><em>Then a plan.</em></h2>
        </div>
        <div>
          <p>Send us your question, recent X-rays or treatment plan if you have them. We will tell you what information is still needed before a meaningful recommendation can be made.</p>
          <a className="button button-gold" href={whatsapp}>Start on WhatsApp <span>→</span></a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
