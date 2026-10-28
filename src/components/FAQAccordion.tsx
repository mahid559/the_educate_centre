"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteContent } from "@/data/content";

export function FAQAccordion() {
  const { faqs } = siteContent;
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 md:py-28 bg-white relative">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#ED1C24] text-xs sm:text-sm font-extrabold uppercase tracking-widest block mb-2">
            GOT QUESTIONS?
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#3B3B3D] tracking-tight mb-4 font-[var(--font-ubuntu)]">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-[#54595F]">
            Everything you need to know about our demo classes, batch structures,
            fees, and Feni campus location.
          </p>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`bg-[#EFF1FB]/60 rounded-[22px] border transition-all duration-200 overflow-hidden ${
                  isOpen ? "border-2 border-[#4F67FF] bg-white shadow-xl" : "border-[#E2E9EB] hover:border-[#CBD5E1]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F67FF]"
                >
                  <span className="text-base sm:text-lg font-extrabold text-[#3B3B3D] font-[var(--font-ubuntu)]">
                    {faq.question}
                  </span>
                  <span
                    className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "bg-[#4F67FF] text-white rotate-45"
                        : "bg-white text-[#3B3B3D] border border-[#E2E9EB]"
                    }`}
                  >
                    <svg
                      className="w-4 h-4 fill-none stroke-current stroke-2"
                      viewBox="0 0 24 24"
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 sm:px-7 sm:pb-7 text-sm sm:text-base text-[#54595F] leading-relaxed border-t border-[#E2E9EB]/60 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still have questions note */}
        <div className="mt-12 text-center p-6 bg-[#EFF1FB]/50 rounded-2xl border border-[#E2E9EB]">
          <p className="text-sm text-[#3B3B3D] font-medium">
            Have a question not listed here? Call our friendly admissions desk directly at{" "}
            <a
              href="tel:01874232272"
              className="font-bold text-[#4F67FF] hover:underline"
            >
              01874-232272
            </a>{" "}
            or message us on{" "}
            <a
              href="https://wa.me/8801874232272"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#00CDC4] hover:underline"
            >
              WhatsApp
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
