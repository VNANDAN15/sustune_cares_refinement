"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Compass,
  Building,
  Heart,
  Stethoscope,
  ArrowRight,
  RotateCcw,
  CheckCircle2,
} from "lucide-react";
import { track } from "@/lib/analytics";

interface Recommendation {
  serviceArm: string;
  title: string;
  description: string;
  badge: string;
  badgeColor: string;
  accentBorder: string;
  route: string;
  contactService: string;
  icon: typeof Building;
}

const RECOMMENDATIONS: Record<string, Recommendation> = {
  sparsh_escort: {
    serviceArm: "Sparsh Family Care",
    title: "Sparsh Doctor Escorts & Health Coordination",
    description:
      "Trained, language-matched companions escort your parents to clinics, record doctor instructions, and deliver digitized medical summaries to your device.",
    badge: "Family & Elder Care",
    badgeColor: "bg-brand-emerald-light text-brand-emerald border-brand-emerald/30",
    accentBorder: "border-brand-emerald/40",
    route: "/sparsh",
    contactService: "Sparsh: Doctor Escorts & Health Logs",
    icon: Heart,
  },
  sparsh_companion: {
    serviceArm: "Sparsh Family Care",
    title: "Sparsh Empathetic Care Companions",
    description:
      "Regular visits, compassionate social interaction, errand support, and domestic help supervision to ensure your parents live comfortably and safely.",
    badge: "Family & Elder Care",
    badgeColor: "bg-brand-emerald-light text-brand-emerald border-brand-emerald/30",
    accentBorder: "border-brand-emerald/40",
    route: "/sparsh",
    contactService: "Sparsh: Empathetic Care Companions",
    icon: Heart,
  },
  aegis_vacant: {
    serviceArm: "Aegis Property Stewardship",
    title: "Aegis Vacant Asset Guardianship",
    description:
      "Perimeter physical security, scheduled ventilation, secure key custody, and HD video walkthrough audits for lock-and-key properties and plots.",
    badge: "Property Stewardship",
    badgeColor: "bg-brand-gold-light text-brand-bronze border-brand-gold/30",
    accentBorder: "border-brand-gold/40",
    route: "/aegis",
    contactService: "Aegis: Vacant Asset Guardianship",
    icon: Building,
  },
  aegis_tenancy: {
    serviceArm: "Aegis Property Stewardship",
    title: "Aegis Tenant Screening & Remittance Management",
    description:
      "Corporate background vetting for prospective tenants, formal lease agreements, and direct rental credits into your NRE/NRO banking accounts.",
    badge: "Property Stewardship",
    badgeColor: "bg-brand-gold-light text-brand-bronze border-brand-gold/30",
    accentBorder: "border-brand-gold/40",
    route: "/aegis",
    contactService: "Aegis: Tenant Scouting & Screening",
    icon: Building,
  },
  home_personal: {
    serviceArm: "Home & Personal Care",
    title: "Domiciliary & Personal Care",
    description:
      "Respectful assistance with morning and evening personal routines, hygiene, mobility, and medication prompts in the comfort of home.",
    badge: "Supported Living",
    badgeColor: "bg-sky-50 text-brand-cerulean border-brand-cerulean/30",
    accentBorder: "border-brand-cerulean/40",
    route: "/home-care",
    contactService: "Home Care: Domiciliary & Personal Care",
    icon: Stethoscope,
  },
  home_rehab: {
    serviceArm: "Home & Personal Care",
    title: "Post-Acute & Reablement Care",
    description:
      "Targeted recovery bridge following hospital discharge or surgery, including vitals monitoring, exercise assistance, and doctor follow-up coordination.",
    badge: "Transitional Recovery",
    badgeColor: "bg-sky-50 text-brand-cerulean border-brand-cerulean/30",
    accentBorder: "border-brand-cerulean/40",
    route: "/home-care",
    contactService: "Home Care: Post-Acute & Reablement",
    icon: Stethoscope,
  },
  home_livein: {
    serviceArm: "Home & Personal Care",
    title: "Complex Live-In Care Specialist",
    description:
      "Round-the-clock resident companion specialist pairing for high-dependency mobility support, cognitive memory care, and nighttime safety.",
    badge: "Continuous Support",
    badgeColor: "bg-sky-50 text-brand-cerulean border-brand-cerulean/30",
    accentBorder: "border-brand-cerulean/40",
    route: "/home-care",
    contactService: "Home Care: Complex Live-In Care",
    icon: Stethoscope,
  },
};

