"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { siteContent } from "@/data/content";

export function FacilitiesGallery() {
  const { facilities } = siteContent;

  return (
    <section className="py-20 md:py-28 bg-white relative">
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

        {/* Facilities Dual Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {facilities.map((fac, idx) => (
            <motion.div
              key={fac.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-[#EFF1FB]/60 rounded-3xl sm:rounded-[2.5rem] overflow-hidden border border-[#E2E9EB] padora-card-shadow flex flex-col justify-between"
            >
              {/* Image Frame */}
              <div className="relative w-full h-64 sm:h-80 bg-gray-100 overflow-hidden">
                <Image
                  src={fac.image}
                  alt={fac.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 580px"
                  className="object-cover object-center hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-[#4F67FF] font-extrabold text-xs px-3.5 py-1.5 rounded-full shadow-md">
                  {idx === 0 ? "🗣️ Language Studio" : "💻 IT Training Lab"}
                </span>
              </div>

              {/* Text & Feature Points */}
              <div className="p-7 sm:p-9 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-[#3B3B3D] mb-3 font-[var(--font-ubuntu)]">
                    {fac.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#54595F] leading-relaxed mb-6">
                    {fac.description}
                  </p>
                </div>

                {/* Features Checklist */}
                <div className="pt-4 border-t border-[#E2E9EB]">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {fac.features.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#3B3B3D]">
                        <span className="w-5 h-5 rounded-full bg-[#00CDC4] text-white flex items-center justify-center text-[10px] font-bold">
                          ✓
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
