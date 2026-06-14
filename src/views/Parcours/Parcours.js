import Timeline from "../../components/Timeline/Timeline";
import {RightContent} from '../../components/Switch/Switch'
import "./Parcours.css";

function Parcours() {

  const AlexandreEvents = [
    // {
    //   id: 1,
    //   title: "Alternance Alstom",
    //   date: "septembre 2026 - aout 2028",
    //   description: ""
    // },
    // {
    //   id: 2,
    //   title: "Stage de fin de 3ème année",
    //   date: "juin - aout 2026",
    //   description: ""
    // },
    {
      id: 3,
      title: "Master Ingénieur en Cybersécurité à CPE Lyon",
      date: "En ce moment (2025 - 2028)",
      description: "Developpement de nos qualité de DevOps, perfectionnement en cybersécurité, approfondissement des compétences en réseaux et développement, cours et travaux théoriques et pratiques, projets."
    },
    
    {
      id: 4,
      title: "Stage en système et réseau (2ème année de BTS) : Advolis Orfis",
      date: "mars - avril 2025",
      description: "Stage de 8 semaines - Mise en place d'une solution de déploiement, mise à jour de leurs systèmes de supervision, cartographie du réseau, déplacements et interventions sur site client."
    },
    {
      id: 5,
      title: "Stage en système et réseau (1er année de BTS) : Advolis Orfis",
      date: "juin - juillet 2024",
      description: "Stage de 6 semaines - Mise en place d'une solution de supervision, déplacements et interventions sur site client, création de documentation."
    },
    {
      id: 6,
      title: "BTS Informatique (SIO), spécialité Systèmes et Réseaux à l'Institution des Chartreux",
      date: "septembre 2023 - juin 2025",
      description: "Apprentissage des concepts fondamentaux de l'informatique, cours et travaux pratiques en salle informatique (Réseaux, Développement, Cybersécurité...), spécialité Réseaux : mise en place d'infrastructures complètes, travaux de groupe, Active Directory, sécurisation du SI."
    },
    {
      id: 7,
      title: "Baccalauréat spécialités : Mathématiques, SVT",
      date: "juin 2023",
    }
  ]


  return (
      

      <RightContent>
        <div className="notre-parcours">
          <Timeline events={AlexandreEvents} />
        </div>
      </RightContent>
  );
}

export default Parcours;