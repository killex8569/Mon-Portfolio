import { Link } from 'react-router-dom';
import './not_found.css';

function NotFound() {
  return (
    <div className="nf-wrap">
      <div className="nf-card">
        <div className="nf-code">404</div>
        <div className="nf-divider"></div>
        <h1 className="nf-title">Page introuvable</h1>
        <p className="nf-sub">
          La page que vous cherchez n'existe pas ou a été déplacée.
        </p>
        <Link to="/" className="nf-btn">Retour à l'accueil</Link>
      </div>
    </div>
  );
}

export default NotFound;