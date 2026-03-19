import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
  {
    degree: "B.Tech CSE",
    institution: "Lovely Professional University (LPU)",
    period: "2023 – 2027",
    details: "CGPA: 8.02. Engaging deeply in data structures, algorithms, and full-stack development."
  },
  {
    degree: "Intermediate",
    institution: "Higher Secondary Board",
    period: "Completed",
    details: "Score: 82.8%. Focused on Mathematics and Computer Science."
  },
  {
    degree: "Matriculation",
    institution: "Standard Board",
    period: "Completed",
    details: "Score: 97.4%. Formed a strong foundation in analytical subjects."
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-4xl font-bold text-white"><span className="text-emerald-500">04.</span> Education</h2>
        <div className="h-[1px] bg-slate-700 flex-1 max-w-xs"></div>
      </div>

      <div className="max-w-3xl mx-auto relative">
        {/* Vertical Line */}
        <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-emerald-500/30 transform md:-translate-x-1/2"></div>
        
        <div className="space-y-12 relative z-10">
          {educationData.map((edu, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`flex flex-col md:flex-row gap-8 md:justify-between items-start md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-[13px] md:left-1/2 w-4 h-4 bg-emerald-500 rounded-full border-4 border-slate-900 transform md:-translate-x-1/2 mt-1 md:mt-0 shadow-[0_0_10px_#10b981]"></div>
              
              <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                <div className="glass-card p-6 inline-block w-full border-l-4 border-l-emerald-500 group">
                  <span className="text-emerald-400 font-mono text-sm block mb-2">{edu.period}</span>
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">{edu.degree}</h3>
                  <h4 className="text-slate-400 font-medium mb-3">{edu.institution}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{edu.details}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
