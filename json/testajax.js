var btn = document.querySelector('button');
var testajx = new XMLHttpRequest();
var catsRandom;
var img;
testajx.onload = function () {
    if (testajx.status >= 200 && testajx.status < 400) {
        catsRandom = JSON.parse(testajx.responseText);
        setImg(catsRandom);
    }
}

function setImg(catsRandom) {
    var img = document.createElement('img');
    var bodyOne = document.body
    img.setAttribute('src', catsRandom[0].url)
    bodyOne.appendChild(img);
    console.log(catsRandom);
}



btn.addEventListener("click", function () {
    testajx.open("GET", "https://api.thecatapi.com/v1/images/search");
    testajx.setRequestHeader("'x-api-key", "856e793d-3cac-4256-870f-f1c9b0eba386");
    testajx.send();
})














