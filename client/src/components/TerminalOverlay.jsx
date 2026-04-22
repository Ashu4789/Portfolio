import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, ChevronRight, Github, Linkedin, Mail, ExternalLink, Download, Globe, GraduationCap, Award as AwardIcon } from 'lucide-react';

const CV_DATA = {
  name: "Ashutosh Mohanty",
  location: "Punjab, India",
  email: "ashutoshmohanty2004@gmail.com",
  phone: "+91 9348825087",
  socials: {
    github: "https://github.com/Ashu4789",
    linkedin: "https://www.linkedin.com/in/ashutoshmohanty24",
    instagram: "https://www.instagram.com/ashu_4789x/",
    youtube: "https://www.youtube.com/@BlackRipper47",
    leetcode: "https://leetcode.com/u/Ashutosh4789/",
    twitter: "https://x.com/AshutoshMo72374"
  },
  summary: "Computer Science undergraduate and Full Stack Developer with hands-on experience building scalable web applications using React, Node.js, Express, and modern databases.",
  skills: {
    languages: [
      { name: "Hindi", level: "Native or bilingual" },
      { name: "Odia", level: "Native or bilingual" },
      { name: "English", level: "Full professional" },
      { name: "Japanese", level: "Elementary" }
    ],
    technical: [
      { category: "Languages", items: ["C", "C++", "JavaScript", "Python", "Java", "PHP"] },
      { category: "Frontend", items: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Responsive UI/UX Design"] },
      { category: "Backend", items: ["Node.js", "Express.js", "REST API Development", "Server-side Architecture"] },
      { category: "Databases", items: ["MongoDB", "MySQL", "PostgreSQL"] },
      { category: "Tools", items: ["Git & GitHub", "Docker", "Linux", "AWS EC2", "Vercel"] }
    ]
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
  credentials: [
    { title: "Cloud Computing — NPTEL", issuer: "IIT Kharagpur", link: "https://drive.google.com/file/d/1Gfj7pz4Bw_aYDxuuwoIk6qJAyRv8Ymof/view" },
    { title: "DSA with C++ — CipherSchools", issuer: "CipherSchools", link: "https://drive.google.com/file/d/1ts0lpKw_vv4KAaV0njjHbIxNAXxm3V02/view" },
    { title: "Logic & Data Structures — LPU CPE", issuer: "LPU CPE", link: "https://drive.google.com/file/d/1oJSO19d6ge0FTPUEzAFiNKyttkuavnlU/view" },
    { title: "Basic Python — CSEPathshala", issuer: "CSEPathshala", link: "https://drive.google.com/file/d/112XtdnHVolCjB4yJa7OxGFCwQUwl2ZRc/view" }
  ],
  projects: [
    { id: "bubble-bot-website", name: "BubbleBot", tech: "React, Node", desc: "Modern robotics project website." },
    { id: "architecture-firm-website", name: "ArchitecturePortfolio", tech: "MERN Stack", desc: "Full stack architecture firm platform." },
    { id: "national-accounts-dashboard", name: "NationalAccounts", tech: "React, Node, MongoDB", desc: "Data analytics dashboard for macroeconomic datasets." },
    { id: "tour-guide-management", name: "TourGuide", tech: "PHP, MySQL, JS", desc: "Travel agency management platform." },
    { id: "ai-business-travel-chatbot", name: "TravelBot", tech: "JS, Gemini API", desc: "AI-powered travel planning chatbot." },
    { id: "ipcdebugger", name: "IPCDebugger", tech: "Python, Tkinter", desc: "Visual debugging tool for OS IPC mechanisms." }
  ],
  cvPath: "/Ashutosh Mohanty12307673CV2026.pdf"
};

const THEMES = {
  emerald: {
    primary: "text-emerald-400",
    border: "border-emerald-500/30",
    bg: "bg-slate-950",
    caret: "caret-emerald-500",
    prompt: "text-emerald-500",
    shadow: "shadow-[0_0_50px_rgba(16,185,129,0.2)]"
  },
  amber: {
    primary: "text-amber-400",
    border: "border-amber-500/30",
    bg: "bg-stone-950",
    caret: "caret-amber-500",
    prompt: "text-amber-500",
    shadow: "shadow-[0_0_50px_rgba(245,158,11,0.2)]"
  },
  rose: {
    primary: "text-rose-400",
    border: "border-rose-500/30",
    bg: "bg-slate-900",
    caret: "caret-rose-500",
    prompt: "text-rose-500",
    shadow: "shadow-[0_0_50px_rgba(244,63,94,0.2)]"
  },
  cyan: {
    primary: "text-cyan-400",
    border: "border-cyan-500/30",
    bg: "bg-slate-950",
    caret: "caret-cyan-500",
    prompt: "text-cyan-500",
    shadow: "shadow-[0_0_50px_rgba(6,182,212,0.2)]"
  }
};

const TerminalOverlay = () => {
  const navigate = useNavigate();
  const { showTerminal, toggleTerminal } = useTheme();
  const [terminalTheme, setTerminalTheme] = useState('emerald');
  const [history, setHistory] = useState([
    { type: 'info', content: 'Ashutosh OS [Version 2.0.0]' },
    { type: 'info', content: '(c) 2026 Ashutosh Mohanty. All rights reserved.' },
    { type: 'info', content: 'System initialized. Type "help" to list available commands.' },
    { type: 'info', content: 'Tip: Use "man visit" to learn about site navigation.' },
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

  const themeClasses = THEMES[terminalTheme];

  const manuals = {
    whoami: [
      { type: 'info', content: 'NAME: whoami - Identity Disclosure' },
      { type: 'info', content: 'USAGE: whoami' },
      { type: 'info', content: 'DESCRIPTION: Displays the developer\'s basic identity and mantra.' },
      { type: 'info', content: 'EXAMPLE: whoami' }
    ],
    ls: [
      { type: 'info', content: 'NAME: ls - List Directory Contents' },
      { type: 'info', content: 'USAGE: ls [directory]' },
      { type: 'info', content: 'DESCRIPTION: Lists files or specific project directories.' },
      { type: 'info', content: 'EXAMPLES:' },
      { type: 'info', content: '  ls             - List root files' },
      { type: 'info', content: '  ls projects    - List all project folders' }
    ],
    visit: [
      { type: 'info', content: 'NAME: visit - Navigation Tool' },
      { type: 'info', content: 'USAGE: visit [home | blog | resume | project <id>]' },
      { type: 'info', content: 'DESCRIPTION: Navigates to different pages or project details.' },
      { type: 'info', content: 'EXAMPLES:' },
      { type: 'info', content: '  visit blog             - Navigate to blog page' },
      { type: 'info', content: '  visit project bubble   - Open BubbleBot project details' }
    ],
    open: [
      { type: 'info', content: 'NAME: open - Social Link Redirector' },
      { type: 'info', content: 'USAGE: open [github | linkedin | instagram | youtube | leetcode]' },
      { type: 'info', content: 'DESCRIPTION: Opens social profiles in a new browser tab.' },
      { type: 'info', content: 'EXAMPLE: open github' }
    ],
    theme: [
      { type: 'info', content: 'NAME: theme - Visual Environment Switcher' },
      { type: 'info', content: 'USAGE: theme [emerald | amber | rose | cyan]' },
      { type: 'info', content: 'DESCRIPTION: Changes the terminal\'s color scheme instantly.' },
      { type: 'info', content: 'EXAMPLE: theme amber' }
    ],
    cv: [
      { type: 'info', content: 'NAME: cv - Document Installer' },
      { type: 'info', content: 'USAGE: cv install' },
      { type: 'info', content: 'DESCRIPTION: Triggers a secure download of the developer\'s resume.' },
      { type: 'info', content: 'EXAMPLE: cv install' }
    ],
    skills: [
      { type: 'info', content: 'NAME: skills - Technical Matrix' },
      { type: 'info', content: 'USAGE: skills' },
      { type: 'info', content: 'DESCRIPTION: Displays the full technical stack and tools.' }
    ],
    github: [
      { type: 'info', content: 'NAME: github - Activity Insights' },
      { type: 'info', content: 'USAGE: github' },
      { type: 'info', content: 'DESCRIPTION: Displays real-time coding stats and GitHub profile overview.' }
    ]
  };

  const commands = useMemo(() => ({
    help: (args) => {
      if (args[0] && manuals[args[0].toLowerCase()]) {
        return manuals[args[0].toLowerCase()];
      }
      return [
        { type: 'info', content: '--- TERMINAL COMMAND MANUAL ---' },
        { type: 'info', content: 'Type "help <command>" for detailed info.' },
        { type: 'info', content: '' },
        { type: 'info', content: 'whoami         - View developer bio. (Ex: whoami)' },
        { type: 'info', content: 'ls             - List files. (Ex: ls projects)' },
        { type: 'info', content: 'visit          - Navigate site. (Ex: visit blog)' },
        { type: 'info', content: 'open           - Open socials. (Ex: open leetcode)' },
        { type: 'info', content: 'view           - View credentials. (Ex: view credentials)' },
        { type: 'info', content: 'cv install     - Download CV. (Ex: cv install)' },
        { type: 'info', content: 'theme          - Change colors. (Ex: theme cyan)' },
        { type: 'info', content: 'skills         - View tech stack. (Ex: skills)' },
        { type: 'info', content: 'proficiency    - Language levels. (Ex: proficiency)' },
        { type: 'info', content: 'github         - Coding activity. (Ex: github)' },
        { type: 'info', content: 'fetch          - System overview. (Ex: fetch)' },
        { type: 'info', content: 'clear | exit   - Interface control.' },
      ];
    },
    man: (args) => {
      if (!args[0]) return [{ type: 'error', content: 'What manual page do you want? Try "man visit".' }];
      const cmd = args[0].toLowerCase();
      return manuals[cmd] || [{ type: 'error', content: `No manual entry for: ${cmd}` }];
    },
    whoami: () => [
      { type: 'info', content: `Identity: ${CV_DATA.name}` },
      { type: 'info', content: `Role: Full-Stack Developer & CSE Undergraduate` },
      { type: 'info', content: `Mantra: ${CV_DATA.summary}` },
    ],
    ls: (args) => {
      if (args[0] === 'projects' || args[0] === 'projects/') {
        return CV_DATA.projects.map(p => ({ type: 'info', content: `drwxr-xr-x  ${p.id}/` }));
      }
      return [
        { type: 'info', content: '-r-xr-xr-x  cv_downloader.sh' },
        { type: 'info', content: '-r--r--r--  bio.txt' },
        { type: 'info', content: 'drwxr-xr-x  projects/' },
        { type: 'info', content: '-r--r--r--  skill_matrix.json' },
      ];
    },
    fetch: () => [
      { type: 'info', content: '       .---.       USER: ashutosh@portfolio' },
      { type: 'info', content: '      /     \\      OS: AshutoshOS v2.0.0' },
      { type: 'info', content: '      | () () |     HOST: Lovely Professional University' },
      { type: 'info', content: '       \\  ^  /      KERNEL: React-Node-2026-Stable' },
      { type: 'info', content: '        |||||       SHELL: terminal-v2' },
      { type: 'info', content: '        |||||       UPTIME: 1 year, 2 months' },
      { type: 'info', content: `                    THEME: ${terminalTheme.toUpperCase()}` },
    ],
    skills: () => [
      { type: 'info', content: '--- TECHNICAL SKILL MATRIX ---' },
      ...CV_DATA.skills.technical.map(s => ({ type: 'info', content: `[${s.category.padEnd(9)}] : ${s.items.join(', ')}` }))
    ],
    proficiency: () => [
      { type: 'info', content: '--- LANGUAGE PROFICIENCY ---' },
      ...CV_DATA.skills.languages.map(l => ({ type: 'info', content: `» ${l.name.padEnd(10)}: ${l.level}` }))
    ],
    github: () => [
      { type: 'info', content: 'GitHub Insights for @Ashu4789:' },
      { type: 'info', content: '  • Public Repos    : 41' },
      { type: 'info', content: '  • Followers       : 30+' },
      { type: 'info', content: '  • Tech Stack      : JavaScript, React, Node.js, Python, PHP' },
      { type: 'info', content: '  • Contribution    : High (Focusing on MERN & Automation)' },
      { type: 'info', content: `  • View Profile    : ${CV_DATA.socials.github}` },
    ],
    visit: (args) => {
      if (!args[0]) return [{ type: 'error', content: 'Usage: visit <home|blog|resume|project [id]>' }];
      const target = args[0].toLowerCase();
      
      if (target === 'home') { navigate('/'); toggleTerminal(); return []; }
      if (target === 'blog') { navigate('/blog'); toggleTerminal(); return []; }
      if (target === 'resume') { navigate('/resume'); toggleTerminal(); return []; }
      
      if (target === 'project') {
        if (!args[1]) return CV_DATA.projects.map(p => ({ type: 'info', content: ` - ${p.id}` }));
        const project = CV_DATA.projects.find(p => p.id.includes(args[1]));
        if (project) {
          navigate(`/project/${project.id}`);
          toggleTerminal();
          return [];
        }
        return [{ type: 'error', content: `Project not found: ${args[1]}` }];
      }
      
      return [{ type: 'error', content: `Unknown destination: ${target}` }];
    },
    open: (args) => {
      if (!args[0]) return [{ type: 'info', content: `Targets: ${Object.keys(CV_DATA.socials).join(', ')}` }];
      const platform = args[0].toLowerCase();
      if (CV_DATA.socials[platform]) {
        window.open(CV_DATA.socials[platform], '_blank');
        return [{ type: 'success', content: `Redirecting to ${platform}...` }];
      }
      return [{ type: 'error', content: `Unknown social platform: ${args[0]}` }];
    },
    view: (args) => {
      if (args[0] === 'credentials' || args[0] === 'certificates') {
        return [
          { type: 'info', content: 'Verifiable Credentials:' },
          ...CV_DATA.credentials.map(c => ({ 
            type: 'link', 
            content: `  • ${c.title} (${c.issuer})`,
            link: c.link
          }))
        ];
      }
      return [{ type: 'error', content: 'Usage: view credentials' }];
    },
    cv: (args) => {
      if (args[0] === 'install') {
        const link = document.createElement('a');
        link.href = CV_DATA.cvPath;
        link.download = 'Ashutosh_Mohanty_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        return [
          { type: 'info', content: 'Installing Ashutosh_Mohanty_CV.pdf...' },
          { type: 'success', content: 'Download started successfully.' }
        ];
      }
      return [{ type: 'error', content: 'Usage: cv install' }];
    },
    theme: (args) => {
      if (!args[0]) return [{ type: 'info', content: `Available themes: ${Object.keys(THEMES).join(', ')}` }];
      const theme = args[0].toLowerCase();
      if (THEMES[theme]) {
        setTerminalTheme(theme);
        return [{ type: 'success', content: `Terminal environment theme set to ${theme}.` }];
      }
      return [{ type: 'error', content: `Theme "${args[0]}" not recognized.` }];
    },
    clear: () => {
      setHistory([]);
      return [];
    },
    exit: () => {
      toggleTerminal();
      return [];
    },
    history: (args, allHistory) => {
      return allHistory
        .filter(h => h.type === 'command')
        .map((h, i) => ({ type: 'info', content: ` ${i + 1}  ${h.content.split('~$ ')[1]}` }));
    },
    sudo: () => [
      { type: 'error', content: 'Permission denied: This incident will be reported to ashutosh@portfolio.' }
    ],
  }), [navigate, toggleTerminal, terminalTheme]);

  const handleCommand = (cmdStr) => {
    const parts = cmdStr.toLowerCase().trim().split(' ');
    const cmd = parts[0];
    const args = parts.slice(1);
    
    let newHistory = [...history, { type: 'command', content: `guest@ashutosh:~$ ${cmdStr}` }];

    if (cmd === '') {
      setHistory(newHistory);
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
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md pointer-events-auto" onClick={toggleTerminal}></div>

          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className={`relative flex flex-col ${themeClasses.bg} border ${themeClasses.border} rounded-xl ${themeClasses.shadow} pointer-events-auto overflow-hidden transition-all duration-300 ${isMaximized ? 'w-full h-full' : 'w-full max-w-4xl h-[600px]'}`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Title Bar */}
            <div className="flex justify-between items-center bg-slate-800/10 px-4 py-2 border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer" onClick={toggleTerminal}></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-xs font-mono ml-4 uppercase tracking-tighter">
                  <TerminalIcon className={`w-3.5 h-3.5 ${themeClasses.primary}`} />
                  ashutosh-portfolio — root@host:~
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
                  className={`
                    ${line.type === 'error' ? 'text-red-400' : 
                      line.type === 'command' ? 'text-white font-bold' : 
                      line.type === 'success' ? 'text-emerald-400 font-bold' :
                      line.type === 'link' ? 'text-cyan-400' :
                      themeClasses.primary + '/90'}
                  `}
                >
                  {line.type === 'link' ? (
                    <a href={line.link} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-2">
                       {line.content} <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="whitespace-pre-wrap">{line.content}</span>
                  )}
                </div>
              ))}
              
              <div className="flex gap-2 text-white">
                <span className={`${themeClasses.prompt} font-bold`}>guest@ashutosh:~$</span>
                <input
                  ref={inputRef}
                  autoFocus
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={onKeyDown}
                  className={`flex-1 bg-transparent border-none outline-none ${themeClasses.caret} text-white`}
                  spellCheck={false}
                />
              </div>
            </div>

            {/* Bottom Info Bar */}
            <div className="bg-white/5 px-4 py-1.5 border-t border-white/5 flex justify-between text-[10px] font-mono text-slate-500 uppercase tracking-widest">
              <span className="flex items-center gap-2">
                <Globe className="w-3 h-3" /> Connect: Secure
              </span>
              <span>LPU_CSE_2023_2027</span>
              <span className={themeClasses.primary}>{terminalTheme.toUpperCase()}</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TerminalOverlay;

