import React from "react";

interface SectionHeadingProps {
  tag: string;
  tagColor?: "red" | "pink" | "blue" | "teal" | "yellow";
  title: string;
  subtext?: string;
  align?: "center" | "left";
  className?: string;
}

export function SectionHeading({
  tag,
  tagColor = "red",
  title,
  subtext,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  // All section subtitles across the website are standardized to signature brand red (#ED1C24)
  const getTagColor = () => "text-[#ED1C24]";

  const isCenter = align === "center";

  return (
    <div
      className={`mb-12 sm:mb-16 ${
        isCenter ? "text-center max-w-3xl mx-auto" : "text-left max-w-2xl"
      } ${className}`}
    >
      <span
        className={`text-xs sm:text-sm font-extrabold uppercase tracking-widest block mb-2 font-[var(--font-nunito)] ${getTagColor()}`}
      >
        {tag}
      </span>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#3B3B3D] tracking-tight mb-4 font-[var(--font-ubuntu)] leading-tight">
        {title}
      </h2>
      {subtext && (
        <p className="text-base sm:text-lg text-[#54595F] leading-relaxed">
          {subtext}
        </p>
      )}
    </div>
  );
}
