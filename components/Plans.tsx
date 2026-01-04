
import React from 'react';
import { CONTENT } from '../constants';
import { Check } from 'lucide-react';

interface PlansProps {
  onApplyClick?: () => void;
}

const Plans: React.FC<PlansProps> = ({ onApplyClick }) => {
  const p = CONTENT.plans as any; 

  return (
    <section id="plans" className="py-12 md:py-16 relative bg-brand-dark overflow-hidden">
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-brand-blue/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 px-2 py-0.5 bg-white/5 border border-white/10 rounded-sm text-[8px] font-black text-brand-blue uppercase tracking-[0.2em] mb-3">
            {p.headerLabel || 'OUR INTERNET PLANS'}
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-white mb-3 tracking-tight">{p.title}</h2>
          
          <p className="text-slate-500 text-[11px] md:text-xs max-w-sm mx-auto font-medium leading-relaxed">
            {p.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 max-w-5xl mx-auto items-stretch">
          {p.items.map((plan: any, idx: number) => (
            <div 
              key={plan.id} 
              className={`relative p-5 md:p-6 flex flex-col rounded-sm border transition-all duration-500 group ${
                idx === 1 
                  ? 'bg-slate-850/40 border-brand-blue/40 shadow-xl md:scale-105 z-20' 
                  : 'bg-white/5 border-white/10 z-10'
              }`}
            >
              {idx === 1 && (
                <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-brand-blue text-white text-[7px] font-black px-3 py-1 rounded-sm uppercase tracking-widest">
                  POPULAR
                </div>
              )}

              <div className="mb-4">
                <div className="text-brand-blue font-black text-[8px] uppercase tracking-widest mb-1">{plan.name}</div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl md:text-4xl font-black text-white tracking-tighter leading-none">{plan.speed}</span>
                  <div className="flex flex-col">
                    <span className="text-[7px] font-black text-brand-blue uppercase tracking-widest leading-none">UP TO</span>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-none">MBPS</span>
                  </div>
                </div>
              </div>

              <div className="flex items-baseline gap-0.5 mb-5 pb-4 border-b border-white/5">
                <span className="text-slate-500 text-[9px] font-bold">₱</span>
                <span className="text-xl font-black text-white leading-none">{plan.price.split('₱')[1].split('/')[0]}</span>
                <span className="text-slate-500 text-[8px] font-bold uppercase ml-1">/ month</span>
              </div>

              <div className="space-y-2 mb-6 flex-grow">
                {plan.features.map((f: string, i: number) => (
                  <div key={i} className="flex items-start gap-2 text-[10px] font-medium text-slate-400">
                    <div className={`mt-0.5 w-3.5 h-3.5 rounded-sm flex-shrink-0 flex items-center justify-center ${idx === 1 ? 'bg-brand-blue/20 text-brand-blue' : 'bg-white/5 text-slate-600'}`}>
                      <Check className="w-2 h-2 stroke-[3px]" />
                    </div>
                    <span className="leading-tight">{f}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={onApplyClick}
                className={`w-full py-3 rounded-sm text-[8px] font-black uppercase tracking-widest transition-all duration-300 ${
                idx === 1 
                  ? 'bg-brand-blue text-white hover:bg-white hover:text-brand-blue' 
                  : 'bg-white/10 text-white hover:bg-brand-blue'
              }`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 text-center">
          <p className="text-[7px] text-slate-700 font-bold uppercase tracking-[0.2em] max-w-md mx-auto leading-relaxed">
            {p.disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Plans;