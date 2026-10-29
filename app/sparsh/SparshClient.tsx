"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Heart,
  UserCheck,
  ClipboardCheck,
  PhoneCall,
  Users,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Clock,
  Video,
  CalendarCheck,
} from "lucide-react";
import { BackToHome } from "@/components/shared/BackToHome";
import { VideoDeviceCard } from "@/components/VideoDeviceCard";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { ServiceCTA } from "@/components/shared/ServiceCTA";
import { VIDEOS } from "@/data/videos";
import { FAQS } from "@/data/faqs";
import { SPARSH_SERVICES } from "@/data/content";

const CARE_JOURNEY_STEPS = [
  {
    step: "01",
    title: "Share Family Needs",
    description: "Initial consultation discussing parents' routines, medical schedules, language preference, and specific assistance requirements.",
  },
  {
    step: "02",
    title: "Companion Matching",
    description: "Pairing with a background-verified, language-matched care companion (Telugu, Kannada, Hindi) who shares cultural rapport.",
  },
  {
    step: "03",
    title: "Coordinate Assistance",
    description: "Scheduled home visits, doctor appointment escorts, prescription refills, and gentle social companionship.",
  },
  {
    step: "04",
    title: "Receive Transparent Updates",
    description: "Direct digitized consultation notes, vitals logs, and visit summaries sent to children overseas after every engagement.",
  },
];

