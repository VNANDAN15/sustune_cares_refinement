"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import {
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  ShieldCheck,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ExternalLink,
  Clock,
  Building,
} from "lucide-react";
import { BackToHome } from "@/components/shared/BackToHome";
import { BRAND_INFO } from "@/data/content";

const COUNTRY_CODES = [
  { code: "+91", country: "India (IN)" },
  { code: "+1", country: "United States (US) / Canada (CA)" },
  { code: "+44", country: "United Kingdom (UK)" },
  { code: "+971", country: "United Arab Emirates (UAE)" },
  { code: "+61", country: "Australia (AU)" },
  { code: "+65", country: "Singapore (SG)" },
  { code: "+966", country: "Saudi Arabia (KSA)" },
  { code: "+49", country: "Germany (DE)" },
  { code: "+33", country: "France (FR)" },
  { code: "+Other", country: "Other Country Code" },
];

const TIMEZONES = [
  "IST (India Standard Time · UTC+5:30)",
  "EST (US Eastern Time · UTC-5)",
  "CST (US Central Time · UTC-6)",
  "PST (US Pacific Time · UTC-8)",
  "GMT / BST (United Kingdom · UTC+0 / +1)",
  "GST (Gulf Standard Time · UAE · UTC+4)",
  "AEST (Australian Eastern · UTC+10)",
  "SGT (Singapore Time · UTC+8)",
];

const SERVICES_OPTIONS = [
  "Aegis Property Stewardship",
  "Aegis: Tenant Scouting & Screening",
  "Aegis: Vacant Asset Guardianship",
  "Aegis: Remittance & Tax Management",
  "Aegis: Inspection & Structural Upkeep",
  "Sparsh Family Care",
  "Sparsh: Empathetic Care Companions",
  "Sparsh: Doctor Escorts & Health Logs",
  "Sparsh: Emergency Response Protocols",
  "Sparsh: Domestic Help Supervision",
  "Home Care: Domiciliary & Personal Care",
  "Home Care: Post-Acute & Reablement",
  "Home Care: Complex Live-In Care",
  "Comprehensive Multi-Service (Aegis + Sparsh)",
];

