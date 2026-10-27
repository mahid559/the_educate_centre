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
      dividerColor: "border-white/20",
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
      dividerColor: "border-white/20",
      badgeText: "IT Training Lab",
      actionLink: "/programs",
      actionText: "Explore IT Batches",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F8FAFC] relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#F73775] text-xs sm:text-sm font-extrabold uppercase tracking-widest block mb-2">
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

        {/* Facilities Dual Showcase (Padora Signature Card Style matching Upper Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {facilities.map((fac, idx) => {
            const style = facilityStyles[idx % facilityStyles.length];

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
                    <h3 className={`text-2xl sm:text-3xl font-extrabold ${style.titleColor} mb-3 font-[var(--font-ubuntu)] leading-tight`}>
                      {fac.title}
                    </h3>
                    <p className={`text-sm sm:text-base ${style.descColor} leading-relaxed mb-6 font-normal`}>
                      {fac.description}
                    </p>

                    {/* Features Checklist Pills */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {fac.features.map((item, i) => (
                        <span
                          key={i}
                          className={`text-xs font-bold px-3 py-1.5 rounded-xl inline-flex items-center gap-1.5 border ${style.chipBg}`}
                        >
                          <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                          <span>{item}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer with Padora White Action Button */}
                <div className={`pt-5 border-t ${style.dividerColor} flex items-center justify-between gap-3`}>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-white/70">
                      Campus Level
                    </span>
                    <span className="text-xs font-extrabold text-white">
                      5th Floor • Lift Access
                    </span>
                  </div>
                  <Link
                    href={style.actionLink}
                    className={`inline-flex items-center justify-center gap-2 ${style.buttonBg} font-extrabold text-xs sm:text-sm px-6 py-3 rounded-xl transition-all duration-200 shadow-md hover:scale-[1.02] active:scale-[0.98] group/btn`}
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
