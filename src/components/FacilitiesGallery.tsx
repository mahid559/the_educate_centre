import React from "react";
import Link from "next/link";
import { ArrowRight, Check, Mic, Monitor, Sparkles } from "lucide-react";
import { siteContent } from "@/data/content";

export function FacilitiesGallery() {
  const { facilities } = siteContent;

  const cardConfigs = [
    {
      id: "spoken-classroom",
      cardBg: "bg-[#4F67FF] text-white",
      badgeBg: "bg-white text-[#4F67FF]",
      statBg: "bg-white/20 text-white border-white/25",
      statText: "Max 16 / Batch",
      titleColor: "text-white",
      descColor: "text-white/90",
      chipBg: "bg-white/15 text-white border-white/20",
      checkColor: "text-white",
      buttonBg: "bg-white text-[#3B3B3D] hover:bg-white/95",
      dividerColor: "border-white/20",
      badgeText: "Spoken Studio",
      actionLink: "/programs",
      actionText: "Explore Spoken Courses",
      icon: <Mic className="w-7 h-7 sm:w-8 sm:h-8 text-white" strokeWidth={2.2} />,
      iconBoxBg: "bg-white/20 border border-white/30 shadow-inner",
      watermark: (
        <svg className="w-40 h-40 opacity-10 text-white" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5">
          <circle cx="50" cy="50" r="42" strokeDasharray="5 5" />
          <circle cx="50" cy="50" r="28" />
          <circle cx="50" cy="50" r="14" />
        </svg>
      ),
    },
    {
      id: "computer-lab",
      cardBg: "bg-[#00CDC4] text-white",
      badgeBg: "bg-white text-[#008982]",
      statBg: "bg-white/20 text-white border-white/25",
      statText: "1 Student : 1 PC",
      titleColor: "text-white",
      descColor: "text-white/90",
      chipBg: "bg-white/15 text-white border-white/20",
      checkColor: "text-white",
      buttonBg: "bg-white text-[#3B3B3D] hover:bg-white/95",
      dividerColor: "border-white/20",
      badgeText: "IT Training Lab",
      actionLink: "/programs",
      actionText: "Explore IT Programs",
      icon: <Monitor className="w-7 h-7 sm:w-8 sm:h-8 text-white" strokeWidth={2.2} />,
      iconBoxBg: "bg-white/20 border border-white/30 shadow-inner",
      watermark: (
        <svg className="w-40 h-40 opacity-10 text-white" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5">
          <rect x="15" y="15" width="70" height="50" rx="8" />
          <line x1="30" y1="80" x2="70" y2="80" />
          <line x1="50" y1="65" x2="50" y2="80" />
        </svg>
      ),
    },
    {
      id: "quiet-environment",
      cardBg: "bg-[#FFC73B] text-[#3B3B3D]",
      badgeBg: "bg-[#3B3B3D] text-[#FFC73B]",
      statBg: "bg-black/10 text-[#3B3B3D] border-black/15",
      statText: "5th Floor Focus",
      titleColor: "text-[#3B3B3D]",
      descColor: "text-[#3B3B3D]/90",
      chipBg: "bg-black/10 text-[#3B3B3D] border-black/10",
      checkColor: "text-[#3B3B3D]",
      buttonBg: "bg-[#3B3B3D] text-white hover:bg-[#222428]",
      dividerColor: "border-black/15",
      badgeText: "Campus Focus",
      actionLink: "/contact",
      actionText: "Visit Campus on 5th Floor",
      icon: <Sparkles className="w-7 h-7 sm:w-8 sm:h-8 text-[#3B3B3D]" strokeWidth={2.2} />,
      iconBoxBg: "bg-black/10 border border-black/15 shadow-inner",
      watermark: (
        <svg className="w-40 h-40 opacity-10 text-[#3B3B3D]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polygon points="50,15 62,38 88,42 69,60 74,85 50,72 26,85 31,60 12,42 38,38" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F8FAFC] relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <span className="text-[#ED1C24] text-xs sm:text-sm font-extrabold uppercase tracking-widest block mb-2 font-[var(--font-nunito)]">
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

        {/* 3 Creative Feature Showcase Cards (Image-free, modern, balanced) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {facilities.map((fac, idx) => {
            const config = cardConfigs[idx % cardConfigs.length];

            return (
              <article
                key={fac.id}
                className={`relative flex flex-col justify-between ${config.cardBg} rounded-[28px] p-6 sm:p-8 shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden group`}
              >
                {/* Background Watermark Illustration */}
                <div className="absolute -bottom-6 -right-6 pointer-events-none group-hover:scale-110 transition-transform duration-500 ease-out">
                  {config.watermark}
                </div>

                <div className="relative z-10 flex-1 flex flex-col">
                  {/* Top Bar: Icon Badge & Stat Pill */}
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl ${config.iconBoxBg} flex items-center justify-center transition-transform duration-300 group-hover:scale-105`}>
                      {config.icon}
                    </div>

                    <div className="flex flex-col items-end gap-1.5">
                      <span className={`text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-sm ${config.badgeBg}`}>
                        {config.badgeText}
                      </span>
                      <span className={`text-[10.5px] font-bold px-2.5 py-0.5 rounded-full border ${config.statBg}`}>
                        {config.statText}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className={`text-xl sm:text-2xl font-extrabold ${config.titleColor} mb-3 font-[var(--font-ubuntu)] leading-tight`}>
                    {fac.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-xs sm:text-sm ${config.descColor} leading-relaxed mb-6 font-normal`}>
                    {fac.description}
                  </p>

                  {/* Features Checklist */}
                  <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                    {fac.features.map((item, i) => (
                      <li
                        key={i}
                        className={`text-xs font-semibold px-3 py-2 rounded-xl flex items-start gap-2.5 border ${config.chipBg} leading-snug`}
                      >
                        <Check
                          className={`w-3.5 h-3.5 ${config.checkColor} flex-shrink-0 mt-0.5`}
                          strokeWidth={3}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Footer: Action Button */}
                <div className={`pt-5 border-t ${config.dividerColor} relative z-10 mt-auto`}>
                  <Link
                    href={config.actionLink}
                    className={`inline-flex items-center justify-center gap-2 w-full ${config.buttonBg} font-extrabold text-xs sm:text-sm py-3.5 px-6 rounded-xl transition-all duration-200 shadow-md hover:scale-[1.02] active:scale-[0.98] group/btn`}
                  >
                    <span>{config.actionText}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
