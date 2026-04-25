import { Link, useLocation } from 'react-router-dom';
import { useState, useRef } from 'react';
import './Navbar.css';

export const PROJECTS = [
  { slug: 'DNSA',     label: 'DNSA',     status: 'done'            },
  { slug: 'Canpai',   label: 'Canpai',   status: 'in-progress'     },
  { slug: 'projet-3', label: 'Projet 3', status: 'en-construction' },
];

function Navbar() {
  const [isShown, setIsShown] = useState(false);
  const [ActiveLink, setActiveLink] = useState(0);
  const [dropdownOpen, setDropdown] = useState(false);
  const closeTimer = useRef(null);
  const location = useLocation();

  const toggleMobileMenu = () => setIsShown(!isShown);
  const openDropdown     = () => { clearTimeout(closeTimer.current); setDropdown(true); };
  const scheduleClose    = () => { closeTimer.current = setTimeout(() => setDropdown(false), 150); };

  const isProjectActive = PROJECTS.some(p => location.pathname === `/projets/${p.slug}`)
    || location.pathname === '/projets';

  const MobileMenu = () => (
    <div className='mobile-menu'>
      <Link to="/"            onClick={toggleMobileMenu}>accueil</Link>
      <Link to="/competences" onClick={toggleMobileMenu}>compétences</Link>
      <Link to="/projets"     onClick={toggleMobileMenu}>projets</Link>
      <Link to="/parcours"    onClick={toggleMobileMenu}>parcours</Link>
      <Link to="/about"       onClick={toggleMobileMenu}>contact</Link>
    </div>
  );

  return (
    <>
      <div className='topnav'>

        {/* ── Desktop Menu ── */}
        <div className='menu'>
          <div className='Title'>Alexandre Faubladier--Anette</div>

          <Link to="/" className={ActiveLink === 0 ? 'active-link' : ''} onClick={() => setActiveLink(0)}>
            Accueil
          </Link>

          <Link to="/competences" className={ActiveLink === 1 ? 'active-link' : ''} onClick={() => setActiveLink(1)}>
            compétences
          </Link>

          {/* ── Dropdown Projets ── */}
          <div
            className={`dropdown-wrapper ${dropdownOpen ? 'is-open' : ''}`}
            onMouseEnter={openDropdown}
            onMouseLeave={scheduleClose}
          >
            <Link
              to="/projets"
              className={ActiveLink === 2 || isProjectActive ? 'active-link' : ''}
              onClick={() => { setActiveLink(2); setDropdown(false); }}
            >
              projets
              <svg className="dropdown-chevron" viewBox="0 0 10 6" fill="none" aria-hidden="true">
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>

            <div className="dropdown-panel" onMouseEnter={openDropdown} onMouseLeave={scheduleClose}>
              <div className="dropdown-inner">
                {PROJECTS.map(p => (
                  <Link
                    key={p.slug}
                    to={`/projets/${p.slug}`}
                    className={`dropdown-item ${location.pathname === `/projets/${p.slug}` ? 'dropdown-item--active' : ''}`}
                    onClick={() => { setActiveLink(2); setDropdown(false); }}
                  >
                    <span className={`dropdown-dot status--${p.status}`} />
                    {p.label}
                  </Link>
                ))}
                <Link to="/projets" className="dropdown-all" onClick={() => { setActiveLink(2); setDropdown(false); }}>
                  Voir tous →
                </Link>
              </div>
            </div>
          </div>

          <Link to="/parcours" className={ActiveLink === 3 ? 'active-link' : ''} onClick={() => setActiveLink(3)}>
            parcours
          </Link>

          <Link to="/about" className={ActiveLink === 4 ? 'active-link' : ''} onClick={() => setActiveLink(4)}>
            contact
          </Link>
        </div>

        {/* ── Burger mobile ── */}
        <button className='show-mobile-menu-button' onClick={toggleMobileMenu}>
          &#8801;
        </button>
      </div>

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