---
layout: none
baseurl: /camerawrong
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
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="your-stylesheet.css">
</head>
<body>
    <div class="title">Take a Photo To Determine Your Mood</div>
</body>
</html>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>On-Screen Camera</title>
</head>
<body>
    <div id="camera-container">
        <video id="camera" autoplay></video>
    </div>
    <button id="capture-button">Capture Photo</button>

    <script src="script.js"></script>
</body>
</html>


<style>

    body {
        margin: 0;
        padding: 0;
        height: 100vh;
        background: linear-gradient(#FFBF46, #FF99C9);  
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-family: cursive;
        color: black;
    }

    .title {
        font-size: 60px;
        margin-bottom: 20px;
    }

    .container {
        width: 5in;
        height: 4in;
        background-color: #ffffff; /* Fully white background */
        border: 5px solid #ccc; /* A slightly darker shade of gray for the border */
    }

    .button-container {
        margin-top: 20px;
        text-align: center;
    }

    .generate-button {
        background-color: #ccc; /* Light grey background color */
        color: #000; /* Black text color */
        border: none; /* No border */
        border-radius: 20px; /* Rounded corners */
        padding: 10px 20px; /* Padding for button content */
        font-size: 18px; /* Font size */
        cursor: pointer; /* Change cursor on hover */
        font-family: cursive; /* Set the font-family to cursive */
    }


    .generate-button:hover {
        background-color: #999; /* Darker grey background color on hover */
    }


</style>

