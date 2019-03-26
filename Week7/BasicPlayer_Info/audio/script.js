let player = document.getElementById('Player');

let message = document.getElementById('message');

player.addEventListener("timeupdate", playerProgress);

function playerProgress(){
    let minutes = Math.floor(player.currentTime/60);
    let seconds = Math.floor(player.currentTime)-minutes*60;

    message.innerHTML = "The player is playing at" + minutes + " : " + seconds;
    console.log("got here");
}