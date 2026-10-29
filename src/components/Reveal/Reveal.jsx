import { useEffect, useRef, useState } from 'react';
import './Reveal.css';

/**
 * Reveal — révèle son contenu quand il entre dans le viewport.
 *
 * Props :
 *  - as        : balise HTML à rendre ('div' par défaut, ex. 'section', 'h2', 'li')
 *  - animation : 'up' | 'down' | 'left' | 'right' | 'zoom' | 'fade'
 *  - delay     : décalage en ms (utile pour créer un effet de cascade)
 *  - duration  : durée de la transition en ms
 *  - threshold : % de l'élément visible avant déclenchement (0 → 1)
 *  - once      : true = ne joue qu'une fois, false = rejoue à chaque passage
 */
export default function Reveal({
  children,
  as: Tag = 'div',
  animation = 'up',
  delay = 0,
  duration = 700,
  threshold = 0.15,
  once = true,
  className = '',
  style,
  ...rest
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    // Pas d'IntersectionObserver ou animations désactivées côté OS → on affiche direct
    if (
      typeof IntersectionObserver === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setVisible(true);
      return undefined;
    }

    let frame = 0;
    const cleanup = () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(frame);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) cleanup();
        } else if (!once) {
          setVisible(false);
        }
      },
      {
        threshold,
        // déclenche un peu avant que l'élément touche le bas de l'écran
        rootMargin: '0px 0px -10% 0px',
      }
    );

    // Filet de sécurité (mode once) : si l'élément passe d'un coup de sous l'écran
    // à au-dessus (scroll rapide, frames lentes), l'observer ne voit aucun
    // changement d'intersection. On vérifie donc aussi au scroll, 1x par frame.
    function onScroll() {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        if (el.getBoundingClientRect().top < window.innerHeight) {
          setVisible(true);
          cleanup();
        }
      });
    }

    observer.observe(el);
    if (once) window.addEventListener('scroll', onScroll, { passive: true });
    return cleanup;
  }, [once, threshold]);

  const classes = [
    'reveal',
    `reveal-${animation}`,
    visible ? 'is-visible' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag
      ref={ref}
      className={classes}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}




