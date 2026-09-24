import type { TreatmentPageData } from '@/lib/treatments';

function ImplantVisual() {
  return (
    <svg viewBox="0 0 900 760" role="img" aria-label="Exploded dental implant with crown, abutment and threaded implant fixture">
      <defs>
        <linearGradient id="ivory" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#fffdf5"/><stop offset="0.45" stopColor="#e9dec9"/><stop offset="1" stopColor="#bda98e"/></linearGradient>
        <linearGradient id="metal" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#404044"/><stop offset="0.22" stopColor="#d7d4cf"/><stop offset="0.48" stopColor="#77777c"/><stop offset="0.72" stopColor="#f2eee7"/><stop offset="1" stopColor="#4a494c"/></linearGradient>
        <filter id="shadow"><feDropShadow dx="0" dy="20" stdDeviation="18" floodColor="#000" floodOpacity=".45"/></filter>
      </defs>
      <ellipse cx="470" cy="695" rx="190" ry="28" fill="#8f6a31" opacity=".22"/>
      <g filter="url(#shadow)">
        <path d="M340 110 C352 40 425 32 468 61 C503 29 581 48 596 116 C610 177 581 245 541 276 C497 310 411 309 368 273 C333 243 328 170 340 110Z" fill="url(#ivory)"/>
        <path d="M400 114 C427 88 452 90 469 115 C491 84 524 88 546 115" fill="none" stroke="#c7b89f" strokeWidth="9" strokeLinecap="round" opacity=".72"/>
        <path d="M384 278 L552 278 L528 355 Q468 392 407 355 Z" fill="url(#metal)"/>
        <rect x="430" y="350" width="76" height="48" rx="16" fill="#7b7978"/>
        <path d="M414 405 Q468 385 522 405 L535 622 Q469 662 400 622 Z" fill="url(#metal)"/>
        {Array.from({ length: 10 }).map((_, i) => <path key={i} d={`M402 ${438 + i * 18} Q468 ${456 + i * 18} 532 ${438 + i * 18}`} fill="none" stroke="#2f2f31" strokeWidth="9" strokeLinecap="round"/>)}
        <path d="M432 405 L431 626" stroke="#f4eee6" strokeWidth="4" opacity=".55"/>
      </g>
    </svg>
  );
}

function FullArchVisual() {
  return (
    <svg viewBox="0 0 900 760" role="img" aria-label="Full arch fixed dental prosthesis supported by four implants">
      <defs>
        <linearGradient id="archCeramic" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#fffdf7"/><stop offset="1" stopColor="#cab89e"/></linearGradient>
        <linearGradient id="archMetal" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#515055"/><stop offset=".5" stopColor="#eee9e1"/><stop offset="1" stopColor="#444449"/></linearGradient>
        <filter id="archShadow"><feDropShadow dx="0" dy="22" stdDeviation="18" floodColor="#000" floodOpacity=".42"/></filter>
      </defs>
      <ellipse cx="450" cy="680" rx="300" ry="34" fill="#916a34" opacity=".18"/>
      <g filter="url(#archShadow)">
        <path d="M170 305 Q450 85 730 305 Q696 424 624 493 Q450 585 276 493 Q204 424 170 305Z" fill="none" stroke="#a58c6c" strokeWidth="42" opacity=".28"/>
        {[-230,-165,-100,-35,35,100,165,230].map((dx,i) => {
          const x=450+dx; const y=280+Math.abs(dx)*.18;
          return <path key={i} d={`M${x-38} ${y} Q${x} ${y-54} ${x+38} ${y} L${x+28} ${y+94} Q${x} ${y+122} ${x-28} ${y+94}Z`} fill="url(#archCeramic)" stroke="#c3b395" strokeWidth="3"/>;
        })}
        <path d="M208 372 Q450 167 692 372 Q650 470 572 516 Q450 571 328 516 Q250 470 208 372Z" fill="none" stroke="#d6c7b0" strokeWidth="28" opacity=".7"/>
        {[295,395,505,605].map((x,i) => <g key={x} transform={`rotate(${i===0?-13:i===3?13:0} ${x} 560)`}><rect x={x-21} y="484" width="42" height="82" rx="12" fill="url(#archMetal)"/><path d={`M${x-28} 565 L${x+28} 565 L${x+18} 665 L${x-18} 665Z`} fill="url(#archMetal)"/>{[0,1,2,3].map(j=><path key={j} d={`M${x-22} ${590+j*18} L${x+22} ${584+j*18}`} stroke="#252529" strokeWidth="7"/> )}</g>)}
      </g>
    </svg>
  );
}

