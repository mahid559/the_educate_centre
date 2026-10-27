"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { siteContent } from "@/data/content";

export function AboutPreview() {
  const { aboutPreview } = siteContent;

  return (
    <section className="py-20 md:py-28 bg-[#EFF1FB]/60 relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Organic Blob Classroom Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            {/* Padora Blue Blob Backing Frame */}
            <div
              className="absolute -inset-3 sm:-inset-5 bg-[#4F67FF] rounded-[42%_58%_70%_30%_/_45%_45%_55%_55%] rotate-[-3deg] opacity-90 shadow-xl"
              aria-hidden="true"
            />

            {/* Decorative Corner Accent Circle */}
            <div
              className="absolute -top-3 -right-3 w-12 h-12 rounded-full border-4 border-white bg-[#FFC73B] shadow-md z-20"
              aria-hidden="true"
            />

            {/* Photo Container */}
            <div className="relative w-[280px] h-[340px] sm:w-[360px] sm:h-[420px] rounded-[40%_60%_65%_35%_/_42%_42%_58%_58%] overflow-hidden border-4 border-white shadow-xl z-10 bg-white">
              <Image
                src={aboutPreview.image}
                alt={aboutPreview.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 420px"
                className="object-cover object-center transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>

          {/* Right Column: Story & Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Tag */}
            <span className="text-[#F73775] text-xs sm:text-sm font-extrabold uppercase tracking-widest mb-3">
              {aboutPreview.tag}
            </span>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#3B3B3D] tracking-tight mb-5 leading-tight font-[var(--font-ubuntu)]">
              {aboutPreview.title}
            </h2>

            {/* Lead Paragraph */}
            <p className="text-base sm:text-lg text-[#54595F] leading-relaxed mb-6 font-normal">
              {aboutPreview.lead}
            </p>

            {/* Bullet Checklist with Padora Blue Checkmarks */}
            <ul className="flex flex-col gap-3.5 mb-8 w-full">
              {aboutPreview.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#4F67FF] text-white flex items-center justify-center mt-0.5 shadow-sm">
                    <svg className="w-3.5 h-3.5 fill-none stroke-white stroke-[2.5]" viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-[#3B3B3D]">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <Link
              href={aboutPreview.ctaLink}
              className="inline-flex items-center justify-center bg-[#00CDC4] hover:bg-[#04B9B1] text-white font-extrabold text-sm sm:text-base px-8 py-3.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
            >
              {aboutPreview.ctaText} →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
