import { useLang } from '../../i18n/LanguageContext';
import { CERTIFICATIONS, CONTACT, SKILL_GROUPS, getAge } from '../../data/profil';
import { PROJECTS_DATA } from '../../data/projets';
import './Neofetch.css';

/* Tux, l'ASCII art classique */
const TUX = String.raw`        .--.
       |o_o |
       |:_/ |
      //   \ \
     (|     | )
    /'\_   _/'\
    \___)=(___/`;

export default function Neofetch() {
  const { tr } = useLang();
  const skillCount = SKILL_GROUPS.reduce((n, g) => n + g.skills.length, 0);

  const rows = [
    ['OS', 'Fedora Linux 44 (Workstation)'],
    [tr({ fr: 'Rôle', en: 'Role' }), tr({ fr: 'Apprenti ingénieur logiciel', en: 'Software engineering apprentice' })],
    [tr({ fr: 'Entreprise', en: 'Company' }), 'Alstom · 2026 → 2028'],
    [tr({ fr: 'École', en: 'School' }), tr({ fr: 'CPE Lyon · ingénieur ICS', en: 'CPE Lyon · CS & cybersecurity' })],
    ['Uptime', tr({ fr: `${getAge(CONTACT.birthDate)} ans`, en: `${getAge(CONTACT.birthDate)} years` })],
    ['Shell', 'zsh · bash'],
    ['Packages', tr({ fr: `${skillCount} compétences, ${PROJECTS_DATA.length} projets`, en: `${skillCount} skills, ${PROJECTS_DATA.length} projects` })],
    ['Certs', CERTIFICATIONS.map((c) => c.name.split(' ').pop()).join(', ')],
    [tr({ fr: 'Langues', en: 'Locale' }), tr({ fr: 'fr_FR (natif), en_GB (B2)', en: 'fr_FR (native), en_GB (B2)' })],
    [tr({ fr: 'Lieu', en: 'Location' }), 'Lyon, France'],
  ];

  return (
    <div className="neofetch">
      <pre className="neofetch__logo" aria-hidden="true">{TUX}</pre>
      <div className="neofetch__info">
        <p>
          <span className="c-green">alexandre</span>
          <span className="c-dim">@</span>
          <span className="c-green">portfolio</span>
        </p>
        <p className="c-dim">-------------------</p>
        {rows.map(([k, v]) => (
          <p key={k}>
            <span className="neofetch__key">{k}</span>
            <span className="c-dim">: </span>
            {v}
          </p>
        ))}
        <p className="neofetch__colors" aria-hidden="true">
          {['#1b2230', '#f87171', '#4ade80', '#ffb547', '#5b8cff', '#c084fc', '#38bdf8', '#dfe5f0'].map((c) => (
            <span key={c} style={{ background: c }} />
          ))}
        </p>
      </div>
    </div>
  );
}
