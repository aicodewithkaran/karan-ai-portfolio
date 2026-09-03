import React, { useEffect, useRef, useState } from 'react';
import { Calendar, Download, ArrowRight, Scale, Globe, Rocket, FileSpreadsheet } from 'lucide-react';
import { sfx } from '../utils/sfx';

export default function Hero({ onOpenCalendly }) {
  const canvasRef = useRef(null);

  const outcomes = [
    "Contract Review & Risk Extraction",
    "Full-Stack Web Development & Modern Websites",
    "AI Agent & LLM Workflow Automation",
    "Custom LLM & AI Tool Integration"
  ];
  const [outcomeIdx, setOutcomeIdx] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentFullText = outcomes[outcomeIdx];
    
    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayedText(currentFullText.substring(0, displayedText.length - 1));
      }, 30);
    } else {
      timer = setTimeout(() => {
        setDisplayedText(currentFullText.substring(0, displayedText.length + 1));
      }, 65);
    }

    if (!isDeleting && displayedText === currentFullText) {
      timer = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setOutcomeIdx((prev) => (prev + 1) % outcomes.length);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, outcomeIdx]);

  // Particle Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: 40 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 1,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.4 + 0.2
    }));

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.025)';
      ctx.lineWidth = 1;
      const gridSize = 50;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      particles.forEach((p, i) => {
        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(6, 182, 212, ${p.alpha})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(6, 182, 212, ${0.12 * (1 - dist / 120)})`;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-[85vh] pt-28 pb-16 flex flex-col justify-center overflow-hidden">
      {/* Canvas Background */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />

      {/* Glow Orbs */}
      <div className="glow-orb-cyan top-1/4 -left-40 z-0 opacity-40"></div>
      <div className="glow-orb-purple bottom-10 -right-40 z-0 opacity-40"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Status Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-cyan-500/30 mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="text-[11px] font-mono text-cyan-300 tracking-wide">
            AI/ML ENGINEER & AUTOMATION SPECIALIST
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-slate-100 leading-tight mb-4 max-w-4xl mx-auto">
          I build custom AI tools that read your documents & automate manual work
        </h1>

        {/* Dynamic Sub-headline */}
        <div className="min-h-[40px] flex items-center justify-center mb-6">
          <div className="text-lg sm:text-2xl md:text-3xl font-semibold font-mono text-gradient-cyan inline-block">
            ⚡ {displayedText}
            <span className="border-r-2 border-cyan-400 animate-pulse ml-1"></span>
          </div>
        </div>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-8">
          Transforming complex business needs into clean full-stack web applications, AI integrations, and automated data pipelines.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-16">
          <button
            onClick={() => { sfx.playClick(); onOpenCalendly(); }}
            onMouseEnter={() => sfx.playHover()}
            className="flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold font-display bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            <Calendar className="w-4 h-4" />
            <span>Book a 1-on-1 Strategy Call</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>


        {/* Target Audience Section (Scaled up ~50%) */}
        <div className="pt-10 border-t border-slate-800/80">
          <div className="text-sm sm:text-base font-mono text-cyan-400 uppercase tracking-widest mb-8 font-bold">
            WHO THIS IS BUILT FOR
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            
            <div className="glass-panel p-7 rounded-3xl border border-slate-800/90 glass-panel-hover flex flex-col justify-between">
              <div>
                <div className="p-3.5 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 w-fit mb-4">
                  <Scale className="w-7 h-7" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold font-display text-slate-100 mb-2.5">Legal Teams & Law Firms</h3>
                <p className="text-sm text-slate-300 leading-relaxed font-light">
                  Automated contract risk auditing, non-standard clause extraction, and instant plain-English summaries from lengthy legal documents.
                </p>
              </div>
            </div>

            <div className="glass-panel p-7 rounded-3xl border border-slate-800/90 glass-panel-hover flex flex-col justify-between">
              <div>
                <div className="p-3.5 rounded-2xl bg-purple-500/10 text-purple-400 border border-purple-500/20 w-fit mb-4">
                  <Globe className="w-7 h-7" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold font-display text-slate-100 mb-2.5">Founders & Tech Businesses</h3>
                <p className="text-sm text-slate-300 leading-relaxed font-light">
                  High-converting modern web applications, interactive web tools, and custom AI feature integrations built for speed and growth.
                </p>
              </div>
            </div>

            <div className="glass-panel p-7 rounded-3xl border border-slate-800/90 glass-panel-hover flex flex-col justify-between">
              <div>
                <div className="p-3.5 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 w-fit mb-4">
                  <Rocket className="w-7 h-7" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold font-display text-slate-100 mb-2.5">Startups & Digital Enterprises</h3>
                <p className="text-sm text-slate-300 leading-relaxed font-light">
                  Scalable full-stack SaaS platforms, automated internal workflows, and AI agent pipelines designed to boost operational efficiency.
                </p>
              </div>
            </div>

            <div className="glass-panel p-7 rounded-3xl border border-slate-800/90 glass-panel-hover flex flex-col justify-between">
              <div>
                <div className="p-3.5 rounded-2xl bg-blue-500/10 text-blue-400 border border-blue-500/20 w-fit mb-4">
                  <FileSpreadsheet className="w-7 h-7" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold font-display text-slate-100 mb-2.5">Document-Heavy Operations</h3>
                <p className="text-sm text-slate-300 leading-relaxed font-light">
                  Converting PDF invoices, reports, and legacy files into clean, structured SQL databases and automated decision workflows.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
}

