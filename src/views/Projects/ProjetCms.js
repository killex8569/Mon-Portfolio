import ProjectPage from '../../components/ProjectPage/ProjectPage';

export default function MonProjet() {
  return (
    <ProjectPage
      title="CMS"
      subtitle="."
      status="En construction"
      period="Nov 2026 - Aujourd'hui"
      tags={['Web', 'Vue.js', 'Astronomie']}
      description="Kosmoz est une application web permettant de découvrir ou de redécouvrir la thématique de l'espace, avec des informations sur des systèmes solaires, des planètes, exoplanètes, des sondes, des découvertes majeurs ainsi que des informations plus globals."
      highlights={[
        'Interface en Vue.js',
        'Open source',
        'Astronomie',
      ]}
      links={[
        { label: 'GitHub', href: 'https://github.com/killex8569/canpai', primary: false },
      ]}
      prev={{ slug: 'algopourlespro', label: 'Algo pour les pro' }}
      next={{slug: 'europeanize-yourself', label:'Europeanize Yourself'}}
    />
  );
}