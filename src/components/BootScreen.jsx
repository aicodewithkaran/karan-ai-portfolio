import React, { useState, useEffect } from 'react';
import { Terminal, Shield, Cpu, Zap, ArrowRight } from 'lucide-react';

export default function BootScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [statusLog, setStatusLog] = useState('BOOTING KARAN.AI CORE ENGINE...');
  const [completed, setCompleted] = useState(false);

  const bootLogs = [
    { threshold: 15, log: 'LOADING NEURAL EMBEDDING MODEL (MISTRAL-7B)...' },
    { threshold: 35, log: 'INITIALIZING RAG VECTOR RETRIEVAL PIPELINE...' },
    { threshold: 60, log: 'MOUNTING DOCUMENT INTELLIGENCE OCR PARSER...' },
    { threshold: 85, log: 'SYNCHRONIZING CALENDLY APPOINTMENT ENGINE...' },
    { threshold: 100, log: 'SYSTEM ONLINE: KARAN SINGH AI/ML PORTFOLIO READY.' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setCompleted(true);
            setTimeout(onComplete, 400);
          }, 300);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 8) + 4;
        const currentLog = bootLogs.find(b => next >= b.threshold && prev < b.threshold);
        if (currentLog) {
          setStatusLog(currentLog.log);
        }
        return next > 100 ? 100 : next;
      });
    }, 60);

    return () => clearInterval(timer);
  }, []);

  if (completed) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-[#03060c] text-cyan-400 font-mono flex flex-col items-center justify-center p-6 select-none animate-fadeOut">
      
      {/* Scanline Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] pointer-events-none opacity-60"></div>
      
      {/* Glow orb */}
      <div className="absolute w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-xl w-full text-center space-y-6 glass-panel p-8 sm:p-10 rounded-3xl border border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.15)]">
        
        {/* Header Branding */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs tracking-widest text-cyan-300">
            <Cpu className="w-3.5 h-3.5 animate-spin" />
            <span>NEURAL INTERFACE v3.6</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
            KARAN<span className="text-cyan-400">.AI</span>
          </h1>
          <p className="text-xs text-slate-400 tracking-wider">AI/ML ENGINEER PORTFOLIO OS</p>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs text-slate-300">
            <span>INITIALIZING ENGINE</span>
            <span className="text-cyan-300 font-bold">{progress}%</span>
          </div>
          <div className="w-full h-2.5 bg-slate-900 rounded-full overflow-hidden border border-cyan-500/30 p-0.5">
            <div
              className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full transition-all duration-150 shadow-[0_0_12px_rgba(6,182,212,0.8)]"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Dynamic Status Terminal Line */}
        <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-left flex items-center gap-3">
          <Terminal className="w-4 h-4 text-cyan-400 shrink-0" />
          <div className="text-[11px] text-cyan-300 font-mono tracking-tight truncate">
            {statusLog}
          </div>
        </div>

        {/* Skip button */}
        <button
          onClick={onComplete}
          className="inline-flex items-center gap-2 text-xs text-slate-400 hover:text-cyan-300 transition-colors pt-2 group"
        >
          <span>ENTER DIRECTLY</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </button>

      </div>
    </div>
  );
}
