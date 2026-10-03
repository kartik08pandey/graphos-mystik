"use client";

import React, { useState } from "react";
import { QuillMiniIcon } from "./Icons";
import { ChevronDown, ArrowRight, ShieldCheck, Sparkles, BookOpen } from "lucide-react";

interface AboutSectionProps {
  isLight: boolean;
  onOpenAnalysisModal: () => void;
}

export function AboutSection({ isLight, onOpenAnalysisModal }: AboutSectionProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-3xl mx-auto text-center">
        {/* Golden Quill Mini Icon */}
        <div className="flex justify-center mb-3">
          <QuillMiniIcon className="w-7 h-7" isLight={isLight} />
        </div>

        {/* Section Heading */}
        <h2
          className={`font-serif text-2xl sm:text-3xl md:text-4xl tracking-tight font-normal transition-colors duration-300 ${
            isLight ? "text-[#1C1917]" : "text-[#F5F2EB]"
          }`}
        >
          About Graphology &amp; Its Power
        </h2>

        {/* Section Copy */}
        <p
          className={`mt-6 text-xs sm:text-sm sm:leading-relaxed max-w-2xl mx-auto transition-colors duration-300 ${
            isLight ? "text-[#57534E]" : "text-[#A7A39B]"
          }`}
        >
          Graphology, the study of handwriting, provides a unique window into the
          human psyche. It reveals intricate details of intelligence, social
          style, emotional response, and subconscious destination. Our analysts
          analyse each stroke of the pen into powerful insights for personal and
          professional growth.
        </p>

        {/* Learn More Link / Button */}
        <div className="mt-7">
          <button
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.25em] font-semibold text-[#8B1E2D] hover:text-[#A32336] border-b-2 border-[#8B1E2D] pb-1 transition-all duration-200 group"
          >
            <span>Learn More</span>
            <ChevronDown
              className={`w-3.5 h-3.5 transition-transform duration-300 ${
                expanded ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        {/* Expanded Educational / Interactive Graphology Pillars */}
        {expanded && (
          <div
            className={`mt-10 p-6 sm:p-8 rounded-xl text-left border transition-all duration-500 animate-fadeIn ${
              isLight
                ? "bg-white border-[#E7E2D6] shadow-md"
                : "bg-[#18181C] border-white/10 shadow-xl"
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#8B1E2D] font-medium text-xs uppercase tracking-wider">
                  <BookOpen className="w-4 h-4" />
                  <span>The Four Zones</span>
                </div>
                <h4
                  className={`font-serif text-base font-semibold ${
                    isLight ? "text-[#1C1917]" : "text-[#F5F2EB]"
                  }`}
                >
                  Spatial Distribution
                </h4>
                <p
                  className={`text-xs leading-relaxed ${
                    isLight ? "text-[#78716C]" : "text-[#9E9B93]"
                  }`}
                >
                  Upper loops reveal intellectual ambition and idealism; middle
                  zones govern day-to-day social reality; lower stems unveil
                  instincts, material drives, and subconscious fears.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#8B1E2D] font-medium text-xs uppercase tracking-wider">
                  <Sparkles className="w-4 h-4" />
                  <span>Pressure &amp; Slant</span>
                </div>
                <h4
                  className={`font-serif text-base font-semibold ${
                    isLight ? "text-[#1C1917]" : "text-[#F5F2EB]"
                  }`}
                >
                  Dynamic Vitality
                </h4>
                <p
                  className={`text-xs leading-relaxed ${
                    isLight ? "text-[#78716C]" : "text-[#9E9B93]"
                  }`}
                >
                  Pen pressure correlates with emotional endurance and physical
                  vitality, while stroke inclination (right, vertical, or
                  sinistral) mirrors heart-mind equilibrium and spontaneity.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#8B1E2D] font-medium text-xs uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Certified Rigor</span>
                </div>
                <h4
                  className={`font-serif text-base font-semibold ${
                    isLight ? "text-[#1C1917]" : "text-[#F5F2EB]"
                  }`}
                >
                  Confidential Science
                </h4>
                <p
                  className={`text-xs leading-relaxed ${
                    isLight ? "text-[#78716C]" : "text-[#9E9B93]"
                  }`}
                >
                  Every sample is evaluated against validated psychometric
                  benchmarks with complete client privacy and non-judgmental,
                  empowering interpretations.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-dashed border-gray-500/20 flex flex-col sm:flex-row justify-between items-center gap-4">
              <span
                className={`text-xs ${
                  isLight ? "text-[#78716C]" : "text-[#9E9B93]"
                }`}
              >
                Ready to uncover your unique neurological signature?
              </span>
              <button
                onClick={onOpenAnalysisModal}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8B1E2D] hover:underline"
              >
                <span>Request Sample Evaluation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
