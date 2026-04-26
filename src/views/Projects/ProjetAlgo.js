import ProjectPage from '../../components/ProjectPage/ProjectPage';

export default function MonProjet() {
  return (
    <ProjectPage
      title="Algo En 27 exos"
      subtitle="Ce projet à été réaliser en coopération avec un camarade à destination de notre promotion pour aider des personnes qui avais encore du mal dans la compréhension de l'algorithmie."
      status="en-revision"
      period="Feb 2026 - Aujourd'hui"
      tags={['C', 'Java', 'Algorithmie']}
      description="Le repo de l'algo en 27 exos est une suite de documents qui suivent une progression linéaire basique, les premier exercices sont la pour nous introduire à l\algorithmie, les derniers seront utiles dans notre future métier en tant qu'ingénieur.'.
      C'est la première étapes qui fournis les pré-requis et les bases pour comprendre la programmation."
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