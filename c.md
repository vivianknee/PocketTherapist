---
layout: none
baseurl: /c
---
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/PocketTherapist/assets/css/pocket-therapist.css">
    <script src="/PocketTherapist/face-api.min.js"></script>
</head>
<body>
    {%- include header.html -%}
    <div class="camera-content">
        <div class="camera-row">
            <div id="videoWrapper" class="video-wrapper">
                <video id="video" autoplay muted class="video"></video>
            </div>
            <div class="side-panel">
                <div id="liveEmotion" class="liveEmotion glass-card">
                    <span class="live-label">Current Mood</span>
                    <span id="liveEmotionText" class="live-text">Detecting...</span>
                    <div class="live-bar-container">
                        <div id="liveConfidence" class="live-bar"></div>
                    </div>
                </div>
                <button id="captureEmotionButton">Capture Emotion</button>
                <div id="emotionResult" class="emotionResult hidden">
                    <span id="capturedEmoji" class="captured-emoji"></span>
                    <div class="captured-text">
                        <span class="captured-emotion"><span id="emotion"></span></span>
                        <span id="quote" class="captured-quote"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

<style>
    body {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .camera-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 20px;
    }

    .camera-row {
        display: flex;
        align-items: flex-start;
        gap: 30px;
    }

    .video-wrapper {
        position: relative;
        width: 720px;
        height: 560px;
        border-radius: var(--radius-xl);
        border: 2px solid var(--glass-border);
        overflow: hidden;
        box-shadow: 0 0 40px rgba(180, 167, 214, 0.08);
    }

    .video-wrapper canvas {
        position: absolute;
        top: 0;
        left: 0;
    }

    .video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }

    .side-panel {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }

    #captureEmotionButton {
        background: var(--gradient-accent);
        color: var(--bg-primary);
        padding: 14px 28px;
        font-size: 17px;
        font-weight: 500;
        letter-spacing: -0.01em;
        border: none;
        cursor: pointer;
        border-radius: var(--radius-full);
        font-family: var(--font-family);
        width: 100%;
        transition: all var(--transition-base);
    }

    #captureEmotionButton:hover {
        filter: brightness(1.08);
        transform: scale(1.02);
        box-shadow: 0 4px 20px rgba(180, 167, 214, 0.25);
    }

    #captureEmotionButton:active {
        transform: scale(0.98);
    }

    .liveEmotion {
        text-align: center;
        min-width: 220px;
    }

    .live-label {
        display: block;
        font-size: 12px;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 0.02em;
        color: var(--text-secondary);
        margin-bottom: 4px;
    }

    .live-text {
        display: block;
        font-size: 1.5rem;
        font-weight: 600;
        letter-spacing: -0.03em;
        color: var(--lavender);
        text-transform: capitalize;
        transition: all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
    }

    .live-bar-container {
        margin-top: 10px;
        height: 4px;
        background: rgba(255, 255, 255, 0.08);
        border-radius: 2px;
        overflow: hidden;
    }

    .live-bar {
        height: 100%;
        width: 0%;
        background: var(--gradient-accent);
        border-radius: 2px;
        transition: width 0.2s ease;
    }

    .emotionResult {
        background: var(--glass-bg);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border: 1px solid var(--glass-border);
        border-radius: var(--radius-lg);
        padding: 20px 24px;
        display: flex;
        align-items: center;
        gap: 16px;
        width: 250px;
        box-sizing: border-box;
        transition: opacity var(--transition-slow), transform var(--transition-slow);
    }

    .emotionResult.hidden {
        opacity: 0;
        transform: translateY(20px);
        pointer-events: none;
    }

    .emotionResult.visible {
        opacity: 1;
        transform: translateY(0);
    }

    .captured-emoji {
        font-size: 48px;
    }

    .captured-text {
        display: flex;
        flex-direction: column;
    }

    .captured-emotion {
        font-size: 12px;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 0.02em;
        color: var(--text-secondary);
    }

    .captured-quote {
        font-size: 15px;
        color: var(--text-primary);
        margin-top: 4px;
        line-height: 1.47;
        letter-spacing: -0.016em;
    }
</style>

<script>
const video = document.getElementById('video')
let detections;
let detectionComplete = false;

Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri('/PocketTherapist/models'),
    faceapi.nets.faceLandmark68Net.loadFromUri('/PocketTherapist/models'),
    faceapi.nets.faceRecognitionNet.loadFromUri('/PocketTherapist/models'),
    faceapi.nets.faceExpressionNet.loadFromUri('/PocketTherapist/models'),
]).then(startVideo())

function startVideo() {
    navigator.getUserMedia(
        { video: {} },
        stream => video.srcObject = stream,
        err => console.error(err)
    )
}

video.addEventListener('play', () => {
    const canvas = faceapi.createCanvasFromMedia(video)
    document.getElementById('videoWrapper').append(canvas)
    const wrapper = document.getElementById('videoWrapper')
    const displaySize = { width: wrapper.clientWidth, height: wrapper.clientHeight }
    faceapi.matchDimensions(canvas, displaySize)
    setInterval(async () => {
        detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()
        const resizedDetections = faceapi.resizeResults(detections, displaySize)
        canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
        faceapi.draw.drawDetections(canvas, resizedDetections)
        faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
        faceapi.draw.drawFaceExpressions(canvas, resizedDetections)

        if (detections && detections.length > 0) {
            const expressions = detections[0].expressions;
            let maxEmotion = 'neutral';
            let maxScore = 0;
            for (const emotion in expressions) {
                if (expressions[emotion] > maxScore) {
                    maxScore = expressions[emotion];
                    maxEmotion = emotion;
                }
            }
            document.getElementById('liveEmotionText').textContent = maxEmotion;
            document.getElementById('liveConfidence').style.width = (maxScore * 100) + '%';
        } else {
            document.getElementById('liveEmotionText').textContent = 'No face';
            document.getElementById('liveConfidence').style.width = '0%';
        }

        detectionComplete = true;
    }, 100)
})

document.getElementById('captureEmotionButton').addEventListener('click', captureEmotion);

const emotionEmojis = {
    neutral: '\u{1F610}', happy: '\u{1F60A}', sad: '\u{1F622}', angry: '\u{1F620}',
    fearful: '\u{1F628}', disgusted: '\u{1F922}', surprised: '\u{1F632}'
};

function updateEmotionResult(emotion, quote) {
    document.getElementById('emotion').textContent = emotion;
    document.getElementById('quote').textContent = quote;
    document.getElementById('capturedEmoji').textContent = emotionEmojis[emotion] || '\u{1F642}';
    const result = document.getElementById('emotionResult');
    result.classList.remove('hidden');
    result.classList.add('visible');
}

function captureEmotion() {
    if (detectionComplete) {
        if (detections && detections.length > 0) {
            const expressions = detections[0].expressions;
            let maxEmotion = 'neutral';
            let maxScore = 0;

            for (const emotion in expressions) {
                const score = expressions[emotion];
                if (score > maxScore) {
                    maxScore = score;
                    maxEmotion = emotion;
                }
            }

            const apiUrl = `https://pt-backend-long-river-5087.fly.dev/api/quote/${maxEmotion}`;

            fetch(apiUrl)
                .then(response => response.text())
                .then(data => {
                    updateEmotionResult(maxEmotion, data);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });

        } else {
            alert('No face detected.');
        }
    } else {
        alert('Detection is not complete yet. Please wait.');
    }
}
</script>
</html>
