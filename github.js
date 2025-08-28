// Mise à jour de mon activité Github sur mon portfolio
async function fetchGitHubActivity() {
    const username = "killex8569"; // Ton pseudo GitHub
    const response = await fetch(`https://api.github.com/users/${username}/events/public`);
    
    if (!response.ok) {
        console.error("Erreur API GitHub:", response.status);
        document.getElementById("github-activity").innerText = "Impossible de charger l'activité GitHub.";
        return;
    }

    const events = await response.json();

    // On récupère uniquement les événements de type "PushEvent" (commits)
    const pushes = events.filter(event => event.type === "PushEvent");

    if (pushes.length > 0) {
        const latest = pushes[0]; // Dernier push
        const repo = latest.repo.name;
        const commits = latest.payload.commits.map(c => `- ${c.message}`).join("<br>");

        document.getElementById("github-activity").innerHTML = `
            <h2>Dernière activité GitHub</h2>
            <p>
                📂 Repo : <a href="https://github.com/${repo}" target="_blank">${repo}</a><br>
                📝 Commits :<br>${commits}
            </p>
        `;
    } else {
        document.getElementById("github-activity").innerText = "Aucune activité récente trouvée.";
    }
}

// Exécute la fonction au chargement de la page
document.addEventListener("DOMContentLoaded", fetchGitHubActivity);
