import { useEffect, useState } from 'react';
import './Github.css';

const LEVEL_COLORS = ['var(--gh-l0)', 'var(--gh-l1)', 'var(--gh-l2)', 'var(--gh-l3)', 'var(--gh-l4)'];
const MONTHS = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'];
const DAYS   = ['', 'Lun', '', 'Mer', '', 'Ven', ''];

export default function GithubActivity({ username, token }) {
  const [weeks, setWeeks]       = useState([]);
  const [total, setTotal]       = useState(0);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState(null);

  useEffect(() => {
    if (!username || !token) {
      setError('username et token requis.');
      setLoading(false);
      return;
    }

    const query = `{
      user(login: "${username}") {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
                contributionLevel
              }
            }
          }
        }
      }
    }`;

    fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Authorization': `bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    })
      .then(r => r.json())
      .then(data => {
        if (data.errors) throw new Error(data.errors[0].message);
        const cal = data.data.user.contributionsCollection.contributionCalendar;
        setTotal(cal.totalContributions);
        setWeeks(cal.weeks);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [username, token]);

  // Calcule les labels de mois à partir des semaines
  const monthLabels = (() => {
    const labels = [];
    let lastMonth = -1;
    weeks.forEach((week, i) => {
      const month = new Date(week.contributionDays[0].date).getMonth();
      if (month !== lastMonth) {
        labels.push({ index: i, label: MONTHS[month] });
        lastMonth = month;
      }
    });
    return labels;
  })();

  const levelFromString = (level) => {
    const map = { NONE: 0, FIRST_QUARTILE: 1, SECOND_QUARTILE: 2, THIRD_QUARTILE: 3, FOURTH_QUARTILE: 4 };
    return map[level] ?? 0;
  };

  if (loading) return <div className="gh-activity gh-activity--loading">Chargement…</div>;
  if (error)   return <div className="gh-activity gh-activity--error">Erreur : {error}</div>;

  return (
    <div className="gh-activity">
      <div className="gh-activity__header">
        <span className="gh-activity__total">
          <strong>{total}</strong> contributions cette année
        </span>
      </div>

      <div className="gh-activity__graph">
        {/* Labels jours */}
        <div className="gh-activity__days">
          {DAYS.map((d, i) => <span key={i}>{d}</span>)}
        </div>

        <div className="gh-activity__scroll">
          {/* Labels mois */}
          <div className="gh-activity__months" style={{ gridTemplateColumns: `repeat(${weeks.length}, 1fr)` }}>
            {weeks.map((_, i) => {
              const label = monthLabels.find(m => m.index === i);
              return <span key={i}>{label ? label.label : ''}</span>;
            })}
          </div>

          {/* Grille */}
          <div className="gh-activity__grid">
            {weeks.map((week, wi) => (
              <div key={wi} className="gh-activity__week">
                {Array.from({ length: 7 }).map((_, di) => {
                  const day = week.contributionDays[di];
                  if (!day) return <span key={di} className="gh-activity__cell gh-activity__cell--empty" />;
                  const level = levelFromString(day.contributionLevel);
                  return (
                    <span
                      key={di}
                      className="gh-activity__cell"
                      style={{ background: LEVEL_COLORS[level] }}
                      title={`${day.date} — ${day.contributionCount} contribution${day.contributionCount !== 1 ? 's' : ''}`}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Légende */}
      <div className="gh-activity__legend">
        <span>Moins</span>
        {LEVEL_COLORS.map((c, i) => (
          <span key={i} className="gh-activity__cell" style={{ background: c }} />
        ))}
        <span>Plus</span>
      </div>
    </div>
  );
}