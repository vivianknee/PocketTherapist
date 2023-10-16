---
layout: none
---

<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pocket Therapist</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="your-stylesheet.css">
</head>

<body>
    {%- include header.html -%} 
    <div class="content">
        <h1>Your Pocket Therapist</h1>
        <p>Here to cheer you up!</p>
        <div>
            <button class="index-button" type="button">BLANK</button>
            <button class="index-button" type="button">BLANK</button>
        </div>
    </div>
</body>
</html>

<style>

body {
    background: linear-gradient(#FFBF46, #FF99C9);  
}

.content {
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    text-align: center;
    color: #fff;
}

.content h1 {
    font-size: 70px;
    margin-top: 80px;
}

.content p {
    margin: 20px auto;
    font-weight: 100;
    line-height: 25px;
}

.index-button {
    width: 200px;
    padding: 15px 0;
    text-align: center;
    margin: 20px 10px;
    border-radius: 25px;
    font-weight: bold;
    border: 2px solid white;
    background: transparent;
    color: #fff;
    cursor: pointer;
    overflow: hidden;
}

.index-button:hover{
    border: none;
    background: #009688;
}

</style>

