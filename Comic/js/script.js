let lines;
let allText;
let rawFile;
let dialogue;


function readTextFile(file)
{
    rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                allText = rawFile.responseText;
                lines = rawFile.responseText.split("\n"); // Will separate each line into an array
            }
        }
    }
    rawFile.send(null);
}

readTextFile("http://imanas.shanghai.nyu.edu/~arz268/communications-lab/Comic/dialogue.txt");
console.log("start time out...");
setTimeout(20000);
console.log(lines);


