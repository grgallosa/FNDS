
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
    <section id="home" className="relative min-h-[90vh] lg:min-h-screen flex flex-col items-center justify-center bg-[#0B0E14] overflow-hidden pt-24 px-6">
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] lg:w-[1000px] lg:h-[1000px] bg-brand-blue/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10 text-center">
        <div className="flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-blue/10 border border-brand-blue/20 text-brand-blue rounded-sm text-[9px] lg:text-[10px] font-black uppercase tracking-widest mb-6 lg:mb-8 animate-in fade-in slide-in-from-top-4 duration-700">
            Quality Internet Service You Can Trust
          </div>

          <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] mb-6 tracking-tight lg:tracking-tighter animate-in fade-in slide-in-from-bottom-6 duration-1000">
            {t.title.split(' ').map((word, i) => (
              <span key={i} className="inline-block mr-[0.2em]">{word}</span>
            ))}
          </h1>

          <p className="text-slate-400 text-sm md:text-lg lg:text-xl max-w-2xl lg:max-w-3xl mx-auto mb-10 lg:mb-12 leading-relaxed font-medium animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            {t.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 lg:gap-10 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500">
            <button 
              onClick={onApplyClick}
              className="group relative bg-brand-blue text-white px-10 lg:px-14 py-4 lg:py-5 rounded-md font-black text-sm lg:text-base shadow-[0_0_40px_rgba(64,84,255,0.4)] hover:shadow-[0_0_60px_rgba(64,84,255,0.6)] hover:scale-105 transition-all duration-300"
            >
              <span className="relative z-10">{t.contact}</span>
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-md"></div>
            </button>
            <button 
              onClick={() => scrollToSection('plans')}
              className="text-white font-bold text-sm lg:text-base flex items-center gap-2 hover:text-brand-blue transition-colors group"
            >
              {t.offers}
              <ChevronRight className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
