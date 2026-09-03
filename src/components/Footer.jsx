import React from 'react';
import { Mail, Phone, MapPin, Calendar, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { sfx } from '../utils/sfx';

export default function Footer({ onOpenCalendly }) {
  const linkedinUrl = import.meta.env.VITE_LINKEDIN_URL || 'https://www.linkedin.com/in/karan-singh04/';
  const githubUrl = import.meta.env.VITE_GITHUB_URL || 'https://github.com/aicodewithkaran';
  const email = import.meta.env.VITE_CONTACT_EMAIL || 'business.aicodewithkaran@gmail.com';

  return (
    <footer id="contact" className="relative pt-20 pb-12 overflow-hidden bg-slate-950 border-t border-slate-900">
      
      {/* Ambient background glow */}
      <div className="glow-orb-cyan bottom-0 left-1/2 -translate-x-1/2 opacity-50"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Callout Card */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-cyan-500/30 text-center max-w-4xl mx-auto mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 text-cyan-400">
            <Sparkles className="w-32 h-32" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-100 mb-4">
            Ready to Automate Your <span className="text-gradient-cyan">Document Workflows</span>?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-8 font-light leading-relaxed">
            Whether you need custom contract risk auditing, automated resume evaluation, or intelligent PDF extraction, 
            schedule a 1-on-1 strategy call to discuss your project requirements.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => { sfx.playClick(); onOpenCalendly(); }}
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-2xl text-sm font-semibold font-display bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-xl shadow-cyan-500/20 hover:scale-[1.03] transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule 1-on-1 Strategy Call</span>
            </button>

            <a
              href={`mailto:${email}`}
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-2xl text-sm font-semibold font-display glass-panel border border-slate-700 text-slate-200 hover:text-white hover:border-cyan-400 transition-all"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>{email}</span>
            </a>
          </div>
        </div>

        {/* Contact Links & Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 text-sm text-slate-400 font-light">
          
          <div className="md:col-span-2">
            <div className="font-bold text-xl text-slate-100 font-display mb-2 flex items-center gap-2">
              Karan Singh
              <span className="text-xs font-mono text-cyan-400 font-normal px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
                AI/ML Engineer
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm mb-4">
              Building high-precision AI document tools, RAG pipelines, and automated business workflows for legal, HR, and document-heavy teams.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl glass-panel text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl glass-panel text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                title="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-mono text-xs text-slate-300 tracking-wider mb-4 font-semibold">DIRECT CONTACT</h3>
            <ul className="space-y-3 text-xs">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href={`mailto:${email}`} className="hover:text-cyan-300 transition-colors">{email}</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>(+91) 9350365060</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Panchkula, Haryana, India</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs text-slate-300 tracking-wider mb-4 font-semibold">NAVIGATION</h3>
            <ul className="space-y-2 text-xs">
              <li><a href="#hero" className="hover:text-cyan-400 transition-colors">Target Solutions</a></li>
              <li><a href="#experience" className="hover:text-cyan-400 transition-colors">Career Timeline</a></li>
              <li><a href="#projects" className="hover:text-cyan-400 transition-colors">Featured AI Work</a></li>
              <li><a href="#testimonials" className="hover:text-cyan-400 transition-colors">Testimonials</a></li>
              <li><a href="#skills" className="hover:text-cyan-400 transition-colors">Stack & Certifications</a></li>
            </ul>
          </div>

        </div>

        {/* AI Shortcuts Bar */}
        <div className="py-4 px-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 mb-8 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="text-cyan-400 font-bold">⚡ Shortcuts:</span>
            <span>Keyboard shortcuts for fast navigation</span>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-[11px]">
            <button onClick={() => { sfx.playClick(); onOpenCalendly(); }} className="hover:text-cyan-300">
              <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-cyan-400 font-bold">B</kbd> Book Meeting
            </button>
          </div>
        </div>

        {/* Centered Copyright */}
        <div className="pt-6 border-t border-slate-900 text-center text-xs font-mono text-slate-500">
          © {new Date().getFullYear()} Karan Singh. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

