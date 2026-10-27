"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { siteContent } from "@/data/content";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [programsDropdownOpen, setProgramsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const { contact, programs } = siteContent;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true;
    if (href !== "/" && pathname?.startsWith(href)) return true;
    return false;
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-2 md:py-2.5 border-b border-[#E2E9EB]"
          : "bg-white/90 backdrop-blur-sm py-2.5 md:py-3.5 border-b border-[#E2E9EB]/60"
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl md:rounded-full px-4 md:px-7 py-2 sm:py-2.5 flex items-center justify-between padora-card-shadow border border-[#E2E9EB]/80">
          {/* Authentic Logo (Transparent background, no black box) */}
          <Link
            href="/"
            className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F67FF] rounded-xl"
            aria-label="The Educatee Centre Home"
          >
            <div className="relative w-[170px] h-[42px] sm:w-[195px] sm:h-[46px] flex items-center">
              <Image
                src="/logo.png"
                alt="The Educatee Centre"
                fill
                priority
                unoptimized
                className="object-contain object-left transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>
          </Link>

          {/* Desktop Navigation (Exact 5 items: Home, About, Programs dropdown, Admissions & Fees, Contact) */}
          <nav
            className="hidden lg:flex items-center gap-7 xl:gap-8 text-sm font-semibold text-[#3B3B3D]"
            aria-label="Main Navigation"
          >
            <Link
              href="/"
              className={`transition-colors hover:text-[#4F67FF] py-1 relative ${
                isActive("/") ? "text-[#4F67FF] font-bold" : ""
              }`}
            >
              Home
              {isActive("/") && (
                <span className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-[#4F67FF] rounded-full" />
              )}
            </Link>

            <Link
              href="/about"
              className={`transition-colors hover:text-[#4F67FF] py-1 relative ${
                isActive("/about") ? "text-[#4F67FF] font-bold" : ""
              }`}
            >
              About
              {isActive("/about") && (
                <span className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-[#4F67FF] rounded-full" />
              )}
            </Link>

            {/* Programs Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProgramsDropdownOpen(true)}
              onMouseLeave={() => setProgramsDropdownOpen(false)}
            >
              <button
                type="button"
                className={`flex items-center gap-1.5 transition-colors hover:text-[#4F67FF] py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F67FF] rounded-lg relative ${
                  pathname?.startsWith("/programs") ? "text-[#4F67FF] font-bold" : ""
                }`}
                aria-expanded={programsDropdownOpen}
                aria-haspopup="true"
              >
                <span>Programs</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    programsDropdownOpen ? "rotate-180" : ""
                  }`}
                />
                {pathname?.startsWith("/programs") && (
                  <span className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-[#4F67FF] rounded-full" />
                )}
              </button>

              <AnimatePresence>
                {programsDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.16 }}
                    className="absolute left-0 top-full mt-2 w-80 bg-white rounded-2xl padora-card-shadow border border-[#E2E9EB] p-2.5 z-50 shadow-2xl"
                  >
                    <Link
                      href="/programs"
                      className="flex items-center justify-between px-3.5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-[#4F67FF] bg-[#EFF1FB] hover:bg-[#E2E9EB] transition-colors mb-1"
                      onClick={() => setProgramsDropdownOpen(false)}
                    >
                      <span>All Programs Overview</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <div className="h-px bg-[#E2E9EB] my-1" />
                    {programs.map((program) => (
                      <Link
                        key={program.id}
                        href={`/programs/${program.slug}`}
                        className="flex flex-col px-3.5 py-2 rounded-xl hover:bg-[#EFF1FB] transition-colors group"
                        onClick={() => setProgramsDropdownOpen(false)}
                      >
                        <span className="text-sm font-semibold text-[#3B3B3D] group-hover:text-[#4F67FF] transition-colors">
                          {program.title}
                        </span>
                        <span className="text-xs text-[#54595F] line-clamp-1">
                          {program.subtitle}
                        </span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/admissions"
              className={`transition-colors hover:text-[#4F67FF] py-1 relative ${
                isActive("/admissions") ? "text-[#4F67FF] font-bold" : ""
              }`}
            >
              Admissions &amp; Fees
              {isActive("/admissions") && (
                <span className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-[#4F67FF] rounded-full" />
              )}
            </Link>

            <Link
              href="/contact"
              className={`transition-colors hover:text-[#4F67FF] py-1 relative ${
                isActive("/contact") ? "text-[#4F67FF] font-bold" : ""
              }`}
            >
              Contact
              {isActive("/contact") && (
                <span className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-[#4F67FF] rounded-full" />
              )}
            </Link>
          </nav>

          {/* Right Action: Phone & Demo CTA */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${contact.primaryPhone.replace(/-/g, "")}`}
              className="hidden xl:flex items-center gap-2 text-xs font-bold text-[#3B3B3D] hover:text-[#4F67FF] transition-colors px-2 py-1"
              aria-label={`Call ${contact.primaryPhone}`}
            >
              <span className="w-7 h-7 rounded-full bg-[#EFF1FB] text-[#4F67FF] flex items-center justify-center">
                <Phone className="w-3.5 h-3.5" />
              </span>
              <span>{contact.primaryPhone}</span>
            </a>

            <Link
              href="/admissions#free-demo"
              className="hidden sm:inline-flex items-center justify-center bg-[#00CDC4] hover:bg-[#04B9B1] text-white font-bold text-xs sm:text-sm px-5 sm:px-6 py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
            >
              Book Free Demo
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-[#3B3B3D] hover:bg-[#EFF1FB] focus:outline-none focus:ring-2 focus:ring-[#4F67FF]"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden bg-white border-b border-[#E2E9EB] shadow-2xl overflow-hidden mt-2"
          >
            <div className="max-w-[1240px] mx-auto px-5 py-5 flex flex-col gap-3">
              <Link
                href="/"
                className={`py-2 text-base font-bold transition-colors ${
                  isActive("/") ? "text-[#4F67FF]" : "text-[#3B3B3D] hover:text-[#4F67FF]"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>

              <Link
                href="/about"
                className={`py-2 text-base font-bold transition-colors ${
                  isActive("/about") ? "text-[#4F67FF]" : "text-[#3B3B3D] hover:text-[#4F67FF]"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>

              <div className="py-1">
                <Link
                  href="/programs"
                  className="block text-base font-bold text-[#4F67FF]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Programs (All Courses)
                </Link>
                <div className="pl-3 mt-2 flex flex-col gap-2 border-l-2 border-[#EFF1FB]">
                  {programs.map((p) => (
                    <Link
                      key={p.id}
                      href={`/programs/${p.slug}`}
                      className="text-sm text-[#54595F] hover:text-[#4F67FF] py-0.5"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {p.title}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/admissions"
                className={`py-2 text-base font-bold transition-colors ${
                  isActive("/admissions") ? "text-[#4F67FF]" : "text-[#3B3B3D] hover:text-[#4F67FF]"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Admissions &amp; Fees
              </Link>

              <Link
                href="/contact"
                className={`py-2 text-base font-bold transition-colors ${
                  isActive("/contact") ? "text-[#4F67FF]" : "text-[#3B3B3D] hover:text-[#4F67FF]"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>

              <div className="pt-3 border-t border-[#E2E9EB] flex flex-col gap-3">
                <a
                  href={`tel:${contact.primaryPhone.replace(/-/g, "")}`}
                  className="flex items-center justify-center gap-2 py-2.5 rounded-full bg-[#EFF1FB] text-[#4F67FF] font-bold text-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {contact.primaryPhone}</span>
                </a>
                <Link
                  href="/admissions#free-demo"
                  className="flex items-center justify-center py-3 rounded-full bg-[#00CDC4] text-white font-bold text-sm shadow-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Book a Free Demo Class
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
