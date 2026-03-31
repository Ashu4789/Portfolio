import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Certifications from '../components/Certifications';
import Achievements from '../components/Achievements';
import Contact from '../components/Contact';
import GithubStats from '../components/GithubStats';
import Testimonials from '../components/Testimonials';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.main 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="px-6 md:px-12 lg:px-24 mx-auto max-w-7xl"
    >
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      <Achievements />
      <GithubStats />
      <Testimonials />
      <Contact />
    </motion.main>
  );
};

export default Home;
