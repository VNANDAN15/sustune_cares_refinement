/**
 * Sustune Care — Typed Content Layer
 *
 * Implements Claims-Audit Gating:
 * - Every content entry carries `status: "verified" | "pending-approval"`
 * - Every content entry references its verifiable source document
 * - UI components render only `verified` content by default
 * - `pending-approval` content is structurally hidden unless explicitly enabled
 */

export type ContentStatus = "verified" | "pending-approval";

export interface BaseContentItem {
  status: ContentStatus;
  source: string;
}

export interface BrandPillar extends BaseContentItem {
  id: string;
  title: string;
  symbol: string;
  meaning: string;
  description: string;
  iconName: string;
  colorClass: string;
  borderColorClass: string;
}

export interface ServiceItem extends BaseContentItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  summary: string;
  details: string[];
  deliverables: string[];
  serviceParam: string;
}

export interface Leader extends BaseContentItem {
  name: string;
  initial: string;
  role: string;
  focus: string;
  description: string;
}

export interface TrustComparisonRow extends BaseContentItem {
  pillar: string;
  sustune: string;
  brokers: string;
  relatives: string;
}

// Build-time / runtime gating flag: defaults to false (strictly verified only)
export const SHOW_PENDING_APPROVAL =
  process.env.NEXT_PUBLIC_SHOW_PENDING_APPROVAL === "true";

export function filterVerified<T extends BaseContentItem>(items: T[]): T[] {
  if (SHOW_PENDING_APPROVAL) return items;
  return items.filter((item) => item.status === "verified");
}

export const BRAND_INFO = {
  name: "Sustune Care",
  legalName: "Sustune Care Private Limited",
  tagline: "Protected Care. Sustained Dignity.",
  subTagline: "Institutional Asset Stewardship & Family Care for Global Indians",
  domain: "www.sustunecare.com",
  phone: "+91 89856 34239",
  phoneDisplay: "+91 89856 34239",
  whatsapp: "+91 89856 34239",
  whatsappDisplay: "+91 89856 34239",
  email: "contact@sustunecare.com",
  secondaryEmail: "sustunecare@gmail.com",
  headquarters: "Hyderabad, Telangana, India",
  regionalHub: "Bengaluru, Karnataka, India",
  experienceTagline: "Executive Team with 20+ Years of Professional Experience",
  nriSurveyUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSdCuTEI5h1hxB0yzlwRM-U_6RDU2JQ-FCXwimKynh4RM0IJzA/viewform",
  status: "verified" as ContentStatus,
  source: "Sustune_All_Visiting_Cards.pdf & Brand Manual",
};

export const FOUR_BRAND_PILLARS: BrandPillar[] = [
  {
    id: "governance",
    title: "Protected Governance",
    symbol: "Outer Heraldic Shield",
    meaning: "Architectural safety, patient security, and operational compliance.",
    description: "Multi-tier identity verification, binding service protocols, and structured oversight.",
    iconName: "ShieldCheck",
    colorClass: "text-brand-gold bg-brand-gold-light",
    borderColorClass: "hover:border-brand-gold/60",
    status: "verified",
    source: "sustune_care_landing_page.html (Brand Pillars section)",
  },
  {
    id: "shelter",
    title: "Home Comfort & Shelter",
    symbol: "Sheltering Gable & 4-Pane Grid",
    meaning: "Residential preservation and domestic comfort.",
    description: "Preserving familiar home routines with dignified proxy support delivered directly at your residence.",
    iconName: "Home",
    colorClass: "text-brand-cerulean bg-sky-50",
    borderColorClass: "hover:border-brand-cerulean/60",
    status: "verified",
    source: "sustune_care_landing_page.html (Brand Pillars section)",
  },
  {
    id: "vitality",
    title: "Sustainable Vitality",
    symbol: "Fluid Dual-Loop 'S' Ribbon",
    meaning: "Continuous recovery and environmental stewardship.",
    description: "Responsible operational logistics, dignified recovery milestones, and active health coordination.",
    iconName: "Leaf",
    colorClass: "text-brand-emerald bg-brand-emerald-light",
    borderColorClass: "hover:border-brand-emerald/60",
    status: "verified",
    source: "sustune_care_landing_page.html (Brand Pillars section)",
  },
  {
    id: "empathy",
    title: "Empathetic Hands",
    symbol: "Foundational Supporting Palms",
    meaning: "Direct bedside warmth and unconditional dignity.",
    description: "Culturally aligned companions selected for emotional warmth, active listening, and human dignity.",
    iconName: "HeartHandshake",
    colorClass: "text-brand-marine bg-slate-100",
    borderColorClass: "hover:border-brand-marine/60",
    status: "verified",
    source: "sustune_care_landing_page.html (Brand Pillars section)",
  },
];

