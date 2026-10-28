"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FaqItem } from "@/data/faqs";

interface FaqAccordionProps {
  faqs: FaqItem[];
  defaultOpenId?: string;
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({ faqs, defaultOpenId }) => {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId || null);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  if (faqs.length === 0) return null;

  return (
    <div className="space-y-3">
      {faqs.map((faq) => {
        const isOpen = openId === faq.id;
        return (
          <div
            key={faq.id}
            className={`bg-white rounded-xl border transition-all duration-200 overflow-hidden ${
              isOpen
                ? "border-brand-gold/60 shadow-sm ring-1 ring-brand-gold/20"
                : "border-slate-200 hover:border-slate-300"
            }`}
          >
            <button
              type="button"
              id={`faq-btn-${faq.id}`}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${faq.id}`}
              onClick={() => toggleFaq(faq.id)}
              className="w-full text-left p-5 font-heading font-bold text-sm text-brand-marine flex justify-between items-center gap-4 focus:outline-none focus:ring-2 focus:ring-brand-cerulean rounded-xl"
            >
              <span className="flex-1">{faq.question}</span>
              <span className="w-7 h-7 rounded-full bg-slate-50 flex items-center justify-center shrink-0 text-brand-marine">
                {isOpen ? (
                  <Minus className="w-4 h-4 text-brand-gold" />
                ) : (
                  <Plus className="w-4 h-4 text-slate-500" />
                )}
              </span>
            </button>

            {isOpen && (
              <div
                id={`faq-panel-${faq.id}`}
                role="region"
                aria-labelledby={`faq-btn-${faq.id}`}
                className="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100"
              >
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
