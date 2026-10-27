"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Testimonial } from "@/data/content";

export function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "EC";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export function FacebookBadge({ label = "Recommends" }: { label?: string }) {
  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#1877F2]/10 text-[#1877F2] text-[10px] font-semibold tracking-wide flex-shrink-0">
      <svg
        className="w-3 h-3 fill-current flex-shrink-0"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
      <span>{label}</span>
    </span>
  );
}

export const cardAccents = [
  {
    avatarGradient: "from-[#4F67FF] to-[#7B8FFF]",
    quoteColor: "text-[#4F67FF]",
    hoverBorder: "hover:border-[#4F67FF]/40",
    hoverGlow: "hover:shadow-[0_12px_28px_-6px_rgba(79,103,255,0.14)]",
  },
  {
    avatarGradient: "from-[#00CDC4] to-[#04B9B1]",
    quoteColor: "text-[#00CDC4]",
    hoverBorder: "hover:border-[#00CDC4]/40",
    hoverGlow: "hover:shadow-[0_12px_28px_-6px_rgba(0,205,196,0.14)]",
  },
  {
    avatarGradient: "from-[#F73775] to-[#FF6B9B]",
    quoteColor: "text-[#F73775]",
    hoverBorder: "hover:border-[#F73775]/40",
    hoverGlow: "hover:shadow-[0_12px_28px_-6px_rgba(247,55,117,0.14)]",
  },
  {
    avatarGradient: "from-[#FFB703] to-[#FFC73B]",
    quoteColor: "text-[#D98A00]",
    hoverBorder: "hover:border-[#FFC73B]/50",
    hoverGlow: "hover:shadow-[0_12px_28px_-6px_rgba(255,199,59,0.16)]",
  },
];

interface TestimonialCardProps {
  item: Testimonial;
  index?: number;
  animate?: boolean;
  className?: string;
}

export function TestimonialCard({
  item,
  index = 0,
  animate = false,
  className = "",
}: TestimonialCardProps) {
  const acc = cardAccents[index % cardAccents.length];
  const initials = getInitials(item.name);

  const cardContent = (
    <div
      className={`bg-white text-[#3B3B3D] rounded-[22px] border border-[#E8ECEF] ${acc.hoverBorder} ${acc.hoverGlow} p-5 shadow-[0_4px_18px_-4px_rgba(0,0,0,0.06)] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between h-full select-none ${className}`}
    >
      <div>
        {/* Top: small quote icon + Facebook Recommends badge */}
        <div className="flex items-center justify-between mb-2.5">
          <Quote
            className={`w-4 h-4 ${acc.quoteColor} fill-current/15`}
            aria-hidden="true"
          />
          <FacebookBadge />
        </div>

        {/* Review text: uniform line-clamp for consistent card height */}
        <p className="text-[13px] sm:text-[13.5px] text-[#2D3139] leading-relaxed font-normal line-clamp-3">
          &ldquo;{item.text}&rdquo;
        </p>
      </div>

      {/* Bottom: initials avatar, full name in semibold, date in muted text */}
      <div className="pt-3 border-t border-[#F0F2F5] flex items-center gap-3">
        <div
          className={`w-8 h-8 rounded-full bg-gradient-to-br ${acc.avatarGradient} flex items-center justify-center text-white font-bold text-xs tracking-wide shadow-sm flex-shrink-0`}
          aria-hidden="true"
        >
          {initials}
        </div>
        <div className="min-w-0">
          <h4 className="font-semibold text-xs sm:text-[13px] text-[#1F242E] truncate font-[var(--font-ubuntu)]">
            {item.name}
          </h4>
          <p className="text-[10.5px] text-[#828894] font-normal leading-tight">
            {item.date}
          </p>
        </div>
      </div>
    </div>
  );

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.45,
          delay: index * 0.1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="h-full"
      >
        {cardContent}
      </motion.div>
    );
  }

  return cardContent;
}
