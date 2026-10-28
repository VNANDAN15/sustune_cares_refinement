# Sustune Care — Content Review & Claims Audit

## 1. Claims Requiring Approval

All claims below were found in the existing codebase or live site. Items marked **REMOVED** have been taken out of the multi-page build. Items marked **FLAGGED** are softened or kept with caveats pending company verification.

### HIGH PRIORITY — Removed or Hidden

| # | Claim | Location | Action | Reason |
|---|---|---|---|---|
| C1 | "100% SLA compliance" | Layout metadata description | **REMOVED** | Unverifiable; overly broad |
| C2 | "24/7 NRI Client Portal" | Hero trust metrics | **REMOVED** | No portal exists |
| C3 | Care Estimator prices/packages | DiasporaEstimatorSection | **REMOVED** (entire section hidden) | Unapproved pricing, rebate percentages, and financial projections |
| C4 | "estimated annual protection" figures | Estimator summary card | **REMOVED** | Unapproved financial projections |
| C5 | Competitor comparison table | WhyUsTable component | **REMOVED** (entire section hidden) | Contains unverifiable competitive claims |
| C6 | "SSL Encrypted" badge | EnquiryForm header | **REMOVED** | Misleading; HTTPS is standard, not a special feature |
| C7 | "client portal" wording | Hero, comparison table | **REMOVED** | No portal exists |

### MEDIUM PRIORITY — Flagged for Company Approval

| # | Claim | Location | Current Text | Recommended Action |
|---|---|---|---|---|
| C8 | "100% FEMA & RBI Compliant" | Hero trust metrics, Aegis notice | Exact match | **Soften** to "FEMA & RBI guidelines followed" — full compliance claim needs legal verification |
| C9 | "Pvt Ltd Registered Entity" | Content data, comparison table | "Pvt Ltd Registered Entity with legally binding SLA contracts" | **Flag** — keep "Pvt Ltd" if registration is verifiable; remove "legally binding SLA" unless contracts exist |
| C10 | "100% FSC-certified print suite" | PillarsSection governance | Exact match | **Flag for approval** — needs FSC certification documentation |
| C11 | "Registered Nurse care plans" / "Registered Nurse supervision" | ServiceDiscovery, HomeCareSection | "Care plans are structured under registered nurse supervision" | **Soften** to "supervised care plans" unless RN staff verifiable |
| C12 | "telehealth assessment" | FAQ #1 | "rapid telehealth assessment" | **Soften** to "remote assessment" |
| C13 | "24–48 hour dispatch" | FAQ #1 | "dispatch a qualified care practitioner... within 24 to 48 hours" | **Flag** — keep if operationally achievable |
| C14 | "24/7 Emergency SOP Response" | Sparsh services | Service title + description | **Soften** to "Emergency Response Protocols" |
| C15 | "20+ Years of Professional Experience" | BRAND_INFO.experienceTagline | "Executive Team with 20+ Years of Professional Experience" | **Flag** — keep if leadership bios support it |
| C16 | "guaranteed ground dispatch" | Comparison table (removed) | Was in the table | **Already removed** with comparison table |

### LOW PRIORITY — Informational Flags

| # | Item | Note |
|---|---|---|
| C17 | Cities listed: Delhi NCR, Pune, Chennai | Appear only in the Care Estimator hub selector; not in operational content. Estimator is removed. |
| C18 | Leadership names (first names only) | Shiva, Ram, Pramod, Sailaja — limited info, no full names or bios verifiable |
| C19 | "Zero single-use waste protocols" | In brand pillars and governance — flag if not operationally implemented |

## 2. Integrated Visual Media & Photography Suite

All sections now feature high-resolution, culturally aligned photography integrated directly into the layout:

| Page | Placement | Asset Path | Subject | Status |
|---|---|---|---|---|
| `/` Home | Pathway Cards (3) | `/images/aegis-property-stewardship-hero.jpg`<br/>`/images/sparsh-family-care-hero.jpg`<br/>`/images/home-care-hero.jpg` | Property stewardship, family elder care, and in-home supported living | **INTEGRATED & VERIFIED** |
| `/sparsh` | Hero Section | `/images/sparsh-family-care-hero.jpg` | Caring companion supporting elderly parents in Indian living room | **INTEGRATED & VERIFIED** |
| `/aegis` | Hero Section | `/images/aegis-property-stewardship-hero.jpg` | Luxury contemporary residential community in Hyderabad | **INTEGRATED & VERIFIED** |
| `/home-care` | Hero Section | `/images/home-care-hero.jpg` | Home healthcare practitioner assisting senior with mobility rehabilitation | **INTEGRATED & VERIFIED** |
| `/about` | Hero Section | `/images/about-corporate-hero.jpg` | Executive committee collaborating in corporate boardroom overlooking Hyderabad | **INTEGRATED & VERIFIED** |

## 3. Legal Review Required

| Item | Detail |
|---|---|
| Privacy/Consent text | Current consent text: "I consent to Sustune Care contacting me... We respect privacy and do not sell or distribute personal information." — Needs review under **India's Digital Personal Data Protection Act, 2023 (DPDPA)**. |
| Data collection | Form collects: name, email, phone, country of residence, city, timezone, notes. Needs documented data processing purpose and retention policy. |
| Cookie/Analytics consent | No analytics currently configured. Configuration point provided. Do not enable without documented consent mechanism. |

## 4. Canonical URL Mismatch

- **Declared canonical:** `https://www.sustunecare.com`
- **Actual serving domain:** `sustunecares.vercel.app`
- **Action:** Do not change canonicals until production domain is confirmed. Flagged for resolution.

## 5. Form Backend & Swappable Lead Intake Status

- Server-side API route exists at `/api/enquiry` and delegates to `@/lib/lead-intake`
- Validates data strictly, rejects automated bots via honeypot, and enforces in-memory rate limiting
- Configured with swappable adapters:
  - `none` (default active): Securely logs inquiry and honestly informs client that direct email dispatch is pending configuration
  - `webhook`: Forwards inquiry JSON to `LEAD_WEBHOOK_URL`
  - `email`: Sends direct notification via Resend (`RESEND_API_KEY`) or SMTP
- **Status:** Form accepts and validates submissions; external dispatch adapter is **pending configuration** in `.env.local`

## 6. Items Awaiting Company Decision

1. Confirm production domain (sustunecare.com vs sustunecares.vercel.app)
2. Approve or revise leadership bios and "20+ years" claim
3. Supply approved photography for service pages
4. Verify FSC certification claim
5. Verify FEMA/RBI compliance claim scope
6. Confirm 24/7 emergency response capability
7. Confirm registered nurse supervision claim
8. Review and approve privacy/consent text under DPDPA
9. Supply video captions/transcripts (or confirm none available)
10. Decide whether to restore the Care Estimator with approved pricing
11. Decide whether to restore the comparison table with verified claims
