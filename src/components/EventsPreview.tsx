"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { siteContent } from "@/data/content";

export function EventsPreview() {
  const { events } = siteContent;

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
              public seminars, explore life at Educatee.
            </p>
          </div>

          <Link
            href="/events"
            className="inline-flex items-center gap-2 self-start md:self-auto bg-[#4F67FF] hover:bg-[#3850EB] text-white font-bold text-sm px-6 py-3 rounded-full transition-all duration-200 shadow-md hover:scale-[1.02]"
          >
            <span>Explore All Events &amp; Gallery</span>
            <span>→</span>
          </Link>
        </div>

        {/* Events Grid (4 items) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {events.map((ev, idx) => (
            <motion.article
              key={ev.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden border border-[#E2E9EB] padora-card-shadow padora-card-hover flex flex-col justify-between group"
            >
              {/* Event Image */}
              <div className="relative w-full h-48 bg-gray-100 overflow-hidden">
                <Image
                  src={ev.image}
                  alt={ev.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                {ev.badge && (
                  <span className="absolute top-3 left-3 bg-[#4F67FF] text-white text-[11px] font-black px-3 py-0.5 rounded-full shadow-md">
                    {ev.badge}
                  </span>
                )}
              </div>

              {/* Event Content */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold text-[#F73775] uppercase tracking-wider block mb-1">
                    {ev.dateDisplay}
                  </span>
                  <h3 className="text-lg font-bold text-[#3B3B3D] mb-2 leading-snug group-hover:text-[#4F67FF] transition-colors font-[var(--font-nunito)]">
                    {ev.title}
                  </h3>
                  <p className="text-xs text-[#54595F] leading-relaxed line-clamp-3 mb-4">
                    {ev.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E2E9EB] flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#4F67FF] group-hover:underline">
                    View Photos →
                  </span>
                  <span className="text-xs text-[#54595F]">
                    {ev.category}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
