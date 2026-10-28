"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Maximize2, Camera } from "lucide-react";
import { siteContent } from "@/data/content";
import { PageHero } from "@/components/PageHero";
import { Lightbox, LightboxImage } from "@/components/Lightbox";
import { CTABanner } from "@/components/CTABanner";

export default function GalleryClientView() {
  const { cultureGallery } = siteContent;
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  // Pure images for the lightbox (no title or subtitle captions as requested)
  const lightboxImages: LightboxImage[] = cultureGallery.map((item) => ({
    src: item.image,
    alt: item.imageAlt,
  }));

  return (
    <>
      {/* 1. Page Hero */}
      <PageHero
        eyebrow="CAMPUS ARCHIVES & MOMENTS"
        title="Photo Gallery"
        accentText="&amp; Moments"
        subtext="Explore life at The Educatee Centre — captured moments from our interactive classrooms, celebrations, and learning community at Appayan Afroz Tower, Feni."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Photo Gallery" },
        ]}
      />

      {/* 2. Gallery Main Section */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          {/* Header & Photo Count Status */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-[#E2E9EB]">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#ED1C24] block mb-1">
                CAMPUS ARCHIVES
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3B3B3D] font-[var(--font-ubuntu)]">
                Our Memories &amp; Moments
              </h2>
            </div>

            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#54595F]">
              <span className="inline-flex items-center gap-1.5 bg-[#F8FAFC] border border-[#E2E9EB] px-4 py-2 rounded-full">
                <Camera className="w-4 h-4 text-[#ED1C24]" />
                <span>Showing {cultureGallery.length} Photos</span>
              </span>
              <span className="text-xs text-[#54595F]/70 hidden sm:inline">
                • Click any photo to view full size
              </span>
            </div>
          </div>

          {/* Pure Masonry Photo Grid — Zero Cropping, Natural Aspect Ratios */}
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-5 space-y-5 [column-fill:_balance]">
            {cultureGallery.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "50px" }}
                transition={{ duration: 0.35, delay: (index % 4) * 0.05 }}
                onClick={() => setActiveLightboxIndex(index)}
                className="break-inside-avoid relative rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer group shadow-sm hover:shadow-2xl transition-all duration-300 border border-[#E2E9EB]/80 bg-slate-100"
              >
                <div className="relative overflow-hidden w-full">
                  <Image
                    src={photo.image}
                    alt={photo.imageAlt}
                    width={photo.width}
                    height={photo.height}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="w-full h-auto block object-contain group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                  />

                  {/* Frosted Glass Scrim & Enlarge Badge on Hover */}
                  <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="w-11 h-11 rounded-full bg-white/30 backdrop-blur-md text-white border border-white/40 flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      <Maximize2 className="w-5 h-5" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
