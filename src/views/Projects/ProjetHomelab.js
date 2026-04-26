import ProjectPage from '../../components/ProjectPage/ProjectPage';

export default function MonProjet() {
  return (
    <ProjectPage
      title="Homelab"
      subtitle="Documentation sur mon homelab (généraliste), ces documentations représente mon évolution dans mon infrastructure, la mise en place d'outils etc. Toujours en cours, réalisation personnels puis rédaction de documentation dans un environnement contrôler"
      status="En cours"
      period="Mar 2024 - Aujourd'hui"
      tags={['Markdown', 'Firewalling', 'Proxmox', 'Réseau', 'Système', 'WDS', 'MDT', 'PXE', 'Ansible', 'Terraform', 'Supervision']}
      description="."
      highlights={[
        'Client UI (GKT',
        'Serveur',
        'Language C',
      ]}
      links={[
        { label: 'GitHub', href: 'https://github.com/killex8569/canpai', primary: false },
      ]}
      prev={{ slug: 'canpai', label: 'Canpai' }}
      next={{slug: 'figfactor', label:'Figfactor'}}
    />
  );
}