import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Code, Star, ExternalLink } from 'lucide-react';

const achievementsData = [
  { icon: <Star className="w-8 h-8 text-purple-400" />, count: "Govt.", text: "Odisha Recognition", date: "June 2025", description: "Represented the planning and convergence department of Odisha government in SDG IEC kiosk held at LPU.", credentialLink: "https://drive.google.com/file/d/1yJGnQGRYrFe1ED2EB2_okztTh3AaetTJ/view" },
  { icon: <Trophy className="w-8 h-8 text-yellow-400" />, count: "1st", text: "Zerodha Varsity Quiz", date: "January 2025", description: "Secured 1st position and received cash prize in university level Zerodha Varsity Quiz.", credentialLink: "https://drive.google.com/file/d/1XH_3VKbi_nYO91AAcSBKvHk2hqygz65o/view" },
  { icon: <Code className="w-8 h-8 text-blue-400" />, count: "200+", text: "DSA Problems Solved", date: "December 2025", description: "Solved 100+ problems on LeetCode with 200+ submissions and 50+ on other platforms.", credentialLink: "https://leetcode.com/u/Ashutosh4789/" }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 relative">
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-4xl font-bold text-white"><span className="text-emerald-500">06.</span> Achievements</h2>
        <div className="h-[1px] bg-slate-700 flex-1 max-w-xs"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {achievementsData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="glass-card p-8 flex flex-col items-center justify-center text-center relative overflow-hidden group hover:-translate-y-2 transition-transform"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full filter blur-[20px] group-hover:bg-emerald-500/10 transition-colors duration-500"></div>
            
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-4xl font-orbitron font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">{item.count}</h3>
            <p className="text-emerald-400 font-medium mb-1">{item.text}</p>
            <span className="text-xs font-mono text-slate-500 bg-slate-800/50 px-2 py-1 rounded inline-block mb-3">{item.date}</span>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">{item.description}</p>
            {item.credentialLink && (
              <a href={item.credentialLink} target="_blank" rel="noopener noreferrer" className="mt-auto flex items-center gap-2 text-xs font-bold text-emerald-500 hover:text-emerald-400 transition-colors relative z-10">
                View Credential <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
