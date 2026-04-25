let memberEmojis = [];

function addEmoji(emoji) {
    if (memberEmojis.length < 5) {
        memberEmojis.push(emoji);
        renderEmojis();
    } else {
        alert("Max 5 members allowed!");
    }
}

function clearEmojis() {
    memberEmojis = [];
    renderEmojis();
}

function renderEmojis() {
    const display = document.getElementById('emoji-display');
    if (memberEmojis.length === 0) {
        display.innerText = "None (Solo Artist)";
    } else {
        display.innerText = memberEmojis.join(" ");
    }
}

function generateSong() {
    const desc = document.getElementById('description').value;
    const lyrics = document.getElementById('lyrics').value;
    const output = document.getElementById('output-area');

    if (!desc || !lyrics) {
        alert("Please write a description and lyrics!");
        return;
    }

    output.innerHTML = "<p style='text-align:center;'>🛸 AI is mixing your tracks...</p>";

    // Simulate AI thinking time
    setTimeout(() => {
        let genre = "Pop/General";
        let mood = "Neutral";
        let lowDesc = desc.toLowerCase();

        // Simple "AI" Keyword Detection
        if (lowDesc.includes("phonk")) { genre = "Phonk"; mood = "Aggressive"; }
        if (lowDesc.includes("sad")) { genre = "Lofi"; mood = "Melancholy"; }
        if (lowDesc.includes("happy") || lowDesc.includes("dance")) { genre = "EDM"; mood = "Energetic"; }

        output.innerHTML = `
            <div class="result-box">
                <h2 style="color:var(--accent)">🎵 Generation Result</h2>
                <p><strong>Band Lineup:</strong> ${memberEmojis.length > 0 ? memberEmojis.join(" ") : "Solo Artist"}</p>
                <p><strong>Style:</strong> ${genre}</p>
                <p><strong>Mood:</strong> ${mood}</p>
                <hr style="border: 0.5px solid #334155">
                <p><em>AI has generated audio for the following lyrics:</em></p>
                <p style="color: #94a3b8; font-style: italic;">"${lyrics.substring(0, 60)}..."</p>
                <button onclick="alert('Playing Preview...')">▶️ Play Demo</button>
            </div>
        `;
    }, 1500);
}
