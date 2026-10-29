"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Building,
  Key,
  ShieldCheck,
  FileCheck2,
  Wrench,
  UserCheck,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Video,
} from "lucide-react";
import { BackToHome } from "@/components/shared/BackToHome";
import { VideoDeviceCard } from "@/components/VideoDeviceCard";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { ServiceCTA } from "@/components/shared/ServiceCTA";
import { VIDEOS } from "@/data/videos";
import { FAQS } from "@/data/faqs";
import { AEGIS_SERVICES } from "@/data/content";

const STEWARDSHIP_STEPS = [
  {
    step: "01",
    title: "Understand Requirements",
    description: "Initial consultation, asset verification, inventory cataloging, and legal onboarding protocols.",
  },
  {
    step: "02",
    title: "Coordinate Oversight",
    description: "Scheduled physical walkthrough audits, perimeter checks, key custody, and ventilation routines.",
  },
  {
    step: "03",
    title: "Tenancy & Remittances",
    description: "Tenant screening, formal lease agreements, and direct rental credits into NRE/NRO accounts.",
  },
  {
    step: "04",
    title: "Share Updates & Reports",
    description: "HD video inspection walkthroughs, itemized maintenance receipts, and municipal tax clearing.",
  },
];

export const AegisClient: React.FC = () => {
  const aegisVideo = VIDEOS.aegis;
  const aegisFaqs = FAQS.filter((f) => f.category === "aegis");
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>("tenant-screening");

  const toggleExpand = (id: string) => {
    setExpandedServiceId(expandedServiceId === id ? null : id);
  };

  return (
    <>
      <BackToHome />

      {/* ===== HERO SECTION WITH ARCHITECTURAL PHOTOGRAPHY ===== */}
      <section className="py-12 md:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-50 via-white to-amber-50/30 rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-subtle-card relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
              {/* Left Column: Heading & CTAs */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3.5">
                  <div className="relative w-14 h-14 rounded-2xl bg-white border border-brand-gold/40 p-1.5 shadow-sm shrink-0 drop-shadow-sm">
                    <Image
                      src="/brand/sustune_emblem_@3x.png"
                      alt="Sustune Care Official Emblem"
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-brand-gold uppercase tracking-widest block">
                      SUSTUNE CARE · PROPERTY STEWARDSHIP
                    </span>
                    <h1 className="font-heading font-extrabold text-2xl sm:text-4xl text-brand-marine tracking-tight">
                      AEGIS Property Stewardship
                    </h1>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                  Dedicated NRI property stewardship in Hyderabad &amp; Bengaluru. Institutional oversight for your residential property — tenant vetting, vacant asset guardianship, HD video walkthroughs, and FEMA-aligned rental remittances.
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                  <Link
                    href="/contact?service=Aegis%20Property%20Stewardship"
                    className="px-7 py-3.5 rounded-btn bg-brand-marine hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-md transition-colors text-center flex items-center justify-center gap-2"
                  >
                    <span>Inquire for Property Stewardship</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href="#aegis-video"
                    className="px-6 py-3.5 rounded-btn bg-white border border-slate-200 hover:border-brand-gold text-slate-700 hover:text-brand-gold font-semibold text-xs sm:text-sm transition-colors text-center"
                  >
                    Watch Aegis Film
                  </a>
                </div>

                {/* Scannable Checkmarks */}
                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0" />
                    <span>Tenant vetting &amp; lease management</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0" />
                    <span>HD video walkthrough audits</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0" />
                    <span>FEMA &amp; RBI banking guidelines followed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0" />
                    <span>Vacant asset key custody &amp; ventilation</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Architectural Photography */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border-2 border-brand-gold/30 shadow-xl aspect-[16/10] group">
                  <Image
                    src="/images/aegis-property-stewardship-hero.jpg"
                    alt="Aegis Property Stewardship — Luxury Residential Assets in Hyderabad & Bengaluru"
                    fill
                    priority
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-brand-marine/90 text-brand-gold border border-brand-gold/40 backdrop-blur-sm">
                      Institutional Guardianship
                    </span>
                    <p className="text-xs text-slate-200 mt-1 font-medium">
                      Hyderabad &amp; Bengaluru Gated Communities &amp; Plots
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STEWARDSHIP PROCESS ROADMAP ===== */}
      <section className="py-16 bg-brand-mist/40 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-bronze">
              Operational Process
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-marine tracking-tight">
              The 4-Step Stewardship Timeline
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              How we onboard, protect, manage, and report on your residential asset from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEWARDSHIP_STEPS.map((s) => (
              <div
                key={s.step}
                className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 relative overflow-hidden group hover:border-brand-gold/60 transition-colors shadow-sm"
              >
                <div className="font-heading font-black text-3xl text-brand-gold/30 group-hover:text-brand-gold transition-colors">
                  {s.step}
                </div>
                <h3 className="font-heading font-bold text-base text-brand-marine">
                  {s.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== VIDEO SHOWCASE SECTION (PORTRAIT DEVICE FRAME) ===== */}
      <section id="aegis-video" className="py-20 bg-white border-b border-slate-200 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Video Device Chassis */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="w-full text-center space-y-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-brand-bronze text-[11px] font-bold uppercase tracking-wider border border-brand-gold/30">
                  <Video className="w-3.5 h-3.5 text-brand-gold" />
                  <span>Aegis Stewardship Film (38s)</span>
                </div>
                <VideoDeviceCard video={aegisVideo} />
              </div>
            </div>

            {/* Right Column: Narrative & Oversight */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-bronze">
                Disciplined Stewardship
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-marine tracking-tight">
                Eliminating Remote Landlord Friction and Safeguarding Property Value
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Managing physical property across multiple time zones is fraught with friction—from unverified tenants and unauthorized boundary encroachment to delayed rental remittances and neglected maintenance. Aegis provides an institutional corporate shield with complete legal accountability.
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-sm flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-amber-100 text-brand-gold flex items-center justify-center shrink-0">
                    <Key className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-brand-marine">
                      Strict Key Custody &amp; Physical Access Controls
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      Every physical visit is logged with timestamped digital sign-offs, ensuring no unauthorized entries or uninspected occupancies.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-sm flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-sky-100 text-brand-cerulean flex items-center justify-center shrink-0">
                    <FileCheck2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-brand-marine">
                      FEMA &amp; RBI Guideline Adherence
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      Direct rental credits into your designated NRE or NRO accounts with automated receipts and clear municipal settlement records.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-sm flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-emerald-100 text-brand-emerald flex items-center justify-center shrink-0">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-brand-marine">
                      Supervised Preventative Maintenance
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      Scheduled plumbing, electrical, and structural inspections prevent costly water seepage, wood damage, or pest deterioration.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== AEGIS SERVICES: VISUAL-FIRST FLOWCHART & PHOTO CARDS ===== */}
      <section id="services-detail" className="py-20 bg-brand-mist/30 border-b border-slate-200 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-bronze">
              Service Specifications
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-marine tracking-tight">
              Verified Aegis Property Stewardship Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Transparent, professional property management with comprehensive documentation for every task.
            </p>
          </div>

          {/* Visual AI-Generated Flowchart Infographic */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-gold/40 shadow-subtle-card space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-gold animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-brand-marine">
                  Aegis 4-Step Asset Stewardship Flowchart
                </span>
              </div>
              <span className="text-[11px] font-semibold text-slate-500">
                1. Secure Key Custody → 2. Video Walkthrough Audit → 3. Tenant Vetting → 4. FEMA Rent Remittance
              </span>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm aspect-[16/9] w-full max-h-[460px] bg-slate-50">
              <Image
                src="/images/aegis-stewardship-flowchart.jpg"
                alt="Aegis Property Stewardship 4-Step Process Flowchart Infographic"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Trimmed Visual Photo Service Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1: Tenant Scouting & Screening */}
            <div className="bg-white rounded-card overflow-hidden border border-slate-200 shadow-sm hover:shadow-subtle-card hover:border-brand-gold/50 transition-all flex flex-col justify-between group">
              <div>
                <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                  <Image
                    src="/images/aegis-tenant-screening.jpg"
                    alt="Aegis Tenant Scouting and Screening"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-brand-marine/90 text-brand-gold border border-brand-gold/40 backdrop-blur-sm">
                    BACKGROUND VERIFICATION &amp; LEASE
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="font-heading font-bold text-xl text-brand-marine group-hover:text-brand-cerulean transition-colors">
                    Tenant Scouting &amp; Screening
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Vetting prospective tenants through identity checks, corporate employment verification, and formal tenancy agreements.
                  </p>

                  <div className="pt-2 flex flex-wrap gap-1.5">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-amber-50 border border-brand-gold/30 text-[11px] font-semibold text-brand-bronze">
                      <CheckCircle2 className="w-3 h-3 text-brand-emerald" /> Police &amp; identity screening
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-amber-50 border border-brand-gold/30 text-[11px] font-semibold text-brand-bronze">
                      <CheckCircle2 className="w-3 h-3 text-brand-emerald" /> Formal lease agreements
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-amber-50 border border-brand-gold/30 text-[11px] font-semibold text-brand-bronze">
                      <CheckCircle2 className="w-3 h-3 text-brand-emerald" /> Move-in inventory condition audit
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 mt-3 border-t border-slate-100">
                <Link
                  href="/contact?service=Aegis%3A%20Tenant%20Scouting%20%26%20Screening"
                  className="w-full py-2.5 px-4 rounded-btn text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-2 bg-brand-marine hover:bg-slate-800 text-white"
                >
                  <span>Enquire for Tenant Screening</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 2: Vacant Asset Guardianship */}
            <div className="bg-white rounded-card overflow-hidden border border-slate-200 shadow-sm hover:shadow-subtle-card hover:border-brand-gold/50 transition-all flex flex-col justify-between group">
              <div>
                <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                  <Image
                    src="/images/aegis-vacant-inspection.jpg"
                    alt="Aegis Vacant Asset Guardianship"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-brand-marine/90 text-brand-gold border border-brand-gold/40 backdrop-blur-sm">
                    PERIMETER SECURITY &amp; VIDEO AUDIT
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="font-heading font-bold text-xl text-brand-marine group-hover:text-brand-cerulean transition-colors">
                    Vacant Asset Guardianship
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Continuous physical oversight for lock-and-key residential apartments and vacant plots in Hyderabad and Bengaluru.
                  </p>

                  <div className="pt-2 flex flex-wrap gap-1.5">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-amber-50 border border-brand-gold/30 text-[11px] font-semibold text-brand-bronze">
                      <CheckCircle2 className="w-3 h-3 text-brand-emerald" /> Secure key custody protocols
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-amber-50 border border-brand-gold/30 text-[11px] font-semibold text-brand-bronze">
                      <CheckCircle2 className="w-3 h-3 text-brand-emerald" /> Routine ventilation &amp; walkthroughs
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-amber-50 border border-brand-gold/30 text-[11px] font-semibold text-brand-bronze">
                      <CheckCircle2 className="w-3 h-3 text-brand-emerald" /> HD video inspection reports
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 mt-3 border-t border-slate-100">
                <Link
                  href="/contact?service=Aegis%3A%20Vacant%20Asset%20Guardianship"
                  className="w-full py-2.5 px-4 rounded-btn text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-2 bg-brand-marine hover:bg-slate-800 text-white"
                >
                  <span>Enquire for Vacant Guardianship</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== AEGIS FAQS SECTION ===== */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-bronze">
              Property Stewardship Inquiries
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-marine tracking-tight">
              Frequently Asked Questions About Aegis
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Clear answers regarding vacant asset protection, NRE/NRO rental remittances, and society coordination.
            </p>
          </div>

          <FaqAccordion faqs={aegisFaqs} defaultOpenId="faq-2" />
        </div>
      </section>

      {/* ===== ENQUIRY CTA ===== */}
      <ServiceCTA
        serviceName="Aegis Property Stewardship"
        title="Ready to Protect Your Indian Real Estate Asset?"
        description="Schedule a consultation with our property stewardship executives in Hyderabad or Bengaluru to establish structured oversight for your home."
        variant="gold"
      />
    </>
  );
};
