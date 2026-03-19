import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const certsData = [
  { title: "Data Structures and Algorithms with C++", issuer: "CipherSchools", date: "July 2025", description: "Completion of a 70-hour structured training program in DSA with exposure to real-world implementation.", credentialLink: "https://drive.google.com/file/d/1ts0lpKw_vv4KAaV0njjHbIxNAXxm3V02/view" },
  { title: "Cloud Computing", issuer: "NPTEL", date: "April 2025", description: "Comprehensive study of cloud architecture, virtualization, and deployment models.", credentialLink: "https://drive.google.com/file/d/1Gfj7pz4Bw_aYDxuuwoIk6qJAyRv8Ymof/view" },
  { title: "Logic Building, Programming and DSA", issuer: "LPU CPE", date: "July 2024", description: "Intensive training focusing on programmatic logic and foundational data structures.", credentialLink: "https://drive.google.com/file/d/1oJSO19d6ge0FTPUEzAFiNKyttkuavnlU/view" },
  { title: "Unrevealing Basic Python Towards ML/AI", issuer: "CSEPATHSHALA", date: "March 2024", description: "Foundational Python skills tailored towards machine learning and artificial intelligence.", credentialLink: "https://drive.google.com/file/d/112XtdnHVolCjB4yJa7OxGFCwQUwl2ZRc/view" }
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
            <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
            <p className="text-emerald-400 text-sm font-medium mb-1">{cert.issuer}</p>
            <span className="text-xs font-mono text-slate-500 bg-slate-800/50 px-2 py-1 rounded inline-block mb-3">{cert.date}</span>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">{cert.description}</p>
            {cert.credentialLink && (
              <a href={cert.credentialLink} target="_blank" rel="noopener noreferrer" className="mt-auto flex items-center gap-2 text-xs font-bold text-emerald-500 hover:text-emerald-400 transition-colors relative z-10">
                View Credential <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
