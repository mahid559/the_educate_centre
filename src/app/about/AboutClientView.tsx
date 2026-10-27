"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Heart,
  Laptop,
  UserCheck,
  PartyPopper,
  Award,
  Sparkles,
  CheckCircle,
  Eye,
} from "lucide-react";
import { siteContent } from "@/data/content";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { FeatureCard } from "@/components/FeatureCard";
import { CTABanner } from "@/components/CTABanner";
import { Lightbox, LightboxImage } from "@/components/Lightbox";
import { cardLiftProps } from "@/lib/motion";

export default function AboutClientView() {
  const { about, founder, facultyPlaceholders, facilities, cultureGallery } = siteContent;
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const getWhyLoveIcon = (id: string) => {
    switch (id) {
      case "love-1":
        return <Heart className="w-7 h-7 text-[#4F67FF]" />;
      case "love-2":
        return <Laptop className="w-7 h-7 text-[#F73775]" />;
      case "love-3":
        return <UserCheck className="w-7 h-7 text-[#00CDC4]" />;
      case "love-4":
      default:
        return <PartyPopper className="w-7 h-7 text-[#B87C00]" />;
    }
  };

  const lightboxImages: LightboxImage[] = cultureGallery.map((item) => ({
    src: item.image,
    alt: item.imageAlt,
    title: item.title,
    caption: `${item.badge ? `${item.badge} • ` : ""}${item.caption}`,
  }));

  return (
    <>
      {/* 1. Page Hero */}
      <PageHero
        eyebrow="ABOUT OUR INSTITUTION"
        title="About The Educatee Centre"
        accentText="Feni"
        subtext="Established in 2022. We are Feni's friendly learning sanctuary dedicated to removing the fear of English and building practical digital competencies."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
      />

      {/* 2. Our Story Section */}
      <section className="py-20 md:py-28 bg-white relative">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Story Image Blob Frame (5 cols) */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 relative flex justify-center"
            >
              <div className="relative">
                {/* Yellow organic background blob */}
                <div
                  className="absolute -inset-4 bg-[#FFC73B] rounded-[42%_58%_70%_30%_/_45%_45%_55%_55%] rotate-[-3deg] shadow-xl"
                  aria-hidden="true"
                />

                <div className="relative w-[280px] h-[340px] sm:w-[350px] sm:h-[420px] rounded-[40%_60%_65%_35%_/_42%_42%_58%_58%] overflow-hidden border-4 border-white shadow-2xl bg-white z-10">
                  <Image
                    src="/images/facilities/spoken-room.jpg"
                    alt="The Educatee Centre classroom in Feni"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-center hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="absolute -bottom-4 right-2 bg-white text-[#3B3B3D] px-4 py-2 rounded-full font-black text-xs shadow-lg border border-[#E2E9EB] z-20 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#FFC73B]" />
                  <span>Est. 2022 • Feni</span>
                </div>
              </div>
            </motion.div>

            {/* Story Text (7 cols) */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 flex flex-col items-start"
            >
              <span className="text-[#F73775] text-xs sm:text-sm font-extrabold uppercase tracking-widest mb-3">
                {about.story.tag}
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#3B3B3D] tracking-tight mb-6 font-[var(--font-ubuntu)] leading-tight">
                {about.story.title}
              </h2>

              <p className="text-base sm:text-lg text-[#54595F] leading-relaxed mb-4 font-normal">
                {about.story.paragraph1}
              </p>

              <p className="text-base sm:text-lg text-[#54595F] leading-relaxed mb-6 font-normal">
                {about.story.paragraph2}
              </p>

              {/* TODO comment for founding confirmation */}
              <div className="p-3 bg-[#EFF1FB] rounded-xl border border-[#E2E9EB] text-xs text-[#54595F] flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#4F67FF]" />
                <span>
                  {/* TODO: Confirm exact founding month/date in 2022 with Engr. Zahir Uddin Babar */}
                  Founded in 2022 at Appayan Afroz Tower, College Road, Feni.
                </span>
              </div>

              <Link
                href="/admissions#free-demo"
                className="inline-flex items-center justify-center bg-[#00CDC4] hover:bg-[#04B9B1] text-white font-extrabold text-sm sm:text-base px-8 py-3.5 rounded-full transition-all duration-200 shadow-md hover:scale-[1.02] active:scale-[0.98]"
              >
                Experience a Free Demo Class →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision Section */}
      <section className="py-20 md:py-24 bg-[#EFF1FB]/60 relative">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <SectionHeading
            tag="PURPOSE & DIRECTION"
            tagColor="blue"
            title="Our Guiding Mission & Vision"
            subtext="We believe fluency in English and mastery of IT are not privileges — they are practical tools every student in Feni can achieve with the right guidance."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Card (Padora Royal Blue) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              {...cardLiftProps}
              className="bg-[#4F67FF] text-white rounded-[28px] p-8 sm:p-10 shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-white text-[#4F67FF] flex items-center justify-center mb-6 shadow-md">
                  <Award className="w-7 h-7" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 font-[var(--font-ubuntu)] leading-tight">
                  {about.mission.title}
                </h3>
                <p className="text-base text-white/90 leading-relaxed font-normal">
                  {about.mission.description}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/20 text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white" />
                <span>Action-Driven Learning</span>
              </div>
            </motion.div>

            {/* Vision Card (Padora Vibrant Teal) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              {...cardLiftProps}
              className="bg-[#00CDC4] text-white rounded-[28px] p-8 sm:p-10 shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-white text-[#008982] flex items-center justify-center mb-6 shadow-md">
                  <Eye className="w-7 h-7" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 font-[var(--font-ubuntu)] leading-tight">
                  {about.vision.title}
                </h3>
                <p className="text-base text-white/90 leading-relaxed font-normal">
                  {about.vision.description}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/20 text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white" />
                <span>Long-Term Community Impact</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Why Students Love Us (4 Feature Cards) */}
      <section className="py-20 md:py-28 bg-white relative">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <SectionHeading
            tag="WHY STUDENTS LOVE US"
            tagColor="pink"
            title="Four Pillars That Make Educatee Different"
            subtext="From quiet, focused classrooms to personal founder mentorship, here is why students thrive at The Educatee Centre."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {about.whyLoveUs.map((card, idx) => (
              <FeatureCard
                key={card.id}
                title={card.title}
                description={card.description}
                accent={card.accent}
                icon={getWhyLoveIcon(card.id)}
                index={idx}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Founder Section (Engr. Zahir Uddin Babar) */}
      <section className="py-20 md:py-28 bg-[#EFF1FB]/50 relative overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl md:rounded-[3rem] p-8 sm:p-12 lg:p-16 border border-[#E2E9EB] padora-card-shadow relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Founder Photo (5 cols) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-5 flex justify-center"
              >
                <div className="relative">
                  <div
                    className="absolute -inset-3 bg-[#FFC73B] rounded-[2.5rem] rotate-2 shadow-md"
                    aria-hidden="true"
                  />
                  <div className="relative w-72 h-88 sm:w-80 sm:h-96 md:w-92 md:h-[420px] rounded-[2.2rem] overflow-hidden border-4 border-white shadow-xl bg-white z-10">
                    <Image
                      src={founder.image}
                      alt={founder.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 380px"
                      className="object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute -bottom-4 right-4 z-20 bg-[#4F67FF] text-white px-4 py-2 rounded-full font-black text-xs shadow-lg inline-flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-[#FFC73B]" />
                    <span>Founder, CEO &amp; Lead Instructor</span>
                  </div>
                </div>
              </motion.div>

              {/* Founder Details & Teaching Style (7 cols) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="lg:col-span-7 flex flex-col items-start"
              >
                <span className="text-[#F73775] text-xs sm:text-sm font-extrabold uppercase tracking-widest mb-2">
                  FOUNDER &amp; LEAD MENTOR
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

                {/* Founder Message Quote */}
                <div className="bg-[#EFF1FB] rounded-2xl p-6 sm:p-7 border border-[#E2E9EB] relative mb-6">
                  <p className="text-sm sm:text-base text-[#54595F] leading-relaxed italic">
                    &ldquo;{founder.message}&rdquo;
                  </p>
                </div>

                {/* Teaching Style Box */}
                <div className="p-5 rounded-2xl bg-[#FFF9EB] border border-[#FFC73B]/40 text-xs sm:text-sm text-[#3B3B3D] leading-relaxed mb-6">
                  <strong className="text-[#B87C00] block uppercase tracking-wider mb-1 font-bold">
                    Teaching Style &amp; Mentorship Philosophy:
                  </strong>
                  {founder.teachingStyle}
                </div>

                <Link
                  href="/admissions#free-demo"
                  className="inline-flex items-center justify-center bg-[#00CDC4] hover:bg-[#04B9B1] text-white font-extrabold text-sm px-7 py-3.5 rounded-full transition-all duration-200 shadow-md hover:scale-[1.02]"
                >
                  Join Engr. Zahir Sir&apos;s Free Demo Class
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Faculty Section (2 clearly marked placeholder cards) */}
      <section className="py-20 md:py-24 bg-white relative">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <SectionHeading
            tag="OUR INSTRUCTORS"
            tagColor="blue"
            title="Dedicated Faculty &amp; Academic Team"
            subtext="Our teaching faculty is personally trained and guided under Engr. Zahir Uddin Babar to maintain high standards of patience, clarity, and interactive teaching."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {facultyPlaceholders.map((fac, idx) => (
              <motion.div
                key={fac.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                {...cardLiftProps}
                className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-dashed border-[#CBD5E1] padora-card-shadow text-center flex flex-col items-center justify-between"
              >
                <div>
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-[#EFF1FB] bg-gray-100 shadow-md mb-4 mx-auto">
                    <Image
                      src={fac.image}
                      alt={fac.imageAlt}
                      fill
                      sizes="128px"
                      className="object-cover object-top"
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#3B3B3D] font-[var(--font-nunito)]">
                    {fac.name}
                  </h3>
                  <p className="text-xs font-bold text-[#4F67FF] mt-1">
                    {fac.role}
                  </p>
                  <p className="text-xs text-[#54595F] mt-1">
                    Specialty: {fac.specialty}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#E2E9EB] w-full">
                  <span className="text-[11px] font-semibold text-[#F73775] bg-[#FDEBF1] px-3 py-1 rounded-full inline-block">
                    {/* TODO: Add real name, role and verified photo */}
                    Faculty Profile (To be updated)
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Facilities Showcase (3 Cards: Spoken Room, Computer Lab, Quiet Environment) */}
      <section className="py-20 md:py-28 bg-[#EFF1FB]/60 relative">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <SectionHeading
            tag="CAMPUS FACILITIES"
            tagColor="teal"
            title="Designed for Deep Focus &amp; Practical Mastery"
            subtext="Step into our comfortable, modern 5th-floor campus at Appayan Afroz Tower. Every classroom is built for real interaction and distraction-free learning."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {facilities.map((fac, idx) => {
              const facStyles = [
                {
                  cardBg: "bg-[#4F67FF]",
                  titleColor: "text-white",
                  descColor: "text-white/90",
                  badgeBg: "bg-white text-[#4F67FF]",
                  chipBg: "bg-white/20 text-white border-white/20",
                  dividerColor: "border-white/20",
                  badgeText: "Language Studio",
                },
                {
                  cardBg: "bg-[#00CDC4]",
                  titleColor: "text-white",
                  descColor: "text-white/90",
                  badgeBg: "bg-white text-[#008982]",
                  chipBg: "bg-white/20 text-white border-white/20",
                  dividerColor: "border-white/20",
                  badgeText: "IT Training Lab",
                },
                {
                  cardBg: "bg-[#FFC73B]",
                  titleColor: "text-[#3B3B3D]",
                  descColor: "text-[#3B3B3D]/90",
                  badgeBg: "bg-[#3B3B3D] text-[#FFC73B]",
                  chipBg: "bg-black/10 text-[#3B3B3D] border-black/10",
                  dividerColor: "border-black/10",
                  badgeText: "Study Environment",
                },
              ];
              const style = facStyles[idx % facStyles.length];

              return (
                <motion.article
                  key={fac.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  {...cardLiftProps}
                  className={`${style.cardBg} rounded-[28px] p-6 sm:p-7 shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group`}
                >
                  <div>
                    {/* Inner Rounded Image Frame */}
                    <div className="relative w-full h-56 rounded-[20px] overflow-hidden bg-black/10 mb-5">
                      <Image
                        src={fac.image}
                        alt={fac.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, 380px"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className={`absolute top-3 left-3 text-xs font-black px-3.5 py-1 rounded-full shadow-md ${style.badgeBg}`}>
                        {style.badgeText}
                      </span>
                    </div>

                    <div>
                      <h3 className={`text-xl sm:text-2xl font-extrabold mb-3 font-[var(--font-ubuntu)] leading-tight ${style.titleColor}`}>
                        {fac.title}
                      </h3>
                      <p className={`text-xs sm:text-sm ${style.descColor} leading-relaxed mb-6 font-normal`}>
                        {fac.description}
                      </p>

                      <ul className="flex flex-col gap-2 mb-6">
                        {fac.features.map((feat, fIdx) => (
                          <li key={fIdx} className={`flex items-center gap-2 text-xs font-bold px-2.5 py-1.5 rounded-lg border ${style.chipBg}`}>
                            <CheckCircle className="w-3.5 h-3.5 flex-shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className={`pt-4 border-t ${style.dividerColor} flex items-center justify-between`}>
                    <span className={`text-[11px] font-bold uppercase tracking-wider ${style.descColor}`}>
                      5th Floor Campus • Lift Available
                    </span>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. Our Culture Section (Replaces old Events page) with Lightbox Image Strip */}
      <section className="py-20 md:py-28 bg-white relative">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <SectionHeading
            tag="OUR CULTURE &amp; CELEBRATIONS"
            tagColor="pink"
            title="Celebrations, Seminars &amp; Community Honors"
            subtext="Learning at Educatee is vibrant and celebratory. From our proud Graduation Day and Farewell Ceremonies to free educational seminars and the prestigious CEO Award, we honor every milestone."
          />

          {/* Quick Culture Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12">
            <div className="bg-[#EFF1FB] rounded-2xl p-5 text-center border border-[#E2E9EB]">
              <span className="text-xs font-bold text-[#4F67FF] uppercase block mb-1">
                Highest Honor
              </span>
              <h4 className="text-lg font-extrabold text-[#3B3B3D] font-[var(--font-nunito)]">
                CEO Award
              </h4>
              <p className="text-xs text-[#54595F] mt-1">
                Top student honor presented by Engr. Zahir sir
              </p>
            </div>

            <div className="bg-[#FDEBF1] rounded-2xl p-5 text-center border border-[#F73775]/20">
              <span className="text-xs font-bold text-[#F73775] uppercase block mb-1">
                Celebration
              </span>
              <h4 className="text-lg font-extrabold text-[#3B3B3D] font-[var(--font-nunito)]">
                Graduation Day
              </h4>
              <p className="text-xs text-[#54595F] mt-1">
                Certificates, speeches &amp; course completion
              </p>
            </div>

            <div className="bg-[#E6FAF9] rounded-2xl p-5 text-center border border-[#00CDC4]/20">
              <span className="text-xs font-bold text-[#00CDC4] uppercase block mb-1">
                Community
              </span>
              <h4 className="text-lg font-extrabold text-[#3B3B3D] font-[var(--font-nunito)]">
                Free Seminars
              </h4>
              <p className="text-xs text-[#54595F] mt-1">
                Public workshops on IELTS &amp; speaking fear
              </p>
            </div>

            <div className="bg-[#FFF9EB] rounded-2xl p-5 text-center border border-[#FFC73B]/30">
              <span className="text-xs font-bold text-[#B87C00] uppercase block mb-1">
                Fellowship
              </span>
              <h4 className="text-lg font-extrabold text-[#3B3B3D] font-[var(--font-nunito)]">
                Farewell Ceremony
              </h4>
              <p className="text-xs text-[#54595F] mt-1">
                Tea, heartfelt memories &amp; lifelong bonds
              </p>
            </div>
          </div>

          {/* Interactive Lightbox Image Strip (7 curated images) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {cultureGallery.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                onClick={() => setActiveLightboxIndex(index)}
                className={`relative rounded-2xl overflow-hidden cursor-pointer group shadow-sm hover:shadow-xl transition-all duration-300 border border-[#E2E9EB] ${
                  index === 0 ? "sm:col-span-2 sm:row-span-2 h-72 sm:h-full" : "h-48 sm:h-56"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes={
                    index === 0
                      ? "(max-width: 640px) 100vw, 600px"
                      : "(max-width: 640px) 50vw, 300px"
                  }
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                {item.badge && (
                  <span className="absolute top-3 left-3 bg-[#4F67FF] text-white text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full shadow">
                    {item.badge}
                  </span>
                )}

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h4 className="text-xs sm:text-sm font-bold font-[var(--font-nunito)] line-clamp-1">
                    {item.title}
                  </h4>
                  <span className="text-[10px] text-white/80 group-hover:text-white inline-flex items-center gap-1 mt-0.5">
                    Click to view full photo ⤢
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Culture Lightbox Modal */}
        {activeLightboxIndex !== null && (
          <Lightbox
            images={lightboxImages}
            currentIndex={activeLightboxIndex}
            onClose={() => setActiveLightboxIndex(null)}
            onNavigate={(newIdx) => setActiveLightboxIndex(newIdx)}
          />
        )}
      </section>

      {/* 9. Final CTA Banner */}
      <CTABanner
        title="Ready to Experience Our Inspiring Atmosphere?"
        subtext="Meet Engr. Zahir sir and our team in a 100% free, no-obligation demo class on the 5th floor of Appayan Afroz Tower, Feni."
        primaryCtaText="Book a Free Demo Class"
        primaryCtaLink="/admissions#free-demo"
        badge="JOIN THE EDUCATEE FAMILY"
      />
    </>
  );
}
