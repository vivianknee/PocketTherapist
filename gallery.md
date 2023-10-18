---
layout: none
baseurl: /gallery
---

<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pocket Therapist</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="your-stylesheet.css">
</head>
{%- include header.html -%}
<body class="gallery-body">
    <h1 class="title">Quotes Gallery</h1>
    <div class="img-gallery">
        <img src="images/happy.png">
        <img src="images/sad.png">
        <img src="images/angry.png">
        <img src="images/happy.png">
        <img src="images/sad.png">
        <img src="images/angry.png">
    </div>
</body>

<style>

.gallery-body{
    background: linear-gradient(#FFBF46, #FF99C9);  
}

.img-gallery{ 
    padding: 20px;
    position: absolute;
    top: 25%;
    left: 10%;
    width: 80%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 25px;
}

.img-gallery img{
    width: 100%;
    cursor: pointer;
}

.img-gallery img:hover{
    transform: rotateY(180deg);
}


.title{
    width: 100%;
    position: absolute;
    top: 20%;
    font-size: 35px;
    text-align: center;
    color: #fff;
}
</style>

<script>
   
</script>