/**
 * ═══════════════════════════════════════════
 *  Profil — contact, CV, parcours, compétences
 *  Source : CV FR / EN (public/CV)
 * ═══════════════════════════════════════════
 */

export const asset = (path) => `${process.env.PUBLIC_URL}${path.startsWith('/') ? path : `/${path}`}`;

export const CONTACT = {
  name: 'Alexandre Faubladier-Anette',
  email: 'alexandre.faubladier.anette@gmail.com',
  phone: '07 67 08 12 85',
  phoneHref: 'tel:+33767081285',
  location: { fr: 'Lyon, France', en: 'Lyon, France' },
  linkedin: 'https://www.linkedin.com/in/alexandre-faubladier-anette-750967277/',
  github: 'https://github.com/killex8569',
  githubUser: 'killex8569',
  birthDate: '2005-07-05',
};

export const CV = {
  fr: asset(encodeURI('/CV/CV Alexandre Faubladier-Anette (Français).pdf')),
  en: asset(encodeURI('/CV/CV Alexandre Faubladier-Anette (English).pdf')),
};

/* ── Parcours (du plus récent au plus ancien) ── */
export const TIMELINE = [
  {
    id: 'alstom',
    type: 'work',
    current: true,
    org: 'Alstom',
    title: { fr: 'Apprenti ingénieur logiciel', en: 'Software engineering apprentice' },
    date: { fr: 'Sept. 2026 – août 2028', en: 'Sep 2026 – Aug 2028' },
    place: 'France',
    points: {
      fr: ['Conception et maintenance de pipelines CI/CD', 'Développement de tests automatisés avec Robot Framework'],
      en: ['Building and maintaining CI/CD pipelines', 'Developing automated tests with Robot Framework'],
    },
    slug: 'alternance',
  },
  {
    id: 'driveschool',
    type: 'work',
    org: 'DriveSchool',
    title: { fr: 'Développeur web (stage)', en: 'Web developer intern' },
    date: { fr: 'Juin – août 2026', en: 'Jun – Aug 2026' },
    points: {
      fr: ["Refonte complète du site web de l'entreprise", 'Amélioration du référencement naturel (SEO)', "Développement de la présence en ligne de l'entreprise"],
      en: ['Redesigned and rebuilt the company website', 'Improved search engine rankings through on-page SEO', "Developed the company's online presence across digital channels"],
    },
    slug: 'stage3',
  },
  {
    id: 'cpe',
    type: 'education',
    current: true,
    org: 'CPE Lyon',
    logo: '/cpe-lyon.jpg',
    title: { fr: "Diplôme d'ingénieur informatique et cybersécurité", en: 'Master of Engineering, computer science & cybersecurity' },
    date: '2025 – 2028',
    place: 'Lyon',
    points: {
      fr: [
        'Développement d’applications en Java et C, applications client-serveur',
        'Back-end, front-end et API REST',
        'Approfondissement en réseau, DevOps et cybersécurité',
        'Coupe de France de robotique avec le club Galiléo',
      ],
      en: [
        'Java and C application development, client-server applications',
        'Back end, front end and REST APIs',
        'Deeper networking, DevOps and cybersecurity skills',
        'French robotics cup with the Galiléo club',
      ],
    },
  },
  {
    id: 'advolis-2',
    type: 'work',
    org: 'Advolis Orfis',
    title: { fr: 'Technicien systèmes et réseaux (stage)', en: 'IT systems & networks intern' },
    date: { fr: 'Mars – avril 2025 · 8 semaines', en: 'Mar – Apr 2025 · 8 weeks' },
    place: 'Lyon',
    points: {
      fr: ['Amélioration des outils internes de supervision et de ticketing', 'Participation au PCA/PRA et cartographie du réseau', 'Interventions et déplacements chez les clients'],
      en: ['Improved the internal monitoring and ticketing tools', "Contributed to the BCP/DRP and mapped the company's network", 'On-site client interventions'],
    },
    slug: 'stage2',
  },
  {
    id: 'advolis-1',
    type: 'work',
    org: 'Advolis Orfis',
    title: { fr: 'Technicien systèmes et réseaux (stage)', en: 'IT systems & networks intern' },
    date: { fr: 'Juin – juillet 2024 · 5 semaines', en: 'Jun – Jul 2024 · 5 weeks' },
    place: 'Lyon',
    points: {
      fr: ['Installation et configuration d’une solution de supervision (Zabbix)', 'Déploiement de logiciels en interne', 'Rédaction de procédures et de documentation technique'],
      en: ['Installed and configured a network monitoring solution (Zabbix)', 'Deployed software internally', 'Wrote operating procedures and technical documentation'],
    },
    slug: 'stage1',
  },
  {
    id: 'bts',
    type: 'education',
    org: 'Institution des Chartreux',
    logo: '/logo-chartreux.png',
    title: { fr: 'BTS SIO, option systèmes et réseaux', en: 'Higher National Diploma in IT services (BTS SIO)' },
    date: '2023 – 2025',
    place: 'Lyon',
    points: {
      fr: [
        'Bases du back-end et du front-end',
        "Conception d'infrastructures système et réseau complètes et sécurisées",
        'Active Directory, déploiement d’OS et d’applications Windows',
        'Certification Stormshield CSNA',
      ],
      en: [
        'Back-end and front-end fundamentals',
        'Designing complete, secure system and network infrastructures',
        'Active Directory, Windows OS and application deployment',
        'Stormshield CSNA certification',
      ],
    },
  },
  {
    id: 'bac',
    type: 'education',
    org: { fr: 'Baccalauréat', en: 'French Baccalaureate' },
    title: { fr: 'Spécialités mathématiques et SVT', en: 'Majors in mathematics and life sciences' },
    date: { fr: 'Juin 2023', en: 'June 2023' },
    points: { fr: [], en: [] },
  },
];

