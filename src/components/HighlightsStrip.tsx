"use client";

import React from "react";
import { motion } from "framer-motion";
import { siteContent } from "@/data/content";

export function HighlightsStrip() {
  const { highlights } = siteContent;

  const getIcon = (name: string) => {
    switch (name) {
      case "calendar":
        return (
          <svg className="w-6 h-6 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
        );
      case "award":
        return (
          <svg className="w-6 h-6 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
            <circle cx="12" cy="8" r="7" />
            <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
          </svg>
        );
      case "users":
        return (
          <svg className="w-6 h-6 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 00-3-3.87" />
            <path d="M16 3.13a4 4 0 010 7.75" />
          </svg>
        );
      case "sparkles":
      default:
        return (
          <svg className="w-6 h-6 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        );
    }
  };

  return (
    <section className="relative -mt-8 sm:-mt-12 z-20 max-w-[1240px] mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-[#FFC73B] text-[#3B3B3D] rounded-[28px] p-6 sm:p-8 md:p-10 shadow-xl"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 items-center divide-y-2 md:divide-y-0 md:divide-x-2 divide-black/10">
          {highlights.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col items-center text-center ${
                index > 0 ? "pt-5 md:pt-0 md:pl-6" : ""
              }`}
            >
              <div className="w-12 h-12 rounded-2xl bg-white/70 text-[#3B3B3D] flex items-center justify-center mb-3 shadow-sm">
                {getIcon(item.iconName)}
              </div>
              <h3 className="font-extrabold text-lg sm:text-xl lg:text-2xl text-[#1E2532] font-[var(--font-ubuntu)]">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-black/75 mt-1">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
