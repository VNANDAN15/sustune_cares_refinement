"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Phone, MessageSquare } from "lucide-react";
import { BRAND_INFO } from "@/data/content";

interface ServiceCTAProps {
  serviceName: string;
  title?: string;
  description?: string;
  variant?: "cerulean" | "emerald" | "gold" | "marine";
}

export const ServiceCTA: React.FC<ServiceCTAProps> = ({
  serviceName,
  title = "Ready to Get Started?",
  description = "Connect with our team to discuss your requirements.",
  variant = "cerulean",
}) => {
  const bgClasses = {
    cerulean: "bg-brand-cerulean hover:bg-brand-marine",
    emerald: "bg-brand-emerald hover:bg-brand-emerald-dark",
    gold: "bg-brand-gold hover:bg-brand-bronze",
    marine: "bg-brand-marine hover:bg-slate-800",
  };

  const serviceParam = encodeURIComponent(serviceName);

  return (
    <section className="py-16 bg-brand-mist/50 border-t border-slate-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-marine tracking-tight">
          {title}
        </h2>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            href={`/contact?service=${serviceParam}`}
            className={`inline-flex items-center gap-2 px-8 py-4 rounded-btn text-white font-bold text-sm shadow-md transition-all duration-200 ${bgClasses[variant]}`}
          >
            <span>{title.includes("Family") ? "Enquire About Family Care" : title.includes("Property") ? "Enquire About Property Management" : "Request a Consultation"}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href={`https://wa.me/${BRAND_INFO.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(`Hi, I'm interested in ${serviceName}. Could you provide more information?`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-4 rounded-btn bg-white border border-slate-200 text-slate-700 hover:border-brand-emerald font-semibold text-sm transition-all"
          >
            <MessageSquare className="w-4 h-4 text-brand-emerald" />
            <span>WhatsApp Us</span>
          </a>
        </div>
      </div>
    </section>
  );
};
