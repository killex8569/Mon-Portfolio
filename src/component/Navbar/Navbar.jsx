import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';


function Navbar() {
  const [isShown, setIsShown] = useState(false);
  const [activeLink, setActiveLink] = useState(0);

  const openMobileMenu = () => setIsShown(true);
  const closeMobileMenu = () => setIsShown(false);

  const handleMobileLinkClick = (index) => {
    setActiveLink(index);
    setIsShown(false);
  };

  return (
    <>
      <div className="topnav">
        <div className="menu">
          <div className="Title">
            <Link to="/" onClick={() => setActiveLink(0)}>
              
            </Link>
          </div>

          <Link to="/" className={activeLink === 0 ? 'active-link' : ''} onClick={() => setActiveLink(0)}>Accueil</Link>
          <Link to="/formule" className={activeLink === 1 ? 'active-link' : ''} onClick={() => setActiveLink(1)}>Nos formules</Link>
          <Link to="/agence" className={activeLink === 2 ? 'active-link' : ''} onClick={() => setActiveLink(2)}>Nos agences</Link>
          <Link to="/nous-rejoindre" className={activeLink === 3 ? 'active-link' : ''} onClick={() => setActiveLink(3)}>Nous rejoindre</Link>
          <Link to="/qui-sommes-nous" className={activeLink === 4 ? 'active-link' : ''} onClick={() => setActiveLink(4)}>Qui sommes nous</Link>
          <Link to="/about" className={activeLink === 5 ? 'active-link' : ''} onClick={() => setActiveLink(5)}>Contact</Link>
        </div>

        {/* ── Burger mobile ── */}
        <button className="show-mobile-menu-button" onClick={openMobileMenu}>
          &#8801;
        </button>
      </div>

      {isShown && (
        <>
          <div className="mobile-menu">
            <Link to="/" onClick={() => handleMobileLinkClick(0)}>Accueil</Link>
            <Link to="/formule" onClick={() => handleMobileLinkClick(1)}>Nos formules</Link>
            <Link to="/agence" onClick={() => handleMobileLinkClick(2)}>Nos agences</Link>
            <Link to="/nous-rejoindre" onClick={() => handleMobileLinkClick(3)}>Nous rejoindre</Link>
            <Link to="/qui-sommes-nous" onClick={() => handleMobileLinkClick(4)}>Qui sommes nous</Link>
            <Link to="/about" onClick={() => handleMobileLinkClick(5)}>Contact</Link>
          </div>
          <button className="close-mobile-menu-button" onClick={closeMobileMenu}>
            &times;
          </button>
        </>
      )}
    </>
  );
}

export default Navbar;