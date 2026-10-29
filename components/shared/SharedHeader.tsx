"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, MessageCircle, Menu, X, ArrowRight } from "lucide-react";
import { BRAND_INFO } from "@/data/content";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/sparsh", label: "Sparsh Family Care" },
  { href: "/aegis", label: "Aegis Property" },
  { href: "/home-care", label: "Home Care" },
  { href: "/contact", label: "Contact" },
];

export const SharedHeader: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Top Utility Bar */}
      <aside
        aria-label="Contact information"
        className="bg-brand-marine text-white text-xs py-2 px-4 border-b border-brand-gold/30"
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-brand-gold/20 text-brand-gold border border-brand-gold/40">
              ACTIVE HUBS
            </span>
            <span className="text-slate-200">
              Hyderabad &amp; Bengaluru Operational
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-300">
            <a
              href={`tel:${BRAND_INFO.phone}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
              aria-label={`Call at ${BRAND_INFO.phoneDisplay}`}
            >
              <Phone className="w-3.5 h-3.5 text-brand-gold" />
              <span>{BRAND_INFO.phoneDisplay}</span>
            </a>
            <span className="text-slate-500">|</span>
            <a
              href={`https://wa.me/${BRAND_INFO.whatsapp.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-brand-emerald-light transition-colors"
              aria-label="WhatsApp Support"
            >
              <MessageCircle className="w-3.5 h-3.5 text-brand-emerald" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </aside>

      {/* Main Sticky Header — Light background with full-colour logo */}
      <header
        className={`sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all duration-300 ${
          scrolled ? "shadow-md py-2" : "py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            {/* Official Logo — 3D Heraldic Emblem + Brand Wordmark */}
            <Link
              href="/"
              className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus:ring-2 focus:ring-brand-gold/50 rounded-lg p-1 transition-all"
              aria-label="Sustune Care — Home"
            >
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 shrink-0 drop-shadow-[0_2px_8px_rgba(201,151,56,0.25)] transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/brand/sustune_emblem_@3x.png"
                  alt="Sustune Care 3D Heraldic Emblem"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-black text-xl sm:text-2xl tracking-tight text-brand-marine group-hover:text-brand-cerulean transition-colors leading-tight">
                  SustuneCare
                </span>
                <span className="text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] leading-none mt-0.5">
                  Property Stewardship · Family Care
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav
              className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-semibold"
              aria-label="Main Navigation"
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-md transition-colors whitespace-nowrap ${
                    isActive(link.href)
                      ? "text-brand-cerulean bg-sky-50"
                      : "text-slate-700 hover:text-brand-cerulean hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Consultation CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2.5 rounded-btn bg-brand-cerulean hover:bg-brand-marine text-white font-bold text-xs shadow-sm hover:shadow-md transition-all duration-200 whitespace-nowrap"
              >
                <span>Request Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-md text-slate-700 hover:text-brand-cerulean focus:outline-none focus:ring-2 focus:ring-brand-cerulean"
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl">
            <nav className="flex flex-col space-y-1 font-semibold text-slate-700 text-sm">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2.5 rounded-md transition-colors ${
                    isActive(link.href)
                      ? "text-brand-cerulean bg-sky-50 font-bold"
                      : "hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="pt-3 border-t border-slate-100 mt-3">
              <Link
                href="/contact"
                className="w-full text-center py-3 rounded-btn bg-brand-cerulean text-white font-bold text-sm shadow-sm block"
              >
                Request Consultation
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
