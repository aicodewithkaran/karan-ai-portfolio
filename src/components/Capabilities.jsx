import React, { useState } from 'react';
import { Palette, Terminal, TrendingUp, Sparkles, Cpu, Layers, Check, ArrowRight, Gauge, ShieldCheck, Zap } from 'lucide-react';

export default function Capabilities() {
  const [activeSpec, setActiveSpec] = useState(0);

  // Interactive micro-tool states
  const [typeTracking, setTypeTracking] = useState(-0.03);
  const [latencyBenchmark, setLatencyBenchmark] = useState(14);
  const [trafficInput, setTrafficInput] = useState(25000);
  const [currentCvRate, setCurrentCvRate] = useState(1.8);

  const capabilities = [
    {
      id: "art-direction",
      number: "01",
      title: "Cinematic UI/UX & Art Direction",
      tagline: "Emotional resonance meets architectural precision",
      icon: Palette,
      description: "We don't do cookie-cutter digital templates. We craft bespoke visual universes tailored to your brand's ethos—editorial typography, custom WebGL/Three.js spatial assets, and cinematic art direction that captures sovereign attention.",
      pillars: [
        "Bespoke Editorial Typography Systems",
        "Spatial 3D & GLSL Shader Pipelines",
        "Micro-Interactions & Physics-Based Motion",
        "Full Brand Identity & Design System Toolkits"
      ],
      deliverableBadge: "Awwwards-Caliber Visual Rigor"
    },
    {
      id: "engineering",
      number: "02",
      title: "Full-Stack Creative Engineering",
      tagline: "Sub-50ms latency with uncompromising structural integrity",
      icon: Cpu,
      description: "Performance is a design feature. We architect custom React/Next.js flagships with zero cumulative layout shift, serverless backend microservices, real-time database synchronization, and perfect 99+ Lighthouse scores.",
      pillars: [
        "Next.js App Router & SSR Pipelines",
        "Zero-Jank 60FPS Framer & WebGL Animations",
        "Headless CMS Architecture (Sanity / Storyblok)",
        "SOC2-Compliant Security & Supabase / Postgres"
      ],
      deliverableBadge: "Sub-50ms Global Edge Delivery"
    },
    {
      id: "growth",
      number: "03",
      title: "Conversion & Growth Architecture",
      tagline: "Turning passive page views into high-ticket contract velocity",
      icon: TrendingUp,
      description: "High-end aesthetics must deliver superior economic return. We engineer every customer touchpoint, qualification gate, and product narrative to maximize inbound deal value, average order size, and institutional trust.",
      pillars: [
        "Frictionless Qualification Terminals",
        "Behavioral Analytics & Heatmap Telemetry",
        "Multivariate Conversion Rate Optimization (CRO)",
        "High-Ticket Enterprise Sales Funnels"
      ],
      deliverableBadge: "Empirical 3.4x Conversion Uplift"
    }
  ];

  return (
    <section id="capabilities" className="relative py-28 md:py-36 bg-[#08090B] border-t border-[#232730]">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] radial-glow-indigo rounded-full blur-[180px] pointer-events-none opacity-25"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 pb-8 border-b border-[#232730]">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
              <span className="font-mono text-xs uppercase tracking-widest text-[#8E95A5]">
                CORE SPECIALIZATIONS & PHILOSOPHY
              </span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#F3F4F6] leading-[1.08]">
              Architectural Rigor Across the{' '}
              <span className="italic font-light text-gradient-silver">
                Full Digital Stack.
              </span>
            </h2>
          </div>

          <p className="font-sans text-sm text-[#8E95A5] max-w-sm md:text-right">
            We bridge the chasm between world-class visual artistry and high-throughput production engineering.
          </p>
        </div>

        {/* 3-Column Micro-Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div 
                key={cap.id}
                className="relative rounded-3xl bg-[#101216] border border-[#232730] p-8 md:p-10 surface-card-hover flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white group-hover:border-white/20 transition-colors">
                      <Icon className="w-6 h-6 text-indigo-400 group-hover:text-white transition-colors" />
                    </div>
                    <span className="font-mono text-xs text-[#8E95A5] tracking-widest">
                      // {cap.number}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-white transition-colors">
                    {cap.title}
                  </h3>
                  <p className="font-editorial text-sm sm:text-base text-indigo-300 italic mb-6">
                    "{cap.tagline}"
                  </p>

                  {/* Description */}
                  <p className="font-sans text-xs sm:text-sm text-[#8E95A5] leading-relaxed mb-8">
                    {cap.description}
                  </p>

                  {/* Core Pillars */}
                  <div className="space-y-3 mb-8 pt-6 border-t border-white/[0.06]">
                    <div className="font-mono text-[11px] uppercase tracking-widest text-white/40">
                      Technical Capabilities:
                    </div>
                    {cap.pillars.map((pillar, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#F3F4F6]">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{pillar}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Badge */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="font-mono text-[11px] text-[#8E95A5]">
                    {cap.deliverableBadge}
                  </span>
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                </div>

              </div>
            );
          })}
        </div>

        {/* Interactive Studio Philosophy & Live Performance Demonstration Card */}
        <div className="rounded-3xl bg-[#101216] border border-[#232730] p-8 md:p-12 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-xs text-indigo-400 uppercase tracking-widest">
                  OUR CONVERSION CALCULATOR
                </span>
              </div>
              <h3 className="font-editorial text-3xl sm:text-4xl text-white font-medium mb-4">
                Model Your Enterprise Inbound Value
              </h3>
              <p className="font-sans text-sm text-[#8E95A5] leading-relaxed mb-6 max-w-xl">
                A high-ticket flagship web architecture typically generates between a 2.5x and 4.0x conversion lift. See the economic impact on your quarterly inbound pipeline below:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#08090B] border border-white/10">
                  <label className="font-mono text-xs text-[#8E95A5] block mb-2">Monthly Target Visitors</label>
                  <input 
                    type="range"
                    min="5000"
                    max="100000"
                    step="5000"
                    value={trafficInput}
                    onChange={(e) => setTrafficInput(Number(e.target.value))}
                    className="w-full accent-indigo-500 cursor-pointer"
                  />
                  <div className="font-mono text-sm text-white font-bold mt-2">
                    {trafficInput.toLocaleString()} unique visitors / mo
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#08090B] border border-white/10">
                  <label className="font-mono text-xs text-[#8E95A5] block mb-2">Current Baseline Conversion</label>
                  <input 
                    type="range"
                    min="0.5"
                    max="4.0"
                    step="0.1"
                    value={currentCvRate}
                    onChange={(e) => setCurrentCvRate(Number(e.target.value))}
                    className="w-full accent-indigo-500 cursor-pointer"
                  />
                  <div className="font-mono text-sm text-white font-bold mt-2">
                    {currentCvRate.toFixed(1)}% baseline rate
                  </div>
                </div>
              </div>
            </div>

            {/* Calculated Output Matrix */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-[#08090B] border border-white/15 flex flex-col justify-between gap-6 shadow-2xl">
              <div>
                <div className="font-mono text-[11px] uppercase tracking-widest text-[#8E95A5] mb-1">
                  Projected 90-Day Additional Pipeline
                </div>
                <div className="font-cinzel text-3xl sm:text-4xl font-bold text-emerald-400">
                  +{Math.round((trafficInput * (currentCvRate * 2.4 / 100) - trafficInput * (currentCvRate / 100)) * 3).toLocaleString()} Leads
                </div>
                <div className="font-mono text-xs text-[#8E95A5] mt-1">
                  At estimated $15k ACV = <span className="text-white font-bold">+${Math.round(((trafficInput * (currentCvRate * 2.4 / 100) - trafficInput * (currentCvRate / 100)) * 3 * 15000) / 1000).toLocaleString()}k Net Value</span>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-white/[0.03] border border-white/5 font-mono text-[11px] text-[#8E95A5] leading-normal">
                ✦ Based on averaged client cohort data across SaaS & Luxury E-commerce (2024-2026).
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
