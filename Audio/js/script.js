//global variable to set the base zoom level, can be changed depending how much you wanna change the zoom.
let zoomLvl = 100;
let pic = document.getElementById("image1");
let images = ["AudioAssets/1.gif","AudioAssets/2.jpg","AudioAssets/3.jpg","AudioAssets/4.jpg"];
let imagesPrime = ["AudioAssets/1_.gif","AudioAssets/2_.jpg","AudioAssets/3_.jpg","AudioAssets/4_.jpg"];
let messages = ["Maybe, it's time to leave...",
                "Do you hear it?",
                "How about now?",
                "What was that?"
                ];

//let audio = ["AudioAssets/1.wav","AudioAssets/2.wav","AudioAssets/3.wav","AudioAssets/4.wav"];
let curImage = 0
let curMessage = 0;
curMessage = curMessage%messages.length; 
let track1 = document.getElementById('player');
let track2 = document.getElementById('player2');
let track3 = document.getElementById('player3');
let track4 = document.getElementById('player4');
let btn = document.getElementById('btn1');


let track1Prime = document.getElementById('player1Prime');
let track2Prime = document.getElementById('player2Prime');
let track3Prime = document.getElementById('player3Prime');
let track4Prime = document.getElementById('player4Prime');


let tracks = [track1, track2,track3,track4];
let tracksPrime = [track1Prime, track2Prime,track3Prime,track4Prime];

//function that actually does the zoom thing\
let curWidth = 1024;
let curHeight = 576;
let originalHeight = 576;
let originalWidth = 1024;
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

function undistort(){
        allTrackPause();
        tracks[curImage].volume = tracks[curImage].volume - 0.05;
        pic.src = images[curImage];
        tracks[curImage].volume = 1.0;
        tracks[curImage].play();
        btn.innerHTML = messages[curMessage];


}

function distort(){
        allTrackPause();
        tracksPrime[curImage].volume = tracksPrime[curImage].volume - 0.05;
        pic.src = imagesPrime[curImage];
        tracksPrime[curImage].volume = 1.0;
        tracksPrime[curImage].play();
        btn.innerHTML = "<i> ? ? ? ? ? ? ? ? ? ? ? ? </i> ";
}

function zoomIn() {
    distortion = false;
    console.log(curWidth);
    console.log(curHeight);

    curWidth = curWidth-0.20*originalWidth;
    curHeight = curHeight- 0.20*originalHeight;
    
    if(distortion === false){
        tracks[curImage].volume = tracks[curImage].volume - 0.15;
    }
    else{
        tracksPrime[curImage].volume = tracksPrime[curImage].volume - 0.15;
    }

    pic.style.width = (curWidth)+"px";
    pic.style.height = (curHeight)+"px";
    curMessage = curMessage%messages.length; 
    console.log(messages[curMessage]);
    btn.innerHTML = messages[curMessage];
    curMessage++;

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

        pic.style.width = 1024;
        pic.style.height = 576;
        
        curWidth = 1024;
        curHeight = 576;
        
        originalWidth = 1024;
        originalHeight = 576;
        
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



