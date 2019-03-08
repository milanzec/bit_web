

var movement = document.querySelector('body');
movement.addEventListener('click', footballfield);

function footballfield(event) {
    var x = event.clientX;
    var y = event.clientY;
    var player = document.querySelector(".player");
    player.style.left = x + "px";
    player.style.top = y + "px";

}








