/**
 * ═══════════════════════════════════════════
 *  SOURCE UNIQUE DE VÉRITÉ — Projets
 *  Modifier ici = mis à jour partout :
 *    Navbar, Accueil, Projets, pages projet (/projets/:slug)
 * ═══════════════════════════════════════════
 *
 * Ajouter un projet = ajouter un objet dans PROJECTS_DATA. C'est tout :
 * la route /projets/<slug> est générée automatiquement.
 *
 * Champs :
 *   slug        identifiant d'URL (unique)
 *   name        nom affiché (string ou { fr, en })
 *   label       nom court (menu déroulant de la Navbar)
 *   category    'perso' | 'scolaire' | 'pro'
 *   status      'termine' | 'en-cours' | 'en-construction' | 'en-revision'
 *   period      { fr, en } ou string
 *   desc        résumé court (cartes)                       { fr, en }
 *   description texte long (page projet)                    { fr, en }
 *   highlights  points clés                                 { fr: [], en: [] }
 *   techs       technos / mots-clés (filtres + badges). Les libellés français
 *               sont traduits via translations.en.techLabels
 *   url         dépôt GitHub (optionnel)
 *   siteUrl     site en ligne (optionnel)
 *   screenshots captures dans /public (optionnel)
 *   inNavbar    affiché dans le menu déroulant « Projets »
 *   featured    mis en avant sur l'accueil
 */

export const STATUS_ORDER = ['termine', 'en-cours', 'en-revision', 'en-construction'];

