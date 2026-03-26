import React from 'react';
import { motion } from 'framer-motion';
import { SiC, SiCplusplus, SiJavascript, SiPhp, SiPython, SiReact, SiNodedotjs, SiExpress, SiTailwindcss, SiMysql, SiPostgresql, SiMongodb, SiGit, SiDocker } from 'react-icons/si';
import { FaJava, FaLinux, FaTools, FaBrain, FaUsers, FaHandshake } from 'react-icons/fa';

const skillsData = [
  { category: "Languages", items: [
      { name: "C", icon: <SiC /> }, 
      { name: "C++", icon: <SiCplusplus /> }, 
      { name: "Java", icon: <FaJava /> }, 
      { name: "JavaScript", icon: <SiJavascript /> }, 
      { name: "PHP", icon: <SiPhp /> }, 
      { name: "Python", icon: <SiPython /> }
    ] 
  },
  { category: "Frameworks", items: [
      { name: "ReactJS", icon: <SiReact /> }, 
      { name: "NodeJS", icon: <SiNodedotjs /> }, 
      { name: "ExpressJS", icon: <SiExpress /> }, 
      { name: "Tailwind CSS", icon: <SiTailwindcss /> }
    ] 
  },
  { category: "Tools", items: [
      { name: "MySQL", icon: <SiMysql /> }, 
      { name: "PostgreSQL", icon: <SiPostgresql /> }, 
      { name: "MongoDB", icon: <SiMongodb /> }, 
      { name: "Git", icon: <SiGit /> }, 
      { name: "Docker", icon: <SiDocker /> }, 
      { name: "Linux", icon: <FaLinux /> }, 
      { name: "CI/CD", icon: <FaTools /> }
    ] 
  },
  { category: "Soft Skills", items: [
      { name: "Problem-solving", icon: <FaBrain /> }, 
      { name: "Leadership", icon: <FaUsers /> }, 
      { name: "Team Collaboration", icon: <FaHandshake /> }
    ] 
  }
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
              className="glass-card p-6 border-t-4 border-t-emerald-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(16,185,129,0.15)] hover:border-emerald-500/50 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Subtle radial glow on hover */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <h3 className="text-xl font-orbitron font-bold text-slate-900 dark:text-slate-200 mb-6 text-center relative z-10">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {skillGroup.items.map((skill, idx) => (
                  <span key={idx} className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full text-sm font-medium shadow-sm border border-emerald-200 dark:border-emerald-500/30 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-600 dark:hover:text-white hover:shadow-[0_0_15px_rgba(16,185,129,0.4)] hover:-translate-y-1 hover:scale-110 transition-all duration-300 cursor-default relative z-10 group/pill">
                    <span className="group-hover/pill:animate-bounce-short">{skill.icon}</span>
                    {skill.name}
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
