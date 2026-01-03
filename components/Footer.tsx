
import React from 'react';
import { Facebook, Twitter, Instagram, Globe } from 'lucide-react';
import { CONTENT } from '../constants';

const Footer: React.FC = () => {
  const footerLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Packages', href: '#plans' },
    { label: 'Support', href: '#support' },
    { label: 'Location', href: '#contact' },
  ];

  return (
    <footer className="bg-brand-dark border-t border-white/5 pt-12 pb-10">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Brand & Mission */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-brand-blue rounded-sm flex items-center justify-center text-white font-black text-xs">F</div>
            <span className="text-xl font-black text-white tracking-tighter">
              FNDS<span className="text-brand-blue">ISP</span>
            </span>
          </div>
          <p className="text-xs font-medium text-slate-500 leading-relaxed max-w-md mx-auto">
            Reliable fiber-fast connectivity for homes and businesses in Cuartero, Capiz.
          </p>
        </div>

        {/* Unified Links Row */}
        <div className="flex flex-row justify-center items-start gap-12 md:gap-24 w-full border-y border-white/5 py-8 mb-8">
          {/* Navigation */}
          <div className="text-left">
            <h4 className="text-[10px] font-black text-white uppercase tracking-widest mb-4">Navigation</h4>
            <ul className="space-y-2">
              {footerLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-xs font-bold text-slate-500 hover:text-brand-blue transition-colors block">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Help */}
          <div className="text-left">
            <h4 className="text-[10px] font-black text-white uppercase tracking-widest mb-4">Get Help</h4>
            <div className="flex flex-col space-y-2">
              <a href="mailto:fnds.isp@gmail.com" className="text-xs font-bold text-slate-500 hover:text-white transition-colors">
                fnds.isp@gmail.com
              </a>
              <a href={CONTENT.contact.facebook} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-slate-500 hover:text-brand-blue transition-colors">
                Facebook Page
              </a>
              <a href={`tel:${CONTENT.contact.whatsapp.replace(/\s/g, '')}`} className="text-xs font-bold text-slate-500 hover:text-white transition-colors">
                {CONTENT.contact.whatsapp}
              </a>
              <a href="tel:+639987654321" className="text-xs font-bold text-slate-500 hover:text-white transition-colors">
                +63 998 765 4321
              </a>
            </div>
          </div>
        </div>

        {/* Social Presence */}
        <div className="flex justify-center gap-6 mb-8">
          <a href={CONTENT.contact.facebook} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-brand-blue transition-colors bg-white/5 p-2 rounded-full border border-white/5 group" title="Visit FNDS on Facebook">
            <Facebook className="w-4 h-4 group-hover:fill-brand-blue/20" />
          </a>
          <a href="#" className="text-slate-500 hover:text-brand-blue transition-colors bg-white/5 p-2 rounded-full border border-white/5">
            <Twitter className="w-4 h-4" />
          </a>
          <a href="#" className="text-slate-500 hover:text-brand-blue transition-colors bg-white/5 p-2 rounded-full border border-white/5">
            <Instagram className="w-4 h-4" />
          </a>
        </div>

        {/* Legal & Localization */}
        <div className="flex flex-col items-center gap-4">
          <p className="text-[9px] font-bold text-slate-600 uppercase tracking-widest">
            © 2025 FNDS Internet Systems. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4 text-slate-700">
            <div className="flex items-center gap-2">
              <Globe className="w-3.5 h-3.5" />
              <span className="text-[9px] font-black uppercase tracking-widest">Philippines</span>
            </div>
            <div className="w-px h-3 bg-white/5"></div>
            <a href="#" className="text-[9px] font-black uppercase tracking-widest hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
