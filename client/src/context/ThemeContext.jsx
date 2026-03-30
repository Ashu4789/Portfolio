import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme) return savedTheme;
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
    return 'light';
  });

  const [primaryColor, setPrimaryColor] = useState(() => {
    const savedColor = localStorage.getItem('portfolio-color');
    return savedColor || '#10b981'; // Default: emerald-500
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

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const changePrimaryColor = (color) => {
    setPrimaryColor(color);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, primaryColor, changePrimaryColor }}>
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
