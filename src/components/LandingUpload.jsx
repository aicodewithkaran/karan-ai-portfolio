import React, { useState } from 'react';
import { UploadCloud, FileText, Lock, Zap, ShieldCheck, ArrowRight, Play } from 'lucide-react';
import { useScanShield } from '../context/ScanShieldContext';
import { SAMPLE_CONTRACTS } from '../data/sampleContracts';

export default function LandingUpload({ onContractSelected }) {
  const { theme, selectContract } = useScanShield();
  const [isDragging, setIsDragging] = useState(false);

  const handleSelectSample = (sampleId) => {
    selectContract(sampleId);
    onContractSelected();
  };

  return (
    <div className="min-h-[85vh] flex flex-col justify-center items-center py-16 px-4 sm:px-6 relative">
      
      {/* Glow Backdrop */}
      <div className="absolute w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="relative z-10 max-w-3xl w-full text-center">
        
        {/* Category Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-mono mb-6">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>ENTERPRISE CONTRACT RISK AUDITOR</span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight leading-tight mb-4">
          Audit Contracts in Seconds. <br />
          <span className="text-indigo-500">Uncover Hidden Liability Traps.</span>
        </h1>

        <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto mb-10 leading-relaxed font-light">
          Upload any legal MSA, NDA, or Vendor Agreement to receive an instant clause-by-clause risk breakdown, plain-English trap warnings, and safer counter-language redlines.
        </p>

        {/* Minimalist Dropzone */}
        <div
          onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={(e) => { e.preventDefault(); setIsDragging(false); handleSelectSample('msa-enterprise'); }}
          className={`p-10 rounded-3xl border-2 border-dashed transition-all duration-300 cursor-pointer mb-10 ${
            isDragging
              ? 'border-indigo-500 bg-indigo-500/10 scale-[1.01]'
              : theme === 'dark'
                ? 'border-slate-800 bg-slate-900/40 hover:border-indigo-500/60 hover:bg-slate-900/80'
                : 'border-slate-300 bg-white hover:border-indigo-500/60 hover:bg-slate-50'
          }`}
          onClick={() => handleSelectSample('msa-enterprise')}
        >
          <div className="w-14 h-14 rounded-2xl bg-indigo-600/15 text-indigo-400 border border-indigo-500/30 flex items-center justify-center mx-auto mb-4">
            <UploadCloud className="w-7 h-7" />
          </div>

          <div className="text-sm font-bold font-display text-slate-100 mb-1">
            Drop your PDF or Word Contract here
          </div>
          <div className="text-xs text-slate-400 font-mono mb-4">
            Supports .pdf, .docx, .txt (up to 50MB)
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 text-white font-display text-xs font-semibold shadow-md shadow-indigo-600/20 hover:bg-indigo-500 transition-colors">
            <span>Browse Files</span>
          </div>
        </div>

        {/* 1-Click Sample Launchers */}
        <div className="text-left mb-12">
          <div className="text-[11px] font-mono text-slate-400 mb-3 text-center uppercase tracking-wider">
            OR TEST INSTANTLY WITH PRE-LOADED SAMPLE CONTRACTS:
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {SAMPLE_CONTRACTS.map((contract) => (
              <button
                key={contract.id}
                onClick={() => handleSelectSample(contract.id)}
                className={`p-4 rounded-2xl border text-left flex items-center justify-between transition-all group ${
                  theme === 'dark'
                    ? 'bg-slate-900/60 border-slate-800 hover:border-indigo-500/50 hover:bg-slate-900'
                    : 'bg-white border-slate-200 hover:border-indigo-500/50 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold font-display text-slate-200 group-hover:text-indigo-400 transition-colors">
                      {contract.title}
                    </div>
                    <div className="text-[10px] font-mono text-slate-400">
                      Score: {contract.complianceScore}/100 • {contract.type}
                    </div>
                  </div>
                </div>

                <div className="p-1.5 rounded-lg bg-indigo-600/20 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <Play className="w-3.5 h-3.5 fill-current" />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Trust Micro-Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-mono pt-4 border-t border-slate-800/80">
          <div className="flex items-center gap-2">
            <Lock className="w-3.5 h-3.5 text-emerald-400" />
            <span>Zero Data Persistence</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-3.5 h-3.5 text-indigo-400" />
            <span>Instant Clause Extraction</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
            <span>Baseline Playbook Matching</span>
          </div>
        </div>

      </div>
    </div>
  );
}
