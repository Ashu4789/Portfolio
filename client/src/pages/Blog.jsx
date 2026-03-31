import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { BookOpen, Calendar, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "Mastering React Component Patterns",
    excerpt: "Explore advanced React patterns like compound components, render props, and custom hooks to build scalable applications.",
    date: "March 15, 2026",
    category: "React",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "The Ultimate Guide to Modern CSS",
    excerpt: "Deep dive into CSS Grid, Subgrid, CSS variables, and modern responsive design techniques without media query spaghetti.",
    date: "February 28, 2026",
    category: "CSS",
    readTime: "8 min read"
  },
  {
    id: 3,
    title: "Building AI-Powered Chatbots",
    excerpt: "How I integrated the Gemini API into my portfolio to create an intelligent assistant that understands my resume.",
    date: "February 10, 2026",
    category: "AI",
    readTime: "6 min read"
  }
];

const Blog = () => {
  return (
    <>
      <SEO 
        title="Blog" 
        description="Read my latest articles, tutorials, and snippets on web development, AI, and software engineering."
      />
      <motion.main 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="px-6 md:px-12 lg:px-24 mx-auto max-w-4xl py-24 min-h-[80vh]"
      >
        <div className="flex items-center gap-4 mb-16">
          <BookOpen className="w-10 h-10 text-emerald-500" />
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">Blog & Snippets</h1>
        </div>
        
        <p className="text-slate-600 dark:text-slate-400 text-lg mb-12">
          I write about web development, UI/UX design, and my experiences building software. Here are some of my recent thoughts.
        </p>

        <div className="grid gap-8">
          {blogPosts.map((post, index) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card group p-8 rounded-2xl hover:-translate-y-1 transition-all duration-300 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 cursor-pointer relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/0 to-emerald-500/5 dark:to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="flex flex-wrap items-center gap-4 mb-4 text-xs font-mono text-slate-500 dark:text-slate-400 relative z-10">
                <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                  <Calendar className="w-3 h-3" /> {post.date}
                </span>
                <span>•</span>
                <span className="bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">{post.category}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-emerald-500 transition-colors relative z-10">
                {post.title}
              </h2>
              
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 relative z-10">
                {post.excerpt}
              </p>
              
              <div className="flex items-center text-emerald-600 dark:text-emerald-400 font-semibold text-sm group-hover:gap-2 transition-all relative z-10">
                Read Article <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </motion.article>
          ))}
        </div>
      </motion.main>
    </>
  );
};

export default Blog;
