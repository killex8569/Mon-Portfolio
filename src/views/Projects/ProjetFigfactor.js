import ProjectPage from '../../components/ProjectPage/ProjectPage'; 
import { getProjet, getNavigation } from '../../data/projets';

export default function ProjetFigfactor() {
  const p = getProjet('figfactor');
  const { prev, next } = getNavigation('figfactor');

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