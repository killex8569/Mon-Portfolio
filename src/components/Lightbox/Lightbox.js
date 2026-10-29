import { useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Icon from '../Icon/Icon';
import './Lightbox.css';

/**
 * Visionneuse d'images plein écran.
 *   images  : [{ src, alt }]
 *   index   : image ouverte (null = fermé)
 *   onChange: (nouvelIndex | null) => void
 */
export default function Lightbox({ images, index, onChange }) {
  const open = index !== null && index !== undefined;
  const close = useCallback(() => onChange(null), [onChange]);
  const go = useCallback(
    (dir) => onChange((index + dir + images.length) % images.length),
    [index, images.length, onChange]
  );

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, close, go]);

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={close}
        >
          <button type="button" className="lightbox__btn lightbox__close" onClick={close} aria-label="Fermer / Close">
            <Icon name="close" />
          </button>

          {images.length > 1 && (
            <>
              <button
                type="button"
                className="lightbox__btn lightbox__nav lightbox__nav--prev"
                onClick={(e) => { e.stopPropagation(); go(-1); }}
                aria-label="Précédente / Previous"
              >
                <Icon name="arrowLeft" />
              </button>
              <button
                type="button"
                className="lightbox__btn lightbox__nav lightbox__nav--next"
                onClick={(e) => { e.stopPropagation(); go(1); }}
                aria-label="Suivante / Next"
              >
                <Icon name="arrowRight" />
              </button>
            </>
          )}

          <AnimatePresence mode="wait">
            <motion.figure
              key={index}
              className="lightbox__figure"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.22 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={images[index].src} alt={images[index].alt} />
              {images.length > 1 && (
                <figcaption>
                  {index + 1} / {images.length}
                </figcaption>
              )}
            </motion.figure>
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
