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
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white"><span className="text-emerald-500">01.</span> About Me</h2>
          <div className="h-[1px] bg-slate-200 dark:bg-slate-700 flex-1 max-w-xs"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
            <p>
              Hello! I'm <span className="text-emerald-600 dark:text-emerald-400 font-medium">Ashutosh Mohanty</span>, 
              a Computer Science undergraduate and Full Stack Developer. I have hands-on experience building scalable web applications 
              using React, Node.js, Express, and modern databases.
            </p>
            <p>
              I specialize in designing responsive user interfaces, developing RESTful APIs, integrating AI services, 
              and deploying applications on cloud platforms. I'm passionate about building real-world software products 
              and solving complex engineering challenges.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="glass-card p-4 flex flex-col items-center justify-center text-center gap-2 hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(16,185,129,0.15)] hover:border-emerald-500/50 transition-all duration-300 group cursor-pointer">
                <Code2 className="text-blue-500 w-8 h-8 group-hover:scale-110 group-hover:-translate-y-1 transition-transform" />
                <span className="text-sm font-semibold text-slate-800 dark:text-slate-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">Full Stack Dev</span>
              </div>
              <div className="glass-card p-4 flex flex-col items-center justify-center text-center gap-2 hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(16,185,129,0.15)] hover:border-emerald-500/50 transition-all duration-300 group cursor-pointer">
                <Rocket className="text-red-500 w-8 h-8 group-hover:scale-110 group-hover:-translate-y-1 transition-transform" />
                <span className="text-sm font-semibold text-slate-800 dark:text-slate-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">Problem Solver</span>
              </div>
            </div>
          </div>
          
          <div className="relative group mx-auto w-3/4 md:w-full max-w-sm cursor-pointer mt-8 md:mt-0">
            <div className="absolute inset-0 bg-emerald-500 rounded-2xl transform translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
            <div className="relative glass-card aspect-[4/5] rounded-2xl overflow-hidden z-10 box-glow border-emerald-500/30 group-hover:border-emerald-500 transition-colors duration-500">
              <div className="w-full h-full relative">
                 <div className="absolute inset-0 bg-emerald-500/10 dark:bg-emerald-900/40 group-hover:opacity-0 transition-opacity duration-500 z-10 pointer-events-none"></div>
                 <img 
                    src="/IMG-20241108-WA0050.jpg.jpeg" 
                    alt="Ashutosh Mohanty" 
                    className="w-full h-full object-cover object-center grayscale-[30%] group-hover:grayscale-0 transition-all duration-500 z-0" 
                    style={{ imageRendering: '-webkit-optimize-contrast', transform: 'translateZ(0)' }}
                 />
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <a href="/Ashutosh Mohanty12307673CV2026.pdf" download="Ashutosh_Mohanty_CV.pdf" className="inline-flex items-center gap-2 px-8 py-3 bg-emerald-500 text-white rounded-full font-bold hover:bg-emerald-600 hover:scale-105 hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] transition-all duration-300 group">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-y-1 group-hover:scale-110 transition-transform"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
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
