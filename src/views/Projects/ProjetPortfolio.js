import ProjectPage from '../../components/ProjectPage/ProjectPage';

export default function MonProjet() {
  return (
    <ProjectPage
      title="Portfolio"
      subtitle="Ce portfolio est réaliser avec react."
      status="En cours"
      period="2024 - Aujourd'hui"
      tags={['Web', 'React']}
      description="Dans l'objectif d'apprendre une nouvelle technologie, ce portfolio est réaliser avec react, il utilise le CI/CD pour être déployer sur vercel. Ce site est responsible (compatible mobile, tablette et pc)"
      highlights={[
        'Architecture SPA avec React Router v6 (navigation sans rechargement).',
        'Design system cohérent via des variables CSS globales.',
        'Composants réutilisables : Navbar, Timeline, CompetencesTable…',
        'Entièrement responsive — mobile, tablette, desktop.',
        'Déployé en continu via GitHub Pages / Vercel (CI/CD).',
      ]}
      links={[
        { label: 'GitHub', href: 'https://github.com/killex8569/canpai', primary: true },
      ]}
      prev={{ slug: 'kosmoz', label: 'Kosmoz' }}
      next={{slug: 'loup-garou', label:'Loup garou'}}
    />
  );
}