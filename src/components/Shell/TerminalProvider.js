import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useLang } from '../../i18n/LanguageContext';
import Window from '../Window/Window';
import Icon from '../Icon/Icon';
import Shell from './Shell';
import { routeToSegs } from './fs';
import './TerminalProvider.css';

const TerminalContext = createContext({ open: () => {}, close: () => {}, toggle: () => {}, isOpen: false });

export const useTerminal = () => useContext(TerminalContext);

const isTyping = (el) => el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.isContentEditable);

/**
 * Terminal flottant disponible partout.
 * Raccourcis : Ctrl/⌘ + K (bascule), ` (ouvre), Échap (ferme).
 */
export function TerminalProvider({ children }) {
  const { t } = useLang();
  const { pathname } = useLocation();
  const [isOpen, setOpen] = useState(false);

  const open = useCallback(() => setOpen(true), []);
  const close = useCallback(() => setOpen(false), []);
  const toggle = useCallback(() => setOpen((o) => !o), []);

  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        toggle();
      } else if (e.key === '`' && !isTyping(document.activeElement)) {
        e.preventDefault();
        open();
      } else if (e.key === 'Escape') {
        close();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, close, toggle]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const value = useMemo(() => ({ open, close, toggle, isOpen }), [open, close, toggle, isOpen]);

  return (
    <TerminalContext.Provider value={value}>
      {children}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="term-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onMouseDown={(e) => e.target === e.currentTarget && close()}
          >
            <motion.div
              className="term-modal__frame"
              role="dialog"
              aria-modal="true"
              aria-label={t('shell.title')}
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.22, 0.61, 0.36, 1] }}
            >
              <Window
                active
                className="term-modal__win"
                title="alexandre@portfolio — zsh"
                meta={
                  <button type="button" className="term-modal__close" onClick={close} aria-label={t('nav.close')}>
                    <kbd>Esc</kbd>
                    <Icon name="close" />
                  </button>
                }
              >
                <Shell autoFocus initialCwd={routeToSegs(pathname)} onClose={close} intro={[]} />
              </Window>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </TerminalContext.Provider>
  );
}
