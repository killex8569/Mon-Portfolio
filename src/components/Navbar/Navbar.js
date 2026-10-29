import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { navbarProjects, PROJECTS_DATA } from '../../data/projets';
import { CONTACT } from '../../data/profil';
import { useLang } from '../../i18n/LanguageContext';
import { useTerminal } from '../Shell/TerminalProvider';
import { routeToSegs, segsToPath } from '../Shell/fs';
import Icon from '../Icon/Icon';
import CvMenu from '../CvMenu/CvMenu';
import './Navbar.css';

/* Espaces de travail (l'ordre sert aussi au sens des transitions de page) */
export const WORKSPACES = [
  { to: '/', key: 'home', dir: '~' },
  { to: '/competences', key: 'skills', dir: 'competences' },
  { to: '/projets', key: 'projects', dir: 'projets', dropdown: true },
  { to: '/parcours', key: 'journey', dir: 'parcours' },
  { to: '/about', key: 'contact', dir: 'contact' },
];

export const workspaceIndex = (pathname) => {
  const i = WORKSPACES.findIndex((w) => (w.to === '/' ? pathname === '/' : pathname.startsWith(w.to)));
  return i < 0 ? WORKSPACES.length : i;
};

export function LangToggle({ id = 'desktop' }) {
  const { lang, setLang, t } = useLang();
  return (
    <div className="lang-toggle" role="group" aria-label={t('nav.switchLang')}>
      {['fr', 'en'].map((l) => (
        <button
          key={l}
          type="button"
          className={`lang-toggle__btn ${lang === l ? 'is-active' : ''}`}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
        >
          {lang === l && (
            <motion.span layoutId={`lang-pill-${id}`} className="lang-toggle__pill" transition={{ type: 'spring', stiffness: 500, damping: 35 }} />
          )}
          <span className="lang-toggle__label">{l}</span>
        </button>
      ))}
    </div>
  );
}

function Clock() {
  const { lang } = useLang();
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 15000);
    return () => clearInterval(id);
  }, []);
  const locale = lang === 'fr' ? 'fr-FR' : 'en-GB';
  return (
    <span className="bar__mod bar__clock" title={now.toLocaleDateString(locale)}>
      <span className="c-dim">{now.toLocaleDateString(locale, { weekday: 'short', day: '2-digit', month: 'short' })}</span>{' '}
      {now.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit' })}
    </span>
  );
}

