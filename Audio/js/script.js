//global variable to set the base zoom level, can be changed depending how much you wanna change the zoom.
let zoomLvl = 100;
let pic = document.getElementById("image1");
let images = ["AudioAssets/1.gif","AudioAssets/2.jpg","AudioAssets/3.jpg","AudioAssets/4.jpg"];
let imagesPrime = ["AudioAssets/1'.gif","AudioAssets/2'.jpg","AudioAssets/3'.jpg","AudioAssets/4'.jpg"];

//let audio = ["AudioAssets/1.wav","AudioAssets/2.wav","AudioAssets/3.wav","AudioAssets/4.wav"];
let curImage = 0

let track1 = document.getElementById('player');
let track2 = document.getElementById('player2');
let track3 = document.getElementById('player3');
let track4 = document.getElementById('player4');


let track1Prime = document.getElementById('player1Prime');
let track2Prime = document.getElementById('player2Prime');
let track3Prime = document.getElementById('player3Prime');
let track4Prime = document.getElementById('player4Prime');


let tracks = [track1, track2,track3,track4];
let tracksPrime = [track1Prime, track2Prime,track3Prime,track4Prime];

//function that actually does the zoom thing\
let curWidth = 1280;
let curHeight = 720;
let originalHeight = 1280;
let originalWidth = 720;
let distortion = false;

function allTrackPause(){
    track1.pause();
    track1.currentTime = 0;
    track2.pause();
    track2.currentTime = 0;
    track3.pause();
    track3.currentTime = 0;
    track4.pause();
    track4.currentTime = 0;
    track1Prime.pause();
    track1Prime.currentTime = 0;
    track2Prime.pause();
    track2Prime.currentTime = 0;
    track3Prime.pause();
    track3Prime.currentTime = 0;
    track4Prime.pause();
    track4Prime.currentTime = 0;
}

function distort(){
    if(distortion===false){
        distortion = true;
        allTrackPausse();
        tracks[curImage].volume = tracks[curImage].volume - 0.05;
        pic.src = images[curImage];
        tracks[curImage].volume = 1.0;
        tracks[curImage].play();

    }
    else{
        distortion = false;
        allTrackPause();
        tracksPrime[curImage].volume = tracksPrime[curImage].volume - 0.05;
        pic.src = imagesPrime[curImage];
        tracksPrime[curImage].volume = 1.0;
        tracksPrime[curImage].play();
    }
}

function zoomIn() {
    distortion = false;
    console.log(curWidth);
    console.log(curHeight);

    curWidth = curWidth-0.1*originalWidth;
    curHeight = curHeight- 0.1*originalHeight;
    
    if(distortion === false){
        tracks[curImage].volume = tracks[curImage].volume - 0.05;
    }
    else{
        tracksPrime[curImage].volume = tracksPrime[curImage].volume - 0.05;
    }

    pic.style.width = (curWidth)+"px";
    pic.style.height = (curHeight)+"px";

    if(curHeight < 0.2*originalHeight && curWidth<0.2*originalWidth) {
        console.log("change now!, current image is" + curImage);
        curImage++;
        curImage = curImage%images.length;
        if(distortion === false){ 
            pic.src = images[curImage];
        }
        else{
            pic.src = imagesPrime[curImage];
        }

        pic.style.width = 1280;
        pic.style.height = 720;
        
        curWidth = 1280;
        curHeight = 720;
        
        originalWidth = 1280;
        originalHeight = 720;
        
        allTrackPause();
        
        if(distortion === false){
            tracks[curImage].volume = 1.0;
            tracks[curImage].play();
        }
        else{
            tracksPrime[curImage].volume = 1.0;
            tracksPrime[curImage].play();
        }
        
    }

} 



