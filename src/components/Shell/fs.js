/**
 * Système de fichiers virtuel du terminal.
 * Les chemins sont des tableaux de segments relatifs à ~ :
 *   []                     → ~
 *   ['projets', 'dnsa']    → ~/projets/dnsa
 * Tout est généré depuis src/data : ajouter un projet l'ajoute ici aussi.
 */
import { PROJECTS_DATA } from '../../data/projets';
import { SKILL_GROUPS, TIMELINE } from '../../data/profil';

const PAGE_DIRS = ['competences', 'projets', 'parcours', 'contact'];

/* ── Route ↔ dossier ──────────────────────── */
const ROUTE_OF = { competences: '/competences', projets: '/projets', parcours: '/parcours', contact: '/about' };

export function routeToSegs(pathname) {
  const parts = pathname.split('/').filter(Boolean);
  if (parts[0] === 'about') return ['contact'];
  if (parts[0] === 'projets' && parts[1]) {
    const p = PROJECTS_DATA.find((x) => x.slug.toLowerCase() === parts[1].toLowerCase());
    return p ? ['projets', p.slug] : ['projets'];
  }
  return PAGE_DIRS.includes(parts[0]) ? [parts[0]] : [];
}

export function segsToRoute(segs) {
  if (segs.length === 0) return '/';
  if (segs[0] === 'projets' && segs[1]) return `/projets/${segs[1]}`;
  return ROUTE_OF[segs[0]] ?? null;
}

export const segsToPath = (segs) => (segs.length ? `~/${segs.join('/')}` : '~');

/* Résout un chemin tapé (relatif ou absolu) par rapport au dossier courant */
export function resolve(cwd, input = '~') {
  if (input === '' || input === '~' || input === '/') return [];
  let segs;
  let rest = input;
  if (rest.startsWith('~/')) {
    segs = [];
    rest = rest.slice(2);
  } else if (rest.startsWith('/')) {
    segs = [];
    rest = rest.slice(1);
  } else {
    segs = [...cwd];
  }
  rest.split('/').forEach((part) => {
    if (!part || part === '.') return;
    if (part === '..') segs.pop();
    else segs.push(part);
  });
  return segs;
}

/* ── Contenu ──────────────────────────────── */
const projectBySlug = (slug) => PROJECTS_DATA.find((p) => p.slug.toLowerCase() === String(slug).toLowerCase());
const fileName = (e) => `${e.id}.log`;

/**
 * Liste un dossier. Renvoie null si ce n'est pas un dossier.
 * Entrée : { name, type: 'dir' | 'file', status?, meta? }
 */
export function listDir(segs) {
  const [root, sub, extra] = segs;
  if (segs.length === 0) {
    return [
      ...PAGE_DIRS.map((name) => ({ name, type: 'dir' })),
      { name: 'about.md', type: 'file' },
      { name: 'cv_fr.pdf', type: 'file', kind: 'pdf' },
      { name: 'cv_en.pdf', type: 'file', kind: 'pdf' },
    ];
  }
  if (root === 'projets' && !sub) {
    return PROJECTS_DATA.map((p) => ({ name: p.slug, type: 'dir', status: p.status, meta: p }));
  }
  if (root === 'projets' && sub && !extra && projectBySlug(sub)) {
    const p = projectBySlug(sub);
    return [{ name: 'README.md', type: 'file' }, ...(p.screenshots?.length ? [{ name: 'screenshots', type: 'dir' }] : [])];
  }
  if (root === 'projets' && extra === 'screenshots' && projectBySlug(sub)?.screenshots) {
    return projectBySlug(sub).screenshots.map((s) => ({ name: s.split('/').pop(), type: 'file', kind: 'img' }));
  }
  if (root === 'competences' && !sub) return SKILL_GROUPS.map((g) => ({ name: `${g.id}.txt`, type: 'file' }));
  if (root === 'parcours' && !sub) return TIMELINE.map((e) => ({ name: fileName(e), type: 'file' }));
  if (root === 'contact' && !sub) return [{ name: 'contact.txt', type: 'file' }];
  return null;
}

export const isDir = (segs) => listDir(segs) !== null;

/**
 * Identifie un fichier : renvoie { kind, data } ou null.
 * Le rendu (bilingue) est fait dans commands.js.
 */
export function statFile(segs) {
  const [root, sub, extra] = segs;
  if (segs.length === 1 && root === 'about.md') return { kind: 'about' };
  if (segs.length === 1 && (root === 'cv_fr.pdf' || root === 'cv_en.pdf')) return { kind: 'pdf', data: root.slice(3, 5) };
  if (root === 'projets' && extra === 'README.md' && projectBySlug(sub)) return { kind: 'readme', data: projectBySlug(sub) };
  if (root === 'projets' && extra === 'screenshots' && segs[3]) return { kind: 'img' };
  if (root === 'competences' && sub) {
    const g = SKILL_GROUPS.find((x) => `${x.id}.txt` === sub);
    if (g) return { kind: 'skills', data: g };
  }
  if (root === 'parcours' && sub) {
    const e = TIMELINE.find((x) => fileName(x) === sub);
    if (e) return { kind: 'timeline', data: e };
  }
  if (root === 'contact' && sub === 'contact.txt') return { kind: 'contact' };
  return null;
}

/* Complétion des chemins (pour Tab) */
export function completePath(cwd, partial, { dirsOnly = false } = {}) {
  const slash = partial.lastIndexOf('/');
  const base = slash >= 0 ? partial.slice(0, slash + 1) : '';
  const stem = slash >= 0 ? partial.slice(slash + 1) : partial;
  const dir = resolve(cwd, base || '.');
  const entries = listDir(dir) ?? [];
  return entries
    .filter((e) => (!dirsOnly || e.type === 'dir') && e.name.toLowerCase().startsWith(stem.toLowerCase()))
    .map((e) => `${base}${e.name}${e.type === 'dir' ? '/' : ''}`);
}
