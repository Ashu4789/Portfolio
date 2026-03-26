import React from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence, useSpring } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projectsData = [
  {
    title: "National Accounts Dashboard",
    date: "January 2026",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    description: "A Dashboard that unifies fragmented national accounts and macroeconomic datasets into a single dashboard.",
    detailedDescription: "A Dashboard that unifies fragmented national accounts and macroeconomic datasets into a single dashboard for faster, accurate policy and economic analysis.\n\nSome of its features include Interactive time series charts, sector/region drill downs, exportable reports, and automated data refresh.\nThe project contains automated ETL with incremental caching and on demand aggregations powering real time dynamic visualizations.",
    tech: ["React", "NodeJS", "Express", "MongoDB"],
    github: "https://github.com/Ashu4789/National-Accounts-dashboard.git",
    live: "https://national-accounts-dashboard.vercel.app"
  },
  {
    title: "Business Travel Chatbot",
    date: "April 2025",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop",
    description: "An AI-powered travel planning platform for hotel and flight booking and itinerary management.",
    detailedDescription: "An AI-powered travel planning platform for hotel and flight booking and itineraries.\n\nContains deal search and chat-based interactions for seamless user assistance.\nA futuristic UI with custom interactive elements for enhanced engagement.",
    tech: ["Python", "Natural Language Processing", "React"],
    github: "https://github.com/Siddharth-73/AI_Business_Travel_Chatbot.git",
    live: "https://ai-business-travel-chatbot.vercel.app/"
  },
  {
    title: "MKP Designs",
    date: "Ongoing since January 2026",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    description: "A architecture firm website for showcasing their work and services.",
    detailedDescription: "A fully responsive architectural portfolio showing custom animated image galleries and service offering details. Mention specific client feedback or performance improvements here.",
    tech: ["React", "NodeJS", "Express", "MongoDB", "Tailwind CSS", "Cloudinary"],
    github: "https://github.com/Ashu4789/MKPDesigns.git",
    live: "https://mkp-designs.vercel.app"
  },
  {
    title: "Tour Guide Management Website",
    date: "May 2025",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop",
    description: "A tour management platform with booking, guide assignment, and custom trip planning.",
    detailedDescription: "A tour management platform with booking, guide assignment, and custom trip planning.\n\nHas an admin dashboard for efficient CRUD operations and package management.\nContains customer feedback, ratings, and a guide-booking ecosystem for enhanced usability.",
    tech: ["PHP", "mysql", "Tailwind CSS" , "HTML" , "JavaScript"],
    github: "https://github.com/avi-var07/Tour-Guide-Management-System.git",
    live: "https://tour-guide-management.vercel.app"
  }
];

const ProjectCard = ({ project, index, onOpenDetails }) => {
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
          <button 
            onClick={() => onOpenDetails(project)}
            onPointerDown={(e) => e.stopPropagation()}
            className="ml-auto text-xs font-bold text-white bg-emerald-500 hover:bg-emerald-600 py-2 px-4 rounded-full transition-colors cursor-pointer shrink-0"
          >
            Details
          </button>
        </div>
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
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white"><span className="text-emerald-500">03.</span> Projects</h2>
        <div className="h-[1px] bg-slate-200 dark:bg-slate-700 flex-1 max-w-xs transition-colors"></div>
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
              className="absolute inset-0 bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-sm transition-colors"
              onClick={() => setSelectedProject(null)}
            ></motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }} 
              animate={{ opacity: 1, scale: 1, y: 0 }} 
              exit={{ opacity: 0, scale: 0.95, y: 20 }} 
              className="relative w-full max-w-2xl bg-white dark:bg-slate-900 border border-emerald-500/30 rounded-2xl shadow-2xl overflow-hidden z-[101] max-h-[90vh] overflow-y-auto transition-colors"
            >
              <div className="p-6 sm:p-8">
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
                
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2 pr-8">{selectedProject.title}</h3>
                
                <div className="flex gap-4 mb-6">
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 transition-colors">
                    <Github className="w-4 h-4" /> GitHub
                  </a>
                  <a href={selectedProject.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 transition-colors">
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                </div>
                
                <div className="mb-8">
                  <h4 className="text-slate-800 dark:text-slate-300 font-semibold mb-2">Overview</h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">{selectedProject.description}</p>
                  
                  <h4 className="text-slate-800 dark:text-slate-300 font-semibold mb-2">Detailed Description</h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed whitespace-pre-line">{selectedProject.detailedDescription}</p>
                </div>
                
                <div>
                  <h4 className="text-slate-800 dark:text-slate-300 font-semibold mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t, i) => (
                      <span key={i} className="text-xs font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-500/10 border border-emerald-300 dark:border-emerald-500/30 px-3 py-1.5 rounded-full transition-colors">
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
