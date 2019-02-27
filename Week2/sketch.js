let cnv;
var screenW = window.innerWidth; //screen Width
var screenH = window.innerHeight; //screen Height
function setup() {
    cnv = createCanvas(screenW,600);
    cnv.parent('sketch-holder');
  }
  
  function draw() {
    if (mouseIsPressed) {
        fill(0,random(50,75),random(100,255));
        ellipse(mouseX, mouseY, 25, 25);
    }
  }

  function keyPressed() {
    if (keyCode === ENTER) {
      clear();
    }
}