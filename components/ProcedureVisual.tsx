import type { TreatmentPageData } from '@/lib/treatments';

const visuals: Record<TreatmentPageData['visual'], { src: string; alt: string }> = {
  implant: {
    src: '/assets/treatments/implant.webp',
    alt: 'Dental implant, abutment and ceramic crown from the approved NONE32 treatment artwork'
  },
  'full-arch': {
    src: '/assets/treatments/full-arch.webp',
    alt: 'All-on-4 full-arch restoration from the approved NONE32 treatment artwork'
  },
  crown: {
    src: '/assets/treatments/crown.webp',
    alt: 'Ceramic crown and prepared tooth from the approved NONE32 treatment artwork'
  },
  veneer: {
    src: '/assets/treatments/veneer.webp',
    alt: 'Veneers and smile design from the approved NONE32 treatment artwork'
  },
  general: {
    src: '/assets/treatments/general.webp',
    alt: 'General dentistry close-up from the approved NONE32 treatment artwork'
  }
};

export function ProcedureVisual({ type }: { type: TreatmentPageData['visual'] }) {
  const visual = visuals[type];

  return (
    <figure className={`procedure-visual procedure-visual-${type}`}>
      <div className="procedure-light procedure-light-one" />
      <div className="procedure-light procedure-light-two" />
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          width: 'min(100%, 440px)',
          aspectRatio: '270 / 404',
          overflow: 'hidden',
          borderRadius: '26px',
          border: '1px solid rgba(198,154,90,.34)',
          background: '#0b0908',
          boxShadow: '0 28px 70px rgba(0,0,0,.34)'
        }}
      >
        <img
          src={visual.src}
          alt={visual.alt}
          loading="eager"
          decoding="async"
          draggable={false}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            display: 'block'
          }}
        />
      </div>
    </figure>
  );
}
