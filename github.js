// github.js
async function fetchGitHubActivity() {
    const username = "killex8569"; // Ton pseudo GitHub
    const activityContainer = document.getElementById("github-activity");

    try {
        const response = await fetch(`https://api.github.com/users/${username}/events/public`);

        if (!response.ok) {
            throw new Error(`Erreur API GitHub: ${response.status}`);
        }

        const events = await response.json();
        const push = events.find(event => event.type === "PushEvent"); // Prend le dernier push uniquement

        if (!push) {
            activityContainer.innerHTML = "<p>Aucune activité récente trouvée.</p>";
            return;
        }

        const repo = push.repo.name;
        const date = new Date(push.created_at).toLocaleString("fr-FR", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        });

        const lastCommit = push.payload.commits.slice(-1)[0]?.message || "Pas de message de commit";

        activityContainer.innerHTML = `
            <h2>Dernière activité GitHub</h2>
            <div class="activity-card">
                <p><span class="emoji">📂</span> <a href="https://github.com/${repo}" target="_blank">${repo}</a></p>
                <p><span class="emoji">🕒</span> ${date}</p>
                <p><span class="emoji">📝</span> ${lastCommit}</p>
            </div>
        `;
    } catch (error) {
        console.error(error);
        activityContainer.innerHTML = "<p>Erreur lors du chargement de l'activité GitHub.</p>";
    }
}

document.addEventListener("DOMContentLoaded", fetchGitHubActivity);
