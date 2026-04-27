import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const canHover = window.matchMedia('(hover: hover)').matches;
    if (canHover) setIsVisible(true);

    const moveMouse = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') || 
        target.closest('.cursor-pointer');

      setIsHovering(isClickable);
    };

    if (canHover) {
      window.addEventListener('mousemove', moveMouse);
      window.addEventListener('mouseover', handleMouseOver);
      document.body.style.cursor = 'none';
    }

    return () => {
      window.removeEventListener('mousemove', moveMouse);
      window.removeEventListener('mouseover', handleMouseOver);
      document.body.style.cursor = 'auto';
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[99999]">
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="relative flex items-center justify-center"
      >
        {/* Rotating Outer Dashed Ring (Tech Aesthetic) */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className={`absolute w-12 h-12 border border-dashed rounded-full transition-colors duration-300 ${isHovering ? 'border-cyan-400/40' : 'border-emerald-500/20'}`}
        />

        {/* Rounded HUD Arcs (Instead of sharp brackets) */}
        <motion.div
          animate={{
            width: isHovering ? 64 : 40,
            height: isHovering ? 64 : 40,
            rotate: isHovering ? 45 : 0,
          }}
          className="relative transition-colors duration-300 flex items-center justify-center"
        >
          {/* Top Left Arc */}
          <div className={`absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 rounded-tl-full transition-all duration-300 ${isHovering ? 'border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.6)]' : 'border-emerald-500/50'}`} />
          {/* Top Right Arc */}
          <div className={`absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 rounded-tr-full transition-all duration-300 ${isHovering ? 'border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.6)]' : 'border-emerald-500/50'}`} />
          {/* Bottom Left Arc */}
          <div className={`absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 rounded-bl-full transition-all duration-300 ${isHovering ? 'border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.6)]' : 'border-emerald-500/50'}`} />
          {/* Bottom Right Arc */}
          <div className={`absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 rounded-br-full transition-all duration-300 ${isHovering ? 'border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.6)]' : 'border-emerald-500/50'}`} />
        </motion.div>

        {/* Central Crosshair */}
        <motion.div
          animate={{
            scale: isHovering ? 1.4 : 1,
            opacity: isHovering ? 1 : 0.3,
          }}
          className="absolute flex items-center justify-center"
        >
          <div className={`w-3 h-[1px] absolute transition-colors duration-300 ${isHovering ? 'bg-cyan-400' : 'bg-emerald-500'}`} />
          <div className={`h-3 w-[1px] absolute transition-colors duration-300 ${isHovering ? 'bg-cyan-400' : 'bg-emerald-500'}`} />
        </motion.div>

        {/* Pulsing Scanning Bar */}
        {isHovering && (
          <motion.div
            animate={{
              top: ['-45%', '45%', '-45%'],
              opacity: [0.2, 0.8, 0.2]
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-12 h-[1.5px] bg-cyan-400/60 blur-[1px]"
          />
        )}

        {/* Precision Core Dot */}
        <motion.div 
          animate={{
            scale: isHovering ? 1.5 : 1,
          }}
          className={`w-1 h-1 rounded-full transition-colors duration-300 ${isHovering ? 'bg-white shadow-[0_0_8px_white]' : 'bg-emerald-400'}`} 
        />
      </motion.div>
    </div>
  );
};

export default CustomCursor;


