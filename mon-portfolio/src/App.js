import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Accueil from './views/Accueil/Accueil'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';
import Competences from './views/Competences/Competences';
import About from './views/about/About';

function App() {
  return (
    <>
      <BrowserRouter>
        {/* Navigation */}
        <Navbar/>
        <title>Mon Portfolio</title>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/competences" element={<Competences />} />
          <Route path="/parcours" element={<h1>Notre parcours</h1>} />
          <Route path="/projet" element={<h1>Mes projets</h1>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="*" element={<h1>404 - Page non trouvée</h1>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
