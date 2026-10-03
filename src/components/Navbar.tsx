"use client";

import React, { useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

interface NavbarProps {
  isLight: boolean;
  onToggleTheme: () => void;
  onOpenAnalysisModal: () => void;
}

export function Navbar({ isLight, onToggleTheme, onOpenAnalysisModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 backdrop-blur-md ${
        isLight
          ? "bg-[#FAF8F5]/90 border-b border-[#E7E2D6]/80"
          : "bg-[#121214]/90 border-b border-white/[0.07]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            <a
              href="#home"
              className={`text-xs uppercase tracking-[0.2em] font-medium transition-colors ${
                isLight
                  ? "text-[#1C1917] hover:text-[#8B1E2D]"
                  : "text-[#E6E2D8] hover:text-white"
              }`}
            >
              Home
            </a>
            <span className={isLight ? "text-[#DDD7CC]" : "text-white/20"}>|</span>
            <a
              href="#about"
              className={`text-xs uppercase tracking-[0.2em] font-medium transition-colors ${
                isLight
                  ? "text-[#57534E] hover:text-[#1C1917]"
                  : "text-[#A7A39B] hover:text-white"
              }`}
            >
              About Graphology
            </a>
            <span className={isLight ? "text-[#DDD7CC]" : "text-white/20"}>|</span>
            <a
              href="#analyses"
              className={`text-xs uppercase tracking-[0.2em] font-medium transition-colors ${
                isLight
                  ? "text-[#57534E] hover:text-[#1C1917]"
                  : "text-[#A7A39B] hover:text-white"
              }`}
            >
              Analyses
            </a>
          </nav>

          {/* Center Brand Logo */}
          <div className="flex-1 lg:flex-initial text-center lg:text-center">
            <a
              href="#home"
              className="inline-block group"
            >
              <span
                className={`font-serif text-2xl sm:text-3xl tracking-[0.18em] lowercase font-normal transition-colors ${
                  isLight
                    ? "text-[#1C1917] group-hover:text-[#8B1E2D]"
                    : "text-[#F5F2EB] group-hover:text-[#D4AF37]"
                }`}
              >
                graphos{" "}
                <span className="text-[#8B1E2D] font-sans text-lg align-middle px-1">
                  •
                </span>{" "}
                mystik
              </span>
            </a>
          </div>

          {/* Right Navigation Links & CTA */}
          <div className="hidden lg:flex items-center space-x-7">
            <nav className="flex items-center space-x-6">
              <a
                href="#pricing"
                className={`text-xs uppercase tracking-[0.2em] font-medium transition-colors ${
                  isLight
                    ? "text-[#57534E] hover:text-[#1C1917]"
                    : "text-[#A7A39B] hover:text-white"
                }`}
              >
                Pricing
              </a>
              <span className={isLight ? "text-[#DDD7CC]" : "text-white/20"}>|</span>
              <a
                href="#samples"
                className={`text-xs uppercase tracking-[0.2em] font-medium transition-colors ${
                  isLight
                    ? "text-[#57534E] hover:text-[#1C1917]"
                    : "text-[#A7A39B] hover:text-white"
                }`}
              >
                Samples
              </a>
              <span className={isLight ? "text-[#DDD7CC]" : "text-white/20"}>|</span>
              <a
                href="#pages"
                className={`text-xs uppercase tracking-[0.2em] font-medium transition-colors ${
                  isLight
                    ? "text-[#57534E] hover:text-[#1C1917]"
                    : "text-[#A7A39B] hover:text-white"
                }`}
              >
                Pages
              </a>
              <span className={isLight ? "text-[#DDD7CC]" : "text-white/20"}>|</span>
              <a
                href="#contact"
                className={`text-xs uppercase tracking-[0.2em] font-medium transition-colors ${
                  isLight
                    ? "text-[#57534E] hover:text-[#1C1917]"
                    : "text-[#A7A39B] hover:text-white"
                }`}
              >
                Contact
              </a>
            </nav>

            {/* Quick Theme Switcher Button */}
            <button
              onClick={onToggleTheme}
              aria-label="Toggle light and dark style"
              title={`Switch to ${isLight ? "Dark Mystic" : "Light Parchment"} edition`}
              className={`p-2 rounded-full transition-all border ${
                isLight
                  ? "bg-[#EDE9E0] text-[#57534E] hover:text-[#1C1917] border-[#DDD7CB]"
                  : "bg-white/[0.06] text-[#C4C0B5] hover:text-[#D4AF37] border-white/10"
              }`}
            >
              {isLight ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-[#D4AF37]" />}
            </button>

            {/* Red CTA Button */}
            <button
              onClick={onOpenAnalysisModal}
              className="bg-[#8B1E2D] hover:bg-[#A32336] text-white text-xs uppercase tracking-[0.22em] font-semibold px-6 py-2.5 rounded-sm transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-[#8B1E2D]/20 active:scale-95"
            >
              Begin Here
            </button>
          </div>

          {/* Mobile actions */}
          <div className="flex items-center space-x-3 lg:hidden">
            <button
              onClick={onToggleTheme}
              aria-label="Toggle theme"
              className={`p-2 rounded-full border ${
                isLight
                  ? "bg-[#EDE9E0] text-[#57534E] border-[#DDD7CB]"
                  : "bg-white/[0.06] text-[#C4C0B5] border-white/10"
              }`}
            >
              {isLight ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-[#D4AF37]" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-md ${
                isLight ? "text-[#1C1917]" : "text-white"
              }`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div
            className={`lg:hidden py-4 border-t ${
              isLight
                ? "border-[#E7E2D6] bg-[#FAF8F5]"
                : "border-white/10 bg-[#121214]"
            }`}
          >
            <div className="flex flex-col space-y-3 px-2">
              <a
                href="#home"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-xs uppercase tracking-[0.2em] font-medium py-2 ${
                  isLight ? "text-[#1C1917]" : "text-[#F5F2EB]"
                }`}
              >
                Home
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-xs uppercase tracking-[0.2em] font-medium py-2 ${
                  isLight ? "text-[#57534E]" : "text-[#A7A39B]"
                }`}
              >
                About Graphology
              </a>
              <a
                href="#analyses"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-xs uppercase tracking-[0.2em] font-medium py-2 ${
                  isLight ? "text-[#57534E]" : "text-[#A7A39B]"
                }`}
              >
                Analyses
              </a>
              <a
                href="#pricing"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-xs uppercase tracking-[0.2em] font-medium py-2 ${
                  isLight ? "text-[#57534E]" : "text-[#A7A39B]"
                }`}
              >
                Pricing
              </a>
              <a
                href="#samples"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-xs uppercase tracking-[0.2em] font-medium py-2 ${
                  isLight ? "text-[#57534E]" : "text-[#A7A39B]"
                }`}
              >
                Samples
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-xs uppercase tracking-[0.2em] font-medium py-2 ${
                  isLight ? "text-[#57534E]" : "text-[#A7A39B]"
                }`}
              >
                Contact
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAnalysisModal();
                }}
                className="w-full bg-[#8B1E2D] hover:bg-[#A32336] text-white text-xs uppercase tracking-[0.22em] font-semibold py-3 rounded-sm text-center mt-2"
              >
                Begin Here
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
