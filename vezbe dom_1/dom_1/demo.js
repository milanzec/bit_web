function a() {

    document.querySelector(".sndUl").className = "sndUl newClass";

}

a();


function b() {
    var tag = document.querySelectorAll("#firstUl li");
    for (i = 0; i < tag.length; i++) {
        tag[i].className = "supClass";
    }

}

b();

function c() {
    document.querySelector(".thrd").className = "thrd supClass "
    var yyy = document.querySelector(".thrd");
    /* prebaciti u upper case*/
}

c();

function d() {
    var removIt = document.querySelector(".active");
    removIt.className = "";

    document.querySelector(".trd").firstElementChild.className = "active"
}

d();

function obav() {
    alert(document.querySelector("nav ul").firstElementChild.textContent)

}

obav();