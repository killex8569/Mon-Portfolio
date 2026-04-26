import ProjectPage from '../../components/ProjectPage/ProjectPage';

export default function MonProjet() {
  return (
    <ProjectPage
      title="Algo pour les pro"
      subtitle="Ce projet à été réaliser en coopération avec un camarade à destination de notre promotion pour aider des personnes qui avais encore du mal dans la compréhension de l'algorithmie."
      status="en-revision"
      period="Feb 2026 - Aujourd'hui"
      tags={['C', 'Java', 'Algorithmie']}
      description="Projet réaliser à 4, l'objectif principal était de couvrir plusieurs notions, notament le client serveur en C (via socket, multithreading etc.),
      l'UI ainsi qu'un protocole de communication.
      Notre application utilise pour l'interface graphique GKT et nous permet de jouer au jeux des batonnets, le client peut choisir de retirer un ou plusieurs batonnets (entre 1 et 3)."
      highlights={[
        'Client UI (GKT',
        'Serveur',
        'Language C',
      ]}
      links={[
        { label: 'GitHub', href: 'https://github.com/killex8569/canpai', primary: false },
      ]}
      prev={{ slug: 'figfactor', label: 'Figfactor' }}
      next={{slug: 'algo', label:'Algo en 27 exo'}}
    />
  );
}