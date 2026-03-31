import React from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

const GithubStats = () => {
  return (
    <section id="github-stats" className="py-24 relative">
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white"><span className="text-emerald-500">07.</span> Coding Activity</h2>
        <div className="h-[1px] bg-slate-200 dark:bg-slate-700 flex-1 max-w-xs transition-colors"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card p-8 md:p-12 rounded-3xl relative overflow-hidden border border-slate-200 dark:border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.05)] dark:shadow-none"
      >
        <div className="flex items-center gap-3 mb-8">
          <Github className="w-8 h-8 text-emerald-500" />
          <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">GitHub Contributions</h3>
        </div>
        
        <div className="overflow-x-auto pb-4 custom-scrollbar">
          <div className="min-w-[800px] flex justify-center">
            {/* The calendar component respects the container's width, so we wrap it to ensure horizontal scrolling on mobile */}
            <GitHubCalendar 
              username="Ashu4789" 
              colorScheme="light" // Adjust based on theme context if needed, but it handles colors nicely
              blockSize={14}
              blockMargin={4}
              fontSize={14}
              theme={{
                light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
                dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
              }}
            />
          </div>
        </div>
        
        <div className="mt-8 flex justify-center">
          <a 
            href="https://github.com/Ashu4789" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
          >
            Follow me on GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default GithubStats;
