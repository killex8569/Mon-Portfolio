import { PROJECTS_DATA, getNavigation, getProjet } from './data/projets';
import { SKILL_GROUPS, TIMELINE } from './data/profil';
import translations from './i18n/translations';

const isBilingual = (v) => typeof v === 'string' || (v && v.fr !== undefined && v.en !== undefined);

describe('données projets', () => {
  test('les slugs sont uniques', () => {
    const slugs = PROJECTS_DATA.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  test.each(PROJECTS_DATA.map((p) => [p.slug, p]))('%s a ses champs en FR et EN', (_, p) => {
    ['name', 'desc', 'description', 'period'].forEach((field) => {
      if (p[field] !== undefined) expect(isBilingual(p[field])).toBe(true);
    });
    expect(Array.isArray(p.highlights.fr)).toBe(true);
    expect(p.highlights.en).toHaveLength(p.highlights.fr.length);
    expect(['perso', 'scolaire', 'pro']).toContain(p.category);
    expect(translations.fr.status[p.status]).toBeDefined();
  });

  test('getProjet est insensible à la casse (anciens liens)', () => {
    expect(getProjet('Europeanize-yourself')?.slug).toBe('europeanize-yourself');
    expect(getProjet('inexistant')).toBeUndefined();
  });

  test('navigation précédent / suivant', () => {
    const first = PROJECTS_DATA[0].slug;
    expect(getNavigation(first).prev).toBeNull();
    expect(getNavigation(first).next).toBe(PROJECTS_DATA[1]);
  });

  test('les liens du parcours pointent vers des projets existants', () => {
    TIMELINE.filter((e) => e.slug).forEach((e) => expect(getProjet(e.slug)).toBeDefined());
  });
});

test('les compétences ont un titre bilingue', () => {
  SKILL_GROUPS.forEach((g) => expect(isBilingual(g.title)).toBe(true));
});
