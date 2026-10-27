"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteContent } from "@/data/content";
import { CourseCard } from "@/components/CourseCard";

export function ProgramsGrid() {
  const { programs } = siteContent;
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "English", "IELTS", "IT & Digital Skills"];

  const filteredPrograms =
    selectedCategory === "All"
      ? programs
      : programs.filter((p) => p.category === selectedCategory);

  return (
    <section id="programs" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#F73775] text-xs sm:text-sm font-extrabold uppercase tracking-widest block mb-2">
            OUR TRAINING PROGRAMS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#3B3B3D] tracking-tight mb-4 font-[var(--font-ubuntu)]">
            Explore Courses Built for Your Goals
          </h2>
          <p className="text-base sm:text-lg text-[#54595F]">
            From speaking English with fearless fluency to computer mastery and
            IELTS success, choose the right course tailored to your schedule.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                  selectedCategory === cat
                    ? "bg-[#4F67FF] text-white shadow-md scale-105"
                    : "bg-[#EFF1FB] text-[#54595F] hover:bg-[#E2E9EB] hover:text-[#3B3B3D]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((program, index) => (
            <CourseCard key={program.id} course={program} index={index} />
          ))}
        </div>

        {/* View All Programs Link */}
        <div className="text-center mt-12">
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#4F67FF] hover:text-[#3850EB] hover:underline underline-offset-4"
          >
            <span>Looking for detailed curriculum outlines &amp; admission steps? View all courses</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
