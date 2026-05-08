/**
 * ═══════════════════════════════════════════
 *  SOURCE UNIQUE DE VÉRITÉ — Projets
 *  Modifier ici = mis à jour partout :
 *    Navbar, Accueil, Projects, pages projet
 * ═══════════════════════════════════════════
 *
 * Statuts disponibles :
 *   'termine'          → vert
 *   'en-cours'         → orange
 *   'en-construction'  → bleu
 *   'en-revision'      → violet
 */
export const STATUS_LABELS = {
    'termine':         'Terminé',
    'en-cours':        'En cours',
    'en-construction': 'En construction',
    'en-revision':     'En révision',
  };

export const PROJECTS_DATA = [

    /* ── Perso ─────────────────────────────── */
    {
      slug:      'dnsa',
      name:      'DonnezNousUnStageOuUneAlternance (DNSA)',
      label:     'DNSA',                          // label court pour la Navbar
      desc:      'Site réalisé avec un camarade pour aider à trouver une alternance ou un stage.',
      status:    'termine',
      statusLabel: 'Terminé',
      description : "Dans le cadre de nos recherches d'alternance avec mon camarade, nous avons créer un site vitrine nous présentant (portfolio), nous l'avons déployer en utilisant vercel pour l'hébergement, github pour le développement. Nous utilisons du CI/CD pour le déploiement des dernières versions",                     // label affiché dans les badges/listes
      period:    'Fév 2024 – Avr 2024',
      url:       'https://github.com/killex8569/DonnezNousUnStageOuUneAlternance',
      siteUrl:   'https://donneznousunstageouunealternance.vercel.app/',
      tags:      ['React', 'Portfolio commun', 'React Router', 'Responsive Design', 'CI/CD'],
      techs:     ['3ème année', 'React', 'Web', 'CI/CD', 'Travail d\'équipe'],
      highlights: ["CI/CD", "React", "Gestion de projet", "Git workflow"],
      inNavbar:  true,
      inAccueil: true,
    },
    {
      slug:      'europeanize-yourself',
      name:      'Europeanize Yourself!',
      label:     'Europeanize Yourself',
      desc:      'Document listant les alternatives européennes aux outils digitaux américains et asiatiques.',
      status:    'en-cours',
      statusLabel: 'En cours',
      description: "L'objectif principal de ce projet est de mettre en avant les solutions logiciels européennes et open sources, .",
      period:    '2025 – aujourd\'hui',
      url:       'https://github.com/valentinRyckaert/Europeanize-yourself',
      tags:      ['Markdown', 'GitHub', 'Veille'],
      techs:     ['3ème année', 'Markdown', 'GitHub', 'Veille', 'Travail d\'équipe'],
      highlights: ["Veille sur les différentes technologies Européennes ou open sources", "Souverainté des données", "Open source"],
      inNavbar:  true,
      inAccueil: true,
    },
    {
      slug:      'portfolio',
      name:      'Mon Portfolio',
      label:     'Portfolio',
      desc:      'Ce site que vous consultez actuellement (nouvelle version).',
      status:    'termine',
      statusLabel: 'Terminé',
      description: "Dans l'objectif d'apprendre une nouvelle technologie, ce portfolio est réaliser avec react, il utilise le CI/CD pour être déployer sur vercel. Ce site est responsible (compatible mobile, tablette et pc)",
      period:    '2024 – aujourd\'hui',
      url:       'https://github.com/killex8569/Mon-Portfolio',
      tags:      ['React', 'CSS', 'React Router', 'Responsive Design'],
      techs:     ['3ème année', 'React', 'Web'],
      highlights: ["Architecture SPA avec React Router v6 (navigation sans rechargement)", "Design system cohérent via des variables CSS globales", "Composants réutilisables : Navbar, Timeline, CompetencesTable…", "Entièrement responsive — mobile, tablette, desktop", "Déployé en continu via GitHub Pages / Vercel (CI/CD)"],
      inNavbar:  true,
      inAccueil: true,
    },
    {
      slug:      'kosmoz',
      name:      'Kosmoz',
      label:     'Kosmoz',
      desc:      'Application permettant de découvrir notre galaxie et l\'Univers.',
      status:    'en-construction',
      statusLabel: 'En construction',
      description: "Kosmoz est une application web permettant de découvrir ou de redécouvrir la thématique de l'espace, avec des informations sur des systèmes solaires, des planètes, exoplanètes, des sondes, des découvertes majeurs ainsi que des informations plus globals.",
      period:    '2025 – aujourd\'hui',
      url:       'https://github.com/killex8569/Kosmoz',
      tags:      ['Vue.js', 'JavaScript', 'Web'],
      techs:     ['3ème année', 'Vue.js', 'JavaScript', 'Web', 'Travail d\'équipe'],
      highlights: ["Interface en Vue.js", "Open source", "Astronomie"],
      inNavbar:  true,
      inAccueil: true,
    },
    {
      slug:      'homelab',
      name:      'HomeLab',
      label:     'HomeLab',
      desc:      'Infrastructure complète (Système, réseau, développement) documentée.',
      status:    'en-cours',
      statusLabel: 'En cours',
      description: "Ce repo github reprend toutes les documentation que je suis en train de réaliser sur la mise en place d'une infrastructure personnel, il décrit les logiciels, leurs méthodes d'installation, d'utilisation, de sécurisation (bonnes pratiques), de configuration ainsi parfois de personnalisation.",
      period:    '2024 – aujourd\'hui',
      url:       'https://github.com/killex8569/Documentation-Homelab',
      tags:      ['Proxmox', 'Réseau', 'Système', 'Ansible', 'Terraform'],
      techs:     ['3ème année', 'Markdown', 'Firewalling', 'Proxmox', 'Réseau', 'Système'],
      highlights: ["Supervision (Zabbix Grafana)", "Alertes via webhook (Discord et teams)", "Déploiement automatique (Ansible et terraform), anciennement des tests avec WDS et MDT", "Structure d'un AD complet (GPO, Forêt, domaine, comptes, gestion utilisateur etc...) mis à disposition pour certains de mes camarades", "Serveur VPN avec restriction des accès selon le niveau de privilèges", "Partages réseau", "Mise en production de services", "Cloud privée, VPS", "Utilisation de technologies tels que Traefik, Nginx, Opnsense permettant de garantir un niveau de sécurité"],
      inNavbar:  true,
      inAccueil: false,
    },
    {
      slug:      'battleship',
      name:      'Battleship',
      label:     'Battleship',
      desc:      'Une bataille navale client-serveur réalisée en Java avec un camarade de classe.',
      status:    'en-cours',
      statusLabel: 'En cours',
      description: "Kosmoz est une application web permettant de découvrir ou de redécouvrir la thématique de l'espace, avec des informations sur des systèmes solaires, des planètes, exoplanètes, des sondes, des découvertes majeurs ainsi que des informations plus globals.",
      period:    '2025',
      url:       'https://github.com/killex8569/Battleship',
      tags:      ['Java', 'Socket', 'LibGDX'],
      techs:     ['3ème année', 'Java', 'Socket', 'client', 'serveur', 'LibGDX', 'Travail d\'équipe'],
      highlights: ["Interface en Vue.js", "Open source", "Git workflow", "Astronomie"],
      inNavbar:  true,
      inAccueil: true,
    },
    {
      slug:      'algo',
      name:      "L'algo en 27 exos",
      label:     'Algo 27 exos',
      desc:      "Exercices pour apprendre l'algorithmie progressivement.",
      status:    'en-revision',
      statusLabel: 'En révision',
      description: "Le repo de l'algo en 27 exos est une suite de documents qui suivent une progression linéaire basique. Les premiers exercices sont là pour nous introduire à l'algorithmie ; les derniers seront utiles dans notre futur métier d'ingénieur. C'est la première étape qui fournit les prérequis et les bases pour comprendre la programmation",
      period:    '2024',
      url:       'https://github.com/killex8569/algo-en-27-exos',
      tags:      ['Python', 'Java', 'Algorithmie'],
      techs:     ['3ème année', 'Python', 'Algorithmie', 'Java', 'Travail d\'équipe'],
      highlights: ["Markdown avec expliquation des points techniques", "Apprentissage de l'algorithmie", "Language Java", "Introduction à la POO", "Language C"],
      inNavbar:  false,
      inAccueil: true,
    },
    {
      slug:      'algopourlespro',
      name:      "L'algo pour les pro",
      label:     "L'algo pour les pros",
      desc:      "Repo public pour apprendre l'algorithmie de zéro jusqu'aux algorithmes complexes.",
      status:    'en-cours',
      statusLabel: 'En cours',
      description: "L'algo pour les pros est un projet réalisé en collaboration avec un camarade. L'idée est de reprendre le principe de notre ancien repo. Ce nouveau projet va beaucoup plus loin que l'ancien ; nous y étudions notamment en profondeur certains sujets, algorithmes et méthodes",
      period:    '2025 – aujourd\'hui',
      url:       'https://github.com/killex8569/L-algo-pour-les-pro',
      tags:      ['C', 'Java', 'Algorithmie'],
      techs:     ['3ème année', 'C', 'Algorithmie', 'Java', 'Travail d\'équipe'],
      highlights: ["Algorithmie pro", "Manipulation de Java évolué", "Manipulation C évolué", "Réalisation de projet réelement formateurs"],
      inNavbar:  true,
      inAccueil: true,
    },
    {
      slug:      'piment',
      name:      'Remake_Piment',
      label:     'Piment',
      desc:      'Application de gestion complète d\'une caserne de pompier.',
      status:    'en-construction',
      statusLabel: "En construction",
      description: "Kosmoz est une application web permettant de découvrir ou de redécouvrir la thématique de l'espace, avec des informations sur des systèmes solaires, des planètes, exoplanètes, des sondes, des découvertes majeurs ainsi que des informations plus globals",
      period:    '2025',
      url:       'https://github.com/killex8569/Remake_Piment',
      tags:      ['PHP', 'React', 'MVC', 'DAO'],
      techs:     ['3ème année', 'PHP', 'React', 'MVC', 'DAO'],
      highlights: ["Architecture MVC", "PHP", "BDD"],
      inNavbar:  true,
      inAccueil: false,
    },
    {
      slug:      'loup-garou',
      name:      'Loup Garou',
      label:     'Loup Garou',
      desc:      'Remake du célèbre jeu du loup garou en Java (CLI + en ligne).',
      status:    'en-construction',
      period:    '2025',
      url:       'https://github.com/killex8569/Loup-garou',
      tags:      ['Java', 'client', 'serveur', 'CLI'],
      techs:     ['3ème année', 'Java', 'client', 'serveur', 'CLI'],
      inNavbar:  false,
      inAccueil: false,
    },
  
    /* ── Scolaires ──────────────────────────── */
    {
      slug:      'canpai',
      name:      'TP Canpai',
      label:     'Canpai',
      desc:      'Projet client-serveur avec interface graphique GTK, réalisé en C.',
      status:    'termine',
      statusLabel: "Terminé",
      description: "Kosmoz est une application web permettant de découvrir ou de redécouvrir la thématique de l'espace, avec des informations sur des systèmes solaires, des planètes, exoplanètes, des sondes, des découvertes majeurs ainsi que des informations plus globals",
      period:    '2025',
      tags:      ['C', 'Socket', 'client', 'serveur'],
      techs:     ['3ème année', 'C', 'Socket', 'client', 'serveur', 'Travail d\'équipe'],
      highlights: ["GTK", "Client serveur en C", "Langage C", "Gestion de projet"],
      scolaire:  true,
      inNavbar:  true,
      inAccueil: false,
    },
    {
      slug:      'ansible',
      name:      'TP Ansible',
      label:     'Ansible',
      desc:      'Manipulation et découverte d\'Ansible.',
      status:    'termine',
      statusLabel: "Terminé",
      description: "Ce TP avais pour but de nouvs faire découvrir Ansible, comment créer des playbook, installer des paquets, partager des fichiers, préparer des machines, déployer des scripts, etc. Réaliser dans le cadre de notre module d'administration Linux lors de notre Bac+3",
      period:    '2025',
      tags:      ['Ansible', 'Script', 'Déploiement'],
      techs:     ['3ème année', 'Anible', 'Script', 'Déploiement'],
      highlights: ["Ansible", "Découverte playbook", "Déploiement", "Script"],
      scolaire:  true,
      inAccueil: false,
      
    },
    {
      slug:      'cms',
      name:      'TP CMS',
      label:     'CMS',
      desc:      'Utilisation de Wordpress avec référencement SEO permettant le développement de la présence en ligne.',
      status:    'termine',
      statusLabel: "Terminé",
      description: "Ce TP réaliser lors de notre première année de BTS SIO nous à permis de mettre en production sur internet un site Wordpress que nous avions réaliser pendant plusieurs mois, l'idée était de créer et de mettre en 'vente' un produit ou service fictif (avec indication que ce site était juste pou un TP), puis de développer la présence en ligne de notre entreprise fictive, tout cela en passant par le référencement SEO, l'optimisation des textes, des mots clés, des sous-titres, des images, facilité la lecture de notre site par des crawler. A la fin de notre TP, le site devais apparaitre parmis les premiers résultat de google lors de sa recherche",
      period:    '2025',
      tags:      ['SEO', 'Wordpress', 'Référencement'],
      techs:     ['1er année', 'Wordpress', 'SEO'],
      highlights: ["SEO", "Découverte du référencement et optimisation", "Wordpress", "Déploiement"],
      scolaire:  true,
      inAccueil: false,
    },
    {
      slug:      'figfactor',
      name:      'FigFactor',
      label:     'FigFactor',
      desc:      'Un projet à l\'envergure d\'une classe devant simuler et géré une entreprise avec plusieurs sites (4).',
      status:    'termine',
      statusLabel: "Terminé",
      description: "Ce projet divisait la classe en 4 groupe de 5 personnes, comprenant plusieurs métier (Chef de projet, techiciens, expert, commercial et DSI). L'objectif derrière ce projet était de nous préparer à communiquer avec les suppérieurs, à nous organiser et nous répartir le travail, ainsi les problématiques de travail et gestion d'équipe on été bénéfique et nécéssaire au bon déroulement du projet",
      period:    '2024',
      tags:      ['Cisco', 'Management', 'Réseau', 'Developpement Web'],
      techs:     ['1er année', 'Cisco', 'Management', 'Réseau', 'Developpement Web'],
      highlights: ['Cisco', 'Management', 'Réseau', 'Developpement Web', 'Réunion multiple réunions'],
      scolaire:  true,
      inAccueil: false,
    },
    {
      slug:      'ocs',
      name:      'OCS',
      label:     'Ocs',
      desc:      'Le TP OCS (Surnomé le "TP de la mort" par les anciennes promo) était un tp que nous devions réaliser sur OCS, GLPI en utilisant plusieurs machines.',
      status:    'termine',
      statusLabel: "Terminé",
      description: "Le tp OCS était réaprti sur plusieurs semaines et en équipe, nous devions nous occuper de faire fonctionner OCS. Pour cela, nous devions utiliser obligatoirement 3 machines, une Windows 7, un MacOS ainsi qu'un Debian. Au final, nous avions avec mon équipe réussi à terminer le tp et à réaliser ces éléments.",
      period:    '2024',
      tags:      ['OCS', 'Management', 'Réseau', 'GLPI', 'MacOs', 'Linux', 'Windows'],
      techs:     ['2ème année', 'OCS', 'Management', 'Réseau', 'GLPI', 'MacOs', 'Linux', 'Windows'],
      highlights: ['OCS', 'Management', 'Réseau', 'GLPI', 'MacOs', 'Linux', 'Windows'],
      scolaire:  true,
      inAccueil: false,
    },
    {
      slug:      'glpi',
      name:      'Glpi',
      label:     'Glpi',
      desc:      'TP sur GLPI nous apprenant à l\'installer, l\'utiliser et l\'optimiser. Découverte et mise en pratique de cette outils de ticketing',
      status:    'termine',
      statusLabel: "Terminé",
      description: "Le TP GLPI nous indiquait ce que nous devions mettre en place, il était demander de réaliser des tâches avancer sur ce dernier comme sa liaison avec un autre moyen de communication pour créer des ticket (mails, teams, discord, slack, etc.). Nous étions charger de créer une arborescence, des permissions, de le liée avec LDAP, etc.",
      period:    '2024',
      tags:      ['GLPI', 'Documentation', 'PHP'],
      techs:     ['2ème année', 'GLPI', 'Documentation', 'PHP'],
      highlights: ['GLPI', 'Documentation', 'PHP (Installation, sécurisation, modules/plugin)'],
      scolaire:  true,
      inAccueil: false,
    },



    /*Projet PRO */
    {
        slug: 'stage1',
        name: 'Stage 1ère année',
        label: 'Stage 1A',
        desc: '',
        status: 'termine',
        statusLabel: 'Terminé',
        url: '',
        tags: [],
        techs: ['1er année', 'Supervision', 'Documentation'],
        pro: true,
        inNavbar: false,
        inAccueil: false,
      },
      {
        slug: 'stage2',
        name: 'Stage 2ème année',
        label: 'Stage 2A',
        desc: 'Mes tâches réalisées en stage de 2ème année de BTS.',
        status: 'termine',
        statusLabel: 'Terminé',
        url: '',
        tags: [],
        techs: ['2ème année', 'Supervision', 'Documentation'],
        pro: true,      
        inNavbar: false,
        inAccueil: false,
      },
      {
        slug: 'stage3',
        name: 'Stage 3ème année',
        label: 'Stage 3A',
        desc: 'Mes tâches réalisées en stage de 3ème année en ICS.',
        status: 'termine',
        statusLabel: 'Terminé',
        url: '',
        tags: [],
        techs: ['3ème année'],
        pro: true,      
        inNavbar: false,
        inAccueil: false,
      },
    
  ];
  


  export const navbarProjects = PROJECTS_DATA.filter(p => p.inNavbar);
  
  export const accueilProjects = PROJECTS_DATA.filter(p => p.inAccueil);
  
  export const projetsPerso = PROJECTS_DATA.filter(p => !p.scolaire && !p.pro); /*tout sauf scolaire et pro */
  
  export const projetsScolaires = PROJECTS_DATA.filter(p => p.scolaire);

  export const projetsPro = PROJECTS_DATA.filter(p => p.pro === true);

  
  
  /* Récup un projet par son slug (pour les pages individuelles) */
  export const getProjet = (slug) => PROJECTS_DATA.find(p => p.slug === slug);
  
  /* Récup prev / next pour la navigation entre pages projet */
  export const getNavigation = (slug) => {
    const idx = PROJECTS_DATA.findIndex(p => p.slug === slug);
    return {
      prev: idx > 0 ? PROJECTS_DATA[idx - 1] : null,
      next: idx < PROJECTS_DATA.length - 1 ? PROJECTS_DATA[idx + 1] : null,
    };
  };