export const AEGIS_SERVICES: ServiceItem[] = [
  {
    id: "tenant-screening",
    title: "Tenant Scouting & Screening",
    tagline: "Background Verification & Lease Administration",
    iconName: "UserCheck",
    description: "Police-verified background checks, lease agreements, and reliable tenant management.",
    summary:
      "Vetting prospective tenants through identity checks, corporate employment verification, and formal tenancy agreements.",
    details: [
      "Rigorous prospective tenant verification including government ID and corporate employment checks.",
      "Drafting and execution of formal tenancy agreements tailored for NRI owners.",
      "Security deposit escrow and inventory checklist verification prior to move-in.",
      "Routine tenant communication, lease renewal coordination, and dispute mediation.",
    ],
    deliverables: [
      "Employment & police-verified identity screening",
      "Drafted tenancy agreements",
      "Detailed move-in inventory condition audit",
    ],
    serviceParam: "Aegis: Tenant Scouting & Screening",
    status: "verified",
    source: "sustune_care_single_page_website.html (Aegis section)",
  },
  {
    id: "vacant-guardianship",
    title: "Vacant Asset Guardianship",
    tagline: "Perimeter Security & Encroachment Prevention",
    iconName: "ShieldAlert",
    description: "Perimeter security checks, routine ventilation, key custody, and encroachment prevention.",
    summary:
      "Continuous physical oversight for lock-and-key residential apartments and vacant plots in Hyderabad and Bengaluru.",
    details: [
      "Secure key custody with biometric access logs and dual-sign-off protocols.",
      "Scheduled perimeter checks to ensure boundaries, gates, and locks are fully intact.",
      "Regular interior ventilation and water line flushing to prevent odors and pipe dry-out.",
      "Prompt society representation, builder liaison, and notice board monitoring.",
    ],
    deliverables: [
      "Secure lock-and-key custody protocols",
      "Routine ventilation & perimeter walkthroughs",
      "Encroachment monitoring & society liaison",
    ],
    serviceParam: "Aegis: Vacant Asset Guardianship",
    status: "verified",
    source: "sustune_care_single_page_website.html (Aegis section)",
  },
  {
    id: "remittance-tax",
    title: "Remittance & Tax Management",
    tagline: "FEMA/RBI Guideline Banking & Municipal Settlements",
    iconName: "FileCheck2",
    description: "FEMA-guided rental deposits into NRE/NRO accounts and municipal tax settlements.",
    summary:
      "Structured rental collection and municipal tax handling adhering to Reserve Bank of India and FEMA foreign exchange guidelines.",
    details: [
      "Assistance with rental fund transfers directly into designated NRE or NRO banking accounts.",
      "Timely payment of municipal property taxes, society maintenance charges, and utility bills.",
      "Complete documentation trails with itemized digital expense receipts and tax summaries.",
      "Transparent handling of maintenance funds with zero hidden markups.",
    ],
    deliverables: [
      "NRE / NRO bank deposit coordination",
      "Municipal tax & society maintenance settlement",
      "Itemized digital statements with audit trail",
    ],
    serviceParam: "Aegis: Remittance & Tax Management",
    status: "verified",
    source: "sustune_care_single_page_website.html (Aegis section)",
  },
  {
    id: "inspection-upkeep",
    title: "Inspection & Structural Upkeep",
    tagline: "HD Video Walkthroughs & Maintenance Oversight",
    iconName: "Wrench",
    description: "HD video walkthrough audits, plumbing/electrical repairs, and renovation oversight.",
    summary:
      "Preventive maintenance, vetted contractor repairs, and high-definition video walkthroughs delivered directly to your device.",
    details: [
      "Comprehensive HD video audits documenting room-by-room condition, plumbing, fixtures, and walls.",
      "Supervised plumbing, electrical, carpentry, and waterproofing repairs using verified local contractors.",
      "Before-and-after photo/video documentation provided for any maintenance work.",
      "Oversight of routine painting, deep cleaning, and pest control between tenant occupancies.",
    ],
    deliverables: [
      "HD video walkthrough audits direct to your smartphone",
      "Vetted contractor supervision with before/after proof",
      "Preventive structural maintenance schedule",
    ],
    serviceParam: "Aegis: Inspection & Structural Upkeep",
    status: "verified",
    source: "sustune_care_single_page_website.html (Aegis section)",
  },
];

