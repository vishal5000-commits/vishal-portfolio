import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowDown, ArrowUpRight, Linkedin, Github, Instagram, Mail, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  const { personalInfo } = portfolioData;
  const [currentInterestIndex, setCurrentInterestIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentInterestIndex((prev) => (prev + 1) % personalInfo.animatedInterests.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [personalInfo.animatedInterests.length]);

  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Ambient background lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-amber-500/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-blue-600/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split Screen Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Typographic & Story Hierarchy */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Editorial Kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>Personal Brand & Portfolio</span>
              <span className="text-slate-500" aria-hidden="true">·</span>
              <span className="text-slate-400">Undergraduate Business Profile</span>
            </div>

            {/* Prominent Name */}
            <div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-display tracking-tight text-white">
                KS VISHAL
              </h1>
              <p className="mt-2 text-base sm:text-lg font-medium text-amber-400/90 font-display">
                {personalInfo.title}
              </p>
            </div>

            {/* Animated Dynamic Interest Roller */}
            <div className="h-10 sm:h-12 flex items-center overflow-hidden border-y border-white/10 py-1">
              <span className="text-xs sm:text-sm uppercase tracking-wider text-slate-400 font-semibold mr-3 shrink-0">
                Focus Area:
              </span>
              <div className="relative h-full flex items-center">
                <span
                  key={currentInterestIndex}
                  className="text-sm sm:text-lg font-bold text-white font-display transition-all duration-500 transform animate-fadeIn inline-block"
                >
                  {personalInfo.animatedInterests[currentInterestIndex]}
                </span>
              </div>
            </div>

            {/* Hero Introduction & Credo */}
            <div className="space-y-3 text-slate-300 text-base sm:text-lg leading-relaxed">
              <p className="font-semibold text-white">
                {personalInfo.heroIntro}
              </p>
              <p className="text-slate-300 text-sm sm:text-base">
                {personalInfo.heroSubtitle}
              </p>
              <p className="text-slate-400 text-sm sm:text-base italic">
                “{personalInfo.heroPhilosophy}”
              </p>
            </div>

            {/* Brand Statement Badge */}
            <div className="pt-1">
              <div className="inline-block p-1 rounded-xl bg-gradient-to-r from-amber-500/20 via-orange-500/10 to-transparent border border-amber-500/30">
                <div className="px-4 py-2 rounded-lg bg-[#0c0e17]">
                  <span className="text-xs uppercase font-medium text-slate-400 block tracking-wider">Personal Brand Statement</span>
                  <span className="text-base sm:text-lg font-extrabold tracking-widest text-amber-300 font-display">
                    {personalInfo.brandStatement}
                  </span>
                </div>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => handleScrollTo('#protosem')}
                className="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-black bg-amber-400 hover:bg-amber-300 rounded-xl transition-all shadow-lg shadow-amber-400/20 active:scale-95"
              >
                <span>Explore My Journey</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                onClick={() => handleScrollTo('#contact')}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white hover:text-amber-300 bg-white/5 hover:bg-white/10 rounded-xl border border-white/15 transition-all"
              >
                <span>Contact Me</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Social Links & Location Bar */}
            <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 text-xs text-slate-400">
              <div className="flex items-center gap-3">
                <span className="font-medium text-slate-300">Connect:</span>
                <a
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Profile"
                  className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalInfo.socialLinks.email}`}
                  aria-label="Direct Email"
                  className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              <div className="flex items-center gap-1.5 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Portrait Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-amber-500/20 via-blue-500/10 to-transparent rounded-3xl blur-xl" />

              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0d101a] shadow-2xl">
                {/* Photo Container */}
                <div className="relative aspect-[4/5] overflow-hidden bg-slate-900 group">
                  <img
                    src={personalInfo.avatarUrl}
                    alt="KS Vishal — Business & Marketing Portfolio"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback in case of path variance
                      const target = e.currentTarget;
                      if (!target.src.includes('ks_vishal_photo.jpeg')) {
                        target.src = '/src/assets/images/ks_vishal_photo.jpeg';
                      }
                    }}
                    className="w-full h-full object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle scrim for contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d101a] via-transparent to-transparent opacity-75" />

                  {/* Top-Right Floating Indicator */}
                  <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md border border-white/15 px-3 py-1 rounded-full text-xs font-medium text-white flex items-center gap-1.5 shadow-lg">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    <span>Founder Mindset</span>
                  </div>
                </div>

                {/* Profile Card Meta */}
                <div className="p-5 space-y-2 border-t border-white/10 bg-[#0d101a]">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-lg font-bold text-white font-display">KS Vishal</h2>
                      <p className="text-xs text-slate-400">BBA Undergraduate · KCLAS</p>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-amber-400 font-medium bg-amber-400/10 px-2.5 py-1 rounded-md border border-amber-400/20">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Verified Profile</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 pt-1">
                    “An idea becomes an opportunity only when someone has the courage to execute it.”
                  </p>

                  <div className="pt-2 text-[11px] text-slate-500 flex items-center justify-between border-t border-white/5">
                    <span>Kumaraguru Institutions</span>
                    <span>Class of 2026</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Full-Width Institutional Pillar Strip Below Hero Split */}
        <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-amber-500/20 transition-colors">
            <span className="text-xs uppercase tracking-wider text-slate-500 block">Institution</span>
            <span className="text-sm sm:text-base font-bold text-white font-display mt-1 block">
              KCLAS Coimbatore
            </span>
            <span className="text-xs text-slate-400 mt-0.5 block">Bachelor of Business Admin</span>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-amber-500/20 transition-colors">
            <span className="text-xs uppercase tracking-wider text-slate-500 block">Campus Fest</span>
            <span className="text-sm sm:text-base font-bold text-white font-display mt-1 block">
              YUGAM 2026
            </span>
            <span className="text-xs text-slate-400 mt-0.5 block">Marketing Team & Leadership</span>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-amber-500/20 transition-colors">
            <span className="text-xs uppercase tracking-wider text-slate-500 block">Fellowship</span>
            <span className="text-sm sm:text-base font-bold text-white font-display mt-1 block">
              PRICE ProtoSem
            </span>
            <span className="text-xs text-slate-400 mt-0.5 block">FORGE × RAI Ambassador</span>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-amber-500/20 transition-colors">
            <span className="text-xs uppercase tracking-wider text-slate-500 block">Leadership</span>
            <span className="text-sm sm:text-base font-bold text-white font-display mt-1 block">
              PR Executive
            </span>
            <span className="text-xs text-slate-400 mt-0.5 block">Entrepreneurship Vertical</span>
          </div>
        </div>

      </div>
    </section>
  );
};
