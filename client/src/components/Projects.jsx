import React from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projectsData = [
  {
    title: "National Accounts Dashboard",
    date: "January 2026",
    description: "A Dashboard that unifies fragmented national accounts and macroeconomic datasets into a single dashboard.",
    detailedDescription: "A Dashboard that unifies fragmented national accounts and macroeconomic datasets into a single dashboard for faster, accurate policy and economic analysis.\n\nSome of its features include Interactive time series charts, sector/region drill downs, exportable reports, and automated data refresh.\nThe project contains automated ETL with incremental caching and on demand aggregations powering real time dynamic visualizations.",
    tech: ["React", "NodeJS", "Express", "MongoDB"],
    github: "https://github.com/Ashu4789/National-Accounts-dashboard.git",
    live: "https://national-accounts-dashboard.vercel.app"
  },
  {
    title: "Business Travel Chatbot",
    date: "April 2025",
    description: "An AI-powered travel planning platform for hotel and flight booking and itinerary management.",
    detailedDescription: "An AI-powered travel planning platform for hotel and flight booking and itineraries.\n\nContains deal search and chat-based interactions for seamless user assistance.\nA futuristic UI with custom interactive elements for enhanced engagement.",
    tech: ["Python", "Natural Language Processing", "React"],
    github: "https://github.com/Siddharth-73/AI_Business_Travel_Chatbot.git",
    live: "https://ai-business-travel-chatbot.vercel.app/"
  },
  {
    title: "MKP Designs",
    date: "Ongoing since January 2026",
    description: "A architecture firm website for showcasing their work and services.",
    detailedDescription: "A fully responsive architectural portfolio showing custom animated image galleries and service offering details. Mention specific client feedback or performance improvements here.",
    tech: ["React", "NodeJS", "Express", "MongoDB", "Tailwind CSS", "Cloudinary"],
    github: "https://github.com/Ashu4789/MKPDesigns.git",
    live: "https://mkp-designs.vercel.app"
  },
  {
    title: "Tour Guide Management Website",
    date: "May 2025",
    description: "A tour management platform with booking, guide assignment, and custom trip planning.",
    detailedDescription: "A tour management platform with booking, guide assignment, and custom trip planning.\n\nHas an admin dashboard for efficient CRUD operations and package management.\nContains customer feedback, ratings, and a guide-booking ecosystem for enhanced usability.",
    tech: ["PHP", "mysql", "Tailwind CSS" , "HTML" , "JavaScript"],
    github: "https://github.com/avi-var07/Tour-Guide-Management-System.git",
    live: "https://tour-guide-management.vercel.app"
  },
];

const ProjectCard = ({ project, index, onOpenDetails }) => {
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
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
              <span className="text-emerald-400 font-bold text-xl">{index + 1}</span>
            </div>
            {project.date && <span className="text-xs font-mono text-emerald-400 bg-emerald-900/40 px-2 py-1 rounded-md">{project.date}</span>}
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
      
      <div className="flex flex-wrap items-center gap-3 mt-auto pt-4 relative z-50">
        <div className="flex flex-wrap gap-2 flex-1">
          {project.tech.map((t, i) => (
            <span key={i} className="text-xs font-mono text-emerald-300 bg-emerald-900/30 px-2 py-1 rounded">
              {t}
            </span>
          ))}
        </div>
        <button 
          onClick={() => onOpenDetails(project)}
          onPointerDown={(e) => e.stopPropagation()}
          className="ml-auto text-xs font-bold text-slate-950 bg-emerald-500 hover:bg-emerald-400 py-2 px-4 rounded-full transition-colors cursor-pointer"
        >
          Details
        </button>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = React.useState(null);

  // Prevent scrolling when modal is open
  React.useEffect(() => {
    if (selectedProject) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; }
  }, [selectedProject]);

  return (
    <section id="projects" className="py-24 relative">
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-4xl font-bold text-white"><span className="text-emerald-500">03.</span> Projects</h2>
        <div className="h-[1px] bg-slate-700 flex-1 max-w-xs"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 perspective-[1000px]">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} onOpenDetails={setSelectedProject} />
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            ></motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }} 
              animate={{ opacity: 1, scale: 1, y: 0 }} 
              exit={{ opacity: 0, scale: 0.95, y: 20 }} 
              className="relative w-full max-w-2xl bg-slate-900 border border-emerald-500/30 rounded-2xl shadow-2xl overflow-hidden z-[101] max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6 sm:p-8">
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
                
                <h3 className="text-3xl font-bold text-white mb-2 pr-8">{selectedProject.title}</h3>
                
                <div className="flex gap-4 mb-6">
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors">
                    <Github className="w-4 h-4" /> GitHub
                  </a>
                  <a href={selectedProject.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors">
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                </div>
                
                <div className="mb-8">
                  <h4 className="text-slate-300 font-semibold mb-2">Overview</h4>
                  <p className="text-slate-400 leading-relaxed mb-6">{selectedProject.description}</p>
                  
                  <h4 className="text-slate-300 font-semibold mb-2">Detailed Description</h4>
                  <p className="text-slate-400 leading-relaxed whitespace-pre-line">{selectedProject.detailedDescription}</p>
                </div>
                
                <div>
                  <h4 className="text-slate-300 font-semibold mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t, i) => (
                      <span key={i} className="text-xs font-mono text-emerald-300 bg-emerald-900/40 border border-emerald-500/20 px-3 py-1.5 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
