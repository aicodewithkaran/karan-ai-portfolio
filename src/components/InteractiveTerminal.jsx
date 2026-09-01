import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, Play, CornerDownLeft } from 'lucide-react';
import { sfx } from '../utils/sfx';

export default function InteractiveTerminal({ isOpen, onClose, onOpenCalendly }) {
  const [history, setHistory] = useState([
    { type: 'sys', text: 'KARAN SINGH AI TERMINAL v3.6 [Type "help" for available commands]' }
  ]);
  const [inputVal, setInputVal] = useState('');
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmdStr) => {
    const raw = cmdStr.trim();
    if (!raw) return;

    sfx.playKeypress();
    const clean = raw.toLowerCase();
    const newHistory = [...history, { type: 'user', text: `$ ${raw}` }];

    switch (clean) {
      case 'help':
        newHistory.push({
          type: 'res',
          text: `AVAILABLE COMMANDS:
  help         - Display command directory
  skills       - View AI/ML Tech Matrix
  projects     - Explore ShieldScan AI & Candidex AI
  experience   - View Razonica & internship timeline
  book         - Open Calendly appointment booking modal
  cat resume   - Output structured resume summary
  status       - Check live AI system inference metrics
  clear        - Clear terminal screen`
        });
        break;
      case 'skills':
        newHistory.push({
          type: 'res',
          text: `AI/ML STACK:
  [+] LLMs: Mistral-7B, LLaMA-3, DeepSeek-V3, LoRA Fine-tuning
  [+] RAG: Hybrid Vector Search (FAISS/Chroma), Semantic Chunking
  [+] NLP: Document Intelligence, Clause Risk Extraction, PyMuPDF, OCR
  [+] Backend: Python, FastAPI, Flask, Supabase, PostgreSQL, REST APIs`
        });
        break;
      case 'projects':
        newHistory.push({
          type: 'res',
          text: `FEATURED PROJECTS:
  1. ShieldScan AI -> Legal Risk Analyst with multi-stage LLMs & zero data persistence.
  2. Candidex AI   -> AI Resume Screening Platform with ATS scoring & candidate ranking.`
        });
        break;
      case 'experience':
        newHistory.push({
          type: 'res',
          text: `CAREER SUMMARY:
  • Razonica (Mar 2025 - Present) -> AI/ML Engineer (0-1 Startup Environment)
  • Gilbert Research Center      -> Data Science & AI Intern (Healthcare AI)
  • Feynn Labs                    -> Machine Learning Intern (Consumer ML)
  • iNeuron.ai                    -> Machine Learning Intern`
        });
        break;
      case 'book':
        newHistory.push({ type: 'res', text: 'Opening Calendly appointment scheduler...' });
        setTimeout(() => onOpenCalendly(), 300);
        break;
      case 'cat resume':
      case 'cat resume.txt':
        newHistory.push({
          type: 'res',
          text: `KARAN SINGH | AI/ML Engineer
Location: Panchkula, Haryana | Email: iamkaran1804@gmail.com
Summary: AI/ML Engineer specializing in LLM systems, Document Intelligence, RAG Pipelines, and AI Tools.`
        });
        break;
      case 'status':
        newHistory.push({
          type: 'res',
          text: `AI ENGINE METRICS:
  [OK] RAG Index QPS: 1,420 req/s
  [OK] Model Latency: < 42 ms
  [OK] OCR Throughput: 120 pages/min`
        });
        break;
      case 'clear':
        setHistory([]);
        setInputVal('');
        return;
      default:
        newHistory.push({
          type: 'err',
          text: `Command not recognized: "${raw}". Type "help" for valid commands.`
        });
    }

    setHistory(newHistory);
    setInputVal('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="glass-panel w-full max-w-3xl h-[520px] rounded-3xl border border-cyan-500/40 shadow-2xl flex flex-col overflow-hidden font-mono text-xs">
        
        {/* Terminal Header Bar */}
        <div className="px-5 py-3.5 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
            </div>
            <span className="text-slate-300 font-bold tracking-wider text-[11px] flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
              karan@ai-core:~ (zsh)
            </span>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Console Content Area */}
        <div className="p-5 flex-1 overflow-y-auto space-y-3 bg-[#070a11]/90">
          {history.map((h, idx) => (
            <div key={idx} className="leading-relaxed">
              {h.type === 'user' && <div className="text-cyan-400 font-bold">{h.text}</div>}
              {h.type === 'sys' && <div className="text-purple-300 font-semibold">{h.text}</div>}
              {h.type === 'res' && <pre className="text-slate-300 font-mono whitespace-pre-wrap">{h.text}</pre>}
              {h.type === 'err' && <div className="text-red-400">{h.text}</div>}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input Bar */}
        <form
          onSubmit={(e) => { e.preventDefault(); handleCommand(inputVal); }}
          className="p-3 bg-slate-950 border-t border-slate-800 flex items-center gap-2"
        >
          <span className="text-cyan-400 font-bold pl-2">$</span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type 'help'..."
            className="flex-1 bg-transparent text-slate-100 focus:outline-none font-mono text-xs"
            autoFocus
          />
          <button
            type="submit"
            className="px-3 py-1.5 rounded-lg bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 text-[11px] font-mono transition-colors"
          >
            Exec
          </button>
        </form>

      </div>
    </div>
  );
}
