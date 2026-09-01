import React, { useState } from 'react';
import { X, Send, Bot, User, CornerDownLeft, Sparkles, Target } from 'lucide-react';
import { useScanShield } from '../context/ScanShieldContext';

export default function ContractChatDrawer() {
  const { isDrawerOpen, setIsDrawerOpen, chatMessages, sendChatMessage, highlightLine, theme } = useScanShield();
  const [inputVal, setInputVal] = useState('');

  if (!isDrawerOpen) return null;

  const handleSend = (e) => {
    e?.preventDefault();
    if (!inputVal.trim()) return;
    sendChatMessage(inputVal);
    setInputVal('');
  };

  const renderMessageWithCitations = (text) => {
    // Regex matching [Source: Line X] or [Source: Section X]
    const parts = text.split(/(\[Source:\s*Line\s*\d+\])/g);
    
    return parts.map((part, idx) => {
      const match = part.match(/\[Source:\s*Line\s*(\d+)\]/);
      if (match) {
        const lineNum = parseInt(match[1], 10);
        return (
          <button
            key={idx}
            onClick={() => highlightLine(lineNum)}
            className="inline-flex items-center gap-1 mx-1 px-2 py-0.5 rounded text-[11px] font-mono bg-indigo-500/15 text-indigo-400 border border-indigo-500/30 hover:bg-indigo-500/30 hover:scale-105 transition-all"
            title={`Click to jump to Line ${lineNum} in document`}
          >
            <Target className="w-3 h-3" />
            <span>Line {lineNum}</span>
          </button>
        );
      }
      return part;
    });
  };

  const suggestions = [
    "Is indemnification uncapped in this MSA?",
    "What are my termination rights & notice period?",
    "Does Section 2.1 assign pre-existing IP?"
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex justify-end bg-slate-950/60 backdrop-blur-sm animate-fadeIn">
      <div className={`w-full max-w-md h-full shadow-2xl flex flex-col border-l transition-colors duration-200 ${
        theme === 'dark'
          ? 'bg-[#09090b] border-slate-800 text-slate-100'
          : 'bg-white border-slate-200 text-slate-900'
      }`}>
        
        {/* Header */}
        <div className={`p-4 border-b flex items-center justify-between ${
          theme === 'dark' ? 'border-slate-800 bg-slate-900/60' : 'border-slate-200 bg-slate-50'
        }`}>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center">
              <Bot className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold font-display tracking-tight">Contract Assistant</h3>
              <p className="text-[10px] font-mono text-slate-400">Citation-Linked Legal Reasoning</p>
            </div>
          </div>

          <button
            onClick={() => setIsDrawerOpen(false)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Message Thread */}
        <div className="p-4 flex-1 overflow-y-auto space-y-4 font-sans text-xs">
          {chatMessages.map((m, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-2.5 ${m.sender === 'user' ? 'flex-row-reverse' : ''}`}
            >
              <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                m.sender === 'user'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'
              }`}>
                {m.sender === 'user' ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
              </div>

              <div className={`max-w-[85%] p-3.5 rounded-2xl leading-relaxed ${
                m.sender === 'user'
                  ? 'bg-indigo-600 text-white rounded-tr-none'
                  : theme === 'dark'
                    ? 'bg-slate-900 border border-slate-800 text-slate-200 rounded-tl-none'
                    : 'bg-slate-100 border border-slate-200 text-slate-800 rounded-tl-none'
              }`}>
                {renderMessageWithCitations(m.text)}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Suggestion Pills */}
        <div className={`p-3 border-t space-y-1.5 ${
          theme === 'dark' ? 'border-slate-800 bg-slate-950' : 'border-slate-200 bg-slate-50'
        }`}>
          <div className="text-[10px] font-mono text-slate-400">SUGGESTED CLAUSE QUERIES:</div>
          <div className="flex flex-col gap-1">
            {suggestions.map((s, idx) => (
              <button
                key={idx}
                onClick={() => sendChatMessage(s)}
                className={`text-left px-2.5 py-1 rounded-lg text-[11px] font-mono truncate transition-colors ${
                  theme === 'dark'
                    ? 'bg-slate-900 text-slate-300 hover:text-indigo-400 border border-slate-800'
                    : 'bg-white text-slate-700 hover:text-indigo-600 border border-slate-200'
                }`}
              >
                • {s}
              </button>
            ))}
          </div>
        </div>

        {/* Input Form */}
        <form
          onSubmit={handleSend}
          className={`p-3 border-t flex items-center gap-2 ${
            theme === 'dark' ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-white'
          }`}
        >
          <input
            type="text"
            placeholder="Ask about clauses or citations..."
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            className={`flex-1 px-3 py-2 text-xs rounded-xl border focus:outline-none focus:border-indigo-500 ${
              theme === 'dark'
                ? 'bg-slate-950 border-slate-800 text-slate-100'
                : 'bg-slate-50 border-slate-200 text-slate-900'
            }`}
          />
          <button
            type="submit"
            className="p-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>

      </div>
    </div>
  );
}
