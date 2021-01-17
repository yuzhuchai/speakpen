// console.log(width, height);
function setup(){
   
}


function draw(){
    
    let mainWdidth = document.getElementById("canvasContainer").offsetWidth
    let mainHeight = document.getElementById("canvasContainer").offsetHeight
    createCanvas(mainWdidth,mainHeight)
    // console.log(width, height);
    if(inputPen){
        text(cursorText, mouseX, mouseY)
    } else {
        text('pen', mouseX, mouseY)
    }
    
    // background(100,0,0)
}