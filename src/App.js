import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Accueil from './views/Accueil/Accueil'
import Navbar from './components/Navbar/Navbar'
import './css/App.css'
import Footer from './components/Footer/Footer';
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
          <Route path="/about" element={<About/>}/>
          <Route path="*" element={<NotFound/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </>
  );
}

export default App;
