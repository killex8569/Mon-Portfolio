import ProjectPage from '../../components/ProjectPage/ProjectPage';

export default function MonProjet() {
  return (
    <ProjectPage
      title="Canpai"
      subtitle="Ce projet à été réaliser en groupe, l'objectif était de créer une architecture client serveur en C."
      status="Termine"
      period="Nov 2025 - Jan 2026"
      tags={['C', 'Client', 'Serveur']}
      description="Projet réaliser à 4, l'objectif principal était de couvrir plusieurs notions, notament le client serveur en C (via socket, multithreading etc.),
      l'UI ainsi qu'un protocole de communication.
      Notre application utilise pour l'interface graphique GKT et nous permet de jouer au jeux des batonnets, le client peut choisir de retirer un ou plusieurs batonnets (entre 1 et 3)."
      highlights={[
        'Client UI (GKT)',
        'Serveur',
        'Protocole réseau',        
        'Language C',
      ]}
      links={[
        { label: 'GitHub', href: 'https://github.com/killex8569/canpai', primary: true },
      ]}
      prev={{ slug: 'dnsa', label: 'DNSA' }}
      next={{slug: 'homelab', label:'HomeLab'}}
    />
  );
}