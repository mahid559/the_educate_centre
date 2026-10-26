"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { siteContent } from "@/data/content";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [programsDropdownOpen, setProgramsDropdownOpen] = useState(false);
  const pathname = usePathname();

  const { contact, programs } = siteContent;

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Admissions & Fees", href: "/admissions" },
    { label: "Success Stories", href: "/success" },
    { label: "Events & Gallery", href: "/events" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true;
    if (href !== "/" && pathname?.startsWith(href)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 w-full pt-2 pb-2 md:pt-4 md:pb-4 transition-all bg-white/90 backdrop-blur-md border-b border-[#E2E9EB]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl md:rounded-full px-4 md:px-7 py-3 flex items-center justify-between padora-card-shadow border border-[#E2E9EB]/80">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F67FF] rounded-lg"
            aria-label="The Educatee Centre Home"
          >
            <div className="relative w-[190px] h-[48px] sm:w-[220px] sm:h-[52px]">
              <Image
                src="/logo.svg"
                alt="The Educatee Centre Logo"
                fill
                priority
                className="object-contain object-left transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-semibold text-[#3B3B3D]" aria-label="Main Navigation">
            <Link
              href="/"
              className={`transition-colors hover:text-[#4F67FF] ${
                isActive("/") ? "text-[#4F67FF]" : ""
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`transition-colors hover:text-[#4F67FF] ${
                isActive("/about") ? "text-[#4F67FF]" : ""
              }`}
            >
              About
            </Link>

            {/* Programs Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProgramsDropdownOpen(true)}
              onMouseLeave={() => setProgramsDropdownOpen(false)}
            >
              <button
                type="button"
                className={`flex items-center gap-1 transition-colors hover:text-[#4F67FF] py-2 ${
                  pathname?.startsWith("/programs") ? "text-[#4F67FF]" : ""
                }`}
                aria-expanded={programsDropdownOpen}
              >
                <span>Programs</span>
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    programsDropdownOpen ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              <AnimatePresence>
                {programsDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.16 }}
                    className="absolute left-0 top-full mt-1 w-72 bg-white rounded-2xl padora-card-shadow border border-[#E2E9EB] p-2 z-50"
                  >
                    <Link
                      href="/programs"
                      className="block px-3.5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-[#4F67FF] hover:bg-[#EFF1FB] transition-colors"
                      onClick={() => setProgramsDropdownOpen(false)}
                    >
                      All Programs Overview →
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
              className={`transition-colors hover:text-[#4F67FF] ${
                isActive("/admissions") ? "text-[#4F67FF]" : ""
              }`}
            >
              Admissions
            </Link>

            <Link
              href="/success"
              className={`transition-colors hover:text-[#4F67FF] ${
                isActive("/success") ? "text-[#4F67FF]" : ""
              }`}
            >
              Success
            </Link>

            <Link
              href="/events"
              className={`transition-colors hover:text-[#4F67FF] ${
                isActive("/events") ? "text-[#4F67FF]" : ""
              }`}
            >
              Events
            </Link>

            <Link
              href="/contact"
              className={`transition-colors hover:text-[#4F67FF] ${
                isActive("/contact") ? "text-[#4F67FF]" : ""
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Action: Phone & Demo CTA */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${contact.primaryPhone.replace(/-/g, "")}`}
              className="hidden xl:flex items-center gap-1.5 text-xs font-bold text-[#3B3B3D] hover:text-[#4F67FF] transition-colors px-2 py-1"
              aria-label={`Call ${contact.primaryPhone}`}
            >
              <span className="w-7 h-7 rounded-full bg-[#EFF1FB] text-[#4F67FF] flex items-center justify-center">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
                </svg>
              </span>
              <span>{contact.primaryPhone}</span>
            </a>

            <Link
              href="#free-demo"
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
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
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
            className="lg:hidden bg-white border-b border-[#E2E9EB] shadow-xl overflow-hidden mt-2"
          >
            <div className="max-w-[1240px] mx-auto px-5 py-5 flex flex-col gap-3">
              <Link
                href="/"
                className="py-2 text-base font-bold text-[#3B3B3D] hover:text-[#4F67FF]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="py-2 text-base font-bold text-[#3B3B3D] hover:text-[#4F67FF]"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <div className="py-1">
                <Link
                  href="/programs"
                  className="block text-base font-bold text-[#4F67FF]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  All Courses &amp; Programs
                </Link>
                <div className="pl-3 mt-2 flex flex-col gap-2 border-l-2 border-[#EFF1FB]">
                  {programs.map((p) => (
                    <Link
                      key={p.id}
                      href={`/programs/${p.slug}`}
                      className="text-sm text-[#54595F] hover:text-[#4F67FF]"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {p.title}
                    </Link>
                  ))}
                </div>
              </div>
              <Link
                href="/admissions"
                className="py-2 text-base font-bold text-[#3B3B3D] hover:text-[#4F67FF]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Admissions &amp; Fees
              </Link>
              <Link
                href="/success"
                className="py-2 text-base font-bold text-[#3B3B3D] hover:text-[#4F67FF]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Student Success Stories
              </Link>
              <Link
                href="/events"
                className="py-2 text-base font-bold text-[#3B3B3D] hover:text-[#4F67FF]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Events &amp; Gallery
              </Link>
              <Link
                href="/contact"
                className="py-2 text-base font-bold text-[#3B3B3D] hover:text-[#4F67FF]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact &amp; Location
              </Link>

              <div className="pt-3 border-t border-[#E2E9EB] flex flex-col gap-3">
                <a
                  href={`tel:${contact.primaryPhone.replace(/-/g, "")}`}
                  className="flex items-center justify-center gap-2 py-2.5 rounded-full bg-[#EFF1FB] text-[#4F67FF] font-bold text-sm"
                >
                  Call {contact.primaryPhone}
                </a>
                <Link
                  href="#free-demo"
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
