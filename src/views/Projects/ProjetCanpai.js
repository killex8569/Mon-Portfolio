import ProjectPage from '../../components/ProjectPage/ProjectPage';

export default function MonProjet() {
  return (
    <ProjectPage
      title="Canpai"
      subtitle="Courte description."
      status="in-progress"
      period="Jan 2025 – aujourd'hui"
      tags={['React', 'Node.js']}
      description="Description longue du projet."
      highlights={[
        'Point clé 1',
        'Point clé 2',
      ]}
      links={[
        { label: 'GitHub', href: 'https://github.com/...', primary: true },
      ]}
      prev={{ slug: 'portfolio', label: 'Portfolio' }}
      next={null}
    />
  );
}