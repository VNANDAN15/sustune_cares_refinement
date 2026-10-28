import React, { Suspense } from "react";
import type { Metadata } from "next";
import { ContactClient } from "./ContactClient";
import { Loader2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Consultation | Sustune Care Executive Office",
  description:
    "Schedule an NRI consultation for property stewardship or parental elder care in Hyderabad & Bengaluru. Direct phone, WhatsApp, and transparent response timelines.",
};

export default function ContactPage() {
  return (
    <Suspense
      fallback={
        <div className="py-24 text-center flex flex-col items-center justify-center gap-3">
          <Loader2 className="w-8 h-8 text-brand-cerulean animate-spin" />
          <span className="text-sm font-semibold text-slate-500">Loading consultation form...</span>
        </div>
      }
    >
      <ContactClient />
    </Suspense>
  );
}
