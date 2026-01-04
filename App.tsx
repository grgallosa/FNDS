
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
    <div className="min-h-screen bg-brand-dark selection:bg-brand-blue selection:text-white">
      <Header onApplyClick={handleApplyClick} />
      <main>
        <Hero onApplyClick={handleApplyClick} />
        
        <Plans onApplyClick={handleApplyClick} />
        
        <SupportHub />
        
        <Contact />

        {/* High-Contrast CTA Section */}
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-32">
          <div className="bg-gradient-to-br from-brand-yellow to-yellow-400 rounded-md px-8 md:px-16 lg:px-24 py-16 md:py-24 lg:py-32 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24 relative overflow-hidden shadow-[0_0_80px_rgba(255,199,0,0.15)] group">
            {/* Abstract Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-900/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-20 text-center lg:text-left flex-1">
               <div className="relative hidden lg:block group-hover:scale-105 transition-transform duration-700">
                  <div className="w-64 h-64 xl:w-80 xl:h-80 bg-slate-900 rounded-sm overflow-hidden border-[10px] border-white/20 rotate-3 shadow-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600" 
                      alt="Join FNDS"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  <div className="absolute -bottom-10 -right-10 bg-slate-900 p-8 rounded-sm shadow-2xl border border-white/5 -rotate-3 group-hover:rotate-0 transition-transform duration-500">
                    <div className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Reliable Speed</div>
                    <div className="text-4xl font-black text-white">100% <span className="text-sm font-bold text-slate-500">Fiber</span></div>
                  </div>
               </div>
               
               <div className="flex-1">
                 <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-950 tracking-tighter leading-none mb-6">
                    Get Fast, Reliable <br className="hidden md:block" /> Internet in Cuartero
                 </h2>
                 <p className="text-slate-900/70 text-lg md:text-xl lg:text-2xl font-black">
                    Plans start at ₱1,299 / month
                 </p>
               </div>
            </div>

            <div className="flex flex-col items-center gap-6 relative z-10 w-full lg:w-auto">
              <button 
                onClick={handleApplyClick}
                className="bg-slate-950 text-white px-12 lg:px-20 py-5 lg:py-6 rounded-sm text-lg lg:text-xl font-black shadow-2xl hover:bg-brand-blue hover:scale-105 active:scale-95 transition-all w-full md:w-auto"
              >
                 Apply Now
              </button>
              <p className="text-[10px] lg:text-[11px] font-black text-slate-900/50 uppercase tracking-[0.3em] text-center">
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
