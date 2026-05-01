import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { accueilProjects } from '../../data/projets';

import './Accueil.css';
import { StatusDot } from '../../components/Legend/projectStatus';

import Legend from '../../components/Legend/legend'

function Accueil() {
  const despairPhrases = [
    'le Système',
    'le Réseau',
    'le Web',
    'le Developpement Logiciel',
    'le developpement Mobile',
    'la Sécurité',
  ];

  const DevSkills = [
    'Développement web (React, Vue.js)',
    'Infrastructures logicielles (Apache, Docker...)',
    'Developpement logiciel/mobile (Java, C, React natif)',
    'Scripting (Bash, Python)',
  ];

  const SkillsSYS = [
    'Supervision',
    'Virtualisation (Proxmox, Hyper-V, vSphere, VMware)',
    'Wifi (Ubiquiti)',
    'Écosystème Active Directory (Active Directory, Déploiement WDS et MDT, base de données SQL, Hardening AD, pingcastle)',
    'Maîtrise de Linux (Ubuntu, Debian, Arch, Fedora, Alma, Kali linux, Alpine, NixOs)',
  ];

  const SkillsReseau = [
    'Mise en place d\'infrastructures réseaux (VLAN, VLSM, FLSM, TCP-IP, OSPF, RIP, STP, EtherChannel, LACP)',
    'Infrastructures physiques et logicielles',
    'Sécurité des réseaux (VPN, RADIUS, IPSec)',
    'Technologie Cisco (Switch, Packet tracer etc.)',
    'NAT, DHCP, DNS, GNS3',
    'Wireshark, nmap',
  ];

  const SkillCyber = [
    'HackTheBox',
    'RootMe',
    'TryHackMe',
    'Kali Linux',
    'Labtainers',
    'Bonnes pratiques cyber',
    'Parefeu (Opnsense, PFsense, WatchGuard, Stormshield)',
  ];




  const typeAnimationSequence = despairPhrases.reduce((acc, phrase) => {
    acc.push(phrase, 2000);
    return acc;
  }, []);

  return (
    <div className="accueil-container">
      {/* HERO SECTION */}
      <section className="accueil-section">
        <div className='presentation'>
        <h1>Alexandre FAUBLADIER--Anette</h1>
        <h2 className="accueil-hero__subtitle">Actuellement en 3ème année d'école d'ingénieur</h2>
        </div>
      <div className="accueil-hero__glass">
      <div className="accueil-hero__title">

          <h1>J'ai des compétences dans : </h1>
          <TypeAnimation
            sequence={typeAnimationSequence}
            wrapper="h1"
            speed={50}
            repeat={Infinity}
          />
        </div>
        <div className="accueil-hero__divider"></div>
         
            <br></br><br></br>
          <img
            src="cpe-lyon.jpg"
            alt="CPE Lyon"
            className="accueil-info-box__logo"
            style={{ marginRight: '150px' }}

          />
          <img
            src="logo-chartreux.png"
            alt="Institution des Chartreux"
            className="accueil-info-box__logo"
          />
         
                {/* INFO BOX - ÉCOLE */}
      <section className="accueil-section accueil-info-box">
          <div className="accueil-info-box__content">
            <h3>À l'école d'ingénieur CPE LYON</h3>
            <h4>Je suis actuellement à la recherche d'un <span className="accueil-info-box__underline">stage</span> de préférence à l'étranger du <span className="accueil-info-box__underline">8 juin au 26 août 2026</span></h4>
            <h4>
              ainsi que d'une <span className="accueil-info-box__underline">alternance</span> de 2 ans (24 mois) 
              <span className="accueil-info-box__underline"> à partir de septembre 2026</span>
            </h4>
        </div>
      </section>
      </div>
      </section>

      <section className="accueil-alonetitle">
      </section>




      {/* FEATURE 1 - COMPÉTENCES */}
      <section className="accueil-section accueil-feature">
        <div className="accueil-feature__content">
          <h2>Mes <br className="responsive"/>compétences</h2>
          <div className="accueil-skills">
            <div className="accueil-skill-card">
              <h4>Systèmes</h4>
              <ul>
                {SkillsSYS.map((skill, idx) => (
                  <li key={`alexandre-skill-${idx}`}>{skill}</li>
                ))}
              </ul>
            </div>
            <div className="accueil-skill-card">
              <h4>Developpement</h4>
              <ul>
                {DevSkills.map((skill, idx) => (
                  <li key={`alexandre-skill-${idx}`}>{skill}</li>
                ))}
              </ul>
            </div>
            <div className="accueil-skill-card">
              <h4>Réseau</h4>
              <ul>
                {SkillsReseau.map((skill, idx) => (
                  <li key={`alexandre-skill-${idx}`}>{skill}</li>
                ))}
              </ul>
            </div>
            <div className="accueil-skill-card">
              <h4>Cyber</h4>
              <ul>
                {SkillCyber.map((skill, idx) => (
                  <li key={`alexandre-skill-${idx}`}>{skill}</li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* FEATURE 2 - MOTIVATION */}
      <section className="accueil-section accueil-feature">
        <div className="accueil-feature__content">
          <h2>J'ai des projets</h2>
          <h4 style={{ marginBottom: 'var(--spacing-md)', fontWeight: '500' }}>
            Je travaille actuellement sur ces projets (en équipe ou seul).
          </h4>
          <ul className="accueil-projects">
  {accueilProjects.map((project, idx) => (
    <li key={`project-${idx}`}>
      <StatusDot status={project.statusLabel} />
      
      {/* Ajout de la balise <a> au début */}
      <a 
        href={project.slug ? `/projets/${project.slug}` : project.url}
        rel="noopener noreferrer"
        className="accueil-project-link"
      >
        <strong className="accueil-projects__strong">{project.name}</strong>
      </a>
      
      <div>{project.desc}</div>
    </li>
  ))}
</ul>
        </div>
        <div className="accueil-feature__image">
        <Legend />
        </div>
      </section>

      {/* FEATURE 3 - TRAVAIL */}
      <section className="accueil-section accueil-feature">
        <div className="accueil-feature__content">
          <h2>Mes Expériences</h2>
          <h4 style={{ marginBottom: 'var(--spacing-md)' }}>
            J'ai eu l'occasion de mettre en pratique dans plusieurs entreprises : 
          </h4>
          <ul className="accueil-projects">
            <li>
            <span className="accueil-projects__strong">Advolis Orfis : </span> Stage de première année (5 semaines)
            </li>
            <li>
            <span className="accueil-projects__strong">Advolis Orfis : </span> Stage de deuxième année (8 semaines)
            </li>
          </ul>
          <div className="accueil-cv">
          
          <a
            target="_blank"
            href="CV/CV_Alexandre.pdf"
            className="accueil-cv-card"
            rel="noopener noreferrer"
          >
            <article>
              <h4 className="accueil-cv-card__title">
                Mon CV
              </h4>
            </article>
          </a>

          </div>
        </div>

        
      </section>
    </div>
  );
}

export default Accueil;
