import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Skills from './components/Skills';
import Footer from './components/Footer';
import CalendlyModal from './components/CalendlyModal';
import BootScreen from './components/BootScreen';
import CursorSpotlight from './components/CursorSpotlight';

export default function App() {
  const [showBootScreen, setShowBootScreen] = useState(true);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  // Global Keyboard Shortcuts (B -> Book, Esc -> Close)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
        return;
      }

      const key = e.key.toLowerCase();
      if (key === 'b') {
        setIsCalendlyOpen(prev => !prev);
      } else if (key === 'escape') {
        setIsCalendlyOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

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
      />

      {/* Main Content Sections */}
      <main>
        <Hero 
          onOpenCalendly={() => setIsCalendlyOpen(true)} 
        />

        <Experience />
        <Projects />
        <Testimonials />
        <Skills />
      </main>

      {/* Footer */}
      <Footer 
        onOpenCalendly={() => setIsCalendlyOpen(true)} 
      />

      {/* Modals & Interactive Overlays */}
      <CalendlyModal 
        isOpen={isCalendlyOpen} 
        onClose={() => setIsCalendlyOpen(false)} 
      />

    </div>
  );
}

