import { Link } from 'react-router-dom';
import './ProjectPage.css';

/**
 * Template réutilisable pour une page projet.
 *
 * Props attendues :
 *   title        {string}   – Nom du projet
 *   subtitle     {string}   – Tagline courte
 *   status       {string}   – 'done' | 'in-progress' | 'planned'
 *   period       {string}   – Ex : "Jan 2024 – Mar 2024"
 *   tags         {string[]} – Techno / mots-clés
 *   description  {string}   – Paragraphe principal
 *   highlights   {string[]} – Points clés (liste)
 *   links        {{ label, href, icon? }[]} – Boutons CTA
 *   screenshots  {string[]} – URLs d'images (optionnel)
 *   prev         {{ slug, label }} – Projet précédent (optionnel)
 *   next         {{ slug, label }} – Projet suivant (optionnel)
 */
export default function ProjectPage({
  title,
  subtitle,
  status = 'done',
  period,
  tags = [],
  description,
  highlights = [],
  links = [],
  screenshots = [],
  prev,
  next,
}) {
  const STATUS_MAP = {
    'termine':         { label: 'Terminé',         className: 'status-badge--done'            },
    'en-cours':        { label: 'En cours',         className: 'status-badge--in-progress'     },
    'en-construction': { label: 'En construction',  className: 'status-badge--en-construction' },
    'en-revision':     { label: 'En révision',      className: 'status-badge--review'          },
  };
  
  const badge = STATUS_MAP[status] ?? STATUS_MAP['termine'];

  return (
    <main className="project-page">

      {/* ── Breadcrumb ── */}
      <div className="project-page__breadcrumb">
        <Link to="/">Accueil</Link>
        <span>›</span>
        <Link to="/projets">Projets</Link>
        <span>›</span>
        <span>{title}</span>
      </div>

      {/* ── Hero ── */}
      <header className="project-page__hero">
        <div className="project-page__hero-meta">
          <span className={`status-badge ${badge.className}`}>{badge.label}</span>
          {period && <span className="project-page__period">{period}</span>}
        </div>

        <h1 className="project-page__title">{title}</h1>
        {subtitle && <p className="project-page__subtitle">{subtitle}</p>}

        {tags.length > 0 && (
          <div className="project-page__tags">
            {tags.map((tag) => (
              <span key={tag} className="project-page__tag">{tag}</span>
            ))}
          </div>
        )}

        {links.length > 0 && (
          <div className="project-page__cta">
            {links.map(({ label, href, primary = false }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`project-page__btn ${primary ? 'project-page__btn--primary' : 'project-page__btn--outline'}`}
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* ── Screenshots ── */}
      {screenshots.length > 0 && (
        <section className="project-page__screenshots">
          {screenshots.map((src, i) => (
            <img key={i} src={src} alt={`Capture ${i + 1} – ${title}`} className="project-page__screenshot" />
          ))}
        </section>
      )}

      {/* ── Body ── */}
      <section className="project-page__body">

        {description && (
          <div className="project-page__block">
            <h2 className="project-page__section-title">À propos du projet</h2>
            <p className="project-page__description">{description}</p>
          </div>
        )}

        {highlights.length > 0 && (
          <div className="project-page__block">
            <h2 className="project-page__section-title">Points clés</h2>
            <ul className="project-page__highlights">
              {highlights.map((item, i) => (
                <li key={i} className="project-page__highlight-item">
                  <span className="project-page__highlight-bullet" aria-hidden="true">✦</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {/* ── Navigation prev / next ── */}
      {(prev || next) && (
        <nav className="project-page__nav-projects">
          {prev ? (
            <Link to={`/projets/${prev.slug}`} className="project-page__nav-link project-page__nav-link--prev">
              <span className="project-page__nav-arrow">←</span>
              <span>
                <small>Projet précédent</small>
                <strong>{prev.label}</strong>
              </span>
            </Link>
          ) : <div />}

          {next ? (
            <Link to={`/projets/${next.slug}`} className="project-page__nav-link project-page__nav-link--next">
              <span>
                <small>Projet suivant</small>
                <strong>{next.label}</strong>
              </span>
              <span className="project-page__nav-arrow">→</span>
            </Link>
          ) : <div />}
        </nav>
      )}

    </main>
  );
}