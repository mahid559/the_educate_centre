"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, HelpCircle, Phone } from "lucide-react";
import { siteContent } from "@/data/content";
import { PageHero } from "@/components/PageHero";
import { FilterTabs } from "@/components/FilterTabs";
import { CourseCard } from "@/components/CourseCard";
import { CTABanner } from "@/components/CTABanner";

export default function ProgramsClientView() {
  const { programs, contact } = siteContent;
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "English", "IELTS", "IT & Digital Skills"];

  const filteredPrograms =
    activeCategory === "All"
      ? programs
      : programs.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* 1. Page Hero */}
      <PageHero
        eyebrow="TARGETED CURRICULUM"
        title="Our Programs"
        accentText="&amp; Courses"
        subtext="Conquer your fear of speaking, reach your target IELTS band in small batches of 16, and gain hands-on IT proficiency on your own individual computer."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Programs" },
        ]}
      />

      {/* 2. Programs Catalog & Filter Tabs */}
      <section className="py-20 md:py-28 bg-white relative">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          {/* Top Filter Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12 sm:mb-16 border-b border-[#E2E9EB] pb-8">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#F73775] block mb-1">
                SELECT A SPECIALIZATION
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3B3B3D] font-[var(--font-ubuntu)]">
                Browse by Category
              </h2>
            </div>

            {/* Sliding Pill Filter Tabs */}
            <FilterTabs
              categories={categories}
              activeCategory={activeCategory}
              onChange={setActiveCategory}
              layoutId="programsFilterActive"
            />
          </div>

          {/* Programs Grid with Layout Animation */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredPrograms.map((course, index) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  index={index}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* 3. "Not sure which course is right for you?" Section */}
      <section className="py-16 md:py-20 bg-[#EFF1FB]/60 relative border-y border-[#E2E9EB]">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 text-center">
          <div className="w-16 h-16 rounded-full bg-[#EFF1FB] text-[#4F67FF] flex items-center justify-center mx-auto mb-5 shadow-sm border border-[#E2E9EB]">
            <HelpCircle className="w-8 h-8" />
          </div>

          <div className="inline-flex items-center gap-1.5 bg-[#EFF1FB] text-[#4F67FF] text-xs font-bold px-3.5 py-1 rounded-full mb-3">
            <span>Free Academic Counseling</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#3B3B3D] font-[var(--font-ubuntu)] mb-3">
            Not Sure Which Course is Right for You?
          </h2>

          <p className="text-base sm:text-lg text-[#54595F] leading-relaxed max-w-2xl mx-auto mb-8">
            Tell us about your background (SSC, HSC, job holder, or beginner) and your goals. Our senior counselors will recommend the ideal batch and schedule for you.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-[#00CDC4] hover:bg-[#04B9B1] text-white font-extrabold text-sm sm:text-base px-8 py-4 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Ask Us on WhatsApp</span>
            </a>

            <a
              href={`tel:${contact.primaryPhone.replace(/-/g, "")}`}
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F8FAFC] text-[#3B3B3D] border border-[#E2E9EB] font-bold text-sm sm:text-base px-7 py-4 rounded-full transition-all duration-200 shadow-sm hover:scale-[1.02]"
            >
              <Phone className="w-4 h-4 text-[#4F67FF]" />
              <span>Call: {contact.primaryPhone}</span>
            </a>
          </div>
        </div>
      </section>

      {/* 4. CTA Banner */}
      <CTABanner
        title="Experience Any Course in a Free Demo Class"
        subtext="Meet the instructor, walk through the classroom, and test the waters before enrolling. Zero cost and zero pressure."
        primaryCtaText="Book Free Demo Class"
        primaryCtaLink="/admissions#free-demo"
        badge="ZERO OBLIGATION TRIAL"
      />
    </>
  );
}
