
function memeMaker() {
    let imageURL = document.getElementById("imageurl").value;
    let alt = imageURL === document.getElementById("meme-image").alt;
    if (imageURL === '' || imageURL === alt) {
        return false;   
    } 
    let topTextVal = document.getElementById("toptext").value;
    let botTextVal = document.getElementById("bottomtext").value;
    document.getElementById("meme-image").src = imageURL;
    let topTextMeme = document.getElementById("meme-visual").getElementsByClassName("top-text")[0];
    let botTextMeme = document.getElementById("meme-visual").getElementsByClassName("bot-text")[0];
    topTextMeme.innerHTML = topTextVal;
    botTextMeme.innerHTML = botTextVal;
}

// on submit function
// create a div with image class, 2 h2 divs, with classes top and bot text, and the innerHTML text in it
function memeSubmitter() {
    
}
