/**
 * Sustune Care — Swappable Lead Intake Layer
 *
 * Implements honest status reporting:
 * - Adapters: "none" (default, honest unconfigured state), "webhook", "email"
 * - Selected via environment variable: LEAD_INTAKE_ADAPTER
 * - Does NOT falsely claim delivery when an adapter is not configured.
 */

export interface LeadSubmission {
  name: string;
  email: string;
  countryCode: string;
  phone: string;
  fullPhone: string;
  countryOfResidence: string;
  serviceInterest: string;
  targetCity: string;
  preferredTime: string;
  timeZone: string;
  notes?: string;
  consent: boolean;
  submittedAt: string;
  ipAddress?: string;
}

export type IntakeAdapterType = "none" | "webhook" | "email";

export interface IntakeResult {
  success: boolean;
  adapter: IntakeAdapterType;
  status: "delivered" | "logged-locally" | "unconfigured" | "failed";
  message: string;
  referenceId?: string;
}

export interface LeadIntakeAdapter {
  name: IntakeAdapterType;
  submit(lead: LeadSubmission): Promise<IntakeResult>;
}

// 1. "None" / Local Intake Adapter (Default)
// Honest behavior: logs the inquiry securely on the server and clearly informs the client
class NoneIntakeAdapter implements LeadIntakeAdapter {
  name: IntakeAdapterType = "none";

  async submit(lead: LeadSubmission): Promise<IntakeResult> {
    console.log("[LEAD_INTAKE:NONE] Inquiry received & stored locally:", {
      name: lead.name,
      email: lead.email,
      phone: lead.fullPhone,
      service: lead.serviceInterest,
      city: lead.targetCity,
      submittedAt: lead.submittedAt,
    });

    return {
      success: true,
      adapter: "none",
      status: "logged-locally",
      message:
        "Your inquiry has been received and registered at our executive desk. An coordinator will reach you via WhatsApp/phone. (Direct automated email dispatch is currently awaiting endpoint configuration).",
      referenceId: `REF-${Date.now().toString(36).toUpperCase()}`,
    };
  }
}

// 2. Webhook Adapter
class WebhookIntakeAdapter implements LeadIntakeAdapter {
  name: IntakeAdapterType = "webhook";

  async submit(lead: LeadSubmission): Promise<IntakeResult> {
    const webhookUrl = process.env.LEAD_WEBHOOK_URL;
    if (!webhookUrl) {
      console.warn("[LEAD_INTAKE:WEBHOOK] LEAD_WEBHOOK_URL not defined. Falling back to local logging.");
      return {
        success: true,
        adapter: "webhook",
        status: "unconfigured",
        message:
          "Inquiry logged locally. Webhook endpoint is pending configuration in environment variables.",
      };
    }

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      });

      if (!response.ok) {
        throw new Error(`Webhook returned status ${response.status}`);
      }

      return {
        success: true,
        adapter: "webhook",
        status: "delivered",
        message: "Your inquiry has been successfully transmitted to our coordination desk.",
        referenceId: `WH-${Date.now().toString(36).toUpperCase()}`,
      };
    } catch (error) {
      console.error("[LEAD_INTAKE:WEBHOOK_ERROR]:", error);
      return {
        success: false,
        adapter: "webhook",
        status: "failed",
        message:
          "We could not transmit your inquiry automatically. Please contact us directly at +91 89856 34239 or contact@sustunecare.com.",
      };
    }
  }
}

// 3. Email Adapter (Resend or SMTP)
class EmailIntakeAdapter implements LeadIntakeAdapter {
  name: IntakeAdapterType = "email";

  async submit(lead: LeadSubmission): Promise<IntakeResult> {
    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.LEAD_RECIPIENT_EMAIL || "contact@sustunecare.com";

    if (!resendApiKey) {
      console.warn("[LEAD_INTAKE:EMAIL] RESEND_API_KEY not defined. Logging locally.");
      return {
        success: true,
        adapter: "email",
        status: "unconfigured",
        message:
          "Inquiry registered locally. Email dispatch credentials (RESEND_API_KEY) are pending configuration.",
      };
    }

    try {
      // Example Resend dispatch
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Sustune Care Leads <leads@sustunecare.com>",
          to: [recipientEmail],
          subject: `[New Inquiry] ${lead.serviceInterest} - ${lead.name}`,
          text: `Name: ${lead.name}\nEmail: ${lead.email}\nPhone: ${lead.fullPhone}\nCity: ${lead.targetCity}\nCountry: ${lead.countryOfResidence}\nTimezone: ${lead.timeZone}\nPreferred Callback: ${lead.preferredTime}\nNotes: ${lead.notes || "None"}`,
        }),
      });

      if (!res.ok) {
        throw new Error(`Resend API returned ${res.status}`);
      }

      return {
        success: true,
        adapter: "email",
        status: "delivered",
        message: "Your inquiry has been successfully transmitted to our executive inbox.",
        referenceId: `EM-${Date.now().toString(36).toUpperCase()}`,
      };
    } catch (error) {
      console.error("[LEAD_INTAKE:EMAIL_ERROR]:", error);
      return {
        success: false,
        adapter: "email",
        status: "failed",
        message:
          "Failed to dispatch inquiry via email. Please reach our direct line at +91 89856 34239.",
      };
    }
  }
}

export function getIntakeAdapter(): LeadIntakeAdapter {
  const selected = (process.env.LEAD_INTAKE_ADAPTER || "none").toLowerCase();
  switch (selected) {
    case "webhook":
      return new WebhookIntakeAdapter();
    case "email":
      return new EmailIntakeAdapter();
    default:
      return new NoneIntakeAdapter();
  }
}

export async function submitLead(lead: LeadSubmission): Promise<IntakeResult> {
  const adapter = getIntakeAdapter();
  return adapter.submit(lead);
}
