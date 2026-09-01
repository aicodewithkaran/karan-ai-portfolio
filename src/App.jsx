import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Skills from './components/Skills';
import Footer from './components/Footer';
import CalendlyModal from './components/CalendlyModal';
import AIChatModal from './components/AIChatModal';
import BootScreen from './components/BootScreen';
import CursorSpotlight from './components/CursorSpotlight';
import ScanShieldApp from './components/ScanShieldApp';

export default function App() {
  const [showBootScreen, setShowBootScreen] = useState(true);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [isAIChatOpen, setIsAIChatOpen] = useState(false);
  const [currentView, setCurrentView] = useState('portfolio'); // 'portfolio' | 'scanshield'

  // Global Keyboard Shortcuts (B -> Book, A -> AI Assistant, Esc -> Close)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
        return;
      }

      const key = e.key.toLowerCase();
      if (key === 'b') {
        setIsCalendlyOpen(prev => !prev);
      } else if (key === 'a') {
        setIsAIChatOpen(prev => !prev);
      } else if (key === 'escape') {
        setIsCalendlyOpen(false);
        setIsAIChatOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Render Immersive ScanShield AI Web App Platform
  if (currentView === 'scanshield') {
    return (
      <ScanShieldApp onBackToPortfolio={() => setCurrentView('portfolio')} />
    );
  }

  return (
    <div className="min-h-screen bg-[#0b0f17] text-slate-100 font-sans relative selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      
      {/* Boot Screen Initialization */}
      {showBootScreen && (
        <BootScreen onComplete={() => setShowBootScreen(false)} />
      )}

      {/* Dynamic Cursor Spotlight Tracking */}
      <CursorSpotlight />

      {/* Sticky Header */}
      <Navbar 
        onOpenCalendly={() => setIsCalendlyOpen(true)}
        onOpenScanShield={() => setCurrentView('scanshield')}
      />

      {/* Main Content Sections */}
      <main>
        <Hero 
          onOpenCalendly={() => setIsCalendlyOpen(true)} 
          onOpenAIChat={() => setIsAIChatOpen(true)}
          onOpenScanShield={() => setCurrentView('scanshield')}
        />

        <Experience />
        <Projects onOpenScanShield={() => setCurrentView('scanshield')} />
        <Testimonials />
        <Skills />
      </main>

      {/* Footer */}
      <Footer 
        onOpenCalendly={() => setIsCalendlyOpen(true)} 
        onOpenAIChat={() => setIsAIChatOpen(true)}
      />

      {/* Modals & Interactive Overlays */}
      <CalendlyModal 
        isOpen={isCalendlyOpen} 
        onClose={() => setIsCalendlyOpen(false)} 
      />

      <AIChatModal 
        isOpen={isAIChatOpen} 
        onClose={() => setIsAIChatOpen(false)} 
        onOpenCalendly={() => {
          setIsAIChatOpen(false);
          setIsCalendlyOpen(true);
        }}
      />

    </div>
  );
}
