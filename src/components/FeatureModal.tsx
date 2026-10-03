"use client";

import React from "react";
import { X, ArrowRight } from "lucide-react";
import { QuillMiniIcon } from "./Icons";

interface FeatureModalProps {
  featureId: string | null;
  onClose: () => void;
  isLight: boolean;
  onScheduleClick: () => void;
}

export function FeatureModal({
  featureId,
  onClose,
  isLight,
  onScheduleClick,
}: FeatureModalProps) {
  if (!featureId) return null;

  const dataMap: Record<
    string,
    {
      title: string;
      subtitle: string;
      description: string;
      indicators: { label: string; detail: string }[];
    }
  > = {
    personality: {
      title: "Personality Profiles",
      subtitle: "Character, Temperament & Subconscious Drivers",
      description:
        "Handwriting is neuromuscular communication—a direct projection of cerebral circuitry through fine motor pen movements. In this profile, we analyze over 42 specific stroke dimensions to map emotional equilibrium, defense mechanisms, and authentic personal strengths.",
      indicators: [
        {
          label: "Stroke Pressure & Depth",
          detail:
            "Evaluates internal energy reserves, emotional intensity, and physical stamina.",
        },
        {
          label: "Slant Angle & Fluency",
          detail:
            "Calculates head-versus-heart dominance, extroversion, and social responsiveness.",
        },
        {
          label: "Middle Zone Dimension",
          detail:
            "Reveals current self-concept, social adaptability, and daily ego strength.",
        },
        {
          label: "Lower Loop Extensions",
          detail:
            "Uncovers material drives, security requirements, and subconscious instincts.",
        },
      ],
    },
    relationship: {
      title: "Relationship Compatibility",
      subtitle: "Interpersonal Dyads & Emotional Resonance",
      description:
        "By comparing two handwriting specimens side-by-side, our graphologists uncover hidden communication synergies, emotional needs, and friction points before they emerge in daily interaction.",
      indicators: [
        {
          label: "Rhythm & Spacing Parity",
          detail:
            "Measures whether both partners process experiences at compatible cadences.",
        },
        {
          label: "Emotional Attachment Index",
          detail:
            "Identifies intimacy inclinations through letter connection types and openness.",
        },
        {
          label: "Conflict Response Modalities",
          detail:
            "Analyzes defensive stroke formations and t-bar sharpness under stress.",
        },
        {
          label: "Long-Term Synergy Vector",
          detail:
            "Provides tailored counsel for mutual emotional nourishment and harmony.",
        },
      ],
    },
    career: {
      title: "Career Guidance",
      subtitle: "Executive Strengths, Focus & Leadership Modality",
      description:
        "Designed for professionals, founders, and career transitions. Discover your innate strategic strengths, concentration endurance, risk appetite, and leadership signatures through unvarnished graphological diagnostics.",
      indicators: [
        {
          label: "T-Bar Placement & Ambition",
          detail:
            "High, firm crossings denote audacious vision and executive follow-through.",
        },
        {
          label: "Margin Discipline & Planning",
          detail:
            "Even margins signify organized resource allocation and strategic discipline.",
        },
        {
          label: "Speed & Form Simplification",
          detail:
            "Streamlined strokes highlight high cognitive efficiency and decisive problem-solving.",
        },
        {
          label: "Signature vs. Text Concordance",
          detail:
            "Contrasts public executive persona with private operational character.",
        },
      ],
    },
  };

  const feature = dataMap[featureId] || dataMap["personality"];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div
        className={`relative w-full max-w-xl rounded-2xl border p-6 sm:p-8 transition-all shadow-2xl ${
          isLight
            ? "bg-[#FAF8F5] border-[#E7E2D6] text-[#1C1917]"
            : "bg-[#161619] border-white/10 text-[#F5F2EB]"
        }`}
      >
        <button
          onClick={onClose}
          className={`absolute top-5 right-5 p-2 rounded-full transition-colors ${
            isLight
              ? "hover:bg-neutral-200 text-[#57534E]"
              : "hover:bg-white/10 text-[#A7A39B]"
          }`}
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-2">
          <QuillMiniIcon className="w-5 h-5" isLight={isLight} />
          <span className="text-[11px] uppercase tracking-widest text-[#8B1E2D] font-semibold">
            Detailed Diagnostic Focus
          </span>
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl font-normal">
          {feature.title}
        </h3>
        <p className="text-xs text-[#8B1E2D] font-medium tracking-wide mt-1">
          {feature.subtitle}
        </p>

        <p
          className={`text-xs sm:text-sm mt-4 leading-relaxed ${
            isLight ? "text-[#57534E]" : "text-[#A7A39B]"
          }`}
        >
          {feature.description}
        </p>

        <div className="mt-6 space-y-3">
          <h4 className="text-[11px] uppercase tracking-wider font-semibold opacity-75">
            Key Diagnostic Metrics
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {feature.indicators.map((item, idx) => (
              <div
                key={idx}
                className={`p-3 rounded-lg border text-xs ${
                  isLight
                    ? "bg-white border-[#E7E2D6]"
                    : "bg-[#1E1E24] border-white/5"
                }`}
              >
                <div className="font-semibold text-[#8B1E2D] mb-1">
                  {item.label}
                </div>
                <p className="opacity-80 leading-relaxed text-[11px]">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-5 border-t border-gray-500/20 flex flex-col sm:flex-row justify-between items-center gap-3">
          <button
            onClick={onClose}
            className={`text-xs uppercase tracking-wider font-medium px-4 py-2 ${
              isLight ? "text-[#57534E]" : "text-[#A7A39B]"
            }`}
          >
            Back
          </button>
          <button
            onClick={() => {
              onClose();
              onScheduleClick();
            }}
            className="w-full sm:w-auto bg-[#8B1E2D] hover:bg-[#A32336] text-white text-xs uppercase tracking-[0.2em] font-semibold px-6 py-2.5 rounded-sm transition-all shadow-md flex items-center justify-center gap-2"
          >
            <span>Order This Evaluation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
