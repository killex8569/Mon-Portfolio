import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './css/App.css'

/*Component*/
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';

/*Views */
import Accueil from './views/Accueil/Accueil'
import Competences from './views/Competences/Competences';
import About from './views/About/About';
import NotFound from './views/not_found/not_found';
import Parcours from './views/Parcours/Parcours';
import Projets from './views/Projects/projects';

/*Projet détails de la page */
import ProjetDnsa from './views/Projects/ProjetDNSA'
import Canpai from './views/Projects/ProjetCanpai'
import Homelab from './views/Projects/ProjetHomelab'
import Algopourlespro from './views/Projects/ProjetAlgopro'
import Algo from './views/Projects/ProjetAlgo'
import EuroYourself from './views/Projects/ProjetEuroYourself'
import Figfactor from './views/Projects/ProjetFigfactor'
import Portfolio from './views/Projects/ProjetPortfolio'
import Kosmoz from './views/Projects/ProjetKosmoz'
import Battleship from './views/Projects/ProjetBattleship'
import Cms from './views/Projects/ProjetCms'
import LoupGarou from './views/Projects/ProjetLoupGarou'
import Piment from './views/Projects/ProjetPiment'
import Ansible from './views/Projects/ProjetAnsible'

function App() {
  return (
    <>
      <BrowserRouter>
        {/* Navigation */}
        <Navbar/>
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/competences" element={<Competences />} />
          <Route path="/parcours" element={<Parcours/>} />
          <Route path="/projets" element={<Projets/>} />
          <Route path="/projets/dnsa" element={<ProjetDnsa />}  />
          <Route path="/projets/canpai" element={<Canpai />}  />
          <Route path="/projets/homelab" element={<Homelab />}  />
          <Route path="/projets/algo" element={<Algo />}  />
          <Route path="/projets/algopourlespro" element={<Algopourlespro />}  />
          <Route path="/projets/figfactor" element={<Figfactor />}  />
          <Route path="/projets/Europeanize-yourself" element={<EuroYourself />}  />
          <Route path="/projets/portfolio" element={<Portfolio />}  />
          <Route path="/projets/kosmoz" element={<Kosmoz />}  />
          <Route path="/projets/piment" element={<Piment />}  />
          <Route path="/projets/loup-garou" element={<LoupGarou />}  />
          <Route path="/projets/cms" element={<Cms />}  />
          <Route path="/projets/battleship" element={<Battleship />}  />
          <Route path="/projets/ansible" element={<Ansible />}  />
          <Route path="/about" element={<About/>}/>
          <Route path="*" element={<NotFound/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </>
  );
}

export default App;
