---
layout: none
baseurl: /camera2
---
 {%- include header.html -%}
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<html lang="en">
<head>
</head>
<script defer src="/face-api.min.js"></script>
<script defer src="/cscript.js"></script>


<style>
    body {
        background: linear-gradient(#FFBF46, #FF99C9);  
        margin: 0; 
        padding: 0; 
        width: 100vw; 
        height: 100vh; 
        display: flex; 
        justify-content: center; 
        align-items: center; 
    }

    canvas {
        position: absolute; 
    }

    #captureEmotionButton {
        background-color: #1eb6af; 
        color: white; /* White text color */
        padding: 20px 30px; /* Padding around the text */
        font-size: 22px; /* Font size */
        border: none; /* Remove the button border */
        cursor: pointer; /* Change cursor to a pointer on hover */
        border-radius: 5px; /* Rounded corners */
        position: absolute;
        top: 8ch;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }

    #captureEmotionButton:hover {
        background-color: #61d9d3; /* Darker green background on hover */
    }

    .emotionResult {
        position: absolute;
        bottom: 5ch;
        font-size: 35px;
        color: white;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }

    .video {
        border: 10px solid white; /* Add a white border */
        border-radius: 8vh;

    }


</style>

<body>
    <video id="video" width="720" height="560" autoplay muted class="video">  </video>
    <button id="captureEmotionButton">Capture Emotion</button>
    <div id="emotionResult" class="emotionResult">
        Emotion: <span id="emotion"></span><br>
        Quote: <span id="quote"></span>
    </div>
    <script>
        // JavaScript code for handling emotion detection and updating the HTML
        function updateEmotionResult(emotion, quote) {
            document.getElementById('emotion').textContent = emotion;
            document.getElementById('quote').textContent = quote;
        }
        document.getElementById('captureEmotionButton').addEventListener('click', function () {
            captureEmotion().then(result => {
                updateEmotionResult(result.emotion, result.quote);
            });
        });
    </script>

</body>
</html>
