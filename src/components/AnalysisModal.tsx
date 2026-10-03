"use client";

import React, { useState } from "react";
import { X, Upload, CheckCircle2 } from "lucide-react";
import { QuillMiniIcon } from "./Icons";

interface AnalysisModalProps {
  isOpen: boolean;
  onClose: () => void;
  isLight: boolean;
  initialStyle?: string;
}

export function AnalysisModal({
  isOpen,
  onClose,
  isLight,
  initialStyle,
}: AnalysisModalProps) {
  const [step, setStep] = useState<"form" | "success">("form");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: initialStyle || "Comprehensive Psyche Dossier",
    notes: "",
    fileUploaded: false,
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("success");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div
        className={`relative w-full max-w-xl rounded-2xl border p-6 sm:p-8 transition-all shadow-2xl ${
          isLight
            ? "bg-[#FAF8F5] border-[#E7E2D6] text-[#1C1917]"
            : "bg-[#161619] border-white/10 text-[#F5F2EB]"
        }`}
      >
        {/* Close Button */}
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

        {step === "form" ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <QuillMiniIcon className="w-5 h-5" isLight={isLight} />
              <span className="text-[11px] uppercase tracking-widest text-[#8B1E2D] font-semibold">
                graphos • mystik certified lab
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-normal">
              Schedule Your Handwriting Analysis
            </h3>
            <p
              className={`text-xs mt-1.5 ${
                isLight ? "text-[#78716C]" : "text-[#A7A39B]"
              }`}
            >
              Upload a clear photograph or scan of your handwritten page
              (unlined paper preferred) including your natural signature.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-medium mb-1.5 opacity-80">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Eleanor Vance"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className={`w-full px-3.5 py-2.5 rounded text-xs border outline-none transition-colors ${
                      isLight
                        ? "bg-white border-[#DDD7CB] focus:border-[#8B1E2D]"
                        : "bg-[#1E1E24] border-white/10 focus:border-[#D4AF37]"
                    }`}
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-medium mb-1.5 opacity-80">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="eleanor@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className={`w-full px-3.5 py-2.5 rounded text-xs border outline-none transition-colors ${
                      isLight
                        ? "bg-white border-[#DDD7CB] focus:border-[#8B1E2D]"
                        : "bg-[#1E1E24] border-white/10 focus:border-[#D4AF37]"
                    }`}
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider font-medium mb-1.5 opacity-80">
                  Dossier Focus
                </label>
                <select
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                  className={`w-full px-3.5 py-2.5 rounded text-xs border outline-none transition-colors ${
                    isLight
                      ? "bg-white border-[#DDD7CB] focus:border-[#8B1E2D]"
                      : "bg-[#1E1E24] border-white/10 focus:border-[#D4AF37]"
                  }`}
                >
                  <option value="Comprehensive Psyche Dossier">
                    Comprehensive Psyche Dossier (Personality &amp; Drive)
                  </option>
                  <option value="Dyad Compatibility Matrix">
                    Dyad Compatibility Matrix (Relationship Dynamics)
                  </option>
                  <option value="Executive Leadership Spectrum">
                    Executive Leadership Spectrum (Career &amp; Strengths)
                  </option>
                </select>
              </div>

              {/* Sample Upload Area */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider font-medium mb-1.5 opacity-80">
                  Handwriting Sample (Image or PDF)
                </label>
                <label
                  className={`border-2 border-dashed rounded-xl p-5 flex flex-col items-center justify-center cursor-pointer transition-colors ${
                    formData.fileUploaded
                      ? "border-emerald-500/50 bg-emerald-500/5"
                      : isLight
                      ? "border-[#DDD7CB] hover:border-[#8B1E2D] bg-white"
                      : "border-white/15 hover:border-[#D4AF37] bg-[#1A1A1E]"
                  }`}
                >
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*,application/pdf"
                    onChange={() =>
                      setFormData({ ...formData, fileUploaded: true })
                    }
                  />
                  {formData.fileUploaded ? (
                    <div className="flex items-center gap-2 text-emerald-600 text-xs font-medium">
                      <CheckCircle2 className="w-5 h-5" />
                      <span>Sample Attached (Ready for analysis)</span>
                    </div>
                  ) : (
                    <>
                      <Upload className="w-6 h-6 text-[#8B1E2D] mb-1.5" />
                      <span className="text-xs font-medium">
                        Click or drag sample file here
                      </span>
                      <span className="text-[10px] opacity-60 mt-0.5">
                        PNG, JPG, or PDF up to 15MB
                      </span>
                    </>
                  )}
                </label>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider font-medium mb-1.5 opacity-80">
                  Specific Questions or Areas of Focus
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Assessing career pivot, relationship communication traits, or leadership stress patterns..."
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                  className={`w-full px-3.5 py-2.5 rounded text-xs border outline-none transition-colors resize-none ${
                    isLight
                      ? "bg-white border-[#DDD7CB] focus:border-[#8B1E2D]"
                      : "bg-[#1E1E24] border-white/10 focus:border-[#D4AF37]"
                  }`}
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full mt-2 bg-[#8B1E2D] hover:bg-[#A32336] text-white text-xs uppercase tracking-[0.22em] font-semibold py-3.5 rounded-sm transition-all shadow-md active:scale-95"
              >
                Submit Sample For Verification
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 mb-4 border border-emerald-500/20">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl font-normal">
              Dossier Request Initiated
            </h3>
            <p
              className={`text-xs mt-2 max-w-sm mx-auto leading-relaxed ${
                isLight ? "text-[#78716C]" : "text-[#A7A39B]"
              }`}
            >
              Thank you, {formData.name || "friend"}. Our lead analyst has
              received your request for the <strong>{formData.category}</strong>.
              A secure confirmation and chain-of-custody link has been dispatched
              to {formData.email || "your email"}.
            </p>
            <button
              onClick={() => {
                setStep("form");
                onClose();
              }}
              className="mt-6 bg-[#8B1E2D] hover:bg-[#A32336] text-white text-xs uppercase tracking-[0.2em] font-semibold px-6 py-2.5 rounded-sm"
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
