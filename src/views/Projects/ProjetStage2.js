import ProjectPage from '../../components/ProjectPage/ProjectPage';

export default function MonProjet() {
  return (
    <ProjectPage
      title="Stage deuxième année"
      subtitle="Lors de ma seocnde année de BTS SIO, j'ai eu l'opportunité de réaliser un stage de 8 semaines chez Advolis orfis."
      status="Termine"
      period="Mars 2025 - Avril 2025"
      tags={['Supervision', 'GPO', 'Agent/sonde', 'Déplacement chez clients', 'Documentation technique', 'cartographie du réseau']}
      description="Sur ce deuxième stage, j'ai pu réaliser beaucoup plus de missions que lors de ma première expériences, 
      j'ai eu la chance d'être invité chez les clients, début de réalistion du PCA PRA (qui contacter, les règlementations, les délais etc...), 
      réalisation de la cartographie réseau externe et interne de l'entreprise (avec les autres sites), réalisation de documentation techniques, 
      manipulation des règles de l'AD pour le déploiement de nouveaux logiciels ainsi que la migration sous la denrière version du logiciel de 
      ticketing."

      highlights={[
        'Supervision',
        'Création de documentation',
        'Déplacement chez clients',
        'Aides aux utilisateurs',
        'Cartographie du réseau interne et externe',
        'Migration vers une nouvelle version du logiciel de ticketing',
        'Début de rédaction du PCA PRA (Base et pré-requis concernant les réglmentations)',
      ]}
      prev={{ slug: 'stage1', label: 'Stage première année' }}
      next={{slug: '', label:''}}
    />
  );
}