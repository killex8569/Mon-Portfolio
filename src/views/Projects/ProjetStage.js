import ProjectPage from '../../components/ProjectPage/ProjectPage';

export default function MonProjet() {
  return (
    <ProjectPage
      title="Stage première année"
      subtitle="Lors de ma première année de BTS SIO, j'ai eu l'opportunité de réaliser un stage de 5 semaines chez Advolis orfis."
      status="Termine"
      period="juin 2024 - juil 2024"
      tags={['Supervision', 'PHP']}
      description="Durant ce moi de stage, j'ai notamment fait de la veille informationnel sur les différents moyens de supervisions possibles, l'installation et la configuration d'une de ces solution.
      J'ai notamment eu l'occassion aussi de déployer des agents de cette solution via les GPO de l'AD."
      highlights={[
        'Supervision',
        'Création de documentation',
      ]}
      links={[
        { label: 'GitHub', href: 'https://github.com/killex8569/canpai', primary: false },
      ]}
      prev={{ slug: 'piment', label: 'Piment' }}
      next={{slug: 'stage2', label:'Stage deuxième année'}}
    />
  );
}