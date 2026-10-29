import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLang } from '../../i18n/LanguageContext';
import { PROJECTS_DATA, STATUS_ORDER } from '../../data/projets';
import Reveal from '../../components/Reveal/Reveal';
import Icon from '../../components/Icon/Icon';
import Window from '../../components/Window/Window';
import { Prompt } from '../../components/Term/Term';
import ProjectCard, { StatusBadge, useTechLabel } from '../../components/ProjectCard/ProjectCard';
import './projects.css';

const CATEGORIES = ['perso', 'scolaire', 'pro'];
const VISIBLE_TECHS = 18;

function ProjectGrid({ projects, activeTechs }) {
  const { t } = useLang();

  if (projects.length === 0) {
    return (
      <motion.p className="pg-empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        {t('projects.empty')}
      </motion.p>
    );
  }

  return (
    <motion.div className="pg-grid" layout>
      <AnimatePresence mode="popLayout">
        {projects.map((project, i) => (
          <motion.div
            key={project.slug}
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <Reveal delay={(i % 3) * 80} className="pg-grid__cell">
              <ProjectCard project={project} activeTechs={activeTechs} />
            </Reveal>
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Projets() {
  const { t } = useLang();
  const techLabel = useTechLabel();
  const [activeTechs, setActiveTechs] = useState([]);
  const [activeStatus, setActiveStatus] = useState(null);
  const [search, setSearch] = useState('');
  const [expanded, setExpanded] = useState(false);

  // Technos triées par fréquence d'utilisation, puis par ordre alphabétique
  const allTechs = useMemo(() => {
    const counts = new Map();
    PROJECTS_DATA.forEach((p) => p.techs.forEach((tech) => counts.set(tech, (counts.get(tech) || 0) + 1)));
    return [...counts.entries()]
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .map(([tech]) => tech);
  }, []);

  const query = search.trim().toLowerCase();
  const matchingTechs = allTechs.filter(
    (tech) => tech.toLowerCase().includes(query) || techLabel(tech).toLowerCase().includes(query)
  );
  // Les technos actives restent toujours visibles
  const shownTechs =
    expanded || query
      ? matchingTechs
      : [...new Set([...activeTechs, ...matchingTechs])].slice(0, Math.max(VISIBLE_TECHS, activeTechs.length));

  const toggleTech = (tech) =>
    setActiveTechs((prev) => (prev.includes(tech) ? prev.filter((x) => x !== tech) : [...prev, tech]));

  const clearFilters = () => {
    setActiveTechs([]);
    setActiveStatus(null);
    setSearch('');
  };

  const filtered = PROJECTS_DATA.filter(
    (p) => activeTechs.every((tech) => p.techs.includes(tech)) && (!activeStatus || p.status === activeStatus)
  );
  const filterCount = activeTechs.length + (activeStatus ? 1 : 0);

  // Commande « équivalente » aux filtres, affichée dans la barre de la fenêtre
  const grepCmd = [
    'ls ~/projets',
    activeStatus && `grep --status=${activeStatus}`,
    ...activeTechs.map((tech) => `grep "${techLabel(tech)}"`),
  ]
    .filter(Boolean)
    .join(' | ');

  return (
    <div className="container">
      <header className="page-hero">
        <Prompt path="~/projets" cmd="ls -la" />
        <Reveal as="h1" className="page-hero__title" delay={80}>
          {t('projects.title')}
        </Reveal>
        <Reveal as="p" className="lead" delay={160}>
          {t('projects.intro')}
        </Reveal>
      </header>

      {/* ── Filtres ── */}
      <Reveal delay={200}>
        <Window title={grepCmd} meta={`${filtered.length}/${PROJECTS_DATA.length}`} className="pg-filter" active={filterCount > 0}>
          <span className="pg-filter__body">
            <span className="pg-filter__top">
              <label className="pg-filter__search">
                <span className="c-green">$</span>
                <span className="c-muted">grep</span>
                <input
                  type="text"
                  placeholder={t('projects.search')}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  spellCheck={false}
                />
                <Icon name="search" />
              </label>

              <span className="pg-filter__status" role="group" aria-label={t('projects.statusLabel')}>
                {STATUS_ORDER.map((s) => (
                  <button
                    key={s}
                    type="button"
                    className={`pg-status ${activeStatus === s ? 'is-active' : ''}`}
                    onClick={() => setActiveStatus((cur) => (cur === s ? null : s))}
                    aria-pressed={activeStatus === s}
                  >
                    <StatusBadge status={s} />
                  </button>
                ))}
              </span>
            </span>

            <span className="pg-filter__head">
              <span className="comment">{t('projects.filterLabel')}</span>
              <AnimatePresence>
                {filterCount > 0 && (
                  <motion.button
                    type="button"
                    className="pg-filter__clear"
                    onClick={clearFilters}
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 8 }}
                  >
                    <Icon name="close" />
                    {t('projects.clear')} ({filterCount})
                  </motion.button>
                )}
              </AnimatePresence>
            </span>

            <motion.span className="pg-filter__techs" layout>
              {shownTechs.map((tech) => (
                <motion.button
                  layout="position"
                  key={tech}
                  type="button"
                  className={`pg-tech ${activeTechs.includes(tech) ? 'is-active' : ''}`}
                  onClick={() => toggleTech(tech)}
                  aria-pressed={activeTechs.includes(tech)}
                >
                  {activeTechs.includes(tech) ? <Icon name="check" /> : <span className="c-dim">+</span>}
                  {techLabel(tech)}
                </motion.button>
              ))}
              {!query && matchingTechs.length > VISIBLE_TECHS && (
                <button type="button" className="pg-tech pg-tech--more" onClick={() => setExpanded((e) => !e)}>
                  {expanded ? '−' : `+${matchingTechs.length - shownTechs.length}`}
                </button>
              )}
            </motion.span>
          </span>
        </Window>
      </Reveal>

      {/* ── Sections ── */}
      {CATEGORIES.map((cat) => {
        const list = filtered.filter((p) => p.category === cat);
        return (
          <section className="pg-section" key={cat}>
            <Reveal className="pg-section__head">
              <div>
                <p className="pg-section__ls">
                  <span className="c-dim">drwxr-xr-x</span> <span className="c-blue">{cat}/</span>
                </p>
                <h2>{t(`projects.sections.${cat}.title`)}</h2>
                <p className="pg-section__sub">{t(`projects.sections.${cat}.subtitle`)}</p>
              </div>
              <span className="pg-section__count">total {list.length}</span>
            </Reveal>
            <ProjectGrid projects={list} activeTechs={activeTechs} />
          </section>
        );
      })}
    </div>
  );
}
