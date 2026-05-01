import ProjectPage from '../../components/ProjectPage/ProjectPage';

export default function MonProjet() {
  return (
    <ProjectPage
      title="Figfactor"
      subtitle="Un projet à l'envergure d'une classe devant simuler et géré une entreprise avec plusieurs sites (4)."
      status="Termine"
      period="Jan 2024 - Juin 2024"
      tags={['Cisco', 'Management', 'Réseau', 'Developpement Web']}
      description="Ce projet divisait la classe en 4 groupe de 5 personnes, comprenant plusieurs métier (Chef de projet, techiciens, expert, commercial et DSI). 
      L'objectif derrière ce projet était de nous préparer à communiquer avec les suppérieurs, à nous organiser et nous répartir le travail, 
      ainsi les problématiques de travail et gestion d'équipe on été bénéfique et nécéssaire au bon déroulement du projet. "
      highlights={[
        'Travail d\'équipe',
        'Management et entretiens régulier',
        'Tâches techniques',
        'Schéma réseau',
        '',
      ]}
      links={[
        { label: 'GitHub', href: 'https://github.com/killex8569/canpai', primary: false },
      ]}
      prev={{ slug: 'homelab', label: 'HomeLab' }}
      next={{slug: 'algopourlespro', label:'Algo pour les pro'}}
    />
  );
}