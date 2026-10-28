import type { Metadata } from "next";
import { AboutClient } from "./AboutClient";

export const metadata: Metadata = {
  title: "About Sustune Care | Corporate Story, Leadership & Brand Pillars",
  description:
    "Learn about Sustune Care Private Limited: Our founding leadership, heraldic four brand pillars, and integrated proxy service model for global Indians.",
};

export default function AboutPage() {
  return <AboutClient />;
}
