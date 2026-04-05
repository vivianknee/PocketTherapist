---
layout: none
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
    <div class="therapist-container">
        <h1 class="gradient-text">AI Therapist</h1>
        <p class="therapist-subtitle">Chat with your pocket therapist</p>
        <button id="startChatButton" class="btn-primary">Talk to a therapist!</button>
        <div id="chatWrapper" class="chat-wrapper" style="display: none;">
            <iframe id="chatFrame" src="chat.html"></iframe>
        </div>
    </div>
</body>

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

<script>
    $(function() {
        $("#startChatButton").on("click", function() {
            $("#startChatButton").hide();
            $("#chatWrapper").show();
        });
    });
</script>
</html>

<style>
body {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.therapist-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px 20px;
}

.therapist-container h1 {
    font-size: 2rem;
    font-weight: 600;
    letter-spacing: -0.03em;
    margin-bottom: 8px;
}

.therapist-subtitle {
    color: var(--text-secondary);
    font-size: 17px;
    letter-spacing: -0.022em;
    margin-bottom: 30px;
}

.chat-wrapper {
    margin-top: 24px;
    border-radius: var(--radius-lg);
    border: 1px solid var(--glass-border);
    overflow: hidden;
    box-shadow: var(--shadow-lg);
}

.chat-wrapper iframe {
    width: 400px;
    height: 500px;
    border: none;
    display: block;
}
</style>
