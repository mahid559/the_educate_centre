"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion, type Variants } from "framer-motion";
import {
  Quote,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  Sparkles,
  Heart,
  Smile,
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
    <section className="py-14 sm:py-16 md:py-20 bg-[#F73775] text-white relative overflow-hidden">
      {/* Decorative Padora geometric shapes */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute top-10 left-12 w-24 h-24 border-4 border-white rotate-12" />
        <div className="absolute bottom-16 right-20 w-32 h-32 border-4 border-white -rotate-12" />
        <div className="absolute top-1/2 left-1/3 w-16 h-16 border-4 border-white rotate-45" />
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header - Clean and Elegant */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/25 rounded-full px-3.5 py-1 mb-3 text-xs font-bold tracking-wide uppercase text-white shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFC73B] animate-pulse" />
            <span>Student Voices</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-2.5 font-[var(--font-ubuntu)]">
            <span>Loved by </span>
            <span className="text-[#FFC73B] underline decoration-wavy decoration-[#FFC73B] underline-offset-8">
              Students in Feni
            </span>
          </h2>

          <p className="text-sm sm:text-base text-white/90 font-normal">
            Real recommendations from our students on Facebook.
          </p>
        </div>

        {/* HIGHLIGHT STRIP: 3 compact chips built strictly from reviews */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-md border border-white/25 text-white text-xs sm:text-sm font-medium px-3.5 py-1.5 rounded-full shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#FFC73B]" />
            <span>Skilled &amp; passionate teachers</span>
          </div>
          <div className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-md border border-white/25 text-white text-xs sm:text-sm font-medium px-3.5 py-1.5 rounded-full shadow-sm">
            <Smile className="w-3.5 h-3.5 text-[#00CDC4]" />
            <span>Easy to learn, fun classes</span>
          </div>
          <div className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-md border border-white/25 text-white text-xs sm:text-sm font-medium px-3.5 py-1.5 rounded-full shadow-sm">
            <Heart className="w-3.5 h-3.5 text-[#FFC73B]" />
            <span>Care for every student</span>
          </div>
        </div>

        {/* FEATURED TESTIMONIAL CARD - The Centerpiece */}
        <div
          className="max-w-2xl sm:max-w-3xl mx-auto mb-8 relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="bg-white text-[#1F242E] rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 md:p-10 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.22)] border border-white/80 relative overflow-hidden">
            {/* Background decorative quote watermark */}
            <div
              className="absolute -top-3 -right-3 text-[#F2F5FA] pointer-events-none select-none"
              aria-hidden="true"
            >
              <Quote className="w-28 h-28 rotate-180" />
            </div>

            {/* Top row: Quote icon + Facebook badge */}
            <div className="flex items-center justify-between mb-5 relative z-10">
              <div
                className="w-10 h-10 rounded-2xl bg-[#F73775]/10 text-[#F73775] flex items-center justify-center shadow-sm"
              >
                <Quote className="w-4 h-4 fill-current/20" />
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1877F2]/10 text-[#1877F2] text-xs font-semibold">
                <FacebookIcon className="w-3.5 h-3.5" />
                <span>Recommends on Facebook</span>
              </div>
            </div>

            {/* Animated Quote Text & Author info */}
            <div className="min-h-[110px] sm:min-h-[100px] relative z-10">
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
                  <blockquote className="font-serif text-base sm:text-xl md:text-[22px] text-[#1E232E] leading-relaxed tracking-tight italic mb-6">
                    &ldquo;{activeReview.text}&rdquo;
                  </blockquote>

                  {/* Reviewer Details */}
                  <div className="flex items-center gap-3.5 pt-4 border-t border-[#F0F2F6]">
                    <div
                      className={`w-11 h-11 rounded-full bg-gradient-to-br ${activeAccent.avatarGradient} flex items-center justify-center text-white font-bold text-sm tracking-wide shadow-md flex-shrink-0`}
                      aria-hidden="true"
                    >
                      {activeInitials}
                    </div>
                    <div>
                      <h3 className="font-bold text-base sm:text-lg text-[#1F242E] leading-tight font-[var(--font-ubuntu)]">
                        {activeReview.name}
                      </h3>
                      <p className="text-xs text-[#828894] font-medium">
                        {activeReview.date}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Carousel Controls (10 Dots & Prev/Next Arrows) */}
            <div className="mt-6 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10 border-t border-[#F0F2F6]">
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
                      className={`h-2 rounded-full transition-all duration-300 focus-visible:outline-[#4F67FF] ${
                        isActive
                          ? "w-6 bg-[#F73775]"
                          : "w-2 bg-[#D5DAE2] hover:bg-[#A8AFBC]"
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
                  className="w-9 h-9 rounded-full border border-[#E2E6EC] hover:border-[#F73775] hover:text-[#F73775] text-[#54595F] flex items-center justify-center transition-all duration-200 active:scale-95 bg-white shadow-sm"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextSlide}
                  aria-label="Next recommendation"
                  className="w-9 h-9 rounded-full border border-[#E2E6EC] hover:border-[#F73775] hover:text-[#F73775] text-[#54595F] flex items-center justify-center transition-all duration-200 active:scale-95 bg-white shadow-sm"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA BUTTON: Read more reviews on Facebook */}
        <div className="text-center mt-5 mb-14">
          <a
            href="https://www.facebook.com/TheEducatee.edu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-white hover:bg-[#FFF5F8] text-[#1F242E] font-bold text-sm sm:text-base px-7 py-3.5 rounded-full shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group border border-white/80"
          >
            <FacebookIcon className="w-4 h-4 text-[#1877F2]" />
            <span>Read more reviews on Facebook</span>
            <ArrowUpRight className="w-4 h-4 text-[#828894] group-hover:text-[#1877F2] transition-colors" />
          </a>
        </div>

        {/* IELTS RESULTS & CEO AWARD SECTION (Kept as placeholder with TODO) */}
        <div className="pt-8 border-t border-white/20">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-white/80 text-xs font-extrabold uppercase tracking-widest block mb-1.5">
              ACADEMIC EXCELLENCE &amp; HONORS
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight font-[var(--font-ubuntu)]">
              Student Milestone Achievements
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {successStories.map((story) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white/15 backdrop-blur-md rounded-[24px] p-6 sm:p-7 border border-white/30 shadow-xl hover:bg-white/20 transition-all flex flex-col sm:flex-row items-center gap-5"
              >
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-[18px] overflow-hidden border-2 border-white/70 flex-shrink-0 shadow-lg bg-white/20">
                  <Image
                    src={story.image}
                    alt={story.imageAlt}
                    fill
                    sizes="112px"
                    className="object-cover object-center"
                  />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <span className="inline-block bg-[#FFC73B] text-[#3B3B3D] text-[10.5px] font-black uppercase px-3 py-0.5 rounded-full mb-2 shadow-sm">
                    {story.tag}
                  </span>
                  <h4 className="text-lg sm:text-xl font-extrabold text-white font-[var(--font-ubuntu)] leading-tight mb-1">
                    {story.achievement}
                  </h4>
                  <p className="text-xs text-white/80 font-bold mb-2">
                    {story.program}
                  </p>
                  <p className="text-xs sm:text-sm text-white/95 italic leading-relaxed">
                    &ldquo;{story.quote}&rdquo;
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
