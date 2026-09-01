import React, { useState, useEffect } from 'react';
import { Activity, Cpu, Database, Gauge, Zap, Server, ShieldCheck } from 'lucide-react';

export default function SystemDashboard() {
  const [latency, setLatency] = useState(38);
  const [tokensPerSec, setTokensPerSec] = useState(118);
  const [qps, setQps] = useState(1420);

  useEffect(() => {
    const interval = setInterval(() => {
      setLatency(Math.floor(36 + Math.random() * 8));
      setTokensPerSec(Math.floor(115 + Math.random() * 8));
      setQps(Math.floor(1400 + Math.random() * 50));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Container */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-cyan-500/30 relative overflow-hidden">
          
          {/* Top Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800/80">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <Activity className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-display text-slate-100">Live AI System Architecture Monitor</h3>
                <p className="text-xs font-mono text-cyan-400">Real-Time LLM Inference & Vector Pipeline Health</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="text-xs font-mono text-emerald-400 font-semibold">ALL NEURAL NODES OPERATIONAL</span>
            </div>
          </div>

          {/* Grid of Gauges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                <span>INFERENCE LATENCY</span>
                <Zap className="w-3.5 h-3.5 text-cyan-400" />
              </div>
              <div className="text-2xl font-bold font-mono text-cyan-300">{latency} ms</div>
              <div className="text-[10px] font-mono text-slate-400 mt-1">Target: &lt; 50ms</div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                <span>TOKEN THROUGHPUT</span>
                <Cpu className="w-3.5 h-3.5 text-purple-400" />
              </div>
              <div className="text-2xl font-bold font-mono text-purple-300">{tokensPerSec} tok/s</div>
              <div className="text-[10px] font-mono text-slate-400 mt-1">Streaming Active</div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                <span>VECTOR INDEX QPS</span>
                <Database className="w-3.5 h-3.5 text-blue-400" />
              </div>
              <div className="text-2xl font-bold font-mono text-blue-300">{qps} req/s</div>
              <div className="text-[10px] font-mono text-slate-400 mt-1">FAISS / Chroma Vector Engine</div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                <span>PRIMARY LLMs</span>
                <Server className="w-3.5 h-3.5 text-emerald-400" />
              </div>
              <div className="text-sm font-bold font-mono text-emerald-300 mt-1">Mistral / LLaMA / DeepSeek</div>
              <div className="text-[10px] font-mono text-slate-400 mt-1">LoRA Fine-Tuned</div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
