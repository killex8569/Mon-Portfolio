import ProjectPage from '../../components/ProjectPage/ProjectPage';

export default function MonProjet() {
  return (
    <ProjectPage
      title="Europeanize Yourself"
      subtitle="Ce projet à est en cours de réalisation en coopération avec un camarade et présente les alternatives (open source ou propriétaire) de solution logicielles européennes.
      Ce document est réaliser et maintenu dans l'objectif et limiter / stopper notre dépendance aux produit américains et asiatiques en présentant des solutions robustes."
      status="En cours"
      period="Feb 2026 - Aujourd'hui"
      tags={['Markdown', 'GitHub', 'veille']}
      description="L'objectif principal de ce projet est de mettre en avant les solutions logiciels européennes et open sources, ."
      highlights={[
        'Veille sur les différentes technologies Européennes ou open sources',
        'Souverainté des données',
        'Open sources',
      ]}
      links={[
        { label: 'GitHub', href: 'https://github.com/killex8569/canpai', primary: false },
      ]}
      prev={{ slug: 'algo', label: 'Algo en 27 exos' }}
      next={{slug: 'kosmoz', label:'Kosmoz'}}
    />
  );
}