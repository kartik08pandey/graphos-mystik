"use client";

import React from "react";
import Image from "next/image";
import { QuillMiniIcon, FourPointStar } from "./Icons";

interface PersonalizedAnalysisProps {
  isLight: boolean;
  onScheduleClick: () => void;
}

export function PersonalizedAnalysis({
  isLight,
  onScheduleClick,
}: PersonalizedAnalysisProps) {
  return (
    <section id="analyses" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto relative">
        {/* Main 2-column Container */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden border transition-all duration-300 ${
            isLight
              ? "bg-[#FAF7F2] border-[#E7E2D6] shadow-[0_8px_30px_-6px_rgba(0,0,0,0.06)]"
              : "bg-[#161619] border-white/[0.08] shadow-[0_15px_35px_-8px_rgba(0,0,0,0.6)]"
          }`}
        >
          {/* Left Column: Portrait */}
          <div className="relative aspect-[4/3] md:aspect-auto md:h-full min-h-[340px] sm:min-h-[400px] overflow-hidden bg-neutral-900">
            <Image
              src={
                isLight
                  ? "/images/graphologist-light.jpg"
                  : "/images/graphologist-dark.jpg"
              }
              alt="Certified Master Graphologist"
              fill
              priority
              className="object-cover object-center transition-all duration-500 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Soft inner vignette gradient overlay */}
            <div
              className={`absolute inset-0 pointer-events-none ${
                isLight
                  ? "bg-gradient-to-t from-[#FAF7F2]/40 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#FAF7F2]/40"
                  : "bg-gradient-to-t from-[#161619]/60 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#161619]/40"
              }`}
            />
          </div>

          {/* Right Column: Card Content */}
          <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center relative">
            {/* Top Golden Quill Icon */}
            <div className="mb-3">
              <QuillMiniIcon className="w-6 h-6" isLight={isLight} />
            </div>

            {/* Title */}
            <h3
              className={`font-serif text-2xl sm:text-3xl font-normal tracking-wide transition-colors ${
                isLight ? "text-[#1C1917]" : "text-[#F5F2EB]"
              }`}
            >
              Your Personalized
              <br />
              Analysis
            </h3>

            {/* Testimonial Quote */}
            <blockquote
              className={`mt-4 text-xs sm:text-sm font-sans italic leading-relaxed transition-colors ${
                isLight ? "text-[#44403C]" : "text-[#D6D2C8]"
              }`}
            >
              &ldquo;A profound and revealing look into your true self.&rdquo;
              <span
                className={`block not-italic text-[11px] sm:text-xs mt-1 uppercase tracking-wider font-semibold ${
                  isLight ? "text-[#8B1E2D]" : "text-[#E06D7A]"
                }`}
              >
                — Sample Testimonial
              </span>
            </blockquote>

            {/* Description Paragraph */}
            <p
              className={`mt-4 text-xs sm:text-sm leading-relaxed transition-colors ${
                isLight ? "text-[#78716C]" : "text-[#9E9B93]"
              }`}
            >
              Submit a sample of your handwriting for a detailed, certified
              analysis. Our comprehensive reports offer actionable feedback for
              self-improvement and development. Absolute confidentiality and
              care are our core tenets.
            </p>

            {/* Schedule CTA Button */}
            <div className="mt-8">
              <button
                onClick={onScheduleClick}
                className="bg-[#8B1E2D] hover:bg-[#A32336] text-white text-xs uppercase tracking-[0.2em] font-semibold px-7 py-3 rounded-sm transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-[#8B1E2D]/25 active:scale-95"
              >
                Schedule Your Analysis
              </button>
            </div>
          </div>
        </div>

        {/* 4-Point Diamond Sparkle Star (Bottom Right outside/overlapping) */}
        <div className="absolute -bottom-5 -right-4 sm:-bottom-6 sm:-right-6 pointer-events-none">
          <FourPointStar className="w-12 h-12 sm:w-16 sm:h-16" isLight={isLight} />
        </div>
      </div>
    </section>
  );
}
