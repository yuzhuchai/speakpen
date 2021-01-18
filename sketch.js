function setup(){
   
}


function draw(){
    // console.log(bgColor)
    // this sets the canvas size responsive -------------------------------------------------
    let mainWdidth = document.getElementById("canvasContainer").offsetWidth
    let mainHeight = document.getElementById("canvasContainer").offsetHeight
    createCanvas(mainWdidth,mainHeight)
    background(bgColor)
    // this sets the cursor text responsive -------------------------------------------------
    let c = color(cursorColor)
    c.setAlpha(alphaVal)
    fill(c)
    textSize(cursorSize)
    if(curosrBold && !cursorItalics){
        textStyle(BOLD)
    } else if (cursorItalics && !curosrBold){
        textStyle(ITALIC)
    } else if (curosrBold && cursorItalics){
        textStyle(BOLDITALIC)
    } else if(!curosrBold && !cursorItalics){
        textStyle(NORMAL)
    }
    if(inputPen){
        text(cursorText, mouseX, mouseY)
    } else {
        text('pen', mouseX, mouseY)
    }
}