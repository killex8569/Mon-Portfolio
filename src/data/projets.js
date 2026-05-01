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
      name:      'DonnezNousUnStage (DNSA)',
      label:     'DNSA',                          // label court pour la Navbar
      desc:      'Site réalisé avec un camarade pour aider à trouver une alternance ou un stage.',
      status:    'termine',
      statusLabel: 'Terminé',                     // label affiché dans les badges/listes
      period:    'Fév 2024 – Avr 2024',
      url:       'https://github.com/killex8569/DonnezNousUnStageOuUneAlternance',
      siteUrl:   'https://donneznousunstageouunealternance.vercel.app/',
      tags:      ['React', 'Portfolio commun', 'React Router', 'Responsive Design', 'CI/CD'],
      techs:     ['3ème année', 'React', 'Web', 'CI/CD', 'Travail d\'équipe'],
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
      period:    '2025 – aujourd\'hui',
      url:       'https://github.com/valentinRyckaert/Europeanize-yourself',
      tags:      ['Markdown', 'GitHub', 'Veille'],
      techs:     ['3ème année', 'Markdown', 'GitHub', 'Veille', 'Travail d\'équipe'],
      inNavbar:  true,
      inAccueil: true,
    },
    {
      slug:      'portfolio',
      name:      'Mon Portfolio',
      label:     'Portfolio',
      desc:      'Ce site que vous consultez actuellement.',
      status:    'en-cours',
      statusLabel: 'En cours',
      period:    '2024 – aujourd\'hui',
      url:       'https://github.com/killex8569/Mon-Portfolio',
      tags:      ['React', 'CSS', 'React Router', 'Responsive Design'],
      techs:     ['3ème année', 'React', 'Web'],
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
      period:    '2025 – aujourd\'hui',
      url:       'https://github.com/killex8569/Kosmoz',
      tags:      ['Vue.js', 'JavaScript', 'Web'],
      techs:     ['3ème année', 'Vue.js', 'JavaScript', 'Web', 'Travail d\'équipe'],
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
      period:    '2024 – aujourd\'hui',
      url:       'https://github.com/killex8569/Documentation-Homelab',
      tags:      ['Proxmox', 'Réseau', 'Système', 'Ansible', 'Terraform'],
      techs:     ['3ème année', 'Markdown', 'Firewalling', 'Proxmox', 'Réseau', 'Système'],
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
      period:    '2025',
      url:       'https://github.com/killex8569/Battleship',
      tags:      ['Java', 'Socket', 'LibGDX'],
      techs:     ['3ème année', 'Java', 'Socket', 'client', 'serveur', 'LibGDX', 'Travail d\'équipe'],
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
      period:    '2024',
      url:       'https://github.com/killex8569/algo-en-27-exos',
      tags:      ['Python', 'Java', 'Algorithmie'],
      techs:     ['3ème année', 'Python', 'Algorithmie', 'Java', 'Travail d\'équipe'],
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
      period:    '2025 – aujourd\'hui',
      url:       'https://github.com/killex8569/L-algo-pour-les-pro',
      tags:      ['C', 'Java', 'Algorithmie'],
      techs:     ['3ème année', 'C', 'Algorithmie', 'Java', 'Travail d\'équipe'],
      inNavbar:  true,
      inAccueil: true,
    },
    {
      slug:      'piment',
      name:      'Remake_Piment',
      label:     'Piment',
      desc:      'Application de gestion complète d\'une caserne de pompier.',
      status:    'en-construction',
      period:    '2025',
      url:       'https://github.com/killex8569/Remake_Piment',
      tags:      ['PHP', 'React', 'MVC', 'DAO'],
      techs:     ['3ème année', 'PHP', 'React', 'MVC', 'DAO'],
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
      desc:      'Projet client-serveur du jeu des bâtonnets, réalisé en C.',
      status:    'en-cours',
      period:    '2024',
      url:       'https://github.com/killex8569/canpai/',
      tags:      ['C', 'Socket', 'client', 'serveur'],
      techs:     ['3ème année', 'C', 'Socket', 'client', 'serveur', 'Travail d\'équipe'],
      scolaire:  true,
      inNavbar:  true,
      inAccueil: false,
    },
    /*Projet PRO */
    {
        slug:        'stage-1',
        name:        'Stage 1ère année',
        label:       'Stage 1A',
        desc:        '',
        status:      'termine',
        statusLabel: 'Terminé',
        url:         '',
        tags:        [],
        techs:       ['1er année', 'Supervision', 'Documentation'],
        pro:         true,      // ← marque comme projet pro
        inNavbar:    false,
        inAccueil:   false,
      },
      {
        slug:        'stage-2',
        name:        'Stage 2ème année',
        label:       'Stage 2A',
        desc:        'Mes tâches réalisées en stage de 2ème année de BTS.',
        status:      'termine',
        statusLabel: 'Terminé',
        url:         '',
        tags:        [],
        techs:       ['2ème année', 'Supervision', 'Documentation'],
        pro:         true,      // ← marque comme projet pro
        inNavbar:    false,
        inAccueil:   false,
      },
    // … ajoute tes autres projets scolaires ici avec scolaire: true
  ];
  
  /* ── Helpers ────────────────────────────────
     Utilise ces fonctions dans tes composants
  ─────────────────────────────────────────── */

  export const navbarProjects = PROJECTS_DATA.filter(p => p.inNavbar);
  
  export const accueilProjects = PROJECTS_DATA.filter(p => p.inAccueil);
  
  export const projetsPerso = PROJECTS_DATA.filter(p => !p.scolaire);
  
  export const projetsScolaires = PROJECTS_DATA.filter(p => p.scolaire);

  export const projetsPro = PROJECTS_DATA.filter(p => p.pro === true);

  
  
  /** Récupère un projet par son slug (pour les pages individuelles) */
  export const getProjet = (slug) => PROJECTS_DATA.find(p => p.slug === slug);
  
  /** Récupère prev / next pour la navigation entre pages projet */
  export const getNavigation = (slug) => {
    const idx = PROJECTS_DATA.findIndex(p => p.slug === slug);
    return {
      prev: idx > 0 ? PROJECTS_DATA[idx - 1] : null,
      next: idx < PROJECTS_DATA.length - 1 ? PROJECTS_DATA[idx + 1] : null,
    };
  };