// src/components/ScrollToTop/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // S'il y a une ancre (#offres, #Titre…), on va vers elle en douceur
    if (hash) {
      const cible = document.getElementById(hash.slice(1));
      if (cible) {
        cible.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    // Sinon : remontée immédiate en haut de la nouvelle page
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, hash]);

  return null; // ne rend rien
}

export default ScrollToTop;