export const SparshClient: React.FC = () => {
  const sparshVideo = VIDEOS.sparsh;
  const sparshFaqs = FAQS.filter((f) => f.category === "sparsh");
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>("care-companions");

  const toggleExpand = (id: string) => {
    setExpandedServiceId(expandedServiceId === id ? null : id);
  };

  return (
    <>
      <BackToHome />

      {/* ===== HERO SECTION WITH WARM NATURAL PHOTOGRAPHY ===== */}
      <section className="py-12 md:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-50 via-white to-emerald-50/40 rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-subtle-card relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-emerald/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
              {/* Left Column: Heading & Value Proposition */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3.5">
                  <div className="relative w-14 h-14 rounded-2xl bg-white border border-brand-emerald/40 p-1.5 shadow-sm shrink-0 drop-shadow-sm">
                    <Image
                      src="/brand/sustune_emblem_@3x.png"
                      alt="Sustune Care Official Emblem"
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-brand-emerald uppercase tracking-widest block">
                      SUSTUNE CARE · FAMILY &amp; ELDER CARE
                    </span>
                    <h1 className="font-heading font-extrabold text-2xl sm:text-4xl text-brand-marine tracking-tight">
                      SPARSH Family Care
                    </h1>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                  Compassionate proxy assistance and doctor coordination for aging parents in Hyderabad &amp; Bengaluru. We bridge the anxiety of distance with verified companions who speak their language and honor their dignity.
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                  <Link
                    href="/contact?service=Sparsh%20Family%20Care"
                    className="px-7 py-3.5 rounded-btn bg-brand-emerald hover:bg-brand-emerald-dark text-white font-bold text-xs sm:text-sm shadow-md transition-colors text-center flex items-center justify-center gap-2"
                  >
                    <span>Inquire for Family Care</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href="#sparsh-video"
                    className="px-6 py-3.5 rounded-btn bg-white border border-slate-200 hover:border-brand-emerald text-slate-700 hover:text-brand-emerald font-semibold text-xs sm:text-sm transition-colors text-center"
                  >
                    Watch Sparsh Film
                  </a>
                </div>

                {/* Scannable Checkmarks */}
                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0" />
                    <span>Language-matched companionship</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0" />
                    <span>Doctor escorts &amp; digitized health logs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0" />
                    <span>Emergency response protocols</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0" />
                    <span>Domestic help vetting &amp; supervision</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Warm Dignified Indian Setting Image */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border-2 border-brand-emerald/30 shadow-xl aspect-[16/10] group">
                  <Image
                    src="/images/sparsh-family-care-hero.jpg"
                    alt="Sparsh Family Care — Compassionate Care Companion Supporting Elderly Indian Parents"
                    fill
                    priority
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-brand-emerald/90 text-white backdrop-blur-sm">
                      Dignified Bedside Care
                    </span>
                    <p className="text-xs text-slate-200 mt-1 font-medium">
                      Telugu, Kannada &amp; Hindi fluent verified companions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SPARSH CARE JOURNEY ===== */}
      <section className="py-16 bg-brand-mist/40 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-emerald">
              Care Pathway
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-marine tracking-tight">
              The Sparsh Care Journey
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              How we understand your parents&apos; unique needs, coordinate empathetic support, and keep you connected.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CARE_JOURNEY_STEPS.map((s) => (
              <div
                key={s.step}
                className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 relative overflow-hidden group hover:border-brand-emerald/60 transition-colors shadow-sm"
              >
                <div className="font-heading font-black text-3xl text-brand-emerald/30 group-hover:text-brand-emerald transition-colors">
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

      {/* ===== VIDEO SHOWCASE SECTION (ORIGINAL PORTRAIT FRAME) ===== */}
      <section id="sparsh-video" className="py-20 bg-white border-b border-slate-200 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Video Device Frame */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="w-full text-center space-y-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-brand-emerald text-[11px] font-bold uppercase tracking-wider border border-brand-emerald/30">
                  <Video className="w-3.5 h-3.5 text-brand-emerald" />
                  <span>Sparsh Family Care Film (46s)</span>
                </div>
                <VideoDeviceCard video={sparshVideo} />
              </div>
            </div>

            {/* Right Column: Narrative & Safeguards */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-emerald">
                The Sparsh Promise
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-marine tracking-tight">
                Dignified, Culturally Aligned Presence When You Cannot Be There
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Living thousands of miles away shouldn&apos;t mean feeling helpless during parents&apos; routine hospital visits or sudden medical concerns. Sparsh assigns trained, verified companions who speak their language, understand their habits, and respect their autonomy.
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-sm flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-emerald-100 text-brand-emerald flex items-center justify-center shrink-0">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-brand-marine">
                      Multi-Tier Background Vetting
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      Every care companion undergoes identity verification, local address checks, and empathy evaluations before meeting your family.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-sm flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-sky-100 text-brand-cerulean flex items-center justify-center shrink-0">
                    <ClipboardCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-brand-marine">
                      Digital Transparency for Children Overseas
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      Receive clear, objective digital notes after every visit and medical appointment so you stay fully informed across time zones.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-sm flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-amber-100 text-brand-gold flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-brand-marine">
                      Rapid Operational Response in Hyderabad &amp; Bengaluru
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      On-ground field teams stationed locally ensure fast coordination for hospital visits, doctor follow-ups, and urgent needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SPARSH SERVICES: VISUAL-FIRST FLOWCHART & PHOTO CARDS ===== */}
      <section id="services-detail" className="py-20 bg-brand-mist/30 border-b border-slate-200 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-emerald">
              Service Pathways
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-marine tracking-tight">
              Verified Sparsh Family Care Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Every service is delivered under institutional protocols with real-time reporting to family members abroad.
            </p>
          </div>

          {/* Visual AI-Generated Flowchart Infographic */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-emerald/30 shadow-subtle-card space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-emerald animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-brand-marine">
                  Sparsh 4-Step Healthcare Journey Flowchart
                </span>
              </div>
              <span className="text-[11px] font-semibold text-slate-500">
                1. Companion Matching → 2. Doctor Escort → 3. Digitized Notes → 4. Family Portal
              </span>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm aspect-[16/9] w-full max-h-[460px] bg-slate-50">
              <Image
                src="/images/sparsh-care-flowchart.jpg"
                alt="Sparsh Family Care 4-Step Process Flowchart Infographic"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Trimmed Visual Photo Service Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1: Empathetic Care Companions */}
            <div className="bg-white rounded-card overflow-hidden border border-slate-200 shadow-sm hover:shadow-subtle-card hover:border-brand-emerald/50 transition-all flex flex-col justify-between group">
              <div>
                <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                  <Image
                    src="/images/sparsh-companion-care.jpg"
                    alt="Sparsh Empathetic Care Companions"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-brand-marine/90 text-brand-emerald-light border border-brand-emerald/40 backdrop-blur-sm">
                    LANGUAGE &amp; CULTURAL COMPANIONSHIP
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="font-heading font-bold text-xl text-brand-marine group-hover:text-brand-emerald transition-colors">
                    Empathetic Care Companions
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Language-matched, background-checked companions providing routine check-ins, social engagement, and practical errand support.
                  </p>

                  <div className="pt-2 flex flex-wrap gap-1.5">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200/80 text-[11px] font-semibold text-brand-emerald">
                      <CheckCircle2 className="w-3 h-3" /> Language &amp; cultural match
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200/80 text-[11px] font-semibold text-brand-emerald">
                      <CheckCircle2 className="w-3 h-3" /> Routine check-in visits
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200/80 text-[11px] font-semibold text-brand-emerald">
                      <CheckCircle2 className="w-3 h-3" /> Post-visit digital summary
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 mt-3 border-t border-slate-100">
                <Link
                  href="/contact?service=Sparsh%3A%20Empathetic%20Care%20Companions"
                  className="w-full py-2.5 px-4 rounded-btn text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-2 bg-brand-emerald hover:bg-brand-emerald-dark text-white"
                >
                  <span>Enquire for Companionship</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 2: Doctor Escorts & Health Logs */}
            <div className="bg-white rounded-card overflow-hidden border border-slate-200 shadow-sm hover:shadow-subtle-card hover:border-brand-emerald/50 transition-all flex flex-col justify-between group">
              <div>
                <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                  <Image
                    src="/images/sparsh-doctor-escort.jpg"
                    alt="Sparsh Doctor Escorts and Health Logs"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-brand-marine/90 text-brand-emerald-light border border-brand-emerald/40 backdrop-blur-sm">
                    CLINICAL ESCORT &amp; HEALTH LOGS
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="font-heading font-bold text-xl text-brand-marine group-hover:text-brand-emerald transition-colors">
                    Doctor Escorts &amp; Health Logs
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Door-to-door escort to medical consultations, pharmacy fulfillment, and transparent digitized notes delivered directly to NRI family.
                  </p>

                  <div className="pt-2 flex flex-wrap gap-1.5">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200/80 text-[11px] font-semibold text-brand-emerald">
                      <CheckCircle2 className="w-3 h-3" /> Clinic &amp; hospital escort
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200/80 text-[11px] font-semibold text-brand-emerald">
                      <CheckCircle2 className="w-3 h-3" /> Digitized physician summary
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200/80 text-[11px] font-semibold text-brand-emerald">
                      <CheckCircle2 className="w-3 h-3" /> Prescription scan &amp; refill
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 mt-3 border-t border-slate-100">
                <Link
                  href="/contact?service=Sparsh%3A%20Doctor%20Escorts%20%26%20Health%20Logs"
                  className="w-full py-2.5 px-4 rounded-btn text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-2 bg-brand-emerald hover:bg-brand-emerald-dark text-white"
                >
                  <span>Enquire for Doctor Escorts</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SPARSH FAQS SECTION ===== */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-emerald">
              Family Care Questions
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-marine tracking-tight">
              Frequently Asked Questions About Sparsh
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Clear answers regarding emergency turnaround, family transparency, and bundled care arrangements.
            </p>
          </div>

          <FaqAccordion faqs={sparshFaqs} defaultOpenId="faq-1" />
        </div>
      </section>

      {/* ===== CALM CLOSING CONTACT SECTION ===== */}
      <ServiceCTA
        serviceName="Sparsh Family Care"
        title="Ready to Support Your Parents with Sparsh?"
        description="Connect with our care coordination team in Hyderabad or Bengaluru to design a personalized support plan for your loved ones."
        variant="emerald"
      />
    </>
  );
};
