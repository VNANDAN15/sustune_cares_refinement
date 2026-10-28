import React from "react";
import { ImageIcon } from "lucide-react";

interface ImagePlaceholderProps {
  label: string;
  aspectRatio?: string;
  className?: string;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  label,
  aspectRatio = "16/9",
  className = "",
}) => {
  return (
    <div
      className={`relative bg-gradient-to-br from-brand-mist via-slate-100 to-sky-50 border-2 border-dashed border-slate-300 rounded-card flex flex-col items-center justify-center gap-3 ${className}`}
      style={{ aspectRatio }}
      role="img"
      aria-label={`Placeholder: ${label}`}
    >
      <ImageIcon className="w-10 h-10 text-slate-300" />
      <span className="text-xs text-slate-400 font-medium text-center px-4 max-w-[200px]">
        {label}
      </span>
      <span className="text-[10px] text-slate-300 font-medium">
        Image pending — see docs/content-review.md
      </span>
    </div>
  );
};
