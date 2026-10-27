"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Course } from "@/data/content";
import { cardLiftProps } from "@/lib/motion";

interface CourseCardProps {
  course: Course;
  index?: number;
}

export function CourseCard({ course, index = 0 }: CourseCardProps) {
  // Padora Framer Signature Style: Solid Vibrant Cards (Pink, Teal, Yellow, Blue)
  const getCardStyle = (accent: Course["accentColor"]) => {
    switch (accent) {
      case "pink":
        return {
          cardBg: "bg-[#F73775]",
          titleColor: "text-white",
          subColor: "text-white/80",
          descColor: "text-white/90",
          chipBg: "bg-white/20 text-white border-white/20",
          checkColor: "text-white",
          buttonBg: "bg-white text-[#3B3B3D] hover:bg-white/90",
          badgeBg: "bg-white text-[#F73775]",
          dividerColor: "border-white/20",
          footerLabel: "text-white/70",
          footerValue: "text-white",
        };
      case "teal":
        return {
          cardBg: "bg-[#00CDC4]",
          titleColor: "text-white",
          subColor: "text-white/80",
          descColor: "text-white/90",
          chipBg: "bg-white/20 text-white border-white/20",
          checkColor: "text-white",
          buttonBg: "bg-white text-[#3B3B3D] hover:bg-white/90",
          badgeBg: "bg-white text-[#008982]",
          dividerColor: "border-white/20",
          footerLabel: "text-white/70",
          footerValue: "text-white",
        };
      case "yellow":
        return {
          cardBg: "bg-[#FFC73B]",
          titleColor: "text-[#3B3B3D]",
          subColor: "text-[#3B3B3D]/80",
          descColor: "text-[#3B3B3D]/90",
          chipBg: "bg-black/10 text-[#3B3B3D] border-black/10",
          checkColor: "text-[#3B3B3D]",
          buttonBg: "bg-white text-[#3B3B3D] hover:bg-white/90",
          badgeBg: "bg-[#3B3B3D] text-[#FFC73B]",
          dividerColor: "border-black/10",
          footerLabel: "text-[#3B3B3D]/70",
          footerValue: "text-[#3B3B3D]",
        };
      case "blue":
      default:
        return {
          cardBg: "bg-[#4F67FF]",
          titleColor: "text-white",
          subColor: "text-white/80",
          descColor: "text-white/90",
          chipBg: "bg-white/20 text-white border-white/20",
          checkColor: "text-white",
          buttonBg: "bg-white text-[#3B3B3D] hover:bg-white/90",
          badgeBg: "bg-white text-[#4F67FF]",
          dividerColor: "border-white/20",
          footerLabel: "text-white/70",
          footerValue: "text-white",
        };
    }
  };

  const styles = getCardStyle(course.accentColor);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      {...cardLiftProps}
      className={`flex flex-col ${styles.cardBg} rounded-[28px] p-6 sm:p-7 shadow-xl hover:shadow-2xl transition-all duration-300 justify-between group`}
    >
      <div>
        {/* Inner Rounded Image Container (Signature Padora Style) */}
        <div className="relative w-full h-56 sm:h-64 rounded-[20px] overflow-hidden bg-black/10 mb-6">
          <Image
            src={course.image}
            alt={course.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          />
          {/* Category Pill Floating on Image */}
          <span className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-md text-xs font-bold px-3.5 py-1 rounded-full text-[#3B3B3D] shadow-sm">
            {course.category}
          </span>
          {/* Highlight Badge Floating on Image */}
          {course.badge && (
            <span
              className={`absolute top-3.5 right-3.5 text-xs font-black px-3.5 py-1 rounded-full shadow-md ${styles.badgeBg}`}
            >
              {course.badge}
            </span>
          )}
        </div>

        {/* Card Content */}
        <div>
          <span className={`block text-xs font-extrabold uppercase tracking-wider mb-1.5 ${styles.subColor}`}>
            {course.subtitle}
          </span>
          <Link href={`/programs/${course.slug}`}>
            <h3 className={`text-2xl sm:text-3xl font-extrabold ${styles.titleColor} mb-3 font-[var(--font-ubuntu)] leading-tight hover:underline`}>
              {course.title}
            </h3>
          </Link>
          <p className={`text-sm ${styles.descColor} leading-relaxed line-clamp-3 mb-6 font-normal`}>
            {course.description}
          </p>

          {/* Highlights / Features List */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {course.features.slice(0, 3).map((feat, i) => (
              <span
                key={i}
                className={`text-[11px] font-bold px-2.5 py-1 rounded-lg inline-flex items-center gap-1.5 border ${styles.chipBg}`}
              >
                <Check className={`w-3 h-3 ${styles.checkColor}`} strokeWidth={3} />
                <span>{feat}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Footer with Padora White Button */}
      <div className={`pt-4 border-t ${styles.dividerColor} flex items-center justify-between gap-3`}>
        <div className="flex flex-col">
          <span className={`text-[10px] uppercase font-bold tracking-wider ${styles.footerLabel}`}>
            Batch Status
          </span>
          {/* TODO: Update fee & schedule once finalized */}
          <span className={`text-xs font-extrabold ${styles.footerValue}`}>
            Admission Open
          </span>
        </div>
        <Link
          href={`/programs/${course.slug}`}
          className={`inline-flex items-center justify-center gap-2 ${styles.buttonBg} font-extrabold text-xs sm:text-sm px-6 py-3 rounded-xl transition-all duration-200 shadow-md hover:scale-[1.02] active:scale-[0.98] group/btn`}
        >
          <span>Read More</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5" />
        </Link>
      </div>
    </motion.article>
  );
}
