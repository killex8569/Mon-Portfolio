import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Icon from '../Icon/Icon';
import { useLang } from '../../i18n/LanguageContext';
import { CV } from '../../data/profil';
import './CvMenu.css';

/**
 * Bouton « CV » avec menu FR / EN.
 *   label     : texte du bouton (défaut : common.downloadCv)
 *   variant   : 'ghost' | 'primary' | 'accent'
 *   size      : '' | 'sm'
 *   align     : 'left' | 'right' (alignement du menu)
 */
export default function CvMenu({ label, variant = 'ghost', size = '', align = 'left', direction = 'down' }) {
  const { t, lang } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('pointerdown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const options = [
    { code: 'fr', label: t('common.cvFr'), href: CV.fr, flag: 'FR' },
    { code: 'en', label: t('common.cvEn'), href: CV.en, flag: 'EN' },
  ].sort((a, b) => (a.code === lang ? -1 : b.code === lang ? 1 : 0));

  return (
    <div className={`cv-menu cv-menu--${align} cv-menu--${direction}`} ref={ref}>
      <button
        type="button"
        className={`btn btn--${variant} ${size ? `btn--${size}` : ''}`}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <Icon name="download" />
        {label ?? t('common.downloadCv')}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="cv-menu__panel"
            role="menu"
            initial={{ opacity: 0, y: direction === 'up' ? 8 : -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: direction === 'up' ? 8 : -8, scale: 0.96 }}
            transition={{ duration: 0.18, ease: [0.22, 0.61, 0.36, 1] }}
          >
            {options.map((o) => (
              <a
                key={o.code}
                href={o.href}
                target="_blank"
                rel="noopener noreferrer"
                role="menuitem"
                className="cv-menu__item"
                onClick={() => setOpen(false)}
              >
                <span className="cv-menu__flag">{o.flag}</span>
                <span>{o.label}</span>
                <Icon name="arrowUpRight" className="cv-menu__arrow" />
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
