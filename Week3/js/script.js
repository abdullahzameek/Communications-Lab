document.getElementById('toClick').onclick = 
function(){
    alert('Hi');
};

function boogieLeft(){
    document.getElementById('imageChange').src = "images/cat1.jpg";
}

function boogieRight(){
    document.getElementById('imageChange').src = "images/cat2.jpg";
}

function changeCaption(){
    document.getElementById('txt1').innerHTML = "This Is A LARGE Caption!";
    document.getElementById('txt1').style.color = "red";
    document.getElementById('txt1').style.borderStyle = "solid";
}
