import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  { category: "Languages", items: ["C", "C++", "Java", "JavaScript", "PHP", "Python"] },
  { category: "Frameworks", items: ["ReactJS", "NodeJS", "ExpressJS", "Tailwind CSS"] },
  { category: "Tools", items: ["MySQL", "PostgreSQL", "MongoDB", "Git", "Docker", "Linux", "CI/CD"] },
  { category: "Soft Skills", items: ["Problem-solving", "Leadership", "Team Collaboration"] }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white"><span className="text-emerald-500">02.</span> My Skills</h2>
          <div className="h-[1px] bg-slate-200 dark:bg-slate-700 flex-1 max-w-xs"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 border-t-4 border-t-emerald-500 hover:-translate-y-2 transition-transform duration-300"
            >
              <h3 className="text-xl font-orbitron font-bold text-slate-900 dark:text-slate-200 mb-6 text-center">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {skillGroup.items.map((skill, idx) => (
                  <span key={idx} className="px-3 py-1 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full text-sm font-medium shadow-sm border border-emerald-200 dark:border-emerald-500/30 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
