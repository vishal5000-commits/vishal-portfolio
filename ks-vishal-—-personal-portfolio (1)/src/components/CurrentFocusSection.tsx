import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Compass, Sparkles, ArrowRight, Zap, Target, Network, Store, TrendingUp } from 'lucide-react';

export const CurrentFocusSection: React.FC = () => {
  const { currentFocus } = portfolioData;

  const focusIcons: Record<string, React.ReactNode> = {
    "Venture Ideation": <Zap className="w-4 h-4 text-amber-400" />,
    "Brand Voice": <TrendingUp className="w-4 h-4 text-emerald-400" />,
    "Partnerships": <Target className="w-4 h-4 text-sky-400" />,
    "Agri-Commerce": <Store className="w-4 h-4 text-orange-400" />,
    "Network Building": <Network className="w-4 h-4 text-purple-400" />,
    "Collaborative Learning": <Sparkles className="w-4 h-4 text-rose-400" />
  };

  return (
    <section className="py-20 lg:py-24 relative border-t border-white/5 bg-[#0a0c14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            <span>08</span>
            <span aria-hidden="true">·</span>
            <span>Strategic Horizons</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            Current Focus & Explorations
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Active avenues where I am currently investing my time, curiosity, and execution energy.
          </p>
        </div>

        {/* 6 Focus Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentFocus.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#0f121d] border border-white/10 hover:border-amber-400/30 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-lg bg-white/5 group-hover:scale-105 transition-transform">
                  {focusIcons[item.badge] || <Compass className="w-4 h-4 text-amber-400" />}
                </div>
                <span className="text-[11px] font-semibold text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-md border border-amber-400/20">
                  {item.badge}
                </span>
              </div>

              <h3 className="text-lg font-bold font-display text-white group-hover:text-amber-300 transition-colors">
                {item.title}
              </h3>
              
              <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
