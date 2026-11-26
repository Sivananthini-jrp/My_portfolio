import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import CaseStudies from './components/CaseStudies';
import Certifications from './components/Certifications';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Skills from './components/Skills';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Updated IDs to match your actual sections
      const sections = [
        'home', 
        'about', 
        'experience', 
        'work', 
        'skills', 
        'certifications', 
        'resume', 
        'contact'
      ];
      
      let current = 'home';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the section is above the middle of the screen, it's active
          if (rect.top <= window.innerHeight / 2) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      <Home scrollToSection={scrollToSection} />
      <About />
      <Experience />
      <CaseStudies />
      <Skills />
      <Certifications />
      <Resume scrollToSection={scrollToSection} />
      <Contact />
    </div>
  );
}

export default App;