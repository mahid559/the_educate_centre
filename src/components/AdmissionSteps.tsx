import React from "react";
import Link from "next/link";
import { siteContent } from "@/data/content";

export function AdmissionSteps() {
  const { admissionSteps } = siteContent;

  const stepStyles = [
    {
      cardBg: "bg-[#4F67FF] text-white",
      badgeBg: "bg-white text-[#4F67FF]",
      titleColor: "text-white",
      descColor: "text-white/90",
    },
    {
      cardBg: "bg-[#00CDC4] text-white",
      badgeBg: "bg-white text-[#008982]",
      titleColor: "text-white",
      descColor: "text-white/90",
    },
    {
      cardBg: "bg-[#FFC73B] text-[#3B3B3D]",
      badgeBg: "bg-white text-[#B87C00]",
      titleColor: "text-[#3B3B3D]",
      descColor: "text-[#3B3B3D]/90",
    },
    {
      cardBg: "bg-[#F73775] text-white",
      badgeBg: "bg-white text-[#F73775]",
      titleColor: "text-white",
      descColor: "text-white/90",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#ED1C24] text-xs sm:text-sm font-extrabold uppercase tracking-widest block mb-2">
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
            const style = stepStyles[idx % stepStyles.length];

            return (
              <div
                key={step.number}
                className={`rounded-[28px] p-7 sm:p-8 ${style.cardBg} shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  {/* Step Number Badge */}
                  <div
                    className={`w-14 h-14 rounded-2xl ${style.badgeBg} font-black text-2xl flex items-center justify-center mb-6 shadow-md font-[var(--font-ubuntu)]`}
                  >
                    {step.number}
                  </div>

                  <h3 className={`text-xl sm:text-2xl font-extrabold mb-3 font-[var(--font-ubuntu)] leading-tight ${style.titleColor}`}>
                    {step.title}
                  </h3>

                  <p className={`text-sm ${style.descColor} leading-relaxed`}>
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/20 text-xs font-bold uppercase tracking-wider opacity-90">
                  Step 0{idx + 1}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Box */}
        <div className="mt-14 text-center">
          <Link
            href="#free-demo"
            className="inline-flex items-center justify-center bg-[#ED1C24] hover:bg-[#C81017] text-white font-extrabold text-sm sm:text-base px-8 py-4 rounded-full transition-all duration-200 shadow-xl shadow-red-500/25 hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98]"
          >
            Start with Step 1: Book Free Demo Now →
          </Link>
        </div>
      </div>
    </section>
  );
}
