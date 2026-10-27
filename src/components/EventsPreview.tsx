"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { siteContent } from "@/data/content";
import { Lightbox } from "@/components/Lightbox";

export function EventsPreview() {
  const { events } = siteContent;
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const lightboxImages = events.map((ev) => ({
    src: ev.image,
    alt: ev.imageAlt,
    title: ev.title,
    caption: `${ev.badge ? `${ev.badge} • ` : ""}${ev.description}`,
  }));

  return (
    <section className="py-20 md:py-28 bg-[#EFF1FB]/50 relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-[#F73775] text-xs sm:text-sm font-extrabold uppercase tracking-widest block mb-2">
              CAMPUS LIFE &amp; CELEBRATIONS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#3B3B3D] tracking-tight font-[var(--font-ubuntu)]">
              Events &amp; Community Moments
            </h2>
            <p className="text-base sm:text-lg text-[#54595F] mt-2 max-w-xl">
              From graduation celebrations to the prestigious CEO Award and free
              public seminars, explore life inside The Educatee Centre.
            </p>
          </div>

          <Link
            href="/admissions"
            className="inline-flex items-center gap-2 self-start md:self-auto bg-[#00CDC4] hover:bg-[#04B9B1] text-white font-extrabold text-sm px-7 py-3.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Join Our Next Batch</span>
            <span>→</span>
          </Link>
        </div>

        {/* Events Grid (4 items - Styled to match Padora signature vibrant upper cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {events.map((ev, idx) => {
            const eventColors = [
              {
                cardBg: "bg-[#F73775]",
                titleColor: "text-white",
                subColor: "text-white/80",
                descColor: "text-white/90",
                badgeBg: "bg-white text-[#F73775]",
                buttonBg: "bg-white text-[#3B3B3D] hover:bg-white/90",
                dividerColor: "border-white/20",
              },
              {
                cardBg: "bg-[#00CDC4]",
                titleColor: "text-white",
                subColor: "text-white/80",
                descColor: "text-white/90",
                badgeBg: "bg-white text-[#008982]",
                buttonBg: "bg-white text-[#3B3B3D] hover:bg-white/90",
                dividerColor: "border-white/20",
              },
              {
                cardBg: "bg-[#FFC73B]",
                titleColor: "text-[#3B3B3D]",
                subColor: "text-[#3B3B3D]/80",
                descColor: "text-[#3B3B3D]/90",
                badgeBg: "bg-[#3B3B3D] text-[#FFC73B]",
                buttonBg: "bg-white text-[#3B3B3D] hover:bg-white/90",
                dividerColor: "border-black/10",
              },
              {
                cardBg: "bg-[#4F67FF]",
                titleColor: "text-white",
                subColor: "text-white/80",
                descColor: "text-white/90",
                badgeBg: "bg-white text-[#4F67FF]",
                buttonBg: "bg-white text-[#3B3B3D] hover:bg-white/90",
                dividerColor: "border-white/20",
              },
            ];

            const style = eventColors[idx % eventColors.length];

            return (
              <motion.article
                key={ev.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                onClick={() => setActiveImageIndex(idx)}
                className={`${style.cardBg} rounded-[28px] p-6 shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer`}
              >
                <div>
                  {/* Event Image in Inner Rounded Frame */}
                  <div className="relative w-full h-48 rounded-[20px] overflow-hidden bg-black/10 mb-5">
                    <Image
                      src={ev.image}
                      alt={ev.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    {ev.badge && (
                      <span className={`absolute top-3 left-3 text-[11px] font-black px-3 py-1 rounded-full shadow-md ${style.badgeBg}`}>
                        {ev.badge}
                      </span>
                    )}
                    <span className="absolute top-3 right-3 bg-black/40 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                      {ev.category}
                    </span>
                  </div>

                  {/* Event Content */}
                  <div>
                    <span className={`text-[11px] font-extrabold uppercase tracking-wider block mb-1.5 ${style.subColor}`}>
                      {ev.dateDisplay}
                    </span>
                    <h3 className={`text-lg sm:text-xl font-extrabold mb-2 leading-snug font-[var(--font-ubuntu)] ${style.titleColor}`}>
                      {ev.title}
                    </h3>
                    <p className={`text-xs ${style.descColor} leading-relaxed line-clamp-3 mb-5`}>
                      {ev.description}
                    </p>
                  </div>
                </div>

                {/* Card Footer with White Action Button */}
                <div className={`pt-4 border-t ${style.dividerColor} flex items-center justify-between`}>
                  <button
                    type="button"
                    className={`inline-flex items-center gap-1.5 ${style.buttonBg} font-extrabold text-xs px-4 py-2.5 rounded-xl transition-all duration-200 shadow-md group-hover:scale-105`}
                  >
                    <span>View Photo</span>
                    <span>⤢</span>
                  </button>
                  <span className={`text-[11px] font-bold ${style.subColor}`}>
                    Album
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && (
        <Lightbox
          images={lightboxImages}
          currentIndex={activeImageIndex}
          onClose={() => setActiveImageIndex(null)}
          onNavigate={(newIndex) => setActiveImageIndex(newIndex)}
        />
      )}
    </section>
  );
}
