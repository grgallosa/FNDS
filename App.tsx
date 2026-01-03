
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Plans from './components/Plans';
import SupportHub from './components/SupportHub';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ApplicationFormPage from './components/ApplicationFormPage';

const App: React.FC = () => {
  const [view, setView] = useState<'landing' | 'apply'>('landing');

  // Ensure scroll to top when switching views
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const handleApplyClick = () => {
    setView('apply');
  };

  if (view === 'apply') {
    return <ApplicationFormPage onBack={() => setView('landing')} />;
  }

  return (
    <div className="min-h-screen bg-brand-dark">
      <Header onApplyClick={handleApplyClick} />
      <main>
        <Hero onApplyClick={handleApplyClick} />
        
        <Plans onApplyClick={handleApplyClick} />
        
        <SupportHub />
        
        <Contact />

        {/* High-Contrast CTA Section */}
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
          <div className="bg-gradient-to-br from-brand-yellow to-yellow-400 rounded-md px-8 md:px-24 py-16 md:py-24 flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden shadow-[0_0_80px_rgba(255,199,0,0.15)]">
            {/* Abstract Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-900/10 blur-[80px] rounded-full translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 text-center lg:text-left">
               <div className="relative hidden md:block">
                  <div className="w-48 h-48 md:w-64 md:h-64 bg-slate-900 rounded-sm overflow-hidden border-[8px] border-white/20 rotate-3 shadow-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400" 
                      alt="Join FNDS"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-slate-900 p-6 rounded-sm shadow-2xl border border-white/5 -rotate-3">
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Reliable Speed</div>
                    <div className="text-3xl font-black text-white">100% <span className="text-xs font-bold text-slate-500">Fiber</span></div>
                  </div>
               </div>
               
               <div>
                 <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-none mb-4">
                    Get Fast, Reliable <br /> Internet in Cuartero
                 </h2>
                 <p className="text-slate-900/70 text-lg md:text-xl font-bold">
                    Plans start at ₱1,299 / month
                 </p>
               </div>
            </div>

            <div className="flex flex-col items-center gap-4 relative z-10">
              <button 
                onClick={handleApplyClick}
                className="bg-slate-950 text-white px-12 py-5 rounded-sm text-lg font-black shadow-2xl hover:bg-brand-blue hover:scale-105 active:scale-95 transition-all w-full md:w-auto"
              >
                 Apply Now
              </button>
              <p className="text-[10px] font-black text-slate-900/50 uppercase tracking-[0.2em] text-center">
                Available in selected barangays of Cuartero
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
