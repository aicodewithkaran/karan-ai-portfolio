import React, { useState, useEffect } from 'react';
import { Star, MessageSquarePlus, X, Send, Sparkles, CheckCircle2, MessageSquare } from 'lucide-react';
import { sfx } from '../utils/sfx';

export default function Testimonials() {
  const initialTestimonials = [
    {
      id: "rev-1",
      name: "Rajesh S.",
      content: "Karan's contract analysis tool reduced our manual document audit time from hours to under 2 minutes. The precision on uncapped liability and indemnification clause extraction was incredible.",
      rating: 5,
      date: "2026-02-14",
      verified: true
    },
    {
      id: "rev-2",
      name: "Amit K.",
      content: "Karan completely transformed our web presence. The dark mode glassmorphic UI is sleek, fast, and incredibly responsive across all devices.",
      rating: 5,
      date: "2026-02-02",
      verified: true
    },
    {
      id: "rev-3",
      name: "Pooja V.",
      content: "Extremely disciplined web developer. He built our interactive showcase on schedule with clean code, zero clutter, and high performance.",
      rating: 5,
      date: "2026-01-19",
      verified: true
    },
    {
      id: "rev-4",
      name: "Vikram S.",
      content: "Karan brings top-tier engineering discipline to LLM integrations. His decoupled architecture for vector retrieval and RAG pipelines is rock-solid, fast, and remarkably reliable.",
      rating: 5,
      date: "2025-12-20",
      verified: true
    }
  ];

  const [testimonials, setTestimonials] = useState(() => {
    try {
      const saved = localStorage.getItem('karan_portfolio_testimonials_v4');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
      return initialTestimonials;
    } catch (e) {
      return initialTestimonials;
    }
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formName, setFormName] = useState('');
  const [formContent, setFormContent] = useState('');
  const [formRating, setFormRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);

  useEffect(() => {
    try {
      localStorage.setItem('karan_portfolio_testimonials_v4', JSON.stringify(testimonials));
    } catch (e) {}
  }, [testimonials]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formName.trim() || !formContent.trim()) return;

    sfx.playClick();
    const newEntry = {
      id: `custom-${Date.now()}`,
      name: formName.trim(),
      content: formContent.trim(),
      rating: formRating,
      date: new Date().toISOString().split('T')[0],
      verified: false
    };

    setTestimonials([newEntry, ...testimonials]);
    setFormName('');
    setFormContent('');
    setFormRating(5);
    setIsModalOpen(false);
  };

  const isMarquee = testimonials.length >= 5;
  const marqueeList = isMarquee ? [...testimonials, ...testimonials] : testimonials;

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden bg-slate-950/60 border-t border-b border-slate-900">
      
      {/* Glow orb */}
      <div className="glow-orb-cyan top-1/2 -right-40 opacity-30"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-cyan-500/30 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-[11px] font-mono text-cyan-300">CLIENT & COLLABORATOR FEEDBACK</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold font-display text-slate-100">
              Testimonials & <span className="text-gradient-cyan">Reviews</span>
            </h2>
          </div>

          <div className="flex items-center gap-4">
            {/* Single "ALL" Tab indicator */}
            <div className="px-4 py-2 rounded-xl text-xs font-mono bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              ALL REVIEWS ({testimonials.length})
            </div>

            {/* Add Testimonial CTA */}
            <button
              onClick={() => { sfx.playClick(); setIsModalOpen(true); }}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold font-display bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20 hover:scale-[1.03] transition-transform"
            >
              <MessageSquarePlus className="w-4 h-4" />
              <span>Add Review</span>
            </button>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="relative overflow-hidden group">
          <div className={`flex gap-6 ${isMarquee ? 'w-max animate-marquee group-hover:[animation-play-state:paused]' : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'}`}>
            {marqueeList.map((t, idx) => (
              <div
                key={`${t.id}-${idx}`}
                className="w-full shrink-0 glass-panel p-6 rounded-2xl border border-slate-800/90 glass-panel-hover flex flex-col justify-between"
              >
                <div>
                  {/* Star Rating Display */}
                  <div className="flex items-center gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-4 h-4 ${
                          star <= t.rating
                            ? 'text-amber-400 fill-amber-400'
                            : 'text-slate-700'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="text-slate-300 text-xs leading-relaxed mb-6 font-light italic">
                    "{t.content}"
                  </p>
                </div>

                {/* Author Metadata (No roles/titles) */}
                <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold text-xs font-mono shrink-0">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-xs font-bold font-display text-slate-100 flex items-center gap-1">
                        {t.name}
                        {t.verified && <CheckCircle2 className="w-3 h-3 text-cyan-400 shrink-0" />}
                      </div>
                    </div>
                  </div>

                  <div className="text-[10px] font-mono text-slate-500">{t.date}</div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Add Testimonial Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
          <div className="glass-panel w-full max-w-lg rounded-3xl p-6 sm:p-8 border border-cyan-500/40 shadow-2xl relative">
            
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-bold font-display text-slate-100 mb-1">Write a Testimonial</h3>
            <p className="text-xs font-mono text-cyan-400 mb-6">Share your experience collaborating with Karan Singh</p>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
              
              {/* Star Rating Selector */}
              <div>
                <label className="block text-slate-300 font-mono mb-2">Rating (1 to 5 Stars):</label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFormRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="p-1 text-amber-400 hover:scale-125 transition-transform focus:outline-none"
                    >
                      <Star
                        className={`w-6 h-6 ${
                          star <= (hoverRating || formRating)
                            ? 'text-amber-400 fill-amber-400'
                            : 'text-slate-700'
                        }`}
                      />
                    </button>
                  ))}
                  <span className="text-xs font-mono text-amber-400 font-bold ml-2">
                    {formRating} / 5 Stars
                  </span>
                </div>
              </div>

              {/* Name */}
              <div>
                <label className="block text-slate-300 font-mono mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rajesh S."
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-100 focus:outline-none focus:border-cyan-500/60"
                />
              </div>

              {/* Review Content */}
              <div>
                <label className="block text-slate-300 font-mono mb-1">Testimonial / Review *</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Share details about the web application, speed, or design..."
                  value={formContent}
                  onChange={(e) => setFormContent(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl p-4 text-xs text-slate-100 focus:outline-none focus:border-cyan-500/60 resize-none"
                ></textarea>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-display font-semibold text-xs flex items-center justify-center gap-2 hover:opacity-95 transition-opacity pt-3"
              >
                <Send className="w-4 h-4" />
                <span>Post Testimonial</span>
              </button>

            </form>

          </div>
        </div>
      )}

    </section>
  );
}
