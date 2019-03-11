let dialogue = [];
let txtFile = new XMLHttpRequest();
txtFile.open("GET", "http://imanas.shanghai.nyu.edu/~arz268/communications-lab/Comic/dialogue.txt", true);

txtFile.onreadystatechange = function() {
  if (txtFile.readyState === 4) {  // Makes sure the document is ready to parse.
    if (txtFile.status === 200) {  // Makes sure it's found the file.
      allText = txtFile.responseText; 
      lines = txtFile.responseText.split("\n"); // Will separate each line into an array
      dialogue = lines.slice();
    }
  }
}
txtFile.send(null);
console.log(dialogue);