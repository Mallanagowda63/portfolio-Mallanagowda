import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { CloudEngineering } from './components/CloudEngineering';
import { Education } from './components/Education';
import { GitHubSection } from './components/GitHub';
import { CareerFocus } from './components/CareerFocus';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-950 text-slate-100 selection:bg-cyan-500 selection:text-dark-950">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <CloudEngineering />
        <Education />
        <GitHubSection />
        <CareerFocus />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
