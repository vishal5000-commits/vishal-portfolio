import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  TrendingUp, 
  Camera, 
  Compass, 
  Sparkles, 
  CheckCircle,
  Video,
  PenTool,
  Share2,
  Bookmark,
  Globe2,
  Sprout,
  Store,
  Layers,
  ArrowRight
} from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const { skills } = portfolioData;
  const [activeTab, setActiveTab] = useState<'all' | 'professional' | 'creative' | 'business'>('all');

  return (
    <section id="skills" className="py-20 lg:py-28 relative border-t border-white/5 bg-[#0a0c14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
              <span>06</span>
              <span aria-hidden="true">·</span>
              <span>Competencies & Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
              Skills & Expertise
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-xl">
              Professional execution, creative media production, and strategic business focus areas.
            </p>
          </div>

          {/* Interactive Category Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1.5 bg-[#10131f] border border-white/10 rounded-xl">
            {[
              { id: 'all', label: 'All Disciplines' },
              { id: 'professional', label: 'Professional Skills' },
              { id: 'creative', label: 'Creative Skills' },
              { id: 'business', label: 'Business Interests' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-amber-400 text-black shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Display */}
        <div className="space-y-12">
          
          {/* Category 1: Professional Skills */}
          {(activeTab === 'all' || activeTab === 'professional') && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-white/10">
                <TrendingUp className="w-4 h-4 text-amber-400" />
                <h3 className="text-lg font-bold font-display text-white">Professional & Strategic Skills</h3>
                <span className="text-xs text-slate-500 ml-auto">8 Core Competencies</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {skills.professional.map((item) => (
                  <div
                    key={item.name}
                    className="p-5 rounded-xl bg-[#0f121d] border border-white/10 hover:border-amber-400/40 transition-all duration-300 group hover:-translate-y-0.5"
                  >
                    <div className="flex items-start justify-between">
                      <h4 className="text-base font-bold font-display text-white group-hover:text-amber-300 transition-colors">
                        {item.name}
                      </h4>
                      <CheckCircle className="w-4 h-4 text-amber-400/80 shrink-0 mt-0.5" />
                    </div>
                    <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                      {item.focus}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Category 2: Creative Skills */}
          {(activeTab === 'all' || activeTab === 'creative') && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-white/10">
                <Camera className="w-4 h-4 text-emerald-400" />
                <h3 className="text-lg font-bold font-display text-white">Creative & Media Capabilities</h3>
                <span className="text-xs text-slate-500 ml-auto">5 Production Disciplines</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {skills.creative.map((item) => (
                  <div
                    key={item.name}
                    className="p-5 rounded-xl bg-[#0f121d] border border-white/10 hover:border-emerald-400/40 transition-all duration-300 group hover:-translate-y-0.5"
                  >
                    <div className="flex items-start justify-between">
                      <h4 className="text-base font-bold font-display text-white group-hover:text-emerald-300 transition-colors">
                        {item.name}
                      </h4>
                      <Sparkles className="w-4 h-4 text-emerald-400/80 shrink-0 mt-0.5" />
                    </div>
                    <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                      {item.focus}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Category 3: Business Interests */}
          {(activeTab === 'all' || activeTab === 'business') && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-white/10">
                <Compass className="w-4 h-4 text-sky-400" />
                <h3 className="text-lg font-bold font-display text-white">Business Interests & Growth Domains</h3>
                <span className="text-xs text-slate-500 ml-auto">6 Strategic Arenas</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {skills.businessInterests.map((item) => (
                  <div
                    key={item.name}
                    className="p-5 rounded-xl bg-[#0f121d] border border-white/10 hover:border-sky-400/40 transition-all duration-300 group hover:-translate-y-0.5"
                  >
                    <div className="flex items-start justify-between">
                      <h4 className="text-base font-bold font-display text-white group-hover:text-sky-300 transition-colors">
                        {item.name}
                      </h4>
                      <Globe2 className="w-4 h-4 text-sky-400/80 shrink-0 mt-0.5" />
                    </div>
                    <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                      {item.focus}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
