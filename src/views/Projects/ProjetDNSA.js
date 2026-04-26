import ProjectPage from '../../components/ProjectPage/ProjectPage';

export default function ProjetDNSA() {
  return (
    <ProjectPage
      title="DNSA"
      subtitle="Site vitrine développé avec un ami en React, présentant nos projets et nos compétences."
      status="Termine"
      period="Fév 2024 – Avr 2024"
      tags={['React', 'Portfolio commun', 'React Router', 'Responsive Design', 'CI/CD']}
      description={`Ce portfolio en commun a été conçu pour présenter notre parcours, nos compétences techniques
et nos projets de manière claire et professionnelle. nos avons opté pour React afin de
structurer l'interface en composants réutilisables, et mis l'accent sur une expérience
utilisateur fluide grâce à React Router et des transitions CSS soignées.`}
      highlights={[
        'Architecture SPA avec React Router v6 (navigation sans rechargement).',
        'Design system cohérent via des variables CSS globales.',
        'Composants réutilisables : Navbar, Timeline, CompetencesTable…',
        'Entièrement responsive — mobile, tablette, desktop.',
        'Déployé en continu via GitHub Pages / Vercel.',
      ]}
      links={[
        { label: 'Voir le site', href: 'https://donneznousunstageouunealternance.vercel.app/', primary: true },
        { label: 'Code source', href: 'https://github.com/killex8569/DonnezNousUnStageOuUneAlternance' },
      ]}
      prev={null}
      next={{ slug: 'canpai', label: 'Canpai' }}
    />
  );
}
