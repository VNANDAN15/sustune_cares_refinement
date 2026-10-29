"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MessageSquare, ExternalLink } from "lucide-react";
import { BRAND_INFO } from "@/data/content";

export const SharedFooter: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t-2 border-brand-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand & Identity */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 shrink-0 drop-shadow-[0_2px_10px_rgba(201,151,56,0.3)] transition-transform group-hover:scale-105">
                <Image
                  src="/brand/sustune_emblem_@3x.png"
                  alt="Sustune Care Emblem"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-xl text-white tracking-tight">
                  SustuneCare
                </span>
                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">
                  Asset Stewardship &amp; Family Care
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed">
              {BRAND_INFO.legalName} provides institutional proxy services for
              Global Indians, delivering disciplined real estate stewardship and
              dignified family healthcare across India.
            </p>
          </div>

          {/* Col 2: Service Pathways */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-white">
              Service Pathways
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/aegis" className="hover:text-brand-gold transition-colors">
                  Aegis Property Stewardship
                </Link>
              </li>
              <li>
                <Link href="/sparsh" className="hover:text-brand-emerald transition-colors">
                  Sparsh Family &amp; Elder Care
                </Link>
              </li>
              <li>
                <Link href="/home-care" className="hover:text-brand-cerulean transition-colors">
                  Home &amp; Personal Care
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Sustune Care
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact &amp; Enquiry
                </Link>
              </li>
              <li>
                <a
                  href={BRAND_INFO.nriSurveyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-gold transition-colors flex items-center gap-1 text-slate-300"
                >
                  <span>NRI Research Survey</span>
                  <ExternalLink className="w-3 h-3 text-brand-gold" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Trust & Standards */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-white">
              Our Standards
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-2">
                <span className="text-brand-emerald font-bold">✓</span>
                <span>FEMA &amp; RBI Guidelines Followed</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-brand-emerald font-bold">✓</span>
                <span>Multi-tier Background Vetting</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-brand-emerald font-bold">✓</span>
                <span>Digital Client Reports</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-brand-emerald font-bold">✓</span>
                <span>Sustainable Operations</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-brand-emerald font-bold">✓</span>
                <span>Pvt Ltd Registered Entity</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-white">
              Contact Us
            </h4>
            <div className="space-y-2 text-xs text-slate-400 leading-relaxed">
              <p>
                <strong className="text-slate-200">Principal Office:</strong><br />
                Hyderabad, Telangana, India
              </p>
              <p>
                <strong className="text-slate-200">Regional Hub:</strong><br />
                Bengaluru, Karnataka, India
              </p>
              <p className="pt-1">
                <strong className="text-slate-200">Call:</strong>{" "}
                <a href={`tel:${BRAND_INFO.phone}`} className="text-brand-gold hover:underline">
                  {BRAND_INFO.phoneDisplay}
                </a>
              </p>
              <p>
                <strong className="text-slate-200">WhatsApp:</strong>{" "}
                <a
                  href={`https://wa.me/${BRAND_INFO.whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-emerald hover:underline"
                >
                  {BRAND_INFO.whatsappDisplay}
                </a>
              </p>
              <p>
                <strong className="text-slate-200">Email:</strong>{" "}
                <a href={`mailto:${BRAND_INFO.email}`} className="text-brand-cerulean hover:underline">
                  {BRAND_INFO.email}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Legal Sub-Footer */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} {BRAND_INFO.legalName}. All Rights Reserved.
            Protected Care. Sustained Dignity.
          </div>
          <div className="flex flex-wrap items-center gap-4 text-slate-400">
            <Link href="/" className="hover:text-white transition-colors">
              Back to Home
            </Link>
            <span>•</span>
            <span>Hyderabad &amp; Bengaluru</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
