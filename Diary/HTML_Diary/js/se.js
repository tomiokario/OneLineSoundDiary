// fireflower: 1,20
function fireflowerStart(){
    var v = document.getElementById("fireflower");
    v.volume = 1;
    v.load();
    v.play();
}
function fireflowerStop(){
    var v = document.getElementById("fireflower");
    v.volume = v.volume - 1; // volumeを0にする
}
function fireflowerReStart(){
    var v = document.getElementById("fireflower");
    v.volume = 1;
}





// enjoy: 20,40
function enjoyStart(){
    var v = document.getElementById("enjoy");
    v.volume = 1;
    v.load();
    v.play();
}
function fireflowerStop(){
    var v = document.getElementById("enjoy");
    v.volume = v.volume - 1;
}
function fireflowerReStart(){
    var v = document.getElementById("enjoy");
    v.volume = 1;
}





// sad: 40,60
function sadStart(){
    var v = document.getElementById("sad");
    v.volume = 1;
    v.load();
    v.play();
}
function fireflowerStop(){
    var v = document.getElementById("sad");
    v.volume = v.volume - 1;
}
function fireflowerReStart(){
    var v = document.getElementById("sad");
    v.volume = 1;
}





