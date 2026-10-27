"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, MessageCircle, ArrowRight, Sparkles } from "lucide-react";
import { siteContent } from "@/data/content";

interface CTABannerProps {
  title?: string;
  subtext?: string;
  primaryCtaText?: string;
  primaryCtaLink?: string;
  badge?: string;
}

export function CTABanner({
  title = "Ready to Speak English with Absolute Confidence?",
  subtext = "Reserve your seat for our upcoming free demo session at Appayan Afroz Tower, Feni. Experience friendly mentorship with zero pressure.",
  primaryCtaText = "Book a Free Demo Class",
  primaryCtaLink = "/admissions#free-demo",
  badge = "EXPERIENCE THE DIFFERENCE",
}: CTABannerProps) {
  const { contact } = siteContent;

  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="bg-[#4F67FF] text-white rounded-3xl md:rounded-[2.8rem] p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden text-center md:text-left"
        >
          {/* Decorative shapes */}
          <div
            className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-white/10 blur-2xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[#FFC73B]/20 blur-2xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Content (8 cols) */}
            <div className="lg:col-span-8 flex flex-col items-center md:items-start">
              <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 rounded-full px-4 py-1.5 mb-4 text-xs font-bold uppercase tracking-wider text-white">
                <Sparkles className="w-3.5 h-3.5 text-[#FFC73B]" />
                <span>{badge}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold !text-white tracking-tight leading-tight mb-4 font-[var(--font-ubuntu)]">
                {title}
              </h2>

              <p className="text-base sm:text-lg text-white/95 leading-relaxed max-w-2xl">
                {subtext}
              </p>
            </div>

            {/* Right Buttons (4 cols) */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-center justify-center lg:items-end gap-3.5 w-full">
              <Link
                href={primaryCtaLink}
                className="w-full sm:w-auto lg:w-full inline-flex items-center justify-center gap-2 bg-[#00CDC4] hover:bg-[#04B9B1] text-white font-extrabold text-sm sm:text-base px-8 py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>{primaryCtaText}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto lg:w-full inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 font-bold text-sm px-6 py-3.5 rounded-full transition-all duration-200 backdrop-blur-sm"
              >
                <MessageCircle className="w-4 h-4 text-[#00CDC4]" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={`tel:${contact.primaryPhone.replace(/-/g, "")}`}
                className="text-xs text-white/80 hover:text-white flex items-center gap-1.5 transition-colors pt-1"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Or Call: {contact.primaryPhone}</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
