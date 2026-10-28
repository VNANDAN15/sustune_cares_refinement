import type { Metadata } from "next";
import { SparshClient } from "./SparshClient";

export const metadata: Metadata = {
  title: "Sparsh Family Care | Compassionate Elder & Family Support",
  description:
    "Dedicated proxy family care, doctor escorts, medical logs, and emergency response protocols for aging parents in Hyderabad & Bengaluru.",
};

export default function SparshPage() {
  return <SparshClient />;
}
