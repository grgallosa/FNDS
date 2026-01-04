
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
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
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 w-full ${
      scrolled 
        ? 'bg-brand-dark/95 border-b border-white/5 py-2 shadow-xl backdrop-blur-md' 
        : 'bg-transparent border-b border-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-10">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div className="w-7 h-7 bg-brand-blue rounded-sm flex items-center justify-center text-white font-black text-xs">F</div>
          <span className="text-lg font-black tracking-tighter text-white">
            FNDS<span className="text-brand-blue">ISP</span>
          </span>
        </div>
        
        <nav className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href} 
              className="text-[10px] font-bold text-white/50 hover:text-brand-blue transition-colors uppercase tracking-widest"
            >
              {link.label}
            </a>
          ))}
          <button 
            onClick={handleApply}
            className="bg-brand-blue text-white px-4 py-2 rounded-sm text-[9px] font-black uppercase tracking-widest hover:bg-white hover:text-brand-blue transition-all"
          >
            {t.cta}
          </button>
        </nav>

        <div className="lg:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="w-10 h-10 flex items-center justify-center text-white hover:bg-white/5 rounded-sm"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden fixed inset-x-0 top-[56px] bg-brand-dark border-b border-white/10 transition-all duration-300 overflow-hidden ${
          isOpen ? 'h-auto opacity-100' : 'h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col p-6 space-y-1">
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href} 
              onClick={() => setIsOpen(false)} 
              className="flex items-center justify-between py-3 px-4 rounded-sm hover:bg-white/5 text-sm font-bold text-white"
            >
              {link.label}
              <ChevronRight className="w-3 h-3 text-slate-700" />
            </a>
          ))}
          <div className="pt-4 border-t border-white/5 mt-2">
            <button 
              onClick={handleApply}
              className="w-full py-4 rounded-sm bg-brand-blue text-[10px] font-black text-white uppercase tracking-widest"
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