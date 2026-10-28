# Sustune Care — Brand System Documentation

## Source of Truth
The **Sustune Care Brand Guidelines & Stationery Suite Manual** (PDF in project root) is the authoritative reference. Where this document differs from the manual, the manual wins.

## Colour Tokens

| Token Name | Hex | Tailwind Class | Usage |
|---|---|---|---|
| Cerulean Flow | `#0073B7` | `brand-cerulean` | Primary actions, links, interactive elements |
| Deep Marine Blue | `#0D3B66` | `brand-marine` | Headings, selected surfaces, footer, nav highlights |
| Imperial Gold | `#C99738` | `brand-gold` | Accent, badges, restrained decorative use |
| Burnished Bronze | `#8B601C` | `brand-bronze` | Secondary gold, hover states |
| Emerald Vitality | `#0A8754` | `brand-emerald` | Positive indicators, Sparsh accent, success states |
| Pure Slate Gray | `#1E293B` | `brand-slate` | Body text, secondary UI |
| Cool Mist Tint | `#F1F5F9` | `brand-mist` | Light backgrounds, alternating sections |
| Clinical White | `#FFFFFF` | `brand-canvas` | Primary background, cards |

### Visual Balance Guideline
- ~60% white/light neutral backgrounds
- ~30% clinical blue and deep marine (headings, nav, footer)
- ~10% gold and emerald accents

### Contrast Notes
- White text on gold (`#C99738`): **Fails WCAG AA** — avoid for body text; use only for large badges with dark text
- White text on emerald (`#0A8754`): **Passes AA** for large text; use cautiously for small text
- White text on marine (`#0D3B66`): **Passes AAA** ✓
- White text on cerulean (`#0073B7`): **Passes AA** ✓
- Slate text on white: **Passes AAA** ✓

## Logo Usage

### Primary Header
- Use `sustune_logo_horizontal_lockup.svg` in the **light-coloured header**
- Sized generously (minimum height ~44px on desktop)
- Must link to `/` (homepage)
- Do NOT recreate with CSS text — use the official SVG asset

### Favicon
- Use `sustune_icon_favicon.svg` for browser tab
- PNG fallbacks at 16, 32, 48, 192, 512px provided

### Logo Rules (from brand manual)
- Preserve proportions and geometry
- Maintain clear space around the logo
- Never stretch, distort, recolour, or add effects
- Prefer digital assets over print artwork
- Do not repeat the same logo in the hero if already in the header

## Typography

| Level | Font | Size (Desktop) | Weight | Mobile Scale |
|---|---|---|---|---|
| H1 | Plus Jakarta Sans | ~52px | 800 (ExtraBold) | ~32-36px |
| H2 | Plus Jakarta Sans | ~36px | 700 (Bold) | ~24-28px |
| H3 | Plus Jakarta Sans | ~24px | 600 (SemiBold) | ~20px |
| Body | Inter | ~16px, 1.60 line-height | 400 (Regular) | ~15px |
| Caption | Inter | ~14px | 400-500 | ~13px |
| Small/Badge | Inter | ~12px | 600-700 | ~11px |

### Font Loading
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');
```

## Component Design Tokens

| Token | Value |
|---|---|
| Max content width | 1280px |
| Button border radius | 6px |
| Card border radius | 12px |
| Card shadow | `0 10px 30px -5px rgba(13, 59, 102, 0.07)` |
| Gold shadow | `0 4px 20px -2px rgba(201, 151, 56, 0.22)` |
| Glow shadow | `0 0 25px rgba(0, 115, 183, 0.15)` |

### Component Guidelines
- Subtle borders and shadows (not heavy drop shadows)
- Generous whitespace between sections
- Consistent spacing scale
- Clear focus, hover, active, and disabled states
- Dark marine surfaces used selectively (footer, select sections)
- **Primary header stays light** with full-colour logo

## Differences From Existing Implementation

1. **Header**: Currently uses emblem + CSS text recreation → Should use `sustune_logo_horizontal_lockup.svg`
2. **Hero background**: Currently dark marine → Should be lighter or image-led for visual-first approach
3. **Logo in hero**: Currently has video in hero right column → Hero should not repeat logo; use imagery/video
4. **Footer links**: Currently anchor links → Must be real route links
