import React, { useState } from 'react';
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
      "DNS": '',
      "DHCP": '',
      "Routage": '',
      "VLAN": '',
      "Cisco": 'logos/cisco.png',
      "Switching": '',
      "VLSM/FLSM": '',
      "Supervision": '',
      "Active Directory": 'logos/AD.jpg',
      "Harden AD": '',
      "Hello My Dir": '',
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
      "Alpine": ''
    },

    // Outils
    {
      "Obsidian": 'logos/obsidian.png',
      "Only office": '',
      "Suite office": '',
      "VsCode": '',
      "IntelliJ": '',

    },
  ];
  return (
    <>
    <div class="container text-center">
      <div class="row align-items-start mb-5 mt-3">
        <div class="col">
        <h4 className="competences-bold">Résumé</h4>
          <div class="border border-2 rounded-3 p-3">
          <h5>Titulaire d’un BTS SIO option SISR obtenu à l’Institution des Chartreux, je poursuis actuellement mon cursus en cycle ingénieur à CPE Lyon.</h5>
          <h5>J’y consolide une expertise technique en développement logiciel (C, Python, Java et développement web full stack),</h5>
          <h5>en scripting et automatisation, en infrastructures et réseaux, en administration systèmes ainsi qu’en cybersécurité.</h5>
          </div>
        </div>
        <div class="col">
        <h4 className="competences-bold">Intitulés de postes idéaux</h4>
          <div class="row">
            <div class="col-md-3 col-sm-0"></div>
            <div class="col-md-6 col-sm border border-2 rounded-3 p-3">
              <h5>Administrateur systèmes/réseaux</h5>
              <h5>Ingénieur Cybersécurité</h5>
              <h5>Analyste SOC</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h4 className="competences-bold">Tableau de compétences</h4>
    <CompetencesTable skillFamilyList={skillFamilyList} skillsDictionnary={skillsDictionnary}/>
    </>
  )
}

export default AlexandreProfile;
