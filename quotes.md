---
layout: none
baseurl: /quotes
---

<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="{{ site.baseurl }}/assets/css/pocket-therapist.css">
</head>
<body>
    {%- include header.html -%}
    <main>
        <section class="compose-section glass-card">
            <h2>Send a Quote</h2>
            <div class="emotion-picker">
                <span class="picker-label">How are you feeling?</span>
                <div class="emoji-options">
                    <button type="button" class="emoji-btn" data-emotion="neutral">😐<span class="emoji-label">Neutral</span></button>
                    <button type="button" class="emoji-btn" data-emotion="happy">😊<span class="emoji-label">Happy</span></button>
                    <button type="button" class="emoji-btn" data-emotion="sad">😢<span class="emoji-label">Sad</span></button>
                    <button type="button" class="emoji-btn" data-emotion="angry">😠<span class="emoji-label">Angry</span></button>
                    <button type="button" class="emoji-btn" data-emotion="fearful">😨<span class="emoji-label">Fearful</span></button>
                    <button type="button" class="emoji-btn" data-emotion="disgusted">🤢<span class="emoji-label">Disgusted</span></button>
                    <button type="button" class="emoji-btn" data-emotion="surprised">😲<span class="emoji-label">Surprised</span></button>
                </div>
            </div>
            <div class="message-area">
                <div class="chat-window" id="chatWindow">
                    <div class="chat-placeholder">Your quotes will appear here...</div>
                </div>
                <form class="message-input-bar" id="quoteForm">
                    <input type="hidden" id="emotion" name="emotion" required>
                    <input type="text" id="quote" name="quote" placeholder="Type an uplifting quote..." required>
                    <button type="submit" class="send-btn" id="sendBtn">
                        <ion-icon name="send"></ion-icon>
                    </button>
                </form>
            </div>
        </section>
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
    max-width: 500px;
    width: 100%;
    padding: 20px 20px 40px;
}

.compose-section h2 {
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: -0.03em;
    margin-bottom: 18px;
    color: var(--text-primary);
}

/* Emoji picker */
.emotion-picker {
    margin-bottom: 16px;
}

.picker-label {
    display: block;
    font-size: 13px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.02em;
    color: var(--text-secondary);
    margin-bottom: 10px;
}

.emoji-options {
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
}

.emoji-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    background: rgba(255, 255, 255, 0.03);
    border: 1.5px solid transparent;
    border-radius: var(--radius-md);
    padding: 10px 12px;
    cursor: pointer;
    font-size: 1.6rem;
    transition: all var(--transition-base);
    flex: 1;
    min-width: 56px;
}

.emoji-btn:hover {
    background: rgba(180, 167, 214, 0.08);
    border-color: rgba(180, 167, 214, 0.15);
    transform: scale(1.05);
}

.emoji-btn:active {
    transform: scale(0.95);
}

.emoji-btn.selected {
    background: rgba(180, 167, 214, 0.12);
    border-color: var(--lavender);
    transform: scale(1.05);
    box-shadow: 0 4px 16px rgba(180, 167, 214, 0.15);
}

.emoji-label {
    font-size: 10px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.02em;
    color: var(--text-tertiary);
    font-family: var(--font-family);
}

.emoji-btn.selected .emoji-label {
    color: var(--lavender);
}

/* Chat window */
.message-area {
    border-radius: var(--radius-md);
    overflow: hidden;
    border: 1px solid var(--glass-border);
    background: rgba(0, 0, 0, 0.2);
}

