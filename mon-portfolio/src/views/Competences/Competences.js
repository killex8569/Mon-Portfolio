import {Switch, LeftContent, RightContent} from '../../components/Switch/Switch'
import CompetencesTable from '../../components/CompetencesTable/ComptencesTable';
import './Competences.css';

const AlexandreProfile = () => {
  let skillFamilyList = [
    "Web",
    "Programmation",
    "Base de données",
    "Système/Réseau",
    "Virtualisation",
    "Cybersécurité",
    "DevOps",
    "DPL/Webmarketing",
    "Soft Skills",
    "Langues",
    "Linux",
    "Outils"
  ];

  let skillsDictionnary = [
    // Web
    {
      "React": 'logos/react.png',
      "FastAPI": 'logos/fastapi.png',
      "Vue.js": 'logos/vue.png',
      "Node.js": 'logos/nodejs.png',
      "Bootstrap": 'logos/bootstrap.png',
      "Figma": 'logos/figma.png',
    },
    // Programmation
    {
      "Python": 'logos/python.png',
      "Java": 'logos/java.png',
      "C": 'logos/C.png',
      "PHP": 'logos/php.png',
    },
    // Base de Données
    {
      "MariaDB": 'logos/mariadb.png',
      "PostgreSQL": 'logos/postgresql.png',
      "MySQL": 'logos/mysql.svg'
    },
    // Système/Réseau
    {
      "Windows": 'logos/windows.png',
      "Linux": 'logos/linux.png',
      "Serveur Linux": 'logos/debian.png',
      "Cisco": 'logos/cisco.png',
      "Active Directory": 'logos/AD.jpg',
      "Ansible": 'logos/ansible.png',
      "DNS": '',
      "DHCP": '',
      "Routage": '',
      "VLAN": '',
      "Switching": '',
      "VLSM/FLSM": '',
      "Supervision": '',
      "WDS / MDT": '',
      "SNMP": '',
    },
    // Virtualisation
    {
      "Proxmox": 'logos/proxmox.svg',
      "Hyper-V": 'logos/hyperv.svg',
      "VMWare": 'logos/vmware.jpg',
      "vSphere": 'logos/vmware-vsphere.svg',
      "Qemu/KVM": 'logos/QEMU.png',
    },
    // Cybersécurité
    {
      "OPNSense": 'logos/opnsense.svg',
      "Stormshield": 'logos/stormshield.jpg',
      "Horodatage": '',
      "Chiffrement": '',
      "Sécurité Réseaux": '',
      "Sécurité applicative": '',
      "Bonnes pratiques cyber": '',
      "Labtainers": '',
    },
    // DevOps
    {
      "Docker": 'logos/docker.png',
      "Github": 'logos/github.png',
      "Gitlab": 'logos/gitlab.png',
      "Apache": 'logos/apache.svg',
    },
    // DPL/Webmarketing
    {
      "WordPress": 'logos/wordpress.png',
      "Référencement/SEO": '',
      "E-mailing": '',
    },
    // Soft Skills
    {
      "Autoapprenissage": '',
      "Travail en équipe": '',
      "Conduite de projet": '',
    },
    // Langues
    {
      "Anglais": '',
    },
    // Linux
    {
      "Arch": 'logos/arch.svg',
      "Fédora": 'logos/fedora.svg',
      "Ubuntu": 'logos/ubuntu.svg',
      "Debian": 'logos/debian.svg',
      "RHEL": 'logos/redhat.svg',
      "NixOs": 'logos/nixos.svg',
      "Kali": 'logos/kali.svg',
      "Alpine": 'logos/alpine-linux.png'
    },
    // Outils
    {
      "Obsidian": 'logos/obsidian.png',
      "Only office": 'logos/onlyoffice.png',
      "Suite office": 'logos/suite-office.png',
      "VsCode": 'logos/vscode.png',
      "IntelliJ": 'logos/intellij.png',
    },
  ];

  let CertificationDictionnaryList = [
    "Cybersécurité",
    "Developpement",
    "Systèmes",
    "Divers"
  ];

  let CertificationDictionnary = [
    // Cybersécurité
    {
      "CSNA": ["certifs/alex-csna.png", "Firewalling, réseau, NAT, VPN, zéro trust, IPSEC"],
      "Mooc Anssi": ["certifs/alex-anssi.png", "Base de la cybersécurité"],
      "FCF Fortinet": ["certifs/alex-fcf.png", "Base du réseau, base du firewalling"]
    },
    // Developpement
    {},
    // Systèmes
    {
      "Redhat": ["certifs/alex-redhat.png", "Linux, RedHat Entreprise Linux (RHEL)"]
    },
    // Divers
    {

    },
  ];

  return (
    <>
      <div className="container text-center">
        <div className="row align-items-start mb-5 mt-3">
          <div className="col">
            <h4 className="competences-bold">Résumé</h4>
            <div className="p-3 competences-border">
              <h5>Titulaire d’un BTS SIO option SISR obtenu à l’Institution des Chartreux, je poursuis actuellement mon cursus en cycle ingénieur à CPE Lyon.</h5>
              <h5>J’y consolide une expertise technique en développement logiciel (C, Python, Java et développement web full stack),</h5>
              <h5>en scripting et automatisation, en infrastructures et réseaux, en administration systèmes ainsi qu’en cybersécurité.</h5>
            </div>
          </div>
          <div className="col">
            <h4 className="competences-bold">Intitulés de postes idéaux</h4>
            <div className="row">
              <div className="col-md-3 col-sm-0"></div>
              <div className="col-md-6 col-sm p-3 competences-border">
                <h5>Administrateur systèmes/réseaux</h5>
                <h5>Ingénieur Cybersécurité</h5>
                <h5>Analyste SOC</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Switch leftTitle={"Compétences"} rightTitle={"Certifications"} isRightActive={false}>
        <LeftContent>
          <CompetencesTable skillFamilyList={skillFamilyList} skillsDictionnary={skillsDictionnary} />
        </LeftContent>
        <RightContent>
          <CompetencesTable skillFamilyList={CertificationDictionnaryList} skillsDictionnary={CertificationDictionnary} forCertifs={true}/>
        </RightContent>
      </Switch>
    </>
  );
};

