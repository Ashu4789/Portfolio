import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme) return savedTheme;
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
    return 'dark'; // Default to dark for premium feel
  });

  const [primaryColor, setPrimaryColor] = useState(() => {
    const savedColor = localStorage.getItem('portfolio-color');
    return savedColor || '#10b981'; // Default: emerald-500
  });

  // UI state for Terminal and HUD
  const [showTerminal, setShowTerminal] = useState(false);
  const [showPerformanceHUD, setShowPerformanceHUD] = useState(() => {
    return localStorage.getItem('portfolio-hud') === 'true';
  });

  useEffect(() => {
    localStorage.setItem('portfolio-theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('portfolio-color', primaryColor);
    document.documentElement.style.setProperty('--color-primary', primaryColor);
  }, [primaryColor]);

  useEffect(() => {
    localStorage.setItem('portfolio-hud', showPerformanceHUD);
  }, [showPerformanceHUD]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const changePrimaryColor = (color) => {
    setPrimaryColor(color);
  };

  const toggleTerminal = () => setShowTerminal(prev => !prev);
  const togglePerformanceHUD = () => setShowPerformanceHUD(prev => !prev);

  return (
    <ThemeContext.Provider value={{ 
      theme, toggleTheme, 
      primaryColor, changePrimaryColor,
      showTerminal, toggleTerminal, setShowTerminal,
      showPerformanceHUD, togglePerformanceHUD
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
