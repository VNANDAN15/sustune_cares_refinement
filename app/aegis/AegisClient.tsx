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
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-brand-gold-light border border-brand-gold/30 flex items-center justify-center text-brand-gold font-bold text-xl shrink-0">
                    <Building className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-brand-bronze uppercase tracking-widest block">
                      PROPERTY STEWARDSHIP
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

      {/* ===== DETAILED SERVICES SECTION WITH READ MORE ===== */}
      <section id="services-detail" className="py-20 bg-brand-mist/30 border-b border-slate-200 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-bronze">
              Service Specifications
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-marine tracking-tight">
              Verified Aegis Property Stewardship Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Transparent, professional property management with comprehensive documentation for every task.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {AEGIS_SERVICES.map((srv) => {
              const isExpanded = expandedServiceId === srv.id;
              return (
                <div
                  key={srv.id}
                  className="bg-white rounded-card p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-subtle-card hover:border-brand-gold/50 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-brand-bronze uppercase tracking-wider">
                        {srv.tagline}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-amber-50 text-brand-gold flex items-center justify-center">
                        <Building className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="font-heading font-bold text-xl text-brand-marine">
                      {srv.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {srv.summary}
                    </p>

                    {/* Deliverables summary */}
                    <div className="space-y-1.5 pt-2 border-t border-slate-100">
                      {srv.deliverables.map((deliv, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-emerald shrink-0" />
                          <span>{deliv}</span>
                        </div>
                      ))}
                    </div>

                    {/* Expandable "Read More" Detail Drawer */}
                    {isExpanded && (
                      <div className="mt-4 pt-4 border-t border-slate-100 bg-amber-50/40 p-4 rounded-xl space-y-3 animate-fadeIn">
                        <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-brand-marine">
                          Service Inclusions &amp; Operational Details:
                        </h4>
                        <ul className="space-y-2 text-xs text-slate-600">
                          {srv.details.map((detail, dIdx) => (
                            <li key={dIdx} className="flex items-start gap-2">
                              <span className="text-brand-gold font-bold mt-0.5">•</span>
                              <span className="leading-relaxed">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between gap-4">
                    <button
                      type="button"
                      onClick={() => toggleExpand(srv.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-bronze hover:text-brand-marine transition-colors"
                      aria-expanded={isExpanded}
                    >
                      <span>{isExpanded ? "Hide Details" : "Read More"}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>

                    <Link
                      href={`/contact?service=${encodeURIComponent(srv.serviceParam)}`}
                      className="px-4 py-2 rounded-btn bg-slate-100 hover:bg-brand-marine hover:text-white text-brand-marine text-xs font-bold transition-all"
                    >
                      Enquire for This Service
                    </Link>
                  </div>
                </div>
              );
            })}
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
