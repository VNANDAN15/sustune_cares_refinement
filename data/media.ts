/**
 * Sustune Care — Media Manifest
 * Typed manifest for all images, videos, posters, and brand marks.
 * Enforces licence, status, aspect ratio, alt text, and caption tracking.
 */

export interface MediaItem {
  id: string;
  type: "image" | "video" | "brand-mark";
  path: string;
  alt: string;
  aspectRatio: string;
  width?: number;
  height?: number;
  poster?: string;
  captionStatus: "supplied" | "pending";
  licenceSource: string;
  placeholder: boolean;
  status: "verified" | "pending-approval";
}

export const MEDIA_MANIFEST: Record<string, MediaItem> = {
  // Brand Marks
  "logo-horizontal": {
    id: "logo-horizontal",
    type: "brand-mark",
    path: "/brand/sustune_logo_horizontal_lockup.svg",
    alt: "Sustune Care — Protected Care. Sustained Dignity.",
    aspectRatio: "220/48",
    captionStatus: "supplied",
    licenceSource: "Sustune Care Brand Guidelines & Stationery Suite Manual.pdf (Section 1.1)",
    placeholder: false,
    status: "verified",
  },
  "logo-vertical": {
    id: "logo-vertical",
    type: "brand-mark",
    path: "/brand/sustune_logo_vertical_lockup.svg",
    alt: "Sustune Care Vertical Lockup",
    aspectRatio: "1/1",
    captionStatus: "supplied",
    licenceSource: "Sustune Care Brand Guidelines & Stationery Suite Manual.pdf (Section 1.2)",
    placeholder: false,
    status: "verified",
  },
  "emblem-standalone": {
    id: "emblem-standalone",
    type: "brand-mark",
    path: "/brand/sustune_emblem_standalone.svg",
    alt: "Sustune Care Heraldic Emblem",
    aspectRatio: "1/1",
    captionStatus: "supplied",
    licenceSource: "Sustune Care Brand Guidelines & Stationery Suite Manual.pdf (Section 1.3)",
    placeholder: false,
    status: "verified",
  },
  favicon: {
    id: "favicon",
    type: "brand-mark",
    path: "/brand/sustune_icon_favicon.svg",
    alt: "Sustune Care Favicon Icon",
    aspectRatio: "1/1",
    captionStatus: "supplied",
    licenceSource: "Sustune Care Brand Guidelines & Stationery Suite Manual.pdf (Section 1.4)",
    placeholder: false,
    status: "verified",
  },

  // Editorial & Service Photography
  "hero-home": {
    id: "hero-home",
    type: "image",
    path: "/images/about-corporate-hero.jpg",
    alt: "Sustune Care Institutional Governance & Operations",
    aspectRatio: "16/9",
    captionStatus: "pending",
    licenceSource: "Approved project photography suite",
    placeholder: false,
    status: "verified",
  },
  "aegis-hero": {
    id: "aegis-hero",
    type: "image",
    path: "/images/aegis-property-stewardship-hero.jpg",
    alt: "Aegis Property Stewardship — Luxury Residential Assets in Hyderabad & Bengaluru",
    aspectRatio: "16/10",
    captionStatus: "pending",
    licenceSource: "Approved project photography suite",
    placeholder: false,
    status: "verified",
  },
  "sparsh-hero": {
    id: "sparsh-hero",
    type: "image",
    path: "/images/sparsh-family-care-hero.jpg",
    alt: "Sparsh Family Care — Compassionate Care Companion Supporting Senior Parents",
    aspectRatio: "16/10",
    captionStatus: "pending",
    licenceSource: "Approved project photography suite",
    placeholder: false,
    status: "verified",
  },
  "home-care-hero": {
    id: "home-care-hero",
    type: "image",
    path: "/images/home-care-hero.jpg",
    alt: "Home and Personal Care — In-Home Supported Living & Recovery",
    aspectRatio: "16/10",
    captionStatus: "pending",
    licenceSource: "Approved project photography suite",
    placeholder: false,
    status: "verified",
  },
  "about-hero": {
    id: "about-hero",
    type: "image",
    path: "/images/about-corporate-hero.jpg",
    alt: "Sustune Care Leadership & Executive Committee in Corporate Boardroom",
    aspectRatio: "16/10",
    captionStatus: "pending",
    licenceSource: "Approved project photography suite",
    placeholder: false,
    status: "verified",
  },

  // Videos
  "video-launch": {
    id: "video-launch",
    type: "video",
    path: "/videos/sustune-care-launch.mp4",
    poster: "/videos/posters/sustune-care-launch-poster.jpg",
    alt: "Official Sustune Care Launch Film",
    aspectRatio: "9/16",
    width: 2160,
    height: 3840,
    captionStatus: "pending",
    licenceSource: "Supplied master asset: sustune care launch video",
    placeholder: false,
    status: "verified",
  },
  "video-aegis": {
    id: "video-aegis",
    type: "video",
    path: "/videos/aegis-property-stewardship.mp4",
    poster: "/videos/posters/aegis-property-stewardship-poster.jpg",
    alt: "Aegis Property Stewardship Film",
    aspectRatio: "9/16",
    width: 2160,
    height: 3840,
    captionStatus: "pending",
    licenceSource: "Supplied master asset: AEGIS Vid001 dt 14th Oct",
    placeholder: false,
    status: "verified",
  },
  "video-sparsh": {
    id: "video-sparsh",
    type: "video",
    path: "/videos/sparsh-family-care.mp4",
    poster: "/videos/posters/sparsh-family-care-poster.jpg",
    alt: "Sparsh Family Care Film",
    aspectRatio: "9/16",
    width: 2160,
    height: 3840,
    captionStatus: "pending",
    licenceSource: "Supplied master asset: sparsh updated video1",
    placeholder: false,
    status: "verified",
  },
  "video-intro": {
    id: "video-intro",
    type: "video",
    path: "/videos/sustune-care-introduction.mp4",
    poster: "/videos/posters/sustune-care-introduction-poster.jpg",
    alt: "Sustune Care Corporate Introduction Film",
    aspectRatio: "9/16",
    width: 2160,
    height: 3840,
    captionStatus: "pending",
    licenceSource: "Supplied master asset: SCIntro Introduction Video",
    placeholder: false,
    status: "verified",
  },
};
