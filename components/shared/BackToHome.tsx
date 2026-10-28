"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface BackToHomeProps {
  label?: string;
  parentHref?: string;
  parentLabel?: string;
}

export const BackToHome: React.FC<BackToHomeProps> = ({
  label = "Back to Home",
  parentHref = "/",
  parentLabel,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
      <Link
        href={parentHref}
        className="inline-flex items-center gap-2 text-sm font-semibold text-brand-cerulean hover:text-brand-marine transition-colors group"
      >
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
        <span>{parentLabel || label}</span>
      </Link>
    </div>
  );
};
