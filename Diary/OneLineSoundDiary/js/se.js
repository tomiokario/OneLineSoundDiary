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
    console.log("getEvemnt(): deside Event");
}


function getPerson(name){
    var radios = document.getElementsByName(name);

    for(var i=0; i<radios.length; i++){
        if (radios[i].checked) {
            person = radios[i].value;
            break;
        }
    }
    console.log("getPerson(): deside person");
}


function getEmotion(name){
    var radios = document.getElementsByName(name);

    for(var i=0; i<radios.length; i++){
        if (radios[i].checked) {
            emotion = radios[i].value;
            break;
        }
    }
    console.log("getEmotion(): deside Emotion");
}

/*----------------------------------------
 * Start関数
 * --------------------------------------*/
function start(){
    if(events=="hanabi"){
        hanabi();
    }
    else if(events=="camp"){
        camp();
    }
    else if(events=="sea"){
        sea();
    }
    console.log("start(): sound start");
}



function hanabi(){
    hanabiStart();
    hanabi_loverStart();
    hanabi_friendStart();
    sadStart();
    happyStart();
    console.log("hanabi(): 花火");
}
function camp(){
    campStart();
    camp_loverStart();
    camp_friendStart();
    sadStart();
    happyStart();
    console.log("camp(): キャンプ");

}
function sea(){
    seaStart();
    sea_loverStart();
    sea_friendStart();
    sadStart();
    happyStart();
    console.log("sea(): 海");

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
    else if(events=="camp"){
        if(person=="friend" || person=="family"){
            camp_friendVolumeUp();
        }
        else{
            camp_loverVolumeUp();
        }

    }
    else if(events=="sea"){
        if(person=="friend" || person=="family"){
            sea_friendVolumeUp();
        }
        else{
            sea_loverVolumeUp();
        }

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
}



// hanabi_lover:
function hanabi_loverStart(){
    var v = document.getElementById("hanabi_lover");
    v.volume=0;
    
    v.play();
}
function hanabi_loverVolumeUp(){
    var v = document.getElementById("hanabi_lover");
    v.volume = 1;
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
    v.volume=1;
    v.play();
}
function campVolumeUp(){
    var v = document.getElementById("camp");
    v.volume = 1;
}

// camp_lover:
function camp_loverStart(){
    var v = document.getElementById("camp_lover");
    v.volume=0;
    
    v.play();
}
function camp_loverVolumeUp(){
    var v = document.getElementById("camp_lover");
    v.volume = 1;
}

// camp_friend:
function camp_friendStart(){
    var v = document.getElementById("camp_friend");
    v.volume=0;
    
    v.play();
}
function camp_friendVolumeUp(){
    var v = document.getElementById("camp_friend");
    v.volume = 1;
}





/* 海 */


// sea:
function seaStart(){
    var v = document.getElementById("sea");
    v.volume=1;
    
    v.play();
}
function seaVolumeUp(){
    var v = document.getElementById("sea");
    v.volume = 1;
}


// sea_lover:
function sea_loverStart(){
    var v = document.getElementById("sea_lover");
    v.volume=0;
    
    v.play();
}
function sea_loverVolumeUp(){
    var v = document.getElementById("sea_lover");
    v.volume = 1;
}

// sea_friend:
function sea_friendStart(){
    var v = document.getElementById("sea_friend");
    v.volume=0;
    
    v.play();
}
function sea_friendVolumeUp(){
    var v = document.getElementById("sea_friend");
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









