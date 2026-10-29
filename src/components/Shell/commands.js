/**
 * Commandes du terminal interactif.
 * Chaque commande : run(args, ctx) → contenu à afficher (ReactNode, string ou null).
 *   ctx = { lang, L, cwd, setCwd, go, setLang, clear, close, history, inline }
 *   L(fr, en) choisit le texte dans la langue courante.
 */
import { PROJECTS_DATA } from '../../data/projets';
import { CONTACT, CV, getAge } from '../../data/profil';
import Neofetch from '../Neofetch/Neofetch';
import { completePath, isDir, listDir, resolve, segsToPath, segsToRoute, statFile } from './fs';

const STATUS_CLASS = {
  termine: 'c-green',
  'en-cours': 'c-amber',
  'en-construction': 'c-magenta',
  'en-revision': 'c-cyan',
};

const STATUS_LABEL = {
  fr: { termine: 'terminé', 'en-cours': 'en cours', 'en-construction': 'en construction', 'en-revision': 'en révision' },
  en: { termine: 'done', 'en-cours': 'in progress', 'en-construction': 'building', 'en-revision': 'reviewing' },
};

const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) ? v[lang] ?? v.fr : v);

const ext = (href, label) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="sh-link">{label ?? href}</a>
);

/* ── Rendus de fichiers ───────────────────── */
function renderFile(stat, { lang, L }) {
  switch (stat.kind) {
    case 'about':
      return (
        <div className="sh-md">
          <p className="c-amber"># {L('À propos', 'About me')}</p>
          <p>
            {L(
              `Alexandre, ${getAge(CONTACT.birthDate)} ans, Lyon. Apprenti ingénieur logiciel chez Alstom et élève ingénieur en informatique & cybersécurité à CPE Lyon.`,
              `Alexandre, ${getAge(CONTACT.birthDate)}, Lyon (France). Software engineering apprentice at Alstom and computer science & cybersecurity engineering student at CPE Lyon.`
            )}
          </p>
          <p>
            {L(
              "DevOps, développement logiciel, systèmes & réseaux. Passionné de robotique (club Galiléo), d'astronomie et de musique.",
              'DevOps, software development, systems & networks. Into robotics (Galiléo club), astronomy and music.'
            )}
          </p>
          <p className="c-green">{L("→ Recherche un stage à l'étranger, juin – août 2027.", '→ Looking for an internship abroad, June – August 2027.')}</p>
        </div>
      );
    case 'pdf':
      return (
        <span>
          <span className="c-red">%PDF-1.7 ��� {L('fichier binaire', 'binary file')}</span>
          {' — '}
          {L('essaie', 'try')} <span className="c-amber">open cv_{stat.data}.pdf</span>
        </span>
      );
    case 'img':
      return <span className="c-red">{L("Impossible d'afficher une image dans le terminal. Ouvre la page du projet.", "Can't display an image in a terminal. Open the project page.")}</span>;
    case 'readme': {
      const p = stat.data;
      return (
        <div className="sh-md">
          <p className="c-amber"># {pick(p.name, lang)}</p>
          <p>{pick(p.desc, lang)}</p>
          <p>
            <span className="c-muted">status:</span> <span className={STATUS_CLASS[p.status]}>{STATUS_LABEL[lang][p.status]}</span>
            {'   '}
            <span className="c-muted">{L('période', 'period')}:</span> {pick(p.period, lang)}
          </p>
          <p><span className="c-muted">stack:</span> {p.techs.join(', ')}</p>
          {p.url && <p><span className="c-muted">repo:</span> {ext(p.url)}</p>}
        </div>
      );
    }
    case 'skills': {
      const g = stat.data;
      return (
        <div className="sh-md">
          <p className="c-amber"># {pick(g.title, lang)}</p>
          <p>{g.skills.map((s) => pick(s.name, lang)).join(' · ')}</p>
          {g.learning && <p className="c-cyan">{L('en cours d’apprentissage', 'currently learning')}: {g.learning.map((s) => pick(s.name, lang)).join(', ')}</p>}
        </div>
      );
    }
    case 'timeline': {
      const e = stat.data;
      return (
        <div className="sh-md">
          <p><span className="c-amber">{pick(e.date, lang)}</span> <span className="c-muted">—</span> {pick(e.org, lang)}</p>
          <p>{pick(e.title, lang)}</p>
          {pick(e.points, lang)?.map((pt) => <p key={pt} className="c-muted">  - {pt}</p>)}
        </div>
      );
    }
    case 'contact':
      return (
        <div className="sh-kv">
          <span className="c-blue">email</span><a href={`mailto:${CONTACT.email}`} className="sh-link">{CONTACT.email}</a>
          <span className="c-blue">{L('tél', 'phone')}</span><a href={CONTACT.phoneHref} className="sh-link">{CONTACT.phone}</a>
          <span className="c-blue">linkedin</span>{ext(CONTACT.linkedin, 'alexandre-faubladier-anette')}
          <span className="c-blue">github</span>{ext(CONTACT.github, `@${CONTACT.githubUser}`)}
          <span className="c-blue">{L('lieu', 'location')}</span><span>Lyon, France</span>
        </div>
      );
    default:
      return null;
  }
}

