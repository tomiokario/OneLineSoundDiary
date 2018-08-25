/*----------------------------------------
 * 変数
 * --------------------------------------*/
var events="def";
var person="def";
var emotion="def";


function getEvents(name){
    var radios = document.getElementsByName(name);  //ラジオボタンオブジェクトを取得する

    for(var i=0; i<radios.length; i++){   //ラジオボタンオブジェクトから選択されたものを探す
        if (radios[i].checked) {
            events = radios[i].value;     // eventsにイベント名を代入
            break;
        }
    }
}


function getPerson(name){
    var radios = document.getElementsByName(name);

    for(var i=0; i<radios.length; i++){
        if (radios[i].checked) {
            person = radios[i].value;
            break;
        }
    }
}


function getEmotion(name){
    var radios = document.getElementsByName(name);

    for(var i=0; i<radios.length; i++){
        if (radios[i].checked) {
            emotion = radios[i].value;
            break;
        }
    }
}

/*----------------------------------------
 * Start関数
 * --------------------------------------*/
function start(){
    if(events=="hanabi"){
        hanabi();
    }
    else if(events=="camp"){
        alert("campはまだ実装されていません");
    }
    else{
        alert("seaはまだ実装されていません");
    }
}



function hanabi(){
    hanabiStart();
    hanabi_loverStart();
    hanabi_friendStart();
    sadStart();
    happyStart();

}

function add_person(){
    if(events=="hanabi"){
        if(person=="friend" || person=="family"){
            hanabi_friendVolumeUp();
        }
        else{
            hanabi_loverVolumeUp();
        }
    }
    else{
        alert("error");
    }
}

function add_emotion(){
    if(emotion=="happy"){
        happyVolumeUp();
    }
    else{
        sadVolumeUp();
    }
}

/*----------------------------------------
 * サウンド制御関数
 * --------------------------------------*/

/*-----------------
 * イベント
 * ---------------*/

/* 花火 */

// hanabi:
function hanabiStart(){
    var v = document.getElementById("hanabi");
    v.volume=1;
    v.play();
    console.log("花火s");
}
function hanabiVolumeUp(){
    var v = document.getElementById("hanabi");
    v.volume = 1;
    console.log("花火v");
}



// hanabi_lover:
function hanabi_loverStart(){
    var v = document.getElementById("hanabi_lover");
    v.volume=0;
    
    v.play();
    console.log("花火lover s");
}
function hanabi_loverVolumeUp(){
    var v = document.getElementById("hanabi_lover");
    v.volume = 1;
    console.log("花火lover v");
}




// hanabi_friend:
function hanabi_friendStart(){
    var v = document.getElementById("hanabi_friend");
    v.volume=0;
    
    v.play();
}
function hanabi_friendVolumeUp(){
    var v = document.getElementById("hanabi_friend");
    v.volume = 1;
}


/* キャンプ */

// camp:
function campStart(){
    var v = document.getElementById("camp");
    v.volume=0;
    
    v.play();
}
function campVolumeUp(){
    var v = document.getElementById("camp");
    v.volume = 1;
}



/* 海 */


// sea:
function seaStart(){
    var v = document.getElementById("sea");
    v.volume=0;
    
    v.play();
}
function seaVolumeUp(){
    var v = document.getElementById("sea");
    v.volume = 1;
}




/*-----------------
 * 人
 * ---------------*/




/*-----------------
 * 感情
 * ---------------*/

// happy:
function happyStart(){
    var v = document.getElementById("happy");
    v.volume=0;
    
    v.play();
}
function happyVolumeUp(){
    var v = document.getElementById("happy");
    v.volume = 1;
}


// sad:
function sadStart(){
    var v = document.getElementById("sad");
    v.volume=0;
    
    v.play();
}
function sadVolumeUp(){
    var v = document.getElementById("sad");
    v.volume = 1;
}









/* 人 */



// friend: 40,60
function friendStart(){
    var v = document.getElementById("friend");
    v.volume=0;
    
    v.play();
}
function friendVolumeUp(){
    var v = document.getElementById("friend");
    v.volume = 1;
}





// lover: 40,60
function loverStart(){
    var v = document.getElementById("lover");
    v.volume=0;
    
    v.play();
}
function loverVolumeUp(){
    var v = document.getElementById("lover");
    v.volume = 1;
}





// family: 40,60
function familyStart(){
    var v = document.getElementById("family");
    v.volume=0;
    
    v.play();
}
function familyVolumeUp(){
    var v = document.getElementById("family");
    v.volume = 1;
}

