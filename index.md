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
    <div class="hero">
        <div class="hero-content">
            <h1 class="hero-title" id="typing-text">Your Pocket Therapist</h1>
            <p class="hero-subtitle">Here to cheer you up!</p>
            <div class="hero-actions">
                <a href="{{ site.baseurl }}/c" class="btn-primary">Get Started</a>
                <a href="{{ site.baseurl }}/gallery" class="btn-outline">Browse Gallery</a>
            </div>
        </div>
        <div class="hero-bg-orb hero-bg-orb--lavender"></div>
        <div class="hero-bg-orb hero-bg-orb--pink"></div>
    </div>
</body>
</html>

<style>
body {
    background: #0f1117;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.hero {
    width: 100%;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.hero-content {
    text-align: center;
    z-index: 1;
    animation: fadeInUp 0.8s ease forwards;
}

.hero-title {
    font-size: 3.5rem;
    font-weight: 600;
    letter-spacing: -0.04em;
    background: linear-gradient(135deg, #b4a7d6, #d4a5c4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 16px;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    width: 0;
    border-right: 3px solid #b4a7d6;
    max-width: 21ch;
    animation: typing 3s steps(21) forwards, blink 0.7s step-end infinite;
}

.hero-subtitle {
    font-size: 1.25rem;
    color: rgba(255, 255, 255, 0.75);
    font-weight: 400;
    margin-bottom: 44px;
    letter-spacing: -0.01em;
}

.hero-actions {
    display: flex;
    gap: 16px;
    justify-content: center;
}

.hero-bg-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(120px);
    opacity: 0.12;
    pointer-events: none;
}

.hero-bg-orb--lavender {
    width: 500px;
    height: 500px;
    background: #b4a7d6;
    top: 5%;
    right: 15%;
}

.hero-bg-orb--pink {
    width: 400px;
    height: 400px;
    background: #d4a5c4;
    bottom: 5%;
    left: 20%;
}
</style>
