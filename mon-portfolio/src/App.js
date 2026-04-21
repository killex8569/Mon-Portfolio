import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Accueil from './views/Accueil/Accueil'
import Navbar from './components/Navbar/Navbar'
import './css/App.css'
import Footer from './components/Footer/Footer';
import Competences from './views/Competences/Competences';
import About from './views/About/About';
import NotreParcours from './views/Notre-parcours/NotreParcours';

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
          <Route path="/parcours" element={<NotreParcours/>} />
          <Route path="/about" element={<About/>}/>
          <Route path="*" element={<h1>404 - Page non trouvée</h1>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
