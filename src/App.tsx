import React from 'react';
import { Navbar } from './components/Navbar';
import { Home } from './sections/Home';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Experience } from './sections/Experience';
import { Education } from './sections/Education';
import { Certifications } from './sections/Certifications';
import { Achievements } from './sections/Achievements';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-gray-100 flex flex-col">
      {/* Navigation Header */}
      <Navbar />
      
      {/* Portfolio Content Sections */}
      <main className="flex-grow">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Achievements />
        <Contact />
      </main>

      {/* Footer & Scroll-To-Top */}
      <Footer />
    </div>
  );
}

export default App;
