import type { TreatmentPageData } from '@/lib/treatments';
import approvedTreatmentComposite from '@/lib/treatment-approved';

const positionByType: Record<TreatmentPageData['visual'], string> = {
  implant: '0%',
  'full-arch': '25%',
  crown: '50%',
  veneer: '75%',
  general: '100%'
};

const altByType: Record<TreatmentPageData['visual'], string> = {
  implant: 'Dental implant, abutment and crown in the approved NONE32 editorial treatment artwork',
  'full-arch': 'All-on-4 full-arch restoration in the approved NONE32 editorial treatment artwork',
  crown: 'Ceramic crown and prepared tooth in the approved NONE32 editorial treatment artwork',
  veneer: 'Veneers and smile design in the approved NONE32 editorial treatment artwork',
  general: 'General dentistry close-up in the approved NONE32 editorial treatment artwork'
};

export function ProcedureVisual({ type }: { type: TreatmentPageData['visual'] }) {
  return (
    <figure className={`procedure-visual procedure-visual-${type}`}>
      <div className="procedure-light procedure-light-one" />
      <div className="procedure-light procedure-light-two" />
      <div
        className="approved-procedure-frame"
        role="img"
        aria-label={altByType[type]}
        style={{
          backgroundImage: `url(${approvedTreatmentComposite})`,
          backgroundPosition: `${positionByType[type]} 19%`
        }}
      />
    </figure>
  );
}
