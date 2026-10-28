"use client";

import React from "react";
import Link from "next/link";
import { siteContent } from "@/data/content";

export function AnnouncementBar() {
  const { announcement, contact } = siteContent;

  if (!announcement.active) return null;

  return (
    <aside aria-label="Announcement" className="bg-[#0B0F19] text-white text-xs sm:text-sm font-medium border-b border-white/10">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-2 flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-left">
        {/* Contact Strip */}
        <div className="hidden lg:flex items-center gap-6 text-white/80 text-xs">
          <a
            href={`tel:${contact.primaryPhone.replace(/-/g, "")}`}
            className="flex items-center gap-1.5 hover:text-[#ED1C24] transition-colors"
          >
            <svg className="w-3.5 h-3.5 fill-[#ED1C24]" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
            </svg>
            <span>{contact.primaryPhone}</span>
          </a>
          <span className="text-white/40">•</span>
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z" />
            </svg>
            <span>Sat - Thu: 9:00 AM - 8:00 PM</span>
          </span>
        </div>

        {/* Dynamic Offer Text */}
        <div className="flex items-center justify-center gap-2 mx-auto md:mx-0">
          <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-[#ED1C24] text-white text-[10px] font-extrabold uppercase tracking-wider mr-1">
            Notice
          </span>
          <span>{announcement.text}</span>
          <Link
            href={announcement.actionLink}
            className="underline underline-offset-4 font-bold text-white hover:text-[#ED1C24] transition-colors ml-1"
          >
            {announcement.actionText} →
          </Link>
        </div>

        {/* Social Link */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={contact.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="The Educatee Centre on Facebook"
            className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
          <a
            href={contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="w-6 h-6 rounded-full bg-white/10 hover:bg-[#00CDC4] flex items-center justify-center transition-colors"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12.031 2C6.495 2 2 6.495 2 12.031c0 1.908.536 3.69 1.468 5.215L2.094 22l4.908-1.342a9.99 9.99 0 005.029 1.373c5.536 0 10.031-4.495 10.031-10.031S17.567 2 12.031 2zm5.727 14.195c-.242.682-1.22 1.306-1.722 1.38-.475.07-1.077.103-3.414-.85-2.616-1.066-4.321-3.722-4.452-3.896-.13-.174-1.055-1.402-1.055-2.673 0-1.272.668-1.898.906-2.155.238-.256.52-.32.693-.32.174 0 .347.002.498.01.163.007.38-.062.593.45.22.528.749 1.828.815 1.96.065.132.109.288.022.463-.087.174-.13.282-.26.434-.13.152-.272.34-.389.456-.13.13-.265.27-.114.53.152.26.674 1.109 1.445 1.796.994.885 1.832 1.16 2.092 1.29.26.13.412.115.564-.06.152-.174.65-0.757.824-1.017.174-.26.347-.217.585-.13.238.087 1.517.715 1.777.845.26.13.434.195.498.304.065.108.065.628-.177 1.31z" />
            </svg>
          </a>
        </div>
      </div>
    </aside>
  );
}
