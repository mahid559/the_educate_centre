"use client";

import React from "react";
import { motion } from "framer-motion";

interface FilterTabsProps {
  categories: string[];
  activeCategory: string;
  onChange: (category: string) => void;
  layoutId?: string;
}

export function FilterTabs({
  categories,
  activeCategory,
  onChange,
  layoutId = "activeFilterPill",
}: FilterTabsProps) {
  return (
    <div
      role="tablist"
      aria-label="Filter programs by category"
      className="inline-flex flex-wrap items-center justify-center gap-2 p-1.5 bg-[#EFF1FB] rounded-full border border-[#E2E9EB]"
    >
      {categories.map((category) => {
        const isActive = activeCategory === category;

        return (
          <button
            key={category}
            role="tab"
            aria-selected={isActive}
            type="button"
            onClick={() => onChange(category)}
            className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ED1C24] ${
              isActive ? "text-white" : "text-[#54595F] hover:text-[#3B3B3D]"
            }`}
          >
            {isActive && (
              <motion.div
                layoutId={layoutId}
                className="absolute inset-0 bg-[#ED1C24] rounded-full shadow-md shadow-red-500/25 z-0"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{category}</span>
          </button>
        );
      })}
    </div>
  );
}
