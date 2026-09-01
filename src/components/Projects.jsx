import React, { useState } from 'react';
import { Code2, ShieldAlert, FileSearch, Sparkles, ExternalLink, Cpu, Check, ArrowRight, X, Info } from 'lucide-react';
import { sfx } from '../utils/sfx';

export default function Projects() {
  const [activeModalProject, setActiveModalProject] = useState(null);

  const projects = [
    {
      id: "shieldscan",
      title: "ShieldScan AI",
      subtitle: "AI-Powered Legal Risk Analyst & Contract Intelligence",
      category: "Document Intelligence",
      badge: "Self-Initiated Production Architecture",
      demoUrl: "https://shieldscan.streamlit.app/",
      icon: ShieldAlert,
      iconBg: "from-cyan-500 to-blue-600",
      description: "A multi-stage LLM pipeline designed for contract analysis, clause extraction, legal risk detection, and plain-English summaries.",
      longDescription: "Built as a production-grade architecture to demonstrate automated legal audit capabilities. Ingests PDF contracts, extracts non-standard clauses, and routes queries through multi-stage LLMs with zero data persistence for privacy protection.",
      keyFeatures: [
        "Multi-Stage LLM Pipeline for clause-by-clause contract risk extraction",
        "OCR-enabled document processing via PyMuPDF & Tesseract for scanned PDFs",
        "Intelligent model routing (fast triage vs deep reasoning LLMs)",
        "Concurrent asynchronous execution workflows for zero-latency reports",
        "Secure zero-persistence report generation preserving strict data privacy"
      ],
      tags: ["Multi-Stage LLMs", "PyMuPDF", "OCR Tesseract", "FastAPI", "Vector Embeddings", "Mistral / LLaMA"]
    },
    {
      id: "candidex",
      title: "Candidex AI",
      subtitle: "AI Resume Screening & Candidate Evaluation Platform",
      category: "Recruitment Automation",
      badge: "Self-Initiated Proof-of-Concept Platform",
      demoUrl: "https://candidex.streamlit.app/",
      icon: FileSearch,
      iconBg: "from-purple-500 to-pink-600",
      description: "An AI-powered resume evaluation system combining ATS scoring with LLM-based candidate assessment and interview recommendations.",
      longDescription: "Engineered as an end-to-end recruitment platform proof-of-concept. Ingests candidate resumes, parses technical skills beyond keyword matching, and synthesizes tailored interview questions and scoring matrices.",
      keyFeatures: [
        "Hybrid ATS scoring + LLM deep semantic candidate evaluation",
        "Automated recruiter analytics dashboard with ranking leaderboards",
        "Resilient multi-model LLM fallback handling for continuous uptime",
        "Automated tailored interview question generator per applicant profile",
        "Secure authentication workflows and candidate pipeline state management"
      ],
      tags: ["ATS Scoring Engine", "LLM Evaluation", "Resume Parsing", "Supabase", "PostgreSQL", "Python Workflows"]
    }
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-950/40">
      
      {/* Background glow */}
      <div className="glow-orb-purple top-1/2 -left-60"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 mb-4">
            <Code2 className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-xs font-mono text-cyan-300">SYSTEM ARCHITECTURES & PROOFS-OF-CONCEPT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-display text-slate-100 mb-4">
            Featured <span className="text-gradient-cyan">AI Work</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Detailed breakdown of self-initiated LLM applications with live Streamlit interactive demos.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj) => {
            const Icon = proj.icon;
            return (
              <div
                key={proj.id}
                className="glass-panel rounded-3xl p-7 sm:p-8 border border-slate-800/90 glass-panel-hover flex flex-col justify-between group"
              >
                <div>
                  
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${proj.iconBg} p-0.5 shadow-lg`}>
                      <div className="w-full h-full bg-[#0b0f17] rounded-[14px] flex items-center justify-center text-white">
                        <Icon className="w-7 h-7 text-cyan-300" />
                      </div>
                    </div>
                    <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-slate-800/90 text-cyan-400 border border-slate-700">
                      {proj.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-2xl font-bold font-display text-slate-100 group-hover:text-cyan-300 transition-colors mb-2">
                    {proj.title}
                  </h3>
                  <div className="text-xs font-mono text-slate-400 mb-4">{proj.subtitle}</div>

                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
                    {proj.description}
                  </p>

                  {/* Streamlit Inactivity Notice Banner */}
                  <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-[11px] font-mono text-slate-400 flex items-start gap-2 mb-6">
                    <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Hosted on Streamlit. If asleep due to inactivity, click <strong>"Wake App"</strong> or contact me if unreachable.</span>
                  </div>

                  {/* Feature Highlights Quick List */}
                  <div className="space-y-2.5 mb-6">
                    {proj.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {proj.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-slate-900/90 text-cyan-300 border border-cyan-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Actions (Live Demo + Architecture Modal) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <a
                    href={proj.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => sfx.playClick()}
                    className="py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-semibold font-display flex items-center justify-center gap-2 hover:opacity-90 shadow-md shadow-cyan-500/20 transition-all"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Launch Live Demo</span>
                  </a>

                  <button
                    onClick={() => { sfx.playClick(); setActiveModalProject(proj); }}
                    className="py-3 px-4 rounded-xl glass-panel border border-slate-700/70 text-xs font-semibold font-display text-slate-200 hover:text-white hover:border-cyan-500/50 hover:bg-cyan-500/10 flex items-center justify-center gap-2 transition-all"
                  >
                    <span>View Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Project Deep Dive Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
          <div className="glass-panel w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl p-6 sm:p-8 border border-cyan-500/30 shadow-2xl relative">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Title */}
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-2xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-display text-slate-100">{activeModalProject.title}</h3>
                <div className="text-xs font-mono text-cyan-400">{activeModalProject.subtitle}</div>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
              {activeModalProject.longDescription}
            </p>

            {/* Streamlit Notice */}
            <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-300 flex items-start gap-2.5 mb-6">
              <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong>Live Streamlit Demo:</strong> {activeModalProject.demoUrl}<br />
                <span className="text-slate-400 text-[11px]">Hosted on Streamlit Free Tier. If the app goes to sleep due to inactivity, click <em>"Wake App"</em> or contact me to start it up immediately.</span>
              </div>
            </div>

            {/* Key Features List */}
            <div className="mb-6">
              <h4 className="text-xs font-mono text-slate-400 tracking-wider mb-3">CORE SYSTEM CAPABILITIES</h4>
              <div className="space-y-2.5">
                {activeModalProject.keyFeatures.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-200">
                    <Sparkles className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mb-8">
              <h4 className="text-xs font-mono text-slate-400 tracking-wider mb-3">TECHNOLOGY STACK</h4>
              <div className="flex flex-wrap gap-2">
                {activeModalProject.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="px-3 py-1 rounded-lg text-xs font-mono bg-cyan-950/60 text-cyan-300 border border-cyan-500/30">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={activeModalProject.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-display font-semibold text-xs flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Launch Streamlit Live App</span>
              </a>

              <button
                onClick={() => setActiveModalProject(null)}
                className="px-6 py-3 rounded-xl bg-slate-800 text-slate-200 hover:bg-slate-700 font-display font-medium text-xs transition-colors"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
