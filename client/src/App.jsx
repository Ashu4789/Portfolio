import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import PulleyScroll from './components/PulleyScroll';
import SettingsPanel from './components/SettingsPanel';
import Chatbot from './components/Chatbot';
import PerformanceHUD from './components/PerformanceHUD';
import TerminalOverlay from './components/TerminalOverlay';
import { useTheme } from './context/ThemeContext';

import Home from './pages/Home';
import Blog from './pages/Blog';
import ResumeView from './pages/ResumeView';
import ProjectDetails from './pages/ProjectDetails';
import { useKonamiCode } from './hooks/useKonamiCode';

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/resume" element={<ResumeView />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  useKonamiCode();
  const { toggleTerminal } = useTheme();

  // Keyboard listeners for shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Toggle Terminal with Backtick (`)
      if (e.key === '`') {
        e.preventDefault();
        toggleTerminal();
      }
      
      // ALT+T shortcut as well
      if (e.altKey && e.key === 't') {
        e.preventDefault();
        toggleTerminal();
      }

      // Close on Escape
      if (e.key === 'Escape') {
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('terminal') === 'true') {
           // This will be handled inside Terminal component
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [toggleTerminal]);

  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen relative w-full overflow-x-hidden font-inter text-slate-800 dark:text-slate-200 transition-colors duration-300">
          <CustomCursor />
          <SettingsPanel />
          <Chatbot />
          <PulleyScroll />
          <PerformanceHUD />
          <TerminalOverlay />
          
          {/* Background elements */}
          <div className="fixed inset-0 z-[-1] bg-slate-50 dark:bg-slate-950 overflow-hidden transition-colors duration-300">
            {/* Stock background image */}
            <img 
              src="https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2094&auto=format&fit=crop" 
              alt="Portfolio Background" 
              className="absolute inset-0 w-full h-full object-cover opacity-100 select-none pointer-events-none" 
            />
            {/* Light overlay for contrast */}
            <div className="absolute inset-0 bg-white/90 dark:bg-slate-950/60 transition-colors duration-300"></div>
            {/* Radial vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#f1f5f9_120%)] dark:bg-[radial-gradient(circle_at_center,transparent_0%,#020617_120%)] pointer-events-none transition-colors duration-300"></div>

            <div className="absolute top-0 -left-40 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 pointer-events-none"></div>
            <div className="absolute top-0 -right-40 w-96 h-96 bg-blue-900 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 pointer-events-none"></div>
            <div className="absolute -bottom-40 left-20 w-96 h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-10 pointer-events-none"></div>
            
            {/* Grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none"></div>
          </div>

          <Navbar />

          <AnimatedRoutes />
          
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
