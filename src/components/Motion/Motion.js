import { useEffect, useRef, useState } from 'react';
import { animate, motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import { useSeen } from '../Term/Term';
import './Motion.css';

/*
 * Transition entre pages façon changement d'espace de travail (Hyprland) :
 * aller vers un espace de numéro plus élevé fait glisser la page vers la gauche.
 *   custom (dir) : 1 = vers la droite, -1 = vers la gauche, 0 = même espace
 */
const pageVariants = {
  initial: (dir) => (dir ? { opacity: 0, x: `${dir * 6}vw` } : { opacity: 0, y: 16 }),
  animate: { opacity: 1, x: 0, y: 0 },
  exit: (dir) => (dir ? { opacity: 0, x: `${dir * -6}vw` } : { opacity: 0, y: -10 }),
};

export function PageTransition({ children, dir = 0 }) {
  const reduce = useReducedMotion();
  return (
    <motion.main
      className="page"
      custom={dir}
      variants={reduce ? undefined : pageVariants}
      initial={reduce ? false : 'initial'}
      animate="animate"
      exit={reduce ? { opacity: 0 } : 'exit'}
      transition={{ duration: 0.38, ease: [0.22, 0.61, 0.36, 1] }}
    >
      {children}
    </motion.main>
  );
}

/* Barre de progression du scroll, en haut de l'écran */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });
  return <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />;
}

/* Compteur animé qui démarre quand il devient visible */
export function Counter({ to, suffix = '', duration = 1.4 }) {
  const ref = useRef(null);
  const seen = useSeen(ref);
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!seen) return undefined;
    const controls = animate(0, to, {
      duration,
      ease: [0.22, 0.61, 0.36, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [seen, to, duration]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}
