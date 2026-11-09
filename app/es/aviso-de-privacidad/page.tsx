import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Aviso de privacidad',
  description: 'Aviso de privacidad de NONE32, clínica dental en Zona Río, Tijuana, Baja California, México.',
  alternates: {
    canonical: 'https://none32.com/es/aviso-de-privacidad',
    languages: {
      es: 'https://none32.com/es/aviso-de-privacidad',
      en: 'https://none32.com/privacy'
    }
  },
  openGraph: {
    title: 'Aviso de privacidad | NONE32',
    description: 'Información sobre el tratamiento de datos personales en NONE32, Tijuana.',
    url: 'https://none32.com/es/aviso-de-privacidad',
    locale: 'es_MX',
    type: 'website'
  }
};

export default function AvisoDePrivacidad() {
  return (
    <main className="legal-page" lang="es-MX">
      <section className="legal-hero">
        <p className="kicker gold">NONE32 · TIJUANA, MÉXICO</p>
        <h1>Aviso de privacidad.</h1>
      </section>
      <article className="legal-content">
        <p><strong>Última actualización: septiembre de 2026.</strong></p>
        <p>NONE32, ubicada en Leona Vicario 1452, interior 21B, Zona Río, Tijuana, Baja California, México, es responsable de los datos personales que recibe a través de este sitio web y de las comunicaciones iniciadas desde él.</p>

        <h2>Información que decides compartir</h2>
        <p>Cuando te comunicas con NONE32 por teléfono, WhatsApp, correo electrónico, mediante una solicitud de cita o por otro canal, puedes proporcionar datos como tu nombre, información de contacto, tratamientos de interés, preferencias de horario y otros datos necesarios para responder a tu solicitud.</p>

        <h2>Información de salud y tratamientos</h2>
        <p>Las historias clínicas, radiografías, fotografías, diagnósticos, registros de tratamiento, información de seguros y otros datos relacionados con la salud se manejan por separado como parte de los procesos de atención de pacientes de la clínica. Cuando un formulario del sitio o del portal del paciente recaba datos sensibles de salud, se aplica el aviso de privacidad del paciente y el proceso de consentimiento correspondientes.</p>

        <h2>Para qué utilizamos la información</h2>
        <p>La información puede utilizarse para responder preguntas, coordinar citas, proporcionar información sobre tratamientos solicitados, comunicarnos contigo antes o después de una visita, ayudar a pacientes elegibles con documentación para reembolsos y mantener la seguridad, así como para cumplir las obligaciones legales o clínicas aplicables.</p>

        <h2>Tecnología del sitio web</h2>
        <p>Este sitio puede utilizar información técnica necesaria para su seguridad y funcionamiento normal. Si se habilitan herramientas de análisis, cookies publicitarias u otras tecnologías de seguimiento adicionales, actualizaremos este aviso y los controles de consentimiento que correspondan.</p>

        <h2>Tus derechos de privacidad</h2>
        <p>Puedes comunicarte con NONE32 para solicitar, cuando corresponda, el acceso, la rectificación, la cancelación o la oposición al tratamiento de tus datos personales (derechos ARCO), así como para hacer preguntas sobre el manejo de tu información.</p>
        <p>Para solicitudes relacionadas con tu privacidad, llama al <a href="tel:+526648816589">+52 664 881 6589</a> o comunícate con la clínica mediante sus canales oficiales. Es posible que necesitemos verificar tu identidad antes de atender una solicitud.</p>

        <h2>Modificaciones de este aviso</h2>
        <p>Este aviso puede actualizarse conforme cambien el sitio web, el portal del paciente, las herramientas de análisis o los procesos de la clínica. La versión vigente se publicará en esta página con su fecha de actualización.</p>

        <p><Link href="/es">← Volver a NONE32</Link></p>
      </article>
    </main>
  );
}
