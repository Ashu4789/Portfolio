import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
  {
    degree: "Bachelor of Technology – Computer Science and Engineering",
    institution: "Lovely Professional University, Punjab",
    period: "2023 – 2027",
    details: "CGPA: 8.17. Focused on building scalable web applications and mastering data structures and algorithms.",
    image: "https://www.collegebatch.com/static/clg-gallery/lpu-jalandhar-360559.webp"
  },
  {
    degree: "Intermediate (Class XII)",
    institution: "Prabhujee English Medium School, Bhubaneswar",
    period: "2021 – 2023",
    details: "Score: 82.8%. Strong foundation in Physics, Chemistry, and Mathematics.",
    image: "https://images.unsplash.com/photo-1541339907198-e08756ebafe1?q=80&w=2070&auto=format&fit=crop"
  },
  {
    degree: "Matriculation (Class X)",
    institution: "Prabhujee English Medium School, Bhubaneswar",
    period: "2021",
    details: "Score: 97.4%. Consistent academic excellence with a focus on core analytical subjects.",
    image: "https://images.unsplash.com/photo-152305085306e-52627e16db73?q=80&w=2070&auto=format&fit=crop"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white"><span className="text-emerald-500">04.</span> Education</h2>
        <div className="h-[1px] bg-slate-200 dark:bg-slate-700 flex-1 max-w-xs transition-colors"></div>
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
              <div className="absolute left-[13px] md:left-1/2 w-4 h-4 bg-emerald-500 rounded-full border-4 border-slate-50 dark:border-slate-950 transform md:-translate-x-1/2 mt-1 md:mt-0 shadow-[0_0_10px_#10b981] transition-colors"></div>
              
              <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                <div className="glass-card p-6 inline-block w-full border-l-4 border-l-emerald-500 group overflow-hidden relative">
                  {edu.image && (
                    <div className="w-full h-48 mb-6 rounded-lg overflow-hidden relative">
                      <div className="absolute inset-0 bg-emerald-100/30 dark:bg-slate-900/60 group-hover:bg-transparent dark:group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                      <img src={edu.image} alt={edu.institution} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                    </div>
                  )}
                  <span className="text-emerald-600 dark:text-emerald-400 font-mono text-sm block mb-2">{edu.period}</span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">{edu.degree}</h3>
                  <h4 className="text-slate-700 dark:text-slate-300 font-medium mb-3 transition-colors">{edu.institution}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed transition-colors">{edu.details}</p>
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
