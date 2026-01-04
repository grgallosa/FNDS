
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { CONTENT } from '../constants';

interface HeroProps {
  onApplyClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onApplyClick }) => {
  const t = CONTENT.hero;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center bg-brand-dark overflow-hidden pt-14 px-6">
      {/* Background Decorative - Strictly contained */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 lg:opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-square bg-brand-blue/10 blur-[100px] rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-blue/10 border border-brand-blue/20 text-brand-blue rounded-sm text-[8px] md:text-[9px] font-black uppercase tracking-widest mb-6 animate-in fade-in slide-in-from-top-4 duration-700">
          Fast & Reliable Cuartero Connectivity
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-1000">
          {t.title}
        </h1>

        <p className="text-slate-400 text-[13px] md:text-base lg:text-lg max-w-lg lg:max-w-xl mx-auto mb-8 leading-relaxed font-medium animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          {t.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-6 w-full sm:w-auto animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500">
          <button 
            onClick={onApplyClick}
            className="group relative bg-brand-blue text-white w-full sm:w-auto px-8 py-4 rounded-sm font-black text-[11px] uppercase tracking-widest shadow-lg hover:shadow-brand-blue/40 transition-all duration-300 active:scale-95"
          >
            {t.contact}
          </button>
          <button 
            onClick={() => scrollToSection('plans')}
            className="text-white font-black text-[10px] uppercase tracking-widest flex items-center gap-2 hover:text-brand-blue transition-colors group py-3"
          >
            {t.offers}
            <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Scroll indicator for full screen view */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
        <div className="w-px h-8 bg-gradient-to-b from-transparent to-brand-blue"></div>
      </div>
    </section>
  );
};

export default Hero;