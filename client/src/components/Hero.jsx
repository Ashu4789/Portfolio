import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center relative pb-20 pt-20">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6 max-w-3xl"
      >
        <p className="text-emerald-400 font-medium tracking-wide">Hello, I'm</p>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
          Ashutosh Mohanty
        </h1>
        <h2 className="text-3xl md:text-5xl text-slate-400 font-bold tracking-tight">
          Aspiring Software Product Developer
        </h2>
        <p className="text-lg text-slate-400 max-w-xl leading-relaxed mt-4">
          Computer Science Engineering student focused on building impactful, 
          scalable solutions. Specialized in full-stack web development.
        </p>
        <div className="pt-8 flex gap-4">
          <a href="#projects" className="px-8 py-3 bg-emerald-500 text-slate-950 rounded-full font-bold hover:bg-emerald-400 transition-colors shadow-[0_0_15px_rgba(16,185,129,0.5)]">
            View Work
          </a>
          <a href="#contact" className="px-8 py-3 glass rounded-full text-white font-bold hover:bg-white/10 transition-colors">
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
