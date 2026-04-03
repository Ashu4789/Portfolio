import React, { useState } from 'react';
import { Settings, X, Terminal, Activity, Eye, EyeOff } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const colors = [
  { name: 'Emerald', value: '#10b981' },
  { name: 'Blue', value: '#3b82f6' },
  { name: 'Rose', value: '#f43f5e' },
  { name: 'Violet', value: '#8b5cf6' },
  { name: 'Orange', value: '#f97316' },
];

const SettingsPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { 
    primaryColor, changePrimaryColor, 
    showPerformanceHUD, togglePerformanceHUD,
    toggleTerminal 
  } = useTheme();

  return (
    <>
      {/* Target button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed left-0 top-1/3 -translate-y-1/2 z-40 p-3 bg-white dark:bg-slate-800 shadow-[4px_0_15px_-3px_rgba(0,0,0,0.1)] rounded-r-xl border border-l-0 border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 transition-colors flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-700 cursor-pointer"
        aria-label="Open settings"
      >
        <Settings className="w-5 h-5 animate-[spin_4s_linear_infinite]" style={{ color: primaryColor }} />
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-[60] bg-black/20 dark:bg-black/40 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Panel */}
      <div className={`fixed left-0 top-0 bottom-0 z-[70] w-72 glass border-r border-slate-200 dark:border-white/10 bg-white/95 dark:bg-slate-900/95 shadow-2xl transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 h-full flex flex-col">
          <div className="flex justify-between items-center mb-8 border-b border-slate-200 dark:border-slate-800 pb-4">
            <h3 className="text-xl font-orbitron font-bold">Customization</h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 space-y-10 overflow-y-auto pr-2">
            <div>
              <h4 className="text-sm font-semibold mb-4 text-slate-500 uppercase tracking-wider">Accent Color</h4>
              <div className="grid grid-cols-5 gap-3">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => changePrimaryColor(color.value)}
                    className={`w-10 h-10 rounded-full transition-all duration-200 hover:scale-110 active:scale-95 flex items-center justify-center ${primaryColor === color.value ? 'ring-2 ring-offset-2 ring-offset-white dark:ring-offset-slate-900' : 'opacity-80 hover:opacity-100'}`}
                    style={{ backgroundColor: color.value, outlineColor: color.value, ringColor: color.value }}
                    title={color.name}
                    aria-label={`Set primary color to ${color.name}`}
                  >
                    {primaryColor === color.value && <div className="w-2 h-2 rounded-full bg-white/90"></div>}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-4 text-slate-500 uppercase tracking-wider">Advanced Features</h4>
              <div className="space-y-4">
                {/* Performance HUD Toggle */}
                <button
                  onClick={togglePerformanceHUD}
                  className="w-full flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Activity className={`w-5 h-5 ${showPerformanceHUD ? 'text-emerald-500' : 'text-slate-400'}`} />
                    <span className="text-sm font-medium">Performance HUD</span>
                  </div>
                  {showPerformanceHUD ? <Eye className="w-4 h-4 text-emerald-500" /> : <EyeOff className="w-4 h-4 text-slate-400" />}
                </button>

                {/* Terminal Toggle */}
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setTimeout(toggleTerminal, 300);
                  }}
                  className="w-full flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Terminal className="w-5 h-5 text-slate-400 group-hover:text-emerald-500 transition-colors" />
                    <span className="text-sm font-medium">Launch Terminal</span>
                    <span className="text-[10px] bg-slate-200 dark:bg-slate-700 px-1.5 py-0.5 rounded text-slate-500">`</span>
                  </div>
                  <kbd className="text-[10px] font-mono text-slate-400">ALT+T</kbd>
                </button>
              </div>
            </div>
            
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed italic">
              "The interface will automatically adapt to your chosen core color system for a personalized experience."
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsPanel;
