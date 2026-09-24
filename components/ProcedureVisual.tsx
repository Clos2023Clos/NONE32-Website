import type { TreatmentPageData } from '@/lib/treatments';
import implantSrc from '@/lib/procedure-approved/implant';
import fullArchSrc from '@/lib/procedure-approved/full-arch/index';
import crownSrc from '@/lib/procedure-approved/crown/index';
import veneerSrc from '@/lib/procedure-approved/veneer/index';
import generalSrc from '@/lib/procedure-approved/general/index';

const visuals: Record<TreatmentPageData['visual'], { src: string; alt: string }> = {
  implant: {
    src: implantSrc,
    alt: 'Dental implant with ceramic crown, abutment and implant fixture in the approved NONE32 editorial artwork'
  },
  'full-arch': {
    src: fullArchSrc,
    alt: 'All-on-4 full-arch restoration supported by four implants in the approved NONE32 editorial artwork'
  },
  crown: {
    src: crownSrc,
    alt: 'Ceramic dental crown restoration in the approved NONE32 editorial artwork'
  },
  veneer: {
    src: veneerSrc,
    alt: 'Porcelain veneers in the approved NONE32 editorial artwork'
  },
  general: {
    src: generalSrc,
    alt: 'Natural molar representing general dentistry in the approved NONE32 editorial artwork'
  }
};

export function ProcedureVisual({ type }: { type: TreatmentPageData['visual'] }) {
  const visual = visuals[type];

  return (
    <figure
      className={`procedure-visual procedure-visual-${type}`}
      style={{ position: 'relative', overflow: 'hidden', background: '#0f0d0b' }}
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
          display: 'block',
          zIndex: 2
        }}
      />
    </figure>
  );
}
