let dialogue = [];
let counter = 0;
let chara = [];
let bg = [];
let track1 = document.getElementById('player');
let track2 = document.getElementById('player2');
let track3 = document.getElementById('player3');
let track4 = document.getElementById('player4');
let track5 = document.getElementById('player5');
let track6 = document.getElementById('player6');
let track7 = document.getElementById('player7');
let track8 = document.getElementById('player8');
let track9 = document.getElementById('player9');
let track10 = document.getElementById('player10');
let track11 = document.getElementById('player11');
let track12 = document.getElementById('player12');
let track13 = document.getElementById('player13');


text = fetch("https://imanas.shanghai.nyu.edu/~arz268/communications-lab/Comic/dialogue.txt")
.then((response)=>{
    return response.text()
})
.then((response)=>{
    dialogue = response.split("\n");
    return dialogue;
});


text2 = fetch("https://imanas.shanghai.nyu.edu/~arz268/communications-lab/Comic/chara.txt")
.then((response)=>{
    return response.text()
})
.then((response)=>{
    chara = response.split("\n");
    return chara;
});


text = fetch("https://imanas.shanghai.nyu.edu/~arz268/communications-lab/Comic/bg.txt")
.then((response)=>{
    return response.text()
})
.then((response)=>{
    bg = response.split("\n");
    return bg;
});


// These are the 4 routes, one good ending, three bad. The order are Lab-Good, Lab-Bad, Kitchen, Infirmary 
routes = [false,false,false,false];
p = document.getElementById('actualText');
btn1 = document.getElementById('btn1');
btn2 = document.getElementById('btn2');
btn3 = document.getElementById('btn3');
btn4 = document.getElementById('btn4');
bgImg = document.getElementById('bgImg');
charaImg = document.getElementById('charaImg');

//made this to display/hide the buttons. When Proceed is shown, the others have to be hidden and vice versa.
function flipButtons(state){
    if(state === 't'){
        btn1.style.display = "none";
        btn2.style.display = "block";
        btn3.style.display = "block";
        btn4.style.display = "block";
    }
    else if(state === 'f'){
        btn1.style.display = "block";
        btn2.style.display = "none";
        btn3.style.display = "none";
        btn4.style.display = "none";
    }
}

function allTracksPause(){
    track1.pause();
    track2.pause();
    track3.pause();
    track4.pause();
    track5.pause();
    track6.pause();
    track7.pause();
    track8.pause();
    track9.pause();
    track10.pause();
    track11.pause();
    track12.pause();
    // track13.pause();
}

function pageUpdater(){
    console.log(counter);

if(counter===182){
    btn1.style.display = "none";
}

if(counter===68||counter===87||counter===116){
    counter = 46;
    allTracksPause();
    track9.currentTime = 0;
    track8.currentTime = 0;
    track6.play();       
}

p.innerHTML = dialogue[counter];
if(counter===46)
{
    flipButtons('t');
}

if(chara[counter] == 0)
{
    charaImg.style.display = "none";
}


if(chara[counter] == 1)
{
    charaImg.style.display = "block";
    charaImg.src = "assets/sigma.png";
}


if(chara[counter] == 2)
{
    charaImg.style.display = "block";
    charaImg.src = "assets/clover.png";
}


if(chara[counter] == 3)
{
    charaImg.style.display = "block";
    charaImg.src = "assets/dio.png";
}


if(chara[counter] == 4)
{
    charaImg.style.display = "block";
    charaImg.src = "assets/phi.png";
}


if(chara[counter] == 5)
{
    charaImg.style.display = "block";
    charaImg.src = "assets/tenmyouji.png";
}


if(chara[counter] == 6)
{
    charaImg.style.display = "block";
    charaImg.src = "assets/delta.png";
}



if(bg[counter] == 1){
    console.log("null");
    bgImg.src = "assets/null.jpg"
}
if(bg[counter] == 2){
    console.log("parkinglot");
    bgImg.src = "assets/bgPark.jpg"
    bgImg.style.width = "140%";
}
if(bg[counter] == 3){
    console.log("dungeon");
    bgImg.src = "assets/bgDungeon.jpg"
}
if(bg[counter] == 4){
    console.log("hp");
    bgImg.src = "assets/bgHP.jpg"
}
if(bg[counter] == 6){
    console.log("kitchen");
    bgImg.src = "assets/bgKit.jpg"
}
if(bg[counter] == 5){
    console.log("lab");
    bgImg.src = "assets/bgLab.jpg"
}

if(counter===0){
    track1.pause();
    track1.src= "";
    track2.play();
}
if(counter===4){
    track2.pause();
    track2.src = ""
    track3.play();
}
if(counter===6){
    track3.pause();
}
if(counter===8){
    track3.play();
}

if(counter===24){
    track3.pause();
    track4.play();
}
if(counter===36){
    track4.pause();
    track5.play();
}
if(counter===46){
    track5.pause();
    track6.play();
}
if(counter===89){
    allTracksPause();
    // track6.pause();
    track7.play();
}

if(counter===102){
    allTracksPause();
    // track7.pause();
    track8.play();
}

if(counter===115){
    allTracksPause();
    // track8.pause();
    track9.play();
}

if(counter===49){
    allTracksPause();
    track10.play();
}

if(counter===57){
    allTracksPause();
    track8.play();
}

if(counter===66){
    allTracksPause();
    track9.play();
}

if(counter===70){
    allTracksPause();
    track11.play();
}

if(counter===77){
    allTracksPause();
    track8.play();
}

if(counter===85){
    allTracksPause();
    track9.play();
}

if(counter===118){
    allTracksPause();
    track7.play();
}

if(counter===131){
    allTracksPause();
    track8.play();
}
if(counter===146){
    allTracksPause();
}

if(counter===148){
    allTracksPause();
    track12.play();
}

if(counter===163){
    allTracksPause();
    track13.play();
}

counter++;

}

function labTrue(){
    if(routes[2] === true && routes[3] === true){
        routes[0] = true;
        counter = 118;
        pageUpdater();
        flipButtons('f');
    }
    else{
        routes[1] = true;
        counter = 89;
        pageUpdater();
        flipButtons('f');
    }

}

function kitchenTrue(){
    routes[2] = true;
    counter = 70;
    pageUpdater();
    flipButtons('f');
}

function infirmaryTrue(){
    routes[3] = true;
    counter = 49;
    pageUpdater();
    flipButtons('f');
}
