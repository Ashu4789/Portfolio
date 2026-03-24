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
              className="glass-card p-6 border-t-4 border-t-emerald-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(16,185,129,0.2)] transition-all duration-300"
            >
              <h3 className="text-xl font-orbitron font-bold text-slate-900 dark:text-slate-200 mb-6 text-center">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {skillGroup.items.map((skill, idx) => (
                  <span key={idx} className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full text-sm font-medium shadow-sm border border-emerald-200 dark:border-emerald-500/30 hover:bg-emerald-100 dark:hover:bg-emerald-800/50 hover:scale-105 transition-all cursor-default">
                    {skill.icon}
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