export const GuidedServiceFinder: React.FC = () => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [recipient, setRecipient] = useState<"parents" | "property" | "home_care" | null>(null);
  const [recommendationKey, setRecommendationKey] = useState<string | null>(null);

  const handleSelectRecipient = (type: "parents" | "property" | "home_care") => {
    setRecipient(type);
    setStep(2);
    track({
      event: "service_selected",
      category: "service_discovery",
      label: `recipient_${type}`,
    });
  };

  const handleSelectPriority = (recKey: string) => {
    setRecommendationKey(recKey);
    setStep(3);
    track({
      event: "service_selected",
      category: "service_discovery",
      label: `priority_${recKey}`,
    });
  };

  const handleReset = () => {
    setStep(1);
    setRecipient(null);
    setRecommendationKey(null);
  };

  const rec = recommendationKey ? RECOMMENDATIONS[recommendationKey] : null;

  return (
    <section id="service-finder" className="py-20 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-gold-light text-brand-bronze text-xs font-bold uppercase tracking-wider border border-brand-gold/30">
            <Compass className="w-3.5 h-3.5 text-brand-gold" />
            <span>Interactive Pathway Discovery</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-marine tracking-tight">
            Find the Right Sustune Care Pathway
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Answer two quick questions to identify the service structure tailored to your needs.
          </p>
        </div>

        {/* Interactive Selector Card */}
        <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm relative overflow-hidden">
          {/* Progress Indicator */}
          <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-6 pb-4 border-b border-slate-200">
            <span className="text-brand-marine">Step {step} of 2</span>
            {step > 1 && (
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1 text-slate-500 hover:text-brand-marine transition-colors font-semibold"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Start Over</span>
              </button>
            )}
          </div>

          {/* STEP 1: Recipient Selection */}
          {step === 1 && (
            <div className="space-y-4 animate-fadeIn">
              <h3 className="font-heading font-bold text-base text-brand-marine">
                1. What is your primary area of focus?
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                <button
                  type="button"
                  onClick={() => handleSelectRecipient("parents")}
                  className="p-5 rounded-xl bg-white border border-slate-200 hover:border-brand-emerald hover:shadow-sm text-left transition-all group flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="w-10 h-10 rounded-lg bg-emerald-100 text-brand-emerald flex items-center justify-center">
                      <Heart className="w-5 h-5" />
                    </div>
                    <h4 className="font-heading font-bold text-sm text-brand-marine group-hover:text-brand-emerald transition-colors">
                      Aging Parents in India
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Companionship, medical escorts, check-ins, and emergency support.
                    </p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-brand-emerald">
                    <span>Select Pathway</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => handleSelectRecipient("property")}
                  className="p-5 rounded-xl bg-white border border-slate-200 hover:border-brand-gold hover:shadow-sm text-left transition-all group flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="w-10 h-10 rounded-lg bg-amber-100 text-brand-gold flex items-center justify-center">
                      <Building className="w-5 h-5" />
                    </div>
                    <h4 className="font-heading font-bold text-sm text-brand-marine group-hover:text-brand-gold transition-colors">
                      Residential Real Estate
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Vacant flat/plot guardianship, tenant screening, and remittances.
                    </p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-brand-bronze">
                    <span>Select Pathway</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => handleSelectRecipient("home_care")}
                  className="p-5 rounded-xl bg-white border border-slate-200 hover:border-brand-cerulean hover:shadow-sm text-left transition-all group flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="w-10 h-10 rounded-lg bg-sky-100 text-brand-cerulean flex items-center justify-center">
                      <Stethoscope className="w-5 h-5" />
                    </div>
                    <h4 className="font-heading font-bold text-sm text-brand-marine group-hover:text-brand-cerulean transition-colors">
                      In-Home Supported Living
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Post-hospital recovery bridge, assisted daily routines, or live-in care.
                    </p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-brand-cerulean">
                    <span>Select Pathway</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Priority Selection */}
          {step === 2 && (
            <div className="space-y-4 animate-fadeIn">
              <h3 className="font-heading font-bold text-base text-brand-marine">
                2. What is your most immediate priority?
              </h3>

              {recipient === "parents" && (
                <div className="grid sm:grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => handleSelectPriority("sparsh_escort")}
                    className="p-4 rounded-xl bg-white border border-slate-200 hover:border-brand-emerald text-left transition-all flex items-start gap-3 group"
                  >
                    <CheckCircle2 className="w-5 h-5 text-brand-emerald shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-sm text-brand-marine group-hover:text-brand-emerald">
                        Doctor Escorts &amp; Health Updates
                      </div>
                      <p className="text-xs text-slate-500 mt-1">
                        Accompaniment to hospital appointments, medication refills, and digital summaries.
                      </p>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleSelectPriority("sparsh_companion")}
                    className="p-4 rounded-xl bg-white border border-slate-200 hover:border-brand-emerald text-left transition-all flex items-start gap-3 group"
                  >
                    <CheckCircle2 className="w-5 h-5 text-brand-emerald shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-sm text-brand-marine group-hover:text-brand-emerald">
                        Companionship &amp; Home Check-Ins
                      </div>
                      <p className="text-xs text-slate-500 mt-1">
                        Routine friendly visits, temple/errand accompaniment, and domestic help oversight.
                      </p>
                    </div>
                  </button>
                </div>
              )}

              {recipient === "property" && (
                <div className="grid sm:grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => handleSelectPriority("aegis_vacant")}
                    className="p-4 rounded-xl bg-white border border-slate-200 hover:border-brand-gold text-left transition-all flex items-start gap-3 group"
                  >
                    <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-sm text-brand-marine group-hover:text-brand-bronze">
                        Vacant Property &amp; Plot Guardianship
                      </div>
                      <p className="text-xs text-slate-500 mt-1">
                        Key custody, scheduled ventilation, boundary protection, and HD video walkthroughs.
                      </p>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleSelectPriority("aegis_tenancy")}
                    className="p-4 rounded-xl bg-white border border-slate-200 hover:border-brand-gold text-left transition-all flex items-start gap-3 group"
                  >
                    <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-sm text-brand-marine group-hover:text-brand-bronze">
                        Tenant Screening &amp; Rental Remittances
                      </div>
                      <p className="text-xs text-slate-500 mt-1">
                        Corporate employment vetting, lease drafting, and FEMA-aligned NRE/NRO transfers.
                      </p>
                    </div>
                  </button>
                </div>
              )}

              {recipient === "home_care" && (
                <div className="grid sm:grid-cols-3 gap-4">
                  <button
                    type="button"
                    onClick={() => handleSelectPriority("home_personal")}
                    className="p-4 rounded-xl bg-white border border-slate-200 hover:border-brand-cerulean text-left transition-all flex items-start gap-2.5 group"
                  >
                    <CheckCircle2 className="w-4 h-4 text-brand-cerulean shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-xs sm:text-sm text-brand-marine group-hover:text-brand-cerulean">
                        Domiciliary Care
                      </div>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        Assistance with daily morning/evening routines and personal hygiene.
                      </p>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleSelectPriority("home_rehab")}
                    className="p-4 rounded-xl bg-white border border-slate-200 hover:border-brand-cerulean text-left transition-all flex items-start gap-2.5 group"
                  >
                    <CheckCircle2 className="w-4 h-4 text-brand-cerulean shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-xs sm:text-sm text-brand-marine group-hover:text-brand-cerulean">
                        Post-Hospital Rehab
                      </div>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        Transitional recovery after surgery or fracture with vitals tracking.
                      </p>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleSelectPriority("home_livein")}
                    className="p-4 rounded-xl bg-white border border-slate-200 hover:border-brand-cerulean text-left transition-all flex items-start gap-2.5 group"
                  >
                    <CheckCircle2 className="w-4 h-4 text-brand-cerulean shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-xs sm:text-sm text-brand-marine group-hover:text-brand-cerulean">
                        Complex Live-In Care
                      </div>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        Dedicated resident caregiver for high-dependency mobility &amp; memory care.
                      </p>
                    </div>
                  </button>
                </div>
              )}
            </div>
          )}

          {/* STEP 3: Tailored Recommendation Result */}
          {step === 3 && rec && (
            <div className="space-y-6 animate-fadeIn">
              <div className="p-6 rounded-2xl bg-white border-2 border-brand-cerulean/30 shadow-md space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className={`text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full border ${rec.badgeColor}`}>
                    Recommended Pathway · {rec.badge}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    Verified Operational Framework
                  </span>
                </div>

                <div className="space-y-1">
                  <h4 className="font-heading font-extrabold text-xl text-brand-marine">
                    {rec.title}
                  </h4>
                  <div className="text-xs font-semibold text-slate-500">
                    Delivered under {rec.serviceArm} in Hyderabad &amp; Bengaluru
                  </div>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {rec.description}
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3 border-t border-slate-100">
                  <Link
                    href={rec.route}
                    className="px-6 py-3 rounded-btn bg-brand-marine hover:bg-slate-800 text-white font-bold text-xs shadow-sm flex items-center justify-center gap-2 text-center"
                  >
                    <span>Explore {rec.serviceArm}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    href={`/contact?service=${encodeURIComponent(rec.contactService)}`}
                    className="px-6 py-3 rounded-btn bg-brand-cerulean hover:bg-brand-marine text-white font-bold text-xs shadow-sm flex items-center justify-center gap-2 text-center"
                  >
                    <span>Schedule Consultation for This Service</span>
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Non-JS Fallback / Direct Discovery Links */}
          <div className="mt-8 pt-4 border-t border-slate-200 text-center">
            <span className="text-[11px] text-slate-500 block mb-2">
              Prefer to browse directly? Explore dedicated service pages:
            </span>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-bold">
              <Link href="/sparsh" className="text-brand-emerald hover:underline">
                Sparsh Family Care →
              </Link>
              <span className="text-slate-300">·</span>
              <Link href="/aegis" className="text-brand-bronze hover:underline">
                Aegis Property Stewardship →
              </Link>
              <span className="text-slate-300">·</span>
              <Link href="/home-care" className="text-brand-cerulean hover:underline">
                Home &amp; Personal Care →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
