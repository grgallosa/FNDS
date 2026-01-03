
import { useState, useRef, useEffect } from 'react';
import React from 'react';
import { MessageCircle, Send, X, Bot, Loader2 } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

const GeminiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: 'Maayong adlaw! Ako ang FNDS AI Assistant. Paano ako makabulig sa imo inquiries parte sa amon internet service subong?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
      }
    );

    const plansSection = document.getElementById('plans');
    if (plansSection) {
      observer.observe(plansSection);
    }

    return () => {
      if (plansSection) {
        observer.unobserve(plansSection);
      }
    };
  }, []);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const apiKey = (process as any).env.API_KEY;
      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: `
            You are a helpful assistant for FNDS ISP in Cuartero, Capiz, Philippines.
            Primary Language: Hiligaynon (Capiznon).
            
            Services Offered: 
            1. Home Install (Fiber internet starting at ₱1,299/mo).
            2. Monthly Subscription (Unlimited data, high speed).
            3. PisoWiFi Business (Vending machines for stores).
            
            CRITICAL RULES:
            - ALWAYS answer in Hiligaynon.
            - Use simple and clear language that local residents can understand.
            - Keep answers short and direct (max 2 sentences).
            - Be very friendly and polite ("Maayong adlaw", "Salamat").
            
            If the user wants to apply, tell them to use the "Apply Now" button on the website.
          `,
          temperature: 0.2,
        },
      });

      const botResponse = response.text || "Pasensya gid, nag-kaproblema ang amon system. Palihog i-message kami sa Facebook ukon tumawag sa amon hotline.";
      setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'bot', text: "Service interrupted. Palihog tilawi liwat sa ulihi." }]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-[60] animate-in fade-in slide-in-from-bottom-4 duration-500">
      {isOpen ? (
        <div className="bg-slate-900 w-80 md:w-96 h-[500px] shadow-[0_0_80px_rgba(0,0,0,0.6)] border border-white/10 flex flex-col overflow-hidden rounded-md backdrop-blur-xl">
          <div className="bg-white/5 border-b border-white/5 p-5 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-brand-blue rounded-sm flex items-center justify-center text-white">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-black tracking-widest text-white uppercase">FNDS Assistant</span>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-[9px] font-bold text-slate-500 uppercase tracking-tighter">Online</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-500 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-950/50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 text-xs font-medium leading-relaxed border ${
                  m.role === 'user' 
                    ? 'bg-brand-blue border-brand-blue text-white rounded-sm' 
                    : 'bg-white/5 border-white/5 text-slate-300 rounded-sm shadow-sm'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 p-4 border border-white/5 rounded-sm">
                  <Loader2 className="w-4 h-4 animate-spin text-brand-blue" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 bg-slate-900 border-t border-white/5 flex gap-3">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 bg-white/5 border border-white/5 px-4 py-3 text-xs font-medium text-white focus:outline-none focus:border-brand-blue rounded-sm transition-colors"
              placeholder="I-type ang imo pamangkot..."
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className="bg-brand-blue p-3 text-white rounded-sm transition-all disabled:opacity-50 hover:scale-105 active:scale-95"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-brand-blue w-14 h-14 rounded-sm shadow-[0_0_40px_rgba(64,84,255,0.4)] hover:scale-110 transition-all active:scale-95 flex items-center justify-center text-white"
        >
          <MessageCircle className="w-7 h-7" />
        </button>
      )}
    </div>
  );
};

export default GeminiAssistant;
