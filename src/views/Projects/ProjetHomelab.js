import ProjectPage from '../../components/ProjectPage/ProjectPage';

export default function MonProjet() {
  return (
    <ProjectPage
      title="Homelab"
      subtitle="Documentation sur mon homelab (généraliste), ces documentations représente mon évolution dans mon infrastructure, la mise en place d'outils etc. Toujours en cours, réalisation personnels puis rédaction de documentation dans un environnement contrôler"
      status="En cours"
      period="Mar 2024 - Aujourd'hui"
      tags={['Markdown', 'Firewalling', 'Proxmox', 'Réseau', 'Système', 'WDS', 'MDT', 'PXE', 'Ansible', 'Terraform', 'Supervision']}
      description="Ce repo github reprend toutes les documentation que je suis en train de réaliser sur la mise en place d'une infrastructure personnel,
      il décrit les logiciels, leurs méthodes d'installation, d'utilisation, de sécurisation (bonnes pratiques), de configuration ainsi parfois de personnalisation.
      "
      highlights={[
        'Supervision (Zabbix Grafana)',
        'Alertes via webhook (Discord)',
        'Déploiement automatique (Ansible et terraform), anciennement des tests avec WDS et MDT',
        'Structure d\'un AD complet (GPO, Forêt, domaine, comptes, gestion utilisateur etc...) mis à disposition pour certains de mes camarades',
        'Serveur VPN avec restriction des accès selon le niveau de privilèges',
        'Partages réseau',
        'Mise en production de services (Wiki/Base de connaissances), Cloud privée, VPS',
        'Utilisation de technologies tels que Traefik, Nginx, Opnsense permettant de garantir un niveau de sécurité',
      ]}
      links={[
        { label: 'GitHub', href: 'https://github.com/killex8569/canpai', primary: false },
      ]}
      prev={{ slug: 'canpai', label: 'Canpai' }}
      next={{slug: 'figfactor', label:'Figfactor'}}
    />
  );
}