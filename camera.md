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

<body>
    <div class="title">How Are You Feeling Today?</div>
    <div class="container">
        <!-- Your content goes here -->
    </div>
    <div class="button-container">
        <button class="generate-button">Generate</button>
    </div>    
    <div class="result">
        <p>Our AI algorithm determines you are ______!</p>
        <p>Here's a quote to cater to your mood:</p>
    </div>
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

