// Projets.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './projects.css';

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
              {project.status}
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

const projects = [
  {
    name: 'Europeanize Yourself!',
    desc: 'Document listant les alternatives européennes aux outils digitaux américains et asiatiques.',
    url: 'https://github.com/valentinRyckaert/Europeanize-yourself',
    slug : 'Europeanize-yourself',
    status: 'En cours',
    techs: ['3ème année', 'Markdown', 'GitHub', 'Veille'],
  },
  {
    name: 'Kosmoz',
    desc: 'Application permettant de découvrir notre galaxie et l\'Univers.',
    url: 'https://github.com/killex8569/Kosmoz',
    status: 'En construction',
    techs: ['3ème année', 'Vue.js', 'JavaScript', 'Web'],
  },
  {
    name: 'Mon Portfolio',
    desc: 'Ce site que vous consultez actuellement.',
    url: 'https://github.com/killex8569/Mon-Portfolio',
    status: 'Terminé',
    techs: ['3ème année', 'React', 'Web'],
  },
  {
    name: 'Battleship',
    desc: 'Une bataille navale client-serveur réalisée en Java avec un camarade de classe.',
    url: 'https://github.com/killex8569/Battleship',
    status: 'En construction',
    techs: ['3ème année', 'Java', 'Socket', 'client', 'serveur', 'LibGDX'],
  },
  {
    name: "L'algo en 27 exos",
    desc: "Exercices pour apprendre l'algorithmie progressivement. Réaliser avec l'aide d'un camarade",
    url: 'https://github.com/killex8569/algo-en-27-exos',
    status: 'En révision',
    techs: ['3ème année', 'Python', 'Algorithmie', 'Java'],
  },
  {
    name: "L'algo pour les pro",
    desc: "Exercices pour apprendre l'algorithmie professionel. Réaliser avec l'aide d'un camarade",
    url: 'https://github.com/killex8569/L-algo-pour-les-pro',
    slug: 'algopourlespro',
    status: 'En construction',
    techs: ['3ème année', 'C', 'Algorithmie', 'Java'],
  },
  {
    name: 'DonnezNousUnStage (DNSA)',
    desc: 'Site réalisé avec un camarade pour aider à trouver une alternance ou un stage.',
    url: 'https://github.com/killex8569/DonnezNousUnStageOuUneAlternance',
    slug: 'dnsa',
    status: 'Terminé',
    techs: ['3ème année', 'React', 'Web', 'CI/CD'],
  },
  {
    name: 'Remake_Piment',
    desc: 'Projet utilisant différentes technologies pour créer une application de gestion complète d\'une caserne de pompier.',
    url: 'https://github.com/killex8569/Remake_Piment',
    status: 'En construction',
    techs: ['3ème année', 'PHP', 'React', 'MVC', 'DAO'],
  },
  {
    name: 'HomeLab',
    desc: 'Projet perso, l\'objectif était de mettre en place une infrastructure complète (Système, réseau, developpement). Ce repo reprend toutes les documentations que j\'ai créer',
    url: 'https://github.com/killex8569/Documentation-Homelab',
    status: 'En cours',
    techs: ['3ème année', 'Markdown', 'Firewalling', 'Proxmox', 'Réseau', 'Système', 'WDS', 'MDT', 'PXE', 'Ansible', 'Terraform', 'Supervision'],
  },
  {
    name: 'Loup garou',
    desc: 'remake du clélèbre jeu du loup garou, fait en Java, permet de jouer dans le CLI et en ligne (architecture client, serveur)²',
    url: 'https://github.com/killex8569/Loup-garou',
    status: 'En construction',
    techs: ['3ème année', 'Java', 'client', 'serveur', 'CLI'],
  },
];

