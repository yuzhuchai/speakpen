function setup(){
   
}


function draw(){
    // this sets the canvas size responsive -------------------------------------------------
    let mainWdidth = document.getElementById("canvasContainer").offsetWidth
    let mainHeight = document.getElementById("canvasContainer").offsetHeight
    createCanvas(mainWdidth,mainHeight)
    
    // this sets the cursor text responsive -------------------------------------------------
    fill(cursorColor)
    textSize(cursorSize)
    if(inputPen){
        text(cursorText, mouseX, mouseY)
    } else {
        text('pen', mouseX, mouseY)
    }
}