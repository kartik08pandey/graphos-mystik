"use client";

import React from "react";
import {
  CelestialQuill,
  FountainPenLeft,
  FountainPenRight,
  PersonalityBrainIcon,
  RelationshipRingsIcon,
  CareerCompassIcon,
} from "./Icons";

interface HeroProps {
  isLight: boolean;
  onSelectFeature?: (feature: string) => void;
}

export function Hero({ isLight, onSelectFeature }: HeroProps) {
  const cards = [
    {
      id: "personality",
      title: "Personality Profiles",
      description:
        "A comprehensive analysis of character, temperament, and inner drivers.",
      icon: (
        <PersonalityBrainIcon
          className="w-16 h-16 transition-transform duration-300 group-hover:scale-105"
          isLight={isLight}
        />
      ),
    },
    {
      id: "relationship",
      title: "Relationship Compatibility",
      description:
        "Compare handwriting for deep insights with interpersonal dynamics.",
      icon: (
        <RelationshipRingsIcon
          className="w-16 h-16 transition-transform duration-300 group-hover:scale-105"
          isLight={isLight}
        />
      ),
    },
    {
      id: "career",
      title: "Career Guidance",
      description:
        "Discover professional strengths, weaknesses, and leadership style.",
      icon: (
        <CareerCompassIcon
          className="w-16 h-16 transition-transform duration-300 group-hover:scale-105"
          isLight={isLight}
        />
      ),
    },
  ];

  return (
    <section id="home" className="relative pt-8 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Subtle background ambient halo */}
      <div
        className={`absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[450px] pointer-events-none rounded-full blur-[120px] -z-10 ${
          isLight
            ? "bg-[#D4AF37]/10"
            : "bg-[#D4AF37]/5"
        }`}
      />

      <div className="max-w-5xl mx-auto text-center relative">
        {/* Top Celestial Orbit Arch & Inkpot with Quill */}
        <div className="flex justify-center mb-4 transition-transform duration-500 hover:scale-[1.02]">
          <CelestialQuill
            className="w-64 sm:w-72 md:w-80 h-auto"
            isLight={isLight}
          />
        </div>

        {/* Flanking Pen Illustrations (Desktop) */}
        <div className="hidden md:block absolute left-2 lg:left-12 top-48 pointer-events-none transition-transform duration-700 hover:-translate-y-1">
          <FountainPenLeft className="w-24 sm:w-28 md:w-32 h-auto" isLight={isLight} />
        </div>
        <div className="hidden md:block absolute right-2 lg:right-12 top-44 pointer-events-none transition-transform duration-700 hover:-translate-y-1">
          <FountainPenRight className="w-24 sm:w-28 md:w-32 h-auto" isLight={isLight} />
        </div>

        {/* Main Title */}
        <h1
          className={`font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] tracking-tight leading-[1.18] font-normal max-w-4xl mx-auto transition-colors duration-300 ${
            isLight ? "text-[#1C1917]" : "text-[#F5F2EB]"
          }`}
        >
          Graphology Analysis &amp;
          <br />
          Handwriting Insights
        </h1>

        {/* Subtitle / Key statement with crimson highlights */}
        <p
          className={`mt-6 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-sans font-normal transition-colors duration-300 ${
            isLight ? "text-[#44403C]" : "text-[#C7C2B7]"
          }`}
        >
          Unlock the secrets of{" "}
          <span className="text-[#8B1E2D] font-medium">
            personality and potential
          </span>{" "}
          through the science of handwriting. Blending ancient principles with{" "}
          <span className="text-[#8B1E2D] font-medium">
            modern cognitive analysis
          </span>
          .
        </p>

        {/* Body Paragraph */}
        <p
          className={`mt-4 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed transition-colors duration-300 ${
            isLight ? "text-[#78716C]" : "text-[#9E9B93]"
          }`}
        >
          Graphology, the study of handwriting, provides a window into the
          human psyche. It reveals clear details of intelligence, social style,
          emotional response, and material insights for personal and professional
          growth.
        </p>

        {/* Mobile decorative pens */}
        <div className="flex md:hidden justify-center items-center gap-12 mt-6">
          <FountainPenLeft className="w-20 h-auto" isLight={isLight} />
          <FountainPenRight className="w-20 h-auto" isLight={isLight} />
        </div>

        {/* The 3 Feature Cards Grid */}
        <div className="mt-14 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 max-w-4xl mx-auto">
          {cards.map((card) => (
            <div
              key={card.id}
              onClick={() => onSelectFeature?.(card.id)}
              className={`group text-center p-7 sm:p-8 rounded-xl transition-all duration-300 cursor-pointer hover:-translate-y-1.5 ${
                isLight
                  ? "bg-[#FAF7F2] border border-[#E7E2D6] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] hover:border-[#D4AF37]/60 hover:shadow-[0_12px_28px_-6px_rgba(139,30,45,0.08)]"
                  : "bg-[#18181C]/90 border border-white/[0.08] shadow-[0_10px_25px_-5px_rgba(0,0,0,0.4)] hover:border-[#D4AF37]/50 hover:bg-[#1E1E24] hover:shadow-[0_15px_30px_-5px_rgba(212,175,55,0.08)]"
              }`}
            >
              {/* Icon Container */}
              <div className="flex justify-center items-center h-20 mb-4">
                {card.icon}
              </div>

              {/* Title */}
              <h2
                className={`font-serif text-lg sm:text-xl font-medium tracking-wide transition-colors ${
                  isLight
                    ? "text-[#1C1917] group-hover:text-[#8B1E2D]"
                    : "text-[#F5F2EB] group-hover:text-[#D4AF37]"
                }`}
              >
                {card.title}
              </h2>

              {/* Description */}
              <p
                className={`mt-2.5 text-xs sm:text-sm leading-relaxed transition-colors ${
                  isLight ? "text-[#78716C]" : "text-[#9E9B93]"
                }`}
              >
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
