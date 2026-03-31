import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 py-4 px-6 md:px-12 flex justify-between items-center transition-all duration-300 ${scrolled ? 'glass shadow-lg border-b border-slate-200 dark:border-white/10' : 'bg-transparent'}`}>
      <Link to="/" className="text-2xl font-orbitron font-bold text-emerald-600 text-glow cursor-pointer" onClick={() => window.scrollTo(0,0)}>
        AM<span className="text-slate-900 dark:text-slate-100">.</span>
      </Link>
      <div className="hidden md:flex flex-1 justify-center space-x-8">
        {navItems.map((item) => (
          <Link 
            key={item.name} 
            to={item.path} 
            className={`text-sm uppercase tracking-widest transition-colors font-medium
              ${location.pathname === item.path ? 'text-emerald-600 font-bold dark:text-emerald-400' : 'text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400'}
            `}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <Link to="/resume" className="hidden sm:inline-block px-5 py-2 glass rounded-full text-emerald-600 hover:bg-emerald-500 hover:text-white dark:hover:text-slate-900 transition-all font-semibold text-sm tracking-wide">
          Resume
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
