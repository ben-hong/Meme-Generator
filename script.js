window.addEventListener('load', function () {

    let submitter = document.getElementById("submitter");
    submitter.addEventListener('click', function() {
    let imageURL = document.getElementById("imageurl").value;

        if (!checkURL(imageURL)) {
            return false;
        } 
        let gallery = document.getElementById("gallery");
        let div = document.createElement("div");
        div.className = "image";
        div.setAttribute("id", "gal-img");
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
    let topTextVal = document.getElementById("toptext").value;
    let botTextVal = document.getElementById("bottomtext").value;
    let topTextMeme = document.getElementById("meme-visual").getElementsByClassName("top-text")[0];
    let botTextMeme = document.getElementById("meme-visual").getElementsByClassName("bot-text")[0];
    if (!checkURL(imageURL)) {
        return false;
    } 
    document.getElementsByClassName("meme-image")[0].src = imageURL; 
    topTextMeme.innerHTML = topTextVal;
    botTextMeme.innerHTML = botTextVal;
}
function checkURL(url) {
    let extensions = ['jpeg', 'jpg', 'png', 'gif', 'image'];
    for (let name of extensions) {
        if (url.includes(name)) {
            return true;
        }
    }
    return false;
}
window.addEventListener('click', function(event) {
    if (event.target.parentElement.id === 'gal-img') {
        event.target.parentElement.remove();
    }
});

let sum = 0;


