import { useState } from 'react';
import { useLang } from '../../i18n/LanguageContext';
import { PROJECTS_DATA } from '../../data/projets';
import { CERTIFICATIONS, INTERESTS, LANGUAGES, SKILL_GROUPS, SOFT_SKILLS, TIMELINE, asset } from '../../data/profil';
import Reveal from '../../components/Reveal/Reveal';
import Icon from '../../components/Icon/Icon';
import Window from '../../components/Window/Window';
import Lightbox from '../../components/Lightbox/Lightbox';
import CvMenu from '../../components/CvMenu/CvMenu';
import { Prompt } from '../../components/Term/Term';
import { Counter } from '../../components/Motion/Motion';
import './Competences.css';

function SkillRow({ skill, index, learning = false }) {
  const { t, tr } = useLang();
  const name = tr(skill.name);
  return (
    <span className={`pkg ${learning ? 'pkg--learning' : ''}`} style={{ '--i': index }}>
      <span className="pkg__logo">
        {skill.logo ? <img src={asset(skill.logo)} alt="" loading="lazy" /> : <span>{name.replace(/[^A-Za-zÀ-ÿ0-9]/g, '').slice(0, 2)}</span>}
      </span>
      <span className="pkg__name">{name}</span>
      {learning ? (
        <span className="pkg__progress" aria-label={t('skills.learning')}><span /></span>
      ) : (
        <span className="pkg__state">✓</span>
      )}
    </span>
  );
}

export default function Competences() {
  const { t, tr } = useLang();
  const [certIndex, setCertIndex] = useState(null);

  const stats = [
    { value: TIMELINE.filter((e) => e.type === 'work').length, max: 6, label: t('skills.stats.experiences') },
    { value: CERTIFICATIONS.length, max: 6, label: t('skills.stats.certifications') },
    { value: PROJECTS_DATA.filter((p) => p.category !== 'pro').length, max: 20, label: t('skills.stats.projects') },
    { value: new Date().getFullYear() - 2023, max: 5, label: t('skills.stats.years') },
  ];

  const certImages = CERTIFICATIONS.map((c) => ({ src: asset(c.image), alt: c.name }));

  return (
    <div className="container skills">
      <header className="page-hero">
        <Prompt path="~/competences" cmd="dnf list --installed" />
        <Reveal as="h1" className="page-hero__title" delay={80}>
          {t('skills.title')}
        </Reveal>
        <Reveal as="p" className="lead" delay={160}>
          {t('skills.intro')}
        </Reveal>
      </header>

      {/* ── htop ── */}
      <Reveal>
        <Window title="htop" meta="alexandre" className="htop">
          <span className="htop__body">
            {stats.map((s) => (
              <span key={s.label} className="htop__row">
                <span className="htop__value"><Counter to={s.value} /></span>
                <span className="htop__bar" aria-hidden="true">
                  [<span className="htop__fill" style={{ '--p': Math.min(1, s.value / s.max) }} />]
                </span>
                <span className="htop__label">{s.label}</span>
              </span>
            ))}
          </span>
        </Window>
      </Reveal>

      {/* ── Paquets par catégorie (tiling) ── */}
      <section className="tiles">
        {SKILL_GROUPS.map((group, i) => (
          <Reveal
            key={group.id}
            delay={(i % 3) * 80}
            className={`tiles__cell ${group.size === 'wide' ? 'tiles__cell--wide' : ''}`}
          >
            <Window
              title={`~/competences/${group.id}.txt`}
              meta={`${group.skills.length} ${t('skills.installed')}`}
              className="skill-win"
            >
              <span className="skill-win__body">
                <span className="skill-win__head">
                  <Icon name={group.icon} />
                  <h2>{tr(group.title)}</h2>
                </span>
                <span className="pkgs">
                  {group.skills.map((s, j) => <SkillRow key={tr(s.name)} skill={s} index={j} />)}
                </span>
                {group.learning && (
                  <span className="skill-win__learning">
                    <span className="skill-win__cmd">
                      <span className="c-green">$</span> sudo dnf install {group.learning.map((s) => tr(s.name).toLowerCase().replace(/\W/g, '')).join(' ')}
                    </span>
                    <span className="pkgs">
                      {group.learning.map((s, j) => <SkillRow key={tr(s.name)} skill={s} index={j} learning />)}
                    </span>
                  </span>
                )}
              </span>
            </Window>
          </Reveal>
        ))}
      </section>

      {/* ── Certifications ── */}
      <section className="section section--tight">
        <div className="section-head">
          <Prompt path="~/competences" cmd="ls ~/certs/*.pdf" />
          <Reveal as="h2">{t('skills.certsTitle')}</Reveal>
        </div>

        <div className="certs">
          {CERTIFICATIONS.map((c, i) => (
            <Reveal key={c.id} delay={i * 80} className="certs__cell">
              <Window as="button" type="button" title={`${c.id}.pdf`} meta={c.year} className="cert" onClick={() => setCertIndex(i)}>
                <span className="cert__image">
                  <img src={asset(c.image)} alt={c.name} loading="lazy" />
                </span>
                <span className="cert__body">
                  <strong>{c.name}</strong>
                  <span className="cert__issuer">{tr(c.issuer)}</span>
                  <span className="cert__desc">{tr(c.desc)}</span>
                </span>
              </Window>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Langues, savoir-être, intérêts ── */}
      <section className="extras">
        <Reveal className="extras__cell">
          <Window title="locale" meta={t('skills.languages')} className="extra">
            <span className="extra__body">
              {LANGUAGES.map((l) => (
                <span key={tr(l.name)} className="lang">
                  <span className="lang__row">
                    <strong>{tr(l.name)}</strong>
                    <span className="c-muted">{tr(l.level)}</span>
                  </span>
                  <span className="lang__bar" aria-hidden="true">
                    [<span className="lang__fill" style={{ '--p': l.value / 100 }} />]
                    <span className="lang__pct">{l.value}%</span>
                  </span>
                </span>
              ))}
            </span>
          </Window>
        </Reveal>

        <Reveal className="extras__cell" delay={100}>
          <Window title="cat soft-skills.txt" meta={t('skills.softSkills')} className="extra">
            <span className="extra__body extra__list">
              {tr(SOFT_SKILLS).map((s) => <span key={s}><span className="c-amber">›</span> {s}</span>)}
            </span>
          </Window>
        </Reveal>

        <Reveal className="extras__cell" delay={200}>
          <Window title="cat hobbies.txt" meta={t('skills.interests')} className="extra">
            <span className="extra__body extra__list">
              {tr(INTERESTS).map((s) => <span key={s}><span className="c-amber">›</span> {s}</span>)}
            </span>
          </Window>
        </Reveal>
      </section>

      {/* ── CV ── */}
      <Reveal className="skills__cv-wrap">
        <Window active title="wget cv.pdf" meta="bash" className="skills__cv">
          <span className="skills__cv-body">
            <span>
              <span className="skills__cv-title">{t('skills.cvTitle')}</span>
              <span className="skills__cv-text">{t('skills.cvText')}</span>
            </span>
            <CvMenu variant="primary" align="right" direction="up" />
          </span>
        </Window>
      </Reveal>

      <Lightbox images={certImages} index={certIndex} onChange={setCertIndex} />
    </div>
  );
}
