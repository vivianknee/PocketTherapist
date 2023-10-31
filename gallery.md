---
layout: none
baseurl: /gallery
---

<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pocket Therapist</title>
</head>
{%- include header.html -%}
<body class="gallery-body">
    <h1 class="title">Quotes Gallery</h1>
    <div class="img-gallery" id="quote-root">
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
    overflow: hidden;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 25px;
}

.img-wrapper {
    position:relative;
    overflow: hidden;
}

.img-wrapper > img {
    display: block;
    width: 80%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    object-position: center;
    width: 100%;
    cursor: pointer;
}

.img-wrapper > .content {
    position: absolute;
    inset: 0;
    font-size: 1.3rem;
    padding: 1rem;
    background: rgba(255, 255, 255, .4);
    display: flex;
    justify-content: center;
    align-items: center;
}

.img-wrapper > img,
.img-wrapper > .content {
    transition: 200ms ease-in-out;
}

.img-wrapper > .content.fade {
    opacity: 0;
}

.img-wrapper:hover > .content.fade {
    opacity: 1;
}

.img-wrapper:hover > img.blur {
    filter: blur(5px);
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

    function getAllQuotes() {
        fetch('https://ptbackend.stu.nighthawkcodingsociety.com/api/quote/')
            .then(response => response.json())
            .then(data => {
                processQuotes(data);  
            })
            .catch(err => {
                console.log(err);
            });
    }

    getAllQuotes(); 

    function processQuotes(quotes) {
        // find the root div
         quotes.forEach(quote =>{
            //outer most div
            const root_div = document.getElementById("quote-root");

            //individual quote div
            const quote_div = document.createElement("div");
            quote_div.className = "img-wrapper";

            //img inside quote div
            const img = document.createElement('img');

           if (quote.emotion == "happy"){
                img.src = "{{ site.baseurl }}/images/happy.png";
                img.className = "blur";
            }
            else if (quote.emotion == "sad"){
                img.src = "{{ site.baseurl }}/images/sad.png";
                img.className = "blur";
            }
            else if(quote.emotion == "angry"){
                img.src = "{{ site.baseurl }}/images/angry.png";
                img.className = "blur";
            }
            else {
                console.log("invalid emotion");
            }

            //content aka quote inside quote div
            const content_div = document.createElement("div");
            content_div.className = "content fade";
            content_div.innerHTML += quote.quote;

            //append img and content to quote div
            quote_div.appendChild(img);
            quote_div.appendChild(content_div);

            root_div.appendChild(quote_div);
        });
    }

    processQuotes(quotes);

</script>