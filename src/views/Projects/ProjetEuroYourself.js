import ProjectPage from '../../components/ProjectPage/ProjectPage';

export default function MonProjet() {
  return (
    <ProjectPage
      title="Europeanize Yourself"
      subtitle="Ce projet à été réaliser en coopération d'un camarade et présente les alternative (open source ou propriétaire) ."
      status="en-revision"
      period="Nov 2025 - Jan 2026"
      tags={['C', 'Client', 'Serveur']}
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
      prev={{ slug: 'homelab', label: 'HomeLab' }}
      next={{slug: '', label:''}}
    />
  );
}