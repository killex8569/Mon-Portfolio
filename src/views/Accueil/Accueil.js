import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLang } from '../../i18n/LanguageContext';
import { featuredProjects } from '../../data/projets';
import { CONTACT, MARQUEE, asset } from '../../data/profil';
import Reveal from '../../components/Reveal/Reveal';
import Icon from '../../components/Icon/Icon';
import CvMenu from '../../components/CvMenu/CvMenu';
import Window from '../../components/Window/Window';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import Shell from '../../components/Shell/Shell';
import { Prompt, TypeLoop } from '../../components/Term/Term';
import { useTerminal } from '../../components/Shell/TerminalProvider';
import './Accueil.css';

const EASE = [0.22, 0.61, 0.36, 1];
const INTRO = ['whoami', 'neofetch'];

/* Une commande « typique » par domaine, affichée dans la fenêtre */
const DOMAINS = [
  { id: 'devops', icon: 'infinity', cmd: 'ansible-playbook site.yml --check' },
  { id: 'dev', icon: 'code', cmd: 'gcc -Wall -O2 server.c -o server' },
  { id: 'systems', icon: 'server', cmd: 'systemctl status zabbix-agent' },
  { id: 'network', icon: 'shield', cmd: 'nmap -sV 10.0.10.0/24' },
];

function Hero() {
  const { t, tr } = useLang();
  const terminal = useTerminal();

  const item = (delay) => ({
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: EASE },
  });

  return (
    <section className="hero container">
      <div className="hero__text">
        <motion.p className="hero__boot" {...item(0.05)}>
          <span className="c-dim">[</span>
          <span className="c-green">  OK  </span>
          <span className="c-dim">]</span> {t('home.boot')}
        </motion.p>

        <h1 className="hero__title">
          <span className="hero__line">
            <motion.span initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ duration: 0.8, delay: 0.15, ease: EASE }}>
              Alexandre
            </motion.span>
          </span>
          <span className="hero__line">
            <motion.span
              className="text-gradient"
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.27, ease: EASE }}
            >
              Faubladier-Anette
            </motion.span>
          </span>
        </h1>

        <motion.p className="hero__role" {...item(0.45)}>
          <span className="c-amber">❯</span> <span className="c-muted">{t('home.buildPrefix')}</span>{' '}
          <TypeLoop words={t('home.rotating')} className="hero__role-word" />
        </motion.p>

        <motion.p className="hero__intro" {...item(0.6)}>
          {t('home.intro')}
        </motion.p>

        <motion.div className="hero__ctas" {...item(0.75)}>
          <Link to="/projets" className="btn btn--primary">
            <span className="btn__sigil">./</span>
            {t('common.seeProjects')}
            <Icon name="arrowRight" className="btn__arrow" />
          </Link>
          <CvMenu />
          <div className="hero__socials">
            <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Icon name="github" /></a>
            <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Icon name="linkedin" /></a>
          </div>
        </motion.div>

        <motion.div className="hero__meta" {...item(0.9)}>
          <span><Icon name="pin" /> {tr(CONTACT.location)}</span>
          <span className="hero__meta-looking"><span className="pulse-dot pulse-dot--amber" /> {t('home.looking')}</span>
        </motion.div>
      </div>

      <motion.div
        className="hero__term"
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.35, ease: EASE }}
      >
        <Window active title="alexandre@portfolio: ~ — zsh" meta="1:zsh" className="hero__win">
          <Shell intro={INTRO} />
        </Window>
        <button type="button" className="hero__term-hint" onClick={terminal.open}>
          {t('shell.anywhere')} <kbd>Ctrl</kbd> <kbd>K</kbd>
        </button>
      </motion.div>
    </section>
  );
}

function Marquee() {
  const items = [...MARQUEE, ...MARQUEE];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {items.map((s, i) => (
          <span className="marquee__item" key={`${s.name}-${i}`}>
            <img src={asset(s.logo)} alt="" loading="lazy" />
            {s.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Accueil() {
  const { t } = useLang();
  const now = t('home.now');
  const domains = t('home.domains');

  return (
    <>
      <Hero />
      <Marquee />

      {/* ── systemctl status ── */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <Prompt path="~" cmd="systemctl --user status alexandre" />
            <Reveal as="h2">{t('home.nowTitle')}</Reveal>
          </div>

          <div className="units">
            {now.map((u, i) => {
              const waiting = i === 2;
              return (
                <Reveal key={u.unit} delay={i * 110} className="units__cell">
                  <Window title={u.unit} meta="systemd" className={`unit ${waiting ? 'unit--waiting' : ''}`}>
                    <span className="unit__body">
                      <span className="unit__state">
                        <span className={`unit__dot ${waiting ? 'c-amber' : 'c-green'}`}>●</span>
                        <span className="c-muted">Active:</span>{' '}
                        <span className={waiting ? 'c-amber' : 'c-green'}>{u.state}</span>
                      </span>
                      <span className="unit__since c-dim">{u.since}</span>
                      <span className="unit__title">{u.title}</span>
                      <span className="unit__text">{u.text}</span>
                      {waiting && (
                        <Link to="/about" className="link-arrow">
                          {t('common.contactMe')}
                          <Icon name="arrowRight" />
                        </Link>
                      )}
                    </span>
                  </Window>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Domaines ── */}
      <section className="section section--tight">
        <div className="container">
          <div className="section-head section-head--row">
            <div className="section-head">
              <Prompt path="~" cmd="ls ~/domaines" />
              <Reveal as="h2">{t('home.domainsTitle')}</Reveal>
            </div>
            <Link to="/competences" className="link-arrow">
              cd competences
              <Icon name="arrowRight" />
            </Link>
          </div>

          <div className="domains">
            {domains.map((d, i) => (
              <Reveal key={d.title} delay={i * 90} animation="zoom">
                <Window title={`~/domaines/${DOMAINS[i].id}`} meta={`0${i + 1}`} className="domain">
                  <span className="domain__body">
                    <span className="domain__icon"><Icon name={DOMAINS[i].icon} /></span>
                    <span className="domain__title">{d.title}</span>
                    <span className="domain__text">{d.text}</span>
                    <code className="domain__cmd">
                      <span className="c-green">$</span> {DOMAINS[i].cmd}
                    </code>
                  </span>
                </Window>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projets ── */}
      <section className="section">
        <div className="container">
          <div className="section-head section-head--row">
            <div className="section-head">
              <Prompt path="~" cmd="ls ~/projets --featured" />
              <Reveal as="h2">{t('home.projectsTitle')}</Reveal>
            </div>
            <Link to="/projets" className="link-arrow">
              cd projets
              <Icon name="arrowRight" />
            </Link>
          </div>

          <div className="home-projects">
            {featuredProjects.map((p, i) => (
              <Reveal key={p.slug} delay={i * 90} className="home-projects__cell">
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section section--tight">
        <div className="container">
          <Reveal animation="zoom">
            <Window active title="~/contact.sh" meta="bash" className="home-cta">
              <span className="home-cta__body">
                <Prompt path="~" cmd="./contact.sh" />
                <span className="home-cta__title">{t('home.ctaTitle')}</span>
                <span className="home-cta__text">{t('home.ctaText')}</span>
                <span className="home-cta__actions">
                  <a href={`mailto:${CONTACT.email}`} className="btn btn--accent">
                    <Icon name="mail" />
                    {t('common.contactMe')}
                  </a>
                  <CvMenu direction="up" />
                </span>
              </span>
            </Window>
          </Reveal>
        </div>
      </section>
    </>
  );
}
