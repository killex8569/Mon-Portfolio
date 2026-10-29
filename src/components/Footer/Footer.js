import { Link, useLocation } from 'react-router-dom';
import { useLang } from '../../i18n/LanguageContext';
import { CONTACT } from '../../data/profil';
import { WORKSPACES, workspaceIndex } from '../Navbar/Navbar';
import Icon from '../Icon/Icon';
import Reveal from '../Reveal/Reveal';
import { Prompt } from '../Term/Term';
import './Footer.css';

export default function Footer() {
  const { t } = useLang();
  const { pathname } = useLocation();
  const current = workspaceIndex(pathname);
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        {/* La page contact affiche déjà l'e-mail en grand */}
        {pathname !== '/about' && (
          <Reveal className="footer__cta">
            <Prompt path="~" cmd={`mail -s "${t('footer.mailSubject')}" alexandre`} />
            <a href={`mailto:${CONTACT.email}`} className="footer__mail">
              <span className="text-gradient">{CONTACT.email}</span>
              <Icon name="arrowUpRight" />
            </a>
          </Reveal>
        )}

        <div className="footer__grid">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">AF</Link>
            <p className="footer__name">{CONTACT.name}</p>
            <p className="footer__tagline">{t('footer.tagline')}</p>
            <div className="footer__socials">
              <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Icon name="github" /></a>
              <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Icon name="linkedin" /></a>
              <a href={`mailto:${CONTACT.email}`} aria-label="E-mail"><Icon name="mail" /></a>
            </div>
          </div>

          <div className="footer__col">
            <h4>~/</h4>
            <ul>
              {WORKSPACES.map((w) => (
                <li key={w.to}><Link to={w.to}>{w.dir === '~' ? '~' : `${w.dir}/`} <span>{t(`nav.${w.key}`)}</span></Link></li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4>/etc/{t('footer.education')}</h4>
            <ul>
              <li><a href="https://www.cpe.fr/" target="_blank" rel="noopener noreferrer">CPE Lyon</a></li>
              <li><a href="https://www.leschartreux.com/" target="_blank" rel="noopener noreferrer">Institution des Chartreux</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>/usr/src</h4>
            <ul>
              <li><a href="https://github.com/killex8569/Mon-Portfolio" target="_blank" rel="noopener noreferrer">{t('footer.sourceCode')}</a></li>
              <li><a href="https://react.dev/" target="_blank" rel="noopener noreferrer">React</a></li>
              <li><a href="https://vercel.com" target="_blank" rel="noopener noreferrer">Vercel</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Barre d'état façon tmux */}
      <div className="tmux">
        <div className="tmux__inner">
          <span className="tmux__session">[portfolio]</span>
          <span className="tmux__windows">
            {WORKSPACES.map((w, i) => (
              <Link key={w.to} to={w.to} className={i === current ? 'is-active' : ''}>
                {i}:{w.dir === '~' ? 'home' : w.dir}{i === current ? '*' : ''}
              </Link>
            ))}
          </span>
          <span className="tmux__right">
            <span className="tmux__built">{t('footer.built')}</span>
            <span className="tmux__host">© {year} alexandre@lyon</span>
            <button type="button" className="tmux__top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label={t('footer.backToTop')}>
              <Icon name="arrowUp" />
            </button>
          </span>
        </div>
      </div>
    </footer>
  );
}
