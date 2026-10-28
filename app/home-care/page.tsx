import type { Metadata } from "next";
import { HomeCareClient } from "./HomeCareClient";

export const metadata: Metadata = {
  title: "Home & Personal Care | In-Home Supported Living & Recovery",
  description:
    "Tailored in-home care pathways: Domiciliary personal care, post-acute reablement, and complex live-in caregiving in Hyderabad & Bengaluru.",
};

export default function HomeCarePage() {
  return <HomeCareClient />;
}
