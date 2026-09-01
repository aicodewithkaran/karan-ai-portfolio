import React, { useState } from 'react';
import { Cpu, Database, Wrench, Award, Layout, CheckCircle2 } from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Stack' },
    { id: 'ai', name: 'AI, RAG & Agents', icon: Cpu },
    { id: 'parsing', name: 'Parsing & Data Ingestion', icon: Wrench },
    { id: 'backend', name: 'Backend & Data Architecture', icon: Database },
    { id: 'web', name: 'UI/UX & Web Stack', icon: Layout },
    { id: 'certs', name: 'Verified Certifications', icon: Award }
  ];

  const skillItems = [
    // AI, RAG & Agents
    { name: "LLMs & Fine-Tuning", cat: "ai", desc: "Mistral, LLaMA-3, DeepSeek, LoRA & PEFT fine-tuning workflows" },
    { name: "Agent Orchestration (LangGraph / CrewAI)", cat: "ai", desc: "Multi-step legal & research agent workflows, tool calling & function execution" },
    { name: "Vector Search (Pinecone & pgvector)", cat: "ai", desc: "Pinecone, Supabase pgvector, FAISS, Chroma vector databases" },
    { name: "RAG Frameworks (LlamaIndex & LangChain)", cat: "ai", desc: "Hybrid Search (BM25 + Semantic), Hierarchical Chunking, multi-document RAG" },
    { name: "Prompt Engineering & Guardrails", cat: "ai", desc: "Structured JSON outputs, system prompts, evaluation & safety guardrails" },
    { name: "Scikit-learn & TensorFlow", cat: "ai", desc: "Supervised ML, model evaluation, feature engineering, classification" },

    // Parsing & Data Ingestion
    { name: "LlamaParse & Unstructured API", cat: "parsing", desc: "High-accuracy parsing for complex PDFs, messy tables & unstructured legal files" },
    { name: "PyMuPDF & pdfplumber", cat: "parsing", desc: "Low-level PDF text & layout extraction, bounding box table parsing" },
    { name: "OCR (Tesseract)", cat: "parsing", desc: "Optical character recognition for scanned invoices, contracts & legacy docs" },
    { name: "Data Ingestion & Cleaning Pipelines", cat: "parsing", desc: "Asynchronous Python ingestion pipelines, deduplication, schema normalization" },

    // Backend & Data Architecture
    { name: "Decoupled API-First Architecture", cat: "backend", desc: "Clean REST contract design, microservices, async FastAPI & Flask endpoints" },
    { name: "Python Engineering", cat: "backend", desc: "Asyncio, Pydantic, data pipelines, workflow automation" },
    { name: "SQL & Relational DBs", cat: "backend", desc: "PostgreSQL, Supabase, query optimization, vector embeddings integration" },
    { name: "Pandas & NumPy", cat: "backend", desc: "Data manipulation, matrix operations, statistical preprocessing" },

    // UI/UX & Web Development (NEW TAB)
    { name: "Next.js 14/15 & React", cat: "web", desc: "Server components, App Router, interactive SPA interfaces, state management" },
    { name: "Tailwind CSS & Glassmorphism", cat: "web", desc: "Modern dark aesthetic, HSL custom design systems, responsive flex/grid layouts" },
    { name: "Deployment (Vercel, Render & Railway)", cat: "web", desc: "CI/CD automated deployment, environment variables, production bundles" },
    { name: "Modern Web UI/UX Design System", cat: "web", desc: "Micro-animations, dark mode typography, high-impact interactive user interfaces" },

    // Certifications (Authentic)
    { name: "Intro to ML in Production", cat: "certs", issuer: "DeepLearning.AI (2023)", desc: "MLOps best practices, model monitoring & production deployment" },
    { name: "Introduction to LLMs", cat: "certs", issuer: "Google (2023)", desc: "Generative AI foundations & large language model architecture" },
    { name: "Prompt Engineering for ChatGPT", cat: "certs", issuer: "Vanderbilt University (2023)", desc: "Advanced prompt design & task breakdown strategies" },
    { name: "Introduction to Machine Learning", cat: "certs", issuer: "IIT Kharagpur (2022)", desc: "Machine Learning foundations & core algorithms" }
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skillItems 
    : skillItems.filter(s => s.cat === activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-purple-500/30 mb-4">
            <Cpu className="w-3.5 h-3.5 text-purple-400" />
            <span className="text-xs font-mono text-purple-300">TECHNICAL STACK & CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-display text-slate-100 mb-4">
            Technology <span className="text-gradient-purple">Stack</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Categorized overview of AI frameworks, vector databases, parsing tools, web architecture, and verified credentials.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.2)]'
                  : 'glass-panel text-slate-400 border-slate-800 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              className="glass-panel p-5 rounded-2xl border border-slate-800/80 glass-panel-hover flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold font-display text-slate-200 text-base">{skill.name}</h3>
                  {skill.issuer && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20">
                      {skill.issuer}
                    </span>
                  )}
                </div>
                <p className="text-slate-400 text-xs font-light leading-relaxed">
                  {skill.desc}
                </p>
              </div>

              {skill.cat === 'certs' && (
                <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center gap-1.5 text-[11px] font-mono text-purple-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                  <span>Verified Credential</span>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
