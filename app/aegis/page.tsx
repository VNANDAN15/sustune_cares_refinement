import type { Metadata } from "next";
import { AegisClient } from "./AegisClient";

export const metadata: Metadata = {
  title: "Aegis Property Stewardship | NRI Real Estate Guardianship",
  description:
    "Institutional real estate stewardship for global Indian property owners. Tenant screening, vacant asset guardianship, and FEMA-guided rental remittances in Hyderabad & Bengaluru.",
};

export default function AegisPage() {
  return <AegisClient />;
}
