# Sustune Care — Multi-Page Enterprise Web Platform

[![Brand Identity](https://img.shields.io/badge/Brand%20Manual-SC--BGM--2026-0D3B66?style=flat-square)](docs/brand-system.md)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict%20v5-0073B7?style=flat-square)](tsconfig.json)
[![Next.js](https://img.shields.io/badge/Next.js-App%20Router%20v14.2.15-1E293B?style=flat-square)](next.config.mjs)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-Brand%20Tokens-0A8754?style=flat-square)](tailwind.config.ts)
[![Accessibility](https://img.shields.io/badge/Accessibility-WCAG%202.2%20AA-C99738?style=flat-square)](docs/implementation-audit.md)
[![Automated Checks](https://img.shields.io/badge/CI%20Checks-Passing-0A8754?style=flat-square)](scripts/smoke-test.mjs)

Production-ready, visual-first multi-page web platform for **Sustune Care Private Limited**, bridging the anxiety of distance for Global Indians through institutional real estate stewardship and dignified proxy family healthcare in Hyderabad & Bengaluru.

---

## 1. Multi-Page Architecture & Route Map

The single-page brochure has been refined into a dedicated multi-page website sharing a unified brand identity, light header with full-colour horizontal logo, accessible navigation, and footer:

| Route | Page | Purpose & Key Features |
|---|---|---|
| [`/`](app/page.tsx) | **Home** | Visual-first hero with background photography (no hero CTA buttons, subtle scroll cue), 3 dedicated service arms above launch film, official brand launch film in portrait chassis below, 4 brand pillars, interactive Guided Service Finder, and consultation pathway. |
| [`/sparsh`](app/sparsh/page.tsx) | **Sparsh Family Care** | Warm dignified natural imagery, 4-step care journey, 9:16 portrait video (46s), scannable bullets, 4 expandable service specifications, Sparsh FAQs, and calm closing CTA. |
| [`/aegis`](app/aegis/page.tsx) | **Aegis Property Stewardship** | Luxury architectural imagery, 4-step stewardship roadmap, 9:16 portrait video (38s), FEMA/RBI guideline notes, 4 expandable service specifications, Aegis FAQs, and property enquiry action. |
| [`/home-care`](app/home-care/page.tsx) | **Home & Personal Care** | Supported living & transitional care: Domiciliary & Personal Care, Post-Acute & Reablement, Complex Live-In Care, with 4-step in-home care journey, expandable details, and preselected CTAs. |
| [`/about`](app/about/page.tsx) | **About Sustune Care** | Corporate purpose, corporate story film (42s), heraldic four brand pillars geometry, verified leadership committee, and service synergy. |
| [`/contact`](app/contact/page.tsx) | **Contact & Consultation** | International country code selector (+91 default), callback timezone selector, service preselection from URL parameters, verified contact info, relocated NRI research survey, and server-side validated API. |

Every inner page includes an accessible `<BackToHome />` navigation button linking back to `/`.

---

## 2. Mandatory Operating Rules & Review Requirements

- **Repository Safety:** The original repository (`sustune_cares`) remains completely untouched. Work is isolated in `sustune_cares_refinement/` pushing to `https://github.com/VNANDAN15/sustune_cares_refinement.git`.
- **Claims Audit Enforcement:** High-risk unverified claims (Care Estimator prices, competitor comparison table, fake 24/7 client portal, etc.) are hidden or softened. Content is gated behind typed `status: "verified" | "pending-approval"`.
- **Dedicated Service Arm Pages:** Route `/sparsh`, `/aegis`, and `/home-care` each have distinct visual character and dedicated media.
- **Visual-First Layout:** First screen shows prominent full-colour Sustune Care logo in a light header, strong imagery, short headline, supporting sentence, and subtle scroll cue. Hero consultation buttons removed to eliminate visual clutter.
- **Unobstructed Videos:** All 4 portrait videos integrated in custom 9:16 mockup frames with poster facades, on-demand playback, native controls, and pending caption tracks.

---

## 3. Official Video Suite Specification

All 4 official high-definition recordings are integrated into dedicated 9:16 portrait frames with zero initial video preloading (`preload="none"`), poster images, and native controls. Web serving copies are strictly optimized to under 10MB to guarantee Git safety (< 100MB) and instant streaming:

| Page / Placement | Video Title | Source Master File | Web Serving File | Size | Duration | Aspect |
|---|---|---|---|---|---|---|
| **`/` (Home)** | Brand Launch Film | `sustune care launch video.mp4` | `/videos/sustune-care-launch.mp4` | 8.98 MB | 22.0s | 9:16 Portrait |
| **`/aegis`** | Aegis Stewardship Film | `AEGIS Vid001 dt 14th Oct.mp4` | `/videos/aegis-property-stewardship.mp4` | 5.29 MB | 38.2s | 9:16 Portrait |
| **`/sparsh`** | Sparsh Family Care Film | `sparsh updated video1.mp4` | `/videos/sparsh-family-care.mp4` | 6.11 MB | 46.5s | 9:16 Portrait |
| **`/about`** | Corporate Story Film | `SCIntro  Introduction Video.mp4` | `/videos/sustune-care-introduction.mp4` | 6.29 MB | 42.9s | 9:16 Portrait |

*Detailed technical specifications in [`docs/video-integration.md`](docs/video-integration.md).*

---

## 4. Official Brand Palette (Design Tokens)

Strictly conforming to the *Sustune Care Brand Guidelines & Stationery Suite Manual*:

- **Clinical White (`#FFFFFF`) & Cool Mist (`#F1F5F9`)** — ~60% Light background ground
- **Deep Marine Blue (`#0D3B66`) & Cerulean Flow (`#0073B7`)** — ~30% Headings, structural actions, and nav
- **Imperial Gold (`#C99738`), Burnished Bronze (`#8B601C`) & Emerald Vitality (`#0A8754`)** — ~10% Prestige accents
- **Pure Slate Gray (`#1E293B`)** — High-contrast typography

---

## 5. Development & Verification Commands

### Prerequisites
- **Node.js:** v18.17+ or v20+ / v22+
- **npm:** v9+ or v10+

### Run Locally
```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
# http://localhost:3000
```

### Build & Verification Commands
```bash
# Type-check TypeScript codebase (Strict)
npm run type-check

# Run automated integrity smoke test suite
npm test

# Run production build (validates all routes and prerendered pages)
npm run build

# Start production server
npm run start
```

---

## 6. Swappable Lead Intake Layer & Form Handling

The consultation intake form connects to `/api/enquiry` and delegates to `@/lib/lead-intake`:
- **Swappable Adapters:**
  - `none` (default): Logs submission securely on server and honestly informs the user that direct email dispatch is pending configuration.
  - `webhook`: Forwards submission to `LEAD_WEBHOOK_URL` (Zapier, Make, CRM).
  - `email`: Sends direct notification via Resend or SMTP when credentials are provided.
- **Server-Side Validation:** Validates full name, email format, telephone digits, service selection, and consent.
- **NRI Telephony & Timezone Support:** Country code selector (default +91) and preferred callback time zone selector.
- **Spam Protection:** In-memory rate limiting and invisible bot honeypot detection.
- **Honest Feedback:** No false success messages. Only genuine submissions accepted by the backend display confirmation.
- **Environment Configuration:** Copy `.env.example` to `.env.local` to configure external email providers.

---

## 7. Architectural Decision Records (ADRs)

### ADR-01: Framework Retention (Next.js 14 App Router)
- **Decision:** Keep Next.js 14 App Router and TypeScript.
- **Rationale:** Native server-rendered API routes for lead validation, automatic static generation (SSG) for fast edge performance, and zero dependency overhead.

### ADR-02: Content-Status Approval Gating
- **Decision:** Content items carry `status: "verified" | "pending-approval"`. UI renders only verified items.
- **Rationale:** Implements the claims audit structurally in data, allowing the company to approve items without touching component code.

### ADR-03: Swappable Lead Intake Interface
- **Decision:** An abstract `LeadIntakeAdapter` interface selectable by environment variable (`LEAD_INTAKE_ADAPTER`).
- **Rationale:** Prevents false success states, permits offline/local testing, and enables plug-and-play webhook or email integration.

---

## 8. Project Documentation Index

- [`PROJECT_TRACKING.md`](PROJECT_TRACKING.md) — Stakeholder project tracking matrix and repository isolation status.
- [`docs/implementation-audit.md`](docs/implementation-audit.md) — Multi-page transformation audit, content map, and assets inventory.
- [`docs/brand-system.md`](docs/brand-system.md) — Official brand manual specification, color tokens, typography, and logo usage rules.
- [`docs/content-review.md`](docs/content-review.md) — Comprehensive claims audit, items removed/hidden, items flagged for legal/company approval, and missing assets.
- [`docs/video-integration.md`](docs/video-integration.md) — Video integration report, aspect ratio handling, performance optimizations, and accessibility.
