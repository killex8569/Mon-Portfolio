import ProjectPage from '../../components/ProjectPage/ProjectPage'; 
import { getProjet, getNavigation } from '../../data/projets';

export default function ProjetBattleShip() {
  const p = getProjet('battleship');
  const { prev, next } = getNavigation('battleship');

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
        { label: 'Code source',  href: p.url, primary: true },
      ]}
      prev={prev}
      next={next}
    />
  );
}