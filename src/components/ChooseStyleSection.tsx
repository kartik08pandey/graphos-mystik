"use client";

import React, { useState } from "react";
import { QuillMiniIcon } from "./Icons";
import { Check, Sparkles, Compass, HeartHandshake } from "lucide-react";

interface ChooseStyleSectionProps {
  isLight: boolean;
  onSetTheme: (isLight: boolean) => void;
  onOpenAnalysisModal: (styleName?: string) => void;
}

export function ChooseStyleSection({
  isLight,
  onSetTheme,
  onOpenAnalysisModal,
}: ChooseStyleSectionProps) {
  const [selectedReportStyle, setSelectedReportStyle] = useState<string>("full-comprehensive");

  const reportStyles = [
    {
      id: "full-comprehensive",
      icon: <Sparkles className="w-5 h-5 text-[#8B1E2D]" />,
      name: "Comprehensive Psyche Dossier",
      tag: "Most Popular",
      pages: "12-15 Pages",
      turnaround: "48 Hours",
      description:
        "Full 360-degree evaluation covering intellectual velocity, emotional defense mechanisms, subconscious ambitions, and social instincts.",
      features: [
        "Complete stroke slant & baseline inclination mapping",
        "T-bar cross analysis & aspirational goal assessment",
        "Subconscious lower-loop drive indicators",
        "Signed certificate of authenticity from master analyst",
      ],
    },
    {
      id: "compatibility-dyad",
      icon: <HeartHandshake className="w-5 h-5 text-[#8B1E2D]" />,
      name: "Dyad Compatibility Matrix",
      tag: "Couples & Partners",
      pages: "8-10 Pages",
      turnaround: "3 Business Days",
      description:
        "Dual-sample synthesis identifying harmonic overlaps, potential friction points, communication styles, and emotional intimacy rhythms.",
      features: [
        "Side-by-side stroke tension and rhythm comparison",
        "Conflict trigger indicators & resolution pathways",
        "Dominance vs. deference balance score",
        "Actionable relationship harmony guidance",
      ],
    },
    {
      id: "executive-leadership",
      icon: <Compass className="w-5 h-5 text-[#8B1E2D]" />,
      name: "Executive Leadership Spectrum",
      tag: "Career & Talent",
      pages: "6-8 Pages",
      turnaround: "24 Hours",
      description:
        "Targeted strategic assessment for entrepreneurs, leaders, and executive hiring. Dissects decision-making speed, stress resistance, and stamina.",
      features: [
        "Strategic vs. tactical focus classification",
        "High-pressure resilience and tenacity index",
        "Signature authenticity & public persona audit",
        "Customized leadership growth recommendations",
      ],
    },
  ];

  return (
    <section id="pricing" className="pt-16 pb-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto text-center">
        {/* Golden Quill Mini Icon */}
        <div className="flex justify-center mb-3">
          <QuillMiniIcon className="w-7 h-7" isLight={isLight} />
        </div>

        {/* Section Title */}
        <h2
          className={`font-serif text-3xl sm:text-4xl tracking-tight font-normal transition-colors duration-300 ${
            isLight ? "text-[#1C1917]" : "text-[#F5F2EB]"
          }`}
        >
          Choose Your Style
        </h2>

        <p
          className={`mt-3 text-xs sm:text-sm max-w-xl mx-auto transition-colors duration-300 ${
            isLight ? "text-[#57534E]" : "text-[#A7A39B]"
          }`}
        >
          Select your visual atmosphere and analytical depth. Switch between
          the dark celestial manuscript or the classic ivory parchment.
        </p>

        {/* Interactive Visual Theme Switcher Showcase */}
        <div className="mt-10 max-w-md mx-auto p-1.5 rounded-full border flex items-center justify-between transition-all duration-300 bg-black/10 border-gray-500/20 backdrop-blur-md">
          <button
            onClick={() => onSetTheme(false)}
            className={`flex-1 py-2.5 px-4 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
              !isLight
                ? "bg-[#18181C] text-[#F5F2EB] shadow-lg border border-white/10"
                : "text-[#78716C] hover:text-[#1C1917]"
            }`}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37]" />
            <span>Dark Mystic</span>
          </button>

          <button
            onClick={() => onSetTheme(true)}
            className={`flex-1 py-2.5 px-4 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
              isLight
                ? "bg-white text-[#1C1917] shadow-lg border border-[#E7E2D6]"
                : "text-[#A7A39B] hover:text-[#F5F2EB]"
            }`}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#8B1E2D]" />
            <span>Light Parchment</span>
          </button>
        </div>

        {/* Style / Report Tiers */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-left">
          {reportStyles.map((style) => {
            const isSelected = selectedReportStyle === style.id;
            return (
              <div
                key={style.id}
                onClick={() => setSelectedReportStyle(style.id)}
                className={`p-7 sm:p-8 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between relative ${
                  isSelected
                    ? isLight
                      ? "bg-white border-[#8B1E2D] shadow-xl ring-1 ring-[#8B1E2D]"
                      : "bg-[#18181C] border-[#D4AF37] shadow-2xl ring-1 ring-[#D4AF37]/50"
                    : isLight
                    ? "bg-[#FAF7F2] border-[#E7E2D6] hover:border-gray-400"
                    : "bg-[#141417] border-white/[0.07] hover:border-white/20"
                }`}
              >
                {/* Header info */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-lg bg-red-950/10 border border-red-500/10">
                      {style.icon}
                    </div>
                    <span
                      className={`text-[10px] uppercase tracking-widest font-bold px-2.5 py-1 rounded-full ${
                        isLight
                          ? "bg-[#EDE8DE] text-[#8B1E2D]"
                          : "bg-white/[0.08] text-[#E06D7A]"
                      }`}
                    >
                      {style.tag}
                    </span>
                  </div>

                  <h3
                    className={`font-serif text-xl font-normal tracking-wide transition-colors ${
                      isLight ? "text-[#1C1917]" : "text-[#F5F2EB]"
                    }`}
                  >
                    {style.name}
                  </h3>

                  <div className="flex items-center gap-3 mt-2 text-xs font-mono opacity-70">
                    <span>{style.pages}</span>
                    <span>•</span>
                    <span>{style.turnaround} Delivery</span>
                  </div>

                  <p
                    className={`mt-4 text-xs leading-relaxed transition-colors ${
                      isLight ? "text-[#57534E]" : "text-[#A7A39B]"
                    }`}
                  >
                    {style.description}
                  </p>

                  {/* Feature list */}
                  <div className="mt-6 space-y-2.5 border-t pt-5 border-gray-500/20">
                    {style.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs">
                        <Check className="w-3.5 h-3.5 text-[#8B1E2D] shrink-0 mt-0.5" />
                        <span
                          className={isLight ? "text-[#44403C]" : "text-[#C7C2B7]"}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Select button */}
                <div className="mt-8 pt-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenAnalysisModal(style.name);
                    }}
                    className={`w-full py-3 rounded-sm text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-200 ${
                      isSelected
                        ? "bg-[#8B1E2D] hover:bg-[#A32336] text-white shadow-md"
                        : isLight
                        ? "bg-[#EDE9E0] text-[#1C1917] hover:bg-[#8B1E2D] hover:text-white"
                        : "bg-white/[0.06] text-[#E6E2D8] hover:bg-[#8B1E2D] hover:text-white"
                    }`}
                  >
                    {isSelected ? "Select & Proceed" : "Choose Style"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
