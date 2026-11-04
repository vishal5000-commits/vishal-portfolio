import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  Mail, 
  Linkedin, 
  Github, 
  Instagram, 
  Send, 
  Copy, 
  Check, 
  MapPin, 
  ArrowUpRight,
  MessageSquare,
  AlertCircle,
  ExternalLink
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { personalInfo } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.socialLinks.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name.';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim()) errs.subject = 'Subject is required.';
    if (!formData.message.trim() || formData.message.trim().length < 15) {
      errs.message = 'Please share a message of at least 15 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const handleMailtoLaunch = () => {
    const subject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject}`);
    const body = encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}\n\n---\nSent via KS Vishal Portfolio`
    );
    window.location.href = `mailto:${personalInfo.socialLinks.email}?subject=${subject}&body=${body}`;
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setSubmitted(false);
    setErrors({});
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative border-t border-white/5 bg-[#07080d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            <span>09</span>
            <span aria-hidden="true">·</span>
            <span>Initiate Dialogue</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight">
            Connect & Collaborate
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Open for conversations around marketing strategy, campus events, entrepreneurial initiatives, and distribution projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Info & Social Hub (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Email Card */}
            <div className="p-6 rounded-2xl bg-[#0f121d] border border-white/10 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block">
                Direct Communication
              </span>
              
              <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                <div className="flex items-center gap-3 truncate">
                  <div className="p-2 rounded-lg bg-amber-400/10 text-amber-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-white truncate font-mono">
                    {personalInfo.socialLinks.email}
                  </span>
                </div>
                
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 text-xs font-semibold text-amber-300 hover:text-black bg-amber-400/10 hover:bg-amber-400 rounded-lg transition-all flex items-center gap-1.5 shrink-0"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>{personalInfo.location} · KCLAS Campus</span>
              </div>
            </div>

            {/* Social Channels List */}
            <div className="p-6 rounded-2xl bg-[#0f121d] border border-white/10 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                Professional Channels
              </span>

              <div className="space-y-2.5">
                {[
                  {
                    name: 'LinkedIn',
                    handle: 'ks-vishal',
                    href: personalInfo.socialLinks.linkedin,
                    icon: <Linkedin className="w-4 h-4 text-sky-400" />,
                    note: 'Professional networking & updates'
                  },
                  {
                    name: 'GitHub',
                    handle: 'vishal5000-commits',
                    href: personalInfo.socialLinks.github,
                    icon: <Github className="w-4 h-4 text-slate-300" />,
                    note: 'Code repositories & web projects'
                  },
                  {
                    name: 'Instagram',
                    handle: '@ksvishal',
                    href: personalInfo.socialLinks.instagram,
                    icon: <Instagram className="w-4 h-4 text-pink-400" />,
                    note: 'Visual documentation & campus life'
                  }
                ].map((channel) => (
                  <a
                    key={channel.name}
                    href={channel.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-amber-400/30 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-black/40">
                        {channel.icon}
                      </div>
                      <div>
                        <div className="text-sm font-bold font-display text-white group-hover:text-amber-300 transition-colors">
                          {channel.name}
                        </div>
                        <div className="text-xs text-slate-400">
                          {channel.note}
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400 transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Personal Brand Credo Reminder */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-orange-500/5 to-transparent border border-amber-500/20">
              <span className="text-[10px] uppercase font-bold tracking-widest text-amber-400 block">
                Brand Core
              </span>
              <p className="text-base font-extrabold tracking-wider text-white font-display mt-1">
                {personalInfo.brandStatement}
              </p>
              <p className="text-xs text-slate-400 mt-1">
                Open to constructive discourse with mentors, student peers, and industry leaders.
              </p>
            </div>

          </div>

          {/* Right Column: Verified Working Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-2xl bg-[#0f121d] border border-white/10 relative overflow-hidden">
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="text-xl font-bold font-display text-white">Send a Message</h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Direct form with validation. Generates a pre-formatted dispatch ready for your email client.
                    </p>
                  </div>

                  {/* Name and Email row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className={`w-full px-4 py-2.5 text-xs sm:text-sm bg-white/5 border rounded-xl text-white placeholder-slate-500 focus:outline-none transition-colors ${
                          errors.name ? 'border-rose-500 focus:border-rose-500' : 'border-white/10 focus:border-amber-400'
                        }`}
                      />
                      {errors.name && <p className="text-[11px] text-rose-400 mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. rahul@example.com"
                        className={`w-full px-4 py-2.5 text-xs sm:text-sm bg-white/5 border rounded-xl text-white placeholder-slate-500 focus:outline-none transition-colors ${
                          errors.email ? 'border-rose-500 focus:border-rose-500' : 'border-white/10 focus:border-amber-400'
                        }`}
                      />
                      {errors.email && <p className="text-[11px] text-rose-400 mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                      Subject / Topic *
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Discussion regarding Yugam 2026 Marketing / Agri-Business"
                      className={`w-full px-4 py-2.5 text-xs sm:text-sm bg-white/5 border rounded-xl text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.subject ? 'border-rose-500 focus:border-rose-500' : 'border-white/10 focus:border-amber-400'
                      }`}
                    />
                    {errors.subject && <p className="text-[11px] text-rose-400 mt-1">{errors.subject}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                        Message Content *
                      </label>
                      <span className="text-[11px] text-slate-500">{formData.message.length} chars</span>
                    </div>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hello Vishal, I would like to discuss..."
                      className={`w-full px-4 py-3 text-xs sm:text-sm bg-white/5 border rounded-xl text-white placeholder-slate-500 focus:outline-none transition-colors resize-none ${
                        errors.message ? 'border-rose-500 focus:border-rose-500' : 'border-white/10 focus:border-amber-400'
                      }`}
                    />
                    {errors.message && <p className="text-[11px] text-rose-400 mt-1">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-black bg-amber-400 hover:bg-amber-300 rounded-xl transition-all shadow-md active:scale-[0.99]"
                    >
                      <Send className="w-4 h-4" />
                      <span>Prepare & Submit Inquiry</span>
                    </button>
                    <p className="text-[11px] text-slate-500 text-center mt-2.5">
                      Validated client-side. No mock delivery claims.
                    </p>
                  </div>
                </form>
              ) : (
                <div className="space-y-6 animate-fadeIn py-4">
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 flex items-start gap-3">
                    <Check className="w-5 h-5 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-emerald-200">Inquiry Formatted Successfully!</h4>
                      <p className="text-xs text-emerald-300/90 mt-1">
                        Your message for KS Vishal is verified and packaged. You can dispatch it immediately through your default email client or copy the formatted text.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-black/40 border border-white/10 text-xs font-mono text-slate-300 space-y-1">
                    <p><span className="text-amber-400">To:</span> {personalInfo.socialLinks.email}</p>
                    <p><span className="text-amber-400">Subject:</span> [Portfolio Inquiry] {formData.subject}</p>
                    <p className="text-slate-400 pt-2 border-t border-white/10">{formData.message}</p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      onClick={handleMailtoLaunch}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-black bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors shadow-md"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Send via Default Email App</span>
                    </button>

                    <button
                      onClick={resetForm}
                      className="px-4 py-2.5 text-xs font-medium text-slate-400 hover:text-white bg-white/5 rounded-xl border border-white/10 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
