import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import './Accueil.css';

function Accueil() {
  const despairPhrases = [
    'Système',
    'Réseaux',
    'Web',
    'Developpement Logiciel',
    'Mobile',
    'Sécurité',
  ];

  const DevSkills = [
    'Développement web, logiciel et mobile',
    'Infrastructures logicielles (Apache, Docker...)',
    'Sécurité applicative',
    'Scripting',
    'Maîtrise de Linux',
  ];

  const SkillsSYS = [
    'Mise en place d\'infrastructures réseaux',
    'Infrastructures physiques et logicielles',
    'Sécurité des réseaux',
    'Scripting',
    'Maîtrise de Linux',
  ];

  const SkillsReseau = [
    'Mise en place d\'infrastructures réseaux',
    'Infrastructures physiques et logicielles',
    'Sécurité des réseaux',
    'Scripting',
    'Maîtrise de Linux',
  ];

  const SkillCyber = [
    'Mise en place d\'infrastructures réseaux',
    'Infrastructures physiques et logicielles',
    'Sécurité des réseaux',
    'Scripting',
    'Maîtrise de Linux',
  ];



  const projects = [
    {
      name: 'Europeanize Yourself!',
      desc: 'Document listant les alternatives européennes aux outils digitaux américains et asiatiques',
      url : 'https://github.com/valentinRyckaert/Europeanize-yourself'
    },
    {
      name: 'L\'algo en 27 exos',
      desc: 'Exercices pour apprendre l\'algorithmie',
      url : 'https://github.com/killex8569/algo-en-27-exos'
    },
    {
      name: 'Kosmoz',
      desc: 'Application permettant de découvrir notre galaxie et l\'Univers (Vue.js)',
      url : 'https://github.com/killex8569/Kosmoz'
    },
    {
      name: 'DonnezNousUnStageOuUneAlternance',
      desc: 'Ce site que vous consultez !',
      url : 'https://github.com/killex8569/DonnezNousUnStageOuUneAlternance'
    },
  ];

  const typeAnimationSequence = despairPhrases.reduce((acc, phrase) => {
    acc.push(phrase, 1000);
    return acc;
  }, []);

  return (
    <div className="accueil-container">
      {/* HERO SECTION */}
      <section className="accueil-section accueil-hero">
        <div className="accueil-hero__title">
          <h1>donnez nous un stage ou une alternance</h1>
          <TypeAnimation
            sequence={typeAnimationSequence}
            wrapper="h1"
            speed={50}
            repeat={Infinity}
          />
        </div>
      </section>

      <section className="accueil-alonetitle">
      </section>

      {/* PROFILE CARDS */}
      {/* <section className="accueil-section">
        <div className="accueil-profiles">
          <a target="_blank" href="mailto:alexandre.faublanette@gmail.com" className="accueil-profile-card">
            <article>
              <img
                src="Alexandre.png"
                alt="Photo Alexandre FA"
                className="accueil-profile-card__image"
              />
              <h3 className="accueil-profile-card__name">Alexandre F. Anette</h3>
              <h5 className="accueil-profile-card__subtitle">Ingénieur Systèmes/Réseaux</h5>
              <div className="accueil-profile-card__status">
                <span>❌ cherche désespérément un stage</span>
                <span>❌ cherche désespérément une alternance</span>
              </div>
            </article>
          </a>

      </div>
      </section> */}

      {/* INFO BOX - ÉCOLE */}
      <section className="accueil-section accueil-info-box">
        <div className="accueil-info-box__logo-container">
          <img
            src="cpe-lyon.jpg"
            alt="CPE Lyon"
            className="accueil-info-box__logo"
          />
                    <img
            src="logo-chartreux.png"
            alt="Institution des Chartreux"
            className="accueil-info-box__logo"
          />
          <div className="accueil-info-box__content">
            <h3>À l'école d'ingénieur CPE LYON</h3>
            <h4>Je suis actuellement à la recherche d'un <span className="accueil-info-box__underline">stage</span> de préférence à l'étranger du <span className="accueil-info-box__underline">8 juin au 26 août 2026</span></h4>
            <h4>
              et d'une <span className="accueil-info-box__underline">alternance</span> de 2 ans (24 mois) 
              <span className="accueil-info-box__underline">à partir de septembre 2026</span>
            </h4>
          </div>

        </div>
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
      <section className="accueil-section accueil-feature reverse">
        <div className="accueil-feature__content">
          <h2>Nous sommes motivés</h2>
          <h4 style={{ marginBottom: 'var(--spacing-md)', fontWeight: '500' }}>
            Nous travaillons ensemble sur différents projets en dehors de nos
            cours.
          </h4>
          <ul className="accueil-projects">
          {projects.map((project, idx) => (
            <li key={`project-${idx}`}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="accueil-project-link"
              >
                {/* Ajout de la classe ici */}
                <strong className="accueil-projects__strong">{project.name}</strong>
              </a>
              <div>{project.desc}</div>
            </li>
          ))}
          </ul>
        </div>
        <div className="accueil-feature__image">
        <img src="nous_sommes_motives.jpg" alt="nous sommes motivés"/>
        </div>
      </section>

      {/* FEATURE 3 - TRAVAIL */}
      <section className="accueil-section accueil-feature">
        <div className="accueil-feature__content">
          <h2>Nous sommes travailleurs</h2>
          <h4 style={{ marginBottom: 'var(--spacing-md)' }}>
            Nous avons à cœur de donner le meilleur de nous-mêmes dans chacune
            de nos missions.
          </h4>
          <ul className="accueil-projects">
            <li>
              Notre école <span className="accueil-projects__strong">CPE Lyon</span>, ainsi que son partenaire
              l'<span className="accueil-projects__strong">Institution des Chartreux</span>, sont des écoles
              réputées pour leur exigence.
            </li>
            <li>
              Nous avons l'habitude de travailler très régulièrement, et
              l'informatique fait partie de notre quotidien.
            </li>
            <li>
              Nous avons notamment chacun un <span className="accueil-projects__strong">HomeLab</span> que nous
              entretenons et faisons grandir régulièrement.
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
        <div className="accueil-feature__image">
        <img src="nous_sommes_travailleurs.jpg" alt="nous sommes travailleurs"/>
        </div>
        
      </section>

      

      {/* CTA SECTION */}
      <section className="accueil-section accueil-cta">
        <h5 className="accueil-cta__intro">Alors n'attendez pas :</h5>
        <h2 className="accueil-cta__title">embauchez-nous, s'il vous plaît !!</h2>
      </section>
    </div>
  );
}

export default Accueil;
