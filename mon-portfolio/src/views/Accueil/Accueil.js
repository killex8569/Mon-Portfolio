import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import './Accueil.css';


function Accueil() {
  return (
    <>
      <div className="accueil-container">
      <section className="accueil-profile-section">
        <div className="accueil-inline-center">      
          <div className="accueil-profile-item">
            <img src="Alexandre.png" alt="Photo Alexandre FA" style={{height: 320}}/>
            <h3>Alexandre F.A</h3>
            <h5 style={{color: "red"}}>n'a pas encore de stage</h5>
            <h5 style={{color: "red"}}>n'a pas encore d'alternance</h5>
          </div>
        </div>

        {/* Texte central */}
        <div className="accueil-inline-center accueil-feature-card">
          <img src="cpe-lyon.jpg" alt="CPE Lyon" style={{width: 400}}/>
          <div className="accueil-central-info-box">
            <h3>A l'école d'ingénieur CPE LYON</h3>
            <br/>
            <h4>A la recherche d'un stage de préférence à l'étranger du 8 juin au 26 août 2026</h4>
            <h4>et d'une alternance de 2 ans à partir de septembre 2026</h4>
            <br/>
            <h5>Nous ne souhaitons pas particulièrement être embauchés ensemble, mais <strong> nous serions ravi si cela pouvait être le cas</strong>. Nous avons déjà l'habitude de travailler sur des projets communs.</h5>
          </div>
          <img src="logo-chartreux.png" alt="Chartreux" style={{width: 400}}/>
        </div>
      </section>

        {/* Carte 1 : Image à droite (standard) */}
        <div className="accueil-feature-card">
          <div className="accueil-text-content">
            <h2>Nous sommes compétents !!</h2>
            <div className="accueil-inline-center">
                <div className="accueil-profile-item">
                  <h4>Alexandre</h4>
                  <h5>mise en place d'infrastructures réseaux</h5>
                  <h5>Infrastructures physiques et logicielles</h5>
                  <h5>Sécurité des réseaux</h5>
                  <h5>Scripting</h5>
                  <h5>Maîtrise de Linux</h5>
                </div>
            </div>
          </div>
            <div className="accueil-placeholder-square">photo convaincante</div>
        </div>
        
        {/* Carte 2 : Image à gauche (reverse) */}
        <div className="accueil-feature-card reverse">
          <div className="accueil-text-content">
            <h2>TITRE H2</h2>
            <div className="accueil-inline-center">
              <div className="accueil-profile-item">
                <h4>Nous travaillons ensemble sur différents projets en dehors de nos cours :</h4>
                <h5><strong>Europeanize Yourself! </strong>: Document listant les alternatives européennes aux outils digitaux américains et asiatiques</h5>
                <h5><strong>L'algo en 27 exos </strong>: des exercices pour apprendre l'algorithmie</h5>
                <h5><strong>Kosmoz </strong>: Une application permettant de découvrir notre galaxie et l'Univers (Vue.js)</h5>
                <h5><strong>DonnezNousUnStageOuUneAlternance </strong>: Ce site que vous consultez !</h5>
              </div>
            </div>
          </div>
            <div className="accueil-placeholder-square">photo convaincante</div>
        </div>

        {/* Carte 3 : Image à droite (standard) */}
        <div className="accueil-feature-card">
          <div className="accueil-text-content">
            <h2>Nous sommes travailleurs !!</h2>
            <div className="accueil-inline-center">
              <div className="accueil-profile-item">
                <h4>Nous avons à coeur de donner le meilleur de nous même dans chacune de nos missions</h4>
                <h5>Notre école CPE Lyon, ainsi que son partenaire l'Institution des Chartreux, sont des écoles réputées pour leur exigence.</h5>
                <h5>Nous avons l'habitude de travailler très régulièrement, et l'informatique fait partie de notre quotidien.</h5>
                <h5>Nous avons notamment chacun un HomeLab que nous entretenons et faisons grandir régulièrement.</h5>
              </div>
            </div>
          </div>
            <div className="accueil-placeholder-square">photo convaincante</div>
        </div>

      <section className="accueil-cta-section">
        <h5 className="accueil-cta-intro">Alors n'attendez pas :</h5>
        <h2 className="accueil-cta-title">EMBAUCHEZ-NOUS SIVOUPLÉ</h2>
      </section>
      </div>
      
    </>
  );
}

export default Accueil;