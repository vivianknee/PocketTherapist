---
layout: none
---

{%- include header.html -%} 
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pocket Therapist</title>
</head>

<body>
    <div class="content">
        <h1 class="text"><span id="typing-text">Your Pocket Therapist</span><span id="cursor"></span></h1>
        <p>Here to cheer you up!</p>
        <div>
            <button class="index-button" type="button">ABOUT</button>
            <button class="index-button" type="button">TEAM</button>
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

#typing-text {
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    animation: typing 3s steps(14) forwards;
}

#cursor {
    animation: blink 1s infinite;
}

@keyframes typing {
    from { width: 0; }
    to { width: 100%; }
}

@keyframes blink {
    50% { opacity: 0; }
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

