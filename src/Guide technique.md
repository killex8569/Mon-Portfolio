
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