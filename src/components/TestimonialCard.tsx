"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Testimonial } from "@/data/content";
import { cardLiftProps } from "@/lib/motion";

interface TestimonialCardProps {
  item: Testimonial;
  index?: number;
}

export function TestimonialCard({ item, index = 0 }: TestimonialCardProps) {
  const cardAccents = [
    {
      borderColor: "border-[#4F67FF]",
      tagBg: "bg-[#4F67FF]/10 text-[#4F67FF]",
      courseColor: "text-[#4F67FF]",
    },
    {
      borderColor: "border-[#00CDC4]",
      tagBg: "bg-[#00CDC4]/15 text-[#008982]",
      courseColor: "text-[#008982]",
    },
    {
      borderColor: "border-[#FFC73B]",
      tagBg: "bg-[#FFC73B]/20 text-[#B87C00]",
      courseColor: "text-[#B87C00]",
    },
    {
      borderColor: "border-[#F73775]",
      tagBg: "bg-[#F73775]/15 text-[#F73775]",
      courseColor: "text-[#F73775]",
    },
  ];
  const acc = cardAccents[index % cardAccents.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      {...cardLiftProps}
      className="bg-white text-[#3B3B3D] rounded-[28px] p-7 sm:p-8 shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
    >
      {/* Decorative Quote Icon in corner */}
      <div className="absolute top-6 right-6 text-[#EFF1FB] pointer-events-none" aria-hidden="true">
        <Quote className="w-12 h-12 rotate-180" />
      </div>

      <div>
        {/* Header: Avatar & Info */}
        <div className="flex items-center gap-4 mb-5 relative z-10">
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
            <p className={`text-[11px] font-bold ${acc.courseColor} mt-0.5`}>
              {item.course}
            </p>
          </div>
        </div>

        {/* Testimonial Quote */}
        <p className="text-sm text-[#54595F] leading-relaxed italic mb-4 relative z-10">
          &ldquo;{item.text}&rdquo;
        </p>
      </div>

      {/* Bottom Tag / Indicator */}
      <div className="pt-4 border-t border-[#E2E9EB] flex items-center justify-between text-[11px] text-[#54595F]">
        <span className="font-semibold text-[#3B3B3D]">Focus: {item.theme}</span>
        {item.isPlaceholder && (
          <span className={`text-[10px] uppercase font-bold px-2.5 py-1 rounded-full ${acc.tagBg}`}>
            Sample Review
          </span>
        )}
      </div>
    </motion.div>
  );
}
