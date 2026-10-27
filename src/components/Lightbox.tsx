"use client";

import React, { useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export interface LightboxImage {
  src: string;
  alt: string;
  title?: string;
  caption?: string;
}

interface LightboxProps {
  images: LightboxImage[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function Lightbox({
  images,
  currentIndex,
  onClose,
  onNavigate,
}: LightboxProps) {
  const currentImage = images[currentIndex];

  const handlePrev = useCallback(() => {
    onNavigate((currentIndex - 1 + images.length) % images.length);
  }, [currentIndex, images.length, onNavigate]);

  const handleNext = useCallback(() => {
    onNavigate((currentIndex + 1) % images.length);
  }, [currentIndex, images.length, onNavigate]);

  // Keyboard navigation (Esc to close, Left/Right arrows to navigate)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [onClose, handlePrev, handleNext]);

  if (!currentImage) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.24 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6"
        role="dialog"
        aria-modal="true"
        aria-label="Image gallery fullscreen preview"
        onClick={onClose}
      >
        {/* Top bar controls */}
        <div
          className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-20 pointer-events-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 text-xs font-semibold">
            <span>{currentIndex + 1}</span>
            <span className="text-white/60 mx-1">/</span>
            <span className="text-white/80">{images.length}</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="Close image preview"
          >
            <svg
              className="w-5 h-5 fill-none stroke-current stroke-2"
              viewBox="0 0 24 24"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Previous Button */}
        {images.length > 1 && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/15 hover:bg-white/30 border border-white/20 text-white flex items-center justify-center transition-all z-20 shadow-lg"
            aria-label="Previous image"
          >
            <svg
              className="w-6 h-6 fill-none stroke-current stroke-2"
              viewBox="0 0 24 24"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
        )}

        {/* Next Button */}
        {images.length > 1 && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/15 hover:bg-white/30 border border-white/20 text-white flex items-center justify-center transition-all z-20 shadow-lg"
            aria-label="Next image"
          >
            <svg
              className="w-6 h-6 fill-none stroke-current stroke-2"
              viewBox="0 0 24 24"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        )}

        {/* Modal Center Content */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center justify-center z-10"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative w-full h-[55vh] sm:h-[65vh] md:h-[70vh] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black/40">
            <Image
              src={currentImage.src}
              alt={currentImage.alt}
              fill
              sizes="(max-width: 1024px) 95vw, 1000px"
              className="object-contain"
              priority
            />
          </div>

          {/* Caption Box */}
          {(currentImage.title || currentImage.caption) && (
            <div className="mt-3 text-center max-w-2xl px-4 text-white">
              {currentImage.title && (
                <h4 className="text-base sm:text-lg font-bold text-white font-[var(--font-nunito)]">
                  {currentImage.title}
                </h4>
              )}
              {currentImage.caption && (
                <p className="text-xs sm:text-sm text-white/80 mt-1 leading-relaxed">
                  {currentImage.caption}
                </p>
              )}
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
