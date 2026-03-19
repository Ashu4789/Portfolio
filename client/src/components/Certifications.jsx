import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const certsData = [
  { title: "Cloud Computing", issuer: "NPTEL", date: "2023" },
  { title: "DSA with C++", issuer: "CipherSchools", date: "2023" },
  { title: "Python for ML/AI", issuer: "CSEPathshala", date: "2024" },
  { title: "Logic Building", issuer: "LPU", date: "2023" }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-4xl font-bold text-white"><span className="text-emerald-500">05.</span> Certifications</h2>
        <div className="h-[1px] bg-slate-700 flex-1 max-w-xs"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {certsData.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="glass-card p-6 flex flex-col items-center justify-center text-center group"
          >
            <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Award className="text-emerald-400 w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">{cert.title}</h3>
            <p className="text-emerald-400 text-sm font-medium mb-1">{cert.issuer}</p>
            <p className="text-slate-500 text-xs">{cert.date}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
