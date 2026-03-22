import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="min-h-screen relative w-full overflow-x-hidden font-inter text-slate-800 dark:text-slate-200 transition-colors duration-300">
      <CustomCursor />
      
      {/* Background elements */}
      <div className="fixed inset-0 z-[-1] bg-slate-50 dark:bg-slate-950 overflow-hidden transition-colors duration-300">
        {/* Stock background image */}
        <img 
          src="https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2094&auto=format&fit=crop" 
          alt="Portfolio Background" 
          className="absolute inset-0 w-full h-full object-cover opacity-100 select-none pointer-events-none" 
        />
        {/* Light overlay for contrast */}
        <div className="absolute inset-0 bg-white/90 dark:bg-slate-950/60 transition-colors duration-300"></div>
        {/* Radial vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#f1f5f9_120%)] dark:bg-[radial-gradient(circle_at_center,transparent_0%,#020617_120%)] pointer-events-none transition-colors duration-300"></div>

        <div className="absolute top-0 -left-40 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 pointer-events-none"></div>
        <div className="absolute top-0 -right-40 w-96 h-96 bg-blue-900 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 pointer-events-none"></div>
        <div className="absolute -bottom-40 left-20 w-96 h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-10 pointer-events-none"></div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none"></div>
      </div>

      <Navbar />

      <main className="px-6 md:px-12 lg:px-24 mx-auto max-w-7xl">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Achievements />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
