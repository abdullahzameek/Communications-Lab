function proceed(){
  var audio = document.getElementById("audio");
  audio.play();
  document.getElementById("proceed").onclick = function () {
       location.href = "index1.html";
   };
}
