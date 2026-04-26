# Mon portfolio 2026
Portfolio réaliser avec **React**


# Organisation 

Voici le détails des pages : 
- **Accueil** --> Présentation de ma formation, de moi, de mes projets, CV, Ce que je suis en train d'apprendre, Si je possède une alternance ou un stage ou pas en core
- **Mes compétences** --> Présentation via un tableau mes compétences, 
- **Mon projets** --> Présentation de mes principaux projets (github, scolaire et autres)
- **Mes Certifications** --> Certifications obtenues (Afficher sous forme de tableau)
- **Mon Parcours** --> Timeline de mon évolution (Bac --> Chartreux (BTS) --> CPE (Ingénieur))
- **A propos** --> Mes informations de contacts (Github, LinkedIn, CV etc...)


--> Ajouter les éléments suivants : 

- Logiciels que j'ai utiliser (tous même les plus niche ou moins connu)
- Langages de programmations
- Frameworks que j'ai utiliser
- Les technologies que je maitrises
- Mon Parcours
- Mes passions
- Mes projets

Ajouter un mode nuit

ajouter les projets, une descriptions des modules etc...


## A ajouter

- Automatiser la récupération des technos (tags) dans les view projet... (centralisation) actuellement il faut les copier coller





### Ajouter un projet au portfolio

#### 1. `Navbar.js` — déclarer le projet
```js
export const PROJECTS = [
  { slug: 'portfolio', label: 'Portfolio', status: 'done' },
  { slug: 'mon-projet', label: 'Mon Projet', status: 'in-progress' }, // ← ajouter
];
```
**Statuts disponibles :** `done` · `in-progress` · `planned`

---

#### 2. Créer la page — `src/views/Projects/MonProjet.js`
```jsx
import ProjectPage from '../../components/ProjectPage/ProjectPage';

export default function MonProjet() {
  return (
    <ProjectPage
      title="Mon Projet"
      subtitle="Courte description."
      status="in-progress"
      period="Jan 2025 – aujourd'hui"
      tags={['React', 'Node.js']}
      description="Description longue du projet."
      highlights={[
        'Point clé 1',
        'Point clé 2',
      ]}
      links={[
        { label: 'GitHub', href: 'https://github.com/...', primary: true },
      ]}
      prev={{ slug: 'portfolio', label: 'Portfolio' }}
      next={null}
    />
  );
}
```

---

#### 3. `App.js` — ajouter la route
```jsx
import MonProjet from './views/Projects/MonProjet';

<Route path="/projets/mon-projet" element={<MonProjet />} />
```

---

> Le slug doit être **identique** dans les 3 fichiers.