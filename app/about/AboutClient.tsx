"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Home,
  Leaf,
  HeartHandshake,
  Users,
  Building,
  Heart,
  Stethoscope,
  ArrowRight,
  Award,
  Globe,
  CheckCircle2,
  Video,
} from "lucide-react";
import { BackToHome } from "@/components/shared/BackToHome";
import { VideoDeviceCard } from "@/components/VideoDeviceCard";
import { BRAND_INFO, FOUR_BRAND_PILLARS, LEADERSHIP_TEAM } from "@/data/content";
import { VIDEOS } from "@/data/videos";

export const AboutClient: React.FC = () => {
  const introVideo = VIDEOS.intro;

  const pillarsIconMap: Record<string, React.ReactNode> = {
    ShieldCheck: <ShieldCheck className="w-6 h-6" />,
    Home: <Home className="w-6 h-6" />,
    Leaf: <Leaf className="w-6 h-6" />,
    HeartHandshake: <HeartHandshake className="w-6 h-6" />,
  };

  return (
    <>
      <BackToHome />

      {/* ===== HERO / INTRO WITH REAL EDITORIAL PHOTOGRAPH ===== */}
      <section className="py-12 md:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-50 via-white to-amber-50/40 rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-subtle-card relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
              {/* Left Column: Heading & Value Proposition */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3.5">
                  <div className="relative w-14 h-14 shrink-0 drop-shadow-md">
                    <Image
                      src="/brand/sustune_emblem_@3x.png"
                      alt="Sustune Care Heraldic Emblem"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-brand-gold uppercase tracking-widest block">
                      OUR CORPORATE PURPOSE &amp; STORY
                    </span>
                    <h1 className="font-heading font-extrabold text-2xl sm:text-4xl text-brand-marine tracking-tight">
                      One Unified Organization. Two Vital Lifelines.
                    </h1>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                  Sustune Care was founded by senior corporate leaders to resolve the dual anxieties of global Indians—protecting multi-generational family real estate while ensuring dignified, trustworthy support for aging loved ones.
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                  <Link
                    href="/contact"
                    className="px-7 py-3.5 rounded-btn bg-brand-marine hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-md transition-colors text-center flex items-center justify-center gap-2"
                  >
                    <span>Request a Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href="#pillars"
                    className="px-6 py-3.5 rounded-btn bg-white border border-slate-200 hover:border-brand-gold text-slate-700 hover:text-brand-gold font-semibold text-xs sm:text-sm transition-colors text-center"
                  >
                    Our Brand Pillars
                  </a>
                </div>

                {/* Scannable Checkmarks */}
                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0" />
                    <span>Pvt Ltd Registered Entity in India</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0" />
                    <span>Operational hubs: Hyderabad &amp; Bengaluru</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0" />
                    <span>FEMA &amp; RBI banking guidelines adhered to</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0" />
                    <span>Multi-tier staff vetting and verification</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Real Corporate Boardroom Photograph */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border-2 border-brand-gold/30 shadow-xl aspect-[16/10] group">
                  <Image
                    src="/images/about-corporate-hero.jpg"
                    alt="Sustune Care Leadership & Executive Committee in Corporate Boardroom overlooking Hyderabad"
                    fill
                    priority
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-brand-marine/90 text-brand-gold border border-brand-gold/40 backdrop-blur-sm">
                      Corporate Governance
                    </span>
                    <p className="text-xs text-slate-200 mt-1 font-medium">
                      Executive Leadership Committee &amp; Operations Center
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== VIDEO & STORY SECTION (ORIGINAL RICH SLATE-900 PALETTE) ===== */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden border-y border-brand-gold/30">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-cerulean/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: SCIntro Video in Luxury Device Chassis */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="w-full text-center space-y-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-brand-gold text-[11px] font-bold uppercase tracking-wider border border-brand-gold/30">
                  <Video className="w-3.5 h-3.5 text-brand-gold" />
                  <span>Our Unified Story Film (42s)</span>
                </div>
                <VideoDeviceCard video={introVideo} />
              </div>
            </div>

            {/* Right Column: Narrative & Values */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">
                The Sustune Narrative
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-white tracking-tight">
                Bridging Distance with Institutional Trust &amp; Empathy
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                For millions of non-resident Indians living in the US, UK, Australia, and the Middle East, geographical distance creates emotional and logistical friction. Distant properties risk encroachment and decay, while elderly parents navigate medical appointments and daily errands alone.
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Sustune Care unites both lifelines under one accountable corporate roof. Rather than juggling informal brokers and overburdening extended family, you gain a dedicated proxy partner with documented processes and digital transparency.
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-1">
                  <div className="text-brand-gold font-bold text-base">Aegis</div>
                  <div className="text-xs text-slate-300">Property Stewardship &amp; Asset Care</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-1">
                  <div className="text-brand-emerald font-bold text-base">Sparsh</div>
                  <div className="text-xs text-slate-300">Parental Companionship &amp; Escorts</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-1">
                  <div className="text-brand-cerulean font-bold text-base">Home Care</div>
                  <div className="text-xs text-slate-300">In-Home Assisted Living Pathways</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOUR BRAND PILLARS (ORIGINAL EMBLEM GEOMETRY CARDS) ===== */}
      <section id="pillars" className="py-20 bg-white border-b border-slate-200 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">
              Emblem Geometry &amp; Values
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-marine tracking-tight">
              The Four Pillars of Sustune Care
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Every policy, operational protocol, and service interaction is anchored in the geometric symbiosis of our heraldic emblem.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FOUR_BRAND_PILLARS.map((pillar) => (
              <div
                key={pillar.id}
                className={`p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200 transition-all duration-200 hover:-translate-y-1 hover:shadow-subtle-card ${pillar.borderColorClass} flex flex-col justify-between`}
              >
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold ${pillar.colorClass}`}>
                    {pillarsIconMap[pillar.iconName]}
                  </div>

                  <div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                      Symbol: {pillar.symbol}
                    </span>
                    <h3 className="font-heading font-bold text-lg text-brand-marine mt-0.5">
                      {pillar.title}
                    </h3>
                  </div>

                  <p className="text-xs font-semibold text-slate-700">
                    {pillar.meaning}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-200/80">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LEADERSHIP SECTION (ORIGINAL MONOGRAM CARDS) ===== */}
      <section className="py-20 bg-brand-mist/40 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-gold-light text-brand-bronze text-xs font-bold uppercase tracking-wider border border-brand-gold/30">
              <Award className="w-3.5 h-3.5 text-brand-gold" />
              <span>{BRAND_INFO.experienceTagline}</span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-marine tracking-tight">
              Backed by Experienced Founders &amp; Domain Leaders
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              A clear executive committee driving global diaspora engagement, corporate compliance, and ground-level SLA execution across Hyderabad and Bengaluru.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LEADERSHIP_TEAM.map((leader, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 hover:border-brand-gold/60 hover:shadow-subtle-card transition-all duration-200 text-center flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Monogram Badge */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-brand-marine to-brand-gold p-0.5 mx-auto shadow-md transition-transform duration-300 group-hover:scale-105">
                    <div className="w-full h-full bg-brand-marine rounded-full flex items-center justify-center text-white font-heading font-bold text-xl">
                      {leader.initial}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-heading font-bold text-lg text-brand-marine group-hover:text-brand-cerulean transition-colors">
                      {leader.name}
                    </h3>
                    <div className="text-xs font-bold text-brand-gold uppercase tracking-wider">
                      {leader.role}
                    </div>
                    <div className="text-[11px] font-semibold text-slate-500">
                      {leader.focus}
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                    {leader.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 text-[10px] text-slate-400 font-medium">
                  Sustune Care Executive Committee
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== RELATIONSHIP ACROSS SERVICES ===== */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-cerulean">
              Unified Ecosystem
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-marine tracking-tight">
              How Our Service Arms Work Together
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Single corporate agreement, dedicated specialists, zero remote friction.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-amber-50/50 border border-brand-gold/30 space-y-3">
              <div className="flex items-center gap-2 text-brand-gold font-bold text-sm">
                <Building className="w-4 h-4" />
                <span>Aegis Property</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Protects the physical asset, screens tenants, ensures FEMA-aligned banking, and maintains property market value.
              </p>
              <Link href="/aegis" className="text-xs font-bold text-brand-gold hover:underline inline-flex items-center gap-1">
                <span>Explore Aegis</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="p-6 rounded-2xl bg-emerald-50/50 border border-brand-emerald/30 space-y-3">
              <div className="flex items-center gap-2 text-brand-emerald font-bold text-sm">
                <Heart className="w-4 h-4" />
                <span>Sparsh Family Care</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Supports elderly parents with language-matched companions, doctor escorts, medical logs, and emergency protocols.
              </p>
              <Link href="/sparsh" className="text-xs font-bold text-brand-emerald hover:underline inline-flex items-center gap-1">
                <span>Explore Sparsh</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="p-6 rounded-2xl bg-sky-50/50 border border-brand-cerulean/30 space-y-3">
              <div className="flex items-center gap-2 text-brand-cerulean font-bold text-sm">
                <Stethoscope className="w-4 h-4" />
                <span>Home &amp; Personal Care</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Delivers specialized in-home caregiving, post-hospital surgical reablement, and dedicated live-in support.
              </p>
              <Link href="/home-care" className="text-xs font-bold text-brand-cerulean hover:underline inline-flex items-center gap-1">
                <span>Explore Home Care</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT CTA ===== */}
      <section className="py-20 bg-brand-marine text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C99738_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl tracking-tight">
            Connect with Our Executive Leadership
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Schedule a confidential consultation with our founders to discuss your family and property requirements in India.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-btn bg-brand-cerulean hover:bg-white hover:text-brand-marine text-white font-bold text-sm shadow-lg transition-all duration-200"
            >
              <span>Schedule NRI Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`https://wa.me/${BRAND_INFO.whatsapp.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-btn bg-slate-800 border border-slate-700 hover:border-brand-gold text-slate-200 font-semibold text-sm transition-all"
            >
              <span>WhatsApp Direct Line</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
