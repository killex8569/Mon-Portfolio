import { useEffect, useRef, useState } from 'react';
import './Term.css';

const prefersReduced = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * useSeen — passe à true quand l'élément entre dans l'écran (une seule fois).
 * Même filet de sécurité que <Reveal> : un scroll trop rapide ne fait rien rater.
 */
export function useSeen(ref) {
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || seen) return undefined;
    if (typeof IntersectionObserver === 'undefined') {
      setSeen(true);
      return undefined;
    }

    let frame = 0;
    const done = () => {
      setSeen(true);
      cleanup();
    };
    const observer = new IntersectionObserver(([e]) => e.isIntersecting && done(), {
      rootMargin: '0px 0px -8% 0px',
    });
    function onScroll() {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        if (el.getBoundingClientRect().top < window.innerHeight) done();
      });
    }
    function cleanup() {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(frame);
    }

    observer.observe(el);
    window.addEventListener('scroll', onScroll, { passive: true });
    return cleanup;
  }, [ref, seen]);

  return seen;
}

/**
 * useTypewriter — renvoie le texte tapé caractère par caractère.
 *   start : démarre quand true
 */
export function useTypewriter(text, { speed = 38, delay = 0, start = true } = {}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(0);
  }, [text]);

  useEffect(() => {
    if (!start) return undefined;
    if (prefersReduced()) {
      setCount(text.length);
      return undefined;
    }
    let i = 0;
    let timer = setTimeout(function tick() {
      i += 1;
      setCount(i);
      if (i < text.length) timer = setTimeout(tick, speed + Math.random() * speed * 0.6);
    }, delay);
    return () => clearTimeout(timer);
  }, [text, speed, delay, start]);

  return { typed: text.slice(0, count), done: count >= text.length };
}

/* Texte tapé, avec curseur pendant la frappe */
export function Typed({ text, speed, delay, start = true, cursor = 'typing', onDone, className = '' }) {
  const { typed, done } = useTypewriter(text, { speed, delay, start });
  const doneRef = useRef(false);

  useEffect(() => {
    if (done && start && !doneRef.current) {
      doneRef.current = true;
      onDone?.();
    }
  }, [done, start, onDone]);

  const showCursor = cursor === 'always' || (cursor === 'typing' && !done && start);
  return (
    <span className={className}>
      {typed}
      {showCursor && <span className="cursor" aria-hidden="true" />}
    </span>
  );
}

/* Le prompt seul : alexandre@portfolio:~/projets$ */
export function PromptSign({ path = '~', user = 'alexandre', host = 'portfolio' }) {
  return (
    <span className="prompt-sign">
      <span className="c-green">{user}@{host}</span>
      <span className="c-dim">:</span>
      <span className="c-blue">{path}</span>
      <span className="c-dim">$</span>
    </span>
  );
}

/**
 * Prompt + commande, tapée quand le prompt devient visible.
 * Utilisé comme sur-titre de section : <Prompt path="~/projets" cmd="ls -la" />
 */
export function Prompt({ path, cmd, className = '', speed = 45, onDone }) {
  const ref = useRef(null);
  const seen = useSeen(ref);
  return (
    <div ref={ref} className={`prompt ${className}`} aria-label={`${path} $ ${cmd}`}>
      <PromptSign path={path} />{' '}
      <Typed text={cmd} start={seen} speed={speed} cursor="typing" onDone={onDone} className="prompt__cmd" />
    </div>
  );
}

/**
 * Tape un mot, attend, l'efface, passe au suivant (rôle dans le hero).
 */
export function TypeLoop({ words, typeSpeed = 55, eraseSpeed = 28, hold = 1800, className = '' }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [erasing, setErasing] = useState(false);

  useEffect(() => {
    setIndex(0);
    setText('');
    setErasing(false);
  }, [words]);

  useEffect(() => {
    const word = words[index % words.length] ?? '';
    if (prefersReduced()) {
      setText(word);
      return undefined;
    }
    let timer;
    if (!erasing && text === word) timer = setTimeout(() => setErasing(true), hold);
    else if (erasing && text === '') {
      setErasing(false);
      setIndex((i) => (i + 1) % words.length);
    } else {
      timer = setTimeout(
        () => setText(erasing ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)),
        erasing ? eraseSpeed : typeSpeed
      );
    }
    return () => clearTimeout(timer);
  }, [text, erasing, index, words, typeSpeed, eraseSpeed, hold]);

  return (
    <span className={className}>
      {text}
      <span className="cursor" aria-hidden="true" />
    </span>
  );
}
