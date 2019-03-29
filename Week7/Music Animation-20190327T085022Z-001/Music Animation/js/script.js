let images = ["images/walking0.jpg","images/walking1.jpg","images/walking2.jpg"];

let currentIndex = 0;

let img = document.createElement("img");
img.src = images[currentIndex];
document.body.appendChild(img);

let player = document.getElementById('player');

player.addEventListener("timeupdate", playerprogressed);

let startBtn = document.getElementById("startBtn");
let pauseBtn = document.getElementById("pauseBtn");

startBtn.addEventListener("click",playAudio);
pauseBtn.addEventListener("click",pauseAudio);

function playAudio(){
    player.play();
}

function pauseAudio(){
    player.pause();
}

function playerprogressed(){
    currentIndex++;
    if (currentIndex == images.length){
        currentIndex = 0;
    }
    img.src = images[currentIndex];

}

