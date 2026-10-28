"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Maximize2 } from "lucide-react";
import { siteContent } from "@/data/content";
import { Lightbox, LightboxImage } from "@/components/Lightbox";

export function EventsPreview() {
  const { cultureGallery } = siteContent;
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  // Take the first 6 featured gallery photos for the homepage
  const previewPhotos = cultureGallery.slice(0, 6);

  const lightboxImages: LightboxImage[] = cultureGallery.map((item) => ({
    src: item.image,
    alt: item.imageAlt,
    title: item.title,
    caption: `${item.badge ? `${item.badge} • ` : ""}${item.caption}`,
  }));

  return (
    <section className="py-20 md:py-28 bg-[#F8FAFC] relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Section Header with top-right 'View full gallery' button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-[#ED1C24] text-xs sm:text-sm font-extrabold uppercase tracking-widest block mb-2 font-[var(--font-nunito)]">
              PHOTO GALLERY &amp; CAMPUS MOMENTS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#3B3B3D] tracking-tight font-[var(--font-ubuntu)] leading-tight mb-3">
              Moments at The Educatee Centre
            </h2>
            <p className="text-base sm:text-lg text-[#54595F] leading-relaxed">
              From joyful graduation days and the prestigious CEO Award to lively
              interactive speaking circles and modern PC training in Feni.
            </p>
          </div>

          {/* Top Right Action Button */}
          <div className="flex-shrink-0 self-start md:self-auto">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 bg-[#ED1C24] hover:bg-[#C81017] text-white font-extrabold text-sm sm:text-base px-7 py-3.5 rounded-full transition-all duration-200 shadow-md shadow-red-500/20 hover:scale-[1.02] active:scale-[0.98] group"
            >
              <span>View Full Gallery</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Gallery Image Grid (Modern Bento Layout - No bulky text cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewPhotos.map((photo, index) => {
            const isFeatured = index === 0; // First item gets a prominent card aspect

            return (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                onClick={() => setActiveImageIndex(index)}
                className={`relative rounded-3xl overflow-hidden cursor-pointer group shadow-md hover:shadow-2xl transition-all duration-300 border border-[#E2E9EB] bg-slate-900 ${
                  isFeatured
                    ? "sm:col-span-2 lg:col-span-2 h-72 sm:h-88 lg:h-[360px]"
                    : "h-72 sm:h-88 lg:h-[360px]"
                }`}
              >
                {/* Real High-Resolution Image */}
                <Image
                  src={photo.image}
                  alt={photo.imageAlt}
                  fill
                  sizes={
                    isFeatured
                      ? "(max-width: 1024px) 100vw, 800px"
                      : "(max-width: 768px) 100vw, 420px"
                  }
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Smooth Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

                {/* Floating Category Badge */}
                {photo.badge && (
                  <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-[#3B3B3D] text-xs font-black px-3.5 py-1 rounded-full shadow-md">
                    {photo.badge}
                  </span>
                )}

                {/* Expand Icon on Top Right */}
                <span className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <Maximize2 className="w-4 h-4" />
                </span>

                {/* Bottom Caption & Title */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 text-white">
                  <span className="text-[11px] font-bold text-[#FFC73B] uppercase tracking-wider block mb-1">
                    {photo.category}
                  </span>
                  <h3 className="text-base sm:text-xl font-extrabold font-[var(--font-ubuntu)] leading-snug line-clamp-2 mb-1">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-white/80 line-clamp-1 group-hover:text-white transition-colors">
                    {photo.caption}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA for Mobile */}
        <div className="mt-12 text-center flex flex-col items-center justify-center gap-3">
          <Link
            href="/gallery"
            className="md:hidden inline-flex items-center gap-2 bg-[#ED1C24] hover:bg-[#C81017] text-white font-extrabold text-sm px-8 py-3.5 rounded-full shadow-md shadow-red-500/20"
          >
            <span>View Full Gallery ({cultureGallery.length} Photos)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <p className="text-xs text-[#54595F]">
            Want to see more event celebrations, awards, and classroom photos?{" "}
            <Link
              href="/gallery"
              className="font-bold text-[#ED1C24] hover:underline inline-flex items-center gap-1"
            >
              <span>Explore complete campus archives</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </p>
        </div>
      </div>

      {/* Lightbox Modal on Image Click */}
      {activeImageIndex !== null && (
        <Lightbox
          images={lightboxImages}
          currentIndex={activeImageIndex}
          onClose={() => setActiveImageIndex(null)}
          onNavigate={(newIdx) => setActiveImageIndex(newIdx)}
        />
      )}
    </section>
  );
}
