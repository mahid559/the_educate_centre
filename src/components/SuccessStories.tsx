"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { siteContent } from "@/data/content";

export function SuccessStories() {
  const { testimonials, successStories } = siteContent;

  return (
    <section className="py-20 md:py-28 bg-[#F73775] text-white relative overflow-hidden">
      {/* Decorative Padora geometric shapes (squares/triangles in faint translucent white) */}
      <div className="absolute inset-0 pointer-events-none opacity-10 overflow-hidden" aria-hidden="true">
        <div className="absolute top-10 left-12 w-24 h-24 border-4 border-white rotate-12" />
        <div className="absolute bottom-16 right-20 w-32 h-32 border-4 border-white -rotate-12" />
        <div className="absolute top-1/2 left-1/3 w-16 h-16 border-4 border-white rotate-45" />
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-white/80 text-xs sm:text-sm font-extrabold uppercase tracking-widest block mb-2">
            STUDENT SUCCESS &amp; TESTIMONIALS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 font-[var(--font-ubuntu)]">
            Real Transformations, Fearless Voices
          </h2>
          <p className="text-base sm:text-lg text-white/90">
            Hear from students who conquered speaking hesitation and reached their
            academic goals at The Educatee Centre.
          </p>
        </div>

        {/* IELTS & CEO Award Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {successStories.map((story) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/20 flex flex-col sm:flex-row items-center gap-6"
            >
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-white/50 flex-shrink-0 shadow-lg bg-white/20">
                <Image
                  src={story.image}
                  alt={story.imageAlt}
                  fill
                  sizes="128px"
                  className="object-cover object-center"
                />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <span className="inline-block bg-[#FFC73B] text-[#3B3B3D] text-[11px] font-black uppercase px-3 py-0.5 rounded-full mb-2">
                  {story.tag}
                </span>
                <h3 className="text-xl font-extrabold text-white font-[var(--font-nunito)]">
                  {story.achievement}
                </h3>
                <p className="text-xs text-white/80 font-bold mb-2">
                  {story.program}
                </p>
                <p className="text-sm text-white/90 italic leading-relaxed">
                  &ldquo;{story.quote}&rdquo;
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Carousel / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              className="bg-white text-[#3B3B3D] rounded-3xl p-7 sm:p-8 shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Header: Avatar & Info */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#F73775] shadow-sm bg-gray-100 flex-shrink-0">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      sizes="56px"
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-lg text-[#3B3B3D] leading-tight font-[var(--font-nunito)]">
                      {item.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#54595F]">
                      {item.role}
                    </p>
                    <p className="text-[11px] font-bold text-[#F73775]">
                      {item.course}
                    </p>
                  </div>
                </div>

                {/* Testimonial Quote */}
                <p className="text-sm text-[#54595F] leading-relaxed italic mb-4">
                  &ldquo;{item.text}&rdquo;
                </p>
              </div>

              {/* Bottom Theme Tag */}
              <div className="pt-3 border-t border-[#E2E9EB] flex items-center justify-between text-[11px] text-[#54595F]">
                <span className="font-medium">Theme: {item.theme}</span>
                <span className="text-[10px] uppercase font-bold text-[#F73775] bg-[#FDEBF1] px-2 py-0.5 rounded">
                  Sample Review
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
