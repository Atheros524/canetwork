// Replace with your server IP
const serverIP = "play.yourserver.com";

async function getServerStatus() {
    const statusEl = document.getElementById("status");
    const playersEl = document.getElementById("players");

    try {
        const res = await fetch(`https://api.mcsrvstat.us/2/${serverIP}`);
        const data = await res.json();

        if (data.online) {
            statusEl.textContent = "Online ✅";
            playersEl.textContent = `Players: ${data.players.online} / ${data.players.max}`;
        } else {
            statusEl.textContent = "Offline ❌";
            playersEl.textContent = "";
        }
    } catch (err) {
        statusEl.textContent = "Error fetching server status";
        playersEl.textContent = "";
        console.error(err);
    }
}

getServerStatus();
