"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { siteContent, Course } from "@/data/content";

export function ProgramsGrid() {
  const { programs } = siteContent;
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "English", "IELTS", "IT & Digital Skills"];

  const filteredPrograms =
    selectedCategory === "All"
      ? programs
      : programs.filter((p) => p.category === selectedCategory);

  // Border & Accent Color Mapping based on Padora's 3-card signature style
  const getCardStyle = (accent: Course["accentColor"]) => {
    switch (accent) {
      case "pink":
        return {
          borderColor: "border-[#F73775]",
          headerBg: "bg-[#F73775]",
          textColor: "text-[#F73775]",
          badgeBg: "bg-[#FDEBF1] text-[#F73775]",
          buttonBg: "bg-[#F73775] hover:bg-[#E02663]",
        };
      case "teal":
        return {
          borderColor: "border-[#00CDC4]",
          headerBg: "bg-[#00CDC4]",
          textColor: "text-[#00CDC4]",
          badgeBg: "bg-[#E6FAF9] text-[#00CDC4]",
          buttonBg: "bg-[#00CDC4] hover:bg-[#04B9B1]",
        };
      case "yellow":
        return {
          borderColor: "border-[#FFC73B]",
          headerBg: "bg-[#FFC73B]",
          textColor: "text-[#FFC73B]",
          badgeBg: "bg-[#FFF9EB] text-[#B87C00]",
          buttonBg: "bg-[#FFC73B] hover:bg-[#EAA816] text-[#3B3B3D]",
        };
      case "blue":
      default:
        return {
          borderColor: "border-[#4F67FF]",
          headerBg: "bg-[#4F67FF]",
          textColor: "text-[#4F67FF]",
          badgeBg: "bg-[#EFF1FB] text-[#4F67FF]",
          buttonBg: "bg-[#4F67FF] hover:bg-[#3850EB]",
        };
    }
  };

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
          {filteredPrograms.map((program, index) => {
            const styles = getCardStyle(program.accentColor);

            return (
              <motion.article
                key={program.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className={`flex flex-col bg-white rounded-3xl overflow-hidden border-4 ${styles.borderColor} padora-card-shadow padora-card-hover group`}
              >
                {/* Image Header with Badge */}
                <div className="relative w-full h-56 sm:h-60 bg-gray-100 overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  {program.badge && (
                    <span
                      className={`absolute top-4 left-4 text-xs font-black px-3.5 py-1 rounded-full shadow-md ${styles.badgeBg}`}
                    >
                      {program.badge}
                    </span>
                  )}
                  <span className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm text-xs font-bold px-3 py-1 rounded-full text-[#3B3B3D] shadow-sm">
                    {program.category}
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3
                      className={`text-xl sm:text-2xl font-extrabold mb-1.5 transition-colors font-[var(--font-nunito)] ${styles.textColor}`}
                    >
                      {program.title}
                    </h3>
                    <p className="text-xs font-bold text-[#54595F] mb-3">
                      {program.subtitle}
                    </p>
                    <p className="text-sm text-[#54595F] leading-relaxed line-clamp-3 mb-6">
                      {program.description}
                    </p>
                  </div>

                  {/* Highlights / Features List */}
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {program.features.slice(0, 3).map((feat, i) => (
                        <span
                          key={i}
                          className="text-[11px] font-semibold bg-[#EFF1FB] text-[#3B3B3D] px-2.5 py-0.5 rounded-md"
                        >
                          ✓ {feat}
                        </span>
                      ))}
                    </div>

                    {/* Bottom CTA */}
                    <div className="pt-4 border-t border-[#E2E9EB] flex items-center justify-between">
                      <span className="text-xs font-semibold text-[#54595F]">
                        Batch Info:{" "}
                        <strong className="text-[#3B3B3D]">To be announced</strong>
                      </span>
                      <Link
                        href={`/programs/${program.slug}`}
                        className={`inline-flex items-center justify-center text-white font-bold text-xs px-5 py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md ${styles.buttonBg}`}
                      >
                        Learn More →
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
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