const ValentinProfile = () => {
  let skillFamilyList = [
    "Web",
    "Programmation",
    "Base de données",
    "Système/Réseau",
    "Virtualisation",
    "Cybersécurité",
    "DevOps",
    "DPL/Webmarketing",
    "Soft Skills",
    "Langues",
    "Linux",
    "Outils"
  ];

  let skillsDictionnary = [
    // Web
    {
      "React": 'logos/react.png',
      "Svelte": 'logos/svelte.svg',
      "FastAPI": 'logos/fastapi.png',
      "Deno": 'logos/deno.png',
      "Vue.js": 'logos/vue.png',
      "Node.js": 'logos/nodejs.png',
      "Express": 'logos/nodejs.png',
      "Angular": 'logos/angular.png',
      "Django": 'logos/django.png',
      "Bootstrap": 'logos/bootstrap.png',
      "Figma": 'logos/figma.png',
      "SASS": 'logos/sass.png',
    },
    // Programmation
    {
      "Python": 'logos/python.png',
      "Ruby": 'logos/ruby.png',
      "Java": 'logos/java.png',
      "C#": 'logos/c_sharp.png',
      "C": 'logos/C.png',
      "PHP": 'logos/php.png',
      "TypeScript": 'logos/typescript.png',
      "Go": 'logos/go.png',
    },
    // Base de Données
    {
      "MariaDB": 'logos/mariadb.png',
      "PostgreSQL": 'logos/postgresql.png',
      "OracleDB": 'logos/oracledb.png',
      "MongoDB": 'logos/mongodb.png',
      "Firestore": 'logos/firestore.png',
    },
    // Système/Réseau
    {
      "Windows": 'logos/windows.png',
      "Linux": 'logos/linux.png',
      "Serveur Linux": 'logos/debian.png',
      "DNS": '',
      "DHCP": '',
      "Routage": '',
      "VLAN": '',
      "Cisco": '',
      "Switching": '',
      "VLSM/FLSM": ''
    },
    // Virtualisation
    {
      "VMWare": 'logos/vmware.jpg',
      "vSphere": 'logos/vmware-vsphere.svg',
      "Qemu/KVM": 'logos/QEMU.png',
    },
    // Cybersécurité
    {
      "OPNSense": 'logos/opnsense.svg',
      "WAF": 'logos/logo-safeline.png',
      "Horodatage": '',
      "Chiffrement": '',
      "Sécurité Réseaux": '',
      "Sécurité applicative": '',
      "Bonnes pratiques cyber": '',
      "Labtainers": ''
    },
    // DevOps
    {
      "Docker": 'logos/docker.png',
      "Github": 'logos/github.png',
      "Gitlab": 'logos/gitlab.png',
      "Apache": 'logos/apache.svg'
    },
    // DPL/Webmarketing
    {
      "WordPress": 'logos/wordpress.png',
      "Référencement/SEO": '',
      "E-mailing": '',
    },
    // Soft Skills
    {
      "Autoapprenissage": '',
      "Travail en équipe": '',
      "Conduite de projet": '',
    },
    // Langues
    {
      "Anglais": '',
      "Allemand": '',
    },
    // Linux
    {
      "Arch": 'logos/arch.svg',
      "Fédora": 'logos/fedora.svg',
      "Ubuntu": 'logos/ubuntu.svg',
      "Debian": 'logos/debian.svg',
      "RHEL": 'logos/redhat.svg',
      "Kali": 'logos/kali.svg',
      "Alpine": 'logos/alpine-linux.png'
    },
    
    // Outils
    {
      "Obsidian": 'logos/obsidian.png',
      "Only office": 'logos/onlyoffice.png',
      "Suite office": 'logos/suite-office.png',
      "VsCode": 'logos/vscode.png',
      "IntelliJ": 'logos/intellij.png',
    },
  ];

  let CertificationDictionnaryList = [
    "Cybersécurité",
    "Développement",
    "Systèmes",
    "Divers"
  ];

  let CertificationDictionnary = [
    // Cybersécurité
    {
      "MOOC cybersécurité (ANSSI)": ['certifs/val-anssi.png', "sécurité des mots de passe, sécurité physique,preuve informatique,bonnes pratiques cyber"],
      "Fortinet Certified Fundamentals in Cybersecurity (Fortinet)": ['certifs/val-FCF.png', "Cybersécurité, Pare-feux, Threat Intelligence, Sécurité applicative, Administration réseaux"],
    },
    // Developpement
    {
      "Professional Vue.js Developper (W3School)": ["certifs/val-vue.png", "Vue.js"],
      "Professional Python Developper (W3School)": ["certifs/val-python.png", "Python, MySQL avec Python, MongoDB avec Python"],
      "Backend development and APIs (FreeCodeCamp)": ["certifs/val-backend.png", "Node.js, Express.js, MongoDB"]
    },
    // Systèmes
    {
      "Red Hat System Administration I et II (RH124/134 - RHA) - Ver. 9.3": ["certifs/val-redhat.png", "Linux, RedHat Entreprise Linux (RHEL)"],
      "Description des concpets du Cloud (Microsoft Learn)": ["certifs/val-cloud.jpg", "Concepts du cloud computing"]
    },
    // Divers
    {
      "Open Source Technical Documentation Essentials (Linux Fondation)": ["certifs/val-osdoc.png", "Documentation d'API', Documentation Open-Source"],
      "Faire Face Ensemble (SGDSN)": ["certifs/val-vigipirate.jpg", "Sécurité citoyenne"]
    },
  ];

  return (
    <>
      <div className="container text-center">
        <div className="row align-items-start mb-5 mt-3">
          <div className="col-md-6 col-12 mb-4 mb-md-0">
            <h4 className="competences-bold">Résumé</h4>
            <div className="p-3 competences-border">
              <h5>Durant ma formation, <br className="responsive"/>j'ai pu acquérir des bonnes <br className="responsive"/>connaissances en développement,<br className="responsive"/> notamment en développement web.</h5>
              <h5>J'ai pu aussi approfondir<br className="responsive"/> mes connaissances en infrastructure<br className="responsive"/> logicielle, avec des outils <br className="responsive"/>comme Docker, Apache, Nginx, <br className="responsive"/>CasaOS, Qemu/KVM etc...</h5>
              <h5>Par ailleurs, j'utilise Linux<br className="responsive"/> quotidiennement, en tant que système d'exploitation principal.</h5>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <h4 className="competences-bold">Intitulés de postes idéaux</h4>
            <div className="row">
              <div className="col-md-3 col-sm-0"></div>
              <div className="col-md-6 col-sm p-3 competences-border">
                <h5>Développeur web full-stack</h5>
                <h5>Développeur logiciel</h5>
                <h5>Concepteur développeur</h5>
                <h5>Ingénieur Cybersécurité</h5>
                <h5>Ingénieur DevOps</h5>
                <h5>Administrateur Systèmes</h5>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Switch leftTitle={"Compétences"} rightTitle={"Certifications"} isRightActive={false}>
        <LeftContent>
          <CompetencesTable skillFamilyList={skillFamilyList} skillsDictionnary={skillsDictionnary} forCertifs={false} />
        </LeftContent>
        <RightContent>
          <CompetencesTable skillFamilyList={CertificationDictionnaryList} skillsDictionnary={CertificationDictionnary} forCertifs={true} />
        </RightContent>
      </Switch>
    </>
  );
};

const Competences = () => {

  return (
    <Switch leftTitle={"Valentin"} rightTitle={"Alexandre"} isRightActive={false}>
      <LeftContent>
        <ValentinProfile/>
      </LeftContent>
      <RightContent>
        <AlexandreProfile/>
      </RightContent>
    </Switch>
  );
};

export default Competences;
