import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Fichier CSS
import './css/App.css'
import './css/variables.css'

// Component
import Navbar from './component/Navbar/Navbar'

// Views
import Accueil from './views/Accueil/Accueil'


// Specific views


function App() {

  return (
    <>
    <BrowserRouter>

    {/*Scroll to top*/}

    {/*Navbar*/}
    <Navbar/>

    <Routes>
      <Route path="/" element={<Accueil />} />
      {/*Page / */}
      {/*Page /competence */}
      {/*...*/}
      {/*Page /contact*/}

      <Route></Route>
    </Routes>

    {/*Footer*/}
    
    </BrowserRouter>

    </>
  )
}

export default App
