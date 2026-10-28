"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { siteContent } from "@/data/content";
import { CourseCard } from "@/components/CourseCard";

const FEATURED_IDS = [
  "spoken-english-ssc-dakhil",
  "ielts-preparation",
  "basic-computer-ms-office",
];

export function ProgramsGrid() {
  const { programs } = siteContent;

  // Exactly 3 featured courses for the homepage
  const featuredPrograms = FEATURED_IDS.map((id) =>
    programs.find((p) => p.id === id)
  ).filter(Boolean) as typeof programs;

  return (
    <section id="programs" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Section Header with top-right 'View all courses' action */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-[#ED1C24] text-xs sm:text-sm font-extrabold uppercase tracking-widest block mb-2 font-[var(--font-nunito)]">
              OUR TRAINING PROGRAMS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#3B3B3D] tracking-tight mb-3 font-[var(--font-ubuntu)] leading-tight">
              Explore Featured Programs
            </h2>
            <p className="text-base sm:text-lg text-[#54595F] leading-relaxed">
              From speaking English with fearless fluency to computer mastery and
              IELTS success, choose the right course tailored to your schedule.
            </p>
          </div>

          {/* Top Right Action Button */}
          <div className="flex-shrink-0 self-start md:self-auto">
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 bg-[#ED1C24] hover:bg-[#C81017] text-white font-extrabold text-sm sm:text-base px-7 py-3.5 rounded-full transition-all duration-200 shadow-md shadow-red-500/20 hover:scale-[1.02] active:scale-[0.98] group"
            >
              <span>View all courses</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* 3 Featured Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPrograms.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
            >
              <CourseCard course={program} index={index} />
            </motion.div>
          ))}
        </div>

        {/* Bottom helper info & mobile action */}
        <div className="mt-12 text-center flex flex-col items-center justify-center gap-3">
          <Link
            href="/programs"
            className="md:hidden inline-flex items-center gap-2 bg-[#ED1C24] hover:bg-[#C81017] text-white font-extrabold text-sm px-8 py-3.5 rounded-full shadow-md shadow-red-500/20"
          >
            <span>View all courses ({programs.length})</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <p className="text-xs sm:text-sm text-[#54595F]">
            Need handwriting improvement, professional evening batches, or digital freelancing?{" "}
            <Link
              href="/programs"
              className="font-bold text-[#ED1C24] hover:underline inline-flex items-center gap-1"
            >
              <span>Explore all {programs.length} programs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
