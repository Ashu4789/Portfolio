import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2 } from 'lucide-react';

const TerminalOverlay = () => {
  const { showTerminal, toggleTerminal, primaryColor } = useTheme();
  const [history, setHistory] = useState([
    { type: 'info', content: 'Ashutosh OS v1.0.0 (Kernel 2023.27)' },
    { type: 'info', content: 'Copyright (c) 2026 Ashutosh Mohanty. All rights reserved.' },
    { type: 'info', content: 'Type "help" for a list of available commands.' },
    { type: 'info', content: '' },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isMaximized, setIsMaximized] = useState(false);
  const scrollRef = useRef();
  const inputRef = useRef();

  useEffect(() => {
    if (showTerminal && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showTerminal]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd) => {
    const cleanCmd = cmd.toLowerCase().trim();
    const newHistory = [...history, { type: 'command', content: `guest@ashutosho-portfolio:~$ ${cmd}` }];

    switch (cleanCmd) {
      case 'help':
        newHistory.push({ type: 'info', content: 'Available commands:' });
        newHistory.push({ type: 'info', content: '  whoami    - Display developer identity' });
        newHistory.push({ type: 'info', content: '  ls        - List project directories' });
        newHistory.push({ type: 'info', content: '  skills    - View technical skill matrix' });
        newHistory.push({ type: 'info', content: '  clear     - Clear the terminal screen' });
        newHistory.push({ type: 'info', content: '  exit      - Terminate secure session' });
        newHistory.push({ type: 'info', content: '  theme     - Toggle light/dark interface' });
        break;
      case 'whoami':
        newHistory.push({ type: 'info', content: 'User: Ashutosh Mohanty' });
        newHistory.push({ type: 'info', content: 'Role: Full-Stack Developer | CSE Student @ LPU' });
        newHistory.push({ type: 'info', content: 'Status: Actively building innovative web solutions' });
        break;
      case 'ls':
      case 'ls projects':
        newHistory.push({ type: 'info', content: 'drwxr-xr-x  Ocean_Cleanup_UI' });
        newHistory.push({ type: 'info', content: 'drwxr-xr-x  Lake_Booking_Service' });
        newHistory.push({ type: 'info', content: 'drwxr-xr-x  Portfolio_V4' });
        newHistory.push({ type: 'info', content: 'drwxr-xr-x  ATS_Analyzer_Bot' });
        break;
      case 'skills':
        newHistory.push({ type: 'info', content: '{' });
        newHistory.push({ type: 'info', content: '  "frontend": ["React", "Tailwind", "Framer Motion"],' });
        newHistory.push({ type: 'info', content: '  "backend": ["Node.js", "Express", "PHP", "Python"],' });
        newHistory.push({ type: 'info', content: '  "database": ["MongoDB", "PostgreSQL", "MySQL"]' });
        newHistory.push({ type: 'info', content: '}' });
        break;
      case 'clear':
        setHistory([]);
        return;
      case 'exit':
        toggleTerminal();
        return;
      case 'theme':
        newHistory.push({ type: 'info', content: 'Theme adjustment detected. Synchronization successful.' });
        // We could trigger toggleTheme() here if we want to be fancy
        break;
      default:
        if (cleanCmd !== '') {
          newHistory.push({ type: 'error', content: `Command not found: ${cleanCmd}. Type "help" for a list of commands.` });
        }
    }

    setHistory(newHistory);
    setInputValue('');
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(inputValue);
    }
    if (e.key === 'Escape') {
      toggleTerminal();
    }
  };

  return (
    <AnimatePresence>
      {showTerminal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[600] flex items-center justify-center p-4 md:p-12 pointer-events-none"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm pointer-events-auto" onClick={toggleTerminal}></div>

          {/* Terminal Window */}
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className={`relative flex flex-col bg-slate-900 border border-emerald-500/30 rounded-xl shadow-[0_0_50px_rgba(16,185,129,0.2)] pointer-events-auto overflow-hidden transition-all duration-300 ${isMaximized ? 'w-full h-full' : 'w-full max-w-4xl h-[600px]'}`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Title Bar */}
            <div className="flex justify-between items-center bg-slate-800/50 px-4 py-2 border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer" onClick={toggleTerminal}></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-xs font-mono ml-4">
                  <TerminalIcon className="w-3.5 h-3.5" />
                  ashutosh-portfolio — guest@portfolio:~
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button 
                  onClick={() => setIsMaximized(!isMaximized)}
                  className="p-1.5 hover:bg-white/10 rounded-md transition-colors text-slate-400"
                >
                  {isMaximized ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                </button>
                <button 
                  onClick={toggleTerminal}
                  className="p-1.5 hover:bg-red-500/20 hover:text-red-400 rounded-md transition-colors text-slate-400"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Terminal Body */}
            <div 
              ref={scrollRef}
              className="flex-1 p-6 overflow-y-auto font-mono text-sm space-y-2 custom-scrollbar"
            >
              {history.map((line, idx) => (
                <div 
                  key={idx} 
                  className={`${line.type === 'error' ? 'text-red-400' : line.type === 'command' ? 'text-white' : 'text-emerald-500/80'}`}
                >
                  {line.content}
                </div>
              ))}
              
              <div className="flex gap-2 text-white">
                <span className="text-emerald-500">guest@ashutosh-portfolio:~$</span>
                <input
                  ref={inputRef}
                  autoFocus
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={onKeyDown}
                  className="flex-1 bg-transparent border-none outline-none caret-emerald-500 text-white"
                  spellCheck={false}
                />
              </div>
            </div>

            {/* Bottom Info Bar */}
            <div className="bg-emerald-500/5 px-4 py-1.5 border-t border-white/5 flex justify-between text-[10px] font-mono text-slate-500 uppercase tracking-widest">
              <span>Secure Shell: AES-256</span>
              <span>LPU_CSE_2023_2027</span>
              <span>UTF-8</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TerminalOverlay;
