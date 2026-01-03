import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, Loader2, AlertCircle, Zap, HelpCircle, Wifi, SignalHigh, Globe, ClipboardList } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

const SUGGESTED_QUESTIONS = [
  { label: "No Internet Connection", text: "My internet is not working", icon: <Globe className="w-3 h-3" /> },
  { label: "Slow Internet / Wi-Fi", text: "My internet is slow", icon: <Zap className="w-3 h-3" /> },
  { label: "Wi-Fi Not Showing", text: "I can’t see my Wi-Fi network", icon: <Wifi className="w-3 h-3" /> },
  { label: "Frequent Disconnections", text: "Internet keeps disconnecting", icon: <SignalHigh className="w-3 h-3" /> },
  { label: "Plans & Availability", text: "Plans, pricing, or coverage", icon: <HelpCircle className="w-3 h-3" /> },
  { label: "Apply / Installation Help", text: "How to apply or installation process", icon: <ClipboardList className="w-3 h-3" /> },
];

const SupportHub: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: 'May problema bala ang imo internet? Pili lang sa mga options sa idalom ukon i-type ang imo pamangkot para mabuligan ko ikaw.' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async (customMessage?: string) => {
    const messageToSend = customMessage || input;
    if (!messageToSend.trim() || isLoading) return;

    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: messageToSend }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: messageToSend,
        config: {
          systemInstruction: `
            You are the FNDS Network Diagnostic AI (FNDS-NDA).
            Primary Language: Hiligaynon (Capiznon variant).
            Context: Cuartero, Capiz.
            
            Purpose: Assist users in Cuartero, Capiz with basic internet troubleshooting.
            
            CRITICAL INSTRUCTIONS:
            - Respond ALWAYS in clear, simple Hiligaynon.
            - Explain technical terms (e.g., instead of just "ONU", say "modem ukon ang gamay nga box").
            - MANDATORY: Every single response must end by offering further help from the "FNDS Support Team" or "Customer Support".
            
            Diagnostic Protocols (Respond in Hiligaynon):
            1. No internet: Check if the "LOS" light is red. If yes, there is a fiber break. Try to "restart" or "i-off kag i-on" the modem for 2 minutes.
            2. Slow internet: Ask if many people are using the Wi-Fi. Suggest disconnecting other devices.
            3. Red light: This usually means "wala signal" or "putol ang wire".
            4. Registration: Tell them to click the "Apply Now" button on the website.
            
            Tone: Helpful local technician. Keep answers short (2-3 sentences max). 
            Example closing lines in Hiligaynon: 
            - "Kon indi gihapon mag-okay, i-message kami para mabuligan kamo sang amon tech team."
            - "Handa ang amon Customer Support sa pagbulig sa inyo kon may problema pa kamo."
            - "Palihog kontaka ang amon support team kon kinahanglan niyo sang dugang nga assistance."
          `,
          temperature: 0.3,
        },
      });

      const botResponse = response.text || "Pasensya gid, nag-error ang amon system. Palihog tilawi liwat kundi tumawag sa amon hotline para sa Customer Support.";
      setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'bot', text: "Indi ma-proseso ang imo message subong. Palihog kontaka lang ang amon Customer Support hotline para sa madasig nga bulig." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="support" className="py-16 md:py-24 bg-brand-dark relative border-t border-white/5">
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-black text-white tracking-tight">AI Diagnostic</h2>
            <p className="text-slate-500 text-xs font-medium">Madasig nga bulig para sa imo internet connection.</p>
          </div>
          <div className="flex items-center gap-2 px-2 py-1 bg-brand-blue/10 border border-brand-blue/20 rounded-sm">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-[9px] font-black text-brand-blue uppercase tracking-widest">Active</span>
          </div>
        </div>

        <div className="bg-white/[0.02] border border-white/5 rounded-md flex flex-col h-[500px] md:h-[550px] shadow-xl overflow-hidden">
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-4 scrollbar-hide">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] px-4 py-3 text-[13px] font-medium leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-brand-blue text-white rounded-2xl rounded-tr-none shadow-lg' 
                    : 'bg-white/5 text-slate-300 rounded-2xl rounded-tl-none border border-white/5'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 px-4 py-3 rounded-2xl rounded-tl-none border border-white/5 flex gap-1">
                  <span className="w-1 h-1 bg-brand-blue rounded-full animate-bounce"></span>
                  <span className="w-1 h-1 bg-brand-blue rounded-full animate-bounce delay-100"></span>
                  <span className="w-1 h-1 bg-brand-blue rounded-full animate-bounce delay-200"></span>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-slate-900/30 border-t border-white/5">
            <div className="grid grid-cols-2 gap-2 mb-4">
              {SUGGESTED_QUESTIONS.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(q.text)}
                  disabled={isLoading}
                  className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/5 rounded-md text-[9px] font-bold text-slate-400 hover:text-brand-blue hover:bg-brand-blue/5 transition-all active:scale-95 text-left leading-tight"
                >
                  <div className="text-brand-blue/50 flex-shrink-0">{q.icon}</div>
                  {q.label}
                </button>
              ))}
            </div>

            <div className="flex gap-2">
              <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                className="flex-1 bg-white/5 border border-white/10 px-4 py-3 text-xs font-medium text-white focus:outline-none focus:border-brand-blue/30 rounded-lg transition-all placeholder:text-slate-600"
                placeholder="Ano ang problema sang internet mo?"
              />
              <button 
                onClick={() => handleSend()}
                disabled={isLoading}
                className="bg-brand-blue px-5 py-3 text-white rounded-lg transition-all hover:bg-brand-blue/90 active:scale-95 disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportHub;