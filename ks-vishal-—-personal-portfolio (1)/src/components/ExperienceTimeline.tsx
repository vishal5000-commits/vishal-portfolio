import React, { useState } from 'react';
import { portfolioData, ExperienceItem } from '../data/portfolioData';
import { Modal } from './Modal';
import { 
  Briefcase, 
  ChevronRight, 
  CheckCircle2, 
  Building2, 
  Sparkles,
  Layers,
  ArrowUpRight
} from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  const { experiences } = portfolioData;
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedExperience, setSelectedExperience] = useState<ExperienceItem | null>(null);

  const categories = ['All', 'Marketing', 'PR & Leadership', 'Innovation & Fellowship', 'Summits & Industry'];

  const filteredExperiences = activeFilter === 'All'
    ? experiences
    : experiences.filter((exp) => exp.category === activeFilter);

  return (
    <section id="experience" className="py-20 lg:py-28 relative border-t border-white/5 bg-[#08090f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
              <span>03</span>
              <span aria-hidden="true">·</span>
              <span>Leadership & Exposure</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
              Experience & Leadership
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-xl">
              An interactive record of institutional marketing, public relations leadership, and startup ecosystem engagement.
            </p>
          </div>

          {/* Interactive Filter Controls */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#10131f] border border-white/10 rounded-xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                  activeFilter === cat
                    ? 'bg-amber-400 text-black shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline List */}
        <div className="space-y-6">
          {filteredExperiences.map((item, idx) => (
            <div
              key={item.id}
              className="relative rounded-2xl bg-[#0f121d] border border-white/10 hover:border-amber-400/30 transition-all duration-300 p-6 sm:p-8 group"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                
                {/* Left side: Role & Organization */}
                <div className="space-y-3 max-w-2xl">
                  {/* Clean unboxed metadata (§1.A) */}
                  <div className="flex flex-wrap items-center gap-2 text-xs text-amber-400 font-semibold tracking-wide">
                    <span>{item.category}</span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span className="text-slate-400">{item.organization}</span>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-white group-hover:text-amber-300 transition-colors">
                      {item.role}
                    </h3>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 mt-1 font-medium">
                      <Building2 className="w-4 h-4 text-amber-400" />
                      <span>{item.organization}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pt-1">
                    {item.context}
                  </p>

                  {/* Bullet Responsibilities */}
                  <div className="pt-3 space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block">
                      Core Responsibilities:
                    </span>
                    <ul className="space-y-2">
                      {item.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Competency tags */}
                  <div className="pt-4 flex flex-wrap items-center gap-2">
                    {item.keyCompetencies.map((comp) => (
                      <span
                        key={comp}
                        className="px-2.5 py-1 text-[11px] font-medium text-slate-300 bg-white/5 rounded-md border border-white/5"
                      >
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right side: Quick Action */}
                <div className="shrink-0 flex lg:flex-col items-center justify-between lg:justify-start gap-3 pt-4 lg:pt-0 border-t lg:border-t-0 border-white/10">
                  <button
                    onClick={() => setSelectedExperience(item)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 hover:border-amber-400/40 transition-colors"
                  >
                    <span>View Summary</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-amber-400" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Experience Deep Dive Modal */}
      {selectedExperience && (
        <Modal
          isOpen={!!selectedExperience}
          onClose={() => setSelectedExperience(null)}
          title={selectedExperience.role}
          subtitle={`${selectedExperience.organization} · ${selectedExperience.category}`}
        >
          <div className="space-y-5 text-slate-300">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <span className="text-xs uppercase tracking-wider text-amber-400 font-bold block mb-1">
                Context & Scope
              </span>
              <p className="text-sm text-slate-200">
                {selectedExperience.context}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-3">
                Key Responsibilities Documented:
              </h4>
              <ul className="space-y-2.5">
                {selectedExperience.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Demonstrated Competencies:
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedExperience.keyCompetencies.map((comp) => (
                  <span
                    key={comp}
                    className="px-3 py-1 text-xs font-medium text-amber-300 bg-amber-400/10 rounded-lg border border-amber-400/20"
                  >
                    {comp}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};
