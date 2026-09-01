import React, { useState } from 'react';
import { ShieldAlert, AlertTriangle, CheckCircle2, Copy, Check, Target, MessageSquare, Filter, Search } from 'lucide-react';
import { useScanShield } from '../context/ScanShieldContext';

export default function SplitDashboard() {
  const { activeContract, activeLine, highlightLine, riskFilter, setRiskFilter, setIsDrawerOpen, theme } = useScanShield();
  const [copiedId, setCopiedId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  if (!activeContract) return null;

  const handleCopyRedline = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredRisks = activeContract.risks.filter(r => {
    if (riskFilter === 'all') return true;
    return r.level === riskFilter;
  });

  const highCount = activeContract.risks.filter(r => r.level === 'high').length;
  const medCount = activeContract.risks.filter(r => r.level === 'medium').length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
      
      {/* Top Metrics Summary Toolbar */}
      <div className={`p-4 rounded-2xl border mb-6 flex flex-wrap items-center justify-between gap-4 ${
        theme === 'dark'
          ? 'bg-slate-900/60 border-slate-800 text-slate-100'
          : 'bg-white border-slate-200 text-slate-900 shadow-sm'
      }`}>
        
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
          <div className="px-3 py-1 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-bold">
            Compliance Score: {activeContract.complianceScore}/100
          </div>
          <div className="px-3 py-1 rounded-xl bg-red-500/10 text-red-400 border border-red-500/20">
            {highCount} High Risks
          </div>
          <div className="px-3 py-1 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
            {medCount} Medium Risks
          </div>
        </div>

        {/* Risk Level Filter Chips */}
        <div className="flex items-center gap-1.5 text-xs font-mono">
          <span className="text-slate-400 mr-1 flex items-center gap-1">
            <Filter className="w-3 h-3" /> Filter:
          </span>
          {['all', 'high', 'medium'].map((f) => (
            <button
              key={f}
              onClick={() => setRiskFilter(f)}
              className={`px-3 py-1 rounded-xl uppercase transition-all ${
                riskFilter === f
                  ? 'bg-indigo-600 text-white font-bold'
                  : theme === 'dark'
                    ? 'bg-slate-800/60 text-slate-400 hover:text-slate-200'
                    : 'bg-slate-100 text-slate-600 hover:text-slate-900'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

      </div>

      {/* Main Split-Screen Layout (50% / 50%) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Panel: Document Viewer & Line Numbers (6 cols = approx 50%) */}
        <div className={`lg:col-span-6 rounded-2xl border flex flex-col h-[780px] overflow-hidden ${
          theme === 'dark'
            ? 'bg-[#0c1017] border-slate-800'
            : 'bg-slate-50 border-slate-200'
        }`}>
          
          {/* Document Viewer Header */}
          <div className={`p-3.5 border-b flex items-center justify-between ${
            theme === 'dark' ? 'border-slate-800 bg-slate-900/80' : 'border-slate-200 bg-white'
          }`}>
            <div className="text-xs font-bold font-mono text-slate-300 flex items-center gap-2">
              <span>DOCUMENT TEXT</span>
              <span className="text-[10px] text-slate-400 font-normal">({activeContract.documentLines.length} Lines Parsed)</span>
            </div>

            {/* Search Input */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search text..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`text-xs px-2.5 py-1 pl-7 rounded-lg border focus:outline-none focus:border-indigo-500 font-mono ${
                  theme === 'dark' ? 'bg-slate-950 border-slate-800 text-slate-200' : 'bg-slate-100 border-slate-300 text-slate-800'
                }`}
              />
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          {/* Document Lines Content */}
          <div className="p-4 flex-1 overflow-y-auto font-mono text-xs leading-relaxed space-y-1.5 selection:bg-indigo-500/30">
            {activeContract.documentLines.map((lineObj) => {
              const isHighlighted = activeLine === lineObj.line;
              const matchesSearch = searchQuery && lineObj.text.toLowerCase().includes(searchQuery.toLowerCase());

              return (
                <div
                  id={`doc-line-${lineObj.line}`}
                  key={lineObj.line}
                  onClick={() => highlightLine(lineObj.line)}
                  className={`flex items-start gap-3 p-2 rounded-lg transition-all duration-300 cursor-pointer ${
                    lineObj.isHeader ? 'font-bold text-indigo-400 pt-3 pb-1' : ''
                  } ${
                    isHighlighted
                      ? 'bg-indigo-500/15 border-l-4 border-indigo-500 text-slate-100 font-semibold shadow-md shadow-indigo-500/10 animate-pulse'
                      : matchesSearch
                        ? 'bg-amber-500/15 text-amber-200'
                        : theme === 'dark'
                          ? 'hover:bg-slate-800/40 text-slate-300'
                          : 'hover:bg-slate-200/60 text-slate-700'
                  }`}
                >
                  <span className="text-[10px] text-slate-400 select-none min-w-[24px] text-right font-mono">
                    {lineObj.line}
                  </span>
                  <span className="flex-1 break-words">
                    {lineObj.text}
                  </span>
                </div>
              );
            })}
          </div>

        </div>

        {/* Right Panel: Interactive Risk & Clause Breakdown Grid (6 cols = approx 50%) */}
        <div className="lg:col-span-6 space-y-4 h-[780px] overflow-y-auto pr-1">
          {filteredRisks.map((risk) => {
            const isSelected = activeLine === risk.line;

            // Soft Risk Tints
            const isHigh = risk.level === 'high';
            const cardBg = isHigh
              ? theme === 'dark' ? 'bg-red-500/[0.06] border-red-500/30' : 'bg-red-50/70 border-red-200'
              : theme === 'dark' ? 'bg-amber-500/[0.06] border-amber-500/30' : 'bg-amber-50/70 border-amber-200';

            const badgeBg = isHigh
              ? 'bg-red-500/10 text-red-400 border-red-500/30'
              : 'bg-amber-500/10 text-amber-400 border-amber-500/30';

            return (
              <div
                key={risk.id}
                className={`p-5 rounded-2xl border transition-all duration-300 ${cardBg} ${
                  isSelected ? 'ring-2 ring-indigo-500 shadow-xl' : 'hover:scale-[1.005]'
                }`}
              >
                {/* Risk Card Header */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="font-bold font-display text-xs sm:text-sm text-slate-100 flex items-center gap-2">
                    {risk.title}
                  </h3>
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase border shrink-0 ${badgeBg}`}>
                    {risk.level} risk
                  </span>
                </div>

                {/* The Trap */}
                <div className="mb-4">
                  <div className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-400 mb-1">
                    THE TRAP:
                  </div>
                  <p className="text-xs text-slate-300 font-light leading-relaxed">
                    {risk.trap}
                  </p>
                </div>

                {/* The Redline Counter-Language */}
                <div className="mb-4">
                  <div className="flex items-center justify-between text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                    <span>COUNTER-LANGUAGE (REDLINE):</span>
                    <button
                      onClick={() => handleCopyRedline(risk.id, risk.redline)}
                      className="flex items-center gap-1 text-indigo-400 hover:text-indigo-300 transition-colors lowercase font-sans font-normal"
                    >
                      {copiedId === risk.id ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span className="text-emerald-400">copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>copy redline</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className={`p-3 rounded-xl border font-mono text-[11px] leading-relaxed break-words ${
                    theme === 'dark' ? 'bg-[#09090b] border-slate-800 text-emerald-400' : 'bg-slate-900 border-slate-800 text-emerald-300'
                  }`}>
                    "{risk.redline}"
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="flex items-center justify-between pt-3 border-t border-slate-800/60 text-xs font-mono">
                  <button
                    onClick={() => highlightLine(risk.line)}
                    className="flex items-center gap-1.5 text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    <Target className="w-3.5 h-3.5" />
                    <span>Locate in Document (Line {risk.line})</span>
                  </button>

                  <button
                    onClick={() => setIsDrawerOpen(true)}
                    className="flex items-center gap-1 text-slate-400 hover:text-slate-200 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Ask AI</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
