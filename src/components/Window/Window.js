import { useRef } from 'react';
import './Window.css';

/**
 * Fenêtre façon tiling WM (Hyprland / i3) : fine barre de titre en mono,
 * bordure dégradée animée quand la fenêtre est active ou survolée,
 * halo qui suit la souris.
 *
 *   as        : balise ou composant ('div' par défaut, ex. Link, 'button')
 *   title     : titre de la fenêtre (ex. "~/projets/dnsa")
 *   meta      : texte à droite de la barre (ex. "zsh")
 *   active    : bordure active en permanence
 *   bar       : false pour masquer la barre de titre
 */
export default function Window({
  as: Tag = 'div',
  title,
  meta,
  active = false,
  bar = true,
  className = '',
  bodyClassName = '',
  children,
  ...rest
}) {
  const ref = useRef(null);

  const onPointerMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    el.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  return (
    <Tag
      ref={ref}
      className={`win ${active ? 'win--active' : ''} ${className}`}
      onPointerMove={onPointerMove}
      {...rest}
    >
      {bar && (
        <span className="win__bar">
          <span className="win__tag" aria-hidden="true" />
          <span className="win__title">{title}</span>
          {meta && <span className="win__meta">{meta}</span>}
        </span>
      )}
      <span className={`win__body ${bodyClassName}`}>{children}</span>
    </Tag>
  );
}
