"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { PersonalizedAnalysis } from "@/components/PersonalizedAnalysis";
import { ChooseStyleSection } from "@/components/ChooseStyleSection";
import { Footer } from "@/components/Footer";
import { AnalysisModal } from "@/components/AnalysisModal";
import { FeatureModal } from "@/components/FeatureModal";

export default function Home() {
  const [isLight, setIsLight] = useState<boolean>(false);
  const [isAnalysisModalOpen, setIsAnalysisModalOpen] = useState<boolean>(false);
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);
  const [initialStyleForModal, setInitialStyleForModal] = useState<string | undefined>(undefined);

  const toggleTheme = () => {
    setIsLight((prev) => !prev);
  };

  const openScheduleModal = (styleName?: string) => {
    if (styleName) {
      setInitialStyleForModal(styleName);
    }
    setIsAnalysisModalOpen(true);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-500 font-sans ${
        isLight ? "bg-light-paper text-[#1C1917]" : "bg-dark-paper text-[#E6E2D8]"
      }`}
    >
      {/* Navigation Header */}
      <Navbar
        isLight={isLight}
        onToggleTheme={toggleTheme}
        onOpenAnalysisModal={() => openScheduleModal()}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section with Celestial Arch, Headings, and 3 Feature Cards */}
        <Hero
          isLight={isLight}
          onSelectFeature={(featureId) => setSelectedFeature(featureId)}
        />

        {/* About Graphology & Its Power */}
        <AboutSection
          isLight={isLight}
          onOpenAnalysisModal={() => openScheduleModal()}
        />

        {/* Personalized Analysis with Expert Portrait */}
        <PersonalizedAnalysis
          isLight={isLight}
          onScheduleClick={() => openScheduleModal()}
        />

        {/* Choose Your Style & Report Packages */}
        <ChooseStyleSection
          isLight={isLight}
          onSetTheme={(lightMode) => setIsLight(lightMode)}
          onOpenAnalysisModal={(styleName) => openScheduleModal(styleName)}
        />
      </main>

      {/* Footer */}
      <Footer isLight={isLight} />

      {/* Schedule / Begin Analysis Modal */}
      <AnalysisModal
        isOpen={isAnalysisModalOpen}
        onClose={() => setIsAnalysisModalOpen(false)}
        isLight={isLight}
        initialStyle={initialStyleForModal}
      />

      {/* Feature Deep Dive Inspection Modal */}
      <FeatureModal
        featureId={selectedFeature}
        onClose={() => setSelectedFeature(null)}
        isLight={isLight}
        onScheduleClick={() => openScheduleModal()}
      />
    </div>
  );
}
