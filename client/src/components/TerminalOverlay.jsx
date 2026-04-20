import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, ChevronRight, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const CV_DATA = {
  name: "Ashutosh Mohanty",
  location: "Punjab, India",
  email: "ashutoshmohanty2004@gmail.com",
  phone: "+91 9348825087",
  socials: {
    github: "github.com/Ashu4789",
    linkedin: "linkedin.com/in/ashutoshmohanty24"
  },
  summary: "Computer Science undergraduate and Full Stack Developer with hands-on experience building scalable web applications using React, Node.js, Express, and modern databases.",
  skills: {
    languages: ["C", "C++", "JavaScript", "Python", "Java", "PHP"],
    frontend: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Responsive UI/UX Design"],
    backend: ["Node.js", "Express.js", "REST API Development", "Server-side Architecture"],
    databases: ["MongoDB", "MySQL", "PostgreSQL"],
    tools: ["Git & GitHub", "Docker", "Linux", "AWS EC2", "Vercel"]
  },
  education: [
    { school: "Lovely Professional University", degree: "B.Tech CSE", period: "2023 - 2027", score: "CGPA: 8.17" },
    { school: "Prabhujee English Medium School", degree: "Class XII", period: "2021 - 2023", score: "82.8%" },
    { school: "Prabhujee English Medium School", degree: "Class X", period: "2019 - 2021", score: "97.4%" }
  ],
  achievements: [
    "Solved 200+ Data Structures and Algorithms Problems (LeetCode & others)",
    "1st Position — Zerodha Varsity Quiz (University Level)",
    "Felicitated at Vikas Mela 2025 — Government of Odisha"
  ],
  projects: [
    { name: "NationalAccounts", tech: "React, Node, MongoDB", desc: "Data analytics dashboard for macroeconomic datasets." },
    { name: "TourGuide", tech: "PHP, MySQL, JS", desc: "Travel agency management platform." },
    { name: "TravelBot", tech: "JS, Gemini API", desc: "AI-powered travel planning chatbot." },
    { name: "ArchitecturePortfolio", tech: "MERN Stack", desc: "Full stack architecture firm platform." },
    { name: "BubbleBot", tech: "React, Node", desc: "Modern robotics project website." },
    { name: "IPCDebugger", tech: "Python, Tkinter", desc: "Visual debugging tool for OS IPC mechanisms." }
  ]
};

