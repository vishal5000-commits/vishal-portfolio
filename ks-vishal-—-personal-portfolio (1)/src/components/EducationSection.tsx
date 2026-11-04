import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  GraduationCap, 
  Award, 
  BookOpen, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  HelpCircle,
  Sparkles,
  Layers
} from 'lucide-react';

export const EducationSection: React.FC = () => {
  const { education } = portfolioData;
  const [showGuide, setShowGuide] = useState(false);

  return (
    <section id="education" className="py-20 lg:py-24 relative border-t border-white/5 bg-[#08090f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
              <span>07</span>
              <span aria-hidden="true">·</span>
              <span>Academic Pedigree</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
              Education & Academic Foundation
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-xl">
              Formal management education, integrated business coursework, and institutional milestones.
            </p>
          </div>

          <button
            onClick={() => setShowGuide(!showGuide)}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-slate-400 hover:text-white bg-white/5 rounded-lg border border-white/10 self-start md:self-auto"
          >
            <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
            <span>Customize Academic Records</span>
          </button>
        </div>

        {/* Education Guide Banner */}
        {showGuide && (
          <div className="mb-8 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200 space-y-1 animate-fadeIn">
            <span className="font-bold text-amber-300 block">Adding Certifications & Awards:</span>
            <p className="text-slate-300">
              You can update your GPA, certifications, or Dean's list honours directly inside <code className="px-1.5 py-0.5 rounded bg-black/40 text-amber-300 font-mono">src/data/portfolioData.ts</code> in the <code className="px-1.5 py-0.5 rounded bg-black/40 text-amber-300 font-mono">education.academicAchievementsPlaceholder</code> array without any CSS modification.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Degree Card (8 cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-[#0f121d] border border-white/10 p-7 sm:p-8 space-y-6">
            <div className="flex items-start justify-between gap-4">
              <div className="p-3.5 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="text-right">
                <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                  {education.status}
                </span>
              </div>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
                {education.degree}
              </h3>
              <p className="text-base font-semibold text-amber-400 mt-1">
                {education.institution}
              </p>
              <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                <span>{education.location}</span>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block">
                Academic Experience & Exposure:
              </span>
              <ul className="space-y-2.5">
                {education.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Placeholders for Certifications & Additional Learning (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                  Certifications & Learning
                </h3>
              </div>
              <span className="text-[11px] text-slate-500">Documented Archive</span>
            </div>

            {education.academicAchievementsPlaceholder.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#0f121d] border border-dashed border-white/20 hover:border-amber-400/40 transition-colors space-y-2 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded">
                    Placeholder Entry {idx + 1}
                  </span>
                  <span className="text-xs text-slate-500 font-mono">{item.date}</span>
                </div>
                <h4 className="text-sm sm:text-base font-bold font-display text-white group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-400">
                  {item.issuer}
                </p>
                <p className="text-[11px] text-slate-500 italic pt-1 border-t border-white/5">
                  {item.note}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
