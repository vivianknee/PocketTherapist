---
layout: none
baseurl: /camera
---

 {%- include header.html -%}
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<html lang="en">
<head>
    <title>Gradient Background</title>
</head>
<script defer src="/face-api.min.js"></script>
<script defer src="/cscript.js"></script>


<style>
    body {
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
        background-color: #af4ca7; /* Green background color */
        color: white; /* White text color */
        padding: 10px 20px; /* Padding around the text */
        font-size: 16px; /* Font size */
        border: none; /* Remove the button border */
        cursor: pointer; /* Change cursor to a pointer on hover */
        border-radius: 5px; /* Rounded corners */
    }

    #captureEmotionButton:hover {
        background-color: #f290ea; /* Darker green background on hover */
    }

</style>

<body>

    <video id="video" width="720" height="560" autoplay muted>  </video>
    
    <button id="captureEmotionButton">Capture Emotion</button>

</body>