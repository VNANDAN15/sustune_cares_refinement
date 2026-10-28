import { NextResponse } from "next/server";
import { submitLead, LeadSubmission } from "@/lib/lead-intake";

interface EnquiryPayload {
  name: string;
  email: string;
  countryCode: string;
  phone: string;
  countryOfResidence: string;
  serviceInterest: string;
  targetCity: string;
  preferredTime: string;
  timeZone: string;
  notes?: string;
  consent: boolean;
  botField?: string; // Honeypot
}

// In-memory rate limiting map
const rateLimitMap = new Map<string, { count: number; firstSeen: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 1000; // 1 minute
  const maxRequests = 5;

  const record = rateLimitMap.get(ip);
  if (!record) {
    rateLimitMap.set(ip, { count: 1, firstSeen: now });
    return false;
  }

  if (now - record.firstSeen > windowMs) {
    rateLimitMap.set(ip, { count: 1, firstSeen: now });
    return false;
  }

  record.count += 1;
  return record.count > maxRequests;
}

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for") || "unknown-ip";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, error: "Too many requests. Please wait a moment before trying again." },
        { status: 429 }
      );
    }

    const body: EnquiryPayload = await request.json();

    // 1. Honeypot check (reject spam)
    if (body.botField && body.botField.trim() !== "") {
      return NextResponse.json(
        { success: false, error: "Invalid submission detected." },
        { status: 400 }
      );
    }

    // 2. Strict Server-Side Validation
    const errors: Record<string, string> = {};

    if (!body.name || body.name.trim().length < 2) {
      errors.name = "Full name must be at least 2 characters.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!body.email || !emailRegex.test(body.email.trim())) {
      errors.email = "Please provide a valid email address.";
    }

    if (!body.phone || body.phone.replace(/\D/g, "").length < 6) {
      errors.phone = "Please provide a valid contact phone number.";
    }

    if (!body.countryCode) {
      errors.countryCode = "Country calling code is required.";
    }

    if (!body.serviceInterest) {
      errors.serviceInterest = "Please select a service of interest.";
    }

    if (!body.targetCity) {
      errors.targetCity = "Please select your primary city in India.";
    }

    if (!body.consent) {
      errors.consent = "Consent acknowledgment is required to process your inquiry.";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { success: false, error: "Validation failed.", validationErrors: errors },
        { status: 422 }
      );
    }

    // 3. Sanitized submission object
    const lead: LeadSubmission = {
      name: body.name.trim().slice(0, 100),
      email: body.email.trim().toLowerCase().slice(0, 100),
      countryCode: body.countryCode,
      phone: body.phone.trim().slice(0, 20),
      fullPhone: `${body.countryCode} ${body.phone.trim().slice(0, 20)}`,
      countryOfResidence: body.countryOfResidence || "Not Specified",
      serviceInterest: body.serviceInterest,
      targetCity: body.targetCity,
      preferredTime: body.preferredTime || "Flexible",
      timeZone: body.timeZone || "IST (UTC+5:30)",
      notes: (body.notes || "").trim().slice(0, 1000),
      consent: body.consent,
      submittedAt: new Date().toISOString(),
      ipAddress: ip,
    };

    // 4. Delegate to swappable intake layer
    const result = await submitLead(lead);

    return NextResponse.json(
      {
        success: result.success,
        message: result.message,
        adapter: result.adapter,
        status: result.status,
        referenceId: result.referenceId,
        timestamp: lead.submittedAt,
      },
      { status: result.success ? 200 : 502 }
    );
  } catch (err: unknown) {
    console.error("[SUSTUNE_CARE_ENQUIRY_ERROR]:", err);
    return NextResponse.json(
      {
        success: false,
        error:
          "An unexpected server error occurred while processing your request. Please email us directly at contact@sustunecare.com.",
      },
      { status: 500 }
    );
  }
}