const TerminalOverlay = () => {
  const { showTerminal, toggleTerminal, primaryColor } = useTheme();
  const [history, setHistory] = useState([
    { type: 'info', content: 'Ashutosh OS [Version 1.2.4]' },
    { type: 'info', content: '(c) Ashutosh Mohanty. All rights reserved.' },
    { type: 'info', content: 'System initialized. Type "help" to begin exploration.' },
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

  const commands = useMemo(() => ({
    help: () => {
      return [
        { type: 'info', content: 'AVAILABLE COMMANDS:' },
        { type: 'info', content: '  whoami       - Display developer bio' },
        { type: 'info', content: '  ls [dir]     - List files or project directories' },
        { type: 'info', content: '  cat <file>   - Read content of a file' },
        { type: 'info', content: '  fetch        - System & profile overview' },
        { type: 'info', content: '  skills       - Show technical proficiency' },
        { type: 'info', content: '  education    - View academic history' },
        { type: 'info', content: '  achievements - View certifications & awards' },
        { type: 'info', content: '  contact      - Get contact details' },
        { type: 'info', content: '  socials      - Connectivity links' },
        { type: 'info', content: '  history      - Command history' },
        { type: 'info', content: '  clear        - Flush terminal screen' },
        { type: 'info', content: '  exit         - Close terminal session' },
      ];
    },
    whoami: () => [
      { type: 'info', content: `Identity: ${CV_DATA.name}` },
      { type: 'info', content: `Role: Full-Stack Developer & CSE Undergraduate` },
      { type: 'info', content: `Mantra: ${CV_DATA.summary}` },
    ],
    ls: (args) => {
      if (args[0] === 'projects') {
        return CV_DATA.projects.map(p => ({ type: 'info', content: `drwxr-xr-x  ${p.name}` }));
      }
      return [
        { type: 'info', content: '-r--r--r--  cv.txt' },
        { type: 'info', content: '-r--r--r--  contact.txt' },
        { type: 'info', content: 'drwxr-xr-x  projects/' },
        { type: 'info', content: '-r--r--r--  skills.json' },
      ];
    },
    cat: (args) => {
      if (!args[0]) return [{ type: 'error', content: 'Usage: cat <filename>' }];
      
      const filename = args[0].toLowerCase();
      if (filename === 'cv.txt') {
        return [
          { type: 'info', content: `NAME: ${CV_DATA.name}` },
          { type: 'info', content: `LOCATION: ${CV_DATA.location}` },
          { type: 'info', content: `SUMMARY: ${CV_DATA.summary}` },
          { type: 'info', content: '---' },
          { type: 'info', content: 'For more details use: education, skills, achievements' }
        ];
      }
      if (filename === 'contact.txt') {
        return [
          { type: 'info', content: `Email: ${CV_DATA.email}` },
          { type: 'info', content: `Phone: ${CV_DATA.phone}` },
          { type: 'info', content: `GitHub: ${CV_DATA.socials.github}` },
        ];
      }
      if (filename === 'skills.json') {
        return [
          { type: 'info', content: JSON.stringify(CV_DATA.skills, null, 2) }
        ];
      }
      
      // Check for projects
      const projName = args[0].replace('projects/', '');
      const project = CV_DATA.projects.find(p => p.name.toLowerCase() === projName.toLowerCase());
      if (project) {
        return [
          { type: 'info', content: `Project: ${project.name}` },
          { type: 'info', content: `Stack: ${project.tech}` },
          { type: 'info', content: `Description: ${project.desc}` },
        ];
      }
      
      return [{ type: 'error', content: `cat: ${args[0]}: No such file or directory` }];
    },
    fetch: () => [
      { type: 'info', content: '       .---.       USER: ashutosh@portfolio' },
      { type: 'info', content: '      /     \\      OS: AshutoshOS v1.2.4' },
      { type: 'info', content: '      | () () |     HOST: Lovely Professional University' },
      { type: 'info', content: '       \\  ^  /      KERNEL: React-Node-2026' },
      { type: 'info', content: '        |||||       SHELL: portfolio-sh' },
      { type: 'info', content: '        |||||       UPTIME: 1 year, 2 months' },
      { type: 'info', content: '                    STACK: MERN, Python, PHP' },
    ],
    skills: () => [
      { type: 'info', content: 'TECHNICAL SKILL MATRIX:' },
      { type: 'info', content: `[Languages] : ${CV_DATA.skills.languages.join(', ')}` },
      { type: 'info', content: `[Frontend]  : ${CV_DATA.skills.frontend.slice(0, 3).join(', ')}...` },
      { type: 'info', content: `[Backend]   : ${CV_DATA.skills.backend.join(', ')}` },
      { type: 'info', content: `[Databases] : ${CV_DATA.skills.databases.join(', ')}` },
      { type: 'info', content: `[Tools]     : ${CV_DATA.skills.tools.join(', ')}` },
    ],
    education: () => CV_DATA.education.flatMap(e => [
      { type: 'info', content: `>> ${e.school}` },
      { type: 'info', content: `   ${e.degree} | ${e.period} | ${e.score}` },
    ]),
    achievements: () => CV_DATA.achievements.map(a => ({ type: 'info', content: `* ${a}` })),
    contact: () => [
      { type: 'info', content: `Email    : ${CV_DATA.email}` },
      { type: 'info', content: `Phone    : ${CV_DATA.phone}` },
      { type: 'info', content: `Location : ${CV_DATA.location}` },
    ],
    socials: () => [
      { type: 'info', content: `GitHub   : ${CV_DATA.socials.github}` },
      { type: 'info', content: `LinkedIn : ${CV_DATA.socials.linkedin}` },
    ],
    history: (allHistory) => {
      return allHistory
        .filter(h => h.type === 'command')
        .map((h, i) => ({ type: 'info', content: ` ${i + 1}  ${h.content.split('~$ ')[1]}` }));
    },
    sudo: () => [
      { type: 'error', content: 'Permission denied: This incident will be reported.' }
    ],
    projects: () => CV_DATA.projects.map(p => ({ type: 'info', content: `[${p.name}] - ${p.desc}` })),
  }), []);

  const handleCommand = (cmdStr) => {
    const parts = cmdStr.toLowerCase().trim().split(' ');
    const cmd = parts[0];
    const args = parts.slice(1);
    
    let newHistory = [...history, { type: 'command', content: `guest@ashutosh-portfolio:~$ ${cmdStr}` }];

    if (cmd === '') {
      setHistory(newHistory);
      setInputValue('');
      return;
    }

    if (cmd === 'clear') {
      setHistory([]);
      setInputValue('');
      return;
    }

    if (cmd === 'exit') {
      toggleTerminal();
      setInputValue('');
      return;
    }

    if (commands[cmd]) {
      const result = commands[cmd](args, history);
      newHistory = [...newHistory, ...result];
    } else {
      newHistory.push({ type: 'error', content: `Command not found: ${cmd}. Type "help" for a list of commands.` });
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
              className="flex-1 p-6 overflow-y-auto font-mono text-sm space-y-1.5 custom-scrollbar"
            >
              {history.map((line, idx) => (
                <div 
                  key={idx} 
                  className={`${line.type === 'error' ? 'text-red-400' : line.type === 'command' ? 'text-white font-bold' : 'text-emerald-400/90'}`}
                >
                  <span className="whitespace-pre-wrap">{line.content}</span>
                </div>
              ))}
              
              <div className="flex gap-2 text-white">
                <span className="text-emerald-500 font-bold">guest@ashutosh-portfolio:~$</span>
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
