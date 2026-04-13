import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import Magnetic from './Magnetic';

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  
  // Mouse position for spotlight and parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for animations
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  // Parallax for image: subtle pan based on mouse position
  const imagePanX = useTransform(springX, (val) => (val / 100) * -1); // Subtle movement
  const imagePanY = useTransform(springY, (val) => (val / 100) * -1);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    // Relative position from center (0 to 1)
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    mouseX.set(x - rect.width / 2);
    mouseY.set(y - rect.height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const spotlightBackground = useTransform(
    [springX, springY],
    ([x, y]) => {
      // Offset back to top-left for gradient centering
      const centerX = x + (cardRef.current?.getBoundingClientRect().width / 2 || 0);
      const centerY = y + (cardRef.current?.getBoundingClientRect().height / 2 || 0);
      return `radial-gradient(650px circle at ${centerX}px ${centerY}px, rgba(16, 185, 129, 0.12), transparent 80%)`;
    }
  );

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, scale: 1.01 }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="glass-card flex flex-col relative overflow-hidden group min-h-[500px] p-0 transform-gpu transition-all duration-500 border border-slate-200/50 dark:border-white/5 hover:border-emerald-500/30 border-beam"
    >
      {/* Dynamic Spotlight Glow */}
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100"
        style={{ background: spotlightBackground }}
      />

      <div className="relative w-full h-64 overflow-hidden shrink-0 hidden sm:block">
        <div className="absolute inset-0 bg-slate-900/10 dark:bg-slate-900/40 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none"></div>
        <motion.img 
          src={project.image} 
          alt={project.title} 
          style={{ x: imagePanX, y: imagePanY, scale: 1.1 }}
          className="w-[110%] h-[110%] -left-[5%] -top-[5%] object-cover transition-transform duration-700 ease-out" 
        />
        
        <div className="absolute top-6 left-6 z-20 w-12 h-12 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl flex items-center justify-center border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-bold shadow-lg group-hover:-translate-y-1 transition-transform duration-500">
          {index + 1}
        </div>
        
        <div className="absolute top-6 right-6 z-20 flex gap-3">
            <Magnetic>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl flex items-center justify-center border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500/50 transition-all shadow-lg">
                <Github className="w-6 h-6" />
              </a>
            </Magnetic>
            <Magnetic>
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl flex items-center justify-center border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500/50 transition-all shadow-lg">
                <ExternalLink className="w-6 h-6" />
              </a>
            </Magnetic>
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-1 relative z-20">
        <div className="flex justify-between items-start mb-6">
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors leading-tight duration-500">{project.title}</h3>
          
          <div className="flex gap-4 sm:hidden">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              <ExternalLink className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        {project.date && (
          <div className="flex items-center gap-2 mb-4">
            <span className="h-[1px] w-8 bg-emerald-500/30"></span>
            <span className="text-xs font-mono font-semibold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase">{project.date}</span>
          </div>
        )}
        
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base mb-8 flex-1 group-hover:text-slate-900 dark:group-hover:text-slate-300 transition-colors duration-500">
          {project.description}
        </p>
        
        <div className="flex flex-wrap items-center gap-4 mt-auto pt-6 border-t border-slate-200 dark:border-white/5">
          <div className="flex flex-wrap gap-2 flex-1">
            {project.tech.map((t, i) => (
              <motion.span 
                key={i}
                initial={{ opacity: 0.8, scale: 1 }}
                whileHover={{ scale: 1.1, opacity: 1, backgroundColor: 'rgba(16, 185, 129, 0.2)' }}
                className="text-[10px] font-mono font-bold tracking-tighter text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-500/10 px-3 py-1 rounded-lg border border-emerald-500/10 transition-all cursor-default"
              >
                {t}
              </motion.span>
            ))}
          </div>
          
          <Magnetic>
            <Link 
              to={`/project/${project.id}`}
              className="group/btn relative overflow-hidden ml-auto text-xs font-bold text-white bg-emerald-500 py-3 px-6 rounded-2xl transition-all shadow-lg hover:shadow-emerald-500/25 active:scale-95 flex items-center gap-2"
            >
              <span className="relative z-10">Details</span>
              <ArrowUpRight className="w-4 h-4 relative z-10 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              <div className="absolute inset-0 bg-emerald-600 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
            </Link>
          </Magnetic>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white"><span className="text-emerald-500">03.</span> Projects</h2>
        <div className="h-[1px] bg-slate-200 dark:bg-slate-700 flex-1 max-w-xs transition-colors"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 perspective-[1000px]">
        {projectsData.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
