"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Stethoscope,
  Activity,
  Heart,
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Clock,
  Sparkles,
} from "lucide-react";
import { BackToHome } from "@/components/shared/BackToHome";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { ServiceCTA } from "@/components/shared/ServiceCTA";
import { FAQS } from "@/data/faqs";
import { HOME_CARE_SERVICES } from "@/data/content";

const HOME_CARE_JOURNEY_STEPS = [
  {
    step: "01",
    title: "Needs Assessment",
    description: "Review of daily routines, mobility requirements, and discharge guidelines to design a personalized support plan.",
  },
  {
    step: "02",
    title: "Support Structuring",
    description: "Definition of daily personal care schedules, hygiene routines, and mobility assistance protocols.",
  },
  {
    step: "03",
    title: "Vetted Specialist Pairing",
    description: "Carefully matching a background-checked caregiver suited to your family's language and living environment.",
  },
  {
    step: "04",
    title: "Continuous Digital Updates",
    description: "Routine logs covering medication reminders, mobility exercises, and general wellness shared with family.",
  },
];

export const HomeCareClient: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>("reablement");
  const homeCareFaqs = FAQS.filter((f) => f.category === "sparsh" || f.category === "governance");

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <>
      <BackToHome />

      {/* ===== HERO SECTION WITH DOMESTIC HOME PHOTOGRAPHY ===== */}
      <section className="py-12 md:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-50 via-white to-sky-50/40 rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-subtle-card relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cerulean/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
              {/* Left Column: Heading & Value Proposition */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-sky-100 border border-brand-cerulean/30 flex items-center justify-center text-brand-cerulean font-bold text-xl shrink-0">
                    <Stethoscope className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-brand-cerulean uppercase tracking-widest block">
                      CLINICAL &amp; SUPPORTED LIVING PATHWAYS
                    </span>
                    <h1 className="font-heading font-extrabold text-2xl sm:text-4xl text-brand-marine tracking-tight">
                      Home &amp; Personal Care
                    </h1>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                  Personalized support for everyday living, independence, and recovery at home. We support daily routines and transitional recovery within familiar surroundings across Hyderabad &amp; Bengaluru.
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                  <Link
                    href="/contact?service=Home%20Care%3A%20Domiciliary%20%26%20Personal%20Care"
                    className="px-7 py-3.5 rounded-btn bg-brand-cerulean hover:bg-brand-marine text-white font-bold text-xs sm:text-sm shadow-md transition-colors text-center flex items-center justify-center gap-2"
                  >
                    <span>Request Home Care Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href="#care-pathways"
                    className="px-6 py-3.5 rounded-btn bg-white border border-slate-200 hover:border-brand-cerulean text-slate-700 hover:text-brand-cerulean font-semibold text-xs sm:text-sm transition-colors text-center"
                  >
                    Explore Care Levels
                  </a>
                </div>

                {/* Scannable Checkmarks */}
                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0" />
                    <span>Domiciliary &amp; personal hygiene care</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0" />
                    <span>Post-acute hospital recovery bridge</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0" />
                    <span>Dedicated live-in companion specialist</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0" />
                    <span>Supervised individualized care plans</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Domestic Care Photo */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border-2 border-brand-cerulean/30 shadow-xl aspect-[16/10] group">
                  <Image
                    src="/images/home-care-hero.jpg"
                    alt="Home and Personal Care — Certified Healthcare Practitioner Assisting Senior with Mobility"
                    fill
                    priority
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-brand-cerulean/90 text-white backdrop-blur-sm">
                      Supported Living
                    </span>
                    <p className="text-xs text-slate-200 mt-1 font-medium">
                      Dignified assistance in familiar home environments
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOME CARE JOURNEY ===== */}
      <section className="py-16 bg-brand-mist/40 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-cerulean">
              Care Journey
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-marine tracking-tight">
              The In-Home Support Journey
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Structured step-by-step assistance ensuring comfort, safety, and transparency.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOME_CARE_JOURNEY_STEPS.map((s) => (
              <div
                key={s.step}
                className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 relative overflow-hidden group hover:border-brand-cerulean/60 transition-colors shadow-sm"
              >
                <div className="font-heading font-black text-3xl text-brand-cerulean/30 group-hover:text-brand-cerulean transition-colors">
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

      {/* ===== 3 CORE CARE PATHWAYS ===== */}
      <section id="care-pathways" className="py-20 bg-white border-b border-slate-200 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-cerulean">
              Care Pathways
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-marine tracking-tight">
              Verified Levels of In-Home Support
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Every individual requires different degrees of assistance. Choose the pathway that best aligns with your family&apos;s current circumstances.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {HOME_CARE_SERVICES.map((srv) => {
              const isExpanded = expandedId === srv.id;
              return (
                <div
                  key={srv.id}
                  className="bg-white rounded-card overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-subtle-card hover:border-brand-cerulean/50 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="p-6 sm:p-8 space-y-5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-slate-100 text-brand-marine">
                        {srv.tagline}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-sky-50 text-brand-cerulean flex items-center justify-center">
                        <Activity className="w-5 h-5" />
                      </div>
                    </div>

                    <div>
                      <h3 className="font-heading font-bold text-xl text-brand-marine">
                        {srv.title}
                      </h3>
                      <p className="text-xs font-semibold text-slate-500 mt-1">
                        {srv.tagline}
                      </p>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {srv.summary}
                    </p>

                    <ul className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700">
                      {srv.deliverables.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-emerald shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Expandable "Read More" Detail Drawer */}
                    {isExpanded && (
                      <div className="mt-4 pt-4 border-t border-slate-100 bg-sky-50/50 p-4 rounded-xl space-y-3 animate-fadeIn">
                        <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-brand-marine">
                          Full Plan Specifications:
                        </h4>
                        <ul className="space-y-2 text-xs text-slate-600">
                          {srv.details.map((inc, iIdx) => (
                            <li key={iIdx} className="flex items-start gap-2">
                              <span className="text-brand-cerulean font-bold mt-0.5">•</span>
                              <span className="leading-relaxed">{inc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="p-6 sm:p-8 pt-0 space-y-3 border-t border-slate-100 mt-auto">
                    <div className="flex items-center justify-between pt-4">
                      <button
                        type="button"
                        onClick={() => toggleExpand(srv.id)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-cerulean hover:text-brand-marine transition-colors"
                        aria-expanded={isExpanded}
                      >
                        <span>{isExpanded ? "Hide Details" : "Read More"}</span>
                        {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      </button>

                      <span className="text-[10px] text-slate-400 font-medium">
                        Hyderabad &amp; Bengaluru
                      </span>
                    </div>

                    <Link
                      href={`/contact?service=${encodeURIComponent(srv.serviceParam)}`}
                      className="w-full py-3 px-4 rounded-btn text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-2 bg-brand-cerulean hover:bg-brand-marine text-white"
                    >
                      <span>Inquire This Care Level</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== HOME CARE FAQS ===== */}
      <section className="py-16 bg-brand-mist/40 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-cerulean">
              Care Guidance
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-marine tracking-tight">
              Frequently Asked Questions About Home Care
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Details on turnaround times, caregiver supervision, and care plan customizability.
            </p>
          </div>

          <FaqAccordion faqs={homeCareFaqs} defaultOpenId="faq-1" />
        </div>
      </section>

      {/* ===== ENQUIRY CTA ===== */}
      <ServiceCTA
        serviceName="Home & Personal Care"
        title="Discuss Your Home Care Requirements"
        description="Our operational coordination team will evaluate your family's specific needs and propose an individualized care arrangement."
        variant="cerulean"
      />
    </>
  );
};
