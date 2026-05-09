import {Switch, LeftContent, RightContent} from '../../components/Switch/Switch'
import CompetencesTable from '../../components/CompetencesTable/ComptencesTable';
import './Competences.css';

const Competences = () => {
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
    /*Web */
    { "React": 'logos/react.png', 
      "FastAPI": 'logos/fastapi.png', 
      "Vue.js": 'logos/vue.png', 
      "Node.js": 'logos/nodejs.png', 
      "Bootstrap": 'logos/bootstrap.png', 
      "Figma": 'logos/figma.png' 
    },
    /*Programmation */
    { "Python": 'logos/python.png', 
      "Java": 'logos/java.png', 
      "C": 'logos/C.png', 
      "PHP": 'logos/php.png' 
    },
    /*Base de donnée */
    { "MariaDB": 'logos/mariadb.png', 
      "PostgreSQL": 'logos/postgresql.png', 
      "MySQL": 'logos/mysql.svg' 
    },
    /*Système/Réseau */
    { "Windows": 'logos/windows.png', 
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
      "SNMP": '' 
    },

    /*Virtualisation */
    { "Proxmox": 'logos/proxmox.svg', 
      "Hyper-V": 'logos/hyperv.svg', 
      "VMWare": 'logos/vmware.jpg', 
      "vSphere": 'logos/vmware-vsphere.svg', 
      "Qemu/KVM": 'logos/QEMU.png' 
    },

    /*Cyber */
    { "OPNSense": 'logos/opnsense.svg', 
      "Stormshield": 'logos/stormshield.jpg', 
      "Horodatage": '', "Chiffrement": '', 
      "Sécurité Réseaux": '', 
      "Sécurité applicative": '', 
      "Bonnes pratiques cyber": '', 
      "Labtainers": '' 
    },

    /*DovOps */
    { "Docker": 'logos/docker.png', 
      "Github": 'logos/github.png', 
      "Gitlab": 'logos/gitlab.png', 
      "Apache": 'logos/apache.svg' 
    },

    /*DLP/WebMarketing */

    { "WordPress": 'logos/wordpress.png', 
      "Référencement/SEO": '', 
      "E-mailing": '' 
    },

    /*Soft Skill */
    { "Autoapprenissage": '', 
      "Travail en équipe": '', 
      "Conduite de projet": '',
    },

    /*Langues */
    { "Anglais (B2)": '',
      "Français (Natif)": ''
    },

    /*Linux */

    { "Arch": 'logos/arch.svg', 
      "Fedora": 'logos/fedora.svg', 
      "Ubuntu": 'logos/ubuntu.svg', 
      "Debian": 'logos/debian.svg', 
      "RHEL": 'logos/redhat.svg', 
      "NixOs": 'logos/nixos.svg', 
      "Kali": 'logos/kali.svg', 
      "Alpine": 'logos/alpine-linux.png' 
    },

      
    /*Outils */

    { "Obsidian": 'logos/obsidian.png', 
      "Only office": 'logos/onlyoffice.png', 
      "Suite office": 'logos/suite-office.png',
      "VsCode": 'logos/vscode.png', 
      "IntelliJ": 'logos/intellij.png' 
    },
    
  ];

  let CertificationDictionnaryList = [
    "Cybersécurité", 
    "Développement", 
    "Systèmes", 
    "Divers"
  ];

  let CertificationDictionnary = [
    // Cyber
    { 
      "CSNA": ["certifs/alex-csna.png", "Firewalling, réseau, NAT, VPN, zéro trust, IPSEC"], 
      "Mooc Anssi": ["certifs/alex-anssi.png", "Base de la cybersécurité"], 
      "FCF Fortinet": ["certifs/alex-fcf.png", "Base du réseau, base du firewalling"] 
    },
    // Developpement
    {
      
    },
    // Systèmes
    { 
      "Redhat": ["certifs/alex-redhat.png", "Linux, RedHat Entreprise Linux (RHEL)"] 

    },
    // Réseau
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
              <h5>Titulaire d'un BTS SIO option SISR obtenu à l'Institution des Chartreux, je poursuis actuellement mon cursus en cycle ingénieur à CPE Lyon.</h5>
              <h5>J'y consolide une expertise technique en développement logiciel (C, Python, Java et développement web full stack),</h5>
              <h5>en scripting et automatisation, en infrastructures et réseaux, en administration systèmes ainsi qu'en cybersécurité.</h5>
              <h5>J'y apprend notamment à maitriser les outils et les technologies pour devenir devOps.</h5>
            </div>
          </div>
          <div className="col">
            <h4 className="competences-bold">Intitulés de postes idéaux</h4>
            <div className="row">
              <div className="col-md-3 col-sm-0"></div>
              <div className="col-md-6 col-sm p-3 competences-border">
                <h5>Administrateur systèmes/réseaux</h5>
                <h5>Ingénieur Cybersécurité</h5>
                <h5>DevOps / Full stack</h5>
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

export default Competences;