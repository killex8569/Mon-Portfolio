import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [isShown, setIsShown] = useState(false);
  const toggleMobileMenu = () => {
    setIsShown(!isShown);
  };

  // Define MobileMenu component
  const MobileMenu = () => {
    return (
      <div className='mobile-menu'>
        {/* Because here isShown = true, calling toogleMobileMenu sets isShown to false in every case */}
        <Link to="/" onClick={toggleMobileMenu}>Accueil</Link>
        <Link to="/competences" onClick={toggleMobileMenu}>Mes compétences</Link>
        <Link to="/projet" onClick={toggleMobileMenu}>Mes Projets</Link>
        <Link to="/parcours" onClick={toggleMobileMenu}>Mon parcours</Link>
        <Link to="/about" onClick={toggleMobileMenu}>A propos</Link>
      </div>
    );
  };

  const [ActiveLink, setActiveLink] = useState(0);

  return (
    <>
      <div className='topnav'>

        {/* Desktop Menu, which only appears on large screens */}
        <div className='menu'>
          <Link to="/" className={ActiveLink === 0 ? "active-link" : ""} onClick={() => { setActiveLink(0) }}>Accueil</Link>
          <Link to="/competences" className={ActiveLink === 1 ? "active-link" : ""} onClick={() => { setActiveLink(1) }}>Mes compétences</Link>
          <Link to="/projet" className={ActiveLink === 2 ? "active-link" : ""} onClick={() => { setActiveLink(2) }}>Mes projets</Link>
          <Link to="/parcours" className={ActiveLink === 2 ? "active-link" : ""} onClick={() => { setActiveLink(2) }}>Mon parcours</Link>
          <Link to="/about" className={ActiveLink === 3 ? "active-link" : ""} onClick={() => { setActiveLink(3) }}>A propos</Link>
        </div>

        {/* This button only shows up on small screens. It is used to open the mobile menu */}
        <button className='show-mobile-menu-button' onClick={toggleMobileMenu}>
          &#8801;
        </button>
      </div>

      {/* The mobile menu and the close button */}
      {isShown && <MobileMenu />}
      {isShown && (
        <button className='close-mobile-menu-button' onClick={toggleMobileMenu}>
          &times;
        </button>
      )}
    </>
  );
}

export default Navbar;