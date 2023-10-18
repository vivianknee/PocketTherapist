---
layout: none
---

{%- include header.html -%} 
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pocket Therapist</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="your-stylesheet.css">
</head>

<body>
    <div class="content">
        <h1>Your Pocket Therapist</h1>
        <p>Here to cheer you up!</p>
        <div>
            <button class="index-button" type="button">ABOUT</button>
            <button class="index-button" type="button">TEAM</button>
        </div>
        <div style="position: fixed; bottom: 10px; right: 10px;">
            <button id="startChatButton" class="btn btn-primary" type="button">Talk to a therapist!</button>
        </div>
        <iframe id="chatFrame" style="display: none; position: fixed; bottom: 10px; right: 10px; width: 350px; height: 400px; border: solid 1px #333; " src="chat.html"></iframe>
    </div>
</body>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
    $(function() {
        $("#startChatButton").on("click", function(evt) {
            $("#startChatButton").hide();
            $("#chatFrame").show(); // Show the chatFrame
        });
    });
</script>
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

