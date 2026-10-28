import type { Metadata } from "next";
import { HomePageClient } from "./HomePageClient";

export const metadata: Metadata = {
  title: "Sustune Care | Protected Care · Sustained Dignity",
  description:
    "Sustune Care provides institutional asset stewardship and compassionate family healthcare for global Indians. Explore Aegis Property Stewardship, Sparsh Family Care, and Home & Personal Care services.",
};

export default function HomePage() {
  return <HomePageClient />;
}
