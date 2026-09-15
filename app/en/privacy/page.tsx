import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Notice',
  description: 'Website privacy notice for NONE32 in Tijuana, Baja California, Mexico.',
  alternates: { canonical: 'https://www.none32.com/en/privacy' }
};

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <section className="legal-hero">
        <p className="kicker gold">NONE32 · TIJUANA, MEXICO</p>
        <h1>Privacy Notice.</h1>
      </section>
      <article className="legal-content">
        <p><strong>Last updated: September 2026.</strong></p>
        <p>NONE32, located at Leona Vicario 1452, Interior 21B, Zona Río, Tijuana, Baja California, Mexico, is responsible for the personal information it receives through this website and through communications initiated from it.</p>

        <h2>Information you choose to share</h2>
        <p>When you contact NONE32 by telephone, WhatsApp, email, an appointment request, or another communication channel, you may choose to provide information such as your name, contact details, treatment interests, appointment preferences and other information necessary to respond to your request.</p>

        <h2>Health and treatment information</h2>
        <p>Clinical histories, radiographs, photographs, diagnoses, treatment records, insurance information and other health-related information are handled separately as part of the clinic’s patient-care processes. When a website or patient-portal form collects sensitive health information, the corresponding patient privacy notice and consent process will apply.</p>

        <h2>Why information is used</h2>
        <p>Information may be used to answer questions, coordinate appointments, provide requested treatment information, communicate before or after a visit, assist eligible patients with reimbursement documentation, maintain security, and comply with applicable legal or clinical obligations.</p>

        <h2>Website technology</h2>
        <p>The site may use technical information necessary for security and normal operation. If analytics, advertising cookies or additional tracking technologies are enabled, this notice and any required consent controls will be updated accordingly.</p>

        <h2>Your privacy rights</h2>
        <p>You may contact NONE32 to request access to, correction of, cancellation of, or opposition to the processing of personal information when applicable, and to ask questions about how your information is handled.</p>
        <p>For privacy requests, call <a href="tel:+526648816589">+52 664 881 6589</a> or contact the clinic through its official communication channels. We may need to verify your identity before acting on a request.</p>

        <h2>Changes to this notice</h2>
        <p>This notice may be updated as the website, patient portal, analytics tools, or clinic processes change. The current version will be published on this page with its update date.</p>

        <p><Link href="/en/">← Return to NONE32</Link></p>
      </article>
    </main>
  );
}
