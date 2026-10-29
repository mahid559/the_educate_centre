"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { siteContent } from "@/data/content";
import { cardLiftProps } from "@/lib/motion";

export function FacilitiesGallery() {
  const { facilities } = siteContent;

  const facilityStyles = [
    {
      cardBg: "bg-[#4F67FF]",
      titleColor: "text-white",
      descColor: "text-white/90",
      badgeBg: "bg-white text-[#4F67FF]",
      buttonBg: "bg-white text-[#3B3B3D] hover:bg-white/90",
      chipBg: "bg-white/20 text-white border-white/20",
      checkColor: "text-white",
      dividerColor: "border-white/20",
      footerLabel: "text-white/70",
      footerValue: "text-white",
      badgeText: "Language Studio",
      actionLink: "/programs",
      actionText: "Explore Spoken Batches",
    },
    {
      cardBg: "bg-[#00CDC4]",
      titleColor: "text-white",
      descColor: "text-white/90",
      badgeBg: "bg-white text-[#008982]",
      buttonBg: "bg-white text-[#3B3B3D] hover:bg-white/90",
      chipBg: "bg-white/20 text-white border-white/20",
      checkColor: "text-white",
      dividerColor: "border-white/20",
      footerLabel: "text-white/70",
      footerValue: "text-white",
      badgeText: "IT Training Lab",
      actionLink: "/programs",
      actionText: "Explore IT Batches",
    },
    {
      cardBg: "bg-[#FFC73B]",
      titleColor: "text-[#3B3B3D]",
      descColor: "text-[#3B3B3D]/90",
      badgeBg: "bg-[#3B3B3D] text-[#FFC73B]",
      buttonBg: "bg-[#3B3B3D] text-white hover:bg-[#222428]",
      chipBg: "bg-black/10 text-[#3B3B3D] border-black/10",
      checkColor: "text-[#3B3B3D]",
      dividerColor: "border-black/10",
      footerLabel: "text-[#3B3B3D]/70",
      footerValue: "text-[#3B3B3D]",
      badgeText: "Campus Sanctuary",
      actionLink: "/contact",
      actionText: "Visit Campus on 5th Floor",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F8FAFC] relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#ED1C24] text-xs sm:text-sm font-extrabold uppercase tracking-widest block mb-2">
            CAMPUS INFRASTRUCTURE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#3B3B3D] tracking-tight mb-4 font-[var(--font-ubuntu)]">
            Focused, Quiet &amp; Modern Facilities
          </h2>
          <p className="text-base sm:text-lg text-[#54595F]">
            Designed exclusively for concentrated speaking practice and practical
            PC software training on the 5th floor of Appayan Afroz Tower.
          </p>
        </div>

        {/* Facilities Dual Showcase + Full-Width Horizontal 3rd Card in Padora Yellow */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {facilities.map((fac, idx) => {
            const style = facilityStyles[idx % facilityStyles.length];
            const isHorizontal = idx === 2; // 3rd item placed horizontally across both columns to eliminate empty space

            if (isHorizontal) {
              return (
                <motion.article
                  key={fac.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  {...cardLiftProps}
                  className={`lg:col-span-2 flex flex-col lg:flex-row ${style.cardBg} rounded-[28px] p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 gap-6 sm:gap-8 lg:gap-10 items-stretch group`}
                >
                  {/* Left Side: Wide Horizontal Image */}
                  <div className="relative w-full lg:w-5/12 h-64 sm:h-72 lg:h-auto min-h-[260px] sm:min-h-[280px] lg:min-h-[300px] rounded-[20px] overflow-hidden bg-black/10 flex-shrink-0">
                    <Image
                      src={fac.image}
                      alt={fac.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 520px"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <span
                      className={`absolute top-4 left-4 text-xs font-black px-4 py-1.5 rounded-full shadow-md ${style.badgeBg}`}
                    >
                      {style.badgeText}
                    </span>
                  </div>

                  {/* Right Side: Details & Actions */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3
                        className={`text-2xl sm:text-3xl font-extrabold ${style.titleColor} mb-3 font-[var(--font-ubuntu)] leading-tight`}
                      >
                        {fac.title}
                      </h3>
                      <p
                        className={`text-sm sm:text-base ${style.descColor} leading-relaxed mb-6 font-normal`}
                      >
                        {fac.description}
                      </p>

                      {/* Features Checklist Pills */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {fac.features.map((item, i) => (
                          <span
                            key={i}
                            className={`text-xs font-bold px-3 py-1.5 rounded-xl inline-flex items-center gap-1.5 border ${style.chipBg}`}
                          >
                            <Check
                              className={`w-3.5 h-3.5 ${style.checkColor}`}
                              strokeWidth={3}
                            />
                            <span>{item}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Footer Action Bar */}
                    <div
                      className={`pt-5 border-t ${style.dividerColor} flex items-center justify-end`}
                    >
                      <Link
                        href={style.actionLink}
                        className={`inline-flex items-center justify-center gap-2 ${style.buttonBg} font-extrabold text-xs sm:text-sm px-6 py-3 rounded-xl transition-all duration-200 shadow-md hover:scale-[1.02] active:scale-[0.98] group/btn`}
                      >
                        <span>{style.actionText}</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              );
            }

            return (
              <motion.article
                key={fac.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                {...cardLiftProps}
                className={`flex flex-col ${style.cardBg} rounded-[28px] p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 justify-between group`}
              >
                <div>
                  {/* Inner Rounded Image Container (Signature Padora Style) */}
                  <div className="relative w-full h-64 sm:h-72 rounded-[20px] overflow-hidden bg-black/10 mb-6">
                    <Image
                      src={fac.image}
                      alt={fac.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 580px"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    {/* Floating Category Badge */}
                    <span
                      className={`absolute top-4 left-4 text-xs font-black px-4 py-1.5 rounded-full shadow-md ${style.badgeBg}`}
                    >
                      {style.badgeText}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3
                      className={`text-2xl sm:text-3xl font-extrabold ${style.titleColor} mb-3 font-[var(--font-ubuntu)] leading-tight`}
                    >
                      {fac.title}
                    </h3>
                    <p
                      className={`text-sm sm:text-base ${style.descColor} leading-relaxed mb-6 font-normal`}
                    >
                      {fac.description}
                    </p>

                    {/* Features Checklist Pills */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {fac.features.map((item, i) => (
                        <span
                          key={i}
                          className={`text-xs font-bold px-3 py-1.5 rounded-xl inline-flex items-center gap-1.5 border ${style.chipBg}`}
                        >
                          <Check
                            className={`w-3.5 h-3.5 ${style.checkColor}`}
                            strokeWidth={3}
                          />
                          <span>{item}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer with Padora Action Button */}
                <div
                  className={`pt-5 border-t ${style.dividerColor} flex items-center justify-end`}
                >
                  <Link
                    href={style.actionLink}
                    className={`inline-flex items-center justify-center gap-2 ${style.buttonBg} font-extrabold text-xs sm:text-sm px-6 py-3 rounded-xl transition-all duration-200 shadow-md hover:scale-[1.02] active:scale-[0.98] group/btn w-full sm:w-auto`}
                  >
                    <span>{style.actionText}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5" />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
