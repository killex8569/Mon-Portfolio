import ProjectPage from '../../components/ProjectPage/ProjectPage';

export default function MonProjet() {
  return (
    <ProjectPage
      title="Figfactor"
      subtitle="."
      status="Termine"
      period="Nov 2025 - Jan 2026"
      tags={['C', 'Client', 'Serveur']}
      description="."
      highlights={[
        'Client UI (GKT',
        'Serveur',
        'Language C',
      ]}
      links={[
        { label: 'GitHub', href: 'https://github.com/killex8569/canpai', primary: false },
      ]}
      prev={{ slug: 'homelab', label: 'HomeLab' }}
      next={{slug: 'algopourlespro', label:'Algo pour les pro'}}
    />
  );
}