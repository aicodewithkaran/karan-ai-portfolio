import React from 'react';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: "AI/ML Engineer",
      company: "Razonica",
      period: "Mar 2025 – Present",
      location: "Startup Environment",
      type: "Full-Time",
      highlight: "0 → 1 Startup AI Architecture",
      description: [
        "Built LLM-powered automation and NLP systems for transforming unstructured business data into structured insights.",
        "Engineered custom tools and functions that autonomous AI agents use to execute multi-step workflows.",
        "Developed scalable Python pipelines for data ingestion, preprocessing, semantic matching, and workflow automation.",
        "Designed end-to-end ML workflows covering experimentation, evaluation, optimization, and AI-assisted decision systems.",
        "Contributed across AI engineering, backend workflows, and data infrastructure in a fast-paced 0 to 1 startup environment."
      ],
      skills: ["LLMs & Fine-Tuning", "Agent Tooling & Functions", "LangGraph / CrewAI", "Python Pipelines", "Semantic Matching", "Vector Retrieval"]
    },
    {
      role: "Data Science & AI Intern",
      company: "Gilbert Research Center",
      period: "Jul 2024 – Dec 2024",
      location: "Remote / Research",
      type: "Internship",
      highlight: "Healthcare AI & Signal Processing",
      description: [
        "Worked on AI models for medical imaging, diagnostics, signal processing, and healthcare prediction systems.",
        "Preprocessed high-dimensional data and evaluated model accuracy for clinical decision support systems."
      ],
      skills: ["Medical Imaging", "Signal Processing", "Healthcare Prediction", "TensorFlow", "Scikit-learn"]
    },
    {
      role: "Machine Learning Intern",
      company: "Feynn Labs",
      period: "Jun 2023 – Aug 2023",
      location: "Remote",
      type: "Internship",
      highlight: "Consumer Behavior ML Modeling",
      description: [
        "Developed ML models, performed data preprocessing, visualization, and consumer behavior analysis using Python.",
        "Engineered predictive features to uncover key market patterns and user decision trends."
      ],
      skills: ["Feature Engineering", "Consumer Analytics", "Pandas", "Matplotlib", "Supervised Learning"]
    },
    {
      role: "Machine Learning Intern",
      company: "iNeuron.ai",
      period: "Mar 2023 – Oct 2023",
      location: "Remote",
      type: "Internship",
      highlight: "Applied ML & Business Intelligence",
      description: [
        "Built ML projects including phishing domain detection, book recommendation systems, and Amazon sales trend analysis using Python and Microsoft Power BI.",
        "Implemented anomaly detection algorithms and interactive reporting dashboards."
      ],
      skills: ["Phishing Detection", "Recommendation Systems", "Power BI", "Python", "Data Mining"]
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-purple-500/30 mb-4">
            <Briefcase className="w-3.5 h-3.5 text-purple-400" />
            <span className="text-xs font-mono text-purple-300">CAREER ROADMAP</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-display text-slate-100 mb-4">
            Professional <span className="text-gradient-purple">Experience</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            From early-stage 0 to 1 AI startups building agent workflows to specialized data science internships.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-slate-800/80 ml-4 sm:ml-8 md:ml-32 space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-6 sm:pl-10 group">
              
              {/* Timeline Indicator Node */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full glass-panel border border-cyan-500/40 bg-[#0b0f17] flex items-center justify-center group-hover:scale-110 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all duration-300">
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></div>
              </div>

              {/* Card Container */}
              <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800/90 glass-panel-hover">
                
                {/* Meta Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xl sm:text-2xl font-bold font-display text-slate-100 group-hover:text-cyan-300 transition-colors">
                      {exp.role}
                    </span>
                    <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      {exp.company}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>

                {/* Highlight Badge */}
                <div className="inline-block px-3 py-1 rounded-lg bg-slate-800/80 text-xs font-semibold text-purple-300 border border-purple-500/20 mb-4">
                  ⚡ {exp.highlight}
                </div>

                {/* Description Bullets */}
                <ul className="space-y-2.5 mb-6 text-sm text-slate-300 font-light">
                  {exp.description.map((item, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2.5">
                      <ChevronRight className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/60">
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-900/80 text-slate-300 border border-slate-700/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