export const PROJECTS_DATA = [
  /* ── Perso ─────────────────────────────── */
  {
    slug: 'dnsa',
    name: 'DonnezNousUnStageOuUneAlternance',
    label: 'DNSA',
    category: 'perso',
    status: 'termine',
    period: { fr: 'Fév 2024 – Avr 2024', en: 'Feb 2024 – Apr 2024' },
    desc: {
      fr: 'Site vitrine réalisé avec un camarade pour trouver une alternance ou un stage.',
      en: 'Showcase website built with a classmate to land an apprenticeship or internship.',
    },
    description: {
      fr: "Dans le cadre de nos recherches d'alternance, nous avons créé avec un camarade un site vitrine qui nous présente (portfolio commun). Le développement se fait sur GitHub, l'hébergement sur Vercel, et chaque nouvelle version est déployée automatiquement grâce à une chaîne CI/CD.",
      en: 'While looking for an apprenticeship, a classmate and I built a showcase website presenting both of us (a shared portfolio). Development happens on GitHub, hosting on Vercel, and every new version is deployed automatically through a CI/CD pipeline.',
    },
    highlights: {
      fr: ['Chaîne CI/CD avec déploiement continu sur Vercel', 'Application React avec React Router', 'Gestion de projet à deux', 'Workflow Git (branches, pull requests)'],
      en: ['CI/CD pipeline with continuous deployment on Vercel', 'React app with React Router', 'Two-person project management', 'Git workflow (branches, pull requests)'],
    },
    techs: ['React', 'React Router', 'CI/CD', 'Vercel', "Travail d'équipe", '3ème année'],
    url: 'https://github.com/killex8569/DonnezNousUnStageOuUneAlternance',
    siteUrl: 'https://donneznousunstageouunealternance.vercel.app/',
    inNavbar: true,
    featured: true,
  },
  {
    slug: 'homelab',
    name: 'HomeLab',
    label: 'HomeLab',
    category: 'perso',
    status: 'en-cours',
    period: { fr: '2024 – aujourd’hui', en: '2024 – present' },
    desc: {
      fr: 'Infrastructure personnelle complète (système, réseau, développement), entièrement documentée.',
      en: 'A complete personal infrastructure (systems, networking, development), fully documented.',
    },
    description: {
      fr: "Ce dépôt rassemble toute la documentation de mon infrastructure personnelle. Pour chaque logiciel, il décrit l'installation, l'utilisation, la configuration, la sécurisation (bonnes pratiques) et parfois la personnalisation. C'est mon terrain de jeu pour tester en conditions réelles ce que j'apprends en cours et en entreprise.",
      en: 'This repository gathers all the documentation of my personal infrastructure. For each piece of software it covers installation, usage, configuration, hardening (best practices) and sometimes customization. It is my playground to test, in real conditions, what I learn at school and at work.',
    },
    highlights: {
      fr: [
        'Supervision avec Zabbix et Grafana',
        'Alertes par webhook (Discord et Teams)',
        'Déploiement automatisé avec Ansible et Terraform (anciennement WDS et MDT)',
        "Active Directory complet (GPO, forêt, domaine, comptes) mis à disposition de camarades",
        "Serveur VPN avec restriction des accès selon le niveau de privilèges",
        'Partages réseau, cloud privé et VPS',
        'Traefik, Nginx et OPNsense pour sécuriser les services exposés',
      ],
      en: [
        'Monitoring with Zabbix and Grafana',
        'Webhook alerts (Discord and Teams)',
        'Automated deployment with Ansible and Terraform (formerly WDS and MDT)',
        'Full Active Directory (GPOs, forest, domain, accounts) shared with classmates',
        'VPN server with privilege-based access restrictions',
        'Network shares, private cloud and VPS',
        'Traefik, Nginx and OPNsense to secure exposed services',
      ],
    },
    techs: ['Proxmox', 'Ansible', 'Terraform', 'Zabbix', 'OPNsense', 'Traefik', 'Réseau', 'Système', 'Markdown'],
    url: 'https://github.com/killex8569/Documentation-Homelab',
    inNavbar: true,
    featured: true,
  },
  {
    slug: 'portfolio',
    name: { fr: 'Mon portfolio', en: 'My portfolio' },
    label: 'Portfolio',
    category: 'perso',
    status: 'en-cours',
    period: { fr: '2024 – aujourd’hui', en: '2024 – present' },
    desc: {
      fr: 'Le site que vous êtes en train de consulter, entièrement repensé.',
      en: "The website you're browsing right now, completely redesigned.",
    },
    description: {
      fr: "Ce portfolio est né de l'envie d'apprendre React. Il est déployé en continu sur Vercel et fonctionne sur mobile, tablette et ordinateur. Cette nouvelle version adopte un thème Linux : fenêtres façon tiling WM, terminal interactif (avec de vraies commandes), animations fluides et site bilingue.",
      en: 'This portfolio started as a way to learn React. It is continuously deployed on Vercel and works on mobile, tablet and desktop. This new version goes full Linux: tiling-WM windows, an interactive terminal (with real commands), smooth animations and a bilingual site.',
    },
    highlights: {
      fr: [
        'SPA React avec React Router (navigation sans rechargement)',
        'Terminal interactif : système de fichiers virtuel, historique, complétion Tab',
        'Animations et transitions de pages avec Framer Motion',
        'Site bilingue français / anglais',
        'Données centralisées : un projet = une entrée dans un fichier',
        'Déploiement continu (CI/CD) sur Vercel',
      ],
      en: [
        'React SPA with React Router (no page reloads)',
        'Interactive terminal: virtual filesystem, history, Tab completion',
        'Animations and page transitions with Framer Motion',
        'Bilingual site, French and English',
        'Centralized data: one project = one entry in a file',
        'Continuous deployment (CI/CD) on Vercel',
      ],
    },
    techs: ['React', 'Framer Motion', 'CI/CD', 'Vercel'],
    url: 'https://github.com/killex8569/Mon-Portfolio',
    inNavbar: true,
    featured: false,
  },
  {
    slug: 'galileo',
    name: 'Galiléo',
    label: 'Galiléo',
    category: 'perso',
    status: 'en-cours',
    period: '2026',
    desc: {
      fr: 'Coupe de France de robotique avec Galiléo, le club de robotique de CPE Lyon.',
      en: 'French robotics cup with Galiléo, the CPE Lyon robotics club.',
    },
    description: {
      fr: "Participation à la Coupe de France de robotique avec le club Galiléo. La compétition se déroule à La Roche-sur-Yon, sur plusieurs jours. J'y ai manipulé du C et du C++ ainsi que tout ce qui touche à l'électronique, et nous avons utilisé ROS 2 en équipe, une plateforme de développement pour la robotique.",
      en: 'Taking part in the French robotics cup with the Galiléo club. The competition takes place over several days in La Roche-sur-Yon. I worked with C and C++ and everything related to electronics, and as a team we used ROS 2, a development platform for robotics.',
    },
    highlights: {
      fr: ['Communication entre cartes ESP32', 'Protocole ESP-NOW', 'C et C++ embarqués', 'Middleware ROS 2', 'Compétition nationale en équipe'],
      en: ['Communication between ESP32 boards', 'ESP-NOW protocol', 'Embedded C and C++', 'ROS 2 middleware', 'National team competition'],
    },
    techs: ['C', 'C++', 'ESP32', 'ROS2', 'Robotique', 'Compétition', "Travail d'équipe"],
    inNavbar: true,
    featured: true,
  },
  {
    slug: 'kosmoz',
    name: 'Kosmoz',
    label: 'Kosmoz',
    category: 'perso',
    status: 'en-construction',
    period: { fr: '2025 – aujourd’hui', en: '2025 – present' },
    desc: {
      fr: "Application web pour découvrir notre galaxie et l'Univers.",
      en: 'A web app to explore our galaxy and the Universe.',
    },
    description: {
      fr: "Kosmoz est une application web pour découvrir ou redécouvrir l'espace : systèmes solaires, planètes, exoplanètes, sondes, grandes découvertes et informations plus générales sur l'Univers.",
      en: 'Kosmoz is a web app to discover (or rediscover) space: solar systems, planets, exoplanets, probes, major discoveries and more general facts about the Universe.',
    },
    highlights: {
      fr: ['Interface en Vue.js', 'Projet open source', 'Vulgarisation astronomique', "Développement en équipe"],
      en: ['Vue.js interface', 'Open source project', 'Astronomy for everyone', 'Team development'],
    },
    techs: ['Vue.js', 'JavaScript', "Travail d'équipe", '3ème année'],
    url: 'https://github.com/killex8569/Kosmoz',
    inNavbar: true,
    featured: false,
  },
  {
    slug: 'battleship',
    name: 'Battleship',
    label: 'Battleship',
    category: 'perso',
    status: 'en-cours',
    period: '2025',
    desc: {
      fr: 'Bataille navale client-serveur en Java, réalisée avec un camarade.',
      en: 'Client-server battleship game in Java, built with a classmate.',
    },
    description: {
      fr: "Bataille navale en réseau développée en Java avec un camarade de classe. Un serveur gère les parties et synchronise les joueurs via des sockets, tandis que le client affiche le jeu grâce au framework LibGDX.",
      en: 'A networked battleship game developed in Java with a classmate. A server manages games and keeps players in sync over sockets, while the client renders the game with the LibGDX framework.',
    },
    highlights: {
      fr: ['Architecture client-serveur', 'Communication par sockets', 'Interface graphique avec LibGDX', 'Travail en binôme avec Git'],
      en: ['Client-server architecture', 'Socket communication', 'Graphical interface with LibGDX', 'Pair work with Git'],
    },
    techs: ['Java', 'Socket', 'LibGDX', 'Client-serveur', "Travail d'équipe", '3ème année'],
    url: 'https://github.com/killex8569/Battleship',
    inNavbar: true,
    featured: false,
  },
  {
    slug: 'loup-garou',
    name: { fr: 'Loup-Garou', en: 'Werewolf' },
    label: 'Loup-Garou',
    category: 'perso',
    status: 'en-construction',
    period: '2025',
    desc: {
      fr: 'Le célèbre jeu du Loup-Garou en Java, en ligne de commande et en réseau.',
      en: 'The famous Werewolf party game in Java, command-line and online.',
    },
    description: {
      fr: "Remake client-serveur en Java du jeu du Loup-Garou. Le client permet au joueur de recevoir un rôle et de jouer avec. Le serveur gère la partie : qui joue, dans quel ordre, quels joueurs sont encore en vie et quels objets ils possèdent (potions, etc.).",
      en: 'A client-server remake of the Werewolf game in Java. The client lets players receive a role and play it. The server runs the game: who plays, in which order, which players are still alive and which items they hold (potions, etc.).',
    },
    highlights: {
      fr: ['Client-serveur en Java', 'Moteur de jeu côté serveur', 'Interface en ligne de commande'],
      en: ['Client-server in Java', 'Server-side game engine', 'Command-line interface'],
    },
    techs: ['Java', 'Client-serveur', 'CLI', '3ème année'],
    url: 'https://github.com/killex8569/Loup-garou',
    inNavbar: false,
    featured: false,
  },
  {
    slug: 'algopourlespro',
    name: "L'algo pour les pros",
    label: "L'algo pour les pros",
    category: 'perso',
    status: 'en-cours',
    period: { fr: '2025 – aujourd’hui', en: '2025 – present' },
    desc: {
      fr: "Dépôt public pour apprendre l'algorithmie, des bases jusqu'aux algorithmes complexes.",
      en: 'A public repository to learn algorithms, from the basics to complex ones.',
    },
    description: {
      fr: "Un projet mené avec un camarade, dans la continuité de notre précédent dépôt. Celui-ci va beaucoup plus loin : nous y étudions en profondeur certains sujets, algorithmes et méthodes.",
      en: 'A project run with a classmate, following up on our previous repository. This one goes much further: we study some topics, algorithms and methods in depth.',
    },
    highlights: {
      fr: ['Algorithmes avancés', 'Java approfondi', 'C approfondi', 'Exercices vraiment formateurs'],
      en: ['Advanced algorithms', 'In-depth Java', 'In-depth C', 'Hands-on exercises'],
    },
    techs: ['C', 'Java', 'Algorithmie', "Travail d'équipe", '3ème année'],
    url: 'https://github.com/killex8569/L-algo-pour-les-pro',
    inNavbar: true,
    featured: false,
  },
  {
    slug: 'algo',
    name: "L'algo en 27 exos",
    label: 'Algo 27 exos',
    category: 'perso',
    status: 'en-revision',
    period: '2024',
    desc: {
      fr: "27 exercices pour apprendre l'algorithmie progressivement.",
      en: '27 exercises to learn algorithms step by step.',
    },
    description: {
      fr: "Une suite d'exercices à la progression linéaire. Les premiers introduisent l'algorithmie, les derniers seront utiles dans notre futur métier d'ingénieur. C'est la première marche pour acquérir les bases de la programmation.",
      en: 'A series of exercises with a linear progression. The first ones introduce algorithms, the last ones will be useful in our future engineering jobs. It is the first step to learn the basics of programming.',
    },
    highlights: {
      fr: ['Explications techniques en Markdown', "Initiation à l'algorithmie", 'Java et introduction à la POO', 'Langage C'],
      en: ['Technical explanations in Markdown', 'Introduction to algorithms', 'Java and an introduction to OOP', 'C language'],
    },
    techs: ['Python', 'Java', 'Algorithmie', "Travail d'équipe", '3ème année'],
    url: 'https://github.com/killex8569/algo-en-27-exos',
    inNavbar: false,
    featured: false,
  },
  {
    slug: 'europeanize-yourself',
    name: 'Europeanize Yourself!',
    label: 'Europeanize Yourself',
    category: 'perso',
    status: 'en-cours',
    period: { fr: '2025 – aujourd’hui', en: '2025 – present' },
    desc: {
      fr: 'Liste des alternatives européennes aux outils numériques américains et asiatiques.',
      en: 'A list of European alternatives to American and Asian digital tools.',
    },
    description: {
      fr: "L'objectif est de mettre en avant les solutions logicielles européennes et open source, pour reprendre la main sur nos données et nos outils.",
      en: 'The goal is to showcase European and open-source software, to take back control of our data and our tools.',
    },
    highlights: {
      fr: ['Veille sur les technologies européennes et open source', 'Souveraineté des données', 'Projet collaboratif'],
      en: ['Watch on European and open-source technologies', 'Data sovereignty', 'Collaborative project'],
    },
    techs: ['Markdown', 'GitHub', 'Veille', "Travail d'équipe"],
    url: 'https://github.com/valentinRyckaert/Europeanize-yourself',
    inNavbar: true,
    featured: false,
  },

  /* ── Scolaires ──────────────────────────── */
  {
    slug: 'piment',
    name: 'Piment',
    label: 'Piment',
    category: 'scolaire',
    status: 'en-construction',
    period: '2025',
    desc: {
      fr: "Application web de gestion de casernes de pompiers, avec CI/CD et déploiement sur vSphere.",
      en: 'Fire station management web app, with CI/CD and deployment on vSphere.',
    },
    description: {
      fr: "Refonte d'une application de gestion de casernes et de pompiers. Le back-end est écrit en PHP selon une architecture MVC avec une couche DAO pour l'accès aux données. Le projet est hébergé sur GitLab : une chaîne CI/CD construit l'application et la déploie sur une machine virtuelle servie par Apache et hébergée sur vSphere.",
      en: 'A rebuild of a fire station and firefighter management application. The back end is written in PHP following an MVC architecture, with a DAO layer for data access. The project lives on GitLab: a CI/CD pipeline builds the app and deploys it to a virtual machine served by Apache and hosted on vSphere.',
    },
    highlights: {
      fr: ['Architecture MVC + DAO en PHP', 'Pipeline CI/CD GitLab', 'Déploiement sur VM vSphere (Apache)', 'Base de données relationnelle'],
      en: ['MVC + DAO architecture in PHP', 'GitLab CI/CD pipeline', 'Deployment to a vSphere VM (Apache)', 'Relational database'],
    },
    techs: ['PHP', 'MVC', 'DAO', 'GitLab', 'CI/CD', 'Apache', 'vSphere', '3ème année'],
    url: 'https://github.com/killex8569/Remake_Piment',
    screenshots: ['/logos/piment-login.png', '/logos/piment-gitlab.png', '/logos/piment-ci-cd-1.png', '/logos/piment-ci-cd-2.png', '/logos/piment-apache.png'],
    inNavbar: true,
    featured: true,
  },
  {
    slug: 'canpai',
    name: 'Canpai',
    label: 'Canpai',
    category: 'scolaire',
    status: 'termine',
    period: '2025',
    desc: {
      fr: 'Application client-serveur en C avec interface graphique GTK.',
      en: 'Client-server application in C with a GTK graphical interface.',
    },
    description: {
      fr: "Projet d'équipe en C : une application client-serveur communiquant par sockets, avec une interface graphique réalisée en GTK côté client.",
      en: 'A team project in C: a client-server application communicating over sockets, with a GTK graphical interface on the client side.',
    },
    highlights: {
      fr: ['Interface graphique GTK', 'Client-serveur en C', 'Programmation réseau (sockets)', 'Gestion de projet en équipe'],
      en: ['GTK graphical interface', 'Client-server in C', 'Network programming (sockets)', 'Team project management'],
    },
    techs: ['C', 'GTK', 'Socket', 'Client-serveur', "Travail d'équipe", '3ème année'],
    inNavbar: true,
    featured: false,
  },
  {
    slug: 'ansible',
    name: { fr: 'TP Ansible', en: 'Ansible lab' },
    label: 'Ansible',
    category: 'scolaire',
    status: 'termine',
    period: '2025',
    desc: {
      fr: "Prise en main d'Ansible pour automatiser la préparation de machines.",
      en: 'Getting started with Ansible to automate machine provisioning.',
    },
    description: {
      fr: "Ce TP, réalisé dans le module d'administration Linux, nous a fait découvrir Ansible : écrire des playbooks, installer des paquets, partager des fichiers, préparer des machines et déployer des scripts.",
      en: 'This lab, part of the Linux administration module, introduced us to Ansible: writing playbooks, installing packages, sharing files, provisioning machines and deploying scripts.',
    },
    highlights: {
      fr: ['Écriture de playbooks', 'Installation de paquets à distance', 'Préparation de machines', 'Déploiement de scripts'],
      en: ['Writing playbooks', 'Remote package installation', 'Machine provisioning', 'Script deployment'],
    },
    techs: ['Ansible', 'Linux', 'Déploiement', 'Automatisation', '3ème année'],
    inNavbar: false,
    featured: false,
  },
  {
    slug: 'glpi',
    name: 'GLPI',
    label: 'GLPI',
    category: 'scolaire',
    status: 'termine',
    period: '2024',
    desc: {
      fr: "Installer, configurer et optimiser GLPI, l'outil de gestion de parc et de ticketing.",
      en: 'Installing, configuring and optimizing GLPI, the IT asset management and ticketing tool.',
    },
    description: {
      fr: "Un TP avancé sur GLPI : connexion à d'autres canaux pour créer des tickets (e-mail, Teams, Discord, Slack…), création d'une arborescence et de permissions, liaison avec un annuaire LDAP, installation et sécurisation des modules.",
      en: 'An advanced GLPI lab: connecting other channels to create tickets (email, Teams, Discord, Slack…), building an entity tree and permissions, linking to an LDAP directory, installing and securing plugins.',
    },
    highlights: {
      fr: ['Création de tickets multi-canal', 'Liaison LDAP', 'Arborescence et permissions', 'Installation et sécurisation des plugins PHP', 'Documentation'],
      en: ['Multi-channel ticket creation', 'LDAP integration', 'Entities and permissions', 'Installing and securing PHP plugins', 'Documentation'],
    },
    techs: ['GLPI', 'LDAP', 'PHP', 'Documentation', '2ème année'],
    screenshots: Array.from({ length: 11 }, (_, i) => `/logos/glpi-${i + 1}.png`),
    inNavbar: false,
    featured: false,
  },
  {
    slug: 'ocs',
    name: 'OCS Inventory',
    label: 'OCS',
    category: 'scolaire',
    status: 'termine',
    period: '2024',
    desc: {
      fr: "Le « TP de la mort » : OCS Inventory et GLPI sur un parc Windows, macOS et Debian.",
      en: 'The "lab of doom": OCS Inventory and GLPI across a Windows, macOS and Debian fleet.',
    },
    description: {
      fr: "Surnommé « le TP de la mort » par les anciennes promotions, ce TP s'étalait sur plusieurs semaines, en équipe. Il fallait faire fonctionner OCS Inventory avec GLPI en utilisant obligatoirement trois machines : un Windows 7, un macOS et une Debian. Avec mon équipe, nous l'avons mené jusqu'au bout.",
      en: 'Nicknamed "the lab of doom" by previous classes, this team lab spanned several weeks. The goal was to get OCS Inventory working with GLPI using three mandatory machines: Windows 7, macOS and Debian. My team and I took it all the way.',
    },
    highlights: {
      fr: ['Inventaire automatique multi-OS', 'Remontée OCS → GLPI', 'Windows, macOS et Linux', 'Travail en équipe sur plusieurs semaines'],
      en: ['Automated multi-OS inventory', 'OCS → GLPI sync', 'Windows, macOS and Linux', 'Multi-week team work'],
    },
    techs: ['OCS', 'GLPI', 'Windows', 'macOS', 'Linux', 'Réseau', '2ème année'],
    screenshots: ['/logos/ocs-ws.png', '/logos/ocs-glpi.png', '/logos/ocs-extention.png', '/logos/ocs-location.png'],
    inNavbar: false,
    featured: false,
  },
  {
    slug: 'figfactor',
    name: 'FigFactor',
    label: 'FigFactor',
    category: 'scolaire',
    status: 'termine',
    period: '2024',
    desc: {
      fr: "Simulation d'une entreprise multi-sites (4 sites) à l'échelle d'une classe entière.",
      en: 'Simulating a multi-site company (4 sites) at the scale of a whole class.',
    },
    description: {
      fr: "La classe était divisée en 4 groupes de 5 personnes, avec des rôles différents : chef de projet, techniciens, expert, commercial et DSI. Le but : apprendre à communiquer avec la hiérarchie, à s'organiser et à se répartir le travail. Les problématiques de gestion d'équipe ont été aussi formatrices que la partie technique.",
      en: 'The class was split into 4 groups of 5, each with different roles: project manager, technicians, expert, sales and CIO. The goal: learn to communicate with management, organize ourselves and share the work. Team management challenges were as formative as the technical part.',
    },
    highlights: {
      fr: ['Infrastructure réseau Cisco', 'Rôles et hiérarchie en entreprise', 'Développement web', 'Nombreuses réunions et soutenances'],
      en: ['Cisco network infrastructure', 'Company roles and hierarchy', 'Web development', 'Many meetings and presentations'],
    },
    techs: ['Cisco', 'Réseau', 'Développement web', 'Gestion de projet', '1ère année'],
    inNavbar: false,
    featured: false,
  },
  {
    slug: 'cms',
    name: { fr: 'TP CMS', en: 'CMS lab' },
    label: 'CMS',
    category: 'scolaire',
    status: 'termine',
    period: '2024',
    desc: {
      fr: 'Site WordPress optimisé pour le référencement (SEO), jusqu’en tête des résultats Google.',
      en: 'A WordPress site optimized for SEO, all the way to the top of Google results.',
    },
    description: {
      fr: "Réalisé en première année de BTS SIO : nous avons mis en ligne un site WordPress construit pendant plusieurs mois, pour « vendre » un produit ou service fictif. Il fallait ensuite développer la présence en ligne de l'entreprise grâce au SEO : textes, mots-clés, titres, images et lisibilité pour les robots d'indexation. À la fin, le site devait apparaître parmi les premiers résultats Google.",
      en: 'Built during the first year of my IT diploma: we published a WordPress site developed over several months to "sell" a fictional product or service. We then had to grow the company\'s online presence through SEO: copywriting, keywords, headings, images and crawler readability. By the end, the site had to rank among the top Google results.',
    },
    highlights: {
      fr: ['Référencement naturel (SEO)', 'Optimisation du contenu', 'WordPress', 'Mise en production'],
      en: ['Search engine optimization (SEO)', 'Content optimization', 'WordPress', 'Production deployment'],
    },
    techs: ['WordPress', 'SEO', 'Référencement', '1ère année'],
    inNavbar: false,
    featured: false,
  },

  /* ── Pro ────────────────────────────────── */
  {
    slug: 'alternance',
    name: { fr: 'Alternance — Alstom', en: 'Apprenticeship — Alstom' },
    label: 'Alstom',
    category: 'pro',
    status: 'en-cours',
    period: { fr: 'Sept. 2026 – août 2028', en: 'Sep 2026 – Aug 2028' },
    desc: {
      fr: 'Apprenti ingénieur logiciel : pipelines CI/CD et tests automatisés.',
      en: 'Software engineering apprentice: CI/CD pipelines and automated testing.',
    },
    description: {
      fr: "Alternance de deux ans chez Alstom en tant qu'apprenti ingénieur logiciel, en parallèle de mon cycle ingénieur à CPE Lyon. Je conçois et maintiens des pipelines CI/CD et je développe des tests automatisés avec Robot Framework.",
      en: 'A two-year apprenticeship at Alstom as a software engineering apprentice, alongside my engineering studies at CPE Lyon. I build and maintain CI/CD pipelines and develop automated tests with Robot Framework.',
    },
    highlights: {
      fr: ['Conception et maintenance de pipelines CI/CD', 'Tests automatisés avec Robot Framework', 'Environnement industriel exigeant'],
      en: ['Building and maintaining CI/CD pipelines', 'Automated testing with Robot Framework', 'Demanding industrial environment'],
    },
    techs: ['CI/CD', 'Robot Framework', 'Automatisation', 'Tests'],
    inNavbar: true,
    featured: false,
  },
  {
    slug: 'stage3',
    name: { fr: 'Stage — DriveSchool', en: 'Internship — DriveSchool' },
    label: 'DriveSchool',
    category: 'pro',
    status: 'termine',
    period: { fr: 'Juin – août 2026', en: 'Jun – Aug 2026' },
    desc: {
      fr: 'Développeur web : refonte du site, SEO et présence en ligne.',
      en: 'Web developer: website redesign, SEO and online presence.',
    },
    description: {
      fr: "Stage de fin de troisième année en tant que développeur web. J'ai refait entièrement le site de l'entreprise, amélioré son référencement naturel et développé sa présence en ligne.",
      en: 'End-of-third-year internship as a web developer. I fully redesigned and rebuilt the company website, improved its search rankings and grew its online presence.',
    },
    highlights: {
      fr: ['Refonte complète du site web', 'Amélioration du référencement naturel (SEO)', "Développement de la présence en ligne de l'entreprise"],
      en: ['Full website redesign and rebuild', 'On-page SEO improvements', "Grew the company's online presence"],
    },
    techs: ['Développement web', 'SEO', '3ème année'],
    inNavbar: false,
    featured: false,
  },
  {
    slug: 'stage2',
    name: { fr: 'Stage 2 — Advolis Orfis', en: 'Internship 2 — Advolis Orfis' },
    label: 'Stage 2A',
    category: 'pro',
    status: 'termine',
    period: { fr: 'Mars – avril 2025 · 8 semaines', en: 'Mar – Apr 2025 · 8 weeks' },
    desc: {
      fr: 'Technicien systèmes et réseaux : supervision, ticketing, PCA/PRA et cartographie réseau.',
      en: 'IT systems & networks technician: monitoring, ticketing, BCP/DRP and network mapping.',
    },
    description: {
      fr: "Second stage de BTS chez Advolis Orfis, à Lyon. J'ai amélioré les outils internes de supervision et de ticketing, participé à l'élaboration du PCA/PRA, cartographié le réseau de l'entreprise et réalisé des interventions chez les clients.",
      en: 'Second internship of my IT diploma at Advolis Orfis in Lyon. I improved the internal monitoring and ticketing tools, contributed to the BCP/DRP, mapped the company network and handled on-site client interventions.',
    },
    highlights: {
      fr: ['Amélioration de la supervision et du ticketing', 'Participation au PCA/PRA', 'Cartographie du réseau', 'Réunions et présentations de projets', 'Interventions sur site client'],
      en: ['Improved monitoring and ticketing', 'Contributed to the BCP/DRP', 'Network mapping', 'Project meetings and presentations', 'On-site client interventions'],
    },
    techs: ['Supervision', 'GLPI', 'Réseau', 'Documentation', '2ème année'],
    screenshots: ['/logos/pca-pra.png'],
    inNavbar: false,
    featured: false,
  },
  {
    slug: 'stage1',
    name: { fr: 'Stage 1 — Advolis Orfis', en: 'Internship 1 — Advolis Orfis' },
    label: 'Stage 1A',
    category: 'pro',
    status: 'termine',
    period: { fr: 'Juin – juillet 2024 · 5 semaines', en: 'Jun – Jul 2024 · 5 weeks' },
    desc: {
      fr: 'Technicien systèmes et réseaux : mise en place de la supervision Zabbix.',
      en: 'IT systems & networks technician: rolling out Zabbix monitoring.',
    },
    description: {
      fr: "Premier stage de BTS chez Advolis Orfis. J'ai installé et configuré une solution de supervision réseau (Zabbix), déployé des logiciels en interne et rédigé la documentation technique associée.",
      en: 'First internship of my IT diploma at Advolis Orfis. I installed and configured a network monitoring solution (Zabbix), deployed software internally and wrote the related technical documentation.',
    },
    highlights: {
      fr: ['Installation et configuration de Zabbix', 'Déploiement de logiciels en interne', 'Rédaction de documentation interne', 'Support utilisateurs'],
      en: ['Zabbix installation and configuration', 'Internal software deployment', 'Internal documentation', 'User support'],
    },
    techs: ['Zabbix', 'Supervision', 'Documentation', 'Support', '1ère année'],
    inNavbar: false,
    featured: false,
  },
];

export const navbarProjects = PROJECTS_DATA.filter((p) => p.inNavbar);
export const featuredProjects = PROJECTS_DATA.filter((p) => p.featured);
export const projetsPerso = PROJECTS_DATA.filter((p) => p.category === 'perso');
export const projetsScolaires = PROJECTS_DATA.filter((p) => p.category === 'scolaire');
export const projetsPro = PROJECTS_DATA.filter((p) => p.category === 'pro');

/* Récupère un projet par son slug (insensible à la casse) */
export const getProjet = (slug = '') =>
  PROJECTS_DATA.find((p) => p.slug.toLowerCase() === slug.toLowerCase());

/* Projet précédent / suivant pour la navigation entre pages projet */
export const getNavigation = (slug) => {
  const idx = PROJECTS_DATA.findIndex((p) => p.slug === slug);
  return {
    prev: idx > 0 ? PROJECTS_DATA[idx - 1] : null,
    next: idx >= 0 && idx < PROJECTS_DATA.length - 1 ? PROJECTS_DATA[idx + 1] : null,
  };
};
