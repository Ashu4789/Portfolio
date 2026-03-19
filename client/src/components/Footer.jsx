import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 text-center border-t border-white/10 mt-12">
      <p className="text-slate-500 text-sm">
        Designed & Built by <span className="text-emerald-400 font-medium">Ashutosh Mohanty</span>
      </p>
      <p className="text-slate-600 text-xs mt-2">
        &copy; {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
