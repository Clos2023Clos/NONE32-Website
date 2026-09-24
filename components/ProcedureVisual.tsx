import type { TreatmentPageData } from '@/lib/treatments';

const panelByType: Record<TreatmentPageData['visual'], { index: number; alt: string }> = {
  implant: {
    index: 0,
    alt: 'Dental implant, abutment and ceramic crown from the approved NONE32 treatment artwork'
  },
  'full-arch': {
    index: 1,
    alt: 'All-on-4 full-arch restoration from the approved NONE32 treatment artwork'
  },
  crown: {
    index: 2,
    alt: 'Ceramic crown and prepared tooth from the approved NONE32 treatment artwork'
  },
  veneer: {
    index: 3,
    alt: 'Veneers and smile design from the approved NONE32 treatment artwork'
  },
  general: {
    index: 4,
    alt: 'General dentistry close-up from the approved NONE32 treatment artwork'
  }
};

export function ProcedureVisual({ type }: { type: TreatmentPageData['visual'] }) {
  const panel = panelByType[type];

  return (
    <figure className={`procedure-visual procedure-visual-${type}`}>
      <div className="procedure-light procedure-light-one" />
      <div className="procedure-light procedure-light-two" />

      <div
        role="img"
        aria-label={panel.alt}
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
          src="/assets/treatments/approved-montage.jpg"
          alt=""
          aria-hidden="true"
          loading="eager"
          decoding="sync"
          draggable={false}
          style={{
            position: 'absolute',
            top: 0,
            left: `${-panel.index * 100}%`,
            width: '500%',
            height: '100%',
            maxWidth: 'none',
            display: 'block'
          }}
        />
      </div>
    </figure>
  );
}
