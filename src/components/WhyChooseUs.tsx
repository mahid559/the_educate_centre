import React from "react";
import { siteContent, FeatureCard } from "@/data/content";

export function WhyChooseUs() {
  const { whyChooseUs } = siteContent;

  const getCardStyle = (accent: FeatureCard["accent"]) => {
    switch (accent) {
      case "pink":
        return {
          cardBg: "bg-[#F73775] text-white",
          iconBg: "bg-white text-[#F73775]",
          titleColor: "text-white",
          descColor: "text-white/90",
          pillBg: "bg-white/20 text-white border-white/20",
          dotColor: "bg-white",
          icon: (
            <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ),
        };
      case "teal":
        return {
          cardBg: "bg-[#00CDC4] text-white",
          iconBg: "bg-white text-[#008982]",
          titleColor: "text-white",
          descColor: "text-white/90",
          pillBg: "bg-white/20 text-white border-white/20",
          dotColor: "bg-white",
          icon: (
            <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          ),
        };
      case "yellow":
        return {
          cardBg: "bg-[#FFC73B] text-[#3B3B3D]",
          iconBg: "bg-white text-[#B87C00]",
          titleColor: "text-[#3B3B3D]",
          descColor: "text-[#3B3B3D]/90",
          pillBg: "bg-black/10 text-[#3B3B3D] border-black/10",
          dotColor: "bg-[#3B3B3D]",
          icon: (
            <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          ),
        };
      case "blue":
      default:
        return {
          cardBg: "bg-[#4F67FF] text-white",
          iconBg: "bg-white text-[#4F67FF]",
          titleColor: "text-white",
          descColor: "text-white/90",
          pillBg: "bg-white/20 text-white border-white/20",
          dotColor: "bg-white",
          icon: (
            <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          ),
        };
    }
  };

  return (
    <section className="py-20 md:py-28 bg-[#F8FAFC] relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#ED1C24] text-xs sm:text-sm font-extrabold uppercase tracking-widest block mb-2">
            THE EDUCATEE ADVANTAGE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#3B3B3D] tracking-tight mb-4 font-[var(--font-ubuntu)]">
            Why Students in Feni Choose Us
          </h2>
          <p className="text-base sm:text-lg text-[#54595F]">
            We replace traditional lecture-heavy cramming with lively discussions,
            practical software sessions, and a friendly community.
          </p>
        </div>

        {/* Feature Cards Grid (Compact & Refined) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {whyChooseUs.map((card, idx) => {
            const style = getCardStyle(card.accent);

            return (
              <div
                key={card.id}
                className={`rounded-2xl p-5 sm:p-6 ${style.cardBg} shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-start`}
              >
                {/* Icon Badge */}
                <div
                  className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl ${style.iconBg} flex items-center justify-center mb-4 shadow-xs`}
                >
                  {style.icon}
                </div>

                {/* Title */}
                <h3 className={`text-lg sm:text-xl font-extrabold mb-2 font-[var(--font-ubuntu)] leading-tight ${style.titleColor}`}>
                  {card.title}
                </h3>

                {/* Description */}
                <p className={`text-xs sm:text-sm ${style.descColor} leading-relaxed`}>
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