export const ContactClient: React.FC = () => {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service") || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    phone: "",
    countryOfResidence: "USA",
    serviceInterest: "Aegis Property Stewardship",
    targetCity: "Hyderabad",
    preferredTime: "Morning",
    timeZone: "EST (US Eastern Time · UTC-5)",
    notes: "",
    consent: false,
    botField: "", // Spam Honeypot
  });

  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{
    success: boolean;
    message: string;
    timestamp?: string;
    referenceId?: string;
  } | null>(null);

  // Sync preselected service from URL query param
  useEffect(() => {
    if (serviceParam) {
      // Find matching service or set directly
      const matched = SERVICES_OPTIONS.find(
        (s) => s.toLowerCase() === serviceParam.toLowerCase() || s.includes(serviceParam)
      );
      setFormData((prev) => ({
        ...prev,
        serviceInterest: matched || serviceParam,
      }));
    }
  }, [serviceParam]);

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errors.name = "Please enter your full name (minimum 2 characters).";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errors.email = "Please enter a valid email address.";
    }
    if (!formData.phone.trim() || formData.phone.replace(/\D/g, "").length < 6) {
      errors.phone = "Please enter a valid phone number (digits only).";
    }
    if (!formData.consent) {
      errors.consent = "You must confirm consent to submit an inquiry.";
    }
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitResult(null);

    const errors = validate();
    setValidationErrors(errors);
    if (Object.keys(errors).length > 0) {
      return;
    }

    setSubmitting(true);

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitResult({
          success: true,
          message: data.message,
          timestamp: data.timestamp,
          referenceId: data.referenceId,
        });
        // Reset inputs while preserving location/preferences
        setFormData((prev) => ({
          ...prev,
          name: "",
          email: "",
          phone: "",
          notes: "",
          consent: false,
        }));
      } else {
        setSubmitResult({
          success: false,
          message: data.error || "Failed to submit inquiry. Please review your details and try again.",
        });
        if (data.validationErrors) {
          setValidationErrors(data.validationErrors);
        }
      }
    } catch {
      setSubmitResult({
        success: false,
        message:
          "Network communication error. Please check your internet connection or email us directly at contact@sustunecare.com.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <BackToHome />

      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Verified Contact Information & Operational Details */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3.5">
                  <div className="relative w-12 h-12 rounded-2xl bg-white border border-brand-gold/40 p-1 shadow-sm shrink-0 drop-shadow-sm">
                    <Image
                      src="/brand/sustune_emblem_@3x.png"
                      alt="Sustune Care Official Emblem"
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-brand-gold uppercase tracking-wider block">
                      SUSTUNE CARE · EXECUTIVE DESK
                    </span>
                    <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-marine tracking-tight">
                      Schedule Your Consultation
                    </h1>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Connect with our coordination teams in Hyderabad and Bengaluru to structure an institutional stewardship agreement.
                </p>
              </div>

              {/* Verified Contact Cards */}
              <div className="space-y-4">
                {/* Telephone */}
                <a
                  href={`tel:${BRAND_INFO.phone}`}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-brand-cerulean transition-colors group"
                >
                  <div className="w-11 h-11 rounded-xl bg-brand-cerulean text-white flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                      Direct Telephone (India Operations)
                    </div>
                    <div className="font-heading font-bold text-base text-brand-marine group-hover:text-brand-cerulean transition-colors">
                      {BRAND_INFO.phoneDisplay}
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      <span>Mon – Sat, 9:00 AM – 8:00 PM IST</span>
                    </div>
                  </div>
                </a>

                {/* WhatsApp Support */}
                <a
                  href={`https://wa.me/${BRAND_INFO.whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-brand-emerald transition-colors group"
                >
                  <div className="w-11 h-11 rounded-xl bg-brand-emerald text-white flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                      WhatsApp Priority Support
                    </div>
                    <div className="font-heading font-bold text-base text-brand-marine group-hover:text-brand-emerald transition-colors">
                      {BRAND_INFO.whatsappDisplay}
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      Direct messaging for overseas time zones
                    </div>
                  </div>
                </a>

                {/* Email Inquiries */}
                <a
                  href={`mailto:${BRAND_INFO.email}`}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-brand-gold transition-colors group"
                >
                  <div className="w-11 h-11 rounded-xl bg-brand-marine text-brand-gold flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                      Corporate Correspondence
                    </div>
                    <div className="font-heading font-bold text-base text-brand-marine group-hover:text-brand-gold transition-colors">
                      {BRAND_INFO.email}
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      Executive review within 24 business hours
                    </div>
                  </div>
                </a>
              </div>

              {/* Operating Hubs */}
              <div className="p-5 rounded-2xl bg-brand-mist/60 border border-slate-200 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-marine">
                  <Building className="w-4 h-4 text-brand-gold" />
                  <span>Direct Ground Operational Hubs</span>
                </div>
                <div className="grid sm:grid-cols-2 gap-3 text-xs text-slate-700">
                  <div className="p-3 rounded-xl bg-white border border-slate-200">
                    <div className="font-bold text-brand-marine">Hyderabad Hub</div>
                    <div className="text-slate-500 text-[11px]">Telangana Core Office</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-slate-200">
                    <div className="font-bold text-brand-marine">Bengaluru Hub</div>
                    <div className="text-slate-500 text-[11px]">Karnataka Regional Office</div>
                  </div>
                </div>
              </div>

              {/* NRI Survey Callout */}
              <div className="p-5 rounded-2xl bg-amber-50/60 border border-brand-gold/30 flex items-start gap-3.5">
                <ShieldCheck className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-brand-marine">
                    Help Shape Our Next Expansion City
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Are you looking for Sustune Care in Pune, Chennai, or NCR? Take our 2-minute NRI research survey to prioritize our next operational hub.
                  </p>
                  <a
                    href={BRAND_INFO.nriSurveyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-gold hover:text-brand-bronze pt-1"
                  >
                    <span>Open Research Survey (Google Forms)</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Consultation Form */}
            <div className="lg:col-span-7 bg-white rounded-card p-6 sm:p-10 border border-slate-200 shadow-subtle-card">
              <div className="border-b border-slate-100 pb-5 mb-6">
                <h2 className="font-heading font-bold text-xl text-brand-marine">
                  Inquiry &amp; Callback Request
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Provide your details below. An executive coordinator will review your request and connect with you.
                </p>
              </div>

              {/* Feedback Alert Messages */}
              {submitResult && (
                <div
                  className={`p-4 rounded-xl mb-6 text-xs flex items-start gap-3 ${
                    submitResult.success
                      ? "bg-emerald-50 text-emerald-900 border border-emerald-200"
                      : "bg-rose-50 text-rose-900 border border-rose-200"
                  }`}
                  role="status"
                >
                  {submitResult.success ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  )}
                  <div>
                    <div className="font-bold text-sm">
                      {submitResult.success ? "Inquiry Received Successfully" : "Submission Error"}
                    </div>
                    <div className="mt-0.5 leading-relaxed">{submitResult.message}</div>
                    <div className="flex flex-wrap gap-3 mt-1.5 text-[10px]">
                      {submitResult.referenceId && (
                        <span className="font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">
                          Tracking: {submitResult.referenceId}
                        </span>
                      )}
                      {submitResult.timestamp && (
                        <span className="text-emerald-700">
                          Logged at: {new Date(submitResult.timestamp).toLocaleString()}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Honeypot field (hidden from real users, traps automated bots) */}
                <div className="sr-only" aria-hidden="true">
                  <label htmlFor="botField">Leave this field blank</label>
                  <input
                    type="text"
                    id="botField"
                    name="botField"
                    tabIndex={-1}
                    value={formData.botField}
                    onChange={(e) => setFormData({ ...formData, botField: e.target.value })}
                    autoComplete="off"
                  />
                </div>

                {/* Name & Email Row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-brand-marine mb-1.5">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-btn text-xs border bg-slate-50 focus:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-cerulean ${
                        validationErrors.name ? "border-rose-400 ring-1 ring-rose-200" : "border-slate-300"
                      }`}
                    />
                    {validationErrors.name && (
                      <p className="text-[11px] text-rose-500 mt-1">{validationErrors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-brand-marine mb-1.5">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="e.g. ramesh@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-btn text-xs border bg-slate-50 focus:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-cerulean ${
                        validationErrors.email ? "border-rose-400 ring-1 ring-rose-200" : "border-slate-300"
                      }`}
                    />
                    {validationErrors.email && (
                      <p className="text-[11px] text-rose-500 mt-1">{validationErrors.email}</p>
                    )}
                  </div>
                </div>

                {/* Telephone Row with Country Code Selector */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold text-brand-marine mb-1.5">
                    Contact Phone / WhatsApp <span className="text-rose-500">*</span>
                  </label>
                  <div className="flex gap-2">
                    <select
                      id="countryCode"
                      aria-label="Country calling code"
                      value={formData.countryCode}
                      onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                      className="px-2.5 py-2.5 rounded-btn text-xs border border-slate-300 bg-slate-50 focus:bg-white max-w-[140px] truncate focus:outline-none focus:ring-2 focus:ring-brand-cerulean"
                    >
                      {COUNTRY_CODES.map((item) => (
                        <option key={item.code} value={item.code}>
                          {item.code} ({item.country.split(" ")[0]})
                        </option>
                      ))}
                    </select>

                    <input
                      type="tel"
                      id="phone"
                      required
                      placeholder="e.g. 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-btn text-xs border bg-slate-50 focus:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-cerulean ${
                        validationErrors.phone ? "border-rose-400 ring-1 ring-rose-200" : "border-slate-300"
                      }`}
                    />
                  </div>
                  {validationErrors.phone && (
                    <p className="text-[11px] text-rose-500 mt-1">{validationErrors.phone}</p>
                  )}
                </div>

                {/* Service Interest Selection */}
                <div>
                  <label htmlFor="serviceInterest" className="block text-xs font-bold text-brand-marine mb-1.5">
                    Service of Interest <span className="text-rose-500">*</span>
                  </label>
                  <select
                    id="serviceInterest"
                    value={formData.serviceInterest}
                    onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-btn text-xs border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-cerulean"
                  >
                    {SERVICES_OPTIONS.map((srv) => (
                      <option key={srv} value={srv}>
                        {srv}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Target City & Country of Residence */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="targetCity" className="block text-xs font-bold text-brand-marine mb-1.5">
                      Target City in India <span className="text-rose-500">*</span>
                    </label>
                    <select
                      id="targetCity"
                      value={formData.targetCity}
                      onChange={(e) => setFormData({ ...formData, targetCity: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-btn text-xs border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-cerulean"
                    >
                      <option value="Hyderabad">Hyderabad (Operational Core)</option>
                      <option value="Bengaluru">Bengaluru (Operational Core)</option>
                      <option value="Other">Other City (Waitlist Inquiry)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="countryOfResidence" className="block text-xs font-bold text-brand-marine mb-1.5">
                      Your Country of Residence
                    </label>
                    <select
                      id="countryOfResidence"
                      value={formData.countryOfResidence}
                      onChange={(e) => setFormData({ ...formData, countryOfResidence: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-btn text-xs border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-cerulean"
                    >
                      <option value="USA">United States (USA)</option>
                      <option value="UK">United Kingdom (UK)</option>
                      <option value="UAE">United Arab Emirates (UAE)</option>
                      <option value="Australia">Australia</option>
                      <option value="Canada">Canada</option>
                      <option value="Singapore">Singapore</option>
                      <option value="Other">Other Diaspora Location</option>
                    </select>
                  </div>
                </div>

                {/* Timezone & Callback Preference */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="timeZone" className="block text-xs font-bold text-brand-marine mb-1.5">
                      Your Time Zone
                    </label>
                    <select
                      id="timeZone"
                      value={formData.timeZone}
                      onChange={(e) => setFormData({ ...formData, timeZone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-btn text-xs border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-cerulean"
                    >
                      {TIMEZONES.map((tz) => (
                        <option key={tz} value={tz}>
                          {tz}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="preferredTime" className="block text-xs font-bold text-brand-marine mb-1.5">
                      Preferred Callback Time
                    </label>
                    <select
                      id="preferredTime"
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-btn text-xs border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-cerulean"
                    >
                      <option value="Morning">Morning (9 AM – 12 PM)</option>
                      <option value="Afternoon">Afternoon (12 PM – 4 PM)</option>
                      <option value="Evening">Evening (4 PM – 8 PM)</option>
                      <option value="Flexible">Flexible / Send WhatsApp First</option>
                    </select>
                  </div>
                </div>

                {/* Message / Requirements Notes */}
                <div>
                  <label htmlFor="notes" className="block text-xs font-bold text-brand-marine mb-1.5">
                    Your Requirements &amp; Property/Family Details (Optional)
                  </label>
                  <textarea
                    id="notes"
                    rows={3}
                    placeholder="Provide any specific context, such as property location, parents' assistance requirements, or preferred consultation dates..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-btn text-xs border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-cerulean"
                  />
                </div>

                {/* Consent Acknowledgement Checkbox */}
                <div>
                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="w-4 h-4 text-brand-cerulean rounded border-slate-300 focus:ring-brand-cerulean mt-0.5 shrink-0"
                    />
                    <span className="text-[11px] text-slate-600 leading-relaxed">
                      I consent to Sustune Care contacting me regarding my inquiry via phone, email, or WhatsApp. We respect your privacy and do not sell or distribute personal information.
                    </span>
                  </label>
                  {validationErrors.consent && (
                    <p className="text-[11px] text-rose-500 mt-1">{validationErrors.consent}</p>
                  )}
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 rounded-btn bg-brand-cerulean hover:bg-brand-marine text-white font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Transmitting Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Schedule NRI Consultation</span>
                      </>
                    )}
                  </button>
                  <p className="text-[10px] text-slate-400 text-center mt-2">
                    Verified Indian operations · Transparent response timeline
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
