import type { CSSProperties } from 'react';
import type { TreatmentPageData } from '@/lib/treatments';
import approvedTreatmentComposite from '@/lib/treatment-approved';

const SOURCE_WIDTH = 1536;
const SOURCE_HEIGHT = 1024;

type Crop = {
  x: number;
  y: number;
  width: number;
  height: number;
  alt: string;
};

// Exact crops from the user-approved five-panel NONE32 treatment artwork.
// The implant crop is intentionally a little wider so the crown, abutment,
// and full fixture keep the same breathing room seen in the approved reference.
const crops: Record<TreatmentPageData['visual'], Crop> = {
  implant: {
    x: 22,
    y: 143,
    width: 279,
    height: 409,
    alt: 'Dental implant, abutment and ceramic crown from the approved NONE32 treatment artwork'
  },
  'full-arch': {
    x: 315,
    y: 143,
    width: 293,
    height: 409,
    alt: 'All-on-4 full-arch restoration from the approved NONE32 treatment artwork'
  },
  crown: {
    x: 621,
    y: 143,
    width: 294,
    height: 409,
    alt: 'Ceramic crown and prepared tooth from the approved NONE32 treatment artwork'
  },
  veneer: {
    x: 929,
    y: 143,
    width: 294,
    height: 409,
    alt: 'Veneers and smile design from the approved NONE32 treatment artwork'
  },
  general: {
    x: 1236,
    y: 143,
    width: 279,
    height: 409,
    alt: 'General dentistry close-up from the approved NONE32 treatment artwork'
  }
};

function cropImageStyle(crop: Crop): CSSProperties {
  return {
    position: 'absolute',
    width: `${(SOURCE_WIDTH / crop.width) * 100}%`,
    height: 'auto',
    maxWidth: 'none',
    left: `${-(crop.x / crop.width) * 100}%`,
    top: `${-(crop.y / crop.height) * 100}%`,
    display: 'block',
    userSelect: 'none'
  };
}

export function ProcedureVisual({ type }: { type: TreatmentPageData['visual'] }) {
  const crop = crops[type];

  return (
    <figure className={`procedure-visual procedure-visual-${type}`}>
      <div className="procedure-light procedure-light-one" />
      <div className="procedure-light procedure-light-two" />

      <div
        role="img"
        aria-label={crop.alt}
        style={{
          position: 'relative',
          zIndex: 2,
          width: 'min(100%, 440px)',
          aspectRatio: `${crop.width} / ${crop.height}`,
          overflow: 'hidden',
          borderRadius: '26px',
          border: '1px solid rgba(198,154,90,.34)',
          background: '#0b0908',
          boxShadow: '0 28px 70px rgba(0,0,0,.34)'
        }}
      >
        <img
          src={approvedTreatmentComposite}
          alt=""
          aria-hidden="true"
          loading="eager"
          decoding="async"
          draggable={false}
          style={cropImageStyle(crop)}
        />
      </div>
    </figure>
  );
}
