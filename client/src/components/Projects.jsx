import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';

const ProjectCard = ({ project, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseX = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseY = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;
    const xPct = (mouseXPos / width) - 0.5;
    const yPct = (mouseYPos / height) - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      style={{ rotateX, rotateY, zIndex: 10, transformPerspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="glass-card flex flex-col relative overflow-hidden group min-h-[450px] p-0 transform-gpu hover:shadow-[0_20px_40px_rgba(16,185,129,0.2)] transition-all duration-500 hover:-translate-y-2 border border-transparent hover:border-emerald-500/30"
    >
      <div className="relative w-full h-56 overflow-hidden shrink-0 hidden sm:block">
        <div className="absolute inset-0 bg-white/60 dark:bg-slate-900/60 group-hover:bg-white/20 dark:group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
        <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        
        <div className="absolute top-4 left-4 z-20 w-10 h-10 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md flex items-center justify-center border border-emerald-500/50 text-emerald-600 dark:text-emerald-400 font-bold">
          {index + 1}
        </div>
        
        <div className="absolute top-4 right-4 z-20 flex gap-3">
            <a href={project.github} target="_blank" rel="noopener noreferrer" onPointerDown={(e) => e.stopPropagation()} className="w-10 h-10 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md flex items-center justify-center border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500/50 transition-all cursor-pointer">
              <Github className="w-5 h-5" />
            </a>
            <a href={project.live} target="_blank" rel="noopener noreferrer" onPointerDown={(e) => e.stopPropagation()} className="w-10 h-10 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md flex items-center justify-center border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500/50 transition-all cursor-pointer">
              <ExternalLink className="w-5 h-5" />
            </a>
        </div>
      </div>
      
      <div className="p-6 md:p-8 flex flex-col flex-1 relative z-20">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors leading-tight">{project.title}</h3>
          
          {/* Mobile only links */}
          <div className="flex gap-3 sm:hidden relative z-50">
            <a href={project.github} target="_blank" rel="noopener noreferrer" onPointerDown={(e) => e.stopPropagation()} className="text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400">
              <Github className="w-5 h-5" />
            </a>
            <a href={project.live} target="_blank" rel="noopener noreferrer" onPointerDown={(e) => e.stopPropagation()} className="text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400">
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        {project.date && <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 mb-4 block">{project.date}</span>}
        
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm mb-6 flex-1">
          {project.description}
        </p>
        
        <div className="flex flex-wrap items-center gap-3 mt-auto pt-4 border-t border-slate-200 dark:border-slate-800 relative z-50 transition-colors">
          <div className="flex flex-wrap gap-2 flex-1">
            {project.tech.map((t, i) => (
              <span key={i} className="text-xs font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-500/10 px-2 py-1 rounded transition-colors">
                {t}
              </span>
            ))}
          </div>
          <Link 
            to={`/project/${project.id}`}
            onPointerDown={(e) => e.stopPropagation()}
            className="ml-auto text-xs font-bold text-white bg-emerald-500 hover:bg-emerald-600 py-2 px-4 rounded-full transition-colors cursor-pointer shrink-0"
          >
            Details
          </Link>
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
