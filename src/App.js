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
import ProjetPortfolio from './views/Projects/ProjetDNSA'


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
          <Route path="/projets/dnsa" element={<ProjetPortfolio />}  />
          <Route path="/about" element={<About/>}/>
          <Route path="*" element={<NotFound/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </>
  );
}

export default App;
