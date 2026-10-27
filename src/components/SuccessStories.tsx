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
              className="bg-white/15 backdrop-blur-md rounded-[28px] p-7 sm:p-8 border-2 border-white/30 shadow-xl hover:bg-white/20 transition-all flex flex-col sm:flex-row items-center gap-6"
            >
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-[20px] overflow-hidden border-2 border-white/70 flex-shrink-0 shadow-lg bg-white/20">
                <Image
                  src={story.image}
                  alt={story.imageAlt}
                  fill
                  sizes="128px"
                  className="object-cover object-center"
                />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <span className="inline-block bg-[#FFC73B] text-[#3B3B3D] text-[11px] font-black uppercase px-3.5 py-1 rounded-full mb-2.5 shadow-sm">
                  {story.tag}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white font-[var(--font-ubuntu)] leading-tight mb-1">
                  {story.achievement}
                </h3>
                <p className="text-xs text-white/80 font-bold mb-2.5">
                  {story.program}
                </p>
                <p className="text-sm text-white/95 italic leading-relaxed">
                  &ldquo;{story.quote}&rdquo;
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Carousel / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((item, idx) => {
            const cardAccents = [
              {
                borderColor: "border-[#4F67FF]",
                tagBg: "bg-[#4F67FF]/10 text-[#4F67FF]",
                courseColor: "text-[#4F67FF]",
                quoteColor: "text-[#4F67FF]",
              },
              {
                borderColor: "border-[#00CDC4]",
                tagBg: "bg-[#00CDC4]/15 text-[#008982]",
                courseColor: "text-[#008982]",
                quoteColor: "text-[#00CDC4]",
              },
              {
                borderColor: "border-[#FFC73B]",
                tagBg: "bg-[#FFC73B]/20 text-[#B87C00]",
                courseColor: "text-[#B87C00]",
                quoteColor: "text-[#FFC73B]",
              },
            ];
            const acc = cardAccents[idx % cardAccents.length];

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="bg-white text-[#3B3B3D] rounded-[28px] p-7 sm:p-8 shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Header: Avatar & Info */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className={`relative w-14 h-14 rounded-full overflow-hidden border-2 ${acc.borderColor} shadow-sm bg-gray-100 flex-shrink-0`}>
                      <Image
                        src={item.avatar}
                        alt={item.name}
                        fill
                        sizes="56px"
                        className="object-cover object-top"
                      />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-lg text-[#3B3B3D] leading-tight font-[var(--font-ubuntu)]">
                        {item.name}
                      </h3>
                      <p className="text-xs font-semibold text-[#54595F]">
                        {item.role}
                      </p>
                      <p className={`text-[11px] font-bold ${acc.courseColor}`}>
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
                <div className="pt-4 border-t border-[#E2E9EB] flex items-center justify-between text-[11px] text-[#54595F]">
                  <span className="font-semibold text-[#3B3B3D]">Focus: {item.theme}</span>
                  <span className={`text-[10px] uppercase font-bold px-2.5 py-1 rounded-full ${acc.tagBg}`}>
                    Verified Student
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
