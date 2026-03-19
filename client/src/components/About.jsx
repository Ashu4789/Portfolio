import React from 'react';
import { motion } from 'framer-motion';
import { User, Code2, Rocket } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-4xl font-bold text-white"><span className="text-emerald-500">01.</span> About Me</h2>
          <div className="h-[1px] bg-slate-700 flex-1 max-w-xs"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
            <p>
              Hello! I'm <span className="text-emerald-400 font-medium">Ashutosh Mohanty</span>, a Computer Science Engineering student from 
              Lovely Professional University (2023–2027). I enjoy creating things that live on the internet and love exploring new technologies.
            </p>
            <p>
              My interest in software development sparked when I realized the power of building scalable solutions
              that could positively impact users. Fast forward to today, I'm constantly learning, problem-solving, 
              and honing my full-stack web development skills.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="glass-card p-4 flex flex-col items-center justify-center text-center gap-2">
                <Code2 className="text-blue-400 w-8 h-8" />
                <span className="text-sm font-semibold text-slate-200">Full Stack Dev</span>
              </div>
              <div className="glass-card p-4 flex flex-col items-center justify-center text-center gap-2">
                <Rocket className="text-red-400 w-8 h-8" />
                <span className="text-sm font-semibold text-slate-200">Problem Solver</span>
              </div>
            </div>
          </div>
          
          <div className="relative group mx-auto w-3/4 md:w-full max-w-sm cursor-pointer mt-8 md:mt-0">
            <div className="absolute inset-0 bg-emerald-500 rounded-2xl transform translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
            <div className="relative glass-card aspect-[4/5] rounded-2xl overflow-hidden z-10 box-glow border-emerald-500/30 group-hover:border-emerald-500 transition-colors duration-500">
              <div className="w-full h-full relative">
                 <div className="absolute inset-0 bg-emerald-500/10 group-hover:opacity-0 transition-opacity duration-500 z-10 pointer-events-none"></div>
                 <img 
                    src="/IMG-20241108-WA0050.jpg.jpeg" 
                    alt="Ashutosh Mohanty" 
                    className="w-full h-full object-cover object-center grayscale-[30%] group-hover:grayscale-0 transition-all duration-500 z-0" 
                    style={{ imageRendering: '-webkit-optimize-contrast', transform: 'translateZ(0)' }}
                 />
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <a href="/Ashutosh Mohanty12307673CV2026.pdf" download="Ashutosh_Mohanty_CV.pdf" className="inline-flex items-center gap-2 px-8 py-3 bg-emerald-500 text-slate-950 rounded-full font-bold hover:bg-emerald-400 transition-colors shadow-[0_0_15px_rgba(16,185,129,0.5)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
