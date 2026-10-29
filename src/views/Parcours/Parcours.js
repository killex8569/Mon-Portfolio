import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { useLang } from '../../i18n/LanguageContext';
import { TIMELINE, asset } from '../../data/profil';
import Reveal from '../../components/Reveal/Reveal';
import Icon from '../../components/Icon/Icon';
import Window from '../../components/Window/Window';
import { Prompt } from '../../components/Term/Term';
import './Parcours.css';

const FILTERS = [
  { id: 'all', flag: '--all' },
  { id: 'work', flag: '--grep=work' },
  { id: 'education', flag: '--grep=education' },
];

/* Hash de commit court et stable, dérivé de l'identifiant */
function shortHash(id) {
  let h = 2166136261;
  for (const c of id) h = Math.imul(h ^ c.charCodeAt(0), 16777619);
  return (h >>> 0).toString(16).padStart(8, '0').slice(0, 7);
}

function Commit({ item, isHead }) {
  const { t, tr } = useLang();
  const points = tr(item.points) ?? [];
  const branch = item.type === 'work' ? 'work' : 'education';

  return (
    <motion.li
      layout
      className={`commit commit--${item.type}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      <span className={`commit__node ${item.current ? 'commit__node--current' : ''}`} aria-hidden="true">*</span>

      <Reveal animation="left" className="commit__wrap">
        <Window title={`commit ${shortHash(item.id)}`} meta={tr(item.date)} className="commit__win" active={isHead}>
          <span className="commit__body">
            <span className="commit__refs">
              <span className="c-amber">{shortHash(item.id)}</span>
              {isHead && <span className="commit__ref commit__ref--head">HEAD -&gt; main</span>}
              {item.current && !isHead && <span className="commit__ref">{t('journey.current')}</span>}
              <span className={`commit__ref commit__ref--${branch}`}>origin/{branch}</span>
            </span>

            <span className="commit__msg">{tr(item.title)}</span>

            <span className="commit__author">
              {item.logo && <img src={asset(item.logo)} alt="" loading="lazy" />}
              <span className="c-muted">Author:</span> <strong>{tr(item.org)}</strong>
              {item.place && <span className="c-dim"> · {item.place}</span>}
            </span>

            {points.length > 0 && (
              <span className="commit__diff">
                {points.map((p) => (
                  <span key={p}><span className="c-green">+</span> {p}</span>
                ))}
              </span>
            )}

            {item.slug && (
              <Link to={`/projets/${item.slug}`} className="link-arrow commit__link">
                git show {shortHash(item.id)}
                <Icon name="arrowRight" />
              </Link>
            )}
          </span>
        </Window>
      </Reveal>
    </motion.li>
  );
}

export default function Parcours() {
  const { t } = useLang();
  const [filter, setFilter] = useState('all');
  const listRef = useRef(null);

  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start 70%', 'end 60%'] });
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 25, mass: 0.3 });

  const items = TIMELINE.filter((e) => filter === 'all' || e.type === filter);
  const active = FILTERS.find((f) => f.id === filter);

  return (
    <div className="container">
      <header className="page-hero">
        <Prompt path="~/parcours" cmd="git log --graph --decorate" />
        <Reveal as="h1" className="page-hero__title" delay={80}>
          {t('journey.title')}
        </Reveal>
        <Reveal as="p" className="lead" delay={160}>
          {t('journey.intro')}
        </Reveal>

        <Reveal className="git-filters" delay={240}>
          <span className="git-filters__cmd">
            <span className="c-green">$</span> git log <span className="c-amber">{active.flag}</span>
          </span>
          <span className="git-filters__btns">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                type="button"
                className={`git-filters__btn ${filter === f.id ? 'is-active' : ''}`}
                onClick={() => setFilter(f.id)}
                aria-pressed={filter === f.id}
              >
                {filter === f.id && (
                  <motion.span layoutId="git-filter" className="git-filters__pill" transition={{ type: 'spring', stiffness: 420, damping: 34 }} />
                )}
                <span className="git-filters__label">{t(`journey.filters.${f.id}`)}</span>
              </button>
            ))}
          </span>
        </Reveal>
      </header>

      <div className="graph" ref={listRef}>
        <div className="graph__rail" aria-hidden="true">
          <motion.div className="graph__fill" style={{ scaleY: progress }} />
        </div>

        <motion.ol className="graph__list" layout>
          <AnimatePresence mode="popLayout" initial={false}>
            {items.map((item, i) => (
              <Commit key={item.id} item={item} isHead={i === 0} />
            ))}
          </AnimatePresence>
        </motion.ol>

        <p className="graph__root c-dim">
          <span className="graph__root-node">*</span> {t('journey.root')}
        </p>
      </div>
    </div>
  );
}
