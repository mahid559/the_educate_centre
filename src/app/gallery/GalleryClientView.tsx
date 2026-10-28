"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, Sparkles, Camera } from "lucide-react";
import { siteContent, CultureGalleryItem } from "@/data/content";
import { PageHero } from "@/components/PageHero";
import { Lightbox, LightboxImage } from "@/components/Lightbox";
import { CTABanner } from "@/components/CTABanner";

const CATEGORIES = [
  "All",
  "Awards & Honors",
  "Graduations & Celebrations",
  "Workshops & Seminars",
  "Classrooms & Campus",
  "Speaking Practice",
];

export default function GalleryClientView() {
  const { cultureGallery } = siteContent;
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  // Filter photos based on category
  const filteredPhotos = cultureGallery.filter((photo) => {
    if (activeCategory === "All") return true;
    if (activeCategory === "Awards & Honors") return photo.category === "Awards";
    if (activeCategory === "Graduations & Celebrations") {
      return photo.category === "Graduation" || photo.category === "Farewell";
    }
    if (activeCategory === "Workshops & Seminars") {
      return photo.category === "Workshops" || photo.category === "Seminars";
    }
    if (activeCategory === "Classrooms & Campus") {
      return photo.category === "Classrooms" || photo.category === "Campus";
    }
    if (activeCategory === "Speaking Practice") return photo.category === "Speaking";
    return true;
  });

  const lightboxImages: LightboxImage[] = filteredPhotos.map((item) => ({
    src: item.image,
    alt: item.imageAlt,
    title: item.title,
    caption: `${item.badge ? `${item.badge} • ` : ""}${item.caption}`,
  }));

  return (
    <>
      {/* 1. Page Hero */}
      <PageHero
        eyebrow="CAMPUS ARCHIVES & MOMENTS"
        title="Photo Gallery"
        accentText="&amp; Moments"
        subtext="Browse through memorable graduation ceremonies, interactive speaking circles, CEO Award honors, and modern IT classrooms at Appayan Afroz Tower, Feni."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Photo Gallery" },
        ]}
      />

      {/* 2. Gallery Main Section */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          {/* Header & Filter Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 pb-8 border-b border-[#E2E9EB]">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#ED1C24] block mb-1">
                FILTER ARCHIVES
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3B3B3D] font-[var(--font-ubuntu)]">
                Campus Highlights &amp; Celebrations
              </h2>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-[#ED1C24] text-white shadow-md shadow-red-500/20 scale-105"
                      : "bg-[#EFF1FB] text-[#54595F] hover:bg-[#E2E9EB] hover:text-[#3B3B3D]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Photo Count Status */}
          <div className="flex items-center justify-between text-xs sm:text-sm text-[#54595F] mb-8 font-semibold">
            <span className="flex items-center gap-1.5">
              <Camera className="w-4 h-4 text-[#ED1C24]" />
              <span>
                Showing {filteredPhotos.length} {filteredPhotos.length === 1 ? "photo" : "photos"}
                {activeCategory !== "All" && ` in "${activeCategory}"`}
              </span>
            </span>
            <span className="text-[11px] text-[#54595F]/80">
              Click any photo to enlarge
            </span>
          </div>

          {/* Gallery Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredPhotos.map((photo, index) => (
                <motion.div
                  key={photo.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setActiveLightboxIndex(index)}
                  className="relative rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer group shadow-md hover:shadow-2xl transition-all duration-300 border border-[#E2E9EB] bg-slate-900 h-72 sm:h-80"
                >
                  <Image
                    src={photo.image}
                    alt={photo.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                  {/* Top Badge */}
                  {photo.badge && (
                    <span className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-md text-[#3B3B3D] text-[11px] font-black px-3 py-0.5 rounded-full shadow">
                      {photo.badge}
                    </span>
                  )}

                  {/* Top Right Enlarge Icon */}
                  <span className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </span>

                  {/* Bottom Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 text-white">
                    <span className="text-[10px] font-bold text-[#FFC73B] uppercase tracking-wider block mb-0.5">
                      {photo.category}
                    </span>
                    <h3 className="text-sm sm:text-base font-extrabold font-[var(--font-ubuntu)] leading-snug line-clamp-2 mb-1">
                      {photo.title}
                    </h3>
                    <p className="text-[11px] text-white/80 line-clamp-1 group-hover:text-white transition-colors">
                      {photo.caption}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* 3. Lightbox Modal */}
      {activeLightboxIndex !== null && (
        <Lightbox
          images={lightboxImages}
          currentIndex={activeLightboxIndex}
          onClose={() => setActiveLightboxIndex(null)}
          onNavigate={(newIdx) => setActiveLightboxIndex(newIdx)}
        />
      )}

      {/* 4. Bottom CTA Banner */}
      <CTABanner
        title="Experience The Educatee Campus in Person"
        subtext="Meet Engr. Zahir sir, take a tour of our quiet 5th-floor classrooms, and join a free demo class at Appayan Afroz Tower, Feni."
        primaryCtaText="Book a Free Demo Class"
        primaryCtaLink="/admissions#free-demo"
        badge="JOIN OUR COMMUNITY"
      />
    </>
  );
}
