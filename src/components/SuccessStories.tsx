"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion, type Variants } from "framer-motion";
import {
  Quote,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";
import { siteContent, testimonials, Testimonial } from "@/data/content";
import {
  getInitials,
  cardAccents,
} from "@/components/TestimonialCard";

function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export function SuccessStories() {
  const { successStories } = siteContent;
  const shouldReduceMotion = useReducedMotion();

  // All 10 real Facebook recommendations in the carousel
  const featuredReviews: Testimonial[] = testimonials;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotate featured testimonial every 6 seconds, pauses on hover
  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % featuredReviews.length);
  }, [featuredReviews.length]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + featuredReviews.length) % featuredReviews.length
    );
  }, [featuredReviews.length]);

  const goToSlide = (idx: number) => {
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  useEffect(() => {
    if (isPaused || shouldReduceMotion) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide, shouldReduceMotion]);

  const activeReview = featuredReviews[currentIndex] || featuredReviews[0];
  const activeInitials = getInitials(activeReview.name);
  const activeAccent = cardAccents[currentIndex % cardAccents.length];

  // Framer Motion variants for smooth crossfade & slight horizontal slide
  const slideVariants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 24 : -24,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring" as const, stiffness: 320, damping: 32 },
        opacity: { duration: 0.3 },
      },
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 24 : -24,
      opacity: 0,
      transition: {
        x: { type: "spring" as const, stiffness: 320, damping: 32 },
        opacity: { duration: 0.2 },
      },
    }),
  };

  return (
    <section className="py-20 md:py-28 bg-white text-[#3B3B3D] relative overflow-hidden border-t border-[#E2E9EB]">
      {/* Decorative Padora geometric shapes in subtle pastel tone */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute top-10 left-12 w-24 h-24 border-4 border-[#EFF1FB] rotate-12" />
        <div className="absolute bottom-16 right-20 w-32 h-32 border-4 border-[#EFF1FB] -rotate-12" />
        <div className="absolute top-1/2 left-1/3 w-16 h-16 border-4 border-[#EFF1FB] rotate-45" />
        <div className="absolute top-1/3 right-10 w-80 h-80 rounded-full bg-[#EFF1FB]/60 blur-3xl" />
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header - Clean and Elegant */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 bg-[#ED1C24]/10 border border-[#ED1C24]/20 rounded-full px-4 py-1.5 mb-3 text-xs font-bold tracking-wide uppercase text-[#ED1C24] shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ED1C24] animate-pulse" />
            <span>Student Voices</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#3B3B3D] tracking-tight mb-3 font-[var(--font-ubuntu)]">
            Loved by Students in Feni
          </h2>

          <p className="text-base sm:text-lg text-[#54595F] font-normal">
            Real recommendations from our students on Facebook.
          </p>
        </div>

        {/* HIGHLIGHT STRIP: 3 compact chips built strictly from reviews */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-10">
          <div className="inline-flex items-center bg-[#EFF1FB] border border-[#E2E9EB] text-[#3B3B3D] text-xs sm:text-sm font-semibold px-4 py-2 rounded-full shadow-sm">
            <span>Skilled &amp; passionate teachers</span>
          </div>
          <div className="inline-flex items-center bg-[#EFF1FB] border border-[#E2E9EB] text-[#3B3B3D] text-xs sm:text-sm font-semibold px-4 py-2 rounded-full shadow-sm">
            <span>Easy to learn, fun classes</span>
          </div>
          <div className="inline-flex items-center bg-[#EFF1FB] border border-[#E2E9EB] text-[#3B3B3D] text-xs sm:text-sm font-semibold px-4 py-2 rounded-full shadow-sm">
            <span>Care for every student</span>
          </div>
        </div>

        {/* FEATURED TESTIMONIAL CARD - The Centerpiece */}
        <div
          className="max-w-2xl sm:max-w-3xl mx-auto mb-8 relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="bg-[#F8FAFC] text-[#1F242E] rounded-[28px] sm:rounded-[36px] p-7 sm:p-10 md:p-12 shadow-[0_16px_50px_-12px_rgba(0,0,0,0.08)] border border-[#E2E9EB] relative overflow-hidden">
            {/* Background decorative quote watermark */}
            <div
              className="absolute -top-3 -right-3 text-[#EFF1FB] pointer-events-none select-none"
              aria-hidden="true"
            >
              <Quote className="w-32 h-32 rotate-180" />
            </div>

            {/* Top row: Quote icon + Facebook badge */}
            <div className="flex items-center justify-between mb-6 relative z-10">
              <div
                className="w-11 h-11 rounded-2xl bg-[#4F67FF]/10 text-[#4F67FF] flex items-center justify-center shadow-sm"
              >
                <Quote className="w-5 h-5 fill-current/20" />
              </div>

              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1877F2]/10 border border-[#1877F2]/20 text-[#1877F2] text-xs font-semibold">
                <FacebookIcon className="w-3.5 h-3.5" />
                <span>Recommends on Facebook</span>
              </div>
            </div>

            {/* Animated Quote Text & Author info */}
            <div className="min-h-[120px] sm:min-h-[110px] relative z-10">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeReview.id}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="flex flex-col justify-between"
                >
                  <blockquote className="font-serif text-base sm:text-xl md:text-[23px] text-[#1F242E] leading-relaxed tracking-tight italic mb-7">
                    &ldquo;{activeReview.text}&rdquo;
                  </blockquote>

                  {/* Reviewer Details */}
                  <div className="flex items-center gap-3.5 pt-4 border-t border-[#E2E9EB]">
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-br ${activeAccent.avatarGradient} flex items-center justify-center text-white font-bold text-sm tracking-wide shadow-md flex-shrink-0`}
                      aria-hidden="true"
                    >
                      {activeInitials}
                    </div>
                    <div>
                      <h3 className="font-bold text-base sm:text-lg text-[#1F242E] leading-tight font-[var(--font-ubuntu)]">
                        {activeReview.name}
                      </h3>
                      <p className="text-xs text-[#54595F] font-medium mt-0.5">
                        {activeReview.date}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Carousel Controls (10 Dots & Prev/Next Arrows) */}
            <div className="mt-8 pt-5 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10 border-t border-[#E2E9EB]">
              {/* Dots */}
              <div
                className="flex items-center gap-1.5 flex-wrap justify-center"
                role="tablist"
                aria-label="Recommendation slides"
              >
                {featuredReviews.map((item, idx) => {
                  const isActive = idx === currentIndex;
                  return (
                    <button
                      key={item.id}
                      onClick={() => goToSlide(idx)}
                      role="tab"
                      aria-selected={isActive}
                      aria-label={`Go to recommendation ${idx + 1}: ${item.name}`}
                      className={`h-2.5 rounded-full transition-all duration-300 focus-visible:outline-[#00CDC4] ${
                        isActive
                          ? "w-7 bg-[#00CDC4]"
                          : "w-2.5 bg-[#CBD5E1] hover:bg-[#94A3B8]"
                      }`}
                    />
                  );
                })}
              </div>

              {/* Prev / Next Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  aria-label="Previous recommendation"
                  className="w-10 h-10 rounded-full border border-[#CBD5E1] hover:border-[#00CDC4] hover:text-[#00CDC4] text-[#54595F] flex items-center justify-center transition-all duration-200 active:scale-95 bg-white shadow-sm"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextSlide}
                  aria-label="Next recommendation"
                  className="w-10 h-10 rounded-full border border-[#CBD5E1] hover:border-[#00CDC4] hover:text-[#00CDC4] text-[#54595F] flex items-center justify-center transition-all duration-200 active:scale-95 bg-white shadow-sm"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA BUTTON: Read more reviews on Facebook (Official Facebook Brand Blue #1877F2) */}
        <div className="text-center mt-6 mb-16">
          <a
            href="https://www.facebook.com/TheEducatee.edu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#1877F2] hover:bg-[#166FE5] text-white font-extrabold text-sm sm:text-base px-8 py-4 rounded-full shadow-lg shadow-blue-500/25 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group"
          >
            <FacebookIcon className="w-4 h-4 text-white" />
            <span>Read more reviews on Facebook</span>
            <ArrowUpRight className="w-4 h-4 text-white/80 group-hover:text-white transition-colors" />
          </a>
        </div>

        {/* IELTS RESULTS & CEO AWARD SECTION */}
        <div className="pt-12 border-t border-[#E2E9EB]">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-[#ED1C24] text-xs font-extrabold uppercase tracking-widest block mb-2">
              ACADEMIC EXCELLENCE &amp; HONORS
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#3B3B3D] tracking-tight font-[var(--font-ubuntu)]">
              Student Milestone Achievements
            </h3>
            <p className="text-sm text-[#54595F] mt-2">
              Celebrating dedicated students achieving target IELTS scores and prestigious leadership honors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {successStories.map((story, idx) => {
              const cardThemes = [
                {
                  cardBg: "bg-[#4F67FF] text-white",
                  tagBg: "bg-[#FFC73B] text-[#3B3B3D]",
                  titleColor: "text-white",
                  subColor: "text-white/80",
                  quoteColor: "text-white/95",
                  frameBorder: "border-white/40",
                },
                {
                  cardBg: "bg-[#00CDC4] text-white",
                  tagBg: "bg-white text-[#008982]",
                  titleColor: "text-white",
                  subColor: "text-white/80",
                  quoteColor: "text-white/95",
                  frameBorder: "border-white/40",
                },
              ];
              const theme = cardThemes[idx % cardThemes.length];

              return (
                <motion.div
                  key={story.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`${theme.cardBg} rounded-[28px] p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col sm:flex-row items-center gap-6`}
                >
                  <div className={`relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 ${theme.frameBorder} flex-shrink-0 shadow-lg bg-black/10`}>
                    <Image
                      src={story.image}
                      alt={story.imageAlt}
                      fill
                      sizes="112px"
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <span className={`inline-block ${theme.tagBg} text-[10.5px] font-black uppercase px-3 py-1 rounded-full mb-2.5 shadow-sm`}>
                      {story.tag}
                    </span>
                    <h4 className={`text-lg sm:text-xl font-extrabold ${theme.titleColor} font-[var(--font-ubuntu)] leading-tight mb-1`}>
                      {story.achievement}
                    </h4>
                    <p className={`text-xs ${theme.subColor} font-bold mb-2`}>
                      {story.program}
                    </p>
                    <p className={`text-xs sm:text-sm ${theme.quoteColor} italic leading-relaxed`}>
                      &ldquo;{story.quote}&rdquo;
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
