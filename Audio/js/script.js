//global variable to set the base zoom level, can be changed depending how much you wanna change the zoom.
let zoomLvl = 100;

//function that actually does the zoom thing
function toggleZoomScreen() {
    incZoom();
    //this line edits the default CSS zoom level. 
    //the thing on the right is just a way of formatting the number the right way. 
    document.body.style.zoom = zoomLvl.toString().concat("%");;

    //if you want to hardcode a value into the line above, it'll look
    //like this
    //document.body.style.zoom = "80%";
} 


//helper function that helps increment and decrement the zoom levels
function incZoom(){
    //if you add some number the picture gets smaller, subtract a no => vice versa
    zoomLvl = zoomLvl+50;
}
