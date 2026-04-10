import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { BookOpen, Sparkles, Clock, Rocket } from 'lucide-react';

const Blog = () => {
  return (
    <>
      <SEO 
        title="Blog" 
        description="Coming Soon - Read my latest articles, tutorials, and snippets on web development, AI, and software engineering."
      />
      <div className="pt-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <Breadcrumbs />
      </div>
      <motion.main 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="px-6 md:px-12 lg:px-24 mx-auto max-w-4xl py-24 min-h-[85vh] flex flex-col items-center justify-center text-center"
      >
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 15,
            delay: 0.2 
          }}
          className="relative mb-12"
        >
          <div className="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-full scale-150 animate-pulse"></div>
          <div className="relative glass-card p-8 rounded-full border border-emerald-500/30">
            <BookOpen className="w-16 h-16 text-emerald-500" />
          </div>
          
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 0],
              y: [0, -5, 5, 0]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-4 -right-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 p-3 rounded-2xl shadow-xl border border-slate-700 dark:border-slate-200"
          >
            <Sparkles className="w-5 h-5 text-yellow-400" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            Blog & <span className="bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">Insights</span>
          </h1>
          
          <p className="text-slate-600 dark:text-slate-400 text-xl max-w-2xl mx-auto leading-relaxed mb-12">
            I'm currently crafting high-quality content about web development, AI integration, and software engineering. Something special is in the works!
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl"
        >
          <div className="glass-card p-6 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center gap-4 text-left">
            <div className="bg-emerald-500/10 p-3 rounded-xl">
              <Clock className="w-6 h-6 text-emerald-500" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white">Dropping Soon</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">Preparation in progress</p>
            </div>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center gap-4 text-left">
            <div className="bg-emerald-500/10 p-3 rounded-xl">
              <Rocket className="w-6 h-6 text-emerald-500" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white">Tech Deep Dives</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">Tutorials & Case studies</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 inline-flex items-center gap-2 px-6 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400 text-sm font-medium animate-pulse"
        >
          <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
          New articles coming soon
        </motion.div>
      </motion.main>
    </>
  );
};

export default Blog;
