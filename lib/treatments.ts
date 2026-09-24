export type TreatmentSection = {
  eyebrow: string;
  title: string;
  body: string[];
  bullets?: string[];
  note?: string;
};

export type TreatmentPageData = {
  slug: string;
  number: string;
  navLabel: string;
  title: string;
  displayTitle: string;
  dek: string;
  seoDescription: string;
  visual: 'implant' | 'full-arch' | 'crown' | 'veneer' | 'general';
  heroFacts: { label: string; value: string }[];
  sections: TreatmentSection[];
  sources: { label: string; href: string }[];
};

export const treatmentPages: Record<string, TreatmentPageData> = {
  'dental-implants-tijuana': {
    slug: 'dental-implants-tijuana',
    number: '01',
    navLabel: 'Dental implants',
    title: 'Dental Implants in Tijuana, Mexico',
    displayTitle: 'Dental implants,\nwithout the shortcuts.',
    dek: 'A dental implant is not just a screw. It is a planned rehabilitation that depends on anatomy, bone, biology, bite, materials and time. Our job is to explain what can be done now, what should wait, and why.',
    seoDescription: 'Dental implants in Tijuana at NONE32: understand implant materials, CBCT planning, bone quality, immediate loading, healing time, grafting, expectations and limitations before treatment.',
    visual: 'implant',
    heroFacts: [
      { label: 'The restoration', value: 'Implant + abutment + crown' },
      { label: 'Planning', value: '3D imaging when clinically indicated' },
      { label: 'Reality', value: 'Immediate loading is case-dependent' }
    ],
    sections: [
      {
        eyebrow: 'WHAT AN IMPLANT ACTUALLY IS',
        title: 'Three parts. One biological process.',
        body: [
          'The implant fixture is placed in the jaw and acts as the foundation. An abutment connects that foundation to the visible crown. The crown is the part designed to look and function like a tooth.',
          'The important part happens underneath: the surrounding bone must heal around and maintain contact with the implant surface. That process is called osseointegration. A beautiful crown cannot compensate for poor planning, inadequate stability or unhealthy surrounding tissues.'
        ]
      },
      {
        eyebrow: 'IMPLANT QUALITY',
        title: 'Material matters. So does the system behind it.',
        body: [
          'Many established dental implant systems use commercially pure titanium or titanium alloys because of their long clinical history and biocompatibility. Implant quality is more than the word “titanium”: design, surface characteristics, manufacturing tolerances, genuine restorative components, documentation and long-term availability of parts also matter.',
          'We want patients to know what implant system is being placed. As NONE32 standardizes its implant vendors, this page can also show the exact systems and component documentation used in the clinic.'
        ],
        bullets: [
          'Ask what implant system and restorative components are being used.',
          'Keep the implant record, lot information and restoration details for future maintenance.',
          'Do not judge implant quality from a low package price alone.'
        ]
      },
      {
        eyebrow: 'EXPECTATIONS VS. REALITY',
        title: '“Same-day tooth” and “same-day implant” are not the same promise.',
        body: [
          'An implant may sometimes be placed the day a tooth is removed. A temporary tooth may sometimes be connected soon after placement. Those are separate clinical decisions.',
          'Immediate loading can work predictably in selected situations, but it depends heavily on primary implant stability, bone volume and quality, the need for grafting, implant position, bite forces, parafunctional habits such as clenching or grinding, and systemic or local risk factors. If those conditions are not favorable, allowing the implant to heal before placing it into function is often the safer plan.'
        ],
        note: 'At NONE32, “faster” is never used as a substitute for “appropriate for this patient.”'
      },
      {
        eyebrow: 'YOUR CT / CBCT IS PART OF THE STORY',
        title: 'Bone is not just height and width.',
        body: [
          'Three-dimensional imaging can help evaluate available bone and important anatomy such as the maxillary sinus or the mandibular nerve when it is clinically indicated. It helps us plan position, angulation and whether augmentation may be necessary.',
          'Bone quality cannot be reduced to one number from a scan. Clinical stability at the time of placement, cortical thickness, trabecular structure, the condition of the extraction site and the surgeon’s intra-operative findings all contribute to the final decision.'
        ],
        bullets: [
          'Bone volume and anatomy',
          'Gum and periodontal health',
          'Bite, clenching and grinding',
          'Smoking or vaping and oral hygiene',
          'Medical history, medications and healing capacity',
          'Whether grafting or sinus procedures are needed'
        ]
      },
      {
        eyebrow: 'HEALING TIME',
        title: 'Waiting is sometimes part of doing it well.',
        body: [
          'Implant treatment is often completed in stages. Conventional loading is generally defined as placing the implant into function more than two months after placement; early and immediate protocols shorten that interval in selected cases.',
          'The exact timeline is individual. A grafted site, lower primary stability, compromised bone, infection management or complex reconstruction may extend treatment. The goal is not to force every patient into the same calendar.'
        ]
      },
      {
        eyebrow: 'WHAT PEOPLE ARE NOT ALWAYS TOLD',
        title: 'Implants still need maintenance.',
        body: [
          'An implant cannot develop a cavity, but the tissues around it can become inflamed or lose supporting bone. The crown, screw or other restorative components can also wear, loosen, chip or require maintenance over time.',
          'Long-term success depends on home care, professional maintenance, controlling risk factors and returning when something feels different rather than waiting for a small problem to become a large one.'
        ]
      },
      {
        eyebrow: 'COMING FROM THE U.S.',
        title: 'Plan the return trip before the first procedure.',
        body: [
          'Cross-border implant treatment works best when the complete sequence is understood before surgery: diagnostics, surgery, healing, provisionalization if appropriate, final restoration and maintenance.',
          'We communicate in English and Spanish and can provide treatment documentation for eligible out-of-network reimbursement. Insurance coverage and reimbursement are determined by the patient’s plan, not by the clinic.'
        ]
      }
    ],
    sources: [
      { label: 'American Dental Association — Dental Implants', href: 'https://www.mouthhealthy.org/all-topics-a-z/implants' },
      { label: 'ITI Consensus — Loading Protocols', href: 'https://academy.iti.org/academy/consensus-database/consensus-statement/-/consensus/loading-protocols-definition-of-terms-and-general-statement/1310' },
      { label: 'ITI Consensus — Immediate Placement and Loading Selection', href: 'https://network.iti.org/it/academy/consensus-database/consensus-statement/-/consensus/selection-criteria-for-immediate-implant-placement-and-immediate-loading-for-single-tooth-replacement-in-the-maxillary-esthetic-zone/2305' },
      { label: 'Clinical Oral Implants Research — Bone assessment and primary stability', href: 'https://pubmed.ncbi.nlm.nih.gov/37840388/' }
    ]
  },

  'all-on-4-tijuana': {
    slug: 'all-on-4-tijuana',
    number: '02',
    navLabel: 'All-on-4 / full arch',
    title: 'All-on-4 and Full-Arch Dental Implants in Tijuana',
    displayTitle: 'A full arch is a\nprosthetic plan first.',
    dek: 'All-on-4 can be an excellent full-arch solution, but four implants are not a universal formula. The final tooth position, bone anatomy, implant distribution, bite and long-term maintenance should drive the plan.',
    seoDescription: 'All-on-4 and full-arch implants in Tijuana: candidacy, immediate fixed teeth, CT planning, four vs six implants, provisional and final teeth, healing, maintenance and limitations.',
    visual: 'full-arch',
    heroFacts: [
      { label: 'Goal', value: 'A fixed full-arch restoration' },
      { label: 'Implant count', value: 'Four is common, not automatic' },
      { label: 'Immediate teeth', value: 'Possible in selected cases' }
    ],
    sections: [
      {
        eyebrow: 'THE CONCEPT',
        title: 'Replace an arch, not just individual teeth.',
        body: [
          'A fixed complete-arch prosthesis replaces the teeth of an entire upper or lower arch and is supported by strategically distributed implants. The All-on-4 concept commonly uses four implants, often with the posterior implants angled to improve distribution and work around anatomy.',
          'The number of implants should follow the prosthetic design, arch form, available bone, opposing bite, cantilever length and restorative material. In some patients, six implants or a different design may provide a better solution.'
        ]
      },
      {
        eyebrow: 'IMMEDIATE FIXED TEETH',
        title: 'Often possible. Never something we should promise before stability is confirmed.',
        body: [
          'Immediate fixed provisional teeth are supported by clinical evidence in carefully selected edentulous patients. The key word is selected. Primary stability must be confirmed and the prosthesis must be designed to control functional load while the implants heal.',
          'If one or more implants do not achieve the required stability, if significant grafting is needed, or if other risk factors are present, the safer pathway may involve a staged or delayed loading protocol.'
        ]
      },
      {
        eyebrow: 'WHAT YOUR 3D PLAN SHOULD ANSWER',
        title: 'Where the teeth need to be comes before where the implants can go.',
        body: [
          'Full-arch treatment should be planned backward from the final restoration. That means evaluating smile line, lip support, available restorative space, bone volume, implant distribution, anatomy, bite and hygiene access before surgery.',
          'A scan can show anatomy and available bone, but the final decision also depends on clinical examination, tissue condition, tooth prognosis if teeth remain, and what happens during surgery.'
        ],
        bullets: [
          'Are remaining teeth truly hopeless, or can some be predictably preserved?',
          'Is a fixed bridge the right prosthesis for the patient’s anatomy and hygiene ability?',
          'Are four implants enough for this arch and restorative design?',
          'Can a provisional bridge be loaded immediately?',
          'Will grafting, sinus treatment or additional implants improve the plan?'
        ]
      },
      {
        eyebrow: 'THE PROVISIONAL IS NOT THE FINAL',
        title: 'Day-one teeth and final teeth have different jobs.',
        body: [
          'When immediate loading is appropriate, the first fixed bridge is usually a provisional restoration. Its job is to provide appearance and controlled function during healing while protecting the implants from excessive forces.',
          'After healing and tissue maturation, the final prosthesis can be designed around the established bite, phonetics, smile, cleansability and material choice. Patients should understand from the beginning what is provisional, what is final and what may change between the two.'
        ]
      },
      {
        eyebrow: 'EXPECTATIONS AFTER SURGERY',
        title: 'Fixed does not mean “eat anything tomorrow.”',
        body: [
          'Swelling, bruising, tenderness and a temporary change in speech are common early experiences after extensive surgery. A modified diet and careful hygiene are important while tissues heal and while an immediately loaded provisional is protected.',
          'The bridge must also be cleaned underneath. A fixed full arch still requires daily hygiene and professional maintenance.'
        ]
      },
      {
        eyebrow: 'LONG-TERM REALITY',
        title: 'The implants and the prosthesis have different maintenance needs.',
        body: [
          'Implants can remain stable while a prosthetic component needs repair, adjustment or replacement. Full-arch restorations can experience wear, screw-related issues, chipping or other technical complications; the tissues around implants can also develop biological complications.',
          'That is why the best full-arch plan includes a maintenance strategy, not just a surgery date.'
        ]
      },
      {
        eyebrow: 'CROSS-BORDER CARE',
        title: 'Know the complete number of visits before you commit.',
        body: [
          'For patients traveling from California or elsewhere in the U.S., we plan the sequence around diagnostics, surgery, provisional treatment, healing checks, final records and delivery. Complex full-arch treatment should not be sold as a one-trip procedure unless the actual clinical sequence supports that claim.',
          'You should leave the consultation knowing what happens if immediate loading is not possible and how follow-up will be handled.'
        ]
      }
    ],
    sources: [
      { label: 'ITI Consensus — Fixed Prostheses in Edentulous Jaws', href: 'https://academy.iti.org/academy/consensus-database/consensus-statement/-/consensus/loading-protocols-for-fixed-prostheses-in-edentulous-jaws/1313' },
      { label: 'ITI Consensus — Number of Implants for Complete-Arch Prostheses', href: 'https://network.iti.org/academy/consensus-database/consensus-statement/-/consensus/number-of-implants-placed-for-complete-arch-fixed-prostheses/1701' },
      { label: 'PubMed — Complete-arch fixed implant prostheses by loading time', href: 'https://pubmed.ncbi.nlm.nih.gov/31433096/' },
      { label: 'PubMed — All-on-4 systematic review', href: 'https://pubmed.ncbi.nlm.nih.gov/28298995/' }
    ]
  },

  'dental-crowns-tijuana': {
    slug: 'dental-crowns-tijuana',
    number: '03',
    navLabel: 'Crowns & restorations',
    title: 'Dental Crowns and Restorations in Tijuana',
    displayTitle: 'A crown should solve\na structural problem.',
    dek: 'Crowns can restore badly damaged, fractured or heavily restored teeth, but they require irreversible preparation. The material, margin, bite and condition of the tooth underneath matter as much as the color.',
    seoDescription: 'Dental crowns in Tijuana at NONE32: zirconia, ceramic crown planning, tooth preparation, root canal considerations, bite, longevity, limitations and what to expect.',
    visual: 'crown',
    heroFacts: [
      { label: 'Purpose', value: 'Protect and restore a compromised tooth' },
      { label: 'Reality', value: 'Tooth preparation is irreversible' },
      { label: 'Material', value: 'Selected for tooth, bite and esthetics' }
    ],
    sections: [
      {
        eyebrow: 'WHEN A CROWN MAKES SENSE',
        title: 'Not every damaged tooth needs the same amount of dentistry.',
        body: [
          'A crown covers most or all of the visible tooth and is commonly considered when a tooth has lost substantial structure, has a large failing restoration, is cracked or fractured, has significant wear, or needs protection after certain endodontic treatments.',
          'If a more conservative restoration can predictably preserve healthy tooth structure, that option should be considered before full coverage.'
        ]
      },
      {
        eyebrow: 'MATERIAL IS A CLINICAL DECISION',
        title: 'Zirconia, lithium disilicate and metal-ceramic do not behave exactly the same.',
        body: [
          'Modern crown materials can all be appropriate in the right situation. Selection depends on location in the mouth, remaining tooth structure, available space, bite force, esthetic demands, opposing material and whether the crown is tooth-supported or implant-supported.',
          'The strongest material is not automatically the best material for every tooth. A restoration has to work with the biology and mechanics around it.'
        ]
      },
      {
        eyebrow: 'EXPECTATIONS VS. REALITY',
        title: 'A crown does not make the tooth indestructible.',
        body: [
          'The tooth under a crown can still develop decay at the margin. The nerve can still become inflamed or require root canal treatment. The crown can chip, fracture, lose retention or need replacement in the future.',
          'Good margin design, isolation, fit, bite adjustment and home care matter. So does treating active decay or gum disease before definitive restorative work.'
        ]
      },
      {
        eyebrow: 'ROOT CANAL?',
        title: 'A crown and a root canal are different treatments.',
        body: [
          'A tooth does not automatically need a root canal simply because it is being crowned. Endodontic treatment is based on the condition of the pulp and surrounding tissues, symptoms, examination and imaging.',
          'Deep decay, cracks, previous trauma or extensive preparation may increase the chance that the nerve later needs treatment, and that possibility should be discussed before the final crown is made.'
        ]
      },
      {
        eyebrow: 'WHAT TO EXPECT',
        title: 'Fit is more than “does it go on the tooth?”',
        body: [
          'The process may include diagnostic imaging, removal of decay or failing material, tooth preparation, a digital scan or impression, provisionalization when needed, laboratory fabrication and final cementation or bonding.',
          'Before delivery we evaluate contacts, margins, bite, shade, contour and how the crown relates to the gum tissue. If your bite feels high after treatment, it should be checked rather than tolerated.'
        ]
      },
      {
        eyebrow: 'CROSS-BORDER REALITY',
        title: 'Leave with records and a plan for what happens next.',
        body: [
          'Patients traveling for crowns should know whether treatment can be completed in one visit or requires laboratory time and a return visit. Complex restorative cases may require provisional stages to test the bite or esthetics before definitive work.',
          'We can provide treatment documentation for eligible out-of-network reimbursement, but coverage is determined by the patient’s insurer.'
        ]
      }
    ],
    sources: [
      { label: 'American Dental Association — Crowns overview', href: 'https://www.mouthhealthy.org/ways-to-improve-smile' },
      { label: 'PubMed — Five-year survival of modern single-crown materials', href: 'https://pubmed.ncbi.nlm.nih.gov/41489982/' },
      { label: 'PubMed — Zirconia crown clinical success review', href: 'https://pubmed.ncbi.nlm.nih.gov/24392475/' }
    ]
  },

  'veneers-tijuana': {
    slug: 'veneers-tijuana',
    number: '04',
    navLabel: 'Veneers & smile design',
    title: 'Dental Veneers and Smile Design in Tijuana',
    displayTitle: 'Veneers should look\nlike teeth, not veneers.',
    dek: 'A veneer is a thin restoration bonded primarily to the front of a tooth. The best result is not the whitest or the biggest—it is the one that respects enamel, facial proportions, gum architecture, bite and the way you actually smile.',
    seoDescription: 'Dental veneers in Tijuana at NONE32: porcelain veneers, enamel preservation, smile design, tooth preparation, bonding, limitations, bruxism, expectations and natural-looking results.',
    visual: 'veneer',
    heroFacts: [
      { label: 'Design goal', value: 'Natural proportion and light behavior' },
      { label: 'Biology', value: 'Preserve enamel when clinically possible' },
      { label: 'Reality', value: 'Veneer treatment is usually irreversible' }
    ],
    sections: [
      {
        eyebrow: 'WHAT A VENEER IS',
        title: 'A thin restoration with very little room for error.',
        body: [
          'Porcelain veneers are thin shells bonded to the visible surface of teeth to change shape, color, proportion or small positional discrepancies. Composite veneers use tooth-colored resin placed directly or indirectly.',
          'Because porcelain veneer treatment usually involves removing some enamel, it should be treated as an irreversible restorative decision—not simply a whitening shortcut.'
        ]
      },
      {
        eyebrow: 'ENAMEL PRESERVATION',
        title: 'More preparation is not automatically better preparation.',
        body: [
          'Bonding to enamel is highly predictable, which is one reason conservative treatment planning matters. Research shows veneer outcomes are generally more favorable when bonding remains predominantly in enamel rather than extensively exposed dentin.',
          'That does not mean every case can be “no-prep.” Tooth position, existing restorations, discoloration, desired shape, bite and available space determine how much preparation is appropriate.'
        ]
      },
      {
        eyebrow: 'SMILE DESIGN',
        title: 'Your teeth do not exist separately from your face.',
        body: [
          'A veneer plan should consider the amount of tooth shown at rest and in a full smile, tooth width-to-length proportions, incisal edge position, gingival levels, lip movement, midline, phonetics and the patient’s preferred degree of brightness and characterization.',
          'The goal is not to force every patient into the same “perfect” template. Texture, translucency and subtle asymmetry are part of what can make a result look believable.'
        ]
      },
      {
        eyebrow: 'EXPECTATIONS VS. REALITY',
        title: 'Veneers cannot fix every esthetic problem safely.',
        body: [
          'Active decay, untreated gum disease, severe tooth position problems, very large existing restorations, inadequate enamel, deep bite relationships or significant grinding may change the recommendation. Orthodontics, whitening, bonding, crowns or a combination may be more appropriate.',
          'Veneers can chip, crack, debond, wear or eventually need replacement. Natural teeth can still develop decay around them.'
        ]
      },
      {
        eyebrow: 'COLOR',
        title: 'Porcelain does not whiten later like a natural tooth.',
        body: [
          'If whitening is part of the plan, it is often better to establish the desired natural-tooth shade before final veneer shade selection. Existing crowns and veneers will not respond to bleaching the way enamel does.',
          'We discuss the desired result before preparation so the laboratory target is based on your actual smile, not a generic shade chart.'
        ]
      },
      {
        eyebrow: 'AFTERCARE',
        title: 'Beautiful ceramics still live in a functional mouth.',
        body: [
          'Daily cleaning, professional maintenance and avoiding destructive habits remain important. Patients who clench or grind may need additional protection such as an occlusal guard depending on the case.',
          'If the bite feels wrong, a veneer edge feels rough, or the gum tissue becomes persistently inflamed, it should be evaluated.'
        ]
      }
    ],
    sources: [
      { label: 'American Dental Association — Veneers', href: 'https://www.mouthhealthy.org/all-topics-a-z/veneers' },
      { label: 'PubMed — Veneer survival by bonding substrate', href: 'https://pubmed.ncbi.nlm.nih.gov/38604905/' },
      { label: 'PubMed — Porcelain laminate veneer survival review', href: 'https://pubmed.ncbi.nlm.nih.gov/33003243/' }
    ]
  },

  'general-dentistry-tijuana': {
    slug: 'general-dentistry-tijuana',
    number: '05',
    navLabel: 'General dentistry',
    title: 'General Dentistry in Tijuana',
    displayTitle: 'Good dentistry starts\nwith the right diagnosis.',
    dek: 'General dentistry is the foundation: prevention, diagnosis, disease control and conservative restoration. The goal is not to find treatment for every tooth—it is to understand what is healthy, what is changing and what genuinely needs attention.',
    seoDescription: 'General dentistry in Tijuana at NONE32: exams, X-rays when indicated, cleanings, fillings, gum care, pain diagnosis, treatment sequencing, prevention and realistic expectations.',
    visual: 'general',
    heroFacts: [
      { label: 'First principle', value: 'Diagnose before treating' },
      { label: 'Priority', value: 'Preserve healthy tooth structure' },
      { label: 'Plan', value: 'Control disease before elective dentistry' }
    ],
    sections: [
      {
        eyebrow: 'THE FIRST VISIT',
        title: 'A useful exam should answer more than “do I have cavities?”',
        body: [
          'A comprehensive evaluation looks at teeth, existing restorations, gums, bite, symptoms, risk factors and the patient’s goals. Imaging is selected based on clinical need rather than taken simply because a patient entered the office.',
          'The result should be a prioritized plan: urgent disease first, stabilization next, definitive restorative or cosmetic treatment after the foundation is healthy.'
        ]
      },
      {
        eyebrow: 'FILLINGS',
        title: 'A filling replaces tooth structure; it does not reset the tooth to new.',
        body: [
          'Tooth-colored composite restorations can be a conservative option for many small- to medium-sized defects. Their success depends on the size and location of the cavity, the amount of remaining tooth, moisture control, bite forces and technique.',
          'No filling lasts forever. A very large cavity, crack or structurally weakened tooth may need a different type of restoration, and deep decay can sometimes lead to future nerve treatment even after the decay has been removed.'
        ]
      },
      {
        eyebrow: 'GUM HEALTH',
        title: 'Bleeding gums are information, not something to ignore.',
        body: [
          'Inflamed or bleeding gums can reflect plaque-related gingivitis or more advanced periodontal disease. The correct treatment depends on probing findings, bone levels, deposits, risk factors and whether attachment has been lost.',
          'A routine cleaning and periodontal therapy are not interchangeable. The diagnosis determines the type of care.'
        ]
      },
      {
        eyebrow: 'PAIN AND URGENT PROBLEMS',
        title: 'The symptom tells us where to investigate—not automatically which procedure to do.',
        body: [
          'Tooth pain can come from decay, a cracked tooth, pulp inflammation, infection, bite trauma, gum problems or even a source outside the tooth itself. The same symptom can lead to very different treatments depending on examination and imaging.',
          'Whenever possible, we explain the diagnosis, reasonable alternatives, what happens if treatment is delayed and what signs would require urgent reassessment.'
        ]
      },
      {
        eyebrow: 'EXPECTATIONS VS. REALITY',
        title: 'The most conservative treatment is the one that is conservative over time.',
        body: [
          'Doing less today is not always more conservative if it leaves a tooth structurally unstable. Doing more is not automatically better either. The decision should balance disease removal, preservation of healthy structure, function, longevity and future repairability.',
          'No two mouths have the same history, risk level or priorities. A plan should be specific enough that you understand why each recommendation is there.'
        ]
      },
      {
        eyebrow: 'FOR U.S. PATIENTS',
        title: 'Bring your records. Leave with ours.',
        body: [
          'If you have recent radiographs, a medication list or an existing treatment plan, bring them. Avoiding unnecessary repetition helps us understand what has already been diagnosed and what has changed.',
          'We can provide treatment records and documentation for eligible out-of-network reimbursement. Patients should verify benefits directly with their insurer.'
        ]
      }
    ],
    sources: [
      { label: 'American Dental Association — Tooth-colored fillings', href: 'https://www.mouthhealthy.org/all-topics-a-z/fillings-tooth-colored' },
      { label: 'American Dental Association — Dental filling options', href: 'https://www.mouthhealthy.org/all-topics-a-z/dental-filling-options' },
      { label: 'American Dental Association — Reasons to see a dentist', href: 'https://www.mouthhealthy.org/top-reasons-to-visit-dentist' }
    ]
  }
};

export const treatmentSlugs = Object.keys(treatmentPages);
