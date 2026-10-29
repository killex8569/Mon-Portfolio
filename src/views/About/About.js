import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLang } from '../../i18n/LanguageContext';
import { CONTACT, CV, getAge } from '../../data/profil';
import Reveal from '../../components/Reveal/Reveal';
import Icon from '../../components/Icon/Icon';
import Window from '../../components/Window/Window';
import Neofetch from '../../components/Neofetch/Neofetch';
import GithubActivity from '../../components/Github/Github';
import { Prompt } from '../../components/Term/Term';
import './About.css';

function CopyEmail() {
  const { t } = useLang();
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${CONTACT.email}`;
    }
  };

  return (
    <button type="button" className="btn btn--ghost btn--sm contact-copy" onClick={copy}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={copied ? 'ok' : 'copy'}
          className="contact-copy__inner"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.16 }}
        >
          <Icon name={copied ? 'check' : 'copy'} />
          {copied ? t('common.copied') : t('common.copy')}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

export default function About() {
  const { t, tr } = useLang();
  const age = getAge(CONTACT.birthDate);

  const rows = [
    { key: t('contact.phone'), value: CONTACT.phone, href: CONTACT.phoneHref, icon: 'phone' },
    { key: t('contact.location'), value: tr(CONTACT.location), icon: 'pin' },
    { key: 'linkedin', value: 'alexandre-faubladier-anette', href: CONTACT.linkedin, external: true, icon: 'linkedin' },
    { key: 'github', value: `@${CONTACT.githubUser}`, href: CONTACT.github, external: true, icon: 'github' },
  ];

  return (
    <div className="container contact">
      <header className="page-hero">
        <Prompt path="~/contact" cmd="cat contact.txt" />
        <Reveal as="h1" className="page-hero__title" delay={80}>
          {t('contact.title')}
        </Reveal>
        <Reveal as="p" className="lead" delay={160}>
          {t('contact.intro')}
        </Reveal>
      </header>

      {/* ── contact.txt + CV ── */}
      <section className="contact__grid">
        <Reveal className="contact__main-cell">
          <Window active title="~/contact/contact.txt" meta="utf-8" className="contact__main">
            <span className="contact__body">
              <span className="contact__email-row">
                <span className="contact__key">{t('contact.email')}</span>
                <a href={`mailto:${CONTACT.email}`} className="contact__email">{CONTACT.email}</a>
              </span>
              <span className="contact__actions">
                <a href={`mailto:${CONTACT.email}`} className="btn btn--primary btn--sm">
                  <Icon name="mail" />
                  {t('common.contactMe')}
                </a>
                <CopyEmail />
              </span>

              <span className="contact__rows">
                {rows.map((r, i) => {
                  const Tag = r.href ? 'a' : 'span';
                  return (
                    <Reveal as="span" key={r.key} delay={120 + i * 70} animation="left" className="contact__row-wrap">
                      <Tag
                        className={`contact__row ${r.href ? 'is-link' : ''}`}
                        {...(r.href ? { href: r.href } : {})}
                        {...(r.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      >
                        <span className="contact__key"><Icon name={r.icon} />{r.key}</span>
                        <span className="contact__value">{r.value}</span>
                        {r.href && <Icon name="arrowUpRight" className="contact__arrow" />}
                      </Tag>
                    </Reveal>
                  );
                })}
              </span>
            </span>
          </Window>
        </Reveal>

        <Reveal className="contact__side-cell" delay={140}>
          <Window title="~/contact/cv/" meta="2 files" className="contact__cv">
            <span className="contact__cv-body">
              <Prompt path="~/contact" cmd="ls cv/" />
              <span className="contact__cv-text">{t('contact.cvText')}</span>
              {[
                { code: 'fr', href: CV.fr, label: t('common.cvFr') },
                { code: 'en', href: CV.en, label: t('common.cvEn') },
              ].map((c) => (
                <a key={c.code} href={c.href} target="_blank" rel="noopener noreferrer" className="contact__file">
                  <span className="contact__file-icon">PDF</span>
                  <span className="contact__file-name">
                    <strong>cv_{c.code}.pdf</strong>
                    <small>{c.label}</small>
                  </span>
                  <Icon name="download" />
                </a>
              ))}
            </span>
          </Window>
        </Reveal>
      </section>

      {/* ── about.md ── */}
      <section className="section about">
        <Reveal className="about__fetch" animation="right">
          <Window title="neofetch" meta="zsh" className="about__fetch-win">
            <span className="about__fetch-body">
              <Neofetch />
            </span>
          </Window>
        </Reveal>

        <Reveal className="about__text-cell" delay={120}>
          <Window title="~/about.md" meta="markdown" className="about__text-win">
            <span className="about__text">
              <span className="about__h"><span className="c-amber">#</span> {t('contact.aboutTitle')}</span>
              {t('contact.about')(age).map((p, i) => (
                <span key={i} className={`about__p ${i === 0 ? 'about__p--lead' : ''}`}>{p}</span>
              ))}
            </span>
          </Window>
        </Reveal>
      </section>

      {/* ── GitHub ── */}
      <Reveal>
        <Window title="gh api /users/killex8569/contributions" meta="github" className="contact__github">
          <span className="contact__github-body">
            <span className="contact__github-head">
              <span className="contact__github-title"><Icon name="github" />{t('contact.githubTitle')}</span>
              <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" className="link-arrow">
                @{CONTACT.githubUser}
                <Icon name="arrowUpRight" />
              </a>
            </span>
            <GithubActivity username={CONTACT.githubUser} />
          </span>
        </Window>
      </Reveal>
    </div>
  );
}
