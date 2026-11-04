import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  Compass, 
  Target, 
  Lightbulb, 
  Users, 
  MessageSquare, 
  Network, 
  Calendar, 
  TrendingUp, 
  Sparkles,
  Quote
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { about, personalInfo } = portfolioData;

  const strengthIcons: Record<string, React.ReactNode> = {
    "Strategic Execution": <Target className="w-5 h-5 text-amber-400" />,
    "Marketing Strategy": <TrendingUp className="w-5 h-5 text-emerald-400" />,
    "Public Relations": <MessageSquare className="w-5 h-5 text-sky-400" />,
    "Business Development": <Compass className="w-5 h-5 text-blue-400" />,
    "Event Management": <Calendar className="w-5 h-5 text-purple-400" />,
    "Communication & PR": <Users className="w-5 h-5 text-rose-400" />,
    "Creative Thinking": <Lightbulb className="w-5 h-5 text-yellow-400" />,
    "Networking": <Network className="w-5 h-5 text-orange-400" />
  };

  return (
    <section id="about" className="py-20 lg:py-28 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            <span>01</span>
            <span aria-hidden="true">·</span>
            <span>Identity & Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            About Me
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            {about.bio}
          </p>
        </div>

        {/* Philosophy Feature Card */}
        <div className="mb-16 relative overflow-hidden rounded-2xl bg-gradient-to-r from-amber-500/10 via-orange-500/5 to-transparent border border-amber-500/20 p-8 sm:p-10">
          <Quote className="absolute top-6 right-6 w-16 h-16 text-amber-500/10 -rotate-12" />
          <div className="relative z-10 max-w-3xl space-y-3">
            <span className="text-xs uppercase font-bold tracking-widest text-amber-400">Guiding Philosophy</span>
            <blockquote className="text-xl sm:text-2xl font-bold font-display text-white leading-snug">
              “{about.philosophy}”
            </blockquote>
            <p className="text-xs text-slate-400 pt-1">
              — KS Vishal · Entrepreneurial Enthusiast & BBA Undergraduate at KCLAS
            </p>
          </div>
        </div>

        {/* Key Strengths Grid */}
        <div>
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
            <div>
              <h3 className="text-xl font-bold font-display text-white">Core Strengths & Competencies</h3>
              <p className="text-xs text-slate-400 mt-1">Foundational capabilities cultivated through event management, PR, and enterprise initiatives</p>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-400">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Multi-disciplinary skillset</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {about.strengths.map((st) => (
              <div
                key={st.name}
                className="p-5 rounded-xl bg-[#0f121d] border border-white/10 hover:border-amber-400/30 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {strengthIcons[st.name] || <Sparkles className="w-5 h-5 text-amber-400" />}
                </div>
                <h4 className="text-base font-bold font-display text-white group-hover:text-amber-300 transition-colors">
                  {st.name}
                </h4>
                <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
