import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { projectsData } from '../data/projectsData';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const foundProject = projectsData.find(p => p.id === id);
    if (foundProject) {
      setProject(foundProject);
    } else {
      // Handle not found
      navigate('/', { replace: true });
    }
  }, [id, navigate]);

  if (!project) return null;

  return (
    <>
      <SEO 
        title={`${project.title} - Case Study`} 
        description={project.description}
      />
      <div className="pt-24 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto">
        <Breadcrumbs customTitle={project.title} />
      </div>
      <motion.main 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="px-6 md:px-12 lg:px-24 mx-auto max-w-5xl py-24 min-h-screen"
      >
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-500 hover:text-emerald-500 mb-8 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Portfolio
        </button>

        <div className="rounded-3xl overflow-hidden mb-12 shadow-2xl relative h-[40vh] md:h-[60vh] w-full">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent z-10"></div>
          <img 
            src={project.image} 
            alt={project.title} 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 p-8 md:p-12 z-20">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">{project.title}</h1>
            <div className="flex flex-wrap gap-4 items-center">
              <span className="bg-emerald-500 text-white font-mono text-sm px-3 py-1 rounded-full bg-opacity-90 backdrop-blur">
                {project.date}
              </span>
              <div className="flex gap-4">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-emerald-400 transition-colors bg-white/10 px-4 py-1.5 rounded-full backdrop-blur">
                  <Github className="w-4 h-4" /> Code
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-emerald-400 transition-colors bg-white/10 px-4 py-1.5 rounded-full backdrop-blur">
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Overview</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
              {project.description}
            </p>
            
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Deep Dive</h2>
            <div className="prose prose-lg dark:prose-invert prose-emerald max-w-none text-slate-600 dark:text-slate-400 leading-relaxed whitespace-pre-line">
              {project.detailedDescription}
            </div>
          </div>

          <div>
            <div className="glass-card p-6 md:p-8 rounded-2xl sticky top-24">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Technologies Used</h3>
              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech, index) => (
                  <span 
                    key={index} 
                    className="text-sm font-mono text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 px-4 py-2 rounded-lg transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <hr className="my-8 border-slate-200 dark:border-slate-700" />
              
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Roles</h3>
              <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span> Full Stack Development
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span> UI/UX Implementation
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span> Deployment & DevOps
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.main>
    </>
  );
};

export default ProjectDetails;
