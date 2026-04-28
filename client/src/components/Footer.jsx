import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 text-center border-t border-slate-200 dark:border-slate-800 mt-12 transition-colors duration-300">
      <p className="text-slate-600 dark:text-slate-400 text-sm transition-colors">
        Designed & Developed by <span className="text-emerald-600 dark:text-emerald-400 font-medium transition-colors">Ashutosh Mohanty</span>
      </p>
      <p className="text-slate-500 dark:text-slate-500 text-xs mt-2 transition-colors">
        &copy; {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
