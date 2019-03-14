
var testajx = new XMLHttpRequest();
testajx.open("GET", "https://api.thecatapi.com/v1/images/search");
testajx.setRequestHeader("'x-api-key", "856e793d-3cac-4256-870f-f1c9b0eba386");
var img;
testajx.onload = function () {
    if (testajx.status >= 200 && testajx.status < 400) {
        var catsRandom = JSON.parse(testajx.responseText);
        var img = document.createElement('img');
        img.setAttribute('src', catsRandom[0].url)
        var bodyOne = document.body
        bodyOne.appendChild(img);
        console.log(catsRandom);
    } else {
        console.log("error");
    }
}

testajx.send();

// var btn = document.querySelector('button');
// btn.addEventListener('click', eventHandler);
// function eventHandler(event) {

// }












