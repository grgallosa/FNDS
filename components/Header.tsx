
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Phone } from 'lucide-react';
import { CONTENT } from '../constants';

interface HeaderProps {
  onApplyClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onApplyClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = CONTENT.nav;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Packages', href: '#plans' },
    { label: 'Support', href: '#support' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleApply = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onApplyClick) onApplyClick();
    setIsOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
      scrolled 
        ? 'bg-slate-950/95 border-white/5 py-3 shadow-2xl' 
        : 'bg-transparent border-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-10">
        <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div className="w-8 h-8 bg-brand-blue rounded-sm flex items-center justify-center text-white font-black text-sm group-hover:scale-110 transition-transform">F</div>
          <span className="text-xl font-extrabold tracking-tighter text-white">
            FNDS<span className="text-brand-blue">ISP</span>
          </span>
        </div>
        
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href} 
              className="text-[11px] font-bold text-white/60 hover:text-brand-blue transition-colors uppercase tracking-widest relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-brand-blue transition-all group-hover:w-full"></span>
            </a>
          ))}
          <button 
            onClick={handleApply}
            className="bg-brand-blue text-white ml-4 px-5 py-2 rounded-sm text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-all shadow-lg"
          >
            {t.cta}
          </button>
        </nav>

        <div className="lg:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="w-10 h-10 flex items-center justify-center text-white hover:bg-white/5 rounded-sm transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div 
        className={`lg:hidden absolute top-full left-0 right-0 bg-slate-950 border-b border-white/5 overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col px-6 py-8 space-y-2">
          {navLinks.map((link, idx) => (
            <a 
              key={link.label}
              href={link.href} 
              onClick={() => setIsOpen(false)} 
              className={`flex items-center justify-between p-4 rounded-sm hover:bg-white/5 group transition-all duration-300 ${
                isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              <span className="text-lg font-bold text-white group-hover:text-brand-blue transition-colors">
                {link.label}
              </span>
              <ChevronRight className="w-4 h-4 text-slate-700 group-hover:text-brand-blue transition-all" />
            </a>
          ))}
          
          <div className="pt-6 mt-4 border-t border-white/5">
            <button 
              onClick={handleApply}
              className="w-full flex items-center justify-center gap-3 py-4 rounded-sm bg-brand-blue text-[10px] font-black text-white uppercase tracking-widest hover:bg-brand-blue/90 transition-all shadow-xl"
            >
               Apply Now
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
