"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowDown,
  Building,
  Heart,
  Stethoscope,
  Shield,
  Home,
  Waves,
  HandHeart,
  Video,
  Check,
} from "lucide-react";
import { BRAND_INFO } from "@/data/content";
import { VIDEOS } from "@/data/videos";
import { VideoDeviceCard } from "@/components/VideoDeviceCard";
import { GuidedServiceFinder } from "@/components/GuidedServiceFinder";

export const HomePageClient: React.FC = () => {
  const launchVideo = VIDEOS.launch;

  const emblemSymbols = [
    {
      id: "shield",
      title: "The Golden Shield",
      meaning: "Institutional Protection & Trust",
      description: "A legally registered Private Limited umbrella with structured fiduciary accountability.",
      icon: <Shield className="w-6 h-6 text-brand-gold" />,
      accent: "border-brand-gold/40 hover:border-brand-gold",
      tag: "GOVERNANCE",
    },
    {
      id: "roof",
      title: "The Home & Hearth",
      meaning: "Aegis Property Stewardship",
      description: "Active oversight of residential assets, vacant homes, tenant vetting, and video walkthroughs.",
      icon: <Home className="w-6 h-6 text-amber-400" />,
      accent: "border-amber-400/40 hover:border-amber-400",
      tag: "ASSET CARE",
    },
    {
      id: "ribbon",
      title: "The Flowing 'S'",
      meaning: "Sparsh Family Care",
      description: "Continuous health coordination, clinic escorts, digitized doctor logs, and companionship.",
      icon: <Waves className="w-6 h-6 text-brand-emerald" />,
      accent: "border-brand-emerald/40 hover:border-brand-emerald",
      tag: "FAMILY CARE",
    },
    {
      id: "hands",
      title: "The Cradling Hands",
      meaning: "Dignified Personal Living",
      description: "In-home assistance, hygiene support, and compassionate recovery in the comfort of home.",
      icon: <HandHeart className="w-6 h-6 text-brand-cerulean" />,
      accent: "border-brand-cerulean/40 hover:border-brand-cerulean",
      tag: "HOME SUPPORT",
    },
  ];

  return (
    <>
      {/* ========================================================================= */}
      {/* (1) HERO SECTION: SHOWSTOPPING 3D GOLD EMBLEM & SUSTUNE CARE BRAND HIGHLIGHT */}
      {/* ========================================================================= */}
      <section
        id="home"
        className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-gradient-to-b from-brand-marine-deep via-brand-marine to-slate-950 text-white border-b border-brand-gold/30"
      >
        {/* Subtle Architectural Ambient Layer */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about-corporate-hero.jpg"
            alt="Sustune Care Institutional Atmosphere"
            fill
            priority
            className="object-cover object-center opacity-10 filter brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-brand-marine/90 to-brand-marine-deep/95" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Sentences, Brand Title & Pathways */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-brand-gold/60 text-brand-gold text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase shadow-lg backdrop-blur-md">
                <Shield className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                <span>The Official Emblem of Care &amp; Stewardship</span>
              </div>

              <div className="space-y-3">
                <h1 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white leading-tight">
                  SustuneCare
                </h1>

                <p className="text-base sm:text-xl text-slate-200 font-medium max-w-xl leading-relaxed">
                  Institutional Asset Stewardship &amp; Compassionate Family Healthcare in Hyderabad &amp; Bengaluru.
                </p>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-xl">
                  Dedicated local coordination desks providing transparent ground audits, vetted companion care, and legal fiduciary protection for global Indian families.
                </p>
              </div>

              {/* Visual Pathway Anchors */}
              <div className="flex flex-wrap items-center gap-2.5 pt-1 text-xs font-semibold text-slate-200">
                <a
                  href="#service-arms"
                  className="px-3.5 py-1.5 rounded-full bg-slate-800/90 border border-slate-700/80 hover:border-brand-gold flex items-center gap-2 backdrop-blur-md transition-all hover:scale-105"
                >
                  <Building className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                  <span>Aegis Property</span>
                </a>
                <a
                  href="#service-arms"
                  className="px-3.5 py-1.5 rounded-full bg-slate-800/90 border border-slate-700/80 hover:border-brand-emerald flex items-center gap-2 backdrop-blur-md transition-all hover:scale-105"
                >
                  <Heart className="w-3.5 h-3.5 text-brand-emerald shrink-0" />
                  <span>Sparsh Family</span>
                </a>
                <a
                  href="#service-arms"
                  className="px-3.5 py-1.5 rounded-full bg-slate-800/90 border border-slate-700/80 hover:border-brand-cerulean flex items-center gap-2 backdrop-blur-md transition-all hover:scale-105"
                >
                  <Stethoscope className="w-3.5 h-3.5 text-brand-cerulean shrink-0" />
                  <span>Home &amp; Personal Care</span>
                </a>
              </div>

              {/* Direct Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-3">
                <Link
                  href="/contact"
                  className="px-7 py-3.5 rounded-btn bg-brand-cerulean hover:bg-white hover:text-brand-marine text-white font-bold text-xs sm:text-sm shadow-lg transition-all text-center flex items-center justify-center gap-2"
                >
                  <span>Schedule Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="#service-arms"
                  className="px-5 py-3.5 rounded-btn bg-slate-800/90 border border-slate-700 hover:border-brand-gold text-slate-200 font-semibold text-xs sm:text-sm transition-all text-center"
                >
                  Explore Dedicated Arms ↓
                </a>
              </div>
            </div>

            {/* Right Column: Animated 3D Heraldic Emblem & SustuneCare Monogram */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center lg:items-end">
              <div className="flex flex-col items-center text-center">
                <div className="relative animate-float-logo">
                  {/* Ambient Warm Golden Aura with Pulse */}
                  <div className="absolute inset-0 bg-brand-gold/30 rounded-full blur-3xl animate-glow-pulse pointer-events-none" />
                  
                  <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 drop-shadow-[0_25px_50px_rgba(201,151,56,0.45)] transition-transform duration-500 hover:scale-105">
                    <Image
                      src="/brand/sustune_emblem_@3x.png"
                      alt="SustuneCare 3D Heraldic Emblem"
                      fill
                      priority
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Name at the downside of the logo as SustuneCare */}
                <div className="mt-4 sm:mt-5 space-y-1">
                  <span className="font-heading font-black text-2xl sm:text-3xl md:text-4xl tracking-tight text-white block">
                    SustuneCare
                  </span>
                  <span className="text-[10px] sm:text-xs font-bold text-brand-gold tracking-[0.25em] uppercase block">
                    Property Stewardship · Family Care
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* (2) DECODING THE EMBLEM: LESS READING, INSTANT UNDERSTANDING */}
      {/* ========================================================================= */}
      <section id="emblem-meaning" className="py-16 md:py-20 bg-white border-b border-slate-200 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-widest text-brand-gold">
              Brand Architecture
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-brand-marine tracking-tight">
              One Crest. Four Core Commitments.
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Every detail in our heraldic emblem reflects a verified service arm for families living globally.
            </p>
          </div>

          {/* 4 Visual Symbolic Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {emblemSymbols.map((item) => (
              <div
                key={item.id}
                className={`p-6 rounded-2xl bg-slate-50/70 border ${item.accent} transition-all duration-300 hover:bg-white hover:shadow-subtle-card flex flex-col justify-between group`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-200/80 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <span className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest px-2 py-0.5 rounded bg-slate-100 border border-slate-200">
                      {item.tag}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-heading font-bold text-base text-brand-marine">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-brand-gold mt-0.5">
                      {item.meaning}
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* (3) DEDICATED SERVICE ARMS: VISUAL-FIRST, TRIMMED CONTENT */}
      {/* ========================================================================= */}
      <section id="service-arms" className="py-20 bg-brand-mist/40 border-b border-slate-200 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-brand-cerulean">
              OUR SERVICE ARMS
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-brand-marine tracking-tight">
              Specialized Divisions. Direct Transparency.
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Tap any pathway below for dedicated personnel, protocols, and digital reports.
            </p>
          </div>

          {/* Three Large Visual Cards (Trimmed, Crisp) */}
          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {/* Card 1: Aegis Property Stewardship */}
            <Link
              href="/aegis"
              className="bg-white rounded-card overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-subtle-card hover:border-brand-gold/60 transition-all duration-300 flex flex-col justify-between group focus:outline-none focus:ring-2 focus:ring-brand-gold"
            >
              <div>
                <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                  <Image
                    src="/images/aegis-property-stewardship-hero.jpg"
                    alt="Aegis Property Stewardship"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-brand-marine/90 text-brand-gold border border-brand-gold/40 backdrop-blur-sm">
                    PROPERTY STEWARDSHIP
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="font-heading font-bold text-xl text-brand-marine group-hover:text-brand-cerulean transition-colors">
                    Aegis Property Stewardship
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    Professional oversight for overseas owners: physical custody, verified tenant leases, and video audit logs.
                  </p>

                  <div className="pt-2 flex flex-wrap gap-1.5">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-[11px] font-medium text-slate-700">
                      <Check className="w-3 h-3 text-brand-emerald" /> Tenant Vetting
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-[11px] font-medium text-slate-700">
                      <Check className="w-3 h-3 text-brand-emerald" /> HD Video Audits
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-[11px] font-medium text-slate-700">
                      <Check className="w-3 h-3 text-brand-emerald" /> FEMA Remittances
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 mt-3">
                <div className="w-full py-2.5 px-4 rounded-btn text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-2 bg-brand-marine group-hover:bg-slate-800 text-white">
                  <span>Explore Aegis</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>

            {/* Card 2: Sparsh Family Care */}
            <Link
              href="/sparsh"
              className="bg-white rounded-card overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-subtle-card hover:border-brand-emerald/60 transition-all duration-300 flex flex-col justify-between group focus:outline-none focus:ring-2 focus:ring-brand-emerald"
            >
              <div>
                <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                  <Image
                    src="/images/sparsh-family-care-hero.jpg"
                    alt="Sparsh Family Care"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-brand-marine/90 text-brand-emerald-light border border-brand-emerald/40 backdrop-blur-sm">
                    FAMILY &amp; ELDER CARE
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="font-heading font-bold text-xl text-brand-marine group-hover:text-brand-cerulean transition-colors">
                    Sparsh Family Care
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    Compassionate coordination for aging parents: doctor clinic escorts, digitized medical notes, and companionship.
                  </p>

                  <div className="pt-2 flex flex-wrap gap-1.5">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-[11px] font-medium text-slate-700">
                      <Check className="w-3 h-3 text-brand-emerald" /> Doctor Escorts
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-[11px] font-medium text-slate-700">
                      <Check className="w-3 h-3 text-brand-emerald" /> Digital Health Logs
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-[11px] font-medium text-slate-700">
                      <Check className="w-3 h-3 text-brand-emerald" /> Warm Companionship
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 mt-3">
                <div className="w-full py-2.5 px-4 rounded-btn text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-2 bg-brand-emerald group-hover:bg-brand-emerald-dark text-white">
                  <span>Explore Sparsh</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>

            {/* Card 3: Home & Personal Care */}
            <Link
              href="/home-care"
              className="bg-white rounded-card overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-subtle-card hover:border-brand-cerulean/60 transition-all duration-300 flex flex-col justify-between group focus:outline-none focus:ring-2 focus:ring-brand-cerulean"
            >
              <div>
                <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                  <Image
                    src="/images/home-care-hero.jpg"
                    alt="Home and Personal Care"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-brand-marine/90 text-sky-200 border border-brand-cerulean/40 backdrop-blur-sm">
                    IN-HOME SUPPORTED LIVING
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="font-heading font-bold text-xl text-brand-marine group-hover:text-brand-cerulean transition-colors">
                    Home &amp; Personal Care
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    Respectful daily living assistance: personal hygiene, mobility prompts, and hospital recovery bridge.
                  </p>

                  <div className="pt-2 flex flex-wrap gap-1.5">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-[11px] font-medium text-slate-700">
                      <Check className="w-3 h-3 text-brand-emerald" /> Domiciliary Hygiene
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-[11px] font-medium text-slate-700">
                      <Check className="w-3 h-3 text-brand-emerald" /> Post-Hospital Care
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-[11px] font-medium text-slate-700">
                      <Check className="w-3 h-3 text-brand-emerald" /> Live-in Specialists
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 mt-3">
                <div className="w-full py-2.5 px-4 rounded-btn text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-2 bg-brand-cerulean group-hover:bg-brand-marine text-white">
                  <span>Explore Home Care</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* (4) OFFICIAL BRAND LAUNCH FILM (CLEAN VISUAL CHASSIS) */}
      {/* ========================================================================= */}
      <section id="launch-film" className="py-20 bg-white border-b border-slate-200 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Device Frame */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full text-center space-y-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-brand-marine text-[11px] font-bold uppercase tracking-wider border border-slate-200">
                  <Video className="w-3.5 h-3.5 text-brand-gold" />
                  <span>Official Launch Film (22s)</span>
                </div>
                <VideoDeviceCard video={launchVideo} />
              </div>
            </div>

            {/* Right Column: Visual Value Cards */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-widest text-brand-gold">
                  The Sustune Assurance
                </span>
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-brand-marine tracking-tight">
                  Two Vital Lifelines. One Accountable Corporate Foundation.
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Managing distant property and coordinating healthcare for aging parents requires absolute trust. Sustune Care unites both under legally accountable Private Limited governance.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="font-bold text-brand-marine flex items-center gap-2">
                    <Shield className="w-4 h-4 text-brand-gold" />
                    <span>Private Limited Entity</span>
                  </div>
                  <p className="text-slate-500">Corporate protocols, contract compliance, and vetted ground staff.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="font-bold text-brand-marine flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand-emerald" />
                    <span>Direct Video Audits</span>
                  </div>
                  <p className="text-slate-500">Objective notes, photos, and video walkthroughs directly to your device.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* (5) GUIDED SERVICE FINDER (INTERACTIVE 2-STEP SELECTOR) */}
      {/* ========================================================================= */}
      <GuidedServiceFinder />

      {/* ========================================================================= */}
      {/* (6) CONSULTATION ACTION STRIP */}
      {/* ========================================================================= */}
      <section className="py-16 bg-brand-marine text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C99738_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5 relative z-10">
          <div className="relative w-16 h-16 mx-auto drop-shadow-md">
            <Image
              src="/brand/sustune_emblem_@3x.png"
              alt="Sustune Care Emblem"
              fill
              className="object-contain"
            />
          </div>

          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl tracking-tight">
            Ready to Protect What Matters Most?
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto">
            Directly connect with our executive coordination desk in Hyderabad or Bengaluru.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-btn bg-brand-cerulean hover:bg-white hover:text-brand-marine text-white font-bold text-sm shadow-lg transition-all duration-200"
            >
              <span>Schedule Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`https://wa.me/${BRAND_INFO.whatsapp.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-btn bg-slate-800/90 border border-slate-700 hover:border-brand-gold text-slate-200 font-semibold text-sm transition-all"
            >
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
