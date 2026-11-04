import React, { useState } from 'react';
import { portfolioData, BentoCard } from '../data/portfolioData';
import { Modal } from './Modal';
import { 
  GraduationCap, 
  Rocket, 
  Megaphone, 
  Users, 
  Network, 
  Compass, 
  ArrowUpRight,
  Sparkles,
  BookOpen,
  Calendar,
  Layers
} from 'lucide-react';

export const BentoGridSection: React.FC = () => {
  const { bentoGrid } = portfolioData;
  const [selectedCard, setSelectedCard] = useState<BentoCard | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap': return <GraduationCap className="w-5 h-5" />;
      case 'Rocket': return <Rocket className="w-5 h-5" />;
      case 'Megaphone': return <Megaphone className="w-5 h-5" />;
      case 'Users': return <Users className="w-5 h-5" />;
      case 'Network': return <Network className="w-5 h-5" />;
      case 'Compass': return <Compass className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="bento-overview" className="py-20 lg:py-28 relative border-t border-white/5 bg-[#0a0c14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
              <span>02</span>
              <span aria-hidden="true">·</span>
              <span>Holistic Snapshot</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
              Bento Grid Overview
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-xl">
              An interactive overview of education, ecosystem exposure, marketing leadership, and core focus areas.
            </p>
          </div>
          <div className="text-xs text-slate-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span>Click any block for deeper institutional details</span>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-12 gap-5">
          
          {/* Card 1: Education (Wide 7 cols) */}
          <div
            onClick={() => setSelectedCard(bentoGrid[0])}
            className="col-span-12 lg:col-span-7 rounded-2xl p-7 bg-[#0f121d] border border-white/10 hover:border-amber-400/40 cursor-pointer transition-all duration-300 relative overflow-hidden group hover:shadow-xl hover:shadow-black/50"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 blur-[80px] pointer-events-none group-hover:bg-sky-500/15 transition-all" />
            <div className="flex items-start justify-between">
              <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20 group-hover:scale-105 transition-transform">
                {getIcon(bentoGrid[0].iconName)}
              </div>
              <span className="text-xs font-semibold text-slate-400 group-hover:text-white flex items-center gap-1 transition-colors">
                <span>{bentoGrid[0].category}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>

            <div className="mt-8 space-y-2">
              <span className="text-xs font-semibold text-amber-400 tracking-wider uppercase">
                {bentoGrid[0].highlight}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white group-hover:text-amber-300 transition-colors">
                {bentoGrid[0].title}
              </h3>
              <p className="text-sm font-medium text-slate-300">
                {bentoGrid[0].subtitle}
              </p>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pt-2">
                {bentoGrid[0].description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center gap-3 text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-slate-300">
                <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                <span>Management, Strategy & Marketing</span>
              </span>
              <span className="text-slate-600">·</span>
              <span>Kumaraguru Institutions Campus</span>
            </div>
          </div>

          {/* Card 2: Entrepreneurship (Compact 5 cols) */}
          <div
            onClick={() => setSelectedCard(bentoGrid[1])}
            className="col-span-12 lg:col-span-5 rounded-2xl p-7 bg-[#0f121d] border border-white/10 hover:border-amber-400/40 cursor-pointer transition-all duration-300 relative overflow-hidden group hover:shadow-xl hover:shadow-black/50"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 blur-[70px] pointer-events-none group-hover:bg-amber-500/15 transition-all" />
            <div className="flex items-start justify-between">
              <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 group-hover:scale-105 transition-transform">
                {getIcon(bentoGrid[1].iconName)}
              </div>
              <span className="text-xs font-semibold text-slate-400 group-hover:text-white flex items-center gap-1 transition-colors">
                <span>{bentoGrid[1].category}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>

            <div className="mt-8 space-y-2">
              <span className="text-xs font-semibold text-amber-400 tracking-wider uppercase">
                {bentoGrid[1].highlight}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white group-hover:text-amber-300 transition-colors">
                {bentoGrid[1].title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pt-2">
                {bentoGrid[1].description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-slate-400">
              <Rocket className="w-3.5 h-3.5 text-amber-400" />
              <span>Venture Ideation · ProtoSem Ecosystem</span>
            </div>
          </div>

          {/* Card 3: Marketing (4 cols) */}
          <div
            onClick={() => setSelectedCard(bentoGrid[2])}
            className="col-span-12 md:col-span-6 lg:col-span-4 rounded-2xl p-6 bg-[#0f121d] border border-white/10 hover:border-amber-400/40 cursor-pointer transition-all duration-300 group"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 group-hover:scale-105 transition-transform">
                {getIcon(bentoGrid[2].iconName)}
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
            </div>

            <span className="text-xs font-semibold text-emerald-400 tracking-wider uppercase">
              {bentoGrid[2].highlight}
            </span>
            <h3 className="text-lg sm:text-xl font-bold font-display text-white mt-1 group-hover:text-emerald-300 transition-colors">
              {bentoGrid[2].title}
            </h3>
            <p className="text-xs text-amber-400 font-medium mt-1">
              {bentoGrid[2].subtitle}
            </p>
            <p className="text-xs text-slate-400 leading-relaxed mt-2.5">
              {bentoGrid[2].description}
            </p>
          </div>

          {/* Card 4: Public Relations (4 cols) */}
          <div
            onClick={() => setSelectedCard(bentoGrid[3])}
            className="col-span-12 md:col-span-6 lg:col-span-4 rounded-2xl p-6 bg-[#0f121d] border border-white/10 hover:border-amber-400/40 cursor-pointer transition-all duration-300 group"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 group-hover:scale-105 transition-transform">
                {getIcon(bentoGrid[3].iconName)}
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
            </div>

            <span className="text-xs font-semibold text-purple-400 tracking-wider uppercase">
              {bentoGrid[3].highlight}
            </span>
            <h3 className="text-lg sm:text-xl font-bold font-display text-white mt-1 group-hover:text-purple-300 transition-colors">
              {bentoGrid[3].title}
            </h3>
            <p className="text-xs text-amber-400 font-medium mt-1">
              {bentoGrid[3].subtitle}
            </p>
            <p className="text-xs text-slate-400 leading-relaxed mt-2.5">
              {bentoGrid[3].description}
            </p>
          </div>

          {/* Card 5: Networking (4 cols) */}
          <div
            onClick={() => setSelectedCard(bentoGrid[4])}
            className="col-span-12 md:col-span-12 lg:col-span-4 rounded-2xl p-6 bg-[#0f121d] border border-white/10 hover:border-amber-400/40 cursor-pointer transition-all duration-300 group"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="p-3 rounded-xl bg-rose-500/10 text-rose-400 border border-rose-500/20 group-hover:scale-105 transition-transform">
                {getIcon(bentoGrid[4].iconName)}
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
            </div>

            <span className="text-xs font-semibold text-rose-400 tracking-wider uppercase">
              {bentoGrid[4].highlight}
            </span>
            <h3 className="text-lg sm:text-xl font-bold font-display text-white mt-1 group-hover:text-rose-300 transition-colors">
              {bentoGrid[4].title}
            </h3>
            <p className="text-xs text-amber-400 font-medium mt-1">
              {bentoGrid[4].subtitle}
            </p>
            <p className="text-xs text-slate-400 leading-relaxed mt-2.5">
              {bentoGrid[4].description}
            </p>
          </div>

          {/* Card 6: Core Interests (Full 12 cols interactive strip) */}
          <div
            onClick={() => setSelectedCard(bentoGrid[5])}
            className="col-span-12 rounded-2xl p-7 bg-gradient-to-r from-[#0f121d] via-[#121624] to-[#0f121d] border border-white/10 hover:border-amber-400/40 cursor-pointer transition-all duration-300 group relative overflow-hidden"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="space-y-2 max-w-xl">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    {getIcon(bentoGrid[5].iconName)}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                    {bentoGrid[5].highlight}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white group-hover:text-amber-300 transition-colors">
                  {bentoGrid[5].title} — {bentoGrid[5].subtitle}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {bentoGrid[5].description}
                </p>
              </div>

              {/* Tag Pillars */}
              <div className="flex flex-wrap items-center gap-2 lg:max-w-md">
                {['Entrepreneurship', 'Agri-Business', 'Marketing Strategy', 'Business Development', 'Innovation', 'Retail Supply Chains'].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 bg-white/5 border border-white/10 group-hover:border-amber-400/30 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Modal for Bento Card Deep Dive */}
      {selectedCard && (
        <Modal
          isOpen={!!selectedCard}
          onClose={() => setSelectedCard(null)}
          title={selectedCard.title}
          subtitle={`${selectedCard.category} · ${selectedCard.highlight}`}
        >
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold block mb-1">
                Institutional Context
              </span>
              <p className="text-base font-semibold text-white">
                {selectedCard.subtitle}
              </p>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {selectedCard.description}
            </p>

            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs sm:text-sm text-amber-200">
              <span className="font-semibold block mb-1 text-amber-300">Brand Synthesis:</span>
              Demonstrates KS Vishal’s hands-on commitment to commercial strategy, campus involvement at Kumaraguru, and proactive ecosystem engagement.
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};
