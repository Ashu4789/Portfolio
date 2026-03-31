import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonialsData = [
  {
    id: 1,
    content: "Ashutosh is an incredibly talented developer. His work on the Business Travel Chatbot demonstrated not only his technical proficiency with AI but his outstanding eye for creating engaging user interfaces.",
    author: "Siddharth Sharma",
    role: "Project Collaborator",
    avatar: "https://ui-avatars.com/api/?name=Siddharth+Sharma&background=10b981&color=fff"
  },
  {
    id: 2,
    content: "When we needed a comprehensive dashboard for national datasets, Ashutosh delivered a fully optimized, real-time tracking system. His understanding of full-stack architecture is top-notch.",
    author: "Sachin Mehta",
    role: "Academic Mentor",
    avatar: "https://ui-avatars.com/api/?name=Sachin+Mehta&background=3b82f6&color=fff"
  },
  {
    id: 3,
    content: "The architectural portfolio he built for MKP Designs was exactly what we envisioned. It’s fast, incredibly smooth, and perfectly captures our brand identity. Highly recommended!",
    author: "Mohit Kumar Patel",
    role: "Founder, MKP Designs",
    avatar: "https://ui-avatars.com/api/?name=Mohit+Kumar+Patel&background=ef4444&color=fff"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white"><span className="text-emerald-500">06.</span> Testimonials</h2>
        <div className="h-[1px] bg-slate-200 dark:bg-slate-700 flex-1 max-w-xs transition-colors"></div>
      </div>

      <div className="relative max-w-4xl mx-auto h-[400px] md:h-[300px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -10 }}
            transition={{ duration: 0.5 }}
            className="absolute w-full px-4"
          >
            <div className="glass-card max-w-3xl mx-auto p-8 md:p-12 rounded-3xl relative border border-emerald-500/20 shadow-2xl">
              <Quote className="absolute top-6 left-6 md:top-8 md:left-8 w-12 h-12 text-emerald-500/20" />
              
              <div className="relative z-10 text-center">
                <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed italic mb-8">
                  "{testimonialsData[currentIndex].content}"
                </p>
                
                <div className="flex flex-col items-center justify-center gap-3">
                  <img 
                    src={testimonialsData[currentIndex].avatar} 
                    alt={testimonialsData[currentIndex].author} 
                    className="w-16 h-16 rounded-full border-2 border-emerald-500 shadow-lg object-cover"
                  />
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">{testimonialsData[currentIndex].author}</h4>
                    <span className="text-sm font-mono text-emerald-600 dark:text-emerald-400">{testimonialsData[currentIndex].role}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button 
          onClick={handlePrev}
          className="absolute left-0 md:-left-12 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-slate-100 shadow-md dark:bg-slate-800 text-slate-500 hover:text-emerald-500 transition-colors z-20"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={handleNext}
          className="absolute right-0 md:-right-12 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-slate-100 shadow-md dark:bg-slate-800 text-slate-500 hover:text-emerald-500 transition-colors z-20"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
      
      {/* Pagination dots */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonialsData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index ? 'bg-emerald-500 scale-125' : 'bg-slate-300 dark:bg-slate-700 hover:bg-emerald-300'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