/* Lanceur façon rofi (menu mobile) */
function Launcher({ onClose }) {
  const { t, tr } = useLang();
  const navigate = useNavigate();
  const terminal = useTerminal();
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const inputRef = useRef(null);

  const items = useMemo(() => {
    const all = [
      ...WORKSPACES.map((w, i) => ({ id: w.to, label: t(`nav.${w.key}`), hint: `${i + 1}`, to: w.to, icon: 'folder' })),
      { id: 'terminal', label: t('shell.open'), hint: '>_', action: 'terminal', icon: 'terminal' },
      ...PROJECTS_DATA.map((p) => ({ id: p.slug, label: tr(p.name), hint: t('nav.projectHint'), to: `/projets/${p.slug}`, icon: 'code' })),
    ];
    const q = query.trim().toLowerCase();
    return q ? all.filter((i) => i.label.toLowerCase().includes(q) || i.id.toLowerCase().includes(q)) : all;
  }, [query, t, tr]);

  useEffect(() => setActive(0), [query]);

  // Focus direct sur desktop seulement (sur mobile, ça ouvrirait le clavier)
  useEffect(() => {
    if (window.matchMedia('(pointer: fine)').matches) inputRef.current?.focus();
  }, []);

  const run = (item) => {
    if (!item) return;
    onClose();
    if (item.action === 'terminal') setTimeout(terminal.open, 200);
    else navigate(item.to);
  };

  const onKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((a) => Math.min(items.length - 1, a + 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((a) => Math.max(0, a - 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      run(items[active]);
    }
  };

  return (
    <motion.div
      className="launcher"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        className="launcher__box"
        initial={{ opacity: 0, y: -16, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -10, scale: 0.98 }}
        transition={{ duration: 0.25, ease: [0.22, 0.61, 0.36, 1] }}
      >
        <label className="launcher__search">
          <span className="c-amber">drun</span>
          <span className="c-dim">›</span>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder={t('nav.search')}
            spellCheck={false}
            autoComplete="off"
          />
        </label>

        <ul className="launcher__list">
          {items.map((item, i) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: Math.min(i, 10) * 0.025 }}
            >
              <button
                type="button"
                className={`launcher__item ${i === active ? 'is-active' : ''}`}
                onMouseEnter={() => setActive(i)}
                onClick={() => run(item)}
              >
                <Icon name={item.icon} />
                <span>{item.label}</span>
                <span className="launcher__hint">{item.hint}</span>
              </button>
            </motion.li>
          ))}
          {items.length === 0 && <li className="launcher__empty">{t('nav.noResult')}</li>}
        </ul>

        <div className="launcher__footer">
          <LangToggle id="mobile" />
          <div className="launcher__socials">
            <a href={`mailto:${CONTACT.email}`} aria-label="E-mail"><Icon name="mail" /></a>
            <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Icon name="linkedin" /></a>
            <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Icon name="github" /></a>
          </div>
          <CvMenu label={t('nav.cv')} size="sm" variant="primary" align="right" direction="up" />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Navbar() {
  const { pathname } = useLocation();
  const { t } = useLang();
  const terminal = useTerminal();
  const [scrolled, setScrolled] = useState(false);
  const [launcherOpen, setLauncherOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const closeTimer = useRef(null);
  const current = workspaceIndex(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setLauncherOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!launcherOpen) return undefined;
    const onKey = (e) => e.key === 'Escape' && setLauncherOpen(false);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [launcherOpen]);

  const openDropdown = () => {
    clearTimeout(closeTimer.current);
    setDropdownOpen(true);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setDropdownOpen(false), 140);
  };

  const windowTitle = `${segsToPath(routeToSegs(pathname))} — zsh`;

  return (
    <>
      <header className={`bar ${scrolled ? 'bar--scrolled' : ''}`}>
        <div className="bar__inner">
          {/* ── Gauche : logo + espaces de travail ── */}
          <div className="bar__left">
            <Link to="/" className="bar__logo" aria-label={t('nav.home')}>AF</Link>

            <nav className="bar__ws" aria-label="Navigation">
              {WORKSPACES.map((w, i) => {
                const active = i === current;
                const link = (
                  <Link
                    to={w.to}
                    className={`ws ${active ? 'is-active' : ''}`}
                    aria-current={active ? 'page' : undefined}
                    {...(w.dropdown ? { 'aria-haspopup': 'true', 'aria-expanded': dropdownOpen } : {})}
                  >
                    {active && <motion.span layoutId="ws-active" className="ws__bg" transition={{ type: 'spring', stiffness: 420, damping: 34 }} />}
                    <span className="ws__num">{i + 1}</span>
                    <span className="ws__label">{t(`nav.${w.key}`)}</span>
                    {w.dropdown && <Icon name="chevronDown" className="ws__chevron" />}
                  </Link>
                );

                if (!w.dropdown) return <span key={w.to}>{link}</span>;

                return (
                  <div
                    key={w.to}
                    className={`ws-dropdown ${dropdownOpen ? 'is-open' : ''}`}
                    onMouseEnter={openDropdown}
                    onMouseLeave={scheduleClose}
                    onFocus={openDropdown}
                    onBlur={scheduleClose}
                  >
                    {link}
                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          className="ws-panel"
                          initial={{ opacity: 0, y: -6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          transition={{ duration: 0.16 }}
                        >
                          <p className="ws-panel__cmd">
                            <span className="c-green">$</span> ls ~/projets
                          </p>
                          <div className="ws-panel__grid">
                            {navbarProjects.map((p) => (
                              <Link
                                key={p.slug}
                                to={`/projets/${p.slug}`}
                                className={`ws-panel__item ${pathname === `/projets/${p.slug}` ? 'is-active' : ''}`}
                              >
                                <span className={`ws-panel__dot ws-panel__dot--${p.status}`} />
                                <span className="ws-panel__name">{p.label}/</span>
                                <span className="ws-panel__status">{t(`status.${p.status}`)}</span>
                              </Link>
                            ))}
                          </div>
                          <Link to="/projets" className="ws-panel__all">
                            <span><span className="c-green">$</span> cd ~/projets</span>
                            <Icon name="arrowRight" />
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </nav>

            <span className="bar__path">{segsToPath(routeToSegs(pathname))}</span>
          </div>

          {/* ── Centre : titre de la fenêtre active ── */}
          <div className="bar__center">
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={windowTitle}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
              >
                {windowTitle}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* ── Droite : modules ── */}
          <div className="bar__right">
            <button type="button" className="bar__mod bar__term" onClick={terminal.open} title={t('shell.open')}>
              <Icon name="terminal" />
              <span className="bar__term-label">{t('shell.short')}</span>
              <kbd>Ctrl K</kbd>
            </button>
            <div className="bar__desktop-only">
              <LangToggle />
            </div>
            <Clock />
            <div className="bar__desktop-only">
              <CvMenu label={t('nav.cv')} size="sm" variant="primary" align="right" />
            </div>
            <button
              type="button"
              className="bar__burger"
              onClick={() => setLauncherOpen(true)}
              aria-label={t('nav.menu')}
              aria-expanded={launcherOpen}
            >
              <Icon name="menu" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>{launcherOpen && <Launcher onClose={() => setLauncherOpen(false)} />}</AnimatePresence>
    </>
  );
}
