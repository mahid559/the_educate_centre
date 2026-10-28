"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ChevronDown,
  Phone,
  MessageCircle,
  MapPin,
  ArrowRight,
  GraduationCap,
  Compass,
  Briefcase,
  CheckCircle2,
} from "lucide-react";
import { siteContent } from "@/data/content";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { TestimonialCard } from "@/components/TestimonialCard";
import { DemoForm } from "@/components/DemoForm";
import { cardLiftProps } from "@/lib/motion";

export default function AdmissionsClientView() {
  const {
    admissionSteps,
    offers,
    programs,
    targetAudiences,
    testimonials,
    faqs,
    contact,
  } = siteContent;

  const [openFaqId, setOpenFaqId] = useState<string | null>("faq-1");

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const getAudienceIcon = (icon: string) => {
    switch (icon) {
      case "graduation-cap":
        return <GraduationCap className="w-7 h-7 text-[#F73775]" />;
      case "compass":
        return <Compass className="w-7 h-7 text-[#4F67FF]" />;
      case "briefcase":
        return <Briefcase className="w-7 h-7 text-[#00CDC4]" />;
      case "sparkles":
      default:
        return <Sparkles className="w-7 h-7 text-[#B87C00]" />;
    }
  };

  return (
    <>
      {/* 1. Page Hero */}
      <PageHero
        eyebrow="ENROLLMENT & TUITION"
        title="Admissions &amp; Fees"
        accentText="Guide"
        subtext="Clear 4-step admission process, special 50% discount offers, fee overview, and 100% free demo classes before every batch."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Admissions & Fees" },
        ]}
      />

      {/* 2. How to Enroll (Animated 4-Step Timeline) */}
      <section className="py-20 md:py-28 bg-white relative">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <SectionHeading
            tag="HOW TO ENROLL"
            tagColor="red"
            title="Your Path to Mastery in 4 Simple Steps"
            subtext="We believe in complete transparency. Experience our interactive classroom first-hand before making any financial commitment."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {admissionSteps.map((step, idx) => {
              const stepStyles = [
                {
                  cardBg: "bg-[#4F67FF] text-white",
                  badgeBg: "bg-white text-[#4F67FF]",
                  titleColor: "text-white",
                  descColor: "text-white/90",
                  dividerColor: "border-white/20",
                },
                {
                  cardBg: "bg-[#00CDC4] text-white",
                  badgeBg: "bg-white text-[#008982]",
                  titleColor: "text-white",
                  descColor: "text-white/90",
                  dividerColor: "border-white/20",
                },
                {
                  cardBg: "bg-[#FFC73B] text-[#3B3B3D]",
                  badgeBg: "bg-white text-[#B87C00]",
                  titleColor: "text-[#3B3B3D]",
                  descColor: "text-[#3B3B3D]/90",
                  dividerColor: "border-black/10",
                },
                {
                  cardBg: "bg-[#F73775] text-white",
                  badgeBg: "bg-white text-[#F73775]",
                  titleColor: "text-white",
                  descColor: "text-white/90",
                  dividerColor: "border-white/20",
                },
              ];
              const style = stepStyles[idx % stepStyles.length];

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.1 }}
                  {...cardLiftProps}
                  className={`${style.cardBg} rounded-[28px] p-7 sm:p-8 shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 relative flex flex-col justify-between`}
                >
                  <div>
                    <div className={`w-14 h-14 rounded-2xl ${style.badgeBg} flex items-center justify-center font-black text-2xl mb-6 shadow-md font-[var(--font-ubuntu)]`}>
                      {step.number}
                    </div>
                    <h3 className={`text-xl font-extrabold mb-2 font-[var(--font-ubuntu)] leading-tight ${style.titleColor}`}>
                      {step.title}
                    </h3>
                    <p className={`text-sm ${style.descColor} leading-relaxed`}>
                      {step.description}
                    </p>
                  </div>

                  <div className={`mt-6 pt-3 border-t ${style.dividerColor} text-[11px] font-bold uppercase tracking-wider ${style.descColor}`}>
                    Step {idx + 1} of 4
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              href="#free-demo"
              className="inline-flex items-center gap-2 bg-[#ED1C24] hover:bg-[#C81017] text-white font-extrabold text-sm sm:text-base px-8 py-3.5 rounded-full transition-all shadow-md shadow-red-500/20 hover:scale-[1.02]"
            >
              <span>Start With Step 1: Book Free Demo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Current Offers Section */}
      <section className="py-16 md:py-24 bg-[#EFF1FB]/50 relative border-y border-[#E2E9EB]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <SectionHeading
            tag="SPECIAL ADMISSION OFFERS"
            tagColor="red"
            title="Limited-Seat Intake Discounts"
            subtext="Take advantage of our community initiatives designed to encourage girls' education and early-bird IELTS candidates."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {offers.map((offer, idx) => {
              const offerStyles = [
                {
                  cardBg: "bg-[#F73775] text-white",
                  badgeBg: "bg-white text-[#F73775]",
                  titleColor: "text-white",
                  descColor: "text-white/90",
                  buttonBg: "bg-white text-[#F73775] hover:bg-white/90",
                  dividerColor: "border-white/20",
                },
                {
                  cardBg: "bg-[#00CDC4] text-white",
                  badgeBg: "bg-white text-[#008982]",
                  titleColor: "text-white",
                  descColor: "text-white/90",
                  buttonBg: "bg-white text-[#008982] hover:bg-white/90",
                  dividerColor: "border-white/20",
                },
              ];
              const style = offerStyles[idx % offerStyles.length];

              return (
                <motion.div
                  key={offer.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.1 }}
                  {...cardLiftProps}
                  className={`${style.cardBg} rounded-[28px] p-8 shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className={`${style.badgeBg} text-xs font-black uppercase px-3.5 py-1 rounded-full shadow-sm`}>
                        {offer.badge}
                      </span>
                      <span className="text-xs font-bold text-white/90">
                        Active Now
                      </span>
                    </div>

                    <h3 className={`text-2xl font-extrabold font-[var(--font-ubuntu)] mb-3 ${style.titleColor}`}>
                      {offer.title}
                    </h3>

                    <p className={`text-sm ${style.descColor} leading-relaxed mb-6`}>
                      {offer.description}
                    </p>
                  </div>

                  <div className={`pt-4 border-t ${style.dividerColor} flex items-center justify-between`}>
                    <span className={`text-xs font-semibold ${style.descColor}`}>
                      {offer.note}
                    </span>
                    <Link
                      href="#free-demo"
                      className={`inline-flex items-center gap-1.5 ${style.buttonBg} font-extrabold text-xs px-5 py-2.5 rounded-xl shadow-md transition-all hover:scale-105`}
                    >
                      <span>Claim Offer</span>
                      <span>→</span>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-8 text-center text-xs text-[#54595F]">
            * Note: Offers are applied upon formal batch registration at our Feni office. Seats are limited.
          </div>
        </div>
      </section>

      {/* 4. Course Fees & Schedules Table */}
      <section className="py-20 md:py-28 bg-white relative">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <SectionHeading
            tag="TUITION &amp; TIMELINE"
            tagColor="red"
            title="Course Fees &amp; Batch Schedules"
            subtext="Official fee schedules and upcoming batch timelines are confirmed before each intake. Contact us or attend a demo class for current details."
          />

          <div className="overflow-x-auto bg-white rounded-3xl border border-[#E2E9EB] padora-card-shadow">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-[#4F67FF] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider font-[var(--font-nunito)]">
                  <th className="py-4 px-6 rounded-tl-3xl">Course Name</th>
                  <th className="py-4 px-6">Category</th>
                  <th className="py-4 px-6">Fee</th>
                  <th className="py-4 px-6">Duration</th>
                  <th className="py-4 px-6">Batch Schedule</th>
                  <th className="py-4 px-6 rounded-tr-3xl text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E9EB] text-sm text-[#3B3B3D]">
                {programs.map((p, idx) => (
                  <tr
                    key={p.id}
                    className={`hover:bg-[#F8FAFC] transition-colors ${
                      idx % 2 === 1 ? "bg-[#EFF1FB]/30" : "bg-white"
                    }`}
                  >
                    <td className="py-4 px-6">
                      <div className="font-extrabold text-[#3B3B3D]">
                        {p.title}
                      </div>
                      <div className="text-xs text-[#54595F]">
                        {p.subtitle}
                      </div>
                    </td>
                    <td className="py-4 px-6 font-semibold text-[#4F67FF]">
                      {p.category}
                    </td>
                    <td className="py-4 px-6 font-bold text-[#F73775]">
                      {/* TODO: Confirm fee for next semester */}
                      {p.fee}
                    </td>
                    <td className="py-4 px-6 font-medium text-[#54595F]">
                      {/* TODO: Confirm duration for next semester */}
                      {p.duration}
                    </td>
                    <td className="py-4 px-6 font-medium text-[#54595F]">
                      {/* TODO: Confirm schedule for next semester */}
                      {p.schedule}
                    </td>
                    <td className="py-4 px-6 text-right">
                      <Link
                        href={`/programs/${p.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#4F67FF] hover:underline"
                      >
                        <span>Details</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 p-4 rounded-2xl bg-[#EFF1FB] border border-[#E2E9EB] text-xs text-[#54595F] text-center">
            {/* TODO: Update fee, duration and batch schedule once finalized by administration */}
            Fee and schedule details are updated periodically before intake dates. Call our admissions desk at 01874-232272 for exact current batch allocations.
          </div>
        </div>
      </section>

      {/* 5. Who Can Join Section */}
      <section className="py-20 md:py-24 bg-[#EFF1FB]/60 relative">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <SectionHeading
            tag="WHO IS ELIGIBLE"
            tagColor="red"
            title="Who Can Join The Educatee Centre?"
            subtext="Our programs are structured with progressive learning modules, welcoming students from diverse backgrounds and age groups."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetAudiences.map((group, idx) => {
              const audienceStyles = [
                {
                  cardBg: "bg-[#4F67FF] text-white",
                  iconBg: "bg-white text-[#4F67FF]",
                  titleColor: "text-white",
                  descColor: "text-white/90",
                  dividerColor: "border-white/20",
                  dotColor: "bg-white",
                },
                {
                  cardBg: "bg-[#00CDC4] text-white",
                  iconBg: "bg-white text-[#008982]",
                  titleColor: "text-white",
                  descColor: "text-white/90",
                  dividerColor: "border-white/20",
                  dotColor: "bg-white",
                },
                {
                  cardBg: "bg-[#FFC73B] text-[#3B3B3D]",
                  iconBg: "bg-white text-[#B87C00]",
                  titleColor: "text-[#3B3B3D]",
                  descColor: "text-[#3B3B3D]/90",
                  dividerColor: "border-black/10",
                  dotColor: "bg-[#3B3B3D]",
                },
                {
                  cardBg: "bg-[#F73775] text-white",
                  iconBg: "bg-white text-[#F73775]",
                  titleColor: "text-white",
                  descColor: "text-white/90",
                  dividerColor: "border-white/20",
                  dotColor: "bg-white",
                },
              ];
              const style = audienceStyles[idx % audienceStyles.length];

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  {...cardLiftProps}
                  className={`${style.cardBg} rounded-[28px] p-7 shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between`}
                >
                  <div>
                    <div className={`w-14 h-14 rounded-2xl ${style.iconBg} flex items-center justify-center mb-5 shadow-md`}>
                      {getAudienceIcon(group.icon)}
                    </div>
                    <h3 className={`text-xl font-extrabold mb-2 font-[var(--font-ubuntu)] leading-tight ${style.titleColor}`}>
                      {group.title}
                    </h3>
                    <p className={`text-sm ${style.descColor} leading-relaxed`}>
                      {group.description}
                    </p>
                  </div>

                  <div className={`mt-6 pt-4 border-t ${style.dividerColor} flex items-center gap-2 text-xs font-bold ${style.descColor}`}>
                    <span className={`w-2 h-2 rounded-full ${style.dotColor}`} />
                    <span>Eligible for all batches</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. What Students Say (3 Real Facebook Recommendations: Items 5, 6, 3) */}
      <section className="py-20 md:py-28 bg-white relative">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <SectionHeading
            tag="STUDENT VOICES"
            tagColor="red"
            title="What Students Say"
            subtext="Real experiences and honest feedback from students who achieved confidence and fluency at The Educatee Centre."
          />

          {/* Testimonial Cards: Items 5, 6, and 3 */}
          {(() => {
            const admissionsReviews = [
              testimonials.find((t) => t.id === "fb-5"),
              testimonials.find((t) => t.id === "fb-6"),
              testimonials.find((t) => t.id === "fb-3"),
            ].filter(Boolean) as typeof testimonials;

            return (
              <>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8">
                  {admissionsReviews.map((item, idx) => (
                    <div key={item.id} className="h-[190px]">
                      <TestimonialCard
                        item={item}
                        index={idx}
                        animate
                      />
                    </div>
                  ))}
                </div>

                <div className="text-center pt-2">
                  <a
                    href="https://www.facebook.com/TheEducatee.edu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#1877F2] hover:text-[#166FE5] transition-colors group px-4 py-2 rounded-full hover:bg-[#1877F2]/10"
                  >
                    <span>See what students say on Facebook</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </>
            );
          })()}
        </div>
      </section>

      {/* 7. Admission FAQ Accordion */}
      <section className="py-20 md:py-24 bg-[#EFF1FB]/50 relative border-t border-[#E2E9EB]">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6">
          <SectionHeading
            tag="HAVE QUESTIONS?"
            tagColor="red"
            title="Admission FAQs"
            subtext="Quick answers to common questions about admission requirements, batch timings, and demo classes."
          />

          <div className="flex flex-col gap-4">
            {faqs.map((faq) => {
              const isOpen = openFaqId === faq.id;

              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all overflow-hidden ${
                    isOpen
                      ? "border-[#4F67FF] bg-white padora-card-shadow"
                      : "border-[#E2E9EB] bg-white"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="text-base sm:text-lg font-bold text-[#3B3B3D] font-[var(--font-nunito)]">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#4F67FF] transition-transform duration-200 flex-shrink-0 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
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
        </div>
      </section>

      {/* 8. Free Demo Class Booking Form (Anchored with #free-demo) */}
      <section id="free-demo" className="py-20 md:py-28 bg-white relative scroll-mt-24">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="bg-[#4F67FF] rounded-3xl md:rounded-[3rem] p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
                <span className="text-[#ED1C24] bg-white px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-widest mb-3 inline-block shadow-sm">
                  START YOUR ADMISSION HERE
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight font-[var(--font-ubuntu)] mb-4">
                  Book Your Free Demo Class
                </h2>
                <p className="text-base sm:text-lg text-white/90 leading-relaxed mb-6 max-w-lg">
                  Submit the form in 30 seconds. We will contact you via WhatsApp / phone to schedule your free demo class at Appayan Afroz Tower.
                </p>

                <div className="flex flex-col gap-3 text-sm text-white/85">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00CDC4]" />
                    <span>No registration fee required for the demo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00CDC4]" />
                    <span>Separate Girls&apos; Batch available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00CDC4]" />
                    <span>IELTS capped at 16 students per batch</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <DemoForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Visit Us / Call Us Strip */}
      <section className="py-12 bg-[#EFF1FB] border-t border-[#E2E9EB]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3 text-[#3B3B3D]">
              <div className="w-12 h-12 rounded-full bg-white padora-card-shadow text-[#F73775] flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-sm sm:text-base">
                  {contact.address}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`tel:${contact.primaryPhone.replace(/-/g, "")}`}
                className="inline-flex items-center gap-2 bg-white hover:bg-[#F8FAFC] text-[#3B3B3D] border border-[#E2E9EB] font-bold text-xs sm:text-sm px-6 py-3 rounded-full transition-all shadow-sm hover:scale-[1.02]"
              >
                <Phone className="w-4 h-4 text-[#4F67FF]" />
                <span>Call {contact.primaryPhone}</span>
              </a>

              <a
                href={contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#00CDC4] hover:bg-[#04B9B1] text-white font-extrabold text-xs sm:text-sm px-6 py-3 rounded-full transition-all duration-200 shadow hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
