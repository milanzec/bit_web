var dogsPics;

function setImg(dogsRandom) {
    var img = document.createElement('img');
    img.style.width = '400px'
    img.style.height = '300px'
    img.style.margin = '20px'
    var bodyOne = document.body
    img.setAttribute('src', dogsRandom.message)
    bodyOne.appendChild(img);
    console.log(dogsRandom);
}
var btn = document.querySelector('.btnImg')
btn.style.display = 'block'
btn.addEventListener('click', function () {
    var dogRequest = new XMLHttpRequest();
    dogRequest.open("GET", " https://dog.ceo/api/breeds/image/random");
    dogRequest.onload = function () {
        if (dogRequest.status >= 200 && dogRequest.status < 400) {
            dogsPics = JSON.parse(dogRequest.responseText);
            setImg(dogsPics);
        }
    }
    dogRequest.send();
})
