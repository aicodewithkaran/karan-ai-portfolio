import React, { useState } from 'react';
import { X, Bot, Send, Sparkles, User, CornerDownLeft } from 'lucide-react';

export default function AIChatModal({ isOpen, onClose, onOpenCalendly }) {
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Hello! I'm Karan's AI Portfolio Assistant. Ask me anything about his experience in LLMs, Razonica, ShieldScan AI, or booking a meeting!"
    }
  ]);
  const [inputMsg, setInputMsg] = useState('');

  const quickQuestions = [
    "Tell me about Karan's AI work at Razonica",
    "What is ShieldScan AI?",
    "What are his core LLM & NLP skills?",
    "How can I book a call with Karan?"
  ];

  const handleSend = (textToSend) => {
    const query = textToSend || inputMsg;
    if (!query.trim()) return;

    const newMsgs = [...messages, { sender: 'user', text: query }];
    setMessages(newMsgs);
    if (!textToSend) setInputMsg('');

    // Generate intelligent response based on query keywords
    setTimeout(() => {
      let reply = "Karan Singh is an AI/ML Engineer with expertise in LLM systems, Document Intelligence, and RAG pipelines. Feel free to download his resume or book a meeting!";
      const qLower = query.toLowerCase();

      if (qLower.includes('razonica') || qLower.includes('work') || qLower.includes('current')) {
        reply = "At Razonica (Mar 2025 – Present), Karan builds LLM-powered automation & NLP systems transforming unstructured business data into structured insights using scalable Python pipelines and semantic matching.";
      } else if (qLower.includes('shieldscan')) {
        reply = "ShieldScan AI is Karan's legal risk analyst project. It uses a multi-stage LLM pipeline for contract analysis, clause extraction, legal risk detection, PyMuPDF OCR, and zero-persistence report generation.";
      } else if (qLower.includes('skill') || qLower.includes('stack') || qLower.includes('model')) {
        reply = "Karan's tech stack includes LLMs (Mistral, LLaMA, DeepSeek, LoRA fine-tuning), RAG Pipelines, Vector DBs (Chroma/FAISS), Python (FastAPI, Flask, Pandas, Scikit-learn), Supabase, and OCR tools (PyMuPDF, Tesseract).";
      } else if (qLower.includes('candidex')) {
        reply = "Candidex AI is an AI resume screening platform engineered by Karan, combining ATS scoring with LLM candidate assessment and interview question generation.";
      } else if (qLower.includes('book') || qLower.includes('meeting') || qLower.includes('contact') || qLower.includes('call')) {
        reply = "You can book a 1-on-1 meeting directly using the 'Book Meeting' button or clicking Calendly link! Karan's email is iamkaran1804@gmail.com and phone is (+91) 9350365060.";
      }

      setMessages(prev => [...prev, { sender: 'bot', text: reply }]);
    }, 400);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="glass-panel w-full max-w-2xl h-[600px] max-h-[90vh] rounded-3xl border border-purple-500/40 shadow-2xl flex flex-col relative overflow-hidden">
        
        {/* Modal Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-900/80">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-purple-500/20 text-purple-400 border border-purple-500/30">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-display text-slate-100 flex items-center gap-2">
                Karan's AI Assistant
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              </h3>
              <p className="text-[11px] font-mono text-purple-300">Powered by LLM Knowledge Base</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat Messages */}
        <div className="p-5 overflow-y-auto flex-1 space-y-4 font-sans text-sm">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-3 ${m.sender === 'user' ? 'flex-row-reverse' : ''}`}
            >
              <div
                className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                  m.sender === 'user'
                    ? 'bg-cyan-500 text-white'
                    : 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                }`}
              >
                {m.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              <div
                className={`max-w-[80%] p-4 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                  m.sender === 'user'
                    ? 'bg-cyan-600 text-white rounded-tr-none'
                    : 'glass-panel border border-slate-800 text-slate-200 rounded-tl-none'
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Suggested Chips */}
        <div className="p-3 bg-slate-900/60 border-t border-slate-800/80 flex items-center gap-2 overflow-x-auto">
          {quickQuestions.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(q)}
              className="px-3 py-1.5 rounded-full text-[11px] font-mono bg-slate-800/90 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 border border-slate-700 whitespace-nowrap transition-colors"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Input Form */}
        <form
          onSubmit={(e) => { e.preventDefault(); handleSend(); }}
          className="p-4 bg-slate-950 border-t border-slate-800 flex items-center gap-3"
        >
          <input
            type="text"
            placeholder="Ask about Karan's AI experience..."
            value={inputMsg}
            onChange={(e) => setInputMsg(e.target.value)}
            className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-cyan-500/50"
          />
          <button
            type="submit"
            className="p-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:opacity-90 transition-opacity"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>

      </div>
    </div>
  );
}
