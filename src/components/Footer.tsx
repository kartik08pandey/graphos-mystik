"use client";

import React from "react";
import { QuillMiniIcon } from "./Icons";

interface FooterProps {
  isLight: boolean;
}

export function Footer({ isLight }: FooterProps) {
  return (
    <footer
      className={`border-t py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        isLight
          ? "bg-[#F3EFE8] border-[#E7E2D6] text-[#57534E]"
          : "bg-[#0E0E10] border-white/[0.06] text-[#8C8880]"
      }`}
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-4">
          <QuillMiniIcon className="w-5 h-5" isLight={isLight} />
          <span
            className={`font-serif text-xl tracking-[0.16em] lowercase font-normal ${
              isLight ? "text-[#1C1917]" : "text-[#F5F2EB]"
            }`}
          >
            graphos <span className="text-[#8B1E2D] font-sans">•</span> mystik
          </span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs uppercase tracking-widest my-4">
          <a
            href="#home"
            className="hover:text-[#8B1E2D] transition-colors"
          >
            Home
          </a>
          <span>•</span>
          <a
            href="#about"
            className="hover:text-[#8B1E2D] transition-colors"
          >
            About
          </a>
          <span>•</span>
          <a
            href="#analyses"
            className="hover:text-[#8B1E2D] transition-colors"
          >
            Analyses
          </a>
          <span>•</span>
          <a
            href="#pricing"
            className="hover:text-[#8B1E2D] transition-colors"
          >
            Pricing &amp; Styles
          </a>
          <span>•</span>
          <a
            href="#samples"
            className="hover:text-[#8B1E2D] transition-colors"
          >
            Ethics &amp; Confidentiality
          </a>
          <span>•</span>
          <a
            href="#contact"
            className="hover:text-[#8B1E2D] transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Legal & copyright */}
        <p className="text-[11px] opacity-60 mt-4 max-w-md leading-relaxed">
          &copy; {new Date().getFullYear()} graphos &bull; mystik. Certified
          neuromuscular handwriting analysis and psychological graphology. All
          client manuscripts and data are strictly protected under clinical
          confidentiality.
        </p>
      </div>
    </footer>
  );
}
