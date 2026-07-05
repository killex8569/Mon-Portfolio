import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './css/App.css'

/*Component*/


/*Views */
import Home from './views/Home/Home'
import NotFound from './views/not_found/not_found'

/*Projet détails de la page */



function App() {
  return (
    <>
      <BrowserRouter>
        {/* Navigation */}
        
        {/* Routes */}
        <Routes>
          <Route path="/" element={Home}/>

          <Route path="*" element={<NotFound/>} />
        </Routes>
        
      </BrowserRouter>
      
    </>
  );
}

export default App;
