"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Lock,
  ExternalLink,
} from "lucide-react";
import { siteContent } from "@/data/content";
import { PageHero } from "@/components/PageHero";
import { cardLiftProps } from "@/lib/motion";

export default function ContactClientView() {
  const { contact } = siteContent;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const cleanPhone = phone.replace(/[\s-]/g, "");
    if (cleanPhone.length < 11) {
      setError("Please provide a valid 11-digit mobile number.");
      return;
    }

    if (!message.trim()) {
      setError("Please type your question or message.");
      return;
    }

    setIsSubmitting(true);

    // TODO: Connect this contact form to email webhook / WhatsApp API backend
    // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify({ name, phone, message }) })

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <>
      {/* 1. Page Hero */}
      <PageHero
        eyebrow="GET IN TOUCH"
        title="Contact Us"
        accentText="&amp; Location"
        subtext="Have questions about courses, schedules, or admissions? Call, WhatsApp, or drop by our quiet 5th-floor campus in Feni."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact Us" },
        ]}
      />

      {/* 2. Contact Cards Strip (4 Cards) */}
      <section className="py-16 md:py-20 bg-white relative">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Phone Card (Padora Royal Blue) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              {...cardLiftProps}
              className="bg-[#4F67FF] text-white rounded-[28px] p-7 shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-white text-[#4F67FF] flex items-center justify-center mb-5 shadow-md">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-extrabold text-white font-[var(--font-ubuntu)] mb-1">
                  Call Our Desk
                </h3>
                <p className="text-xs text-white/80 mb-4 font-normal">
                  Direct telephone assistance for admissions &amp; general queries.
                </p>
                <div className="flex flex-col gap-1 text-sm font-extrabold text-white">
                  <a href={`tel:${contact.primaryPhone.replace(/-/g, "")}`} className="hover:underline">
                    {contact.primaryPhone}
                  </a>
                  <a href={`tel:${contact.secondaryPhone.replace(/-/g, "")}`} className="hover:underline text-xs text-white/80">
                    {contact.secondaryPhone}
                  </a>
                </div>
              </div>
              <div className="mt-6 pt-3 border-t border-white/20 text-xs font-bold text-white/90">
                Sat - Thu: 9 AM - 8 PM
              </div>
            </motion.div>

            {/* WhatsApp Card (Padora Vibrant Teal) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.08 }}
              {...cardLiftProps}
              className="bg-[#00CDC4] text-white rounded-[28px] p-7 shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-white text-[#008982] flex items-center justify-center mb-5 shadow-md">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-extrabold text-white font-[var(--font-ubuntu)] mb-1">
                  WhatsApp Support
                </h3>
                <p className="text-xs text-white/80 mb-4 font-normal">
                  Instant batch timings, course outlines, and quick demo registration.
                </p>
                <a
                  href={contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-extrabold bg-white text-[#008982] px-4 py-2 rounded-xl shadow-md hover:scale-105 transition-all"
                >
                  <span>Chat on WhatsApp</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
              <div className="mt-6 pt-3 border-t border-white/20 text-xs font-bold text-white/90">
                Fastest Response Time
              </div>
            </motion.div>

            {/* Facebook Card (Padora Sunny Gold) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.16 }}
              {...cardLiftProps}
              className="bg-[#FFC73B] text-[#3B3B3D] rounded-[28px] p-7 shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-white text-[#B87C00] flex items-center justify-center mb-5 shadow-md">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
                <h3 className="text-xl font-extrabold text-[#3B3B3D] font-[var(--font-ubuntu)] mb-1">
                  Facebook Page
                </h3>
                <p className="text-xs text-[#3B3B3D]/80 mb-4 font-normal">
                  Follow batch announcements, student spotlights, and event photos.
                </p>
                <a
                  href={contact.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-extrabold bg-white text-[#3B3B3D] px-4 py-2 rounded-xl shadow-md hover:scale-105 transition-all"
                >
                  <span>Visit Facebook Page</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
              <div className="mt-6 pt-3 border-t border-black/10 text-xs font-bold text-[#3B3B3D]/80">
                Official Updates
              </div>
            </motion.div>

            {/* Campus Address Card (Padora Pink) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.24 }}
              {...cardLiftProps}
              className="bg-[#F73775] text-white rounded-[28px] p-7 shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-white text-[#F73775] flex items-center justify-center mb-5 shadow-md">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-extrabold text-white font-[var(--font-ubuntu)] mb-1">
                  Feni Campus
                </h3>
                <p className="text-xs font-semibold text-white/90 mb-2 leading-relaxed">
                  {contact.address}
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-white/20 text-xs font-bold text-white/90">
                Near Pourashava Gate
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Main Form & Map Section */}
      <section className="py-16 md:py-24 bg-[#EFF1FB]/50 relative border-t border-[#E2E9EB]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            {/* Left Column: Contact Form (6 cols) */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E9EB] padora-card-shadow">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#ED1C24] block mb-1">
                  SEND US A MESSAGE
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3B3B3D] font-[var(--font-ubuntu)] mb-2">
                  How Can We Help You?
                </h2>
                <p className="text-xs sm:text-sm text-[#54595F] mb-6">
                  Fill out this form and our academic team will reply promptly via phone or WhatsApp.
                </p>

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="text-center py-8"
                    >
                      <div className="w-16 h-16 rounded-full bg-[#E6FAF9] text-[#00CDC4] flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>
                      <h3 className="text-2xl font-bold text-[#3B3B3D] mb-2 font-[var(--font-nunito)]">
                        Message Received!
                      </h3>
                      <p className="text-sm text-[#54595F] leading-relaxed mb-6">
                        Thank you, <strong className="text-[#3B3B3D]">{name}</strong>! We have received your inquiry. Our team will reach out to you at{" "}
                        <strong className="text-[#4F67FF]">{phone}</strong> soon.
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          setSubmitted(false);
                          setName("");
                          setPhone("");
                          setMessage("");
                        }}
                        className="text-xs font-bold text-[#4F67FF] hover:underline"
                      >
                        ← Send another message
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
                      {error && (
                        <div className="p-3 rounded-xl bg-[#FDEBF1] border border-[#F73775]/30 text-[#F73775] text-xs font-semibold">
                          {error}
                        </div>
                      )}

                      {/* Name */}
                      <div>
                        <label
                          htmlFor="contact-name"
                          className="block text-xs font-bold uppercase tracking-wider text-[#3B3B3D] mb-1.5"
                        >
                          Full Name <span className="text-[#ED1C24]">*</span>
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Your full name"
                          className="w-full px-4 py-3 rounded-xl border border-[#E2E9EB] text-sm focus:outline-none focus:ring-2 focus:ring-[#4F67FF] transition-all bg-[#F8FAFC]"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label
                          htmlFor="contact-phone"
                          className="block text-xs font-bold uppercase tracking-wider text-[#3B3B3D] mb-1.5"
                        >
                          Mobile / WhatsApp Number <span className="text-[#ED1C24]">*</span>
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="018XXXXXXXX or 015XXXXXXXX"
                          className="w-full px-4 py-3 rounded-xl border border-[#E2E9EB] text-sm focus:outline-none focus:ring-2 focus:ring-[#4F67FF] transition-all bg-[#F8FAFC]"
                        />
                      </div>

                      {/* Message */}
                      <div>
                        <label
                          htmlFor="contact-msg"
                          className="block text-xs font-bold uppercase tracking-wider text-[#3B3B3D] mb-1.5"
                        >
                          Your Message / Course Inquiry <span className="text-[#ED1C24]">*</span>
                        </label>
                        <textarea
                          id="contact-msg"
                          rows={4}
                          required
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Tell us what course you are interested in, your preferred schedule, or any specific questions..."
                          className="w-full px-4 py-3 rounded-xl border border-[#E2E9EB] text-sm focus:outline-none focus:ring-2 focus:ring-[#4F67FF] transition-all bg-[#F8FAFC]"
                        />
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="mt-2 w-full inline-flex items-center justify-center gap-2 bg-[#ED1C24] hover:bg-[#C81017] disabled:opacity-60 text-white font-extrabold text-sm sm:text-base py-3.5 rounded-full transition-all duration-200 shadow-md shadow-red-500/20 hover:shadow-lg hover:scale-[1.01] active:scale-[0.99]"
                      >
                        <Send className="w-4 h-4" />
                        <span>{isSubmitting ? "Sending Message..." : "Send Message"}</span>
                      </button>

                      <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#54595F]">
                        <Lock className="w-3.5 h-3.5" />
                        <span>Your information is protected and used strictly for academic support.</span>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Right Column: Google Maps Embed & Campus Hours (6 cols) */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              {/* Google Maps Embed */}
              <div className="bg-white rounded-3xl p-5 border border-[#E2E9EB] padora-card-shadow overflow-hidden">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#3B3B3D] flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-[#F73775]" />
                    <span>Campus Location Map</span>
                  </span>
                  <a
                    href="https://maps.google.com/?q=College+Road,+Feni"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#4F67FF] hover:underline inline-flex items-center gap-1"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="relative w-full h-[320px] sm:h-[360px] rounded-2xl overflow-hidden border border-[#E2E9EB]">
                  <iframe
                    title="The Educatee Centre Feni Campus Map"
                    src={contact.mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>
              </div>

              {/* Opening Hours & Lift Instructions Card */}
              <div className="bg-white rounded-3xl p-7 border border-[#E2E9EB] padora-card-shadow flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF9EB] text-[#B87C00] flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-[#3B3B3D] font-[var(--font-nunito)]">
                      Campus Opening Hours
                    </h3>
                    {/* TODO: Confirm weekend / Friday operating hours with administration */}
                    <p className="text-xs text-[#54595F]">
                      {contact.openingHours}
                    </p>
                  </div>
                </div>

                {/* PROMINENT LIFT NOTE CALLOUT */}
                <div className="bg-[#FFF9EB] border border-[#E2E9EB] rounded-2xl p-4 text-xs sm:text-sm text-[#3B3B3D] leading-relaxed">
                  <strong className="text-[#B87C00] block uppercase tracking-wider mb-1 font-extrabold">
                    Important Campus Finding Tip:
                  </strong>
                  The Educatee Centre is on the <strong>5th floor</strong> of Appayan Afroz Tower. When entering the elevator, please <strong>press the 4th floor button</strong> to arrive directly at our front reception.
                </div>

                {/* Direct quick buttons */}
                <div className="pt-2 flex flex-wrap gap-3">
                  <a
                    href={`tel:${contact.primaryPhone.replace(/-/g, "")}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[#4F67FF] hover:bg-[#3850EB] text-white font-bold text-xs py-3 px-4 rounded-full transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Desk</span>
                  </a>

                  <a
                    href={contact.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[#00CDC4] hover:bg-[#04B9B1] text-white font-bold text-xs py-3 px-4 rounded-full transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
