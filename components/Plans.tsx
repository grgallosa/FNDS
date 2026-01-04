
import React from 'react';
import { CONTENT } from '../constants';
import { Check } from 'lucide-react';

interface PlansProps {
  onApplyClick?: () => void;
}

const Plans: React.FC<PlansProps> = ({ onApplyClick }) => {
  const p = CONTENT.plans as any; 

  return (
    <section id="plans" className="py-12 md:py-24 relative bg-brand-dark">
      <div className="absolute top-1/2 left-0 w-[40rem] h-[40rem] bg-brand-blue/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-sm text-[9px] font-black text-brand-blue uppercase tracking-widest mb-4">
            {p.headerLabel || 'OUR INTERNET PLANS'}
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">{p.title}</h2>
          
          <p className="text-slate-400 text-xs md:text-sm lg:text-base max-w-xl lg:max-w-2xl mx-auto font-medium leading-relaxed">
            {p.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 xl:gap-12 max-w-6xl mx-auto items-stretch">
          {p.items.map((plan: any, idx: number) => (
            <div 
              key={plan.id} 
              className={`relative p-6 md:p-8 lg:p-10 flex flex-col rounded-md border transition-all duration-500 group ${
                idx === 1 
                  ? 'bg-slate-850/50 border-brand-blue/50 shadow-[0_0_60px_rgba(64,84,255,0.15)] md:scale-105 md:hover:scale-[1.08] z-20' 
                  : 'bg-white/5 border-white/10 hover:border-brand-blue/30 md:hover:-translate-y-2 z-10'
              }`}
            >
              {idx === 1 && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-blue text-white text-[8px] lg:text-[9px] font-black px-4 py-1.5 rounded-sm uppercase tracking-widest shadow-xl">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <div className="text-brand-blue font-black text-[10px] lg:text-[11px] uppercase tracking-widest mb-3">{plan.name}</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter transition-colors group-hover:text-brand-blue/90">{plan.speed}</span>
                  <div className="flex flex-col">
                    <span className="text-[9px] lg:text-[10px] font-black text-brand-blue uppercase tracking-widest leading-none">Up to</span>
                    <span className="text-xs lg:text-sm font-bold text-slate-500 uppercase tracking-widest">Mbps</span>
                  </div>
                </div>
              </div>

              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-slate-400 text-xs font-bold">₱</span>
                <span className="text-2xl lg:text-3xl font-black text-white">{plan.price.split('₱')[1].split('/')[0]}</span>
                <span className="text-slate-500 text-[10px] lg:text-[11px] font-bold uppercase ml-1">/ month</span>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                {plan.features.map((f: string, i: number) => (
                  <div key={i} className="flex items-start gap-3 text-xs lg:text-[13px] font-medium text-slate-300">
                    <div className={`mt-0.5 w-4 h-4 lg:w-5 lg:h-5 rounded-sm flex-shrink-0 flex items-center justify-center ${idx === 1 ? 'bg-brand-blue/20 text-brand-blue' : 'bg-white/10 text-slate-400'}`}>
                      <Check className="w-2.5 h-2.5 lg:w-3 lg:h-3 stroke-[3px]" />
                    </div>
                    <span className="leading-snug">{f}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={onApplyClick}
                className={`w-full py-4 lg:py-5 rounded-sm text-[10px] lg:text-[11px] font-black transition-all duration-300 ${
                idx === 1 
                  ? 'bg-brand-blue text-white shadow-xl shadow-brand-blue/30 hover:bg-white hover:text-brand-blue active:scale-95' 
                  : 'bg-white text-slate-900 hover:bg-brand-blue hover:text-white active:scale-95'
              }`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Disclaimer Section */}
        <div className="mt-20 pt-8 border-t border-white/5 text-center">
          <p className="text-[9px] lg:text-[10px] text-slate-600 font-bold uppercase tracking-widest max-w-2xl mx-auto leading-relaxed opacity-60 hover:opacity-100 transition-opacity">
            {p.disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Plans;
