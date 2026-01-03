
import React from 'react';
import { CONTENT } from '../constants';

const Services: React.FC = () => {
  const s = CONTENT.services;

  return (
    <section id="services" className="py-12 md:py-20 bg-brand-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-block px-3 py-1 bg-brand-blue/10 border border-brand-blue/20 text-brand-blue rounded-sm text-[10px] font-black uppercase tracking-widest mb-6">
              Our Edge
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-[1.1] tracking-tight">
              {s.title}
            </h2>
            <p className="text-lg text-slate-400 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
              We're not just an ISP; we're your gateway to the digital world. Our infrastructure is built locally, for locals, ensuring performance that outshines national providers.
            </p>
          </div>
          
          <div className="lg:w-1/2 grid grid-cols-2 gap-4 md:gap-6">
             <div className="space-y-4 md:space-y-6">
               <div className="bg-slate-850/50 border border-white/5 p-8 rounded-md">
                 <div className="text-4xl font-black text-white mb-1">99.9%</div>
                 <div className="text-xs font-bold text-slate-500 uppercase">Uptime Ratio</div>
               </div>
               <div className="bg-brand-blue p-8 rounded-md shadow-2xl shadow-brand-blue/20">
                 <div className="text-4xl font-black text-white mb-1">24/7</div>
                 <div className="text-xs font-black text-white/70 uppercase">Local Support</div>
               </div>
             </div>
             <div className="pt-8 space-y-4 md:space-y-6">
               <div className="bg-white/5 border border-white/5 p-8 rounded-md">
                 <div className="text-4xl font-black text-white mb-1">0ms</div>
                 <div className="text-xs font-bold text-slate-500 uppercase">Input Lag</div>
               </div>
               <div className="bg-brand-yellow p-8 rounded-md shadow-2xl shadow-brand-yellow/20">
                 <div className="text-4xl font-black text-slate-950 mb-1">10k+</div>
                 <div className="text-xs font-black text-slate-900/60 uppercase">Local Users</div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
