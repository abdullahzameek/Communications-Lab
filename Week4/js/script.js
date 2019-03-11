let leftText = "Blue";
let rightText = "Orange";
let centerText = "What is the Color?";
let nums = [1,2,3,4];

function changeText(){
    let x = event.clientX;
    let y = event.clientY;

    let w = window.innerWidth;


    let titleSpan = document.getElementById('title-text');
    let blueImg = document.getElementById('left-img');
    let orangeImg = document.getElementById('right-img');

    if (x<w/2){
        titleSpan.innerHTML = leftText;
        titleSpan.style.backgroundColor = 'blue';
        num =  nums[Math.floor(Math.random()*nums.length)];
        blueImg.src = "img/blue"+num.toString()+".jpg";
    }

    else if (x<=w/2 && x>=w/2){
        titleSpan.innerHTML = centerText;
        titleSpan.style.backgroundColor = 'black';    
    }
    
    else if (x>w/2){
        titleSpan.innerHTML = rightText;
        titleSpan.style.backgroundColor = 'orange';  
        num =  nums[Math.floor(Math.random()*nums.length)];
        orangeImg.src = "img/orange"+num.toString()+".jpg";  
    }

}