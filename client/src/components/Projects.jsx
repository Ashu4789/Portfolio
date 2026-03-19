import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projectsData = [
  {
    title: "National Accounts Dashboard",
    description: "A comprehensive dashboard for managing national accounts. Features role-based access control, real-time data visualization, and reporting.",
    tech: ["React", "NodeJS", "Express", "MongoDB"],
    github: "https://github.com/Ashu4789/National-Accounts-dashboard.git",
    live: "https://national-accounts-dashboard.vercel.app"
  },
  {
    title: "Tour Guide Management Website",
    description: "A platform to connect tourists with local guides. Includes booking system, reviews, and interactive maps.",
    tech: ["React", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/avi-var07/Tour-Guide-Management-System.git",
    live: "https://tour-guide-management.vercel.app"
  },
  {
    title: "Business Travel Chatbot",
    description: "An AI-powered chatbot designed to streamline business travel arrangements, expenses tracking, and itinerary management.",
    tech: ["Python", "Natural Language Processing", "React"],
    github: "https://github.com/Siddharth-73/AI_Business_Travel_Chatbot.git",
    live: "https://ai-business-travel-chatbot.vercel.app/"
  }
];

const ProjectCard = ({ project, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      style={{ x, y, rotateX, rotateY, zIndex: 10 }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.15}
      whileDrag={{ cursor: "grabbing" }}
      className="glass-card flex flex-col justify-between p-8 relative overflow-hidden group min-h-[350px]"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full filter blur-[40px] group-hover:bg-emerald-500/20 transition-colors duration-500"></div>
      
      <div>
        <div className="flex justify-between items-center mb-6">
          <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
            <span className="text-emerald-400 font-bold text-xl">{index + 1}</span>
          </div>
          <div className="flex gap-4 relative z-50">
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              onPointerDown={(e) => e.stopPropagation()}
              className="text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href={project.live} 
              target="_blank" 
              rel="noopener noreferrer"
              onPointerDown={(e) => e.stopPropagation()}
              className="text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer"
            >
              <ExternalLink className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">{project.title}</h3>
        <p className="text-slate-400 leading-relaxed text-sm mb-6">
          {project.description}
        </p>
      </div>
      
      <div className="flex flex-wrap gap-3 mt-auto">
        {project.tech.map((t, i) => (
          <span key={i} className="text-xs font-mono text-emerald-300 bg-emerald-900/30 px-2 py-1 rounded">
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-4xl font-bold text-white"><span className="text-emerald-500">03.</span> Projects</h2>
        <div className="h-[1px] bg-slate-700 flex-1 max-w-xs"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-[1000px]">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
