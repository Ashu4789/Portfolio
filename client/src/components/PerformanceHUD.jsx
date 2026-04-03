import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useVelocity, useSpring, useTransform } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Activity, Zap, MousePointer2, Cpu } from 'lucide-react';

const PerformanceHUD = () => {
  const { showPerformanceHUD, primaryColor } = useTheme();
  const [fps, setFps] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const [loadTime, setLoadTime] = useState(0);
  
  const { scrollYProgress } = useScroll();
  const scrollVelocity = useVelocity(scrollYProgress);
  const smoothVelocity = useSpring(scrollVelocity, { stiffness: 100, damping: 30 });

  // FPS Tracking
  const frameCount = useRef(0);
  const lastTime = useRef(performance.now());
  const requestRef = useRef();

  useEffect(() => {
    if (!showPerformanceHUD) return;

    const animate = (time) => {
      frameCount.current++;
      if (time - lastTime.current >= 1000) {
        setFps(frameCount.current);
        frameCount.current = 0;
        lastTime.current = time;
      }
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [showPerformanceHUD]);

  // Velocity Tracking
  useEffect(() => {
    return smoothVelocity.onChange((v) => setVelocity(Math.abs(Math.round(v * 1000))));
  }, [smoothVelocity]);

  // Load time tracking
  useEffect(() => {
    if (window.performance) {
      const timing = window.performance.timing;
      const load = timing.loadEventEnd - timing.navigationStart;
      if (load > 0) setLoadTime(load);
    }
  }, []);

  if (!showPerformanceHUD) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="fixed bottom-6 left-6 z-[400] pointer-events-none select-none"
    >
      <div className="glass-card p-4 border border-emerald-500/20 bg-slate-900/40 backdrop-blur-md rounded-xl flex flex-col gap-3 min-w-[180px] shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-1">
          <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400 flex items-center gap-2">
            <Activity className="w-3 h-3 text-emerald-500" /> System Diagnostics
          </span>
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* FPS */}
          <div className="flex flex-col">
            <span className="text-[9px] text-slate-500 flex items-center gap-1 uppercase">
              <Zap className="w-2.5 h-2.5" /> Stability
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-lg font-mono font-bold text-white">{fps}</span>
              <span className="text-[9px] text-slate-400">FPS</span>
            </div>
          </div>

          {/* Velocity */}
          <div className="flex flex-col">
            <span className="text-[9px] text-slate-500 flex items-center gap-1 uppercase">
              <MousePointer2 className="w-2.5 h-2.5" /> Velocity
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-lg font-mono font-bold text-white">{velocity}</span>
              <span className="text-[9px] text-slate-400">PX/S</span>
            </div>
          </div>
        </div>

        {/* Status Bar */}
        <div className="space-y-1.5 mt-1">
          <div className="flex justify-between text-[9px] text-slate-500">
            <span>CORE LOAD</span>
            <span>{Math.min(100, Math.round((fps / 60) * 100))}%</span>
          </div>
          <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-emerald-500"
              animate={{ width: `${Math.min(100, Math.round((fps / 60) * 100))}%` }}
              transition={{ type: 'spring', stiffness: 50 }}
            />
          </div>
        </div>

        <div className="flex items-center gap-2 pt-1">
          <Cpu className="w-3 h-3 text-emerald-500/50" />
          <span className="text-[9px] font-mono text-slate-500">
            LOAD: {loadTime > 0 ? `${loadTime}ms` : 'OPTIMIZING...'}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default PerformanceHUD;
