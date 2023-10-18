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
    <div>
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

</style>

