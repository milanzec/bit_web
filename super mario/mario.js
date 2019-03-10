
var marioBground = document.querySelector("body");
marioBground.addEventListener("keydown", event => {
    if (event.keyCode == '39') {
        runMario();
        setInterval(shakeBg, 20);
    }
    
}
);
marioBground.addEventListener("keyup", event => {
    if (event.keyCode == '39') {
        stopMario();
        clearInterval(setInterval(shakeBg, 20));
    }
}
);








function runMario() {
    var marioPlayer = document.querySelector(".marioImg");
    marioPlayer.src = 'images/mario_running.gif';
}

function shakeBg() {
    var bgroundImg = document.getElementById("bgDiv");
    bgroundImg.classList.toggle("bgImgleft");
}


function stopMario() {
    var marioPlayer = document.querySelector(".marioImg");
    marioPlayer.setAttribute("src", "images/mario.png");
    var bgroundImg = document.getElementById("bgDiv");
    // bgroundImg.classList.remove("bgImgleft");
    //  clearInterval
    var set = setInterval(shakeBg, 200) ;
    
}



