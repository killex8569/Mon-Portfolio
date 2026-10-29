import { Fragment, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLang } from '../../i18n/LanguageContext';
import { getNavigation, getProjet } from '../../data/projets';
import { asset } from '../../data/profil';
import Reveal from '../../components/Reveal/Reveal';
import Icon from '../../components/Icon/Icon';
import Lightbox from '../../components/Lightbox/Lightbox';
import Window from '../../components/Window/Window';
import { Prompt } from '../../components/Term/Term';
import { StatusBadge, useTechLabel } from '../../components/ProjectCard/ProjectCard';
import NotFound from '../not_found/not_found';
import './ProjectDetail.css';

const EASE = [0.22, 0.61, 0.36, 1];

export default function ProjectDetail() {
  const { slug } = useParams();
  const { t, tr } = useLang();
  const techLabel = useTechLabel();
  const [lightbox, setLightbox] = useState(null);

  const project = getProjet(slug);
  if (!project) return <NotFound />;

  const { prev, next } = getNavigation(project.slug);
  const highlights = tr(project.highlights) ?? [];
  const screenshots = (project.screenshots ?? []).map((src, i) => ({
    src: asset(src),
    alt: `${tr(project.name)} — ${i + 1}`,
    name: src.split('/').pop(),
  }));

  const links = [
    project.siteUrl && { label: t('common.viewSite'), href: project.siteUrl, icon: 'external', primary: true },
    project.url && { label: t('common.viewCode'), href: project.url, icon: 'github', primary: !project.siteUrl },
  ].filter(Boolean);

  const fade = (delay) => ({
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: EASE },
  });

  const crumbs = [
    { label: '~', to: '/' },
    { label: 'projets', to: '/projets' },
    { label: project.slug },
  ];

  return (
    <article className="pd container">
      {/* ── Chemin (fil d'Ariane) ── */}
      <motion.nav className="pd__crumbs" aria-label="Breadcrumb" {...fade(0)}>
        <span className="c-green">alexandre@portfolio</span>
        <span className="c-dim">:</span>
        {crumbs.map((c, i) => (
          <Fragment key={c.label}>
            {i > 0 && <span className="c-dim">/</span>}
            {c.to ? <Link to={c.to}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
          </Fragment>
        ))}
        <span className="c-dim">$</span>
      </motion.nav>

      {/* ── Hero ── */}
      <header className="pd__hero">
        <motion.div className="pd__meta" {...fade(0.08)}>
          <StatusBadge status={project.status} />
          <span className="c-dim">·</span>
          <span className="pd__category">{t(`category.${project.category}`)}</span>
        </motion.div>

        <h1 className="pd__title">
          <motion.span initial={{ y: '105%' }} animate={{ y: 0 }} transition={{ duration: 0.8, delay: 0.12, ease: EASE }}>
            {tr(project.name)}
          </motion.span>
        </h1>

        <motion.p className="pd__subtitle" {...fade(0.28)}>
          {tr(project.desc)}
        </motion.p>

        {links.length > 0 && (
          <motion.div className="pd__links" {...fade(0.4)}>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn ${l.primary ? 'btn--primary' : 'btn--ghost'}`}
              >
                <Icon name={l.icon} />
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </header>

      {/* ── Corps ── */}
      <div className="pd__layout">
        <div className="pd__main">
          <Reveal>
            <Window active title={`~/projets/${project.slug}/README.md`} meta="markdown" className="pd__readme">
              <span className="md">
                <Prompt path={`~/projets/${project.slug}`} cmd="cat README.md" className="md__prompt" />

                {project.description && (
                  <>
                    <span className="md__h2"><span className="md__hash">##</span> {t('project.about')}</span>
                    <span className="md__p">{tr(project.description)}</span>
                  </>
                )}

                {highlights.length > 0 && (
                  <>
                    <span className="md__h2"><span className="md__hash">##</span> {t('project.highlights')}</span>
                    <span className="md__list">
                      {highlights.map((h, i) => (
                        <Reveal as="span" key={h} delay={i * 60} animation="left" className="md__item">
                          <span className="md__check">- [<span className="c-green">x</span>]</span>
                          <span>{h}</span>
                        </Reveal>
                      ))}
                    </span>
                  </>
                )}
              </span>
            </Window>
          </Reveal>

          {screenshots.length > 0 && (
            <Reveal>
              <Window title={`~/projets/${project.slug}/screenshots/`} meta={`${screenshots.length} files`} className="pd__gallery-win">
                <span className="pd__gallery-body">
                  <Prompt path={`~/projets/${project.slug}`} cmd="ls screenshots/" />
                  <span className="pd__gallery">
                    {screenshots.map((img, i) => (
                      <button key={img.src} type="button" className="pd__shot" onClick={() => setLightbox(i)}>
                        <span className="pd__shot-img">
                          <img src={img.src} alt={img.alt} loading="lazy" />
                        </span>
                        <span className="pd__shot-name">{img.name}</span>
                      </button>
                    ))}
                  </span>
                </span>
              </Window>
            </Reveal>
          )}
        </div>

        {/* ── stat ── */}
        <Reveal as="aside" className="pd__aside" animation="left" delay={120}>
          <Window title={`stat ${project.slug}`} meta="info">
            <span className="pd__card">
              <span className="pd__facts">
                {project.period && (
                  <span className="pd__fact"><span className="c-blue">{t('project.period')}</span><span>{tr(project.period)}</span></span>
                )}
                <span className="pd__fact"><span className="c-blue">{t('project.status')}</span><StatusBadge status={project.status} /></span>
                <span className="pd__fact"><span className="c-blue">{t('project.type')}</span><span>{t(`category.${project.category}`)}</span></span>
              </span>

              <span className="comment">{t('project.stack')}</span>
              <span className="pd__techs">
                {project.techs.map((tech) => (
                  <span key={tech} className="chip">{techLabel(tech)}</span>
                ))}
              </span>
            </span>
          </Window>
        </Reveal>
      </div>

      {/* ── Navigation ── */}
      <nav className="pd__nav">
        {prev ? (
          <Link to={`/projets/${prev.slug}`} className="pd__nav-link">
            <Icon name="arrowLeft" />
            <span>
              <small><span className="c-green">$</span> cd ../{prev.slug}</small>
              <strong>{tr(prev.name)}</strong>
            </span>
          </Link>
        ) : <span />}

        <Link to="/projets" className="pd__nav-all" title={t('project.back')}>
          cd ..
        </Link>

        {next ? (
          <Link to={`/projets/${next.slug}`} className="pd__nav-link pd__nav-link--next">
            <span>
              <small><span className="c-green">$</span> cd ../{next.slug}</small>
              <strong>{tr(next.name)}</strong>
            </span>
            <Icon name="arrowRight" />
          </Link>
        ) : <span />}
      </nav>

      <Lightbox images={screenshots} index={lightbox} onChange={setLightbox} />
    </article>
  );
}
