import ProjectPage from '../../components/ProjectPage/ProjectPage';

export default function MonProjet() {
  return (
    <ProjectPage
      title="Algo En 27 exos"
      subtitle="Ce projet a été réalisé en coopération avec un camarade à destination de notre promotion pour aider les personnes qui avaient encore du mal avec la compréhension de l'algorithmie."
      status="en-revision"
      period="Feb 2026 - Aujourd'hui"
      tags={['C', 'Java', 'Algorithmie']}
      description="Le repo de l'algo en 27 exos est une suite de documents qui suivent une progression linéaire basique. 
      Les premiers exercices sont là pour nous introduire à l'algorithmie ; les derniers seront utiles dans notre futur métier d'ingénieur. 
      C'est la première étape qui fournit les prérequis et les bases pour comprendre la programmation."
      highlights={[
        'Markdown avec expliquation des points techniques',
        'Apprentissage de l\'algorithmie',
        'Language Java',
        'Introduction à la POO',
        'Language C',
      ]}
      links={[
        { label: 'GitHub', href: 'https://github.com/killex8569/canpai', primary: false },
      ]}
      prev={{ slug: 'algopourlespro', label: 'Algo pour les pro' }}
      next={{slug: 'europeanize-yourself', label:'Europeanize Yourself'}}
    />
  );
}