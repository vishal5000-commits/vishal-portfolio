import React, { useState } from 'react';
import { portfolioData, ProjectItem } from '../data/portfolioData';
import { Modal } from './Modal';
import { 
  ArrowUpRight, 
  Sprout, 
  Truck, 
  Layers, 
  Store, 
  CheckCircle2, 
  Target, 
  Compass, 
  Sparkles,
  Info
} from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="py-20 lg:py-28 relative border-t border-white/5 bg-[#08090f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
              <span>05</span>
              <span aria-hidden="true">·</span>
              <span>Venture Explorations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
              Projects & Business Initiatives
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400">
              Strategic business concepts, direct distribution frameworks, and agricultural market explorations.
            </p>
          </div>

          <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300 flex items-center gap-2 max-w-sm">
            <Info className="w-4 h-4 shrink-0 text-amber-400" />
            <span>Presented strictly as entrepreneurial concepts and business explorations.</span>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="rounded-2xl bg-[#0f121d] border border-white/10 hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:shadow-2xl hover:shadow-black/60 hover:-translate-y-1"
            >
              <div>
                {/* Visual Image Header */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900 border-b border-white/10">
                  <img
                    src={proj.imageUrl}
                    alt={proj.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f121d] via-transparent to-transparent opacity-90" />
                  
                  {/* Status Indicator */}
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-semibold text-amber-300 border border-white/10">
                    {proj.status}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 space-y-4">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 block mb-1">
                      {proj.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-white group-hover:text-amber-300 transition-colors">
                      {proj.title}
                    </h3>
                  </div>

                  {/* Vision Quote */}
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Core Vision:
                    </span>
                    <p className="text-xs sm:text-sm text-slate-200 font-medium italic leading-relaxed">
                      “{proj.vision}”
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3">
                    {proj.description}
                  </p>

                  {/* Focus Areas List */}
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      Key Focus Verticals:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {proj.focusAreas.slice(0, 3).map((area, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 text-[11px] text-slate-300 bg-white/5 rounded-md border border-white/5"
                        >
                          {area}
                        </span>
                      ))}
                      {proj.focusAreas.length > 3 && (
                        <span className="px-2 py-1 text-[11px] text-slate-400 bg-white/5 rounded-md">
                          +{proj.focusAreas.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Action */}
              <div className="p-5 sm:px-7 border-t border-white/10 bg-[#121625]/40 flex items-center justify-between">
                <span className="text-xs text-slate-400">Concept Deep-Dive</span>
                <button
                  onClick={() => setSelectedProject(proj)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 group-hover:translate-x-0.5 transition-all"
                >
                  <span>Explore Architecture</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Deep Dive Modal */}
      {selectedProject && (
        <Modal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          title={selectedProject.title}
          subtitle={`${selectedProject.category} · ${selectedProject.status}`}
          maxWidth="max-w-4xl"
        >
          <div className="space-y-6 text-slate-300">
            {/* Visual Media Showcase */}
            <div className="relative aspect-video max-h-72 w-full rounded-xl overflow-hidden border border-white/10 bg-slate-900">
              <img
                src={selectedProject.imageUrl}
                alt={selectedProject.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs uppercase font-bold text-amber-400 tracking-wider">Concept Blueprint</span>
                <h4 className="text-lg font-bold font-display">{selectedProject.title}</h4>
              </div>
            </div>

            {/* Vision Banner */}
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300 block mb-1">
                Strategic Vision & Mandate
              </span>
              <p className="text-sm sm:text-base text-white font-medium italic">
                “{selectedProject.vision}”
              </p>
            </div>

            {/* Opportunity Statement */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Market Opportunity & Frictions Addressed:
              </h4>
              <p className="text-sm text-slate-200 leading-relaxed bg-white/5 p-4 rounded-xl border border-white/10">
                {selectedProject.opportunityStatement}
              </p>
            </div>

            {/* Value Propositions */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Core Value Propositions:
              </h4>
              <ul className="space-y-2.5">
                {selectedProject.valueProposition.map((val, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{val}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Two-Column Grid: Distribution & Target Audience */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase text-amber-400">
                  <Truck className="w-4 h-4" />
                  <span>Distribution Logistics Strategy</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {selectedProject.distributionStrategy}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase text-amber-400">
                  <Target className="w-4 h-4" />
                  <span>Target Consumer & Partner Profile</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {selectedProject.targetAudience}
                </p>
              </div>
            </div>

            {/* All Focus Areas */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                All Exploration Focus Areas:
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.focusAreas.map((area, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-xs text-amber-300 bg-amber-400/10 rounded-lg border border-amber-400/20 font-medium"
                  >
                    {area}
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
