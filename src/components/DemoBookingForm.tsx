"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteContent } from "@/data/content";

export function DemoBookingForm() {
  const { programs } = siteContent;

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState(programs[0]?.title || "SSC / Dakhil Spoken English");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Connect this booking form to WhatsApp API / Google Sheet webhook later
    // Example: fetch('/api/booking', { method: 'POST', body: JSON.stringify({ fullName, phone, course }) })

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <section id="free-demo" className="py-20 md:py-28 bg-[#EFF1FB]/50 relative scroll-mt-20">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="bg-[#4F67FF] text-white rounded-3xl md:rounded-[3rem] p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          {/* Subtle Decorative Curves */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          <div className="absolute -left-20 -top-20 w-72 h-72 rounded-full bg-[#FFC73B]/20 blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
            {/* Left Column: Heading & Trust (6 cols) */}
            <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="w-16 h-16 rounded-2xl bg-[#FFC73B] text-[#3B3B3D] flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </div>

              <span className="text-[#FFC73B] text-xs sm:text-sm font-extrabold uppercase tracking-widest mb-2">
                RESERVE YOUR SEAT TODAY
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight font-[var(--font-ubuntu)] mb-4">
                Experience a Free Demo Class in Feni
              </h2>

              <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-lg mb-6">
                Meet our instructors, step into our quiet 5th-floor classrooms,
                and discover how fun and natural speaking English can be.
              </p>

              <div className="flex flex-col gap-2.5 text-sm text-white/80">
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <span className="w-5 h-5 rounded-full bg-[#00CDC4] text-white flex items-center justify-center text-xs font-bold">
                    ✓
                  </span>
                  <span>100% Free • No obligation to register</span>
                </div>
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <span className="w-5 h-5 rounded-full bg-[#00CDC4] text-white flex items-center justify-center text-xs font-bold">
                    ✓
                  </span>
                  <span>Separate comfortable Girls&apos; batch available</span>
                </div>
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <span className="w-5 h-5 rounded-full bg-[#00CDC4] text-white flex items-center justify-center text-xs font-bold">
                    ✓
                  </span>
                  <span>Small batches strictly capped at 16 students</span>
                </div>
              </div>
            </div>

            {/* Right Column: Form Box (6 cols) */}
            <div className="lg:col-span-6">
              <div className="bg-white text-[#3B3B3D] rounded-3xl p-7 sm:p-9 shadow-2xl border border-white/20">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="text-center py-6"
                    >
                      <div className="w-16 h-16 rounded-full bg-[#00CDC4]/20 text-[#00CDC4] flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
                        ✓
                      </div>
                      <h3 className="text-2xl font-bold text-[#3B3B3D] mb-2 font-[var(--font-nunito)]">
                        Demo Class Reserved!
                      </h3>
                      <p className="text-sm text-[#54595F] leading-relaxed mb-6">
                        Thank you, <strong className="text-[#3B3B3D]">{fullName}</strong>! We have received your booking for{" "}
                        <strong className="text-[#4F67FF]">{course}</strong>. Our admissions team will WhatsApp / call you at{" "}
                        <strong className="text-[#3B3B3D]">{phone}</strong> shortly with your demo batch timing and classroom details.
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          setSubmitted(false);
                          setFullName("");
                          setPhone("");
                        }}
                        className="text-xs font-bold text-[#4F67FF] hover:underline"
                      >
                        ← Book another demo class
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="flex flex-col gap-4"
                    >
                      <h3 className="text-xl sm:text-2xl font-bold text-[#3B3B3D] mb-1 font-[var(--font-nunito)]">
                        Book Your Free Demo
                      </h3>
                      <p className="text-xs text-[#54595F] -mt-2 mb-2">
                        Takes 30 seconds. We will contact you with batch timings.
                      </p>

                      {/* Full Name */}
                      <div>
                        <label
                          htmlFor="fullName"
                          className="block text-xs font-bold uppercase tracking-wider text-[#3B3B3D] mb-1.5"
                        >
                          Your Full Name <span className="text-[#F73775]">*</span>
                        </label>
                        <input
                          id="fullName"
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="e.g. Nusrat Jahan / Tanvir Ahmed"
                          className="w-full px-4 py-3 rounded-xl border border-[#E2E9EB] text-sm focus:outline-none focus:ring-2 focus:ring-[#4F67FF] transition-all bg-[#F8FAFC]"
                        />
                      </div>

                      {/* Phone Number */}
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-xs font-bold uppercase tracking-wider text-[#3B3B3D] mb-1.5"
                        >
                          Phone / WhatsApp Number <span className="text-[#F73775]">*</span>
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="018XXXXXXXX or 017XXXXXXXX"
                          className="w-full px-4 py-3 rounded-xl border border-[#E2E9EB] text-sm focus:outline-none focus:ring-2 focus:ring-[#4F67FF] transition-all bg-[#F8FAFC]"
                        />
                      </div>

                      {/* Course Select */}
                      <div>
                        <label
                          htmlFor="course"
                          className="block text-xs font-bold uppercase tracking-wider text-[#3B3B3D] mb-1.5"
                        >
                          Select Program <span className="text-[#F73775]">*</span>
                        </label>
                        <select
                          id="course"
                          value={course}
                          onChange={(e) => setCourse(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-[#E2E9EB] text-sm focus:outline-none focus:ring-2 focus:ring-[#4F67FF] transition-all bg-[#F8FAFC]"
                        >
                          {programs.map((p) => (
                            <option key={p.id} value={p.title}>
                              {p.title} ({p.category})
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="mt-3 w-full inline-flex items-center justify-center bg-[#00CDC4] hover:bg-[#04B9B1] disabled:opacity-60 text-white font-extrabold text-sm sm:text-base py-3.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:scale-[1.01] active:scale-[0.99]"
                      >
                        {isSubmitting ? "Submitting..." : "Reserve My Free Seat →"}
                      </button>

                      <p className="text-[11px] text-center text-[#54595F] mt-1">
                        🔒 Your contact number is safe and only used for your demo class schedule.
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
