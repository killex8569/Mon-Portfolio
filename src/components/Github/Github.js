import { useEffect, useMemo, useState } from 'react';
import { useLang } from '../../i18n/LanguageContext';
import './Github.css';

/**
 * Calendrier de contributions GitHub des 12 derniers mois.
 * Utilise l'API publique github-contributions-api.jogruber.de : pas de token
 * à embarquer dans le bundle (un token REACT_APP_* serait visible par tous).
 */
const API = (user) => `https://github-contributions-api.jogruber.de/v4/${user}?y=last`;

function toWeeks(days) {
  if (!days.length) return [];
  const weeks = [];
  // La première semaine commence un dimanche : on complète avec des cases vides
  let week = Array(new Date(days[0].date).getDay()).fill(null);
  days.forEach((day) => {
    week.push(day);
    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
  });
  if (week.length) weeks.push(week);
  return weeks;
}

export default function GithubActivity({ username }) {
  const { t } = useLang();
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    fetch(API(username), { signal: controller.signal })
      .then((r) => {
        if (!r.ok) throw new Error(r.statusText);
        return r.json();
      })
      .then(setData)
      .catch((err) => {
        if (err.name !== 'AbortError') setError(true);
      });
    return () => controller.abort();
  }, [username]);

  const weeks = useMemo(() => toWeeks(data?.contributions ?? []), [data]);
  const months = t('months');

  const monthLabels = useMemo(() => {
    let last = -1;
    const labels = weeks.map((week) => {
      const first = week.find(Boolean);
      const m = first ? new Date(first.date).getMonth() : last;
      if (m !== last) {
        last = m;
        return months[m];
      }
      return '';
    });
    // Mois de départ incomplet : on retire son libellé s'il chevauche le suivant
    const next = labels.findIndex((l, i) => i > 0 && l);
    if (next > 0 && next < 3) labels[0] = '';
    return labels;
  }, [weeks, months]);

  if (error) return <p className="gh gh--state">{t('contact.githubError')}</p>;
  if (!data) return <p className="gh gh--state gh--loading">{t('contact.githubLoading')}</p>;

  const total = data.total?.lastYear ?? data.contributions.reduce((s, d) => s + d.count, 0);

  return (
    <div className="gh">
      <p className="gh__total">
        <strong className="text-gradient">{total}</strong> {t('contact.githubTotal')}
      </p>

      <div className="gh__scroll">
        <div className="gh__calendar" style={{ '--weeks': weeks.length }}>
          <div className="gh__months">
            {monthLabels.map((m, i) => <span key={i}>{m}</span>)}
          </div>
          <div className="gh__grid">
            {weeks.map((week, wi) => (
              <div className="gh__week" key={wi}>
                {Array.from({ length: 7 }).map((_, di) => {
                  const day = week[di];
                  return day ? (
                    <span
                      key={di}
                      className={`gh__cell gh__cell--${day.level}`}
                      title={`${day.date} — ${day.count}`}
                      style={{ animationDelay: `${wi * 12}ms` }}
                    />
                  ) : (
                    <span key={di} className="gh__cell gh__cell--empty" />
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="gh__legend">
        <span>{t('contact.less')}</span>
        {[0, 1, 2, 3, 4].map((l) => <span key={l} className={`gh__cell gh__cell--${l}`} />)}
        <span>{t('contact.more')}</span>
      </div>
    </div>
  );
}
