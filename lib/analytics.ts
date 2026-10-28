/**
 * Sustune Care — Analytics-Ready, Consent-Gated Tracking Layer
 *
 * Enforces zero-tracking default:
 * - No non-essential cookies
 * - No personal data or health details ever passed
 * - Clean event taxonomy with no-op implementation
 */

export type AnalyticsEventType =
  | "cta_click"
  | "service_selected"
  | "form_started"
  | "form_submitted"
  | "video_play";

export interface AnalyticsEvent {
  event: AnalyticsEventType;
  category: "navigation" | "service_discovery" | "lead_intake" | "media";
  label?: string;
  serviceId?: string;
  metadata?: Record<string, string | number | boolean>;
}

// Track call - defaults to no-op.
// Real dispatch can be activated only once explicit cookie & consent mechanism is configured.
export function track(event: AnalyticsEvent): void {
  // Never track personal identifiable information (PII) or medical notes
  if (process.env.NODE_ENV === "development") {
    console.debug("[SUSTUNE_ANALYTICS_EVENT]:", event);
  }

  // Future integration point:
  // if (typeof window !== "undefined" && window.hasUserGivenConsent && window.dataLayer) {
  //   window.dataLayer.push(event);
  // }
}
