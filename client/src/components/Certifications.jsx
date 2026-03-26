import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const certsData = [
  { title: "Data Structures and Algorithms with C++", issuer: "CipherSchools", date: "July 2025", description: "Completion of a 70-hour structured training program in DSA with exposure to real-world implementation.", credentialLink: "https://drive.google.com/file/d/1ts0lpKw_vv4KAaV0njjHbIxNAXxm3V02/view", bgImage: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop" },
  { title: "Cloud Computing", issuer: "NPTEL", date: "April 2025", description: "Comprehensive study of cloud architecture, virtualization, and deployment models.", credentialLink: "https://drive.google.com/file/d/1Gfj7pz4Bw_aYDxuuwoIk6qJAyRv8Ymof/view", bgImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" },
  { title: "Logic Building, Programming and DSA", issuer: "LPU CPE", date: "July 2024", description: "Intensive training focusing on programmatic logic and foundational data structures.", credentialLink: "https://drive.google.com/file/d/1oJSO19d6ge0FTPUEzAFiNKyttkuavnlU/view", bgImage: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=2128&auto=format&fit=crop" },
  { title: "Unrevealing Basic Python Towards ML/AI", issuer: "CSEPATHSHALA", date: "March 2024", description: "Foundational Python skills tailored towards machine learning and artificial intelligence.", credentialLink: "https://drive.google.com/file/d/112XtdnHVolCjB4yJa7OxGFCwQUwl2ZRc/view", bgImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop" }
];

const CertCard = ({ cert, index }) => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      className="glass-card p-8 flex flex-col items-center justify-center text-center group min-h-[350px] overflow-hidden relative hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(16,185,129,0.15)] transition-all duration-500 border border-transparent hover:border-emerald-500/50"
    >
      <div 
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(16,185,129,0.15), transparent 40%)`
        }}
      />
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
         <div className="absolute inset-0 bg-white/80 dark:bg-slate-950/80 group-hover:bg-white/60 dark:group-hover:bg-slate-950/60 transition-colors duration-500 z-10 pointer-events-none"></div>
         <img src={cert.bgImage} alt="" className="w-full h-full object-cover opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700" />
      </div>

      <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-125 group-hover:-translate-y-2 group-hover:bg-emerald-500/20 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all duration-500 relative z-20 border border-emerald-500/30 group-hover:border-emerald-500/60">
        <Award className="text-emerald-500 w-8 h-8" />
      </div>
      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors relative z-20">{cert.title}</h3>
      <p className="text-emerald-600 dark:text-emerald-400 text-sm font-semibold mb-2 relative z-20 transition-colors">{cert.issuer}</p>
      <span className="text-xs font-mono text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-1 rounded inline-block mb-4 relative z-20 transition-colors">{cert.date}</span>
      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 relative z-20 flex-1 transition-colors">{cert.description}</p>
      {cert.credentialLink && (
        <a href={cert.credentialLink} target="_blank" rel="noopener noreferrer" className="mt-auto flex items-center gap-2 text-xs font-bold text-white bg-emerald-500 hover:bg-emerald-400 hover:scale-105 hover:shadow-[0_0_15px_rgba(16,185,129,0.4)] py-2 px-5 rounded-full transition-all duration-300 relative z-20">
          View Credential <ExternalLink className="w-3 h-3" />
        </a>
      )}
    </motion.div>
  );
};

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white"><span className="text-emerald-500">05.</span> Certifications</h2>
        <div className="h-[1px] bg-slate-200 dark:bg-slate-700 flex-1 max-w-xs transition-colors"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {certsData.map((cert, index) => (
          <CertCard key={index} cert={cert} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Certifications;
