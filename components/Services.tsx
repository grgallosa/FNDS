
import React from 'react';
import { CONTENT } from '../constants';

const Services: React.FC = () => {
  const s = CONTENT.services;

  return (
    <section id="services" className="py-16 md:py-32 bg-brand-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-center">
          <div className="lg:w-5/12 text-center lg:text-left">
            <div className="inline-block px-3 py-1 bg-brand-blue/10 border border-brand-blue/20 text-brand-blue rounded-sm text-[10px] lg:text-[11px] font-black uppercase tracking-widest mb-8">
              Our Edge
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-[1.1] tracking-tight">
              {s.title}
            </h2>
            <p className="text-lg lg:text-xl text-slate-400 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
              We're not just an ISP; we're your gateway to the digital world. Our infrastructure is built locally, for locals, ensuring performance that outshines national providers.
            </p>
          </div>
          
          <div className="lg:w-7/12 grid grid-cols-2 gap-6 md:gap-8">
             <div className="space-y-6 md:space-y-8">
               <div className="bg-slate-850/50 border border-white/5 p-8 lg:p-12 rounded-md hover:border-brand-blue/30 transition-colors">
                 <div className="text-4xl lg:text-6xl font-black text-white mb-2">99.9%</div>
                 <div className="text-xs lg:text-sm font-bold text-slate-500 uppercase tracking-widest">Uptime Ratio</div>
               </div>
               <div className="bg-brand-blue p-8 lg:p-12 rounded-md shadow-2xl shadow-brand-blue/20 hover:scale-105 transition-transform">
                 <div className="text-4xl lg:text-6xl font-black text-white mb-2">24/7</div>
                 <div className="text-xs lg:text-sm font-black text-white/70 uppercase tracking-widest">Local Support</div>
               </div>
             </div>
             <div className="pt-10 lg:pt-16 space-y-6 md:space-y-8">
               <div className="bg-white/5 border border-white/5 p-8 lg:p-12 rounded-md hover:border-brand-yellow/30 transition-colors">
                 <div className="text-4xl lg:text-6xl font-black text-white mb-2">0ms</div>
                 <div className="text-xs lg:text-sm font-bold text-slate-500 uppercase tracking-widest">Input Lag</div>
               </div>
               <div className="bg-brand-yellow p-8 lg:p-12 rounded-md shadow-2xl shadow-brand-yellow/20 hover:scale-105 transition-transform">
                 <div className="text-4xl lg:text-6xl font-black text-slate-950 mb-2">10k+</div>
                 <div className="text-xs lg:text-sm font-black text-slate-900/60 uppercase tracking-widest">Local Users</div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
