import React from 'react';
import { motion } from 'framer-motion';

const levels = [
  "Native or bilingual",
  "Full professional",
  "Professional working",
  "Limited working",
  "Elementary"
];

const languages = [
  { name: "Hindi", currentLevel: "Native or bilingual", color: "#10b981" },
  { name: "Odia", currentLevel: "Native or bilingual", color: "#10b981" },
  { name: "English", currentLevel: "Full professional", color: "#3b82f6" },
  { name: "Japanese", currentLevel: "Elementary", color: "#f59e0b" }
];

const VerticalScale = ({ language, index }) => {
  const levelIndex = levels.indexOf(language.currentLevel);
  // Calculate percentage from bottom. 
  // Elementary (index 4) -> 20%, Limited (index 3) -> 40%, etc.
  const percentage = ((levels.length - levelIndex) / levels.length) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card p-6 flex flex-col items-center group relative overflow-hidden"
    >
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-8 z-10">{language.name}</h3>
      
      <div className="flex gap-4 w-full h-80 relative z-10">
        {/* Left side: Labels */}
        <div className="flex-1 flex flex-col justify-between items-end pr-2 h-full py-1">
          {levels.map((level, i) => (
            <span 
              key={level} 
              className={`text-[10px] md:text-xs font-medium transition-colors duration-300 ${
                level === language.currentLevel 
                  ? 'text-slate-900 dark:text-white font-bold' 
                  : 'text-slate-400 dark:text-slate-500'
              }`}
            >
              {level}
            </span>
          ))}
        </div>

        {/* Right side: Vertical Scale */}
        <div className="w-4 bg-slate-100 dark:bg-slate-800/50 rounded-full relative overflow-hidden ring-4 ring-slate-200/20 dark:ring-slate-700/20 shadow-inner">
          {/* Markers */}
          {levels.map((_, i) => (
            <div 
              key={i} 
              className="absolute left-0 right-0 h-[1px] bg-slate-200 dark:bg-slate-700 z-10"
              style={{ top: `${(i / (levels.length - 1)) * 100}%` }}
            ></div>
          ))}
          
          {/* Fill Animation */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 rounded-full"
            style={{ 
                background: `linear-gradient(to top, ${language.color}, ${language.color}dd)`,
                boxShadow: `0 0 20px ${language.color}44`
            }}
            initial={{ height: 0 }}
            whileInView={{ height: `${percentage}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5 + index * 0.1, ease: "easeOut" }}
          >
            {/* Glossy overlay on fill */}
            <div className="absolute inset-x-0 top-0 h-full bg-gradient-to-r from-white/20 to-transparent"></div>
          </motion.div>
        </div>
      </div>

      <p className="mt-6 text-sm font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/50 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700 z-10">
        {language.currentLevel}
      </p>

      {/* Background decoration */}
      <div 
        className="absolute -bottom-10 -right-10 w-32 h-32 blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
        style={{ backgroundColor: language.color }}
      ></div>
    </motion.div>
  );
};

const LanguageProficiency = () => {
  return (
    <section id="languages" className="py-24 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
            <span className="text-emerald-500">03.</span> Language Proficiency
          </h2>
          <div className="h-[1px] bg-slate-200 dark:bg-slate-700 flex-1 max-w-xs"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {languages.map((lang, index) => (
            <VerticalScale key={lang.name} language={lang} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default LanguageProficiency;
