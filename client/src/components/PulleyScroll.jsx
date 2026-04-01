import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, useTransform, useVelocity } from 'framer-motion';

const PulleyScroll = () => {
  const { scrollYProgress } = useScroll();
  
  // Spring config for smooth, physical movement
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const smoothProgress = useSpring(scrollYProgress, springConfig);
  const scrollVelocity = useVelocity(scrollYProgress);

  // Transform progress to positions and rotations
  const weightY = useTransform(smoothProgress, [0, 1], [10, 80]); // Percentage of height
  const pulleyRotation = useTransform(smoothProgress, [0, 1], [0, 1080]); // Spins 3 times
  
  // Calculate "effort" based on velocity
  const effort = useTransform(scrollVelocity, [-1, 1], [0.8, 1.2]); // 1 is neutral
  const boyScaleX = useTransform(effort, (e) => -e); // Mirrored scaleX

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Convert percentage to 0-100 string
  const [percent, setPercent] = useState(0);
  useEffect(() => {
    return smoothProgress.onChange((v) => setPercent(Math.round(v * 100)));
  }, [smoothProgress]);

  return (
    <div className="fixed top-0 right-4 h-screen w-16 z-[500] pointer-events-none hidden md:flex flex-col items-center py-12">
      {/* Scrollable Container for SVG elements */}
      <svg
        viewBox="0 0 100 800"
        className="h-full w-full drop-shadow-lg"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Pulley at the top */}
        <motion.g 
          style={{ rotate: pulleyRotation }} 
          className="origin-[50px_40px]"
        >
          {/* Wheel outer */}
          <circle cx="50" cy="40" r="30" className="fill-slate-200 dark:fill-slate-800 stroke-emerald-500 stroke-2" />
          {/* Spokes */}
          {[0, 45, 90, 135].map((angle) => (
            <line
              key={angle}
              x1="50" y1="10" x2="50" y2="70"
              transform={`rotate(${angle} 50 40)`}
              className="stroke-emerald-500/50 stroke-1"
            />
          ))}
          <circle cx="50" cy="40" r="5" className="fill-emerald-500" />
        </motion.g>

        {/* Rope passing over pulley */}
        <motion.path
          d={useTransform(
            weightY,
            (y) => `M 20,750 L 20,40 Q 20,10 50,10 T 80,40 L 80,${y * 8}`
          )}
          fill="none"
          className="stroke-slate-400 dark:stroke-slate-600 stroke-[4px]"
          style={{ 
            strokeDasharray: "10, 15", 
            strokeDashoffset: useTransform(smoothProgress, [0, 1], [0, -800]) 
          }}
        />

        {/* Weight showing percentage */}
        <motion.g
          style={{ 
            x: 60,
            y: useTransform(weightY, (y) => y * 8)
          }}
          className="cursor-pointer pointer-events-auto"
          onClick={handleScrollToTop}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Iron Weight Shape (Industrial look) */}
          <path 
            d="M 5,35 L 35,35 L 32,5 L 8,5 Z" 
            className="fill-slate-700 dark:fill-slate-900 stroke-slate-500 stroke-2" 
          />
          {/* Handle/Ring */}
          <circle cx="20" cy="0" r="6" fill="none" className="stroke-slate-500 stroke-2" />
          <rect x="18" y="-2" width="4" height="7" className="fill-slate-500" />
          
          {/* Progress text */}
          <text
            x="20"
            y="25"
            textAnchor="middle"
            className="fill-emerald-400 font-bold text-[12px] select-none pointer-events-none drop-shadow-md"
          >
            {percent}%
          </text>
          {/* Label */}
          <text
            x="20"
            y="13"
            textAnchor="middle"
            className="fill-slate-400 text-[6px] uppercase tracking-wider"
          >
            Load
          </text>
        </motion.g>

        {/* Boy Character at the bottom (aligned to left side of pulley x=20) */}
        <motion.g 
          style={{ x: 20, y: 710, scaleX: boyScaleX, scaleY: effort }}
          className="origin-bottom"
        >
          {/* Legs & Shoes */}
          <path d="M 12,55 L 8,75 L 2,75" fill="none" className="stroke-slate-800 dark:stroke-slate-400 stroke-4" />
          <path d="M 22,55 L 26,75 L 32,75" fill="none" className="stroke-slate-800 dark:stroke-slate-400 stroke-4" />
          
          {/* Body (Shirt) */}
          <path d="M 10,25 L 24,25 L 28,55 L 6,55 Z" className="fill-emerald-500" />
          
          {/* Arms pulling rope */}
          <motion.path
            d={useTransform(
              smoothProgress,
              (p) => {
                const pull = Math.sin(p * 50) * 8;
                return `M 24,35 Q ${55 + pull},${30 + pull} 65,35`;
              }
            )}
            fill="none"
            className="stroke-emerald-200 stroke-4"
            strokeLinecap="round"
          />
          <motion.path
            d={useTransform(
              smoothProgress,
              (p) => {
                const pull = Math.sin(p * 50 + 2) * 8;
                return `M 24,45 Q ${55 + pull},${40 + pull} 65,45`;
              }
            )}
            fill="none"
            className="stroke-emerald-200 stroke-4"
            strokeLinecap="round"
          />

          {/* Head & Features */}
          <circle cx="17" cy="12" r="10" className="fill-emerald-200" />
          {/* Cap */}
          <path d="M 7,12 Q 17,2 27,12 L 32,14 L 32,16 L 17,16 Z" className="fill-slate-800 dark:fill-slate-600" />
          {/* Eyes */}
          <circle cx="21" cy="12" r="1.5" className="fill-slate-900" />
          {/* Smile */}
          <path d="M 18,17 Q 21,20 24,17" fill="none" className="stroke-slate-900 stroke-1" />
        </motion.g>
      </svg>
    </div>
  );
};

export default PulleyScroll;
