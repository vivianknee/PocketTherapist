---
layout: none
baseurl: /gallery
---

<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pocket Therapist</title>
    <link rel="stylesheet" href="{{ site.baseurl }}/assets/css/pocket-therapist.css">
</head>
<body>
    {%- include header.html -%}
    <main>
        <h1 class="gallery-title gradient-text">Quotes Gallery</h1>
        <div class="quotes-list" id="quotesList">
            <div class="list-placeholder" id="listPlaceholder">Loading quotes...</div>
        </div>
    </main>
</body>
</html>

<style>
body {
    display: flex;
    flex-direction: column;
    align-items: center;
}

main {
    max-width: 640px;
    width: 100%;
    padding: 20px 20px 60px;
}

.gallery-title {
    font-size: 2rem;
    font-weight: 600;
    letter-spacing: -0.03em;
    text-align: center;
    margin-bottom: 24px;
}

/* List container — Apple Notes style */
.quotes-list {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid var(--glass-border);
    border-radius: var(--radius-lg);
    overflow: hidden;
    min-height: 200px;
    display: flex;
    flex-direction: column;
}

.list-placeholder {
    color: var(--text-tertiary);
    font-size: 15px;
    letter-spacing: -0.016em;
    text-align: center;
    margin: auto;
    padding: 60px 20px;
}

/* Individual quote row */
.quote-item {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    padding: 16px 20px;
    transition: background 200ms cubic-bezier(0.25, 0.1, 0.25, 1);
    opacity: 0;
    animation: rowFadeIn 0.35s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
}

.quote-item:hover {
    background: rgba(255, 255, 255, 0.03);
}

/* Divider between rows */
.quote-item + .quote-item {
    border-top: 1px solid rgba(255, 255, 255, 0.04);
}

/* Emoji on the left */
.quote-emoji {
    font-size: 28px;
    line-height: 1;
    flex-shrink: 0;
    width: 36px;
    text-align: center;
    padding-top: 2px;
}

/* Text content */
.quote-content {
    flex: 1;
    min-width: 0;
}

.quote-text {
    font-size: 15px;
    line-height: 1.47;
    letter-spacing: -0.016em;
    color: var(--text-primary);
    margin: 0;
}

.quote-label {
    font-size: 13px;
    font-weight: 500;
    color: var(--text-tertiary);
    text-transform: capitalize;
    letter-spacing: -0.01em;
    margin-top: 4px;
}

/* Staggered fade-in */
@keyframes rowFadeIn {
    from {
        opacity: 0;
        transform: translateY(6px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>

<script>
const emotionEmojis = {
    neutral: '\u{1F610}', happy: '\u{1F60A}', sad: '\u{1F622}', angry: '\u{1F620}',
    fearful: '\u{1F628}', disgusted: '\u{1F922}', surprised: '\u{1F632}'
};

function getAllQuotes() {
    fetch('https://pt-backend-long-river-5087.fly.dev/api/quote/')
        .then(response => response.json())
        .then(data => {
            renderQuotes(data.reverse());
        })
        .catch(err => {
            console.log(err);
            document.getElementById('listPlaceholder').textContent = 'Could not load quotes.';
        });
}

getAllQuotes();

function renderQuotes(quotes) {
    const list = document.getElementById('quotesList');
    const placeholder = document.getElementById('listPlaceholder');

    if (!quotes || quotes.length === 0) {
        placeholder.textContent = 'No quotes yet. Be the first to share one!';
        return;
    }

    placeholder.remove();

    quotes.forEach((quote, index) => {
        const row = document.createElement('div');
        row.className = 'quote-item';
        row.style.animationDelay = `${index * 40}ms`;

        const emoji = document.createElement('div');
        emoji.className = 'quote-emoji';
        emoji.textContent = emotionEmojis[quote.emotion] || '\u{1F4AC}';

        const content = document.createElement('div');
        content.className = 'quote-content';

        const text = document.createElement('p');
        text.className = 'quote-text';
        text.textContent = quote.quote;

        const label = document.createElement('div');
        label.className = 'quote-label';
        label.textContent = quote.emotion || '';

        content.appendChild(text);
        content.appendChild(label);
        row.appendChild(emoji);
        row.appendChild(content);
        list.appendChild(row);
    });
}
</script>
