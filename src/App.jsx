import { useEffect, useRef, useState } from 'react';
import Background from './components/Background';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CurrencyExchangeProject from './components/CurrencyExchangeProject';
import PosProject from './components/PosProject';
import MarketplaceProject from './components/MarketplaceProject';

export default function App() {
  const [activeProject, setActiveProject] = useState(null);
  const openerRef = useRef(null);

  useEffect(() => {
    document.documentElement.classList.toggle('project-is-open', activeProject !== null);
    return () => document.documentElement.classList.remove('project-is-open');
  }, [activeProject]);

  const openProject = (id, opener) => {
    openerRef.current = opener;
    setActiveProject(id);
  };
  const requestClose = () => setActiveProject(null);
  const handleClosed = () => {
    setActiveProject(null);
    openerRef.current?.focus({ preventScroll: true });
  };
  const dialogProps = { onRequestClose: requestClose, onClosed: handleClosed };

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Background />
      <div className="page-shell">
        <div className="portfolio-frame">
          <Header />
          <main id="main-content">
            <Hero />
            <Skills />
            <Experience />
            <Projects onOpenProject={openProject} />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
      <CurrencyExchangeProject active={activeProject === 'exchange-details'} {...dialogProps} />
      <PosProject active={activeProject === 'pos-details'} {...dialogProps} />
      <MarketplaceProject active={activeProject === 'marketplace-details'} {...dialogProps} />
    </>
  );
}
