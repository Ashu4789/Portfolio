import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2, Bot } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { portfolioKnowledge } from '../utils/portfolioKnowledge';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'model', text: "Hi! I am Ashutosh's AI assistant. Ask me anything about his projects, skills, or background!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const handleSend = async (e) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userText = input.trim();
    setInput('');
    const newMessages = [...messages, { role: 'user', text: userText }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      
      if (!apiKey) {
        setMessages([...newMessages, { role: 'model', text: 'Oops! The VITE_GEMINI_API_KEY is not set. I cannot connect to my brain right now.' }]);
        setIsLoading(false);
        return;
      }

      const ai = new GoogleGenAI({ apiKey });
      
      // Build the standard conversation history array
      const contents = newMessages.map(msg => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.text }]
      }));

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: contents,
        config: {
          systemInstruction: portfolioKnowledge,
          temperature: 0.3
        }
      });

      setMessages([...newMessages, { role: 'model', text: response.text }]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages([...newMessages, { role: 'model', text: 'Sorry, I am having trouble connecting right now. Please try again later.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Search Window */}
      <div 
        className={`absolute bottom-20 right-0 w-[350px] sm:w-[400px] h-[500px] max-h-[80vh] bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl flex flex-col transition-all duration-300 origin-bottom-right transform ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}
      >
        {/* Header */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center bg-primary text-white rounded-t-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="flex items-center gap-3 relative z-10">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-sm">Ashutosh AI</h3>
              <p className="text-xs text-white/80">Online & ready</p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-1.5 hover:bg-white/20 rounded-full transition-colors relative z-10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Message List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-slate-950/50">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div 
                className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-primary text-white rounded-tr-sm' 
                    : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-sm rounded-tl-sm'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-3 rounded-2xl rounded-tl-sm flex gap-1">
                <span className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                <span className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                <span className="w-2 h-2 bg-primary rounded-full animate-bounce"></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 rounded-b-2xl">
          <form onSubmit={handleSend} className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
              className="flex-1 bg-slate-100 dark:bg-slate-800 border border-transparent focus:border-primary focus:ring-1 focus:ring-primary rounded-full px-4 py-2 text-sm text-slate-900 dark:text-white outline-none transition-all placeholder:text-slate-500"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="p-2.5 bg-primary text-white rounded-full hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
            </button>
          </form>
          <div className="text-[10px] text-center text-slate-400 mt-2">
            AI can make mistakes. Built with Google Gemini.
          </div>
        </div>
      </div>

      {/* FAB */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-primary text-white rounded-full shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center relative group"
        aria-label="Toggle chat"
      >
        <span className="absolute inset-0 rounded-full bg-primary opacity-50 w-full h-full animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]"></span>
        {isOpen ? <X className="w-6 h-6 relative z-10" /> : <MessageCircle className="w-6 h-6 relative z-10" />}
      </button>
    </div>
  );
};

export default Chatbot;
