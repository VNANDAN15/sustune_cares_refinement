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
  CheckCircle2,
  ShieldCheck,
  Home,
  Leaf,
  HeartHandshake,
  Video,
} from "lucide-react";
import { BRAND_INFO, FOUR_BRAND_PILLARS } from "@/data/content";
import { VIDEOS } from "@/data/videos";
import { VideoDeviceCard } from "@/components/VideoDeviceCard";
import { GuidedServiceFinder } from "@/components/GuidedServiceFinder";

export const HomePageClient: React.FC = () => {
  const launchVideo = VIDEOS.launch;

  const pillarsIconMap: Record<string, React.ReactNode> = {
    ShieldCheck: <ShieldCheck className="w-5 h-5" />,
    Home: <Home className="w-5 h-5" />,
    Leaf: <Leaf className="w-5 h-5" />,
    HeartHandshake: <HeartHandshake className="w-5 h-5" />,
  };

  return (
    <>
      {/* ===== (2) VISUAL-FIRST HERO SECTION ===== */}
      {/* As specified in Section 7.1:
          - Large relevant photograph
          - One short headline
          - One supporting sentence
          - Subtle scroll cue linking directly to #service-arms
          - Hero buttons ('Request a Consultation' and 'Take 2-Min NRI Survey') removed
          - No portrait launch video as full-width background
      */}
      <section
        id="home"
        className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden bg-slate-900 text-white border-b border-brand-gold/30"
      >
        {/* Background Editorial Architectural / Care Atmosphere Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about-corporate-hero.jpg"
            alt="Sustune Care — Institutional Asset Stewardship & Healthcare Atmosphere"
            fill
            priority
            className="object-cover object-center opacity-25 filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-slate-900/60" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          {/* Operational Status Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-brand-gold/50 text-brand-gold text-xs font-semibold tracking-wide uppercase shadow-sm backdrop-blur-md">
            <ShieldCheck className="w-4 h-4 text-brand-gold shrink-0" />
            <span>Institutional Governance · Hyderabad &amp; Bengaluru Hubs</span>
          </div>

          {/* One Short Headline */}
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.15]">
            Bridging the{" "}
            <span className="bg-gradient-to-r from-brand-gold via-amber-300 to-brand-gold bg-clip-text text-transparent">
              Anxiety of Distance
            </span>{" "}
            for Global Indians
          </h1>

          {/* One Supporting Sentence */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Institutional asset stewardship and compassionate family healthcare in Hyderabad &amp; Bengaluru, structured specifically for non-resident Indians.
          </p>

          {/* Trust Metrics Pill Strip */}
          <div className="pt-4 pb-2 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300 font-medium">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-brand-emerald" />
              <span>FEMA &amp; RBI Banking Guidelines Adhered To</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-brand-gold" />
              <span>Pvt Ltd Registered Entity in India</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-brand-cerulean" />
              <span>Dual Arm: Asset &amp; Family Care</span>
            </div>
          </div>

          {/* Subtle Scroll Cue linking to Service Arms */}
          <div className="pt-8">
            <a
              href="#service-arms"
              className="inline-flex flex-col items-center gap-2 text-xs font-semibold text-slate-400 hover:text-brand-gold transition-colors group"
              aria-label="Scroll down to explore Our Dedicated Service Arms"
            >
              <span className="tracking-wider uppercase text-[11px]">Explore Our Service Arms</span>
              <div className="w-8 h-8 rounded-full border border-slate-700 group-hover:border-brand-gold flex items-center justify-center transition-all group-hover:translate-y-1">
                <ArrowDown className="w-4 h-4" />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ===== (3) OUR DEDICATED SERVICE ARMS ===== */}
      {/* Exactly approved copy:
          OUR DEDICATED SERVICE ARMS
          One Organization. Specialized Dedicated Arms.
          Explore our core pathways below. Each operates with dedicated personnel, specialized protocols, and complete digital transparency.
      */}
      <section id="service-arms" className="py-20 bg-brand-mist/40 border-b border-slate-200 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-cerulean">
              OUR DEDICATED SERVICE ARMS
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-marine tracking-tight">
              One Organization. Specialized Dedicated Arms.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Explore our core pathways below. Each operates with dedicated personnel, specialized protocols, and complete digital transparency.
            </p>
          </div>

          {/* Three visually distinct, fully clickable cards */}
          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {/* Card 1: Aegis Property Stewardship */}
            <Link
              href="/aegis"
              className="bg-white rounded-card overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-subtle-card hover:border-brand-gold/60 transition-all duration-300 flex flex-col justify-between group focus:outline-none focus:ring-2 focus:ring-brand-gold"
              aria-label="Explore Aegis Property Stewardship"
            >
              <div>
                <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                  <Image
                    src="/images/aegis-property-stewardship-hero.jpg"
                    alt="Aegis Property Stewardship — Luxury Residential Assets in Hyderabad & Bengaluru"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-brand-marine/90 text-brand-gold border border-brand-gold/40 backdrop-blur-sm">
                    PROPERTY STEWARDSHIP
                  </span>
                </div>

                <div className="p-6 sm:p-7 space-y-4">
                  <div>
                    <h3 className="font-heading font-bold text-xl text-brand-marine group-hover:text-brand-cerulean transition-colors">
                      Aegis Property Stewardship
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Professional property oversight and asset stewardship for owners living away from their properties.
                    </p>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    Institutional oversight for your Indian property — from tenant screening and vacant asset guardianship to HD video walkthroughs and remittance coordination.
                  </p>

                  <ul className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-emerald shrink-0 mt-0.5" />
                      <span>Tenant vetting &amp; lease management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-emerald shrink-0 mt-0.5" />
                      <span>HD video inspection walkthroughs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-emerald shrink-0 mt-0.5" />
                      <span>FEMA &amp; RBI banking guidelines followed</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-6 sm:p-7 pt-0 mt-4 border-t border-slate-100">
                <div className="w-full py-3 px-4 rounded-btn text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-2 bg-brand-marine group-hover:bg-slate-800 text-white">
                  <span>Explore Aegis</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>

            {/* Card 2: Sparsh Family Care */}
            <Link
              href="/sparsh"
              className="bg-white rounded-card overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-subtle-card hover:border-brand-emerald/60 transition-all duration-300 flex flex-col justify-between group focus:outline-none focus:ring-2 focus:ring-brand-emerald"
              aria-label="Explore Sparsh Family Care"
            >
              <div>
                <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                  <Image
                    src="/images/sparsh-family-care-hero.jpg"
                    alt="Sparsh Family Care — Compassionate Support for Aging Parents"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-brand-marine/90 text-brand-emerald-light border border-brand-emerald/40 backdrop-blur-sm">
                    FAMILY &amp; ELDER CARE
                  </span>
                </div>

                <div className="p-6 sm:p-7 space-y-4">
                  <div>
                    <h3 className="font-heading font-bold text-xl text-brand-marine group-hover:text-brand-cerulean transition-colors">
                      Sparsh Family Care
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Compassionate support that helps families coordinate care and stay connected with loved ones.
                    </p>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    Background-verified, language-matched companions who escort your parents to doctor visits, coordinate medications, and provide genuine presence.
                  </p>

                  <ul className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-emerald shrink-0 mt-0.5" />
                      <span>Companion visits &amp; social interaction</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-emerald shrink-0 mt-0.5" />
                      <span>Doctor escorts &amp; digitized health logs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-emerald shrink-0 mt-0.5" />
                      <span>Emergency response protocols</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-6 sm:p-7 pt-0 mt-4 border-t border-slate-100">
                <div className="w-full py-3 px-4 rounded-btn text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-2 bg-brand-emerald group-hover:bg-brand-emerald-dark text-white">
                  <span>Explore Sparsh</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>

            {/* Card 3: Home & Personal Care */}
            <Link
              href="/home-care"
              className="bg-white rounded-card overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-subtle-card hover:border-brand-cerulean/60 transition-all duration-300 flex flex-col justify-between group focus:outline-none focus:ring-2 focus:ring-brand-cerulean"
              aria-label="Explore Home & Personal Care"
            >
              <div>
                <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                  <Image
                    src="/images/home-care-hero.jpg"
                    alt="Home and Personal Care — In-Home Supported Living & Recovery"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-brand-marine/90 text-sky-200 border border-brand-cerulean/40 backdrop-blur-sm">
                    IN-HOME SUPPORTED LIVING
                  </span>
                </div>

                <div className="p-6 sm:p-7 space-y-4">
                  <div>
                    <h3 className="font-heading font-bold text-xl text-brand-marine group-hover:text-brand-cerulean transition-colors">
                      Home &amp; Personal Care
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Personalized support for everyday living, independence, and recovery at home.
                    </p>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    From daily personal care routines and post-hospital orthopedic rehabilitation to dedicated live-in companion specialists.
                  </p>

                  <ul className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-emerald shrink-0 mt-0.5" />
                      <span>Domiciliary &amp; personal hygiene care</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-emerald shrink-0 mt-0.5" />
                      <span>Post-acute hospital recovery bridge</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-emerald shrink-0 mt-0.5" />
                      <span>Complex live-in care specialist pairing</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-6 sm:p-7 pt-0 mt-4 border-t border-slate-100">
                <div className="w-full py-3 px-4 rounded-btn text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-2 bg-brand-cerulean group-hover:bg-brand-marine text-white">
                  <span>Explore Home Care</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== (4) OFFICIAL BRAND LAUNCH FILM ===== */}
      {/* Placed below the service arms, in a portrait frame beside a short caption,
          with poster, accessible controls, no heavy overlay, no autoplay with sound.
      */}
      <section id="launch-film" className="py-20 bg-white border-b border-slate-200 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Video Device Frame */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="w-full text-center space-y-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-brand-marine text-[11px] font-bold uppercase tracking-wider border border-slate-200">
                  <Video className="w-3.5 h-3.5 text-brand-gold" />
                  <span>Official Brand Launch Film (22s)</span>
                </div>
                <VideoDeviceCard video={launchVideo} />
              </div>
            </div>

            {/* Right Column: Narrative & Purpose */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">
                The Sustune Care Vision
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-brand-marine tracking-tight">
                Two Lifelines. One Accountable Corporate Umbrella.
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Global distance creates genuine anxiety: managing vacant family property across time zones and worrying about aging parents attending medical visits alone. Sustune Care was built to resolve both under one legally accountable corporate foundation.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Rather than relying on unvetted informal brokers or burdening extended relatives, you gain a dedicated proxy partner with background-checked personnel, digital logs, and clear operational SLAs.
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-700">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="font-bold text-brand-marine">Institutional Governance</div>
                  <div className="text-slate-500">Pvt Ltd company with structured protocols and verifiable ground audits.</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="font-bold text-brand-marine">Digital Transparency</div>
                  <div className="text-slate-500">Objective notes, photos, and video walkthroughs directly after every visit.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== (5) BRIEF UNIFIED-BRAND & FOUR BRAND PILLARS ===== */}
      <section id="pillars" className="py-20 bg-brand-mist/30 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">
              Our Foundation
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-marine tracking-tight">
              The Four Pillars of Sustune Care
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Every operation across property stewardship and family healthcare is anchored in the geometric symbiosis of our heraldic emblem.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FOUR_BRAND_PILLARS.map((pillar) => (
              <div
                key={pillar.id}
                className={`p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 transition-all duration-200 hover:-translate-y-1 hover:shadow-subtle-card ${pillar.borderColorClass} flex flex-col justify-between`}
              >
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold ${pillar.colorClass}`}>
                    {pillarsIconMap[pillar.iconName] || <ShieldCheck className="w-6 h-6" />}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                      Symbol: {pillar.symbol}
                    </span>
                    <h3 className="font-heading font-bold text-base text-brand-marine mt-0.5">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-xs font-bold text-brand-cerulean hover:text-brand-marine transition-colors"
            >
              <span>Learn about our Corporate Story, Governance &amp; Founders</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== (6) GUIDED SERVICE FINDER ===== */}
      <GuidedServiceFinder />

      {/* ===== (7) CONSULTATION PATHWAY ===== */}
      <section className="py-20 bg-brand-marine text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C99738_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl tracking-tight">
            Ready to Protect What Matters Most?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Whether you need property oversight in Hyderabad or compassionate family assistance in Bengaluru, our executive team is ready to structure a tailored agreement for your needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-btn bg-brand-cerulean hover:bg-white hover:text-brand-marine text-white font-bold text-sm shadow-lg transition-all duration-200"
            >
              <span>Request a Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`https://wa.me/${BRAND_INFO.whatsapp.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-btn bg-slate-800/90 border border-slate-700 hover:border-brand-gold text-slate-200 font-semibold text-sm transition-all"
            >
              <span>WhatsApp Priority Line</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
