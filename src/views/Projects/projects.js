// Projets.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './projects.css';
// Ligne 5 — remplace par :
import { projetsPerso as projects, projetsScolaires as projectSco, projetsPro, STATUS_LABELS } from '../../data/projets';

function getAllTechs(arr) {
  return [...new Set(arr.flatMap(p => p.techs))].sort();
}

function ProjectGrid({ projects, statusClass, activeTechs }) {
  
  const filtered = activeTechs.length === 0
    ? projects
    : projects.filter(p => activeTechs.every(t => p.techs.includes(t)));

  if (filtered.length === 0) {
    return <p className="pg-empty">Aucun projet ne correspond à cette sélection.</p>;
  }

  return (
    <div className="pg-grid">
      {filtered.map((project, idx) => (
        <div className="pg-card" key={idx}>
          <div className="pg-card-header">
            <p className="pg-card-title">{project.name}</p>
            <span className={`pg-badge ${statusClass[project.status] || ''}`}>
            {STATUS_LABELS[project.status] || project.status}
            </span>
          </div>
          <p className="pg-card-desc">{project.desc}</p>
          <hr className="pg-divider" />
          <div className="pg-techs">
            {project.techs.map((tech, i) => (
              <span className={`pg-tech ${activeTechs.includes(tech) ? 'pg-tech--active' : ''}`} key={i}>
                {tech}
              </span>
            ))}
          </div>
          <div className="pg-footer">
            {project.slug
              ? <Link to={`/projets/${project.slug}`} className="pg-link">Voir le projet →</Link>
              : <a className="pg-link" href={project.url} target="_blank" rel="noopener noreferrer">Voir sur GitHub →</a>
            }
          </div>
        </div>
      ))}
    </div>
  );
}


const statusClass = {
  'termine': 'pg-badge--done',
  'en-cours': 'pg-badge--wip',
  'en-revision': 'pg-badge--review',
  'en-construction': 'pg-badge--build',
};

function Projets() {
  const [activeTechs, setActiveTechs] = useState([]);
  const [search, setSearch] = useState('');

  const allTechs = getAllTechs([...projects, ...projectSco]);
  const visibleTechs = allTechs.filter(t => t.toLowerCase().includes(search.toLowerCase()));

  const toggleTech = (tech) => {
    setActiveTechs(prev =>
      prev.includes(tech) ? prev.filter(t => t !== tech) : [...prev, tech]
    );
  };

  const clearFilters = () => {
    setActiveTechs([]);
    setSearch('');
  };

  
  return (
    <div className="pg-container">

      <div className="pg-filter-box">
        <div className="pg-filter-header">
          <span className="pg-filter-label">Filtrer par technologie</span>
          {activeTechs.length > 0 && (
            <button className="pg-filter-clear" onClick={clearFilters}>
              ✕ Effacer ({activeTechs.length})
            </button>
          )}
        </div>
        <input
          className="pg-filter-search"
          type="text"
          placeholder="Rechercher une techno..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <div className="pg-filter-techs">
          {visibleTechs.map((tech, i) => (
            <button
              key={i}
              className={`pg-filter-btn ${activeTechs.includes(tech) ? 'pg-filter-btn--active' : ''}`}
              onClick={() => toggleTech(tech)}
            >
              {tech}
            </button>
          ))}
        </div>
      </div>

      <h1 className="pg-title">Mes projets perso</h1>
      <h4 className="pg-title">Réalisés sur mon temps libre</h4>
      <ProjectGrid projects={projects} statusClass={statusClass} activeTechs={activeTechs} />

      <br /><br /><br />

      <h1 className="pg-title">Mes projets scolaires</h1>
      <h4 className="pg-title">Réalisés sur mon temps scolaire</h4>
      <ProjectGrid projects={projectSco} statusClass={statusClass} activeTechs={activeTechs} />

      <br /><br /><br />

      <h1 className="pg-title">Mes projets en entreprise</h1>
      <h4 className="pg-title">Réalisés sur mon temps de stage ou d'alternance</h4>
      <ProjectGrid projects={projetsPro} statusClass={statusClass} activeTechs={activeTechs} />

    </div>
  );
}

export default Projets;