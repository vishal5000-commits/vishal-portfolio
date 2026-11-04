import React, { useState } from 'react';
import { portfolioData, ProtoSemWeek } from '../data/portfolioData';
import { Modal } from './Modal';
import { 
  BookOpen, 
  Search, 
  Calendar, 
  FileText, 
  ExternalLink, 
  Lightbulb, 
  CheckCircle, 
  Sparkles, 
  ChevronRight, 
  Download, 
  Image as ImageIcon,
  Quote,
  Eye,
  PlusCircle,
  HelpCircle
} from 'lucide-react';

export const ProtoSemSection: React.FC = () => {
  const { protoSemJourney } = portfolioData;
  const [selectedWeek, setSelectedWeek] = useState<ProtoSemWeek | null>(null);
  const [activeStatus, setActiveStatus] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showAddGuide, setShowAddGuide] = useState<boolean>(false);
  const [lightboxImage, setLightboxImage] = useState<{ url: string; caption: string } | null>(null);

  const statuses = ['All', 'Completed', 'In Progress', 'Upcoming'];

  const filteredWeeks = protoSemJourney.weeks.filter((week) => {
    const matchesStatus = activeStatus === 'All' || week.status === activeStatus;
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      week.sessionTitle.toLowerCase().includes(query) ||
      week.subtitle.toLowerCase().includes(query) ||
      week.personalReflections.toLowerCase().includes(query) ||
      week.keyTakeaways.some((t) => t.toLowerCase().includes(query)) ||
      week.learningObjectives.some((o) => o.toLowerCase().includes(query));
    return matchesStatus && matchesSearch;
  });

  return (
    <section id="protosem" className="py-20 lg:py-28 relative border-t border-white/5 bg-[#090b13]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            <span>04</span>
            <span aria-hidden="true">·</span>
            <span>Experiential Learning Archive</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            {protoSemJourney.sectionTitle}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            {protoSemJourney.subtitle}
          </p>
          <div className="mt-3 flex items-center gap-2 text-xs text-amber-400/90 font-medium">
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
            <span>FORGE Innovation & Ventures · Retailers Association of India (RAI) · Kumaraguru Institutions</span>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-10 p-3 rounded-2xl bg-[#0f121e] border border-white/10">
          
          {/* Status Tabs */}
          <div className="flex flex-wrap items-center gap-1.5">
            {statuses.map((status) => (
              <button
                key={status}
                onClick={() => setActiveStatus(status)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  activeStatus === status
                    ? 'bg-amber-400 text-black shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {status}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search weekly topics or reflections..."
              className="w-full pl-9 pr-4 py-1.5 text-xs bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
            />
          </div>

          {/* Quick Guide Trigger */}
          <button
            onClick={() => setShowAddGuide(!showAddGuide)}
            className="flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-colors border border-white/5 whitespace-nowrap"
          >
            <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
            <span>Archive Guide</span>
          </button>
        </div>

        {/* Expandable Guide for Future Weekly Additions */}
        {showAddGuide && (
          <div className="mb-10 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs sm:text-sm text-amber-200 space-y-2 animate-fadeIn">
            <div className="flex items-center justify-between">
              <span className="font-bold text-amber-300 uppercase tracking-wider">How to Add Future Weekly Entries</span>
              <button onClick={() => setShowAddGuide(false)} className="text-amber-300 hover:text-white text-xs underline">Dismiss</button>
            </div>
            <p className="text-slate-300">
              The ProtoSem journal is fully modular. To record Week 7, Week 8, or additional reflections, simply open <code className="px-1.5 py-0.5 rounded bg-black/40 text-amber-300 font-mono">src/data/portfolioData.ts</code> and append a new week object inside <code className="px-1.5 py-0.5 rounded bg-black/40 text-amber-300 font-mono">protoSemJourney.weeks</code>. The UI, filters, search, and reading modal adapt instantly!
            </p>
          </div>
        )}

        {/* Weekly Journal Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredWeeks.map((week) => (
            <div
              key={week.weekNumber}
              className="rounded-2xl bg-[#0f121d] border border-white/10 hover:border-amber-400/30 transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:shadow-2xl hover:shadow-black/60"
            >
              <div>
                {/* Card Header */}
                <div className="p-6 sm:p-7 border-b border-white/10 bg-[#121625]/60 flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400 mb-1">
                      <span>Week {String(week.weekNumber).padStart(2, '0')}</span>
                      <span aria-hidden="true" className="text-slate-600">·</span>
                      <span className={`text-[11px] px-2 py-0.5 rounded ${
                        week.status === 'Completed' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                        week.status === 'In Progress' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
                        'bg-slate-500/10 text-slate-400 border border-slate-500/20'
                      }`}>
                        {week.status}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-white group-hover:text-amber-300 transition-colors">
                      {week.sessionTitle}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1">
                      {week.subtitle}
                    </p>
                  </div>
                </div>

                {/* Photograph / Media Strip if available */}
                {week.photographUrl && (
                  <div 
                    onClick={() => setLightboxImage({ url: week.photographUrl!, caption: week.photographCaption || week.sessionTitle })}
                    className="relative aspect-video w-full bg-slate-900 cursor-zoom-in overflow-hidden border-b border-white/10 group/img"
                  >
                    <img
                      src={week.photographUrl}
                      alt={week.photographCaption || week.sessionTitle}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white">
                      <span className="truncate pr-2 text-slate-300 text-[11px]">
                        {week.photographCaption || 'Session documentation photograph'}
                      </span>
                      <span className="shrink-0 flex items-center gap-1 text-amber-300 bg-black/60 px-2 py-1 rounded backdrop-blur-sm text-[11px]">
                        <Eye className="w-3 h-3" />
                        <span>Enlarge</span>
                      </span>
                    </div>
                  </div>
                )}

                {/* Body Content */}
                <div className="p-6 sm:p-7 space-y-6">
                  {/* Learning Objectives */}
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      Learning Objectives:
                    </span>
                    <ul className="space-y-2">
                      {week.learningObjectives.map((obj, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                          <span>{obj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Takeaways Box */}
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                      <Lightbulb className="w-3.5 h-3.5" />
                      <span>Key Takeaways</span>
                    </span>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
                      {week.keyTakeaways.map((takeaway, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-amber-400 font-bold">›</span>
                          <span>{takeaway}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Personal Reflections */}
                  <div className="p-4 rounded-xl bg-[#0b0d14] border border-white/5 relative">
                    <Quote className="w-5 h-5 text-amber-400/20 absolute top-3 right-3" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Personal Reflection:
                    </span>
                    <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                      “{week.personalReflections}”
                    </p>
                  </div>

                  {/* Related Activities */}
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      Related Activities & Sprints:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {week.relatedActivities.map((act, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 text-[11px] text-slate-300 bg-white/5 rounded-md border border-white/5"
                        >
                          {act}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer with Resources & Full Log Button */}
              <div className="p-5 sm:px-7 border-t border-white/10 bg-[#121625]/40 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  {week.resources.map((res, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-400 hover:text-amber-300 bg-white/5 px-2.5 py-1 rounded border border-white/10"
                      title={res.title}
                    >
                      <FileText className="w-3 h-3 text-amber-400" />
                      <span className="truncate max-w-[130px]">{res.title}</span>
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedWeek(week)}
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-black bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors shadow-sm"
                >
                  <span>Open Full Entry</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredWeeks.length === 0 && (
          <div className="text-center py-16 p-8 rounded-2xl bg-white/[0.02] border border-white/10">
            <BookOpen className="w-10 h-10 text-slate-500 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white">No weekly entries match your filter</h3>
            <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
              Try adjusting your search query or reset status to 'All' to view all completed and upcoming ProtoSem sessions.
            </p>
            <button
              onClick={() => { setActiveStatus('All'); setSearchQuery(''); }}
              className="mt-4 px-4 py-2 text-xs font-semibold text-amber-400 bg-amber-400/10 rounded-lg border border-amber-400/20"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* Full Weekly Journal Modal */}
      {selectedWeek && (
        <Modal
          isOpen={!!selectedWeek}
          onClose={() => setSelectedWeek(null)}
          title={`Week ${String(selectedWeek.weekNumber).padStart(2, '0')}: ${selectedWeek.sessionTitle}`}
          subtitle={`${selectedWeek.subtitle} · Status: ${selectedWeek.status}`}
          maxWidth="max-w-4xl"
        >
          <div className="space-y-6 text-slate-300">
            {selectedWeek.photographUrl && (
              <div className="rounded-xl overflow-hidden border border-white/10 aspect-video max-h-80 w-full bg-slate-900">
                <img
                  src={selectedWeek.photographUrl}
                  alt={selectedWeek.photographCaption || selectedWeek.sessionTitle}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
                1. Core Learning Objectives
              </h4>
              <ul className="space-y-2">
                {selectedWeek.learningObjectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-200">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
                2. Key Strategic Takeaways
              </h4>
              <ul className="space-y-2">
                {selectedWeek.keyTakeaways.map((takeaway, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-200">
                    <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-amber-500/10 border border-amber-500/20">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-2">
                3. Personal Reflections & Critical Insight
              </h4>
              <p className="text-sm text-slate-200 italic leading-relaxed">
                “{selectedWeek.personalReflections}”
              </p>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                4. Related Activities & Deliverables
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedWeek.relatedActivities.map((act, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs text-slate-300 bg-white/5 rounded-lg border border-white/10"
                  >
                    {act}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                5. Session Resources & Documents
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedWeek.resources.map((res, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-amber-400" />
                      <span className="text-xs font-medium text-white">{res.title}</span>
                    </div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 px-2 py-0.5 rounded bg-white/10">
                      {res.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Modal>
      )}

      {/* Lightbox Modal for Full Image View */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md cursor-pointer"
          onClick={() => setLightboxImage(null)}
        >
          <div className="max-w-4xl max-h-[85vh] relative" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightboxImage.url}
              alt={lightboxImage.caption}
              referrerPolicy="no-referrer"
              className="max-w-full max-h-[80vh] rounded-xl object-contain shadow-2xl border border-white/20"
            />
            <p className="text-center text-xs sm:text-sm text-slate-300 mt-3">
              {lightboxImage.caption}
            </p>
          </div>
        </div>
      )}

    </section>
  );
};
