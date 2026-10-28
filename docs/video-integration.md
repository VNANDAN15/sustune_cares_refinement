# Sustune Care — Video Integration Architecture & Audit Report

**Document Ref:** SC-VIA-2026-V1  
**Status:** Integrated & Verified  
**Operating Rule Compliance:** Original source video files preserved untouched; web copies optimized and isolated.  

---

## 1. Video Inventory & Mapping Specification

| Attribute | Video A: Aegis Property | Video B: Introduction Story | Video C: Sparsh Family Care | Video D: Brand Film Launch |
| :--- | :--- | :--- | :--- | :--- |
| **Original Filename** | `AEGIS Vid001 dt 14th Oct.mp4` | `SCIntro  Introduction Video.mp4` | `sparsh updated video1.mp4` | `sustune care launch video.mp4` |
| **Web Filename** | `aegis-property-stewardship.mp4` | `sustune-care-introduction.mp4` | `sparsh-family-care.mp4` | `sustune-care-launch.mp4` |
| **Target Public Path**| `/videos/aegis-property-stewardship.mp4` | `/videos/sustune-care-introduction.mp4` | `/videos/sparsh-family-care.mp4` | `/videos/sustune-care-launch.mp4` |
| **Generated Poster** | `/videos/posters/aegis-property-stewardship-poster.jpg` | `/videos/posters/sustune-care-introduction-poster.jpg` | `/videos/posters/sparsh-family-care-poster.jpg` | `/videos/posters/sustune-care-launch-poster.jpg` |
| **Source File Size** | 53.59 MB (raw master) | 62.35 MB (raw master) | 96.75 MB (raw master) | 30.82 MB (raw master) |
| **Web Serving Size** | 5.29 MB (web-optimized) | 6.29 MB (web-optimized) | 6.11 MB (web-optimized) | 8.98 MB (web-optimized) |
| **Duration** | 38.20 seconds | 42.90 seconds | 46.53 seconds | 22.00 seconds |
| **Native Resolution** | $2160 \times 3840$ (9:16 Portrait) | $2160 \times 3840$ (9:16 Portrait) | $2160 \times 3840$ (9:16 Portrait) | $2160 \times 3840$ (9:16 Portrait) |
| **Frame Rate** | 30.00 fps | 30.00 fps | 30.00 fps | 30.00 fps |
| **Audio Presence** | Stereo AAC (131 kbps) | Stereo AAC (130 kbps) | Stereo AAC (251 kbps) | Stereo AAC (130 kbps) |
| **Visual Subject** | Locked gated home in India, NRI couple abroad on smartphone, property audit. | NRI couple abroad, residential Indian villa, unified service ecosystem. | NRI daughter abroad on phone, elderly mother in India smiling, compassionate companion. | 3D heraldic gold emblem rotating, caregiver visiting home with branded Sustune package. |
| **Target Section** | **Section 5:** Aegis Property Stewardship Section | **Section 8:** About Sustune Care / Unified Story Section | **Section 6:** Sparsh Family Care Section | **Section 2:** Homepage Hero & Brand Film Showcase |

---

## 2. Playback Architecture & Performance Optimization

### 1. Vertical 9:16 Aspect Ratio Strategy
All 4 source videos were produced in **9:16 portrait orientation** ($2160 \times 3840$), standard for modern mobile stories and vertical reels.
- **Problem with Generic Video Embeds:** Embedding 9:16 vertical videos into standard 16:9 widescreen boxes results in thick black sidebars (pillarboxing) or distorted crops.
- **Implemented Solution:** Each video is presented in a custom **Luxury Device Mockup Frame** (`aspect-[9/16]`, max width 320px–360px on desktop) with gold and navy bezels, rounded corners (`rounded-2xl` to `rounded-3xl`), and an interactive glassmorphic overlay.
- On mobile viewports, the player scales fluidly with reserved aspect ratios (`aspect-[9/16]`), preventing Cumulative Layout Shift (CLS).

### 2. On-Demand Loading & Core Web Vitals
Loading 243 MB of video files simultaneously on initial page load would severely degrade mobile bandwidth, Time to First Byte (TTFB), and Largest Contentful Paint (LCP).
- **Zero Initial Preload:** All `<video>` elements specify `preload="none"`.
- **Poster Image Facade:** Each video container displays an optimized high-resolution poster frame extracted directly from the video copy.
- **Click-to-Play Interaction:** The heavy MP4 video stream begins buffering **only** when the user taps or clicks the Play button.
- **Video Modal Player:** Users can expand any video into a cinematic modal overlay with full playback controls, time scrubber, volume/mute toggles, and fullscreen support.

### 3. Accessibility & Controls
- **WCAG 2.2 Compliance:**
  - Standard HTML5 native controls are supported.
  - Video play/pause buttons are accessible via keyboard (`Tab` + `Enter`/`Space`) with visible focus outlines and descriptive `aria-label` tags.
  - **No Autoplay with Sound:** Strict browser policy compliance—videos never autoplay with unmuted audio.
  - Respects `prefers-reduced-motion` media query.
- **Captions & Transcripts Status:**
  - None of the raw video files contained embedded subtitle tracks or external `.vtt` caption files.
  - An accessible `<track kind="captions" srclang="en" label="English">` element is pre-wired into the video player component with placeholder handling.
  - **Status:** *Captions Pending* (Awaiting official transcript deposits from the media team).

### 4. Git LFS & CDN Hosting Recommendation
The total size of the 4 video assets is **243.51 MB**.
- For local development and demonstration, video files are served directly from `/public/videos/`.
- For high-scale production deployments on platforms like Vercel, Netlify, or AWS Amplify (which enforce Git repository size limits and bandwidth egress limits):
  - **Recommendation:** Host video copies on Cloudflare Stream, AWS CloudFront, or Vimeo OTT, and store the stream URL in `NEXT_PUBLIC_VIDEO_CDN_URL`.
  - In Git, track `.mp4` files using **Git LFS** (`git lfs track "*.mp4"`).
