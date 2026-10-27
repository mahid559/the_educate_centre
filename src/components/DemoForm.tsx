"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Lock, Send } from "lucide-react";
import { siteContent } from "@/data/content";

interface DemoFormProps {
  defaultCourse?: string;
  className?: string;
}

export function DemoForm({ defaultCourse, className = "" }: DemoFormProps) {
  const { programs } = siteContent;

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState(
    defaultCourse || programs[0]?.title || "SSC / Dakhil Spoken English"
  );
  const [preferredTime, setPreferredTime] = useState("Morning Batch (10:00 AM)");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Validation
    const cleanPhone = phone.replace(/[\s-]/g, "");
    if (cleanPhone.length < 11) {
      setError("Please enter a valid 11-digit Bangladeshi mobile or WhatsApp number.");
      return;
    }

    setIsSubmitting(true);

    // TODO: Connect this booking form to backend API / WhatsApp webhook / Google Sheet
    // Example: await fetch('/api/book-demo', { method: 'POST', body: JSON.stringify({ fullName, phone, course, preferredTime }) })

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div
      className={`bg-white text-[#3B3B3D] rounded-3xl p-7 sm:p-9 shadow-xl border border-[#E2E9EB] ${className}`}
    >
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.35 }}
            className="text-center py-6"
          >
            <div className="w-16 h-16 rounded-full bg-[#E6FAF9] text-[#00CDC4] flex items-center justify-center mx-auto mb-4 shadow-sm">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="inline-flex items-center gap-1.5 bg-[#EFF1FB] text-[#4F67FF] text-xs font-bold px-3 py-1 rounded-full mb-3">
              <span>Seat Reserved Successfully</span>
            </div>

            <h3 className="text-2xl font-bold text-[#3B3B3D] mb-2 font-[var(--font-nunito)]">
              Demo Class Booked!
            </h3>

            <p className="text-sm text-[#54595F] leading-relaxed mb-6 max-w-md mx-auto">
              Thank you, <strong className="text-[#3B3B3D]">{fullName}</strong>! We have registered your reservation for{" "}
              <strong className="text-[#4F67FF]">{course}</strong> ({preferredTime}). Our admissions desk will WhatsApp / call you at{" "}
              <strong className="text-[#3B3B3D]">{phone}</strong> shortly with your classroom schedule and room instructions at Appayan Afroz Tower.
            </p>

            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setFullName("");
                setPhone("");
              }}
              className="inline-flex items-center gap-1 text-xs font-bold text-[#4F67FF] hover:underline"
            >
              ← Book for another family member or course
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 text-left"
          >
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#4F67FF] block mb-1">
                Zero Cost • No Obligation
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#3B3B3D] font-[var(--font-nunito)]">
                Book a Free Demo Class
              </h3>
              <p className="text-xs text-[#54595F] mt-1">
                Experience our friendly 5th-floor classrooms before taking admission.
              </p>
            </div>

            {error && (
              <div className="p-3 rounded-xl bg-[#FDEBF1] border border-[#F73775]/30 text-[#F73775] text-xs font-semibold">
                {error}
              </div>
            )}

            {/* Full Name */}
            <div>
              <label
                htmlFor="demo-name"
                className="block text-xs font-bold uppercase tracking-wider text-[#3B3B3D] mb-1.5"
              >
                Full Name <span className="text-[#F73775]">*</span>
              </label>
              <input
                id="demo-name"
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="e.g. Tanvir Ahmed / Nusrat Jahan"
                className="w-full px-4 py-3 rounded-xl border border-[#E2E9EB] text-sm focus:outline-none focus:ring-2 focus:ring-[#4F67FF] transition-all bg-[#F8FAFC]"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label
                htmlFor="demo-phone"
                className="block text-xs font-bold uppercase tracking-wider text-[#3B3B3D] mb-1.5"
              >
                Phone / WhatsApp Number <span className="text-[#F73775]">*</span>
              </label>
              <input
                id="demo-phone"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="018XXXXXXXX or 015XXXXXXXX"
                className="w-full px-4 py-3 rounded-xl border border-[#E2E9EB] text-sm focus:outline-none focus:ring-2 focus:ring-[#4F67FF] transition-all bg-[#F8FAFC]"
              />
            </div>

            {/* Program Select */}
            <div>
              <label
                htmlFor="demo-course"
                className="block text-xs font-bold uppercase tracking-wider text-[#3B3B3D] mb-1.5"
              >
                Select Course <span className="text-[#F73775]">*</span>
              </label>
              <select
                id="demo-course"
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

            {/* Preferred Time / Batch */}
            <div>
              <label
                htmlFor="demo-time"
                className="block text-xs font-bold uppercase tracking-wider text-[#3B3B3D] mb-1.5"
              >
                Preferred Batch Timing <span className="text-[#F73775]">*</span>
              </label>
              <select
                id="demo-time"
                value={preferredTime}
                onChange={(e) => setPreferredTime(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[#E2E9EB] text-sm focus:outline-none focus:ring-2 focus:ring-[#4F67FF] transition-all bg-[#F8FAFC]"
              >
                <option value="Morning Batch (10:00 AM)">Morning Batch (10:00 AM)</option>
                <option value="Afternoon Batch (3:00 PM)">Afternoon Batch (3:00 PM)</option>
                <option value="Evening Batch (6:30 PM - Professionals)">Evening Batch (6:30 PM - Professionals)</option>
                <option value="Separate Girls' Batch (Flexible)">Separate Girls&apos; Batch (Comfortable &amp; Dedicated)</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 w-full inline-flex items-center justify-center gap-2 bg-[#00CDC4] hover:bg-[#04B9B1] disabled:opacity-60 text-white font-extrabold text-sm sm:text-base py-3.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:scale-[1.01] active:scale-[0.99]"
            >
              <Send className="w-4 h-4" />
              <span>{isSubmitting ? "Reserving Seat..." : "Confirm Free Demo Seat"}</span>
            </button>

            <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#54595F] mt-1">
              <Lock className="w-3.5 h-3.5 text-[#54595F]" />
              <span>Your contact number is kept confidential for batch alerts only.</span>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
