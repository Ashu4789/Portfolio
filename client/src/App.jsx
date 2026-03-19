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
    <div className="min-h-screen relative w-full overflow-x-hidden font-inter text-slate-200">
      <CustomCursor />
      
      {/* Background elements */}
      <div className="fixed inset-0 z-[-1] bg-slate-950">
        <div className="absolute top-0 -left-40 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20"></div>
        <div className="absolute top-0 -right-40 w-96 h-96 bg-blue-900 rounded-full mix-blend-multiply filter blur-[128px] opacity-20"></div>
        <div className="absolute -bottom-40 left-20 w-96 h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-10"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
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
