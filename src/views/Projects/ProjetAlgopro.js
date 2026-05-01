import ProjectPage from '../../components/ProjectPage/ProjectPage';

export default function MonProjet() {
  return (
    <ProjectPage
      title="Algo pour les pro"
      subtitle="Ce projet a été réalisé en coopération avec un camarade à destination de notre promotion pour aider les personnes qui avaient encore du mal avec la compréhension de l'algorithmique."
      status="En cours"
      period="Feb 2026 - Aujourd'hui"
      tags={['Java', 'C', 'Algorithmie', 'Avancé']}
      description="L'algo pour les pros est un projet réalisé en collaboration avec un camarade. L'idée est de reprendre le principe de notre ancien repo. Ce nouveau projet va beaucoup plus loin que l'ancien ; nous y étudions notamment en profondeur certains sujets, algorithmes et méthodes"
      highlights={[
        'Algorithmie pro',
        'Manipulation de Java évolué',
        'Manipulation C évolué',
        'Réalisation de projet réelement formateurs',
        

      ]}
      links={[
        { label: 'GitHub', href: 'https://github.com/killex8569/canpai', primary: false },
      ]}
      prev={{ slug: 'figfactor', label: 'Figfactor' }}
      next={{slug: 'algo', label:'Algo en 27 exos'}}
    />
  );
}