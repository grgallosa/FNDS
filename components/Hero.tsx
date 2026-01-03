
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
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center bg-[#0B0E14] overflow-hidden pt-24 px-6">
      {/* Circuit Background Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <svg width="100%" height="100%" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" className="stroke-brand-blue/30 fill-none">
          <path d="M 500 300 L 250 300 L 200 250" strokeWidth="1.5" />
          <path d="M 500 300 L 750 300 L 800 250" strokeWidth="1.5" />
          <path d="M 500 300 L 250 300 L 200 350" strokeWidth="1.5" />
          <path d="M 500 300 L 750 300 L 800 350" strokeWidth="1.5" />
          
          <circle cx="200" cy="250" r="1.5" className="fill-brand-blue animate-pulse" />
          <circle cx="800" cy="250" r="1.5" className="fill-brand-blue animate-pulse" />
          <circle cx="200" cy="350" r="1.5" className="fill-brand-blue animate-pulse" />
          <circle cx="800" cy="350" r="1.5" className="fill-brand-blue animate-pulse" />
        </svg>
      </div>

      {/* Radial Gradient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/20 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <div className="flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-blue/10 border border-brand-blue/20 text-brand-blue rounded-sm text-[9px] font-black uppercase tracking-widest mb-4">
            Quality Internet Service You Can Trust
          </div>

          <h1 className="text-4xl md:text-7xl font-black text-white leading-[1.05] mb-4 tracking-tight">
            {t.title}
          </h1>

          <p className="text-slate-400 text-sm md:text-lg max-w-2xl mx-auto mb-6 leading-relaxed font-medium">
            {t.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <button 
              onClick={onApplyClick}
              className="bg-brand-blue text-white px-10 py-4 rounded-md font-black text-sm shadow-[0_0_40px_rgba(64,84,255,0.4)] hover:scale-105 transition-all"
            >
              {t.contact}
            </button>
            <button 
              onClick={() => scrollToSection('plans')}
              className="text-white font-bold text-sm flex items-center gap-2 hover:text-brand-blue transition-colors group"
            >
              {t.offers}
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
