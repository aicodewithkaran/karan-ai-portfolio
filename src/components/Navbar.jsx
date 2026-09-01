import React, { useState } from 'react';
import { Calendar, Menu, X, Sparkles, FileText, Code2, Briefcase, Mail, MessageSquare, ShieldCheck } from 'lucide-react';
import { sfx } from '../utils/sfx';

export default function Navbar({ onOpenCalendly, onOpenScanShield }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#hero', icon: Sparkles },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Projects', href: '#projects', icon: Code2 },
    { name: 'Testimonials', href: '#testimonials', icon: MessageSquare },
    { name: 'Stack', href: '#skills', icon: FileText },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-4">
      <nav className="max-w-7xl mx-auto glass-panel rounded-2xl px-5 py-3 flex items-center justify-between transition-all duration-300">
        
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-3 group" onClick={() => sfx.playClick()}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 p-[1px]">
            <div className="w-full h-full bg-[#0b0f17] rounded-[11px] flex items-center justify-center font-bold text-cyan-400 font-display text-lg group-hover:bg-transparent group-hover:text-white transition-all duration-300">
              KS
            </div>
          </div>
          <div>
            <div className="font-bold text-slate-100 tracking-wide flex items-center gap-1.5 font-display text-base sm:text-lg">
              Karan Singh
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            </div>
            <div className="text-[11px] text-cyan-400 font-mono tracking-tight font-medium">AI/ML Engineer</div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => sfx.playClick()}
              onMouseEnter={() => sfx.playHover()}
              className="hover:text-cyan-400 transition-colors py-1 relative group text-xs sm:text-sm"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Action Buttons (ScanShield + Calendly) */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Launch ScanShield AI CTA */}
          <button
            onClick={() => { sfx.playClick(); onOpenScanShield(); }}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold font-display glass-panel border border-indigo-500/40 text-indigo-300 hover:text-white hover:bg-indigo-600/20 hover:border-indigo-400 transition-all duration-300"
          >
            <ShieldCheck className="w-4 h-4 text-indigo-400" />
            <span className="hidden sm:inline">ScanShield AI</span>
          </button>

          {/* Book Appointment CTA */}
          <button
            onClick={() => { sfx.playClick(); onOpenCalendly(); }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium font-display bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Meeting</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => { sfx.playClick(); setMobileMenuOpen(!mobileMenuOpen); }}
            className="md:hidden p-2 text-slate-400 hover:text-white rounded-lg bg-slate-800/40"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-7xl mx-auto glass-panel rounded-2xl p-5 border border-slate-800 animate-fadeIn">
          <div className="flex flex-col gap-4">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenScanShield(); }}
              className="flex items-center gap-3 text-indigo-300 font-medium py-2 px-3 rounded-lg bg-indigo-500/10 border border-indigo-500/20"
            >
              <ShieldCheck className="w-4 h-4 text-indigo-400" />
              <span>Launch ScanShield AI Platform</span>
            </button>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 font-medium py-2 px-3 rounded-lg hover:bg-slate-800/50"
              >
                <link.icon className="w-4 h-4 text-cyan-400" />
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
