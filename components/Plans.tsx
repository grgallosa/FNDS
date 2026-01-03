
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
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-blue/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-sm text-[10px] font-black text-brand-blue uppercase tracking-widest mb-4">
            {p.headerLabel || 'OUR INTERNET PLANS'}
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">{p.title}</h2>
          
          <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto font-medium leading-relaxed">
            {p.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {p.items.map((plan: any, idx: number) => (
            <div 
              key={plan.id} 
              className={`relative p-8 md:p-10 flex flex-col rounded-md border transition-all duration-500 group ${
                idx === 1 
                  ? 'bg-slate-850/50 border-brand-blue/50 shadow-[0_0_50px_rgba(64,84,255,0.15)] md:scale-105' 
                  : 'bg-white/5 border-white/10 hover:border-white/20'
              }`}
            >
              {idx === 1 && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-blue text-white text-[9px] font-black px-4 py-1.5 rounded-sm uppercase tracking-widest shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <div className="text-brand-blue font-black text-xs uppercase tracking-widest mb-3">{plan.name}</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl md:text-6xl font-black text-white tracking-tighter">{plan.speed}</span>
                  <div className="flex flex-col">
                    <span className="text-xs font-black text-brand-blue uppercase tracking-widest leading-none">Up to</span>
                    <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">Mbps</span>
                  </div>
                </div>
              </div>

              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-slate-400 text-sm font-bold">₱</span>
                <span className="text-3xl font-black text-white">{plan.price.split('₱')[1].split('/')[0]}</span>
                <span className="text-slate-500 text-xs font-bold uppercase ml-1">/ month</span>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                {plan.features.map((f: string, i: number) => (
                  <div key={i} className="flex items-start gap-3 text-sm font-medium text-slate-300">
                    <div className={`mt-0.5 w-5 h-5 rounded-sm flex-shrink-0 flex items-center justify-center ${idx === 1 ? 'bg-brand-blue/20 text-brand-blue' : 'bg-white/10 text-slate-400'}`}>
                      <Check className="w-3 h-3 stroke-[3px]" />
                    </div>
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={onApplyClick}
                className={`w-full py-4 rounded-sm text-xs font-black transition-all ${
                idx === 1 
                  ? 'bg-brand-blue text-white shadow-xl shadow-brand-blue/30 hover:scale-[1.02] active:scale-95' 
                  : 'bg-white text-slate-900 hover:bg-brand-blue hover:text-white active:scale-95'
              }`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Disclaimer Section */}
        <div className="mt-20 pt-8 border-t border-white/5 text-center">
          <p className="text-[10px] md:text-xs text-slate-600 font-bold uppercase tracking-widest max-w-2xl mx-auto leading-loose">
            {p.disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Plans;
