import ProjectPage from '../../components/ProjectPage/ProjectPage';

export default function MonProjet() {
  return (
    <ProjectPage
      title="Europeanize Yourself"
      subtitle="Ce projet à est en cours de réalisation en coopération avec un camarade et présente les alternatives (open source ou propriétaire) de solution logicielles européennes.
      Ce document est réaliser et maintenu dans l'objectif et limiter / stopper notre dépendance aux produit américains et asiatiques en présentant des solutions robustes."
      status="en-revision"
      period="Feb 2026 - Aujourd'hui"
      tags={['Markdown', 'GitHub', 'veille']}
      description="Projet réaliser à 4, l'objectif principal était de couvrir plusieurs notions, notament le client serveur en C (via socket, multithreading etc.),
      l'UI ainsi qu'un protocole de communication.
      Notre application utilise pour l'interface graphique GKT et nous permet de jouer au jeux des batonnets, le client peut choisir de retirer un ou plusieurs batonnets (entre 1 et 3)."
      highlights={[
        'Veille sur les différentes technologies Européennes ou open sources',
        'Souverainté des données',
        'Open sources',
      ]}
      links={[
        { label: 'GitHub', href: 'https://github.com/killex8569/canpai', primary: false },
      ]}
      prev={{ slug: 'algo', label: 'Algo en 27 exos' }}
      next={{slug: '', label:''}}
    />
  );
}