const projectSco = [
  {
    name: 'TP Canpai',
    desc: 'Canpai est un projet client serveur du jeu des batonets. Réaliser en C',
    url: 'https://github.com/killex8569/canpai/',
    slug: 'canpai',
    status: 'Terminé',
    techs: ['3ème année', 'C', 'Socket', 'client', 'serveur'],
  },
  {
    name: 'Ansible',
    desc: 'TP ansible réaliser lors de mon cycle d\'ingénieur (3ème année)',
    slug: 'ansible',
    status: 'Terminé',
    techs: ['3ème année', 'Ansible'],
  },
  {
    name: 'TP GLPI',
    desc: 'Lors de la réalisation de ce TP, nous avions une consigne qui nous demandait de suivre le fil du TP. La documentation est par conséquent un peu plus scolaire que les autres.',
    slug :'glpi',
    status: 'Terminé',
    techs: ['2ème année', 'GLPI', 'GitHub'],
  },
  {
    name: 'figfactor',
    desc: 'Projet de travail en commun à l\'echelle de 20 personnes répartie en 4 secteurs devans se conformer entre eux.',
    slug: 'figfactor',
    status: 'Terminé',
    techs: ['1er année', 'Management', 'Cisco', 'Visio/Draw.io', 'Schéma Réseau', 'Réunion'],
  },
  {
    name: 'Developpement de la présence en ligne',
    desc: 'Tp réaliser en BTS SIO. L\'objectif était de créer et mettre en place une entreprise fictive (site, référencement, produit etc...) ',
    url: 'https://github.com/killex8569/Mon-Portfolio',
    status: 'Terminé',
    techs: ['1er année', 'SEO', 'Wordpress', 'E-mailling', 'Image de marque'],
  },
  {
    name: 'OCS',
    desc: 'TP réaliser en BTS SIO 2ème année. Ce TP consistant en l\'utilisation de GLPI et OCS.',
    url: 'https://github.com/killex8569/Battleship',
    status: 'Terminé',
    techs: ['2ème année', 'OCS', 'glpi', 'Docker', 'Réseau', 'Système'],
  },
  {
    name: "Veille informationnelle",
    desc: "Réaliser en deuxième année de BTS SIO, nous avions dû réaliser une veille informationnelle sur le sujet de notre choix.",
    url: 'https://github.com/killex8569/algo-en-27-exos',
    status: 'Terminé',
    techs: ['2ème année', 'Veille', 'Documentation', 'Présentation'],
  },
  
  {
    name: 'PPE 1',
    desc: 'Mon premier PPE (Projet Personnalisé Encadré) s’est construit autour du déploiement d’OS WDS-MDT.',
    url: 'https://github.com/killex8569/DonnezNousUnStageOuUneAlternance',
    status: 'Terminé',
    techs: ['2ème année', 'AD', 'WDS', 'MDT', 'BDD', 'SQL', 'PXE'],
  },
  {
    name: 'PPE 2',
    desc: 'Mon deuxième PPE s’oriente autour de la mise en place de la supervision de Zabbix et Grafana.',
    url: 'https://github.com/killex8569/Remake_Piment',
    status: 'Terminé',
    techs: ['2ème année', 'Supervision', 'Agents/Sondes', 'Réseau'],
  },

];

const projectPro = [
  {
    name: 'Stage 1er année',
    desc: '',
    url: '',
    status: 'Terminé',
    techs: ['1er année', 'Supervision', 'Documentation'],
  },
  {
    name: 'Stage 2ème année',
    desc: 'Mes tâches réaliser en stage de 2ème année de BTS',
    url: '',
    status: 'Terminé',
    techs: ['2ème année', 'Supervision', 'Documentation'],
  },
  

];

const statusClass = {
  'Terminé':       'pg-badge--done',
  'En cours':      'pg-badge--wip',
  'En révision':   'pg-badge--review',
  'En construction': 'pg-badge--build',
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
      <h4 className="pg-title">réalisés sur mon temps libre</h4>
      <ProjectGrid projects={projects} statusClass={statusClass} activeTechs={activeTechs} />

      <br /><br /><br />

      <h1 className="pg-title">Mes projets scolaires</h1>
      <h4 className="pg-title">réalisés sur mon temps scolaire</h4>
      <ProjectGrid projects={projectSco} statusClass={statusClass} activeTechs={activeTechs} />

      <br /><br /><br />

      <h1 className="pg-title">Mes projets en entreprise</h1>
      <h4 className="pg-title">réalisés sur mon temps de stage ou d'alternance</h4>
      <ProjectGrid projects={projectPro} statusClass={statusClass} activeTechs={activeTechs} />

    </div>
  );
}

export default Projets;