export const SPARSH_SERVICES: ServiceItem[] = [
  {
    id: "care-companions",
    title: "Empathetic Care Companions",
    tagline: "Social Presence & Daily Living Accompaniment",
    iconName: "UserHeart",
    description: "Language-matched companions for routine check-ins, social interaction, and errand support.",
    summary:
      "Language-matched, background-checked companions providing routine check-ins, social engagement, and practical errand support for aging parents.",
    details: [
      "Visits arranged according to family schedule (weekly, bi-weekly, or daily).",
      "Companions are matched for regional language fluency (Telugu, Kannada, Hindi) and cultural rapport.",
      "Assistance with recreational outings, temple visits, library trips, and social activities.",
      "Empathetic listening and conversation to actively combat loneliness and emotional isolation.",
    ],
    deliverables: [
      "Language & cultural match assurance",
      "Post-visit digital status summary",
      "Flexible visit scheduling",
    ],
    serviceParam: "Sparsh: Empathetic Care Companions",
    status: "verified",
    source: "sustune_care_single_page_website.html (Sparsh section)",
  },
  {
    id: "doctor-escorts",
    title: "Doctor Escorts & Health Logs",
    tagline: "Clinical Appointment Escort & Digitized Health Logs",
    iconName: "ClipboardCheck",
    description: "Hospital accompaniment, pharmacy refills, and digitized medical logs for NRI children.",
    summary:
      "Door-to-door escort to medical consultations, pharmacy fulfillment, and transparent digitized notes delivered directly to NRI sons and daughters.",
    details: [
      "Trained companion arrives at home, assists with transport, and escorts parents into clinic or hospital.",
      "Attends doctor consultations, records physician instructions, and obtains prescription details.",
      "Coordinates pharmacy fulfillment and verifies medication schedule with designated dosage instructions.",
      "Generates an organized, readable digital consultation summary available for children overseas.",
    ],
    deliverables: [
      "Door-to-door hospital & clinic escort",
      "Digitized physician summary & prescription scan",
      "Medication adherence reminders & pharmacy refill checks",
    ],
    serviceParam: "Sparsh: Doctor Escorts & Health Logs",
    status: "verified",
    source: "sustune_care_single_page_website.html (Sparsh section)",
  },
  {
    id: "emergency-protocols",
    title: "Emergency Response Protocols",
    tagline: "Structured Escalation & Bedside Companion Support",
    iconName: "PhoneCall",
    description: "Pre-mapped hospital network escalation protocols with ground companion coordination.",
    summary:
      "Documented emergency protocols connecting pre-registered parent profiles with partner hospital networks and immediate on-ground presence.",
    details: [
      "Emergency contact profile established during onboarding, including blood group, medical history, and preferred hospitals.",
      "Pre-mapped emergency ambulance and hospital network dispatch across Hyderabad and Bengaluru.",
      "A vetted Sustune companion dispatches to the hospital to stand bedside until immediate family coordinates.",
      "Direct bridge communication with children abroad, providing objective situational clarity without panic.",
    ],
    deliverables: [
      "Pre-mapped hospital network integration",
      "On-ground bedside companion support",
      "Real-time family communication bridge",
    ],
    serviceParam: "Sparsh: Emergency Response Protocols",
    status: "verified",
    source: "sustune_care_single_page_website.html (Sparsh section)",
  },
  {
    id: "help-supervision",
    title: "Domestic Help Supervision",
    tagline: "Screening & Oversight of Household Staff",
    iconName: "Users",
    description: "Screening and managing cooks, drivers, and maids to ease parents' daily household burden.",
    summary:
      "Screening, attendance management, and operational supervision of cooks, maids, and drivers to alleviate household stress for aging parents.",
    details: [
      "Identity verification and reference checking for domestic workers entering parents' homes.",
      "Establishment of clear task expectations, hygiene standards, and work schedules.",
      "Mediation of disputes or attendance issues to shield parents from stressful confrontation.",
      "Backup coverage coordination when domestic help takes scheduled or unscheduled leave.",
    ],
    deliverables: [
      "Staff identity checks & background screening",
      "Attendance & task adherence oversight",
      "Zero-confrontation mediation for elderly parents",
    ],
    serviceParam: "Sparsh: Domestic Help Supervision",
    status: "verified",
    source: "sustune_care_single_page_website.html (Sparsh section)",
  },
];