function renderLs(entries, long, lang) {
  if (!long) {
    return (
      <div className="sh-ls">
        {entries.map((e) => (
          <span
            key={e.name}
            className={e.type === 'dir' ? `sh-ls__dir ${e.status ? STATUS_CLASS[e.status] : ''}` : e.kind === 'pdf' ? 'c-amber' : ''}
          >
            {e.name}{e.type === 'dir' ? '/' : ''}
          </span>
        ))}
      </div>
    );
  }
  return (
    <div className="sh-ll">
      <span className="c-muted">total {entries.length}</span>
      {entries.map((e) => (
        <span key={e.name} className="sh-ll__row">
          <span className="c-dim">{e.type === 'dir' ? 'drwxr-xr-x' : '-rw-r--r--'}</span>
          <span className="c-muted">alexandre</span>
          {e.status ? <span className={`sh-ll__status ${STATUS_CLASS[e.status]}`}>{STATUS_LABEL[lang][e.status]}</span> : <span className="sh-ll__status" />}
          <span className={e.type === 'dir' ? 'sh-ls__dir' : e.kind === 'pdf' ? 'c-amber' : ''}>
            {e.name}{e.type === 'dir' ? '/' : ''}
          </span>
        </span>
      ))}
    </div>
  );
}

/* ── Commandes ────────────────────────────── */
export const COMMANDS = {
  help: {
    desc: ['afficher cette aide', 'show this help'],
    run: (_, { L }) => (
      <div className="sh-help">
        <p className="c-muted">{L('Commandes disponibles (Tab pour compléter, ↑ ↓ pour l’historique) :', 'Available commands (Tab to complete, ↑ ↓ for history):')}</p>
        <div className="sh-kv">
          {Object.entries(COMMANDS)
            .filter(([, c]) => !c.hidden)
            .map(([name, c]) => (
              <span key={name} className="sh-help__row">
                <span className="c-amber">{c.usage ?? name}</span>
                <span>{L(c.desc[0], c.desc[1])}</span>
              </span>
            ))}
        </div>
      </div>
    ),
  },

  whoami: {
    desc: ['qui suis-je ?', 'who am I?'],
    run: (_, { L }) => (
      <span>
        <span className="c-green">alexandre</span> — {L('apprenti ingénieur logiciel @ Alstom · élève ingénieur ICS @ CPE Lyon', 'software engineering apprentice @ Alstom · CS & cybersecurity engineering student @ CPE Lyon')}
      </span>
    ),
  },

  neofetch: {
    desc: ['résumé du système (moi)', 'system summary (me)'],
    run: () => <Neofetch />,
  },

  ls: {
    usage: 'ls [-l] [dir]',
    desc: ['lister un dossier', 'list a directory'],
    run: (args, { cwd, lang, L }) => {
      const long = args.includes('-l') || args.includes('-la') || args.includes('-al');
      const target = args.find((a) => !a.startsWith('-'));
      const segs = target ? resolve(cwd, target) : cwd;
      const entries = listDir(segs);
      if (!entries) {
        return statFile(segs)
          ? target
          : <span className="c-red">ls: {L('impossible d’accéder à', 'cannot access')} '{target}': {L('Aucun fichier ou dossier de ce type', 'No such file or directory')}</span>;
      }
      return renderLs(entries, long, lang);
    },
  },

  cd: {
    usage: 'cd <dir>',
    desc: ['changer de page (cd projets, cd ~)', 'go to a page (cd projets, cd ~)'],
    complete: (cwd, arg) => completePath(cwd, arg, { dirsOnly: true }),
    run: (args, ctx) => {
      const { cwd, L } = ctx;
      const target = args[0] ?? '~';
      const segs = target === '-' ? ctx.prevCwd : resolve(cwd, target);
      if (!isDir(segs)) {
        return <span className="c-red">cd: {target}: {statFile(segs) ? L("N'est pas un dossier", 'Not a directory') : L('Aucun fichier ou dossier de ce type', 'No such file or directory')}</span>;
      }
      ctx.setCwd(segs);
      const route = segsToRoute(segs.filter((s) => s !== 'screenshots'));
      if (route) ctx.go(route);
      return null;
    },
  },

  pwd: {
    desc: ['dossier courant', 'current directory'],
    run: (_, { cwd }) => `/home/alexandre${cwd.length ? `/${cwd.join('/')}` : ''}`,
  },

  cat: {
    usage: 'cat <file>',
    desc: ['afficher un fichier (cat about.md)', 'print a file (cat about.md)'],
    complete: (cwd, arg) => completePath(cwd, arg),
    run: (args, ctx) => {
      const { cwd, L } = ctx;
      if (!args[0]) return <span className="c-red">cat: {L('opérande manquant', 'missing operand')}</span>;
      let segs = resolve(cwd, args[0]);
      // Raccourci : « cat dnsa » depuis ~/projets → README
      if (isDir(segs) && segs[0] === 'projets' && segs[1]) segs = [...segs.slice(0, 2), 'README.md'];
      else if (isDir(segs)) return <span className="c-red">cat: {args[0]}: {L('Est un dossier', 'Is a directory')}</span>;
      const stat = statFile(segs);
      return stat ? renderFile(stat, ctx) : <span className="c-red">cat: {args[0]}: {L('Aucun fichier ou dossier de ce type', 'No such file or directory')}</span>;
    },
  },

  open: {
    usage: 'open <cv|github|linkedin|projet>',
    desc: ['ouvrir le CV, un profil ou un projet', 'open my resume, a profile or a project'],
    complete: (cwd, arg) =>
      ['cv', 'cv_fr.pdf', 'cv_en.pdf', 'github', 'linkedin', ...PROJECTS_DATA.map((p) => p.slug)].filter((x) => x.startsWith(arg)),
    run: (args, ctx) => {
      const { lang, L } = ctx;
      const what = (args[0] ?? '').toLowerCase();
      const urls = {
        cv: CV[lang], 'cv_fr.pdf': CV.fr, 'cv_en.pdf': CV.en, fr: CV.fr, en: CV.en,
        github: CONTACT.github, linkedin: CONTACT.linkedin,
      };
      if (what === 'cv' && args[1]) urls.cv = CV[args[1]] ?? CV[lang];
      if (urls[what]) {
        window.open(urls[what], '_blank', 'noopener');
        return <span className="c-green">{L('ouverture de', 'opening')} {what}…</span>;
      }
      const p = PROJECTS_DATA.find((x) => x.slug === what);
      if (p) {
        ctx.setCwd(['projets', p.slug]);
        ctx.go(`/projets/${p.slug}`);
        return null;
      }
      return <span className="c-red">open: {what || '?'}: {L('cible inconnue — essaie open cv', 'unknown target — try open cv')}</span>;
    },
  },

  cv: {
    usage: 'cv [fr|en]',
    desc: ['télécharger mon CV', 'download my resume'],
    run: (args, ctx) => COMMANDS.open.run(['cv', args[0]], ctx),
  },

  projects: {
    desc: ['lister mes projets', 'list my projects'],
    run: (_, ctx) => (
      <div>
        {COMMANDS.ls.run(['-l', '~/projets'], ctx)}
        <p className="c-muted">{ctx.L('→ cd projets/<nom> pour ouvrir un projet', '→ cd projets/<name> to open a project')}</p>
      </div>
    ),
  },

  contact: {
    desc: ['me contacter', 'get in touch'],
    run: (_, ctx) => renderFile({ kind: 'contact' }, ctx),
  },

  email: {
    desc: ['m’écrire un e-mail', 'send me an email'],
    run: (_, { L }) => {
      window.location.href = `mailto:${CONTACT.email}`;
      return <span className="c-green">{L('ouverture du client mail…', 'opening your mail client…')}</span>;
    },
  },

  lang: {
    usage: 'lang <fr|en>',
    desc: ['changer de langue', 'switch language'],
    complete: (_, arg) => ['fr', 'en'].filter((x) => x.startsWith(arg)),
    run: (args, { setLang, lang }) => {
      const next = args[0] === 'en' || args[0] === 'fr' ? args[0] : lang === 'fr' ? 'en' : 'fr';
      setLang(next);
      return <span className="c-green">{next === 'fr' ? 'Langue : français' : 'Language: English'}</span>;
    },
  },

  history: {
    desc: ['historique des commandes', 'command history'],
    run: (_, { history }) => (
      <div>{history.map((h, i) => <p key={i}><span className="c-dim">{String(i + 1).padStart(4)}</span>  {h}</p>)}</div>
    ),
  },

  clear: {
    desc: ['nettoyer le terminal', 'clear the terminal'],
    run: (_, { clear }) => {
      clear();
      return null;
    },
  },

  date: { hidden: true, desc: ['', ''], run: (_, { lang }) => new Date().toLocaleString(lang === 'fr' ? 'fr-FR' : 'en-GB') },
  echo: { hidden: true, desc: ['', ''], run: (args) => args.join(' ') },
  uname: { hidden: true, desc: ['', ''], run: () => 'Linux portfolio 6.17.0-alexandre #1 SMP PREEMPT_DYNAMIC x86_64 GNU/Linux' },
  ll: { hidden: true, desc: ['', ''], run: (args, ctx) => COMMANDS.ls.run(['-l', ...args], ctx) },

  sudo: {
    hidden: true,
    desc: ['', ''],
    run: (args, { L }) => {
      if (args.join(' ') === 'hire-me' || args.join(' ') === 'hire me') {
        return (
          <span>
            <span className="c-green">[sudo] ✔ {L('Excellente décision.', 'Great decision.')}</span>{' '}
            {L('Écris-moi :', 'Email me:')} <a className="sh-link" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          </span>
        );
      }
      return <span className="c-red">{L("alexandre n'appartient pas au fichier sudoers. Cet incident sera signalé.", 'alexandre is not in the sudoers file. This incident will be reported.')} <span className="c-muted">({L('essaie', 'try')} sudo hire-me)</span></span>;
    },
  },

  rm: { hidden: true, desc: ['', ''], run: (_, { L }) => <span className="c-red">rm: {L('bien essayé 😉', 'nice try 😉')}</span> },
  vim: { hidden: true, desc: ['', ''], run: (_, { L }) => <span className="c-muted">{L('Pas de panique, tu n’es pas coincé : pas de vim ici.', "Don't panic, you're not stuck: there's no vim here.")}</span> },

  exit: {
    hidden: true,
    desc: ['', ''],
    run: (_, ctx) => {
      if (ctx.close) {
        ctx.close();
        return null;
      }
      return <span className="c-muted">logout — {ctx.L('on ne quitte pas un portfolio si facilement 🙂', "you don't leave a portfolio that easily 🙂")}</span>;
    },
  },
};

COMMANDS.nano = COMMANDS.vim;
COMMANDS.skills = {
  desc: ['lister mes compétences', 'list my skills'],
  run: (_, ctx) => (
    <div>
      {listDir(['competences']).map((f) => (
        <div key={f.name}>{renderFile(statFile(['competences', f.name]), ctx)}</div>
      ))}
    </div>
  ),
};

/* Complétion d'une ligne entière : renvoie les candidats */
export function complete(line, cwd) {
  const parts = line.split(' ');
  if (parts.length === 1) {
    return Object.keys(COMMANDS).filter((c) => !COMMANDS[c].hidden && c.startsWith(parts[0])).map((c) => `${c} `);
  }
  const cmd = COMMANDS[parts[0]];
  const arg = parts[parts.length - 1];
  const prefix = parts.slice(0, -1).join(' ');
  const options = cmd?.complete ? cmd.complete(cwd, arg) : completePath(cwd, arg);
  return options.map((o) => `${prefix} ${o}`);
}

export { segsToPath };
