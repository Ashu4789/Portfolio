import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Code, Star, ExternalLink } from 'lucide-react';

const achievementsData = [
  { icon: <Star className="w-8 h-8 text-purple-400" />, count: "Govt.", text: "Odisha Recognition", date: "June 2025", description: "Represented the planning and convergence department of Odisha government in SDG IEC kiosk held at LPU.", credentialLink: "https://drive.google.com/file/d/1yJGnQGRYrFe1ED2EB2_okztTh3AaetTJ/view", bgImage: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=2070&auto=format&fit=crop" },
  { icon: <Trophy className="w-8 h-8 text-yellow-400" />, count: "1st", text: "Zerodha Varsity Quiz", date: "January 2025", description: "Secured 1st position and received cash prize in university level Zerodha Varsity Quiz.", credentialLink: "https://drive.google.com/file/d/1XH_3VKbi_nYO91AAcSBKvHk2hqygz65o/view", bgImage: "https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?q=80&w=2070&auto=format&fit=crop" },
  { icon: <Code className="w-8 h-8 text-blue-400" />, count: "200+", text: "DSA Problems Solved", date: "December 2025", description: "Solved 100+ problems on LeetCode with 200+ submissions and 50+ on other platforms.", credentialLink: "https://leetcode.com/u/Ashutosh4789/", bgImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop" }
];

const AchievementCard = ({ item, index }) => {
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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      onMouseMove={handleMouseMove}
      className="glass-card p-10 flex flex-col items-center justify-center text-center relative overflow-hidden group hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(16,185,129,0.15)] transition-all duration-500 min-h-[400px] border border-transparent hover:border-emerald-500/50"
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
         <img src={item.bgImage} alt="" className="w-full h-full object-cover opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-700" />
      </div>
      
      <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full filter blur-[20px] group-hover:bg-emerald-500/20 transition-colors duration-500 z-10"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-500/10 rounded-full filter blur-[40px] transition-colors duration-500 z-10 group-hover:bg-emerald-500/20"></div>
      
      <div className="mb-6 relative z-20 p-4 bg-white/50 dark:bg-slate-900/50 rounded-full border border-slate-200 dark:border-slate-800 backdrop-blur-md group-hover:border-emerald-500/50 group-hover:scale-125 group-hover:-translate-y-2 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all duration-500">{item.icon}</div>
      <h3 className="text-5xl font-orbitron font-bold text-slate-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors relative z-20">{item.count}</h3>
      <p className="text-emerald-600 dark:text-emerald-400 font-semibold mb-2 relative z-20 text-lg transition-colors">{item.text}</p>
      <span className="text-xs font-mono text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-1 rounded inline-block mb-4 relative z-20 transition-colors">{item.date}</span>
      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 relative z-20 flex-1 transition-colors">{item.description}</p>
      {item.credentialLink && (
        <a href={item.credentialLink} target="_blank" rel="noopener noreferrer" className="mt-auto flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 dark:hover:text-emerald-300 transition-colors relative z-20 group-hover:scale-105">
          View Credential <ExternalLink className="w-3 h-3" />
        </a>
      )}
    </motion.div>
  );
};

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 relative">
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white"><span className="text-emerald-500">06.</span> Achievements</h2>
        <div className="h-[1px] bg-slate-200 dark:bg-slate-700 flex-1 max-w-xs transition-colors"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {achievementsData.map((item, index) => (
          <AchievementCard key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Achievements;
