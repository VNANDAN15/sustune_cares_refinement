export interface FaqItem {
  id: string;
  category: "all" | "aegis" | "sparsh" | "governance";
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    id: "faq-1",
    category: "sparsh",
    question: "How rapidly can care services commence in an urgent situation?",
    answer: "In urgent circumstances—such as an unexpected hospital discharge or caregiver absence—our emergency triage team can perform a rapid telehealth assessment and dispatch a qualified care practitioner in Hyderabad or Bengaluru within 24 to 48 hours.",
  },
  {
    id: "faq-2",
    category: "aegis",
    question: "How do you protect vacant properties against encroachment and neglect?",
    answer: "Aegis deploys a structured asset stewardship protocol: regular perimeter inspections, high-definition photo/video walkthroughs, security signage, lock and key custody management, society liaison, and scheduled ventilation to prevent moisture damage.",
  },
  {
    id: "faq-3",
    category: "sparsh",
    question: "Can family members living abroad monitor visits and health updates in real-time?",
    answer: "Yes. Designated family members receive secure digital access to our client transparency updates. You can review companion visit completion times, doctor consultation notes, vital health parameters, and daily wellness logs directly from your phone.",
  },
  {
    id: "faq-4",
    category: "aegis",
    question: "How are rental remittances handled for NRI bank accounts under Indian banking laws?",
    answer: "All rental collections follow strict Reserve Bank of India (RBI) and Foreign Exchange Management Act (FEMA) guidelines. Rental funds are directly credited into your designated NRE or NRO bank account with transparent accounting trails and automated GST receipts.",
  },
  {
    id: "faq-5",
    category: "governance",
    question: "Are your caregivers and property stewards directly employed or gig workers?",
    answer: "All Sustune Care personnel are fully screened, identity-verified, and clinically/operationally supervised members of our team. We do not use anonymous freelance gig-workers, ensuring consistent quality, rigorous background checks, and dependable continuity.",
  },
  {
    id: "faq-6",
    category: "governance",
    question: "What makes Sustune Care an environmentally sustainable service provider?",
    answer: "We adhere to strict zero single-use plastic waste procurement policies. Non-hazardous supplies are compostable or recyclable, collateral utilizes certified eco-friendly stock, and travel schedules are route-optimized across Hyderabad and Bengaluru to curb transit carbon emissions.",
  },
  {
    id: "faq-7",
    category: "sparsh",
    question: "Can we bundle property management with parental elder care under one agreement?",
    answer: "Yes. Our unified parent brand is specifically structured to offer bundled agreements. Many global NRIs choose a comprehensive package that assigns both a dedicated Aegis property steward and a Sparsh family companion with a single point of corporate contact.",
  },
  {
    id: "faq-8",
    category: "governance",
    question: "What cities in India are currently covered by Sustune Care?",
    answer: "Our direct ground operations and regional management centers are actively operational across Hyderabad (Telangana Core Hub) and Bengaluru (Karnataka Hub). Global Indians can also complete our 2-minute NRI survey to help prioritize our next expansion hubs.",
  },
];
