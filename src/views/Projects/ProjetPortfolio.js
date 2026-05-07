import ProjectPage from '../../components/ProjectPage/ProjectPage'; 
import { getProjet, getNavigation } from '../../data/projets';

export default function ProjetPortfolio() {
  const p = getProjet('portfolio');
  const { prev, next } = getNavigation('portfolio');

  return (
    <ProjectPage
      title={p.name}
      subtitle={p.desc}
      status={p.status}
      period={p.period}
      tags={p.tags}
      description={p.description}
      highlights={p.highlights}
      links={[
        { label: 'Voir le site', href: p.siteUrl, primary: true },
        { label: 'Code source',  href: p.url },
      ]}
      prev={prev}
      next={next}
    />
  );
}