/* ── Compétences (CV) ─────────────────────── */
export const SKILL_GROUPS = [
  {
    id: 'dev',
    icon: 'code',
    title: { fr: 'Développement', en: 'Programming & scripting' },
    size: 'wide',
    skills: [
      { name: 'Python', logo: '/logos/python.png' },
      { name: 'C', logo: '/logos/C.png' },
      { name: 'Java', logo: '/logos/java.png' },
      { name: 'Bash' },
      { name: 'HTML / CSS / JavaScript' },
      { name: 'SQL' },
      { name: 'Git', logo: '/logos/github.png' },
    ],
  },
  {
    id: 'devops',
    icon: 'infinity',
    title: { fr: 'DevOps & tests', en: 'DevOps & testing' },
    size: 'wide',
    skills: [
      { name: { fr: 'Pipelines CI/CD', en: 'CI/CD pipelines' } },
      { name: { fr: 'Automatisation', en: 'Automation' } },
      { name: 'Robot Framework' },
      { name: 'Ansible', logo: '/logos/ansible.png' },
      { name: 'Docker', logo: '/logos/docker.png' },
      { name: 'GitLab', logo: '/logos/gitlab.png' },
    ],
  },
  {
    id: 'web',
    icon: 'globe',
    title: { fr: 'Web', en: 'Web' },
    skills: [
      { name: { fr: 'Création de sites', en: 'Website development' } },
      { name: 'SEO' },
      { name: 'API REST' },
    ],
    learning: [
      { name: 'React', logo: '/logos/react.png' },
      { name: 'Vue.js', logo: '/logos/vue.png' },
    ],
  },
  {
    id: 'systems',
    icon: 'server',
    title: { fr: 'Systèmes', en: 'Systems' },
    skills: [
      { name: 'Windows Server', logo: '/logos/windows.png' },
      { name: 'Active Directory', logo: '/logos/AD.jpg' },
      { name: 'WDS / MDT' },
      { name: 'Linux', logo: '/logos/linux.png' },
      { name: 'macOS' },
      { name: { fr: 'Supervision (Zabbix)', en: 'Monitoring (Zabbix)' } },
    ],
  },
  {
    id: 'network',
    icon: 'network',
    title: { fr: 'Réseaux', en: 'Networking' },
    skills: [
      { name: 'Cisco', logo: '/logos/cisco.png' },
      { name: 'VLAN' },
      { name: { fr: 'Routage & commutation', en: 'Routing & switching' } },
      { name: 'TCP/IP' },
      { name: 'VLSM / FLSM' },
      { name: 'Wi-Fi' },
      { name: 'VPN' },
    ],
  },
  {
    id: 'security',
    icon: 'shield',
    title: { fr: 'Sécurité', en: 'Security' },
    skills: [
      { name: 'Stormshield', logo: '/logos/stormshield.jpg' },
      { name: 'Fortinet' },
      { name: 'OPNsense', logo: '/logos/opnsense.svg' },
      { name: { fr: 'Durcissement AD', en: 'AD hardening' } },
      { name: 'Zero Trust' },
      { name: { fr: 'Chiffrement', en: 'Encryption' } },
      { name: 'TryHackMe' },
    ],
  },
  {
    id: 'virtualization',
    icon: 'layers',
    title: { fr: 'Virtualisation & infra', en: 'Virtualization & infra' },
    skills: [
      { name: 'Proxmox', logo: '/logos/proxmox.svg' },
      { name: 'VMware vSphere', logo: '/logos/vmware-vsphere.svg' },
      { name: 'Hyper-V', logo: '/logos/hyperv.svg' },
      { name: 'Nginx' },
      { name: 'Traefik' },
    ],
  },
  {
    id: 'db',
    icon: 'database',
    title: { fr: 'Bases de données', en: 'Databases' },
    skills: [
      { name: 'MySQL', logo: '/logos/mysql.svg' },
      { name: 'MariaDB', logo: '/logos/mariadb.png' },
      { name: 'PostgreSQL', logo: '/logos/postgresql.png' },
    ],
  },
];

