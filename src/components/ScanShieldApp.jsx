import React, { useState } from 'react';
import { ScanShieldProvider, useScanShield } from '../context/ScanShieldContext';
import PrecisionCursor from './PrecisionCursor';
import ScanShieldHeader from './ScanShieldHeader';
import LandingUpload from './LandingUpload';
import SplitDashboard from './SplitDashboard';
import ContractChatDrawer from './ContractChatDrawer';
import { ShieldCheck, Download, X, FileText, CheckCircle2 } from 'lucide-react';

function ScanShieldAppContent({ onBackToPortfolio }) {
  const { theme, activeContract } = useScanShield();
  const [viewState, setViewState] = useState('landing'); // 'landing' | 'dashboard'
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);

  const handleExportPdf = () => {
    setIsExportModalOpen(true);
  };

  return (
    <div className={`min-h-screen transition-colors duration-200 selection:bg-indigo-500/30 font-sans ${
      theme === 'dark' ? 'bg-[#09090b] text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      
      {/* Precision Laser Cursor */}
      <PrecisionCursor />

      {/* Header */}
      <ScanShieldHeader
        onBackToPortfolio={onBackToPortfolio}
        onExportPdf={handleExportPdf}
      />

      {/* Main Content */}
      <main>
        {viewState === 'landing' ? (
          <LandingUpload onContractSelected={() => setViewState('dashboard')} />
        ) : (
          <SplitDashboard />
        )}
      </main>

      {/* Contract AI Assistant Drawer */}
      <ContractChatDrawer />

      {/* PDF Redline Audit Export Modal */}
      {isExportModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
          <div className={`w-full max-w-lg rounded-3xl p-6 border shadow-2xl relative ${
            theme === 'dark' ? 'bg-[#09090b] border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
          }`}>
            
            <button
              onClick={() => setIsExportModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800/40 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-display">Export Redline Audit PDF</h3>
                <p className="text-xs font-mono text-slate-400">ScanShield Executive Summary</p>
              </div>
            </div>

            <div className={`p-4 rounded-2xl border mb-6 text-xs font-mono space-y-2 ${
              theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'
            }`}>
              <div className="flex justify-between">
                <span className="text-slate-400">Contract:</span>
                <span className="font-bold text-indigo-400">{activeContract?.title || "Master Services Agreement"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Compliance Rating:</span>
                <span className="font-bold text-amber-400">{activeContract?.complianceScore || 64}/100</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Total Redlines Generated:</span>
                <span className="font-bold text-emerald-400">{activeContract?.risks?.length || 5} Redline Clauses</span>
              </div>
            </div>

            <button
              onClick={() => {
                alert("Redline Audit PDF report generated and downloaded successfully!");
                setIsExportModalOpen(false);
              }}
              className="w-full py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-display font-semibold text-xs flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download Executive Redline Report (.PDF)</span>
            </button>

          </div>
        </div>
      )}

    </div>
  );
}

export default function ScanShieldApp({ onBackToPortfolio }) {
  return (
    <ScanShieldProvider>
      <ScanShieldAppContent onBackToPortfolio={onBackToPortfolio} />
    </ScanShieldProvider>
  );
}
