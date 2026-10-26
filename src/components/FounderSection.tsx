"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { siteContent } from "@/data/content";

export function FounderSection() {
  const { founder } = siteContent;

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="bg-[#EFF1FB] rounded-3xl md:rounded-[3rem] p-8 sm:p-12 lg:p-16 border border-[#E2E9EB] relative overflow-hidden">
          {/* Subtle Background Accent Shape */}
          <div
            className="absolute top-0 right-0 w-96 h-96 bg-[#4F67FF]/10 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
            {/* Left: Founder Portrait (5 cols) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-5 flex justify-center"
            >
              <div className="relative">
                {/* Yellow Offset Backing Box (Padora Style) */}
                <div
                  className="absolute -inset-3 bg-[#FFC73B] rounded-[2.5rem] rotate-2 shadow-md"
                  aria-hidden="true"
                />

                {/* Founder Photo */}
                <div className="relative w-72 h-88 sm:w-80 sm:h-96 md:w-92 md:h-[420px] rounded-[2.2rem] overflow-hidden border-4 border-white shadow-xl bg-white z-10">
                  <Image
                    src={founder.image}
                    alt={founder.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Badge Tag */}
                <div className="absolute -bottom-4 right-4 z-20 bg-white text-[#4F67FF] px-4 py-2 rounded-full font-black text-xs shadow-lg border border-[#E2E9EB]">
                  ⭐ Founder &amp; CEO
                </div>
              </div>
            </motion.div>

            {/* Right: Message & Credentials (7 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-7 flex flex-col items-start"
            >
              <span className="text-[#F73775] text-xs sm:text-sm font-extrabold uppercase tracking-widest mb-2">
                LEADERSHIP &amp; VISION
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#3B3B3D] tracking-tight font-[var(--font-ubuntu)] mb-2">
                {founder.name}
              </h2>

              <p className="text-sm sm:text-base font-bold text-[#4F67FF] mb-1">
                {founder.title}
              </p>
              <p className="text-xs sm:text-sm font-semibold text-[#54595F] mb-6">
                {founder.credentials}
              </p>

              {/* Founder Message Quote Box */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E2E9EB] padora-card-shadow relative mb-6">
                <span className="text-4xl text-[#FFC73B] font-serif leading-none absolute -top-3 left-6 bg-white px-2">
                  “
                </span>
                <p className="text-sm sm:text-base text-[#54595F] leading-relaxed italic pt-2">
                  {founder.message}
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="#free-demo"
                  className="inline-flex items-center justify-center bg-[#00CDC4] hover:bg-[#04B9B1] text-white font-extrabold text-sm px-7 py-3 rounded-full transition-all duration-200 shadow-md hover:scale-[1.02]"
                >
                  Join Sir&apos;s Free Demo Class
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center text-[#4F67FF] hover:text-[#3850EB] font-bold text-sm px-4 py-3 underline underline-offset-4"
                >
                  Read Full Story →
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