export const CERTIFICATIONS = [
  {
    id: 'csna',
    name: 'Stormshield CSNA',
    issuer: 'Stormshield',
    year: '2025',
    image: '/certifs/alex-csna.png',
    desc: { fr: 'Pare-feu, NAT, VPN IPsec, Zero Trust', en: 'Firewalling, NAT, IPsec VPN, Zero Trust' },
  },
  {
    id: 'fcf',
    name: 'Fortinet FCF',
    issuer: 'Fortinet',
    year: '2024',
    image: '/certifs/alex-fcf.png',
    desc: { fr: 'Fondamentaux réseau et pare-feu', en: 'Networking and firewall fundamentals' },
  },
  {
    id: 'redhat',
    name: 'Red Hat RH124',
    issuer: { fr: 'Red Hat · modules 1 et 2', en: 'Red Hat · modules 1–2' },
    year: '2025',
    image: '/certifs/alex-redhat.png',
    desc: { fr: 'Administration Linux, RHEL', en: 'Linux administration, RHEL' },
  },
  {
    id: 'anssi',
    name: 'SecNumacadémie',
    issuer: 'ANSSI',
    year: '2023',
    image: '/certifs/alex-anssi.png',
    desc: { fr: 'Fondamentaux de la cybersécurité', en: 'Cybersecurity fundamentals' },
  },
];

export const LANGUAGES = [
  { name: { fr: 'Français', en: 'French' }, level: { fr: 'Langue maternelle', en: 'Native' }, value: 100 },
  { name: { fr: 'Anglais', en: 'English' }, level: { fr: 'B2 · niveau professionnel', en: 'B2 · professional working proficiency' }, value: 72 },
];

export const SOFT_SKILLS = {
  fr: ['Autonomie', 'Travail en équipe', 'Adaptabilité', 'Rigueur', 'Curiosité'],
  en: ['Autonomy', 'Teamwork', 'Adaptability', 'Rigor', 'Curiosity'],
};

export const INTERESTS = {
  fr: ['Astronomie', 'Robotique', 'Musique', 'Sport', 'Jeux de stratégie'],
  en: ['Astronomy', 'Robotics', 'Music', 'Sports', 'Strategy games'],
};

/* Logos du bandeau défilant de l'accueil */
export const MARQUEE = [
  { name: 'Python', logo: '/logos/python.png' },
  { name: 'Docker', logo: '/logos/docker.png' },
  { name: 'Ansible', logo: '/logos/ansible.png' },
  { name: 'Proxmox', logo: '/logos/proxmox.svg' },
  { name: 'Java', logo: '/logos/java.png' },
  { name: 'Linux', logo: '/logos/linux.png' },
  { name: 'Cisco', logo: '/logos/cisco.png' },
  { name: 'GitLab', logo: '/logos/gitlab.png' },
  { name: 'React', logo: '/logos/react.png' },
  { name: 'vSphere', logo: '/logos/vmware-vsphere.svg' },
  { name: 'PostgreSQL', logo: '/logos/postgresql.png' },
  { name: 'C', logo: '/logos/C.png' },
  { name: 'Stormshield', logo: '/logos/stormshield.jpg' },
  { name: 'Windows Server', logo: '/logos/windows.png' },
  { name: 'Vue.js', logo: '/logos/vue.png' },
  { name: 'Red Hat', logo: '/logos/redhat.svg' },
];

export const getAge = (dateString) => {
  const today = new Date();
  const birth = new Date(dateString);
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
  return age;
};
