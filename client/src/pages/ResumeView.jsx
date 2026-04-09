import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { Download, FileText, CheckCircle } from 'lucide-react';

const ResumeView = () => {
  return (
    <>
      <SEO 
        title="Resume" 
        description="View my interactive resume, skills, experience, and download a PDF version."
      />
      <motion.main 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.5 }}
        className="px-6 md:px-12 lg:px-24 mx-auto max-w-4xl py-24 min-h-[80vh]"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div className="flex items-center gap-4">
            <FileText className="w-10 h-10 text-emerald-500" />
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">Resume</h1>
          </div>
          
          <a filter="drop-shadow(0 4px 3px rgb(0 0 0 / 0.07))" href="/Ashutosh Mohanty12307673CV2026.pdf" download className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-8 rounded-full transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] active:scale-95 group">
            <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            Download PDF
          </a>
        </div>

        {/* Interactive Print-like Container */}
        <div className="bg-white dark:bg-slate-900 shadow-2xl rounded-2xl p-8 md:p-16 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-300">
          
          {/* Header Section */}
          <header className="border-b border-slate-200 dark:border-slate-700 pb-8 mb-8">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">Ashutosh Mohanty</h2>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600 dark:text-slate-400 font-mono">
              <a href="mailto:ashutoshmohanty2004@gmail.com" className="hover:text-emerald-500 transition-colors">ashutoshmohanty2004@gmail.com</a>
              <span>•</span>
              <a href="https://linkedin.com/in/ashutoshmohanty24" target="_blank" rel="noreferrer" className="hover:text-emerald-500 transition-colors">linkedin.com/in/ashutoshmohanty24</a>
              <span>•</span>
              <a href="https://github.com/Ashu4789" target="_blank" rel="noreferrer" className="hover:text-emerald-500 transition-colors">github.com/Ashu4789</a>
              <span>•</span>
              <span>+91-9348825087</span>
            </div>
            <p className="mt-6 text-slate-700 dark:text-slate-300 italic">
              Computer Science undergraduate and Full Stack Developer with hands-on experience building scalable web applications.
            </p>
          </header>

          {/* Core Sections Grid */}
          <div className="space-y-12">
            
            {/* Education */}
            <section>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-wider flex items-center gap-3">
                <span className="w-8 h-1 bg-emerald-500 inline-block"></span> Education
              </h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <h4 className="text-xl font-bold text-slate-800 dark:text-slate-200">B.Tech in Computer Science and Engineering</h4>
                    <span className="text-emerald-600 dark:text-emerald-400 font-mono text-sm whitespace-nowrap">2023 – 2027</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400">Lovely Professional University, Punjab</p>
                  <p className="font-semibold text-emerald-700 dark:text-emerald-300 mt-1">CGPA: 8.17</p>
                </div>

                <div>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <h4 className="text-xl font-bold text-slate-800 dark:text-slate-200">Intermediate (Class XII)</h4>
                    <span className="text-emerald-600 dark:text-emerald-400 font-mono text-sm whitespace-nowrap">2021 – 2023</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400">Prabhujee English Medium School, Bhubaneswar</p>
                  <p className="font-semibold text-emerald-700 dark:text-emerald-300 mt-1">Score: 82.8%</p>
                </div>

                <div>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <h4 className="text-xl font-bold text-slate-800 dark:text-slate-200">Matriculation (Class X)</h4>
                    <span className="text-emerald-600 dark:text-emerald-400 font-mono text-sm whitespace-nowrap">2021</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400">Prabhujee English Medium School, Bhubaneswar</p>
                  <p className="font-semibold text-emerald-700 dark:text-emerald-300 mt-1">Score: 97.4%</p>
                </div>
              </div>
            </section>

            {/* Technical Skills */}
            <section>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-wider flex items-center gap-3">
                <span className="w-8 h-1 bg-emerald-500 inline-block"></span> Technical Skills
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                  <h4 className="font-bold mb-2">Languages</h4>
                  <p className="text-slate-600 dark:text-slate-400">C, C++, JavaScript, Python, Java, PHP</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                  <h4 className="font-bold mb-2">Development</h4>
                  <p className="text-slate-600 dark:text-slate-400">React.js, Node.js, Express.js, HTML5, CSS3, Tailwind CSS</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                  <h4 className="font-bold mb-2">Databases</h4>
                  <p className="text-slate-600 dark:text-slate-400">MongoDB, MySQL, PostgreSQL</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800 col-span-full">
                  <h4 className="font-bold mb-2">DevOps & Tools</h4>
                  <p className="text-slate-600 dark:text-slate-400">Git, GitHub, Docker (Basic), Linux, CI/CD, AWS EC2, Vercel</p>
                </div>
              </div>
            </section>

            {/* Selected Projects */}
            <section>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-wider flex items-center gap-3">
                <span className="w-8 h-1 bg-emerald-500 inline-block"></span> Selected Projects
              </h3>
              
              <div className="space-y-8">
                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                    <h4 className="text-xl font-bold text-slate-800 dark:text-slate-200">National Accounts Dashboard</h4>
                    <span className="text-emerald-600 dark:text-emerald-400 font-mono text-sm border border-emerald-500/30 px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-900/20">Jan 2026</span>
                  </div>
                  <ul className="list-none space-y-2 text-slate-600 dark:text-slate-400 ml-1">
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5"/> Developed a data analytics dashboard consolidating fragmented macroeconomic datasets.</li>
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5"/> Features: Time-series visualizations, sector drill-down, automated ETL pipeline.</li>
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5"/> Tech: React.js, Node.js, Express.js, MongoDB, Google Cloud API.</li>
                  </ul>
                </div>
                
                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                    <h4 className="text-xl font-bold text-slate-800 dark:text-slate-200">AI Business Travel Chatbot</h4>
                    <span className="text-emerald-600 dark:text-emerald-400 font-mono text-sm border border-emerald-500/30 px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-900/20">Apr 2025</span>
                  </div>
                  <ul className="list-none space-y-2 text-slate-600 dark:text-slate-400 ml-1">
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5"/> AI platform assisting users with travel planning and hotel/flight recommendations.</li>
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5"/> Tech: JavaScript, HTML, Tailwind CSS, Gemini API integration.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                    <h4 className="text-xl font-bold text-slate-800 dark:text-slate-200">Bubble Bot Website</h4>
                    <span className="text-emerald-600 dark:text-emerald-400 font-mono text-sm border border-emerald-500/30 px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-900/20">2025</span>
                  </div>
                  <ul className="list-none space-y-2 text-slate-600 dark:text-slate-400 ml-1">
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5"/> Robotics project website presenting solutions through an interactive interface.</li>
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5"/> Tech: React.js, Node.js, JavaScript, Tailwind CSS.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Certifications & Training */}
            <section>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-wider flex items-center gap-3">
                <span className="w-8 h-1 bg-emerald-500 inline-block"></span> Certifications & Training
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-1"/>
                  <div>
                    <h4 className="font-bold">Cloud Computing — NPTEL</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">IIT Kharagpur | April 2025</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-1"/>
                  <div>
                    <h4 className="font-bold">DSA with C++</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">CipherSchools (70 Hours) | July 2025</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-1"/>
                  <div>
                    <h4 className="font-bold">Logic Building & DSA</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">LPU CPE | July 2024</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-1"/>
                  <div>
                    <h4 className="font-bold">Python for ML/AI</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">CSEPathshala | March 2024</p>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </motion.main>
    </>
  );
};

export default ResumeView;