function CrownVisual() {
  return (
    <svg viewBox="0 0 900 760" role="img" aria-label="Dental crown positioned above a prepared natural tooth">
      <defs>
        <linearGradient id="crownIvory" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#fffef8"/><stop offset=".55" stopColor="#e7dbc3"/><stop offset="1" stopColor="#b7a184"/></linearGradient>
        <linearGradient id="dentin" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#d8b47c"/><stop offset="1" stopColor="#9b7347"/></linearGradient>
        <filter id="crownShadow"><feDropShadow dx="0" dy="25" stdDeviation="20" floodColor="#000" floodOpacity=".45"/></filter>
      </defs>
      <ellipse cx="450" cy="682" rx="180" ry="30" fill="#916a34" opacity=".2"/>
      <g filter="url(#crownShadow)">
        <path d="M302 118 C315 45 388 42 432 70 C474 38 552 49 584 112 C616 176 584 276 532 312 C485 345 399 340 352 304 C310 271 291 180 302 118Z" fill="url(#crownIvory)"/>
        <path d="M347 311 Q449 345 552 311" fill="none" stroke="#927b60" strokeWidth="10" opacity=".35"/>
        <path d="M382 402 Q449 367 518 402 L535 540 Q492 594 450 604 Q408 594 365 540Z" fill="url(#dentin)"/>
        <path d="M399 429 Q449 407 501 429 L507 520 Q479 550 450 558 Q421 550 393 520Z" fill="#f0c88a" opacity=".75"/>
        <path d="M414 598 Q450 618 486 598 L478 665 Q450 690 422 665Z" fill="#c79a60"/>
      </g>
    </svg>
  );
}

function VeneerVisual() {
  return (
    <svg viewBox="0 0 900 760" role="img" aria-label="Thin porcelain veneer shell positioned in front of a natural anterior tooth">
      <defs>
        <linearGradient id="toothBase" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#fffaf0"/><stop offset="1" stopColor="#cdbb9e"/></linearGradient>
        <linearGradient id="veneerShell" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#ffffff" stopOpacity=".98"/><stop offset=".55" stopColor="#e8dfd1" stopOpacity=".94"/><stop offset="1" stopColor="#b9a58a" stopOpacity=".9"/></linearGradient>
        <filter id="veneerShadow"><feDropShadow dx="0" dy="22" stdDeviation="17" floodColor="#000" floodOpacity=".38"/></filter>
      </defs>
      <ellipse cx="430" cy="682" rx="165" ry="28" fill="#916a34" opacity=".17"/>
      <g filter="url(#veneerShadow)">
        <path d="M310 105 Q430 42 550 105 L530 545 Q494 615 430 636 Q366 615 330 545Z" fill="url(#toothBase)" stroke="#b7a58a" strokeWidth="4"/>
        <path d="M550 118 Q640 74 702 143 L688 510 Q655 573 596 589 Q573 583 554 569Z" fill="url(#veneerShell)" stroke="#efe6d8" strokeWidth="5"/>
        <path d="M558 156 Q622 125 673 165 L660 483 Q638 522 601 535" fill="none" stroke="#ffffff" strokeWidth="8" opacity=".65"/>
        <path d="M528 194 L565 194" stroke="#b79255" strokeWidth="3" strokeDasharray="8 10" opacity=".7"/>
        <path d="M526 253 L562 253" stroke="#b79255" strokeWidth="3" strokeDasharray="8 10" opacity=".55"/>
      </g>
    </svg>
  );
}

function GeneralVisual() {
  return (
    <svg viewBox="0 0 900 760" role="img" aria-label="Natural molar with a conservative tooth-colored restoration on the chewing surface">
      <defs>
        <linearGradient id="molar" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#fffef7"/><stop offset=".55" stopColor="#e9ddc6"/><stop offset="1" stopColor="#b8a387"/></linearGradient>
        <linearGradient id="composite" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#f7efe1"/><stop offset="1" stopColor="#c8b79e"/></linearGradient>
        <filter id="molarShadow"><feDropShadow dx="0" dy="22" stdDeviation="18" floodColor="#000" floodOpacity=".42"/></filter>
      </defs>
      <ellipse cx="450" cy="682" rx="180" ry="30" fill="#916a34" opacity=".18"/>
      <g filter="url(#molarShadow)">
        <path d="M286 187 C294 92 375 50 446 92 C516 49 608 95 616 188 C625 291 570 354 549 426 C528 496 537 616 477 642 C446 654 424 615 409 560 C391 617 366 653 335 637 C279 608 301 496 279 426 C255 349 276 286 286 187Z" fill="url(#molar)"/>
        <path d="M330 202 C355 153 397 143 432 179 C470 138 523 151 554 204" fill="none" stroke="#baa98f" strokeWidth="12" strokeLinecap="round"/>
        <path d="M378 168 Q431 135 484 170 L496 230 Q448 265 385 232Z" fill="url(#composite)" stroke="#9f8a6f" strokeWidth="4"/>
        <path d="M390 185 Q435 163 480 187" fill="none" stroke="#fff" strokeWidth="5" opacity=".55"/>
      </g>
    </svg>
  );
}

export function ProcedureVisual({ type }: { type: TreatmentPageData['visual'] }) {
  return <figure className={`procedure-visual procedure-visual-${type}`} aria-hidden={false}>
    <div className="procedure-light procedure-light-one" />
    <div className="procedure-light procedure-light-two" />
    {type === 'implant' && <ImplantVisual />}
    {type === 'full-arch' && <FullArchVisual />}
    {type === 'crown' && <CrownVisual />}
    {type === 'veneer' && <VeneerVisual />}
    {type === 'general' && <GeneralVisual />}
  </figure>;
}
