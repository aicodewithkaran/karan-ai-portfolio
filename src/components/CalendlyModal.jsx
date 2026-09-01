import React, { useEffect } from 'react';
import { X, Calendar, Video, CheckCircle, ExternalLink } from 'lucide-react';

export default function CalendlyModal({ isOpen, onClose }) {
  const calendlyUrl = import.meta.env.VITE_CALENDLY_URL || 'https://calendly.com/aicodewithkaran/25-30min';

  useEffect(() => {
    if (isOpen && window.Calendly) {
      try {
        window.Calendly.initInlineWidget({
          url: calendlyUrl,
          parentElement: document.getElementById('calendly-inline-container'),
          prefill: {},
          utm: {}
        });
      } catch (e) {
        console.log("Calendly inline widget initialization note:", e);
      }
    }
  }, [isOpen, calendlyUrl]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="glass-panel w-full max-w-4xl max-h-[92vh] overflow-hidden rounded-3xl border border-cyan-500/40 shadow-2xl flex flex-col relative">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-slate-900/60">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-display text-slate-100">Schedule a 1-on-1 Strategy Call</h3>
              <p className="text-xs font-mono text-cyan-400">25-30 min Meeting with Karan Singh (AI/ML Engineer)</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 flex flex-col md:flex-row gap-6">
          
          {/* Info Side Panel */}
          <div className="w-full md:w-1/3 flex flex-col justify-between p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
            <div>
              <h4 className="text-sm font-bold font-display text-slate-200 mb-4">What we will discuss:</h4>
              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Contract Risk Auditing & Legal Document Workflows</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Resume Screening & Candidate Evaluation Automation</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Custom LLM Integration & Document Intelligence</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-3">
                <Video className="w-4 h-4 text-purple-400" />
                <span>Google Meet / Zoom Video Call</span>
              </div>

              <a
                href={calendlyUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-xs font-mono flex items-center justify-center gap-2 transition-colors"
              >
                <span>Open in Calendly Web</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Embedded Calendly iFrame Container */}
          <div className="w-full md:w-2/3 min-h-[480px] rounded-2xl bg-slate-950/60 border border-slate-800 overflow-hidden relative">
            <div id="calendly-inline-container" className="w-full h-full min-h-[480px]">
              <iframe
                src={calendlyUrl}
                width="100%"
                height="100%"
                frameBorder="0"
                title="Calendly Meeting Booking"
                className="w-full h-full min-h-[480px] rounded-2xl"
              ></iframe>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
