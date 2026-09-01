import React from 'react';
import { ShieldAlert, Sun, Moon, Crosshair, MessageSquare, Download, ChevronDown, Check, ArrowLeft } from 'lucide-react';
import { useScanShield } from '../context/ScanShieldContext';

export default function ScanShieldHeader({ onBackToPortfolio, onExportPdf }) {
  const { theme, toggleTheme, customCursor, toggleCursor, playbook, setPlaybook, setIsDrawerOpen, activeContract } = useScanShield();

  const playbooks = [
    { id: 'standard', name: 'Standard Enterprise MSA' },
    { id: 'vendor', name: 'Vendor Defense Playbook' },
    { id: 'founder', name: 'Founder Friendly Baseline' }
  ];

  return (
    <header className={`sticky top-0 z-40 border-b transition-colors duration-200 ${
      theme === 'dark'
        ? 'bg-[#09090b]/90 border-slate-800 text-slate-100 backdrop-blur-md'
        : 'bg-white/90 border-slate-200 text-slate-900 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        
        {/* Brand identity & Back Link */}
        <div className="flex items-center gap-4">
          <button
            onClick={onBackToPortfolio}
            className="flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-indigo-400 transition-colors py-1 px-2.5 rounded-lg hover:bg-slate-800/40"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Portfolio</span>
          </button>

          <div className="h-4 w-[1px] bg-slate-700/60 hidden sm:block"></div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/20">
              <ShieldAlert className="w-4 h-4" />
            </div>
            <div>
              <div className="font-bold text-sm font-display tracking-tight flex items-center gap-2">
                ScanShield AI
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  Legal Audit Engine v2.4
                </span>
              </div>
              <div className="text-[11px] text-slate-400 font-mono hidden sm:block">
                {activeContract ? activeContract.title : "Enterprise Document Audit"}
              </div>
            </div>
          </div>
        </div>

        {/* Action Controls: Playbook + Theme + Cursor + Chat */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Playbook Dropdown */}
          <div className="relative hidden md:block">
            <select
              value={playbook}
              onChange={(e) => setPlaybook(e.target.value)}
              className={`text-xs font-mono px-3 py-1.5 rounded-xl border focus:outline-none focus:border-indigo-500 transition-colors appearance-none pr-8 cursor-pointer ${
                theme === 'dark'
                  ? 'bg-slate-900 border-slate-800 text-slate-200'
                  : 'bg-slate-100 border-slate-300 text-slate-800'
              }`}
            >
              {playbooks.map(p => (
                <option key={p.id} value={p.id}>{p.name}</option>
              ))}
            </select>
            <ChevronDown className="w-3.5 h-3.5 absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
          </div>

          {/* Theme Switcher (Dark / Light) */}
          <button
            onClick={toggleTheme}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className={`p-2 rounded-xl border text-xs font-mono flex items-center gap-1.5 transition-all ${
              theme === 'dark'
                ? 'bg-slate-900 border-slate-800 text-amber-400 hover:border-slate-700'
                : 'bg-slate-100 border-slate-300 text-indigo-600 hover:border-slate-400'
            }`}
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            <span className="hidden sm:inline">{theme === 'dark' ? 'Light' : 'Dark'}</span>
          </button>

          {/* Precision Cursor Switcher */}
          <button
            onClick={toggleCursor}
            title={customCursor ? 'Switch to Browser Native Cursor' : 'Switch to Precision Laser Cursor'}
            className={`p-2 rounded-xl border text-xs font-mono flex items-center gap-1.5 transition-all ${
              customCursor
                ? 'bg-indigo-500/10 border-indigo-500/40 text-indigo-400'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            <Crosshair className="w-4 h-4" />
            <span className="hidden lg:inline">{customCursor ? 'Laser Cursor' : 'Native Cursor'}</span>
          </button>

          {/* Chat with Contract Trigger */}
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium font-display bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/20 transition-all"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Ask AI</span>
          </button>

          {/* Export PDF Button */}
          <button
            onClick={onExportPdf}
            className={`p-2 rounded-xl border text-xs font-mono flex items-center gap-1.5 transition-all ${
              theme === 'dark'
                ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white'
                : 'bg-slate-100 border-slate-300 text-slate-700 hover:text-slate-900'
            }`}
          >
            <Download className="w-4 h-4 text-indigo-400" />
            <span className="hidden lg:inline">Export PDF</span>
          </button>

        </div>

      </div>
    </header>
  );
}
