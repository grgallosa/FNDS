import React, { useState } from 'react';
import { ArrowLeft, Send, CheckCircle2 } from 'lucide-react';
import { CONTENT } from '../constants';

interface ApplicationFormPageProps {
  onBack: () => void;
}

const BARANGAYS = [
  "Agcabugao", "Agdahon", "Agnaga", "Angub", "Balingasag", 
  "Bito-on Ilawod", "Bito-on Ilaya", "Bun-od", "Carataya", 
  "Lunayan", "Mahabang Sapa", "Mahunodhunod", "Maindang", 
  "Mainit", "Malagab-i", "Nagba", "Poblacion Ilawod", 
  "Poblacion Ilaya", "Poblacion Takas", "Puti-an", 
  "San Antonio", "Sinabsaban"
];

export default function ApplicationFormPage({ onBack }: ApplicationFormPageProps) {
  const c = CONTENT.contact;
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-brand-dark flex items-center justify-center px-6">
        <div className="max-w-md w-full text-center space-y-4 animate-in zoom-in duration-300">
          <div className="w-16 h-16 bg-brand-blue/20 rounded-full flex items-center justify-center mx-auto border border-brand-blue/30">
            <CheckCircle2 className="w-8 h-8 text-brand-blue" />
          </div>
          <div>
            <h2 className="text-2xl font-black text-white mb-2">Request Received</h2>
            <p className="text-slate-400 text-xs font-medium leading-relaxed">
              Salamat! Our team will contact you for a site survey within 24-48 hours.
            </p>
          </div>
          <button 
            onClick={onBack}
            className="w-full py-3.5 bg-brand-blue text-white text-[10px] font-black uppercase tracking-widest rounded-sm shadow-xl"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-dark pb-12">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/95 backdrop-blur-md border-b border-white/5 px-6 h-14 flex items-center">
        <div className="max-w-4xl mx-auto w-full flex justify-between items-center">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
            <span className="text-[8px] font-black uppercase tracking-widest">Back</span>
          </button>
          
          <div className="flex items-center gap-1.5">
            <div className="w-6 h-6 bg-brand-blue rounded-sm flex items-center justify-center text-white font-black text-[10px]">F</div>
            <span className="text-base font-extrabold tracking-tighter text-white">
              FNDS<span className="text-brand-blue">ISP</span>
            </span>
          </div>
          <div className="w-12 hidden md:block"></div>
        </div>
      </nav>

      <div className="pt-20 px-6">
        <div className="max-w-xl mx-auto">
          <div className="mb-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-2 py-0.5 bg-brand-blue/10 border border-brand-blue/20 text-brand-blue rounded-sm text-[8px] font-black uppercase tracking-widest mb-2.5">
              Apply for Internet Service
            </div>
            <h1 className="text-2xl md:text-3xl font-black text-white mb-2 tracking-tight uppercase">
              INTERNET SERVICE REQUEST
            </h1>
            <p className="text-slate-500 text-xs font-medium leading-relaxed">
              Request a new internet connection in Cuartero. Our team will contact you within 48 hours for a site check.
            </p>
          </div>

          <div className="bg-white/[0.015] p-5 md:p-7 border border-white/5 rounded-sm relative shadow-2xl">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3.5" onSubmit={handleSubmit}>
              <div className="md:col-span-1">
                <label className="block text-[8px] font-black text-slate-500 uppercase tracking-widest mb-1">{c.form.name}</label>
                <input 
                  required
                  type="text" 
                  className="w-full bg-slate-950/50 border border-white/10 px-3.5 py-2.5 text-xs font-bold text-white focus:outline-none focus:border-brand-blue/40 transition-all rounded-sm placeholder:text-slate-800"
                  placeholder="Juan Dela Cruz"
                />
              </div>
              <div className="md:col-span-1">
                <label className="block text-[8px] font-black text-slate-500 uppercase tracking-widest mb-1">{c.form.phone}</label>
                <input 
                  required
                  type="tel" 
                  className="w-full bg-slate-950/50 border border-white/10 px-3.5 py-2.5 text-xs font-bold text-white focus:outline-none focus:border-brand-blue/40 transition-all rounded-sm placeholder:text-slate-800"
                  placeholder="09xx xxx xxxx"
                />
              </div>
              <div className="md:col-span-1">
                <label className="block text-[8px] font-black text-slate-500 uppercase tracking-widest mb-1">{c.form.email}</label>
                <input 
                  required
                  type="email" 
                  className="w-full bg-slate-950/50 border border-white/10 px-3.5 py-2.5 text-xs font-bold text-white focus:outline-none focus:border-brand-blue/40 transition-all rounded-sm placeholder:text-slate-800"
                  placeholder="juan@email.com"
                />
              </div>
              <div className="md:col-span-1">
                <label className="block text-[8px] font-black text-slate-500 uppercase tracking-widest mb-1">Barangay</label>
                <select 
                  required
                  className="w-full bg-slate-950/50 border border-white/10 px-3.5 py-2.5 text-xs font-bold text-white focus:outline-none focus:border-brand-blue/40 transition-all rounded-sm appearance-none cursor-pointer"
                >
                  <option className="bg-slate-950" value="">Select Location</option>
                  {BARANGAYS.map((brgy) => (
                    <option key={brgy} className="bg-slate-950" value={brgy.toLowerCase()}>
                      {brgy}
                    </option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-[8px] font-black text-slate-500 uppercase tracking-widest mb-1">{c.form.details}</label>
                <textarea 
                  rows={2}
                  className="w-full bg-slate-950/50 border border-white/10 px-3.5 py-2.5 text-xs font-bold text-white focus:outline-none focus:border-brand-blue/40 transition-all rounded-sm placeholder:text-slate-800 resize-none"
                  placeholder="Specific location details or questions?"
                ></textarea>
              </div>
              
              <div className="md:col-span-2 pt-2">
                <button 
                  type="submit"
                  className="w-full py-3.5 bg-brand-blue text-white text-[9px] font-black tracking-widest uppercase flex items-center justify-center gap-2 rounded-sm shadow-lg hover:bg-brand-blue/90 active:scale-[0.99] transition-all group"
                >
                  <Send className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  {c.form.submit}
                </button>
                <p className="mt-3 text-center text-[7px] font-bold text-slate-700 uppercase tracking-[0.2em]">
                  Installation is subject to site availability and technical survey.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