export const HOME_CARE_SERVICES: ServiceItem[] = [
  {
    id: "domiciliary",
    title: "Domiciliary & Personal Care",
    tagline: "Assisted Living in Familiar Home Surroundings",
    iconName: "Home",
    description:
      "Support with daily routines, hygiene, mobility assistance, medication adherence reminders, and nutritious meal preparation.",
    summary:
      "Support with daily morning and evening routines, dignified hygiene care, mobility assistance, medication adherence reminders, and wholesome meal preparation.",
    details: [
      "Assistance with bathing, grooming, and dressing with unconditional privacy and dignity.",
      "Gentle transfers between bed, chair, and wheelchair to prevent falls or strain.",
      "Timely medication prompts following prescribed dosage instructions.",
      "Light housekeeping of the senior's immediate living area and meal assistance.",
    ],
    deliverables: [
      "Daily personal routine support",
      "Medication adherence tracking",
      "Mobility & fall-prevention assistance",
    ],
    serviceParam: "Home Care: Domiciliary & Personal Care",
    status: "verified",
    source: "sustune_care_single_page_website.html (Home Care section)",
  },
  {
    id: "reablement",
    title: "Post-Acute & Reablement",
    tagline: "Hospital-to-Home Recovery & Rehabilitation Bridge",
    iconName: "Activity",
    description:
      "Targeted post-hospital recovery, fracture rehabilitation, and transitional support to restore independence and prevent hospital readmissions.",
    summary:
      "Targeted post-hospital recovery, orthopedic fracture rehabilitation, and transitional support structured to safely restore independence and prevent hospital readmissions.",
    details: [
      "Structured recovery plans coordinated with family doctor or surgeon discharge notes.",
      "Regular vitals monitoring (blood pressure, blood glucose, oxygen saturation, temperature).",
      "Assistance with prescribed physiotherapy routines and gentle physical reconditioning.",
      "Wound observation and surgical site check for early complication prevention.",
    ],
    deliverables: [
      "Discharge-to-home recovery pathway",
      "Daily vitals log direct to children overseas",
      "Assisted mobility & rehabilitation exercise routines",
    ],
    serviceParam: "Home Care: Post-Acute & Reablement",
    status: "verified",
    source: "sustune_care_single_page_website.html (Home Care section)",
  },
  {
    id: "live-in",
    title: "Complex Live-In Care",
    tagline: "Dedicated Resident Care Specialist",
    iconName: "ShieldCheck",
    description:
      "Dedicated resident care specialist for progressive memory care, advanced support, or high-dependency mobility needs.",
    summary:
      "Dedicated resident care companionship for seniors with progressive memory care needs, advanced recovery support, or high-dependency mobility limitations.",
    details: [
      "A vetted, trained care specialist resides in the home to provide round-the-clock peace of mind.",
      "Specialized memory routines designed to manage dementia, wander prevention, and comfort.",
      "Support with nighttime transfers, restroom assistance, and sleep routine maintenance.",
      "Regular operational supervisor check-ins to evaluate care plan progress and caregiver wellness.",
    ],
    deliverables: [
      "Dedicated primary caregiver pairing",
      "Nighttime safety & transfer support",
      "Operational supervisor escalation protocols",
    ],
    serviceParam: "Home Care: Complex Live-In Care",
    status: "verified",
    source: "sustune_care_single_page_website.html (Home Care section)",
  },
];

export const LEADERSHIP_TEAM: Leader[] = [
  {
    name: "Shiva",
    initial: "S",
    role: "Founder, Chairman & CEO",
    focus: "Global Vision & Diaspora Relations",
    description:
      "Directs international engagement across US, UK, and Australian NRI communities, leading corporate governance and strategic vision.",
    status: "verified",
    source: "sustune_care_single_page_website.html (Leadership section)",
  },
  {
    name: "Ram",
    initial: "R",
    role: "Principal Co-founder & CBO",
    focus: "Commercial Growth & Remittances",
    description:
      "Oversees commercial partnerships, institutional relationships, and FEMA-aligned cross-border remittance frameworks.",
    status: "verified",
    source: "sustune_care_single_page_website.html (Leadership section)",
  },
  {
    name: "Pramod",
    initial: "P",
    role: "Co-founder & COO",
    focus: "Ground Operations & Quality",
    description:
      "Directs city field operations in Hyderabad and Bengaluru, managing property stewards, care companions, and vendor networks.",
    status: "verified",
    source: "sustune_care_single_page_website.html (Leadership section)",
  },
  {
    name: "Sailaja",
    initial: "S",
    role: "Co-founder & CHRO",
    focus: "People & Empathy Standards",
    description:
      "Spearheads recruitment, multi-tier background vetting, caregiver empathy training, and client experience quality control.",
    status: "verified",
    source: "sustune_care_single_page_website.html (Leadership section)",
  },
];

// Content flagged for company review (HIDDEN BY DEFAULT)
export const UNAPPROVED_ESTIMATOR_CLAIMS = {
  status: "pending-approval" as ContentStatus,
  source: "Existing unverified calculator in single-page HTML",
  reason: "Unverified package prices and annual protection formulas.",
  hidden: true,
};

export const UNAPPROVED_COMPARISON_TABLE = {
  status: "pending-approval" as ContentStatus,
  source: "Existing competitor comparison table",
  reason: "Unverified competitive claims regarding brokers/relatives.",
  hidden: true,
};
