"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { siteContent } from "@/data/content";

export function Hero() {
  const { hero } = siteContent;

  return (
    <section className="relative overflow-hidden bg-[#4F67FF] text-white pt-10 pb-16 md:pt-16 md:pb-24 lg:pt-20 lg:pb-32">
      {/* Background Decorative Curves & Blobs (Padora Aesthetics) */}
      <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden" aria-hidden="true">
        <svg
          className="absolute -top-32 -left-32 w-[600px] h-[600px]"
          viewBox="0 0 600 600"
          fill="none"
        >
          <path
            d="M100 200C180 80 320 120 400 240C480 360 420 500 300 520C180 540 80 440 60 340C40 240 20 320 100 200Z"
            stroke="white"
            strokeWidth="3"
            strokeDasharray="8 8"
          />
        </svg>
        <svg
          className="absolute -bottom-40 right-0 w-[700px] h-[700px]"
          viewBox="0 0 700 700"
          fill="none"
        >
          <path
            d="M150 350C100 200 250 100 450 150C650 200 680 400 580 550C480 700 280 650 200 550C120 450 200 500 150 350Z"
            stroke="white"
            strokeWidth="2.5"
          />
        </svg>
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/25 rounded-full px-4 py-1.5 mb-6 text-xs sm:text-sm font-bold tracking-wide uppercase text-white shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#FFC73B] animate-pulse" />
              <span>{hero.tag}</span>
            </div>

            {/* Main Headline - High contrast white and yellow */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-[1.14] tracking-tight text-white mb-6 font-[var(--font-nunito)]">
              <span className="text-white block sm:inline">
                {hero.headlineLine1}{" "}
              </span>
              <span className="text-[#FFC73B] underline decoration-wavy decoration-[#FFC73B]/60 underline-offset-8">
                {hero.headlineLine2}
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg md:text-xl text-white/95 leading-relaxed font-normal max-w-2xl mb-8">
              {hero.subtext}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link
                href={hero.primaryCtaLink}
                className="w-full sm:w-auto inline-flex items-center justify-center bg-[#00CDC4] hover:bg-[#04B9B1] text-white font-extrabold text-base px-8 py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.03] active:scale-[0.98]"
              >
                {hero.primaryCtaText}
              </Link>

              <Link
                href={hero.secondaryCtaLink}
                className="w-full sm:w-auto inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white border-2 border-white/40 font-bold text-base px-8 py-4 rounded-full transition-all duration-200 backdrop-blur-sm hover:scale-[1.02] active:scale-[0.98]"
              >
                {hero.secondaryCtaText}
              </Link>
            </div>

            {/* Trust Pill */}
            <div className="mt-8 flex items-center gap-3 text-xs sm:text-sm text-white/90">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-[#4F67FF] bg-[#FFC73B] flex items-center justify-center text-[#3B3B3D]">
                  <svg className="w-3.5 h-3.5 fill-none stroke-[#3B3B3D] stroke-[2.5]" viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-[#4F67FF] bg-[#00CDC4] flex items-center justify-center text-white">
                  <svg className="w-3.5 h-3.5 fill-none stroke-white stroke-[2.5]" viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-[#4F67FF] bg-[#F73775] flex items-center justify-center text-white">
                  <svg className="w-3.5 h-3.5 fill-none stroke-white stroke-[2.5]" viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              </div>
              <p>
                <span className="font-bold text-white">Free demo before batch start</span> • 50% discount on Girls&apos; &amp; IELTS batches
              </p>
            </div>
          </motion.div>

          {/* Right Column: Hero Graphic Blob Frame (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            {/* Padora Yellow Organic Backdrop Blob */}
            <div
              className="absolute -inset-4 sm:-inset-6 bg-[#FFC73B] rounded-[42%_58%_70%_30%_/_45%_45%_55%_55%] rotate-[-4deg] opacity-95 shadow-2xl transition-transform duration-700 hover:rotate-0"
              aria-hidden="true"
            />

            {/* Decorative White Floating Rings */}
            <div
              className="absolute -top-4 -left-4 w-16 h-16 rounded-full border-[6px] border-white/90 shadow-md pointer-events-none z-20 animate-bounce"
              style={{ animationDuration: "6s" }}
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-5 -right-3 w-20 h-20 rounded-full border-[7px] border-white/90 shadow-md pointer-events-none z-20"
              aria-hidden="true"
            />

            {/* Image Container with Organic Clip */}
            <div className="relative w-[300px] h-[340px] sm:w-[380px] sm:h-[420px] md:w-[440px] md:h-[480px] rounded-[44%_56%_62%_38%_/_46%_40%_60%_54%] overflow-hidden border-4 border-white shadow-2xl z-10 bg-white">
              <Image
                src={hero.image}
                alt={hero.imageAlt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 440px"
                className="object-cover object-center transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
