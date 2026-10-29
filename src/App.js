import { useEffect, useMemo, useRef } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, MotionConfig } from 'framer-motion';
import { LanguageProvider } from './i18n/LanguageContext';

/* Composants */
import Navbar, { workspaceIndex } from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Background from './components/Background/Background';
import { TerminalProvider } from './components/Shell/TerminalProvider';
import { PageTransition, ScrollProgress } from './components/Motion/Motion';

/* Vues */
import Accueil from './views/Accueil/Accueil';
import Competences from './views/Competences/Competences';
import Projets from './views/Projects/projects';
import ProjectDetail from './views/Projects/ProjectDetail';
import Parcours from './views/Parcours/Parcours';
import About from './views/About/About';
import NotFound from './views/not_found/not_found';

function AnimatedRoutes() {
  const location = useLocation();
  const index = workspaceIndex(location.pathname);
  const prevIndex = useRef(index);

  // Sens de la transition : vers un espace de numéro plus élevé → la page part à gauche
  // (recalculé à chaque changement d'URL : d'un projet à l'autre, dir = 0)
  const { pathname } = location;
  const dir = useMemo(() => (pathname ? Math.sign(index - prevIndex.current) : 0), [index, pathname]);
  useEffect(() => {
    prevIndex.current = index;
  }, [index, pathname]);

  const page = (el) => <PageTransition dir={dir}>{el}</PageTransition>;

  return (
    // On remonte en haut une fois l'ancienne page sortie, pour éviter un saut visible
    <AnimatePresence mode="wait" custom={dir} onExitComplete={() => window.scrollTo({ top: 0, behavior: 'instant' })}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={page(<Accueil />)} />
        <Route path="/competences" element={page(<Competences />)} />
        <Route path="/projets" element={page(<Projets />)} />
        <Route path="/projets/:slug" element={page(<ProjectDetail />)} />
        <Route path="/parcours" element={page(<Parcours />)} />
        <Route path="/about" element={page(<About />)} />
        <Route path="*" element={page(<NotFound />)} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <LanguageProvider>
      <MotionConfig reducedMotion="user">
        <BrowserRouter>
          <TerminalProvider>
            <ScrollProgress />
            <Background />
            <Navbar />
            <AnimatedRoutes />
            <Footer />
          </TerminalProvider>
        </BrowserRouter>
      </MotionConfig>
    </LanguageProvider>
  );
}

export default App;
