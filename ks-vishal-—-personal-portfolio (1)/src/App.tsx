/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { BentoGridSection } from './components/BentoGridSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ProtoSemSection } from './components/ProtoSemSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { EducationSection } from './components/EducationSection';
import { CurrentFocusSection } from './components/CurrentFocusSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#07090e] text-[#e6e8ee] selection:bg-amber-400 selection:text-black">
      {/* Top Navigation */}
      <Navbar />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* About Me & Strengths */}
        <AboutSection />

        {/* Interactive Bento Grid Overview */}
        <BentoGridSection />

        {/* Experience & Leadership Timeline */}
        <ExperienceTimeline />

        {/* Dedicated ProtoSem Learning Journey Archive */}
        <ProtoSemSection />

        {/* Projects & Entrepreneurial Initiatives */}
        <ProjectsSection />

        {/* Skills & Expertise */}
        <SkillsSection />

        {/* Education & Academic Achievements */}
        <EducationSection />

        {/* Current Focus Horizons */}
        <CurrentFocusSection />

        {/* Contact & Social Links */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
