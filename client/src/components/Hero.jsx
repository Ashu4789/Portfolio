import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import Magnetic from './Magnetic';
import ParticleBackground from './ParticleBackground';
import FloatingShape from './FloatingShape';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center relative pb-20 pt-20">
      <ParticleBackground />
      <FloatingShape />
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6 max-w-3xl relative z-10 pointer-events-none"
      >
        <p className="text-emerald-600 font-medium tracking-wide">Hello, I'm</p>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight text-slate-900 dark:text-white">
          Ashutosh Mohanty
        </h1>
        <h2 className="text-3xl md:text-5xl text-slate-600 dark:text-slate-400 font-bold tracking-tight h-[60px] md:h-[80px]">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-700">
            <Typewriter
              words={['Software Product Developer', 'Full-Stack Developer', 'Problem Solver', 'Tech Enthusiast']}
              loop={true}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed mt-4">
          Computer Science Engineering student focused on building impactful, 
          scalable solutions. Specialized in full-stack web development.
        </p>
        <div className="pt-8 flex gap-4 relative z-10 pointer-events-auto">
          <Magnetic>
            <a href="#projects" className="px-8 py-3 bg-emerald-500 text-white rounded-full font-bold hover:bg-emerald-400 hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.6)] transition-all duration-300 block">
              View Work
            </a>
          </Magnetic>
          <Magnetic>
            <a href="#contact" className="px-8 py-3 glass rounded-full text-slate-800 dark:text-white font-bold hover:bg-slate-200 dark:hover:bg-emerald-500/10 hover:border-emerald-500/50 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-300 block">
              Contact Me
            </a>
          </Magnetic>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
