import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUp, Heart, Linkedin, Github, Instagram, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const { personalInfo } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#06070a] text-slate-400 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-12 border-b border-white/10">
          
          {/* Brand Column (6 cols) */}
          <div className="md:col-span-6 space-y-3">
            <a
              href="#"
              className="text-2xl font-extrabold tracking-tight font-display text-white hover:text-amber-400 transition-colors inline-block"
            >
              KS VISHAL
            </a>
            <p className="text-xs uppercase tracking-widest text-amber-400 font-semibold font-display">
              {personalInfo.brandStatement}
            </p>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
              Bachelor of Business Administration at Kumaraguru College of Liberal Arts and Science (KCLAS).
              Passionate about entrepreneurship, marketing strategy, and building meaningful connections.
            </p>
          </div>

          {/* Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-display">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">About & Philosophy</a>
              </li>
              <li>
                <a href="#bento-overview" className="hover:text-amber-400 transition-colors">Bento Grid Overview</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-amber-400 transition-colors">Experience & Leadership</a>
              </li>
              <li>
                <a href="#protosem" className="hover:text-amber-400 transition-colors">The ProtoSem Journey</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-amber-400 transition-colors">Projects & Business Initiatives</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-amber-400 transition-colors">Skills & Expertise</a>
              </li>
              <li>
                <a href="#education" className="hover:text-amber-400 transition-colors">Education & KCLAS</a>
              </li>
            </ul>
          </div>

          {/* Social & Back to Top (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-display">
              Direct Channels
            </h4>
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-amber-400 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-amber-400 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-amber-400 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.socialLinks.email}`}
                aria-label="Email"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-amber-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-amber-400" />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} KS Vishal. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Coimbatore, Tamil Nadu, India</span>
            <span>·</span>
            <span>KCLAS Undergraduate</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
