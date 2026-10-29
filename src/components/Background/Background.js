import { useEffect, useRef } from 'react';
import './Background.css';

/**
 * Fond global : grille de points, lueurs bleue / ambre, lignes de balayage
 * façon écran, halo qui suit le curseur (desktop uniquement).
 */
export default function Background() {
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow || !window.matchMedia('(pointer: fine)').matches) return undefined;

    let frame = 0;
    let x = 0;
    let y = 0;

    const onMove = (e) => {
      x = e.clientX;
      y = e.clientY;
      if (!frame) {
        frame = requestAnimationFrame(() => {
          glow.style.setProperty('--cx', `${x}px`);
          glow.style.setProperty('--cy', `${y}px`);
          frame = 0;
        });
      }
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="bg" aria-hidden="true">
      <div className="bg__glow-top" />
      <div className="bg__dots" />
      <div className="bg__glow" ref={glowRef} />
      <div className="bg__scan" />
    </div>
  );
}
