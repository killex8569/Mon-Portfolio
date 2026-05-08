import ProjectPage from '../../components/ProjectPage/ProjectPage'; 
import { getProjet, getNavigation } from '../../data/projets';

export default function ProjetAnsible() {
  const p = getProjet('ansible');
  const { prev, next } = getNavigation('ansible');

  return (
    <ProjectPage
      title={p.name}
      subtitle={p.desc}
      status={p.status}
      period={p.period}
      tags={p.tags}
      description={p.description}
      highlights={p.highlights}
      prev={prev}
      next={next}
    />
  );
}