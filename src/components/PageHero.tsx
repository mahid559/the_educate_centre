"use client";

import React from "react";
import { motion } from "framer-motion";
import { Breadcrumb, BreadcrumbItem } from "./Breadcrumb";
import { fadeInUp, defaultTransition } from "@/lib/motion";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  accentText?: string;
  subtext: string;
  breadcrumbs: BreadcrumbItem[];
  children?: React.ReactNode;
}

export function PageHero({
  eyebrow,
  title,
  accentText,
  subtext,
  breadcrumbs,
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#4F67FF] text-white pt-28 pb-14 sm:pt-32 md:pt-36 md:pb-20 lg:pt-40 lg:pb-24">
      {/* Background Decorative Curves (Matches Home Hero) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden"
        aria-hidden="true"
      >
        <svg
          className="absolute -top-32 -left-32 w-[500px] h-[500px]"
          viewBox="0 0 600 600"
          fill="none"
        >
          <path
            d="M100 200C180 80 320 120 400 240C480 360 420 500 300 520C180 540 80 440 60 340C40 240 20 320 100 200Z"
            stroke="white"
            strokeWidth="3"
            strokeDasharray="8 8"
          />
        </svg>
        <svg
          className="absolute -bottom-36 right-0 w-[550px] h-[550px]"
          viewBox="0 0 700 700"
          fill="none"
        >
          <path
            d="M150 350C100 200 250 100 450 150C650 200 680 400 580 550C480 700 280 650 200 550C120 450 200 500 150 350Z"
            stroke="white"
            strokeWidth="2.5"
          />
        </svg>
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={defaultTransition}
          className="max-w-3xl flex flex-col items-start"
        >
          {/* Breadcrumbs */}
          <Breadcrumb items={breadcrumbs} variant="light" />

          {/* Eyebrow Label */}
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/25 rounded-full px-4 py-1.5 mb-4 text-xs font-bold tracking-wide uppercase text-white shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#FFC73B] animate-pulse" />
            <span>{eyebrow}</span>
          </div>

          {/* Large Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.15] tracking-tight !text-white mb-4 font-[var(--font-nunito)]">
            <span className="text-white">{title} </span>
            {accentText && (
              <span className="text-[#FFC73B] underline decoration-wavy decoration-[#FFC73B]/60 underline-offset-8">
                {accentText}
              </span>
            )}
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-lg md:text-xl text-white/95 leading-relaxed font-normal">
            {subtext}
          </p>

          {/* Optional actions or pills */}
          {children && <div className="mt-6 w-full">{children}</div>}
        </motion.div>
      </div>
    </section>
  );
}
