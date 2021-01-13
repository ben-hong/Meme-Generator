window.addEventListener('load', function () {

    let submitter = document.getElementById("submitter");
    submitter.addEventListener('click', function() {
        let gallery = document.getElementById("gallery");
        let div = document.createElement("div");
        div.className = "image";
        let img = document.createElement("img");
        let imgSource = document.getElementsByClassName("meme-image")[0].src;
        img.src = imgSource;
        img.className = 'meme-image';
        div.append(img);
        let topText = document.createElement("h2");
        topText.className = 'top-text';
        div.append(topText);
        let topVal = document.getElementById("meme-visual").getElementsByClassName("top-text")[0].textContent;
        topText.innerHTML = topVal;
        let botText = document.createElement("h2");
        botText.className = 'bot-text';
        div.append(botText);
        let botVal = document.getElementById("meme-visual").getElementsByClassName("bot-text")[0].textContent;
        botText.innerHTML = botVal;
        gallery.append(div);
        let inputs = document.getElementsByClassName("meme-inputs")[0].getElementsByTagName("input");
        for (let i = 0; i < inputs.length; i++) {
            document.getElementById(inputs[i].id).value = "";
        }
    })
  })
  function memeMaker() {
    let imageURL = document.getElementById("imageurl").value;
    let alt = imageURL === document.getElementsByClassName("meme-image")[0].alt;
    if (imageURL === '' || imageURL === alt) {
        return false;   
    } 
    let topTextVal = document.getElementById("toptext").value;
    let botTextVal = document.getElementById("bottomtext").value;
    document.getElementsByClassName("meme-image")[0].src = imageURL;
    let topTextMeme = document.getElementById("meme-visual").getElementsByClassName("top-text")[0];
    let botTextMeme = document.getElementById("meme-visual").getElementsByClassName("bot-text")[0];
    topTextMeme.innerHTML = topTextVal;
    botTextMeme.innerHTML = botTextVal;
}

