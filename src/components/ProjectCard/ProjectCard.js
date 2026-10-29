import { Link } from 'react-router-dom';
import Window from '../Window/Window';
import Icon from '../Icon/Icon';
import { useLang } from '../../i18n/LanguageContext';
import './ProjectCard.css';

/* Statut façon démarrage systemd : [  OK  ] Terminé */
const STATUS_TAG = {
  termine: '  OK  ',
  'en-cours': ' WIP  ',
  'en-construction': 'BUILD ',
  'en-revision': ' REV  ',
};

export function StatusBadge({ status, className = '', compact = false }) {
  const { t } = useLang();
  return (
    <span className={`status-badge status-badge--${status} ${className}`}>
      <span className="status-badge__tag">[<b>{STATUS_TAG[status]}</b>]</span>
      {!compact && <span className="status-badge__label">{t(`status.${status}`)}</span>}
    </span>
  );
}

export function useTechLabel() {
  const { t } = useLang();
  const labels = t('techLabels');
  return (tech) => labels[tech] ?? tech;
}

export default function ProjectCard({ project, activeTechs = [] }) {
  const { t, tr } = useLang();
  const techLabel = useTechLabel();

  return (
    <Window
      as={Link}
      to={`/projets/${project.slug}`}
      className="project-card"
      title={`~/projets/${project.slug}`}
      meta={tr(project.period)}
    >
      <span className="project-card__body">
        <StatusBadge status={project.status} />

        <span className="project-card__title">{tr(project.name)}</span>
        <span className="project-card__desc">{tr(project.desc)}</span>

        <span className="project-card__techs">
          {project.techs.slice(0, 6).map((tech) => (
            <span key={tech} className={`chip ${activeTechs.includes(tech) ? 'chip--active' : ''}`}>
              {techLabel(tech)}
            </span>
          ))}
          {project.techs.length > 6 && <span className="chip">+{project.techs.length - 6}</span>}
        </span>

        <span className="project-card__footer">
          <span className="c-dim">$</span> cd {project.slug}
          <span className="project-card__cta">
            {t('common.viewProject')}
            <Icon name="arrowRight" />
          </span>
        </span>
      </span>
    </Window>
  );
}
