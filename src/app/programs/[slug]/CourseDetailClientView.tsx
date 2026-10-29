"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Clock,
  Calendar,
  DollarSign,
  Users,
  MessageCircle,
  ChevronDown,
  MapPin,
} from "lucide-react";
import { Course, siteContent } from "@/data/content";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SectionHeading } from "@/components/SectionHeading";
import { CourseCard } from "@/components/CourseCard";
import { CTABanner } from "@/components/CTABanner";
import { DemoForm } from "@/components/DemoForm";
import { cardLiftProps } from "@/lib/motion";

interface CourseDetailClientViewProps {
  course: Course;
  relatedCourses: Course[];
}

export function CourseDetailClientView({
  course,
  relatedCourses,
}: CourseDetailClientViewProps) {
  const { contact } = siteContent;
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <>
      {/* 1. Course Hero Section */}
      <section className="relative overflow-hidden bg-[#4F67FF] text-white pt-28 pb-14 sm:pt-32 md:pt-36 md:pb-20 lg:pt-40 lg:pb-24">
        {/* Background Decorative Curves */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden"
          aria-hidden="true"
        >
          <svg
            className="absolute -top-32 -left-32 w-[500px] h-[500px]"
            viewBox="0 0 600 600"
            fill="none"
          >
            <path
              d="M100 200C180 80 320 120 400 240C480 360 420 500 300 520C180 540 80 440 60 340C40 240 20 320 100 200Z"
              stroke="white"
              strokeWidth="3"
              strokeDasharray="8 8"
            />
          </svg>
          <svg
            className="absolute -bottom-36 right-0 w-[550px] h-[550px]"
            viewBox="0 0 700 700"
            fill="none"
          >
            <path
              d="M150 350C100 200 250 100 450 150C650 200 680 400 580 550C480 700 280 650 200 550C120 450 200 500 150 350Z"
              stroke="white"
              strokeWidth="2.5"
            />
          </svg>
        </div>

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Programs", href: "/programs" },
                { label: course.title },
              ]}
              variant="light"
            />

            {/* Category Tag */}
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/25 rounded-full px-4 py-1.5 mb-4 text-xs font-bold tracking-wide uppercase text-white shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#FFC73B] animate-pulse" />
              <span>{course.category} Specialization</span>
              {course.badge && (
                <>
                  <span className="text-white/40">•</span>
                  <span className="text-[#FFC73B] font-extrabold">{course.badge}</span>
                </>
              )}
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.14] tracking-tight !text-white mb-4 font-[var(--font-nunito)]">
              {course.title}
            </h1>

            <p className="text-base sm:text-lg text-white/85 mb-2 font-semibold">
              {course.subtitle}
            </p>

            <p className="text-base sm:text-lg md:text-xl text-white/95 leading-relaxed font-normal mb-8 max-w-2xl">
              {course.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="#demo-form"
                className="inline-flex items-center justify-center bg-[#ED1C24] hover:bg-[#C81017] text-white font-extrabold text-sm sm:text-base px-8 py-4 rounded-full transition-all duration-200 shadow-xl shadow-red-900/30 hover:scale-[1.02] active:scale-[0.98]"
              >
                Book a Free Demo Class
              </Link>

              <a
                href={contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border-2 border-white/40 font-bold text-sm sm:text-base px-7 py-3.5 rounded-full transition-all duration-200 backdrop-blur-sm"
              >
                <MessageCircle className="w-4 h-4 text-[#00CDC4]" />
                <span>WhatsApp Admission Desk</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Content Body with Sticky Quick Info Card */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
            {/* Left Content (8 cols) */}
            <div className="lg:col-span-8 flex flex-col gap-12">
              {/* Overview & Feature Highlights */}
              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#F73775] block mb-2">
                  COURSE OVERVIEW
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3B3B3D] font-[var(--font-ubuntu)] mb-4">
                  Why Take This Course at Educatee?
                </h2>
                <p className="text-base sm:text-lg text-[#54595F] leading-relaxed mb-6">
                  {course.description} Classes are conducted in our modern, air-conditioned campus on the 5th floor of Appayan Afroz Tower, College Road, Feni. We emphasize practical repetition, patient mentorship, and immediate feedback over rigid memorization.
                </p>

                {/* Key Highlights Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  {course.keyHighlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="bg-[#EFF1FB]/60 p-4 rounded-2xl border border-[#E2E9EB] flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#4F67FF] flex-shrink-0 mt-0.5" />
                      <span className="text-sm font-semibold text-[#3B3B3D]">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Special Tier Comparison Cards for IELTS */}
              {course.slug === "ielts-preparation" && course.tiers && (
                <div className="pt-6 border-t border-[#E2E9EB]">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#F73775] block mb-2">
                    SPECIALIZED TRACKS
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3B3B3D] font-[var(--font-ubuntu)] mb-3">
                    Choose Your IELTS Preparation Tier
                  </h2>
                  <p className="text-sm sm:text-base text-[#54595F] leading-relaxed mb-8">
                    Strictly small batches with a maximum of 16 students per class. Free Cambridge authentic mock tests are included across all tracks.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {course.tiers.map((tier, tIdx) => {
                      const tierStyles = [
                        {
                          cardBg: "bg-[#F73775] text-white",
                          badgeBg: "bg-white text-[#F73775]",
                          titleColor: "text-white",
                          targetColor: "text-white/80",
                          descColor: "text-white/90",
                          chipBg: "bg-white/20 text-white border-white/20",
                          buttonBg: "bg-white text-[#3B3B3D] hover:bg-white/90",
                          dividerColor: "border-white/20",
                        },
                        {
                          cardBg: "bg-[#4F67FF] text-white",
                          badgeBg: "bg-white text-[#4F67FF]",
                          titleColor: "text-white",
                          targetColor: "text-white/80",
                          descColor: "text-white/90",
                          chipBg: "bg-white/20 text-white border-white/20",
                          buttonBg: "bg-white text-[#3B3B3D] hover:bg-white/90",
                          dividerColor: "border-white/20",
                        },
                        {
                          cardBg: "bg-[#00CDC4] text-white",
                          badgeBg: "bg-white text-[#008982]",
                          titleColor: "text-white",
                          targetColor: "text-white/80",
                          descColor: "text-white/90",
                          chipBg: "bg-white/20 text-white border-white/20",
                          buttonBg: "bg-white text-[#3B3B3D] hover:bg-white/90",
                          dividerColor: "border-white/20",
                        },
                      ];
                      const style = tierStyles[tIdx % tierStyles.length];

                      return (
                        <motion.div
                          key={tier.id}
                          {...cardLiftProps}
                          className={`${style.cardBg} rounded-[28px] p-6 sm:p-7 flex flex-col justify-between shadow-xl hover:shadow-2xl transition-all duration-300 relative`}
                        >
                          <div>
                            {tier.badge && (
                              <span className={`inline-block ${style.badgeBg} text-[11px] font-black uppercase px-3.5 py-1 rounded-full mb-3.5 shadow-sm`}>
                                {tier.badge}
                              </span>
                            )}

                            <h3 className={`text-xl sm:text-2xl font-extrabold font-[var(--font-ubuntu)] mb-1 ${style.titleColor}`}>
                              {tier.name}
                            </h3>
                            <p className={`text-xs font-bold mb-3 ${style.targetColor}`}>
                              Target: {tier.target}
                            </p>
                            <p className={`text-xs sm:text-sm ${style.descColor} leading-relaxed mb-6 font-normal`}>
                              {tier.description}
                            </p>

                            <ul className="flex flex-col gap-2 mb-6">
                              {tier.highlights.map((h, i) => (
                                <li key={i} className={`flex items-start gap-2 text-xs font-bold px-2.5 py-1.5 rounded-lg border ${style.chipBg}`}>
                                  <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 text-white" />
                                  <span>{h}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className={`pt-4 border-t ${style.dividerColor} text-center`}>
                            <span className={`text-xs font-bold block mb-3 ${style.targetColor}`}>
                              Batch Capped at 16 Students
                            </span>
                            <Link
                              href="#demo-form"
                              className={`w-full inline-flex items-center justify-center font-extrabold text-xs sm:text-sm py-3 px-4 rounded-xl shadow-md transition-all ${style.buttonBg} hover:scale-[1.02] active:scale-[0.98]`}
                            >
                              Select Track &amp; Book Demo
                            </Link>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Who is this course for? */}
              <div className="pt-6 border-t border-[#E2E9EB]">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#ED1C24] block mb-2">
                  TARGET AUDIENCE
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3B3B3D] font-[var(--font-ubuntu)] mb-6">
                  Who is This Course For?
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {course.targetAudience.map((audience, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-white border border-[#E2E9EB] padora-card-shadow flex items-start gap-3.5"
                    >
                      <span className="w-7 h-7 rounded-full bg-[#E6FAF9] text-[#00CDC4] flex items-center justify-center flex-shrink-0 font-bold text-xs">
                        {idx + 1}
                      </span>
                      <p className="text-sm font-semibold text-[#3B3B3D] leading-snug">
                        {audience}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* What You Will Learn (Curriculum Outline) */}
              <div className="pt-6 border-t border-[#E2E9EB]">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#ED1C24] block mb-2">
                  CURRICULUM MODULES
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3B3B3D] font-[var(--font-ubuntu)] mb-2">
                  What You Will Learn
                </h2>
                <p className="text-sm text-[#54595F] mb-6">
                  Editable placeholder syllabus designed for fast practical competence:
                </p>

                <div className="flex flex-col gap-3">
                  {course.curriculumOutline.map((moduleItem, idx) => (
                    <div
                      key={idx}
                      className="p-4 sm:p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E9EB] flex items-center gap-4 transition-colors hover:bg-[#EFF1FB]"
                    >
                      <span className="w-8 h-8 rounded-xl bg-[#4F67FF] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                        0{idx + 1}
                      </span>
                      <span className="text-sm sm:text-base font-bold text-[#3B3B3D]">
                        {moduleItem}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Course-Specific FAQ */}
              {course.faqs && course.faqs.length > 0 && (
                <div className="pt-6 border-t border-[#E2E9EB]">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#ED1C24] block mb-2">
                    COMMON QUESTIONS
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3B3B3D] font-[var(--font-ubuntu)] mb-6">
                    Frequently Asked Questions About This Course
                  </h2>

                  <div className="flex flex-col gap-3">
                    {course.faqs.map((faq, idx) => {
                      const isOpen = openFaqIndex === idx;

                      return (
                        <div
                          key={idx}
                          className={`rounded-2xl border transition-all overflow-hidden ${
                            isOpen
                              ? "border-[#4F67FF] bg-white padora-card-shadow"
                              : "border-[#E2E9EB] bg-[#F8FAFC]"
                          }`}
                        >
                          <button
                            type="button"
                            onClick={() => toggleFaq(idx)}
                            aria-expanded={isOpen}
                            className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                          >
                            <span className="text-base font-bold text-[#3B3B3D] font-[var(--font-nunito)]">
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
                                <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm text-[#54595F] leading-relaxed border-t border-[#E2E9EB]/60 pt-3">
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
              )}

              {/* Free Demo Form Section */}
              <div id="demo-form" className="pt-6 border-t border-[#E2E9EB] scroll-mt-24">
                <DemoForm defaultCourse={course.title} />
              </div>
            </div>

            {/* Right Column: Sticky Quick Info Card (4 cols) */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 flex flex-col gap-6">
                {/* Quick Info Box */}
                <div className="bg-white rounded-3xl p-7 border-2 border-[#4F67FF] padora-card-shadow">
                  <div className="relative w-full h-44 rounded-2xl overflow-hidden mb-6 bg-gray-100">
                    <Image
                      src={course.image}
                      alt={course.imageAlt}
                      fill
                      sizes="350px"
                      className="object-cover"
                    />
                    {course.badge && (
                      <span className="absolute top-3 left-3 bg-[#FFC73B] text-[#3B3B3D] text-[11px] font-black px-3 py-0.5 rounded-full shadow">
                        {course.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-extrabold text-[#3B3B3D] font-[var(--font-nunito)] mb-4">
                    Course Summary
                  </h3>

                  <div className="flex flex-col gap-4 text-sm pb-6 border-b border-[#E2E9EB]">
                    {/* Duration */}
                    <div className="flex items-start justify-between gap-2">
                      <span className="flex items-center gap-2 text-[#54595F]">
                        <Clock className="w-4 h-4 text-[#4F67FF]" />
                        <span>Duration</span>
                      </span>
                      {/* TODO: Update course duration once confirmed */}
                      <strong className="text-[#3B3B3D] text-right">
                        {course.duration}
                      </strong>
                    </div>

                    {/* Schedule */}
                    <div className="flex items-start justify-between gap-2">
                      <span className="flex items-center gap-2 text-[#54595F]">
                        <Calendar className="w-4 h-4 text-[#F73775]" />
                        <span>Schedule</span>
                      </span>
                      {/* TODO: Update course schedule once confirmed */}
                      <strong className="text-[#3B3B3D] text-right">
                        {course.schedule}
                      </strong>
                    </div>

                    {/* Fee */}
                    <div className="flex items-start justify-between gap-2">
                      <span className="flex items-center gap-2 text-[#54595F]">
                        <DollarSign className="w-4 h-4 text-[#00CDC4]" />
                        <span>Course Fee</span>
                      </span>
                      {/* TODO: Update course fee once confirmed */}
                      <strong className="text-[#3B3B3D] text-right">
                        {course.fee}
                      </strong>
                    </div>

                    {/* Batch Type */}
                    <div className="flex items-start justify-between gap-2">
                      <span className="flex items-center gap-2 text-[#54595F]">
                        <Users className="w-4 h-4 text-[#FFC73B]" />
                        <span>Batch Type</span>
                      </span>
                      {/* TODO: Update batch details once confirmed */}
                      <strong className="text-[#3B3B3D] text-right text-xs">
                        {course.batchType}
                      </strong>
                    </div>
                  </div>

                  <div className="pt-6 flex flex-col gap-3">
                    <Link
                      href="#demo-form"
                      className="w-full inline-flex items-center justify-center bg-[#ED1C24] hover:bg-[#C81017] text-white font-extrabold text-sm py-3.5 rounded-full transition-all shadow-md shadow-red-500/20 hover:scale-[1.01]"
                    >
                      Book Free Demo Class
                    </Link>

                    <a
                      href={contact.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#EFF1FB] hover:bg-[#E2E9EB] text-[#4F67FF] font-bold text-xs py-3 rounded-full transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp Inquiries</span>
                    </a>
                  </div>

                  <div className="mt-4 text-[11px] text-[#54595F] flex items-center justify-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#ED1C24] flex-shrink-0" />
                    <span>Appayan Afroz Tower, College Road, Feni (5th Floor)</span>
                  </div>
                </div>

                {/* Trust guarantee card */}
                <div className="bg-[#FFF9EB] p-5 rounded-2xl border border-[#E2E9EB] text-xs text-[#3B3B3D]">
                  <strong className="text-[#B87C00] block mb-1 font-bold">
                    100% Free Demo Guarantee:
                  </strong>
                  Sit in an actual class, ask questions, and test our methodology before paying any admission fee.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Free Demo Class Booking Form for this Course */}
      <section id="demo-form" className="py-20 md:py-24 bg-white relative scroll-mt-24 border-t border-[#E2E9EB]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="bg-[#4F67FF] rounded-3xl md:rounded-[3rem] p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden shadow-2xl">
            {/* Subtle Decorative Curves */}
            <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-white/10 blur-2xl pointer-events-none" />
            <div className="absolute -left-20 -top-20 w-72 h-72 rounded-full bg-[#FFC73B]/20 blur-2xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
              <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
                <span className="text-[#ED1C24] bg-white px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-widest mb-3 inline-block shadow-sm">
                  RESERVE YOUR SEAT
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight font-[var(--font-ubuntu)] mb-4">
                  Experience a Free Demo Class
                </h2>
                <p className="text-base sm:text-lg text-white/90 leading-relaxed mb-6 max-w-lg">
                  Sit in an actual class for <strong className="text-white font-bold">{course.title}</strong>, meet the instructor, and test our methodology before paying any admission fee.
                </p>

                <div className="flex flex-col gap-3 text-sm text-white/85">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00CDC4]" />
                    <span>100% Free — No hidden registration fee</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00CDC4]" />
                    <span>Interactive practice in friendly small batches</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00CDC4]" />
                    <span>Morning, afternoon &amp; evening batch slots available</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 w-full">
                <DemoForm defaultCourse={course.title} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Related Courses */}
      <section className="py-20 md:py-24 bg-[#EFF1FB]/50 relative border-t border-[#E2E9EB]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <SectionHeading
            tag="EXPLORE MORE"
            tagColor="red"
            title="Related Programs You Might Like"
            subtext="Discover more courses designed to accelerate your career and communication skills in Feni."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedCourses.map((relCourse, idx) => (
              <CourseCard key={relCourse.id} course={relCourse} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA Banner */}
      <CTABanner
        title={`Ready to Master ${course.title}?`}
        subtext="Seats are strictly limited to maintain personal mentorship and high engagement. Reserve your free demo seat today."
        primaryCtaText="Book a Free Demo Class"
        primaryCtaLink="#demo-form"
        badge="START YOUR JOURNEY"
      />
    </>
  );
}

export default CourseDetailClientView;
