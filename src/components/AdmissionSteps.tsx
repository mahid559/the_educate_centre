"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { siteContent } from "@/data/content";

export function AdmissionSteps() {
  const { admissionSteps } = siteContent;

  const stepColors = [
    { bg: "bg-[#4F67FF]", text: "text-white" },
    { bg: "bg-[#00CDC4]", text: "text-white" },
    { bg: "bg-[#FFC73B]", text: "text-[#3B3B3D]" },
    { bg: "bg-[#F73775]", text: "text-white" },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F8FAFC] relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#F73775] text-xs sm:text-sm font-extrabold uppercase tracking-widest block mb-2">
            SIMPLE 4-STEP PROCESS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#3B3B3D] tracking-tight mb-4 font-[var(--font-ubuntu)]">
            How Admission Works
          </h2>
          <p className="text-base sm:text-lg text-[#54595F]">
            We invite you to experience our classroom culture before paying any fees.
            Zero pressure, complete transparency.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {admissionSteps.map((step, idx) => {
            const color = stepColors[idx % stepColors.length];

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-7 sm:p-8 padora-card-shadow padora-card-hover border border-[#E2E9EB] flex flex-col items-start relative z-10"
              >
                {/* Step Number Badge */}
                <div
                  className={`w-14 h-14 rounded-2xl ${color.bg} ${color.text} font-black text-xl flex items-center justify-center mb-6 shadow-md font-[var(--font-nunito)]`}
                >
                  {step.number}
                </div>

                <h3 className="text-xl font-bold text-[#3B3B3D] mb-3 font-[var(--font-nunito)]">
                  {step.title}
                </h3>

                <p className="text-sm text-[#54595F] leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Box */}
        <div className="mt-14 text-center">
          <Link
            href="#free-demo"
            className="inline-flex items-center justify-center bg-[#4F67FF] hover:bg-[#3850EB] text-white font-extrabold text-sm sm:text-base px-8 py-3.5 rounded-full transition-all duration-200 shadow-md hover:scale-[1.02]"
          >
            Start with Step 1: Book Free Demo Now →
          </Link>
        </div>
      </div>
    </section>
  );
}
