export interface VideoConfig {
  id: string;
  title: string;
  badge: string;
  section: "hero" | "aegis" | "sparsh" | "story";
  webFilename: string;
  src: string;
  poster: string;
  durationFormatted: string;
  durationSeconds: number;
  aspectRatio: "9/16";
  dimensions: { width: number; height: number };
  audience: string;
  description: string;
  captionStatus: "Captions Pending";
  keyTakeaways: string[];
}

export const VIDEOS: Record<string, VideoConfig> = {
  launch: {
    id: "launch",
    title: "The Sustune Care Assurance",
    badge: "Official Brand Film",
    section: "hero",
    webFilename: "sustune-care-launch.mp4",
    src: "/videos/sustune-care-launch.mp4",
    poster: "/videos/posters/sustune-care-launch-poster.jpg",
    durationFormatted: "0:22",
    durationSeconds: 22,
    aspectRatio: "9/16",
    dimensions: { width: 2160, height: 3840 },
    audience: "Global NRI Diaspora & Families in India",
    description: "Witness the launch of Sustune Care: an ecosystem uniting institutional asset stewardship with compassionate bedside healthcare.",
    captionStatus: "Captions Pending",
    keyTakeaways: [
      "Heraldic seal symbolizing safety, shelter, vitality, and empathy",
      "Direct home visit delivery with verified Sustune staff",
      "Dignified living for elderly parents back home in India",
    ],
  },
  aegis: {
    id: "aegis",
    title: "Aegis Property Guardianship",
    badge: "Asset Stewardship Film",
    section: "aegis",
    webFilename: "aegis-property-stewardship.mp4",
    src: "/videos/aegis-property-stewardship.mp4",
    poster: "/videos/posters/aegis-property-stewardship-poster.jpg",
    durationFormatted: "0:38",
    durationSeconds: 38,
    aspectRatio: "9/16",
    dimensions: { width: 2160, height: 3840 },
    audience: "NRI Real Estate Owners (US, UK, UAE, AUS)",
    description: "Experience how Sustune Care protects vacant residential assets, screens tenants, and eliminates remote landlord friction with digital reporting.",
    captionStatus: "Captions Pending",
    keyTakeaways: [
      "Physical perimeter monitoring and regular ventilation",
      "FEMA-compliant rental collection and municipal tax handling",
      "Verified video inspection walkthroughs direct to your smartphone",
    ],
  },
  sparsh: {
    id: "sparsh",
    title: "Sparsh Parental & Family Care",
    badge: "Elder Care Coordination Film",
    section: "sparsh",
    webFilename: "sparsh-family-care.mp4",
    src: "/videos/sparsh-family-care.mp4",
    poster: "/videos/posters/sparsh-family-care-poster.jpg",
    durationFormatted: "0:46",
    durationSeconds: 46,
    aspectRatio: "9/16",
    dimensions: { width: 2160, height: 3840 },
    audience: "Sons & Daughters of Aging Parents in India",
    description: "Bridging the anxiety of distance: see our compassionate care companions supporting elderly parents with doctor visits, daily tasks, and genuine warmth.",
    captionStatus: "Captions Pending",
    keyTakeaways: [
      "Language-matched, background-checked care companions",
      "Hospital escort, doctor consultation notes, and pharmacy refills",
      "24/7 emergency response protocols for sudden hospitalizations",
    ],
  },
  intro: {
    id: "intro",
    title: "Our Unified Story & Ecosystem",
    badge: "Corporate Story Film",
    section: "story",
    webFilename: "sustune-care-introduction.mp4",
    src: "/videos/sustune-care-introduction.mp4",
    poster: "/videos/posters/sustune-care-introduction-poster.jpg",
    durationFormatted: "0:42",
    durationSeconds: 42,
    aspectRatio: "9/16",
    dimensions: { width: 2160, height: 3840 },
    audience: "Global Indian Diaspora & Community Stakeholders",
    description: "Discover how Sustune Care was conceived to solve the dual anxieties of global Indians—safeguarding generational wealth while elevating human dignity.",
    captionStatus: "Captions Pending",
    keyTakeaways: [
      "One unified parent organization with distinct dedicated service arms",
      "Operating hubs in Hyderabad and Bengaluru with executive SLA oversight",
      "Zero-waste, sustainable practices rooted in ethical governance",
    ],
  },
};