.chat-window {
    min-height: 200px;
    max-height: 400px;
    overflow-y: auto;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.chat-placeholder {
    color: var(--text-tertiary);
    font-size: 15px;
    text-align: center;
    margin: auto;
}

/* Message bubbles */
.message-bubble {
    max-width: 80%;
    padding: 10px 16px;
    border-radius: 18px 18px 4px 18px;
    align-self: flex-end;
    background: var(--gradient-accent);
    color: var(--bg-primary);
    font-size: 15px;
    line-height: 1.4;
    letter-spacing: -0.016em;
    animation: bubbleIn 0.35s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
    position: relative;
}

/* Reply bubble (confirmation from system) */
.reply-bubble {
    max-width: 80%;
    padding: 10px 16px;
    border-radius: 18px 18px 18px 4px;
    align-self: flex-start;
    background: rgba(255, 255, 255, 0.06);
    color: var(--text-primary);
    font-size: 15px;
    line-height: 1.4;
    letter-spacing: -0.016em;
    animation: bubbleIn 0.35s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
}

.message-meta {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 8px;
    margin-top: 4px;
    font-size: 12px;
    opacity: 0.6;
}

.message-emotion-tag {
    font-size: 1rem;
}

.message-actions {
    display: flex;
    gap: 6px;
    align-self: flex-end;
    margin-top: 2px;
}

.msg-action-btn {
    background: none;
    border: none;
    color: var(--text-tertiary);
    cursor: pointer;
    font-size: 12px;
    padding: 2px 8px;
    border-radius: 6px;
    font-family: var(--font-family);
    font-weight: 500;
    letter-spacing: -0.01em;
    transition: all var(--transition-fast);
}

.msg-action-btn:hover {
    color: var(--text-secondary);
    background: rgba(255, 255, 255, 0.05);
}

.msg-action-btn.delete-btn:hover {
    color: var(--error);
}

@keyframes bubbleIn {
    from {
        opacity: 0;
        transform: translateY(10px) scale(0.95);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}

/* iMessage-style input bar */
.message-input-bar {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 12px;
    background: rgba(255, 255, 255, 0.03);
    border-top: 1px solid var(--glass-border);
}

.message-input-bar input[type="text"] {
    flex: 1;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid var(--glass-border);
    border-radius: 22px;
    color: var(--text-primary);
    font-family: var(--font-family);
    font-size: 15px;
    padding: 10px 18px;
    width: auto;
    letter-spacing: -0.022em;
    transition: border-color 120ms ease;
}

.message-input-bar input[type="text"]:focus {
    outline: none;
    border-color: rgba(180, 167, 214, 0.35);
}

.send-btn {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: var(--gradient-accent);
    border: none;
    color: var(--bg-primary);
    font-size: 1.1rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all var(--transition-base);
    flex-shrink: 0;
}

.send-btn:hover {
    filter: brightness(1.08);
    transform: scale(1.06);
}

.send-btn:active {
    transform: scale(0.94);
}
</style>

<script>
document.addEventListener('DOMContentLoaded', () => {
    const quoteForm = document.getElementById('quoteForm');
    const chatWindow = document.getElementById('chatWindow');
    const emotionInput = document.getElementById('emotion');
    const emojiButtons = document.querySelectorAll('.emoji-btn');
    const placeholder = chatWindow.querySelector('.chat-placeholder');

    const emotionEmojis = {
        neutral: '\u{1F610}', happy: '\u{1F60A}', sad: '\u{1F622}', angry: '\u{1F620}',
        fearful: '\u{1F628}', disgusted: '\u{1F922}', surprised: '\u{1F632}'
    };

    // Emoji selection
    emojiButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            emojiButtons.forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            emotionInput.value = btn.dataset.emotion;
        });
    });

    // Send quote
    quoteForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const emotion = emotionInput.value;
        const quote = document.getElementById('quote').value.trim();

        if (!emotion) {
            // Flash the emoji picker
            document.querySelector('.emotion-picker').style.animation = 'none';
            setTimeout(() => {
                document.querySelector('.picker-label').style.color = 'var(--error)';
                setTimeout(() => {
                    document.querySelector('.picker-label').style.color = '';
                }, 1500);
            }, 10);
            return;
        }

        if (!quote) return;

        const response = await fetch('https://pt-backend-long-river-5087.fly.dev/api/quote/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ emotion, quote }),
        });

        if (response.ok) {
            const data = await response.json();
            addMessageBubble(data);
            // Show confirmation reply after a short delay
            setTimeout(() => {
                addReplyBubble('Added to the gallery! Others can now see your quote.');
            }, 400);
            document.getElementById('quote').value = '';
            emojiButtons.forEach(b => b.classList.remove('selected'));
            emotionInput.value = '';
        }
    });

    function addMessageBubble(data) {
        if (placeholder) placeholder.remove();

        const wrapper = document.createElement('div');
        wrapper.style.display = 'flex';
        wrapper.style.flexDirection = 'column';
        wrapper.style.alignItems = 'flex-end';
        wrapper.style.gap = '2px';

        const bubble = document.createElement('div');
        bubble.className = 'message-bubble';
        bubble.innerHTML = `
            ${data.quote}
            <div class="message-meta">
                <span class="message-emotion-tag">${emotionEmojis[data.emotion] || ''}</span>
                <span>${data.emotion}</span>
            </div>
        `;

        const actions = document.createElement('div');
        actions.className = 'message-actions';
        actions.innerHTML = `
            <button class="msg-action-btn edit-btn" data-id="${data.id}">edit</button>
            <button class="msg-action-btn delete-btn" data-id="${data.id}">delete</button>
        `;

        wrapper.appendChild(bubble);
        wrapper.appendChild(actions);
        chatWindow.appendChild(wrapper);
        chatWindow.scrollTop = chatWindow.scrollHeight;

        actions.querySelector('.delete-btn').addEventListener('click', handleDelete);
        actions.querySelector('.edit-btn').addEventListener('click', handleEdit);
    }

    function addReplyBubble(text) {
        if (placeholder) placeholder.remove();
        const reply = document.createElement('div');
        reply.className = 'reply-bubble';
        reply.textContent = text;
        chatWindow.appendChild(reply);
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }

    function handleDelete(e) {
        const id = e.target.dataset.id;
        if (confirm('Delete this quote?')) {
            fetch(`https://pt-backend-long-river-5087.fly.dev/api/quote/delete/${id}`, { method: 'DELETE' })
                .then(res => {
                    if (res.ok) {
                        e.target.closest('[style]').remove();
                        if (chatWindow.children.length === 0) {
                            chatWindow.innerHTML = '<div class="chat-placeholder">Your quotes will appear here...</div>';
                        }
                    }
                });
        }
    }

    function handleEdit(e) {
        const id = e.target.dataset.id;
        const wrapper = e.target.closest('[style]');
        const bubble = wrapper.querySelector('.message-bubble');
        const currentQuote = bubble.childNodes[0].textContent.trim();

        const newQuote = prompt('Edit your quote:', currentQuote);
        if (newQuote && newQuote !== currentQuote) {
            const meta = bubble.querySelector('.message-emotion-tag');
            const emotionText = bubble.querySelector('.message-meta span:last-child').textContent;

            fetch(`https://pt-backend-long-river-5087.fly.dev/api/quote/update/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ emotion: emotionText, quote: newQuote }),
            }).then(res => {
                if (res.ok) {
                    bubble.childNodes[0].textContent = newQuote + '\n            ';
                }
            });
        }
    }
});
</script>
