import React, { useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import { Hero, About, Projects, ProjectDetail, Skills, Experience, Credentials, Resume, Contact, Footer } from './sections.jsx';
import { projects } from './data/projects.js';

export default function App() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'light');
  const [routeHash, setRouteHash] = useState(() => window.location.hash);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem('angelo-theme', theme); } catch { /* storage may be disabled */ }
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#0b1322' : '#f5f7fc');
  }, [theme]);

  useEffect(() => {
    const handleHashChange = () => setRouteHash(window.location.hash);
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    if (routeHash.startsWith('#project/')) {
      window.scrollTo({ top: 0, behavior: 'auto' });
    } else if (routeHash === '#projects') {
      requestAnimationFrame(() => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  }, [routeHash]);

  const projectMatch = routeHash.match(/^#project\/([^/]+)$/);
  const selectedProject = projectMatch
    ? projects.find(project => project.id === decodeURIComponent(projectMatch[1]))
    : null;

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header theme={theme} onToggleTheme={() => setTheme(value => value === 'dark' ? 'light' : 'dark')} />
      <main id="main">
        {selectedProject
          ? <ProjectDetail project={selectedProject} />
          : <><Hero /><About /><Projects /><Skills /><Experience /><Credentials /><Resume /><Contact /></>
        }
      </main>
      <Footer />
    </>
  );
}
