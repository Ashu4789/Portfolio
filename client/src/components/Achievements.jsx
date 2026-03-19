import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Code, Star } from 'lucide-react';

const achievementsData = [
  { icon: <Code className="w-8 h-8 text-blue-400" />, count: "200+", text: "DSA Problems Solved" },
  { icon: <Trophy className="w-8 h-8 text-yellow-400" />, count: "1st", text: "Zerodha Varsity Quiz" },
  { icon: <Star className="w-8 h-8 text-purple-400" />, count: "Govt.", text: "Odisha Recognition (Vikas Mela)" }
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
            <p className="text-slate-400 font-medium">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
