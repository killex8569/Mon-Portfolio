// Projets.jsx
import './projects.css';

const projects = [
  {
    name: 'Europeanize Yourself!',
    desc: 'Document listant les alternatives européennes aux outils digitaux américains et asiatiques.',
    url: 'https://github.com/valentinRyckaert/Europeanize-yourself',
    status: 'En cours',
    techs: ['Markdown', 'GitHub'],
  },
  {
    name: 'Kosmoz',
    desc: 'Application permettant de découvrir notre galaxie et l\'Univers.',
    url: 'https://github.com/killex8569/Kosmoz',
    status: 'En construction',
    techs: ['Vue.js', 'JavaScript', 'CSS'],
  },
  {
    name: 'Mon Portfolio',
    desc: 'Ce site que vous consultez actuellement.',
    url: 'https://github.com/killex8569/Mon-Portfolio',
    status: 'Terminé',
    techs: ['React', 'CSS'],
  },
  {
    name: 'Battleship',
    desc: 'Une bataille navale client-serveur réalisée en Java avec un camarade de classe.',
    url: 'https://github.com/killex8569/Battleship',
    status: 'En construction',
    techs: ['Java', 'Sockets'],
  },
  {
    name: "L'algo en 27 exos",
    desc: "Exercices pour apprendre l'algorithmie progressivement.",
    url: 'https://github.com/killex8569/algo-en-27-exos',
    status: 'En révision',
    techs: ['Python', 'Algorithmie'],
  },
  {
    name: 'DonnezNousUnStage',
    desc: 'Site réalisé avec un camarade pour aider à trouver une alternance ou un stage.',
    url: 'https://github.com/killex8569/DonnezNousUnStageOuUneAlternance',
    status: 'Terminé',
    techs: ['React', 'CSS'],
  },
  {
    name: 'Remake_Piment',
    desc: 'Projet utilisant différentes technologies pour créer une application de gestion complète d\'une caserne de pompier.',
    url: 'https://github.com/killex8569/Remake_Piment',
    status: 'En construction',
    techs: ['PHP', 'React', 'MVC', 'DAO'],
  },
];

const statusClass = {
  'Terminé':       'pg-badge--done',
  'En cours':      'pg-badge--wip',
  'En révision':   'pg-badge--review',
  'En construction': 'pg-badge--build',
};

function Projets() {
  return (
    <div className="pg-container">
      <h1 className="pg-title">Mes projets</h1>
      <div className="pg-grid">
        {projects.map((project, idx) => (
          <div className="pg-card" key={idx}>
            <div className="pg-card-header">
              <p className="pg-card-title">{project.name}</p>
              <span className={`pg-badge ${statusClass[project.status] || ''}`}>
                {project.status}
              </span>
            </div>
            <p className="pg-card-desc">{project.desc}</p>
            <hr className="pg-divider" />
            <div className="pg-techs">
              {project.techs.map((tech, i) => (
                <span className="pg-tech" key={i}>{tech}</span>
              ))}
            </div>
            <div className="pg-footer">
              <a className="pg-link" href={project.url} target="_blank" rel="noopener noreferrer">
                Voir sur GitHub →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projets;