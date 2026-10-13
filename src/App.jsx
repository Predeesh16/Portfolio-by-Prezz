import React, { useState, useEffect } from 'react';
import GridBackground from './components/GridBackground';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import CaseStudy from './pages/CaseStudy';
import { PROJECTS_DATA } from './data/projects';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);

  // Synchronize with URL hash for browser history & direct links
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      if (hash.startsWith('work/')) {
        const id = hash.replace('work/', '');
        const p = PROJECTS_DATA.find((item) => item.id === id || item.slug === id);
        if (p) {
          setSelectedProject(p);
          setCurrentPage('casestudy');
          return;
        }
      }

      if (['projects', 'about', 'contact'].includes(hash)) {
        setCurrentPage(hash);
        setSelectedProject(null);
      } else {
        setCurrentPage('home');
        setSelectedProject(null);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page) => {
    setCurrentPage(page);
    setSelectedProject(null);
    window.location.hash = page === 'home' ? '' : `#/${page}`;
  };

  const handleSelectProject = (project) => {
    setSelectedProject(project);
    setCurrentPage('casestudy');
    window.location.hash = `#/work/${project.id}`;
  };

  return (
    <div className="app-container">
      {/* Dynamic Grid Background with Architectural Lines & Ambient Light */}
      <GridBackground />

      {/* Fixed Frosted Glass Navigation Bar */}
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />

      {/* Main Page Content */}
      <main className="main-content">
        {currentPage === 'home' && (
          <Home
            onNavigate={navigateTo}
            onSelectProject={handleSelectProject}
          />
        )}
        {currentPage === 'projects' && (
          <Projects
            onNavigate={navigateTo}
            onSelectProject={handleSelectProject}
          />
        )}
        {currentPage === 'about' && (
          <About onNavigate={navigateTo} />
        )}
        {currentPage === 'contact' && (
          <Contact />
        )}
        {currentPage === 'casestudy' && selectedProject && (
          <CaseStudy
            project={selectedProject}
            onBack={() => navigateTo('home')}
            onSelectProject={handleSelectProject}
            onNavigate={navigateTo}
          />
        )}
      </main>

      {/* Site Footer */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
