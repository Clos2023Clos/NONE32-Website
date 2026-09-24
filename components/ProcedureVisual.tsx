import type { TreatmentPageData } from '@/lib/treatments';
import implantSrc from '@/lib/procedure-approved/implant';
import fullArchSrc from '@/lib/procedure-approved/full-arch';
import crownSrc from '@/lib/procedure-approved/crown';
import veneerSrc from '@/lib/procedure-approved/veneer';
import generalSrc from '@/lib/procedure-approved/general';

const visuals = {
  implant: {
    src: implantSrc,
    alt: 'Dental implant with ceramic crown, abutment and implant fixture'
  },
  'full-arch': {
    src: fullArchSrc,
    alt: 'All-on-4 full-arch dental restoration supported by implants'
  },
  crown: {
    src: crownSrc,
    alt: 'Ceramic dental crown restoration above a prepared tooth'
  },
  veneer: {
    src: veneerSrc,
    alt: 'Porcelain veneers and smile design'
  },
  general: {
    src: generalSrc,
    alt: 'Natural molar representing preventive and general dentistry'
  }
} as const;

export function ProcedureVisual({ type }: { type: TreatmentPageData['visual'] }) {
  const visual = visuals[type];

  return (
    <figure
      className={`procedure-visual procedure-visual-${type}`}
      style={{ overflow: 'hidden', background: '#0f0d0b' }}
    >
      <img
        src={visual.src}
        alt={visual.alt}
        loading="eager"
        decoding="async"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          display: 'block'
        }}
      />
    </figure>
  );
}
